export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
}

export function extractToc(content: any[]): TocItem[] {
  if (!content) return [];
  return content
    .filter((block) => block._type === 'block' && ['h2', 'h3'].includes(block.style))
    .map((block) => {
      const text = block.children?.map((c: any) => c.text).join('') || '';
      return {
        id: slugify(text),
        text,
        level: block.style === 'h2' ? 2 : 3,
      };
    });
}