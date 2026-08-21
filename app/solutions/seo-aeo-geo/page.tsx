import SeoAeoGeoPage from '@/views/SeoAeoGeoPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zesh Agency | SEO, AEO & GEO Solutions, Future-Proof',
  description: 'Build a unified SEO, AEO, and GEO growth system with Zesh Agency that earns Google rankings, AI citations, and qualified leads.',
  alternates: {
    canonical: '/solutions/seo-aeo-geo',
  },
  openGraph: {
    title: 'Zesh Agency | SEO, AEO & GEO Solutions, Future-Proof',
  description: 'Build a unified SEO, AEO, and GEO growth system with Zesh Agency that earns Google rankings, AI citations, and qualified leads.',
  },
};

export default function Page() {
  return <SeoAeoGeoPage />;
}

