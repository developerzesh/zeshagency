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
      title: 'Solution Not Found | Zesh Agency',
      description: 'The requested solution page is not available.',
    };
  }

  const quickCommercePage = isQuickCommerceServiceSlug(slug) ? QUICK_COMMERCE_SERVICES[slug] : undefined;
  const canonical = quickCommercePage ? `/services/${slug}` : `/solutions/${slug}`;
  const title = quickCommercePage ? solution.title : `${solution.title} Strategy`;
  const description = quickCommercePage
    ? quickCommercePage.intro
    : `See how Zesh Agency turns ${solution.title.toLowerCase()} into compounding growth, qualified traffic, and revenue.`;

  return {
    title: seoTitle(title),
    description: seoDesc(description),
    alternates: {
      canonical,
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
