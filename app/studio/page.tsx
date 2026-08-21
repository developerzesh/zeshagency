import Studio from "@/views/Studio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Zesh Agency Studio | Brand Design & Visual Strategy',
  description: 'Zesh Agency Studio shapes brand identity, creative direction, and design systems for high-growth companies and ambitious brands.',
  alternates: {
    canonical: '/studio',
  },
  openGraph: {
    title: 'Zesh Agency Studio | Brand Design & Visual Strategy',
    description: 'Zesh Agency Studio shapes brand identity, creative direction, and design systems for high-growth companies and ambitious brands.',
  },
};

export default function Page() {
    return <Studio />;
}

