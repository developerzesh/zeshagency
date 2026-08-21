import { notFound } from 'next/navigation';
import ServiceCityPage from '@/views/ServiceCityPage';
import { SERVICE_CITY_SLUG_MAP, getServiceCityData, VALID_SERVICE_CITY_SLUGS } from '@/lib/serviceCityData';
import { seoTitle, seoDesc } from '@/lib/seo';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return Object.keys(SERVICE_CITY_SLUG_MAP).map((slug) => ({
    city: slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const rawParam = resolvedParams.city;

  if (VALID_SERVICE_CITY_SLUGS.has(rawParam)) {
    const { serviceKey, cityKey } = SERVICE_CITY_SLUG_MAP[rawParam];
    const data = getServiceCityData(serviceKey, cityKey);

    return {
      title: seoTitle(`${data.serviceTitle} in ${data.cityName}`),
      description: seoDesc(`Zesh Agency delivers ${data.serviceTitle} in ${data.cityName} for brands that want stronger visibility, more leads, and measurable growth.`),
      alternates: {
        canonical: `/${rawParam}`,
      },
      openGraph: {
        title: seoTitle(`${data.serviceTitle} in ${data.cityName}`),
        description: seoDesc(`Zesh Agency delivers ${data.serviceTitle} in ${data.cityName} for brands that want stronger visibility, more leads, and measurable growth.`),
      },
    };
  }

  return {
    title: 'Page Not Found | Zesh Agency',
    description: 'The requested page is not available.',
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const rawParam = resolvedParams.city;

  if (VALID_SERVICE_CITY_SLUGS.has(rawParam)) {
    const { serviceKey, cityKey } = SERVICE_CITY_SLUG_MAP[rawParam];
    return <ServiceCityPage serviceKey={serviceKey} cityKey={cityKey} />;
  }

  notFound();
}
