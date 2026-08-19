"use client";

import { useEffect, useRef, useState } from 'react';
import { m, useScroll, useSpring } from 'framer-motion';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import PageTransition from '../components/PageTransition';
import { PortableText } from '@portabletext/react';
import { ptComponents } from '../components/PortableTextComponents';
import { extractToc } from '../lib/toc';
import { urlFor } from '../lib/sanity';

interface BlogPostData {
    slug: string;
    title: string;
    category: string;
    date: string;
    readTime: string;
    excerpt: string;
    author?: string | { name?: string; role?: string; avatar?: string; bio?: string };
    authorRole?: string;
    authorAvatar?: string;
    tags?: string[];
    image?: any;
    content?: any[];
    toc?: string[];
}

interface RelatedPost {
    slug: string;
    title: string;
    category: string;
    date: string;
    readTime: string;
    excerpt: string;
    image?: any;
}

const slowEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

const categoryLabels: Record<string, string> = {
    'seo-search': 'SEO & Search',
    'ai-geo': 'AI & GEO',
    'web-performance': 'Web Performance',
    'growth-strategy': 'Growth Strategy',
    'case-breakdowns': 'Case Breakdowns',
};

export default function BlogPostPage({ post, related = [] }: { post: BlogPostData; related?: RelatedPost[] }) {
    const articleRef = useRef<HTMLElement>(null);
    const [readProgress, setReadProgress] = useState(0);
    const [tocOpen, setTocOpen] = useState(false);
    const [authorOpen, setAuthorOpen] = useState(false);

    const { scrollYProgress } = useScroll({ target: articleRef, offset: ['start start', 'end end'] });
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    useEffect(() => {
        return scrollYProgress.onChange(v => setReadProgress(Math.round(v * 100)));
    }, [scrollYProgress]);

    // Build table of contents from Portable Text headings
    const toc = extractToc(post.content ?? []);

    return (
        <PageTransition>
            {/* Reading Progress Bar */}
            <m.div
                style={{ scaleX }}
                className="fixed top-0 left-0 right-0 h-[3px] bg-signal origin-left z-[100] pointer-events-none"
            />

            <article ref={articleRef} className="pt-24 md:pt-40 pb-20 md:pb-36">
                {/* ── Article Header ── */}
                <div className="max-w-[1400px] mx-auto px-4 md:px-16">
                    {/* Breadcrumb */}
                    <RevealText duration={1.2}>
                        <a
                            href="/blog"
                            className="inline-flex items-center gap-2 font-lato text-[11px] tracking-[0.12em] uppercase text-text-muted hover:text-signal transition-colors duration-700 mb-10 group"
                        >
                            <m.span animate={{ x: [0, -3, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}>←</m.span>
                            Back to Blog
                        </a>
                    </RevealText>

                    {/* Category + Meta */}
                    <RevealText delay={0.1} duration={1.2}>
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <span className="font-lato text-[11px] tracking-[0.15em] uppercase text-signal py-1 px-2.5 bg-signal/10 border border-signal/20">
                                {categoryLabels[post.category] || post.category}
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-border" />
                            <span className="font-lato text-[11px] text-text-muted">{post.date}</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-border" />
                            <span className="font-lato text-[11px] text-text-muted">{post.readTime} read</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-border" />
                            <span className="font-lato text-[11px] text-signal font-semibold">{readProgress}% read</span>
                        </div>
                    </RevealText>

                    {/* Title */}
                    <RevealText delay={0.2} duration={1.8}>
                        <h1 className="font-syne text-4xl md:text-5xl lg:text-[4.5rem] font-800 tracking-[-0.03em] leading-[1.02] mb-10">
                            {post.title}<span className="text-signal">.</span>
                        </h1>
                    </RevealText>

                    {/* Excerpt / Lede */}
                    <RevealText delay={0.25} duration={1.4}>
                        <p className="font-lato text-lg md:text-xl text-text-secondary leading-[1.85] mb-10 max-w-2xl border-l-2 border-signal/40 pl-5">
                            {post.excerpt}
                        </p>
                    </RevealText>

                    {/* Author + Share strip */}
                    <RevealText delay={0.3} duration={1.4}>
                        <div className="flex items-center gap-4 mb-14 pb-8 border-b border-border/60">
                            {(() => {
                                const authorObj = typeof post.author === 'object' ? post.author : null;
                                const avatarSrc = authorObj?.avatar ? urlFor(authorObj.avatar).width(96).height(96).url() : '';
                                const authorName = authorObj?.name ?? (typeof post.author === 'string' ? post.author : '');
                                const authorRole = authorObj?.role ?? post.authorRole ?? '';
                                return (
                                    <button
                                        type="button"
                                        onClick={() => setAuthorOpen(true)}
                                        className="flex items-center gap-3 cursor-pointer text-left"
                                    >
                                        <img
                                            src={avatarSrc}
                                            alt={authorName}
                                            className="w-12 h-12 rounded-full object-cover grayscale border border-border/80 hover:grayscale-0 transition-all duration-500"
                                        />
                                        <div>
                                            <p className="font-syne text-sm font-800 text-ink leading-tight">{authorName}</p>
                                            <p className="font-lato text-xs text-text-muted mt-0.5 uppercase tracking-wider">{authorRole}</p>
                                        </div>
                                    </button>
                                );
                            })()}
                            <div className="ml-auto flex items-center gap-4">
                                <span className="font-lato text-[10px] tracking-[0.15em] uppercase text-text-muted">Share</span>
                                {['Twitter', 'LinkedIn'].map(s => (
                                    <a
                                        key={s}
                                        href={`https://${s.toLowerCase()}.com`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-lato text-[10px] tracking-[0.15em] uppercase text-text-muted hover:text-signal transition-colors duration-500"
                                    >
                                        {s}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </RevealText>
                </div>

                {/* ── Body + Sidebar ── */}
                <div className="max-w-[1400px] mx-auto px-4 md:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                        {/* ── Sidebar ToC ── */}
                        {toc.length > 0 && (
                            <aside className="lg:col-span-3 lg:sticky lg:top-32 lg:self-start">
                                <RevealText delay={0.1}>
                                    <div className="border border-border/50 rounded-xl p-6 bg-paper/40 dark:bg-ink/10 backdrop-blur-sm">
                                        <button
                                            onClick={() => setTocOpen(!tocOpen)}
                                            className="w-full flex items-center justify-between lg:cursor-default"
                                        >
                                            <span className="font-lato text-[10px] tracking-[0.25em] uppercase text-signal font-semibold">Contents</span>
                                            <span className="lg:hidden text-text-muted text-xs">{tocOpen ? '▲' : '▼'}</span>
                                        </button>
                                        <div className={`mt-4 space-y-2 ${tocOpen ? 'block' : 'hidden lg:block'}`}>
                                            {toc.map((item, i) => (
                                                <a
                                                    key={i}
                                                    href={`#${item.id}`}
                                                    className="block font-lato text-[12px] text-text-muted hover:text-signal transition-colors duration-500 leading-snug py-1 border-l border-border/30 hover:border-signal pl-3"
                                                >
                                                    {item.text}
                                                </a>
                                            ))}
                                        </div>
                                        {/* Mini progress in sidebar */}
                                        <div className="mt-5 pt-4 border-t border-border/40">
                                            <div className="flex items-center justify-between mb-1.5">
                                                <span className="font-lato text-[10px] text-text-muted uppercase tracking-wider">Progress</span>
                                                <span className="font-lato text-[10px] text-signal font-semibold">{readProgress}%</span>
                                            </div>
                                            <div className="h-1 bg-border/30 rounded-full overflow-hidden">
                                                <m.div
                                                    className="h-full bg-signal rounded-full origin-left"
                                                    style={{ scaleX }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </RevealText>
                            </aside>
                        )}

                        {/* ── Article Content ── */}
                        <div className={toc.length > 0 ? 'lg:col-span-6' : 'lg:col-span-12 max-w-[900px]'}>
                            <RevealText delay={0.4} duration={1.6}>
                                <div className="prose prose-neutral max-w-none font-lato text-base md:text-[17px] text-text-secondary leading-[1.9]">
                                    {post.content && Array.isArray(post.content) ? (
                                        <PortableText
                                            value={post.content}
                                            components={ptComponents}
                                        />
                                    ) : (
                                        <p className="mb-8">No content available.</p>
                                    )}
                                </div>
                            </RevealText>

                            {/* Tags */}
                            <RevealText delay={0.5} duration={1.4}>
                                <div className="mt-12 pt-8 border-t border-border/60">
                                    <h4 className="font-lato text-[11px] tracking-[0.2em] uppercase text-text-muted mb-4">Tags</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {(post.tags ?? []).map(tag => (
                                            <span
                                                key={tag}
                                                className="font-lato text-[11px] text-text-secondary hover:text-ink px-3 py-1 bg-surface border border-border/60 transition-colors duration-500 cursor-default"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </RevealText>

                            {/* Author Section */}
                            <RevealText delay={0.55} duration={1.4}>
                                <div className="mt-12 pt-10 border-t border-border/60">
                                    <p className="font-lato text-[10px] tracking-[0.25em] uppercase text-signal font-semibold mb-5">About the author</p>
                                    {(() => {
                                        const authorObj = typeof post.author === 'object' ? post.author : null;
                                        const avatarSrc = authorObj?.avatar ? urlFor(authorObj.avatar).width(128).height(128).url() : '/images/shahana-avatar.jpg';
                                        const authorName = authorObj?.name ?? 'Shahana Shaikh';
                                        const authorRole = authorObj?.role ?? 'Founder';
                                        const authorBio = authorObj?.bio ?? 'Shahana is the Founder of Zesh Agency, a strategic growth consultancy partnering with ambitious brands to engineer high-converting growth systems. With deep expertise in SEO, AEO, GEO, and full-stack digital marketing, she leads principal-level execution for clients across SaaS, healthcare, real estate, and B2B services. Shahana personally strategizes and supervises every engagement, ensuring technical precision and revenue alignment.';
                                        return (
                                            <div className="flex gap-5">
                                                <img
                                                    src={avatarSrc}
                                                    alt={authorName}
                                                    className="w-16 h-16 rounded-full object-cover border border-border/60 flex-shrink-0"
                                                />
                                                <div>
                                                    <h4 className="font-syne text-lg font-800 text-ink leading-tight mb-1">{authorName}</h4>
                                                    <p className="font-lato text-[11px] text-signal uppercase tracking-wider mb-3">{authorRole}</p>
                                                    <p className="font-lato text-[13px] text-text-secondary leading-[1.8]">{authorBio}</p>
                                                </div>
                                            </div>
                                        );
                                    })()}
                                </div>
                            </RevealText>

                            {/* Inline CTA */}
                            {/* <RevealText delay={0.6} duration={1.4}>
                                <div className="mt-14 pt-10 border-t border-border/60">
                                    <div className="bg-signal/5 border border-signal/20 p-8 rounded-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                                        <div>
                                            <h4 className="font-syne text-xl font-800 text-ink mb-2">Want this built for your brand?</h4>
                                            <p className="font-lato text-sm text-text-muted max-w-xs">
                                                We implement these exact strategies for our partners. Book a free audit.
                                            </p>
                                        </div>
                                        <MagneticButton strength={0.3}>
                                            <button
                                                onClick={() => window.open('https://calendar.app.google/Mp8HrgYK67yjuYA29', '_blank', 'noopener,noreferrer')}
                                                className="inline-flex items-center gap-3 bg-ink text-paper px-6 py-3 rounded-lg font-lato text-sm font-medium hover:bg-signal transition-colors duration-500 flex-shrink-0"
                                            >
                                                <span>Book Free Audit</span>
                                                <span className="text-xs">→</span>
                                            </button>
                                        </MagneticButton>
                                    </div>
                                </div>
                            </RevealText> */}
                        </div>

                        {/* ── Sidebar CTA ── */}
                        <aside className="lg:col-span-3 lg:sticky lg:top-32 lg:self-start">
                            <RevealText delay={0.2}>
                                <div className="border border-border/50 rounded-xl p-6 bg-paper/40 dark:bg-ink/10 backdrop-blur-sm">
                                    <span className="font-lato text-[10px] tracking-[0.25em] uppercase text-signal font-semibold">Get Started</span>
                                    <h4 className="font-syne text-lg font-800 text-ink mt-4 mb-2">Want this built for your brand?</h4>
                                    <p className="font-lato text-[12px] text-text-muted leading-relaxed mb-5">
                                        We implement these exact strategies for our partners. Book a free audit.
                                    </p>
                                    <MagneticButton strength={0.3}>
                                        <button
                                            onClick={() => window.open('https://calendar.app.google/Mp8HrgYK67yjuYA29', '_blank', 'noopener,noreferrer')}
                                            className="w-full inline-flex items-center justify-center gap-2 bg-ink text-paper px-5 py-2.5 rounded-lg font-lato text-[11px] font-medium hover:bg-signal transition-colors duration-500"
                                        >
                                            <span>Book Free Audit</span>
                                            <span className="text-xs">→</span>
                                        </button>
                                    </MagneticButton>
                                </div>
                            </RevealText>
                        </aside>
                    </div>
                </div>

                {/* ── Related Posts ── */}
                {related.length > 0 && (
                    <section className="mt-32 pt-20 border-t border-border/60">
                        <div className="max-w-[1400px] mx-auto px-4 md:px-16">
                            <RevealText>
                                <h3 className="font-syne text-3xl md:text-4xl font-800 tracking-tight mb-16">
                                    More to Read<span className="text-signal">.</span>
                                </h3>
                            </RevealText>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {related.map((rel, i) => (
                                    <RevealText key={rel.slug} delay={i * 0.08}>
                                        <a href={`/blog/${rel.slug}`} className="group block">
                                            <m.div
                                                whileHover={{ y: -5 }}
                                                transition={{ duration: 0.7, ease: slowEase }}
                                                className="border border-border/40 hover:border-signal/30 rounded-xl overflow-hidden transition-all duration-700 bg-paper/30 dark:bg-ink/5"
                                            >
                                                <div className="overflow-hidden aspect-video">
                                                    <img
                                                        src={rel.image ? urlFor(rel.image).width(600).height(340).url() : ''}
                                                        alt={rel.title}
                                                        loading="lazy"
                                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-[1200ms]"
                                                    />
                                                </div>
                                                <div className="p-6">
                                                    <div className="flex items-center gap-2 mb-3">
                                                        <span className="font-lato text-[9px] tracking-[0.2em] uppercase text-signal">{categoryLabels[rel.category] || rel.category}</span>
                                                        <span className="w-1 h-1 rounded-full bg-border" />
                                                        <span className="font-lato text-[10px] text-text-muted">{rel.date}</span>
                                                    </div>
                                                    <h4 className="font-syne text-lg font-800 tracking-tight group-hover:text-signal transition-colors duration-700 leading-snug mb-2">
                                                        {rel.title}
                                                    </h4>
                                                    <p className="font-lato text-xs text-text-muted leading-relaxed line-clamp-2">{rel.excerpt}</p>
                                                </div>
                                            </m.div>
                                        </a>
                                    </RevealText>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </article>

            {/* ── Author Modal ── */}
            {authorOpen && (() => {
                const authorObj = typeof post.author === 'object' ? post.author : null;
                const avatarSrc = authorObj?.avatar ? urlFor(authorObj.avatar).width(192).height(192).url() : '/images/shahana-avatar.jpg';
                const authorName = authorObj?.name ?? 'Shahana Shaikh';
                const authorRole = authorObj?.role ?? 'Founder';
                const authorBio = authorObj?.bio ?? 'Shahana is the Founder of Zesh Agency, a strategic growth consultancy partnering with ambitious brands to engineer high-converting growth systems. With deep expertise in SEO, AEO, GEO, and full-stack digital marketing, she leads principal-level execution for clients across SaaS, healthcare, real estate, and B2B services. Shahana personally strategizes and supervises every engagement, ensuring technical precision and revenue alignment.';
                return (
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center p-4"
                        onClick={() => setAuthorOpen(false)}
                    >
                        <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" />
                        <m.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="relative w-full max-w-md bg-paper border border-border/50 rounded-2xl p-8 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setAuthorOpen(false)}
                                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface transition-colors duration-300 text-text-muted hover:text-ink"
                            >
                                ✕
                            </button>
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src={avatarSrc}
                                    alt={authorName}
                                    className="w-20 h-20 rounded-full object-cover border-2 border-border/60 mb-4"
                                />
                                <h4 className="font-syne text-xl font-800 text-ink leading-tight mb-1">{authorName}</h4>
                                <p className="font-lato text-[11px] text-signal uppercase tracking-wider mb-5">{authorRole}</p>
                                <p className="font-lato text-[13px] text-text-secondary leading-[1.85]">{authorBio}</p>
                            </div>
                        </m.div>
                    </m.div>
                );
            })()}
        </PageTransition>
    );
}

