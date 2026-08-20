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
      title: 'Solution Not Found',
      description: 'The requested solution page is not available.',
    };
  }

  return {
    title: seoTitle(solution.title),
    description: seoDesc(solution.tagline),
    alternates: {
      canonical: `/solutions/${slug}`,
    },
    openGraph: {
      title: seoTitle(solution.title),
      description: seoDesc(solution.tagline),
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
