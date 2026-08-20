// app/blog/page.tsx
import Blog from "@/views/Blog";
import { getAllPosts } from "@/lib/queries";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Blog — SEO, AEO & Growth Insights from Zesh Agency',
  description: 'Expert insights on SEO, AEO, GEO, web development, and digital growth strategy from Zesh Agency. Stay ahead of search evolution.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Blog — SEO, AEO & Growth Insights from Zesh Agency',
    description: 'Expert insights on SEO, AEO, GEO, web development, and digital growth strategy.',
  },
};

export default async function Page() {
  const posts = await getAllPosts();
  return <Blog posts={posts} />;
}