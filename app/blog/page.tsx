import Blog from "@/views/Blog";
import BlogPostPage from "@/views/BlogPost";
import { blogPosts } from "@/lib/blogData";

interface PageProps {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Page({ searchParams }: PageProps) {
    const resolvedSearchParams = await searchParams;
    const slug = typeof resolvedSearchParams.slug === 'string' ? resolvedSearchParams.slug : undefined;

    if (slug) {
        const post = blogPosts.find((p) => p.slug === slug);
        if (post) {
            return <BlogPostPage post={post} />;
        }
    }

    return <Blog />;
}
