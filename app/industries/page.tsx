import Industries from "@/views/Industries";
import IndustryDetail from "@/views/IndustryDetail";
import { industries } from "@/lib/data";

interface PageProps {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Page({ searchParams }: PageProps) {
    const resolvedSearchParams = await searchParams;
    const slug = typeof resolvedSearchParams.slug === 'string' ? resolvedSearchParams.slug : undefined;

    if (slug) {
        const industry = industries.find((i) => i.slug === slug);
        if (industry) {
            return <IndustryDetail industry={industry} />;
        }
    }

    return <Industries />;
}
