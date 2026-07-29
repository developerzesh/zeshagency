import { notFound } from 'next/navigation';
import CityPage from '@/views/CityPage';
import ServiceCityPage from '@/views/ServiceCityPage';
import { CITY_DATA } from '@/lib/cityData';
import { SERVICE_CITY_SLUG_MAP, getServiceCityData, VALID_SERVICE_CITY_SLUGS } from '@/lib/serviceCityData';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  const cityParams = Object.keys(CITY_DATA).map((key) => ({
    city: `city-${key}`,
  }));

  const serviceCityParams = Object.keys(SERVICE_CITY_SLUG_MAP).map((slug) => ({
    city: slug,
  }));

  return [...cityParams, ...serviceCityParams];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const rawParam = resolvedParams.city;

  if (rawParam.startsWith('city-')) {
    const cityKey = rawParam.replace('city-', '');
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

  if (VALID_SERVICE_CITY_SLUGS.has(rawParam)) {
    const { serviceKey, cityKey } = SERVICE_CITY_SLUG_MAP[rawParam];
    const data = getServiceCityData(serviceKey, cityKey);

    return {
      title: `${data.serviceTitle} in ${data.cityName} — Zesh Agency`,
      description: data.sub,
      openGraph: {
        title: `${data.serviceTitle} in ${data.cityName} — Zesh Agency`,
        description: data.sub,
      },
    };
  }

  return {
    title: 'Page Not Found | ZESH',
    description: 'The requested page is not available.',
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const rawParam = resolvedParams.city;

  // Case 1: Simple city page (e.g. /city-dubai)
  if (rawParam.startsWith('city-')) {
    const cityKey = rawParam.replace('city-', '');
    const isValidCity = cityKey in CITY_DATA;

    if (!isValidCity) {
      notFound();
    }

    return <CityPage cityKey={cityKey} />;
  }

  // Case 2: Service specific city page (e.g. /seo-aeo-geo_in_dubai)
  if (VALID_SERVICE_CITY_SLUGS.has(rawParam)) {
    const { serviceKey, cityKey } = SERVICE_CITY_SLUG_MAP[rawParam];
    return <ServiceCityPage serviceKey={serviceKey} cityKey={cityKey} />;
  }

  // Otherwise trigger Next.js 404
  notFound();
}
