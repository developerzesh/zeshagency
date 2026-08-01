import { notFound } from 'next/navigation';
import CaseStudyDetail from '@/views/CaseStudyDetail';
import { caseStudies } from '@/lib/data';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found | ZESH',
      description: 'The requested case study page is not available.',
    };
  }

  return {
    title: `${caseStudy.title} — Zesh Agency`,
    description: caseStudy.summary,
    openGraph: {
      title: `${caseStudy.title} — Zesh Agency`,
      description: caseStudy.summary,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyDetail caseStudy={caseStudy} />;
}
