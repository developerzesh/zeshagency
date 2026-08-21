import Industries from "@/views/Industries";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Zesh Agency | Industry Growth Strategy, SaaS & Healthcare',
  description: 'Tailored growth strategies from Zesh Agency for SaaS, healthcare, real estate, B2B services, fashion, restaurants, and technology brands.',
  alternates: {
    canonical: '/industries',
  },
  openGraph: {
    title: 'Zesh Agency | Industry Growth Strategy, SaaS & Healthcare',
    description: 'Tailored growth strategies from Zesh Agency for SaaS, healthcare, real estate, B2B services, fashion, restaurants, and technology brands.',
  },
};

export default function Page() {
  return <Industries />;
}

