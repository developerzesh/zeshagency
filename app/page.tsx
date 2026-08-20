import Home from "@/views/Home";
import { getAllPosts, getAllCaseStudies } from "@/lib/queries";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Zesh Agency — SEO, AEO & Growth Consultancy',
  description: 'Zesh Agency scales brands through SEO, AEO, web engineering, and high-converting growth systems. Trusted by ambitious brands worldwide.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Zesh Agency — SEO, AEO & Growth Consultancy',
    description: 'Zesh Agency scales brands through SEO, AEO, web engineering, and high-converting growth systems.',
  },
};

export default async function Page() {
  const [posts, caseStudies] = await Promise.all([getAllPosts(), getAllCaseStudies()]);
  return <Home posts={posts} caseStudies={caseStudies} />;
}
