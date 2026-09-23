export type BlogLike = { slug: string; category?: string; tags?: string[] };
export type CaseStudyLike = { slug: string; industry?: string; services?: string[] };

export function pickRelated<T extends { slug: string }>(
  all: T[],
  current: T,
  score: (item: T) => number,
  n: number
): T[] {
  return all
    .filter((item) => item.slug !== current.slug)
    .map((item) => ({ item, score: score(item) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, n)
    .map((entry) => entry.item);
}

export function blogRelevance(post: BlogLike, current: BlogLike): number {
  let score = post.category && post.category === current.category ? 3 : 0;
  if (post.tags && current.tags) {
    for (const tag of post.tags) {
      if (current.tags.includes(tag)) score += 1;
    }
  }
  return score;
}

export function caseStudyRelevance(cs: CaseStudyLike, current: CaseStudyLike): number {
  let score = cs.industry && cs.industry === current.industry ? 2 : 0;
  if (cs.services && current.services) {
    for (const service of cs.services) {
      if (current.services.includes(service)) score += 1;
    }
  }
  return score;
}
