import { Suspense } from 'react';
import WorkDetail from "@/views/WorkDetail";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Zesh Agency Portfolio | Client Case Studies & Work',
  description: 'See how Zesh Agency blends advanced SEO, web engineering, and growth strategy to ship high-performance work for ambitious brands.',
  alternates: {
    canonical: '/work',
  },
  openGraph: {
    title: 'Zesh Agency Portfolio | Client Case Studies & Work',
    description: 'See how Zesh Agency blends advanced SEO, web engineering, and growth strategy to ship high-performance work for ambitious brands.',
  },
};

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-paper flex items-center justify-center font-lato text-sm text-ink/50">Loading...</div>}>
      <WorkDetail />
    </Suspense>
  );
}
