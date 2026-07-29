import { notFound } from 'next/navigation';
import CityPage from '@/views/CityPage';
import { CITY_DATA } from '@/lib/cityData';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return Object.keys(CITY_DATA).map((key) => ({
    city: `city-${key}`,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const cityKey = resolvedParams.city.replace('city-', '');
  const data = CITY_DATA[cityKey as keyof typeof CITY_DATA];

  if (!data) {
    return {
      title: 'City Page Not Found | ZESH',
      description: 'The requested city service page is not available.',
    };
  }

  return {
    title: `Digital Marketing Agency in ${data.name} — Zesh Agency`,
    description: data.sub,
    openGraph: {
      title: `Digital Marketing Agency in ${data.name} — Zesh Agency`,
      description: data.sub,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const cityKey = resolvedParams.city.replace('city-', '');
  const isValidCity = cityKey in CITY_DATA;

  // If page URL does not start with city- or is not in CITY_DATA, trigger Next.js 404
  if (!resolvedParams.city.startsWith('city-') || !isValidCity) {
    notFound();
  }

  return <CityPage cityKey={cityKey} />;
}
