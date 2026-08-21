import { notFound } from 'next/navigation';
import IndustryDetail from '@/views/IndustryDetail';
import { industries } from '@/lib/data';
import { seoTitle, seoDesc } from '@/lib/seo';
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
      title: 'Industry Not Found | Zesh Agency',
      description: 'The requested industry page is not available.',
    };
  }

  return {
    title: seoTitle(`${industry.title} Digital Marketing`),
    description: seoDesc(industry.tagline, `${industry.title} digital marketing`),
    alternates: {
      canonical: `/industries/${slug}`,
    },
    openGraph: {
      title: seoTitle(`${industry.title} Digital Marketing`),
      description: seoDesc(industry.tagline, `${industry.title} digital marketing`),
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

