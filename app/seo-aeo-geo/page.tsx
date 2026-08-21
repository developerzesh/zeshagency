import SeoAeoGeoPage from '@/views/SeoAeoGeoPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zesh Agency | Unified SEO, AEO & GEO Search Strategy',
  description: 'Unify SEO, Answer Engine Optimization, and Generative Engine Optimization into one future-proof search strategy with Zesh Agency.',
  alternates: {
    canonical: '/seo-aeo-geo',
  },
  openGraph: {
    title: 'Zesh Agency | Unified SEO, AEO & GEO Search Strategy',
    description: 'Unify SEO, Answer Engine Optimization, and Generative Engine Optimization into one future-proof search strategy with Zesh Agency.',
  },
};

export default function Page() {
  return <SeoAeoGeoPage />;
}
