import Careers from "@/views/Careers";
import CareerDetail from "@/views/CareerDetail";
import { careers } from "@/lib/data";

interface PageProps {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Page({ searchParams }: PageProps) {
    const resolvedSearchParams = await searchParams;
    const slug = typeof resolvedSearchParams.slug === 'string' ? resolvedSearchParams.slug : undefined;

    if (slug) {
        const career = careers.find((c) => c.slug === slug);
        if (career) {
            return <CareerDetail career={career} />;
        }
    }

    return <Careers />;
}
