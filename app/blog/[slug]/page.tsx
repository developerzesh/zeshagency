import { notFound } from 'next/navigation';
import BlogPostPage from '@/views/BlogPost';
import { blogPosts } from '@/lib/blogData';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found | ZESH',
      description: 'The requested blog post is not available.',
    };
  }

  return {
    title: `${post.title} — Zesh Agency`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} — Zesh Agency`,
      description: post.excerpt,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return <BlogPostPage post={post} />;
}
