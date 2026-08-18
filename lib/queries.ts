// lib/queries.ts
import { client } from './sanity'
 
import { generateExcerpt } from './excert'

export async function getAllPosts() {
  const posts = await client.fetch(`*[_type == "blogPost"] | order(date desc){
    title,
    "slug": slug.current,
    category,
    date,
    readTime,
    image,
    content,
    "author": author->name,
    "authorRole": author->role,
    "authorAvatar": author->avatar
  }`)

  return posts.map((post: any) => ({
    ...post,
    excerpt: generateExcerpt(post.content),
    date: formatDate(post.date),
  }))
}

function formatDate(iso: string) {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

export async function getPostBySlug(slug: string) {
  return client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0]{
      title,
      "slug": slug.current,
      category,
      excerpt,
      content,
      image,
      tags,
      date,
      readTime,
      "author": author->{ name, role, avatar, bio }
    }`,
    { slug }
  );
}

// ── Jobs ──────────────────────────────────────────────────────────────────────

export async function getAllJobs() {
  return client.fetch(
    `*[_type == "jobOpening" && isActive == true] | order(postedAt desc){
      title,
      "slug": slug.current,
      department,
      location,
      jobType,
      description,
      applyLink,
      postedAt
    }`
  );
}