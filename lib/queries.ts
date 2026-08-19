// lib/queries.ts
import { fetchSanity } from './sanity'
 
import { generateExcerpt } from './excert'

export async function getAllPosts() {
  const posts = await fetchSanity(`*[_type == "blogPost"] | order(date desc){
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
  return fetchSanity(
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
  return fetchSanity(
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

// ── Case Studies ──────────────────────────────────────────────────────────────

const INDUSTRY_SLUGS: Record<string, string> = {
  'SaaS': 'saas',
  'Healthcare & Medical': 'healthcare-medical',
  'Architecture & Design': 'architecture-design',
  'Technology & AI': 'technology-ai',
  'Real Estate & Development': 'real-estate-development',
  'Restaurants & Cafes': 'restaurants-cafes',
  'Fashion & Apparel': 'fashion-apparel',
  'B2B Services': 'b2b-services',
  'B2C Brands': 'b2c-brands',
};

function getIndustrySlug(industry: string) {
  return INDUSTRY_SLUGS[industry] || industry.toLowerCase().replace(/[\s&+]+/g, '-');
}

export async function getAllCaseStudies() {
  const studies = await fetchSanity(
    `*[_type == "caseStudy"] | order(date asc){
      title,
      "slug": slug.current,
      client,
      industry,
      services,
      summary,
      overview,
      challenge,
      solution,
      strategy,
      execution,
      outcomes,
      conclusion,
      results,
      image
    }`
  );
  return studies.map((cs: any) => ({
    ...cs,
    industrySlug: getIndustrySlug(cs.industry),
  }));
}

export async function getCaseStudyBySlug(slug: string) {
  const cs = await fetchSanity(
    `*[_type == "caseStudy" && slug.current == $slug][0]{
      title,
      "slug": slug.current,
      client,
      industry,
      services,
      summary,
      overview,
      challenge,
      solution,
      strategy,
      execution,
      outcomes,
      conclusion,
      results,
      image
    }`,
    { slug }
  );
  if (cs) {
    cs.industrySlug = getIndustrySlug(cs.industry);
  }
  return cs;
}