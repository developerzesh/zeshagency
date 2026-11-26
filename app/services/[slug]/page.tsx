import { notFound } from 'next/navigation';
import SolutionDetail from '@/views/SolutionDetail';
import { solutions } from '@/lib/data';
import { seoTitle, seoDesc } from '@/lib/seo';
import QuickCommerceServicePage from '@/views/QuickCommerceServicePage';
import { isQuickCommerceServiceSlug, QUICK_COMMERCE_SERVICES } from '@/lib/quickCommerce';
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

  const quickCommercePage = isQuickCommerceServiceSlug(slug) ? QUICK_COMMERCE_SERVICES[slug] : undefined;
  const title = quickCommercePage ? solution.title : `${solution.title} Services`;
  const description = quickCommercePage
    ? quickCommercePage.intro
    : `End-to-end ${solution.title.toLowerCase()} services from Zesh Agency, built to improve visibility, qualified traffic, and conversion.`;

  return {
    title: seoTitle(title),
    description: seoDesc(description),
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: seoTitle(title),
      description: seoDesc(description),
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);

  if (!solution) {
    notFound();
  }

  if (isQuickCommerceServiceSlug(slug)) {
    return <QuickCommerceServicePage solution={solution} serviceSlug={slug} />;
  }

  return <SolutionDetail solution={solution} />;
}

