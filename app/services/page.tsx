import Solutions from '@/views/Solutions';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing Services — SEO, AEO & Web Dev',
  description: 'Zesh Agency offers SEO, AEO, GEO, web development, Google Ads, lead generation, and social media management services for ambitious brands.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Digital Marketing Services — SEO, AEO & Web Dev',
    description: 'Zesh Agency offers SEO, AEO, GEO, web development, Google Ads, lead generation, and social media management services.',
  },
};

export default function ServicesPage() {
  return <Solutions />;
}
