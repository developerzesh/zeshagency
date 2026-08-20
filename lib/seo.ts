// SEO metadata enforcement utilities

const TITLE_LIMIT = 60;
const DESC_LIMIT = 160;
const SUFFIX = ' — Zesh Agency';
const SUFFIX_LEN = SUFFIX.length; // 16

/**
 * Truncate a title so the final rendered title (with suffix) is ≤ 60 chars.
 * Final format: "{title} — Zesh Agency"
 */
export function seoTitle(raw: string | null | undefined): string {
  const fallback = 'Blog Post';
  const text = raw || fallback;
  const maxBase = TITLE_LIMIT - SUFFIX_LEN; // 44
  const trimmed = text.length > maxBase ? text.slice(0, maxBase).trimEnd() : text;
  return `${trimmed}${SUFFIX}`;
}

/**
 * Truncate a meta description to ≤ 160 chars, breaking at a word boundary.
 * Returns a fallback if the input is empty/null.
 */
export function seoDesc(raw: string | null | undefined): string {
  const fallback = 'Zesh Agency — strategic growth consultancy for ambitious brands.';
  const text = raw || fallback;
  if (text.length <= DESC_LIMIT) return text;
  const truncated = text.slice(0, DESC_LIMIT);
  const lastSpace = truncated.lastIndexOf(' ');
  return (lastSpace > 120 ? truncated.slice(0, lastSpace) : truncated).trimEnd();
}
