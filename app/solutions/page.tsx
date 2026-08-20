import Solutions from "@/views/Solutions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Solutions — SEO, AEO, GEO & Growth Systems',
  description: 'Explore Zesh Agency solutions: SEO, AEO, GEO, web development, Google Ads, lead generation, and strategic consultation for measurable growth.',
  alternates: {
    canonical: '/solutions',
  },
  openGraph: {
    title: 'Solutions — SEO, AEO, GEO & Growth Systems',
    description: 'SEO, AEO, GEO, web development, and growth systems for measurable results.',
  },
};

export default function Page() {
  return <Solutions />;
}
