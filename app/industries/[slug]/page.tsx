import { notFound } from 'next/navigation';
import IndustryDetail from '@/views/IndustryDetail';
import { industries } from '@/lib/data';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    return {
      title: 'Industry Not Found | ZESH',
      description: 'The requested industry page is not available.',
    };
  }

  return {
    title: `${industry.title} Digital Marketing — Zesh Agency`,
    description: industry.tagline,
    openGraph: {
      title: `${industry.title} Digital Marketing — Zesh Agency`,
      description: industry.tagline,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    notFound();
  }

  return <IndustryDetail industry={industry} />;
}
