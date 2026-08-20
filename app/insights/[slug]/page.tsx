import { notFound } from 'next/navigation';
import InsightArticle from '@/views/InsightArticle';
import { insights } from '@/lib/data';
import { seoTitle, seoDesc } from '@/lib/seo';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insights.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = insights.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: 'Insight Not Found',
      description: 'The requested insight article is not available.',
    };
  }

  return {
    title: seoTitle(article.title),
    description: seoDesc(article.excerpt),
    alternates: {
      canonical: `/insights/${slug}`,
    },
    openGraph: {
      title: seoTitle(article.title),
      description: seoDesc(article.excerpt),
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const article = insights.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return <InsightArticle article={article} />;
}
