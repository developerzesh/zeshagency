import Solutions from '@/views/Solutions';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zesh Agency | Digital Marketing Services, SEO & AEO',
  description: 'Explore Zesh Agency services for SEO, AEO, GEO, web development, Google Ads, lead generation, and social media management for ambitious brands.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Zesh Agency | Digital Marketing Services, SEO & AEO',
    description: 'Explore Zesh Agency services for SEO, AEO, GEO, web development, Google Ads, lead generation, and social media management for ambitious brands.',
  },
};

export default function ServicesPage() {
  return <Solutions />;
}

