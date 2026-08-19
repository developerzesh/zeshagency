import { notFound } from 'next/navigation';
import CaseStudyDetail from '@/views/CaseStudyDetail';
import { getAllCaseStudies, getCaseStudyBySlug } from '@/lib/queries';
import type { Metadata } from 'next';

export const revalidate = 3600;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const caseStudies = await getAllCaseStudies();
  return caseStudies.map((cs: any) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);

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
  const caseStudy = await getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const allCaseStudies = await getAllCaseStudies();
  const related = allCaseStudies.filter((cs: any) => cs.slug !== slug).slice(0, 2);

  return <CaseStudyDetail caseStudy={caseStudy} related={related} />;
}
