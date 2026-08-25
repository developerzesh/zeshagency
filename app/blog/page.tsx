// app/blog/page.tsx
import Blog from "@/views/Blog";
import { getAllPosts } from "@/lib/queries";
import type { Metadata } from "next";

export const revalidate = false;

export const metadata: Metadata = {
  title: 'Zesh Agency Blog | SEO, AEO & Search Growth Insights',
  description: 'Read SEO, AEO, GEO, and web growth insights from Zesh Agency, with strategies built for rankings, conversions, and AI search.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Zesh Agency Blog | SEO, AEO & Search Growth Insights',
    description: 'Read SEO, AEO, GEO, and web growth insights from Zesh Agency, with strategies built for rankings, conversions, and AI search.',
  },
};

export default async function Page() {
  const posts = await getAllPosts();
  return <Blog posts={posts} />;
}
