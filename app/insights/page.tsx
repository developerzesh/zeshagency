import Insights from "@/views/Insights";
import InsightArticle from "@/views/InsightArticle";
import { insights } from "@/lib/data";

interface PageProps {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Page({ searchParams }: PageProps) {
    const resolvedSearchParams = await searchParams;
    const slug = typeof resolvedSearchParams.slug === 'string' ? resolvedSearchParams.slug : undefined;

    if (slug) {
        const article = insights.find((a) => a.slug === slug);
        if (article) {
            return <InsightArticle article={article} />;
        }
    }

    return <Insights />;
}
