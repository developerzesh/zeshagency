import CaseStudies from "@/views/CaseStudies";
import CaseStudyDetail from "@/views/CaseStudyDetail";
import { caseStudies } from "@/lib/data";

interface PageProps {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Page({ searchParams }: PageProps) {
    const resolvedSearchParams = await searchParams;
    const slug = typeof resolvedSearchParams.slug === 'string' ? resolvedSearchParams.slug : undefined;

    if (slug) {
        const caseStudy = caseStudies.find((c) => c.slug === slug);
        if (caseStudy) {
            return <CaseStudyDetail caseStudy={caseStudy} />;
        }
    }

    return <CaseStudies />;
}
