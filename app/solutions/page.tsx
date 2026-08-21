import Solutions from "@/views/Solutions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Zesh Agency | Growth Solutions, SEO, AEO & GEO',
  description: 'See how Zesh Agency combines SEO, AEO, GEO, web development, and paid growth into measurable systems for ambitious brands worldwide.',
  alternates: {
    canonical: '/solutions',
  },
  openGraph: {
    title: 'Zesh Agency | Growth Solutions, SEO, AEO & GEO',
    description: 'See how Zesh Agency combines SEO, AEO, GEO, web development, and paid growth into measurable systems for ambitious brands worldwide.',
  },
};

export default function Page() {
  return <Solutions />;
}

