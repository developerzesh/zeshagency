import SeoAeoGeoPage from '@/views/SeoAeoGeoPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO / AEO / GEO Solutions — Future-Proof Search',
  description: 'Combine SEO, AEO, and GEO into a single growth engine. Zesh Agency builds systems that rank on Google and get cited by AI.',
  alternates: {
    canonical: '/solutions/seo-aeo-geo',
  },
  openGraph: {
    title: 'SEO / AEO / GEO Solutions — Future-Proof Search',
    description: 'Combine SEO, AEO, and GEO into a single growth engine.',
  },
};

export default function Page() {
  return <SeoAeoGeoPage />;
}
