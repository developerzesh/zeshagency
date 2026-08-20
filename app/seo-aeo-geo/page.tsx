import SeoAeoGeoPage from '@/views/SeoAeoGeoPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO / AEO / GEO — Unified Search Strategy',
  description: 'Unify SEO, Answer Engine Optimization, and Generative Engine Optimization into one future-proof strategy with Zesh Agency.',
  alternates: {
    canonical: '/seo-aeo-geo',
  },
  openGraph: {
    title: 'SEO / AEO / GEO — Unified Search Strategy',
    description: 'Unify SEO, Answer Engine Optimization, and Generative Engine Optimization into one future-proof strategy.',
  },
};

export default function Page() {
  return <SeoAeoGeoPage />;
}
