import { notFound } from 'next/navigation';
import CaseStudyDetail from '@/views/CaseStudyDetail';
import { getAllCaseStudies, getCaseStudyBySlug } from '@/lib/queries';
import { seoTitle, seoDesc } from '@/lib/seo';
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
      title: 'Case Study Not Found | Zesh Agency',
      description: 'The requested case study page is not available.',
    };
  }

  const descriptions: Record<string, string> = {
    'b2b-saas-pipeline-expansion':
      'See how Zesh Agency turned a paid-channel-heavy SaaS platform into a compounding organic pipeline engine with SEO, AEO, and content strategy.',
    'luxury-property-developer':
      'See how Zesh Agency helped a luxury property developer win more direct inquiries, reduce broker dependency, and build local search authority.',
    'multi-location-healthcare-group':
      'See how Zesh Agency scaled local visibility across 24 healthcare locations with review systems, service line content, and AEO.',
    'luxury-jewelry-brand':
      'See how Zesh Agency grew organic revenue for a luxury jewelry brand with visual search optimization, SEO, and conversion-focused web design.',
  };

  const description =
    descriptions[caseStudy.slug] ??
    `See how Zesh Agency helped ${caseStudy.client} grow with ${caseStudy.services.join(', ')}.`;

  return {
    title: seoTitle(`${caseStudy.title} Case Study`),
    description: seoDesc(description),
    alternates: {
      canonical: `/case-studies/${slug}`,
    },
    openGraph: {
      title: seoTitle(`${caseStudy.title} Case Study`),
      description: seoDesc(description),
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

