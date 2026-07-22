import Solutions from "@/views/Solutions";
import SolutionDetail from "@/views/SolutionDetail";
import { solutions } from "@/lib/data";

interface PageProps {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Page({ searchParams }: PageProps) {
    const resolvedSearchParams = await searchParams;
    const slug = typeof resolvedSearchParams.slug === 'string' ? resolvedSearchParams.slug : undefined;

    if (slug) {
        const solution = solutions.find((s) => s.slug === slug);
        if (solution) {
            return <SolutionDetail solution={solution} />;
        }
    }

    return <Solutions />;
}
