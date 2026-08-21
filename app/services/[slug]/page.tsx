import { notFound } from 'next/navigation';
import SolutionDetail from '@/views/SolutionDetail';
import { solutions } from '@/lib/data';
import { seoTitle, seoDesc } from '@/lib/seo';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);

  if (!solution) {
    return {
      title: 'Service Not Found | Zesh Agency',
      description: 'The requested service page is not available.',
    };
  }

  return {
    title: seoTitle(`${solution.title} Services`),
    description: seoDesc(`End-to-end ${solution.title.toLowerCase()} services from Zesh Agency, built to improve visibility, qualified traffic, and conversion.`),
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: seoTitle(`${solution.title} Services`),
      description: seoDesc(`End-to-end ${solution.title.toLowerCase()} services from Zesh Agency, built to improve visibility, qualified traffic, and conversion.`),
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);

  if (!solution) {
    notFound();
  }

  return <SolutionDetail solution={solution} />;
}

