import { notFound } from 'next/navigation';
import ServiceCityPage from '@/views/ServiceCityPage';
import { SERVICE_CITY_SLUG_MAP, getServiceCityData, VALID_SERVICE_CITY_SLUGS } from '@/lib/serviceCityData';
import { CITY_DATA } from '@/lib/cityData';
import { seoTitle, seoDesc } from '@/lib/seo';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ city: string; service: string }>;
}

export async function generateStaticParams() {
  return Object.keys(SERVICE_CITY_SLUG_MAP).map((slug) => {
    const [city, service] = slug.split('/');
    return { city, service };
  });
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = `${resolvedParams.city}/${resolvedParams.service}`;

  if (VALID_SERVICE_CITY_SLUGS.has(slug)) {
    const { serviceKey, cityKey } = SERVICE_CITY_SLUG_MAP[slug];
    const data = getServiceCityData(serviceKey, cityKey);

    return {
      title: seoTitle(`${data.serviceTitle} in ${data.cityName}`),
      description: seoDesc(`Zesh Agency delivers ${data.serviceTitle} in ${data.cityName} for brands that want stronger visibility, more leads, and measurable growth.`),
      alternates: {
        canonical: `/location/${resolvedParams.city}/${resolvedParams.service}`,
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
  const slug = `${resolvedParams.city}/${resolvedParams.service}`;

  if (VALID_SERVICE_CITY_SLUGS.has(slug)) {
    const { serviceKey, cityKey } = SERVICE_CITY_SLUG_MAP[slug];
    return <ServiceCityPage serviceKey={serviceKey} cityKey={cityKey} />;
  }

  notFound();
}

