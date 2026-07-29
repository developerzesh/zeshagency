import SeoAeoGeoPage from '@/views/SeoAeoGeoPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO / AEO / GEO Services — Zesh Agency',
  description: 'Unify Search Engine Optimization, Answer Engine Optimization, and Generative Engine Optimization into one future-proof strategy.',
  openGraph: {
    title: 'SEO / AEO / GEO Services — Zesh Agency',
    description: 'Unify Search Engine Optimization, Answer Engine Optimization, and Generative Engine Optimization into one future-proof strategy.',
  },
};

export default function Page() {
  return <SeoAeoGeoPage />;
}
