import CaseStudies from "@/views/CaseStudies";
import { getAllCaseStudies } from "@/lib/queries";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Case Studies — Proven Growth Results from Zesh Agency',
  description: 'Explore case studies from Zesh Agency. See how we drove 312% organic traffic growth, $45M+ in client revenue, and Map Pack dominance across industries.',
  alternates: {
    canonical: '/case-studies',
  },
  openGraph: {
    title: 'Case Studies — Proven Growth Results from Zesh Agency',
    description: 'Explore case studies from Zesh Agency. See real results across SaaS, healthcare, real estate, and more.',
  },
};

export default async function Page() {
  const caseStudies = await getAllCaseStudies();
  return <CaseStudies caseStudies={caseStudies} />;
}
