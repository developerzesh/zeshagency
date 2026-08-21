import { notFound } from 'next/navigation';
import CityPage from '@/views/CityPage';
import { CITY_DATA } from '@/lib/cityData';
import { seoTitle, seoDesc } from '@/lib/seo';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return Object.keys(CITY_DATA).map((key) => ({
    city: key,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const cityKey = resolvedParams.city;
  const data = CITY_DATA[cityKey as keyof typeof CITY_DATA];

  if (!data) {
    return {
      title: 'City Not Found | Zesh Agency',
      description: 'The requested city page is not available.',
    };
  }

  return {
    title: seoTitle(`${data.name} Digital Marketing Agency`),
    description: seoDesc(`Digital marketing services in ${data.name} built to drive qualified leads, local visibility, and revenue growth.`),
    alternates: {
      canonical: `/location/${cityKey}`,
    },
    openGraph: {
      title: seoTitle(`${data.name} Digital Marketing Agency`),
      description: seoDesc(`Digital marketing services in ${data.name} built to drive qualified leads, local visibility, and revenue growth.`),
    },
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const cityKey = resolvedParams.city;

  const isValidCity = cityKey in CITY_DATA;
  if (!isValidCity) {
    notFound();
  }

  return <CityPage cityKey={cityKey} />;
}

