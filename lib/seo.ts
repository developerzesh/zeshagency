// SEO metadata enforcement utilities

export const TITLE_MIN = 46;
export const TITLE_MAX = 61;
export const DESC_MIN = 121;
export const DESC_MAX = 159;
export const TITLE_SUFFIX = ' | Zesh Agency';
export const TITLE_SUFFIX_LEN = TITLE_SUFFIX.length;
export const TITLE_FALLBACK = 'Strategic Digital Growth & Search Strategy';
export const DESC_FALLBACK =
  'Zesh Agency builds advanced SEO, AEO, and GEO search systems that scale organic visibility, high-intent traffic, and pipeline revenue for ambitious global brands.';

function normalizeText(value: string): string {
  return value.replace(/\s+/g, ' ').trim();
}

/**
 * Strips any occurrence of "Zesh Agency" and trailing/leading separators from the raw string
 * to prevent duplicate brand occurrences like "Zesh Agency | ... | Zesh Agency".
 */
export function cleanBrand(raw: string): string {
  return normalizeText(
    raw
      .replace(/zesh\s*agency/gi, '')
      .replace(/^[\s|\-–—:]+|[\s|\-–—:]+$/g, '')
      .replace(/\s{2,}/g, ' ')
  );
}

function truncateAtWordBoundary(value: string, limit: number): string {
  const normalized = normalizeText(value);
  if (normalized.length <= limit) return normalized;

  const slice = normalized.slice(0, limit + 1).trimEnd();
  const lastSpace = slice.lastIndexOf(' ');
  if (lastSpace > Math.floor(limit * 0.6)) {
    return slice.slice(0, lastSpace).trimEnd();
  }

  return slice.slice(0, limit).trimEnd();
}

/**
 * Enforces title length between 46 and 61 characters with brand suffix appearing exactly once.
 */
export function seoTitle(raw: string | null | undefined): string {
  let base = cleanBrand(raw || TITLE_FALLBACK);

  if (!base) {
    base = 'SEO, AEO & Growth Strategy Consultancy';
  }

  // If already long, truncate base to fit TITLE_MAX with suffix
  const maxBaseLen = TITLE_MAX - TITLE_SUFFIX_LEN; // 61 - 15 = 46
  if (base.length > maxBaseLen) {
    base = truncateAtWordBoundary(base, maxBaseLen);
  }

  let candidate = `${base}${TITLE_SUFFIX}`;

  // If candidate is too short (< 46 chars), intelligently expand the base
  if (candidate.length < TITLE_MIN) {
    // Add descriptive modifiers if suitable
    if (!/services|agency|solutions|strategy|consulting|growth/i.test(base)) {
      const expanded = `${base} Solutions`;
      if (`${expanded}${TITLE_SUFFIX}`.length <= TITLE_MAX && `${expanded}${TITLE_SUFFIX}`.length >= TITLE_MIN) {
        candidate = `${expanded}${TITLE_SUFFIX}`;
      }
    }
  }

  if (candidate.length < TITLE_MIN) {
    if (/in\s+[a-z\s]+/i.test(base) && !/agency|consulting|services/i.test(base)) {
      const withAgency = base.replace(/(in\s+[a-z\s]+)/i, 'Services $1');
      if (`${withAgency}${TITLE_SUFFIX}`.length <= TITLE_MAX && `${withAgency}${TITLE_SUFFIX}`.length >= TITLE_MIN) {
        candidate = `${withAgency}${TITLE_SUFFIX}`;
      }
    }
  }

  if (candidate.length < TITLE_MIN) {
    // Prefix or suffix modifier to bring to range
    const expanded = `Strategic ${base}`;
    if (`${expanded}${TITLE_SUFFIX}`.length <= TITLE_MAX) {
      candidate = `${expanded}${TITLE_SUFFIX}`;
    }
  }

  if (candidate.length < TITLE_MIN) {
    candidate = `${candidate} for Brands`;
    if (candidate.length > TITLE_MAX) {
      candidate = candidate.slice(0, TITLE_MAX).trimEnd();
    }
  }

  return candidate;
}

/**
 * Enforces meta description length strictly between 121 and 159 characters.
 * Ensures the description is a complete, well-formed sentence without cutoff.
 */
export function seoDesc(raw: string | null | undefined, subject?: string): string {
  let text = normalizeText(raw || DESC_FALLBACK);

  // If under minimum (121 chars), expand with subject or brand context
  if (text.length < DESC_MIN && subject) {
    const cleanSub = cleanBrand(subject);
    if (!text.toLowerCase().includes(cleanSub.toLowerCase())) {
      text = normalizeText(`${cleanSub}: ${text}`);
    }
  }

  if (text.length < DESC_MIN) {
    const suffixes = [
      ' Partner with Zesh Agency to build scalable, high-converting digital growth engines.',
      ' Delivered with senior-only execution and measurable pipeline growth by Zesh Agency.',
      ' Designed and engineered by Zesh Agency for ambitious high-growth brands worldwide.',
    ];
    for (const suffix of suffixes) {
      const candidate = normalizeText(`${text.replace(/\.*$/, '.')}${suffix}`);
      if (candidate.length >= DESC_MIN && candidate.length <= DESC_MAX) {
        text = candidate;
        break;
      }
    }
  }

  if (text.length < DESC_MIN) {
    text = DESC_FALLBACK;
  }

  // If over 159 chars, truncate cleanly at sentence boundary or clause boundary
  if (text.length > DESC_MAX) {
    // Try first full sentence
    const sentenceMatch = text.slice(0, DESC_MAX + 1).match(/^.*?[.!?](?:\s|$)/);
    if (sentenceMatch && sentenceMatch[0].trim().length >= DESC_MIN && sentenceMatch[0].trim().length <= DESC_MAX) {
      return sentenceMatch[0].trim();
    }

    // Try clause boundary (comma, semicolon, dash)
    const clauseSlice = text.slice(0, DESC_MAX - 1).trimEnd();
    const lastPunct = Math.max(clauseSlice.lastIndexOf(','), clauseSlice.lastIndexOf(';'), clauseSlice.lastIndexOf('—'));
    if (lastPunct >= DESC_MIN) {
      return `${clauseSlice.slice(0, lastPunct).trimEnd()}.`;
    }

    // Word boundary fallback
    const wordTrim = truncateAtWordBoundary(text, DESC_MAX - 1);
    return `${wordTrim.replace(/[,\s–—]+$/, '')}.`;
  }

  return text;
}
