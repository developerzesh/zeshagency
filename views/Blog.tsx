"use client";

import { useState, useRef } from 'react';
import { m, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import RevealText from '../components/RevealText';
import PageTransition from '../components/PageTransition';
import CircleArrowButton from '../components/CircleArrowButton';
import MagneticButton from '../components/MagneticButton';
import ParticleField from '../components/ParticleField';
import { urlFor } from '../lib/sanity';

const slowEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

const blogCategories = [
    { label: 'All', value: 'All' },
    { label: 'SEO & Search', value: 'seo-search' },
    { label: 'AI & GEO', value: 'ai-geo' },
    { label: 'Web Performance', value: 'web-performance' },
    { label: 'Growth Strategy', value: 'growth-strategy' },
    { label: 'Case Breakdowns', value: 'case-breakdowns' },
];

const categoryLabels: Record<string, string> = {
    'seo-search': 'SEO & Search',
    'ai-geo': 'AI & GEO',
    'web-performance': 'Web Performance',
    'growth-strategy': 'Growth Strategy',
    'case-breakdowns': 'Case Breakdowns',
};

interface BlogPost {
    title: string;
    slug: string;
    category: string;
    date: string;
    readTime: string;
    excerpt: string;
    author: string;
    authorRole: string;
    authorAvatar: any;
    image: any;
}

export default function Blog({ posts }: { posts: BlogPost[] }) {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
    const [activeCategory, setActiveCategory] = useState('All');

    const filtered = activeCategory === 'All'
        ? posts
        : posts.filter(p => p.category === activeCategory);

    const featured = filtered[0];
    const rest = filtered.slice(1);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const glowX = useSpring(useTransform(mouseX, [-500, 500], [-6, 6]), { damping: 50, stiffness: 30, mass: 2 });
    const glowY = useSpring(useTransform(mouseY, [-500, 500], [-6, 6]), { damping: 50, stiffness: 30, mass: 2 });

    return (
        <PageTransition>
            {/* ── Hero ── */}
            <section
                ref={heroRef}
                className="relative min-h-[60vh] md:min-h-[88vh] flex items-center overflow-hidden"
                onMouseMove={(e) => {
                    mouseX.set(e.clientX - window.innerWidth / 2);
                    mouseY.set(e.clientY - window.innerHeight / 2);
                }}
            >
                <ParticleField />
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <m.div style={{ x: glowX, y: glowY }} className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full bg-signal/[0.015] blur-[240px]" />
                    <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-ink/[0.007] blur-[180px]" />
                </div>

                <m.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-16 pt-24 md:pt-40 w-full">
                    <m.p
                        initial={{ opacity: 0, filter: 'blur(12px)' }}
                        animate={{ opacity: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 1.4, delay: 0.3, ease: slowEase }}
                        className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-8"
                    >
                        Thinking &amp; Perspective
                    </m.p>

                    <h1 className="font-syne text-[clamp(3rem,6vw,7.5rem)] font-800 leading-[0.86] tracking-[-0.04em] mb-12 max-w-4xl">
                        <m.span
                            initial={{ opacity: 0, filter: 'blur(40px)', y: 60 }}
                            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                            transition={{ duration: 1.8, delay: 0.5, ease: slowEase }}
                            className="block"
                        >
                            The Zesh Agency<span className="text-signal"> Blog.</span>
                        </m.span>
                    </h1>

                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mt-4">
                        <m.p
                            initial={{ opacity: 0, filter: 'blur(20px)', y: 24 }}
                            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                            transition={{ duration: 1.6, delay: 1.0, ease: slowEase }}
                            className="font-lato text-lg md:text-xl text-text-secondary leading-[1.85] max-w-lg"
                        >
                            Unfiltered growth frameworks, search engineering breakdowns, and AI-era marketing tactics written by the operators who build them.
                        </m.p>

                        <m.div
                            initial={{ opacity: 0, filter: 'blur(16px)', y: 16 }}
                            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                            transition={{ duration: 1.6, delay: 1.4, ease: slowEase }}
                            className="flex flex-col items-start gap-4 flex-shrink-0"
                        >
                            <CircleArrowButton
                              label="Book a Strategy Call"
                              onClick={() => window.open('https://calendar.app.google/Mp8HrgYK67yjuYA29', '_blank', 'noopener,noreferrer')}
                            />
                            <MagneticButton strength={0.3}>
                                <a href="#posts" className="font-lato text-sm text-text-muted hover:text-ink transition-colors duration-700 sig-hover">Browse Articles ↓</a>
                            </MagneticButton>
                        </m.div>
                    </div>
                </m.div>
            </section>

            {/* ── Category Filter Bar ── */}
            <section className="border-t border-b border-border/60 py-5 sticky top-0 z-30 backdrop-blur-2xl bg-paper/80">
                <div className="max-w-[1400px] mx-auto px-4 md:px-16 flex flex-wrap gap-3 items-center">
                    <span className="font-lato text-[10px] tracking-[0.25em] uppercase text-text-muted mr-3 flex-shrink-0">Topic</span>
                    {blogCategories.map((cat) => (
                        <button
                            key={cat.value}
                            onClick={() => setActiveCategory(cat.value)}
                            className={`font-lato text-[11px] tracking-wider uppercase px-4 py-2 border transition-all duration-500 ${activeCategory === cat.value
                                ? 'bg-signal text-paper border-signal'
                                : 'bg-transparent text-text-muted border-border/40 hover:border-signal/50 hover:text-ink'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                    <span className="ml-auto font-lato text-[11px] text-text-muted hidden md:block">
                        {filtered.length} article{filtered.length !== 1 ? 's' : ''}
                    </span>
                </div>
            </section>

            {/* ── Posts ── */}
            <section id="posts" className="py-24 md:py-40">
                <div className="max-w-[1400px] mx-auto px-4 md:px-16">
                    {filtered.length === 0 ? (
                        <div className="py-40 text-center">
                            <p className="font-syne text-2xl font-800 text-text-muted">No posts in this category yet.</p>
                        </div>
                    ) : (
                        <>
                            {/* ── Featured Lead Post ── */}
                            {featured && (
                                <RevealText duration={1.6}>
                                    <a
                                        href={`/blog/${featured.slug}`}
                                        className="group block mb-16 md:mb-32 border-b border-border/50 pb-24 md:pb-32"
                                    >
                                        <m.div
                                            whileHover={{ x: 4 }}
                                            transition={{ duration: 0.8, ease: slowEase }}
                                            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
                                        >
                                            {/* Image */}
                                            <div className="lg:col-span-7 overflow-hidden rounded-xl aspect-[16/9] relative">
                                                <m.img
                                                    src={featured.image ? urlFor(featured.image).width(1400).height(900).url() : ''}
                                                    alt={featured.title}
                                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1400ms] scale-100 group-hover:scale-105"
                                                    style={{ transition: 'transform 1.4s ease, filter 1.4s ease' }}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                                                <span className="absolute bottom-5 left-5 font-lato text-[10px] tracking-[0.2em] uppercase text-white/80 bg-signal/80 px-3 py-1 rounded">
                                                    Featured
                                                </span>
                                            </div>
                                            {/* Meta */}
                                            <div className="lg:col-span-5 flex flex-col justify-between h-full">
                                                <div>
                                                    <div className="flex flex-wrap items-center gap-3 mb-5">
                                                        <span className="font-lato text-[10px] tracking-[0.2em] uppercase text-signal py-1 px-2.5 bg-signal/10 border border-signal/25">
                                                            {categoryLabels[featured.category] || featured.category}
                                                        </span>
                                                        <span className="font-lato text-[11px] text-text-muted">{featured.date} · {featured.readTime}</span>
                                                    </div>
                                                    <h2 className="font-syne text-3xl md:text-4xl lg:text-5xl font-800 tracking-[-0.03em] leading-[1.05] mb-6 group-hover:text-signal transition-colors duration-[1000ms]">
                                                        {featured.title}
                                                    </h2>
                                                    <p className="font-lato text-base text-text-secondary leading-[1.85] mb-8">
                                                        {featured.excerpt}
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-3 pt-6 border-t border-border/40">
                                                    <img src={featured.authorAvatar ? urlFor(featured.authorAvatar).width(80).height(80).url() : ''} alt={featured.author} className="w-9 h-9 rounded-full object-cover grayscale border border-border/60" />
                                                    <div>
                                                        <p className="font-syne text-sm font-800 text-ink leading-tight">{featured.author}</p>
                                                        <p className="font-lato text-[10px] text-text-muted uppercase tracking-wider">{featured.authorRole}</p>
                                                    </div>
                                                    <span className="ml-auto text-signal/40 group-hover:text-signal transition-colors duration-700 text-xl font-bold">→</span>
                                                </div>
                                            </div>
                                        </m.div>
                                    </a>
                                </RevealText>
                            )}

                            {/* ── Rest as grid ── */}
                            {rest.length > 0 && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                                    {rest.map((post, i) => (
                                        <RevealText key={post.slug} delay={i * 0.07} duration={1.4}>
                                            <a href={`/blog/${post.slug}`} className="group block h-full">
                                                <m.article
                                                    whileHover={{ y: -6 }}
                                                    transition={{ duration: 0.7, ease: slowEase }}
                                                    className="flex flex-col h-full border border-border/40 hover:border-signal/30 transition-all duration-700 overflow-hidden rounded-xl bg-paper/30 dark:bg-ink/5"
                                                >
                                                    {/* Card Image */}
                                                    <div className="overflow-hidden aspect-[16/9] relative flex-shrink-0">
                                                        <img
                                                            src={post.image ? urlFor(post.image).width(800).height(450).url() : ''}
                                                            alt={post.title}
                                                            loading="lazy"
                                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-[1200ms]"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                                    </div>

                                                    {/* Card Body */}
                                                    <div className="p-6 md:p-8 flex flex-col flex-1">
                                                        <div className="flex items-center gap-3 mb-4">
                                                            <span className="font-lato text-[9px] tracking-[0.2em] uppercase text-signal py-0.5 px-2 bg-signal/10 border border-signal/20">
                                                                {categoryLabels[post.category] || post.category}
                                                            </span>
                                                            <span className="font-lato text-[10px] text-text-muted">{post.date} · {post.readTime}</span>
                                                        </div>
                                                        <h3 className="font-syne text-lg md:text-xl font-800 tracking-tight leading-snug mb-3 group-hover:text-signal transition-colors duration-700 flex-grow">
                                                            {post.title}
                                                        </h3>
                                                        <p className="font-lato text-sm text-text-secondary leading-[1.75] line-clamp-3 mb-6">
                                                            {post.excerpt}
                                                        </p>
                                                        <div className="mt-auto flex items-center gap-3 pt-5 border-t border-border/40">
                                                            <img src={post.authorAvatar ? urlFor(post.authorAvatar).width(56).height(56).url() : ''} alt={post.author} className="w-7 h-7 rounded-full object-cover grayscale border border-border/40" />
                                                            <span className="font-lato text-[11px] text-text-muted">{post.author}</span>
                                                            <span className="ml-auto text-signal/30 group-hover:text-signal transition-colors duration-500 font-bold">→</span>
                                                        </div>
                                                    </div>
                                                </m.article>
                                            </a>
                                        </RevealText>
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>

            {/* ── Footer CTA ── */}
            <section className="py-16 md:py-48 border-t border-border/60 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <m.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-signal/[0.018] blur-[280px]" />
                </div>
                <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-16">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
                        <div className="md:col-span-7">
                            <RevealText>
                                <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-6">Ready to Grow?</p>
                            </RevealText>
                            <RevealText delay={0.1}>
                                <h2 className="font-syne text-4xl md:text-6xl lg:text-[5rem] font-800 tracking-[-0.04em] leading-[0.88]">
                                    Want these strategies built for you<span className="text-signal">?</span>
                                </h2>
                            </RevealText>
                            <RevealText delay={0.2}>
                                <p className="font-lato text-base md:text-[17px] text-text-secondary max-w-lg leading-[1.85] mt-8">
                                    We translate these frameworks into measurable revenue growth for our partners. Book a free discovery call and we'll audit your current setup against what's actually working.
                                </p>
                            </RevealText>
                        </div>
                        <div className="md:col-span-4 md:col-start-9">
                            <RevealText delay={0.3}>
                                <div className="flex flex-col items-start gap-5">
                                    <MagneticButton strength={0.4}>
                                        <button onClick={() => window.open('https://calendar.app.google/Mp8HrgYK67yjuYA29', '_blank', 'noopener,noreferrer')} className="inline-flex items-center gap-3 bg-ink text-paper px-6 py-3 rounded-lg font-lato text-sm font-medium hover:bg-signal transition-colors duration-500">
                                            <span>Book a Discovery Call</span>
                                            <span className="text-xs">→</span>
                                        </button>
                                    </MagneticButton>
                                    <MagneticButton strength={0.3}>
                                        <a href="/case-studies" className="font-lato text-sm text-text-muted hover:text-ink transition-colors duration-700 sig-hover">
                                            View Client Results →
                                        </a>
                                    </MagneticButton>
                                </div>
                            </RevealText>
                        </div>
                    </div>
                </div>
            </section>
        </PageTransition>
    );
}