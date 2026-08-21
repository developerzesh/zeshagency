import Insights from "@/views/Insights";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Zesh Agency Insights | AI Search, SEO & Strategy',
  description: 'In-depth articles from Zesh Agency on AI search optimization, LLM citations, SEO strategy, and digital growth for ambitious brands.',
  alternates: {
    canonical: '/insights',
  },
  openGraph: {
    title: 'Zesh Agency Insights | AI Search, SEO & Strategy',
    description: 'In-depth articles from Zesh Agency on AI search optimization, LLM citations, SEO strategy, and digital growth for ambitious brands.',
  },
};

export default function Page() {
  return <Insights />;
}

