import Home from "@/views/Home";
import { getAllPosts, getAllCaseStudies } from "@/lib/queries";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Zesh Agency | SEO, AEO & Growth Consultancy for Brands',
  description: 'Zesh Agency builds SEO, AEO, GEO, and high-converting web systems that turn search visibility into qualified leads and revenue.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Zesh Agency | SEO, AEO & Growth Consultancy for Brands',
    description: 'Zesh Agency builds SEO, AEO, GEO, and high-converting web systems that turn search visibility into qualified leads and revenue.',
  },
};

export default async function Page() {
  const [posts, caseStudies] = await Promise.all([getAllPosts(), getAllCaseStudies()]);
  return <Home posts={posts} caseStudies={caseStudies} />;
}

