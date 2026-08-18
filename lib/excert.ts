// lib/excerpt.ts
export function generateExcerpt(content: any[], wordCount = 32): string {
  const firstParagraph = content?.find(
    (block) => block._type === 'block' && block.style === 'normal'
  )
  if (!firstParagraph) return ''

  const text = firstParagraph.children.map((c: any) => c.text).join('')
  const words = text.trim().split(/\s+/)
  return words.length > wordCount
    ? words.slice(0, wordCount).join(' ') + '…'
    : text
}