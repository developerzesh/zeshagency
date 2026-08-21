import CaseStudies from "@/views/CaseStudies";
import { getAllCaseStudies } from "@/lib/queries";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Zesh Agency Case Studies | Proven Growth Results',
  description: 'Explore case studies showing how Zesh Agency drives organic growth, pipeline expansion, Map Pack wins, and revenue impact across industries.',
  alternates: {
    canonical: '/case-studies',
  },
  openGraph: {
    title: 'Zesh Agency Case Studies | Proven Growth Results',
    description: 'Explore case studies showing how Zesh Agency drives organic growth, pipeline expansion, Map Pack wins, and revenue impact across industries.',
  },
};

export default async function Page() {
  const caseStudies = await getAllCaseStudies();
  return <CaseStudies caseStudies={caseStudies} />;
}

