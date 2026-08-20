import { Suspense } from 'react';
import WorkDetail from "@/views/WorkDetail";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Our Work — Zesh Agency Portfolio',
  description: 'Explore the work of Zesh Agency. High-performance web engineering, SEO systems, and growth strategies for ambitious brands.',
  alternates: {
    canonical: '/work',
  },
  openGraph: {
    title: 'Our Work — Zesh Agency Portfolio',
    description: 'Explore the work of Zesh Agency. High-performance growth strategies for ambitious brands.',
  },
};

export default function Page() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-paper flex items-center justify-center font-lato text-sm text-ink/50">Loading...</div>}>
            <WorkDetail />
        </Suspense>
    );
}
