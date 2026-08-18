import { notFound } from 'next/navigation';
import BlogPostPage from '@/views/BlogPost';
import { getAllPosts, getPostBySlug } from '@/lib/queries';
import type { Metadata } from 'next';

export const revalidate = 3600;
export const dynamicParams = true;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post: any) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: 'Blog Post Not Found | ZESH', description: 'The requested blog post is not available.' };
  }

  return {
    title: `${post.title} — Zesh Agency`,
    description: post.excerpt,
    openGraph: { title: `${post.title} — Zesh Agency`, description: post.excerpt },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = await getAllPosts();
  const related = allPosts.filter((p: any) => p.slug !== slug).slice(0, 3);

  return <BlogPostPage post={post} related={related} />;
}