import Industries from "@/views/Industries";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Industries We Serve — SaaS, Healthcare, Real Estate & More',
  description: 'Zesh Agency delivers tailored growth strategies for SaaS, healthcare, real estate, B2B services, fashion, restaurants, and technology companies.',
  alternates: {
    canonical: '/industries',
  },
  openGraph: {
    title: 'Industries We Serve — SaaS, Healthcare, Real Estate & More',
    description: 'Tailored growth strategies for SaaS, healthcare, real estate, B2B services, and more.',
  },
};

export default function Page() {
  return <Industries />;
}
