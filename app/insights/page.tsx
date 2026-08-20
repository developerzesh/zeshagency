import Insights from "@/views/Insights";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Insights — AI Search, SEO & Growth Strategy Articles',
  description: 'In-depth articles on AI search optimization, LLM citations, SEO strategy, and digital growth from Zesh Agency experts.',
  alternates: {
    canonical: '/insights',
  },
  openGraph: {
    title: 'Insights — AI Search, SEO & Growth Strategy Articles',
    description: 'In-depth articles on AI search optimization, SEO strategy, and digital growth.',
  },
};

export default function Page() {
  return <Insights />;
}
