"use client";

import { useRef, lazy, Suspense } from 'react';
import { m } from 'framer-motion';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import PageTransition from '../components/PageTransition';
import type { InsightArticle as InsightArticleType } from '../lib/data';
import { insights } from '../lib/data';

const CinematicImage = lazy(() => import('../components/CinematicImage'));

const slowEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function InsightArticle({ article }: { article: InsightArticleType }) {
  // Filter out the current article to find related articles
  const relatedArticles = insights
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  return (
    <PageTransition>
      <article className="pt-24 md:pt-40 pb-20 md:pb-36">
        {/* Header Section (Readable container width) */}
        <div className="max-w-[900px] mx-auto px-4 md:px-16">
          {/* Back breadcrumb */}
          <RevealText duration={1.2}>
            <a
              href="/insights"
              className="inline-flex items-center gap-2 font-lato text-[11px] tracking-[0.12em] uppercase text-text-muted hover:text-signal transition-colors duration-700 mb-10 group"
            >
              <m.span animate={{ x: [0, -3, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} className="group-hover:text-signal">â†</m.span>
              Back to Insights
            </a>
          </RevealText>

          {/* Categories & Meta */}
          <RevealText delay={0.1} duration={1.2}>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="font-lato text-[11px] tracking-[0.15em] uppercase text-signal py-1 px-2.5 bg-signal/10 border border-signal/20">
                {article.category}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-border" />
              <span className="font-lato text-[11px] text-text-muted">{article.date}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-border" />
              <span className="font-lato text-[11px] text-text-muted">{article.readTime} read</span>
            </div>
          </RevealText>

          {/* Title */}
          <RevealText delay={0.2} duration={1.8}>
            <h1 className="font-syne text-4xl md:text-5xl lg:text-[4.2rem] font-800 tracking-[-0.03em] leading-[1.05] mb-10">
              {article.title}
              <span className="text-signal">.</span>
            </h1>
          </RevealText>

          {/* Author Section */}
          <RevealText delay={0.3} duration={1.4}>
            <div className="flex items-center gap-4 mb-16 md:mb-28 pb-8 border-b border-border/60">
              <img
                src={article.authorAvatar}
                alt={article.author}
                className="w-12 h-12 rounded-full object-cover grayscale border border-border/80"
              />
              <div>
                <p className="font-syne text-sm font-800 text-ink leading-tight">{article.author}</p>
                <p className="font-lato text-xs text-text-muted mt-1 uppercase tracking-wider">{article.authorRole}</p>
              </div>
            </div>
          </RevealText>
        </div>

        {/* Featured Image (Wider cinematic width) */}
        <div className="max-w-[1200px] mx-auto px-4 md:px-16 mb-20 md:mb-28">
          <RevealText duration={1.8}>
            <Suspense fallback={<div className="aspect-video bg-surface animate-pulse" />}>
              <CinematicImage
                src={article.image}
                alt={article.title}
                aspect="21/9"
                parallaxStrength={0.06}
                revealDuration={1.8}
                hoverZoom={1.01}
              />
            </Suspense>
          </RevealText>
        </div>

        {/* Content Body (Maintains strict readable prose width of max-w-2xl / 650px) */}
        <div className="max-w-[650px] mx-auto px-6">
          <RevealText delay={0.4} duration={1.6}>
            <div className="prose prose-neutral max-w-none">
              {article.content.map((para, idx) => (
                <p
                  key={idx}
                  className="font-lato text-base md:text-[17px] text-text-secondary leading-[1.9] mb-8 last:mb-0"
                >
                  {para}
                </p>
              ))}
            </div>
          </RevealText>

          {/* Tags Section */}
          <RevealText delay={0.5} duration={1.4}>
            <div className="mt-12 pt-8 border-t border-border/60">
              <h4 className="font-lato text-[11px] tracking-[0.2em] uppercase text-text-muted mb-4">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-lato text-[11px] text-text-secondary hover:text-ink px-3 py-1 bg-surface border border-border/60 transition-colors duration-500"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </RevealText>

          {/* Inline CTA */}
          <RevealText delay={0.6} duration={1.4}>
            <div className="mt-16 pt-10 border-t border-border/60">
              <div className="bg-surface/50 border border-border/40 p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <div>
                  <h4 className="font-syne text-lg font-800 text-ink mb-1">Want to discuss these search trends?</h4>
                  <p className="font-lato text-xs text-text-muted">Chat directly withLuca or the search engineering team.</p>
                </div>
                <MagneticButton strength={0.3}>
                  <button onClick={() => window.open('https://calendar.app.google/Mp8HrgYK67yjuYA29', '_blank', 'noopener,noreferrer')} className="inline-flex items-center gap-3 bg-ink text-paper px-6 py-3 rounded-lg font-lato text-sm font-medium hover:bg-signal transition-colors duration-500">
                    Start a Conversation â†’
                  </button>
                </MagneticButton>
              </div>
            </div>
          </RevealText>
        </div>

        {/* Related Articles Section (Wider grid layout) */}
        {relatedArticles.length > 0 && (
          <section className="mt-16 md:mt-28 pt-24 md:pt-40 border-t border-border/60 bg-surface/10">
            <div className="max-w-[1000px] mx-auto px-4 md:px-16">
              <RevealText>
                <h3 className="font-syne text-2xl md:text-3xl font-800 tracking-tight mb-16 md:mb-28">
                  Related Insights<span className="text-signal">.</span>
                </h3>
              </RevealText>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {relatedArticles.map((rel, i) => (
                  <RevealText key={rel.slug} delay={i * 0.1}>
                    <a href={`/insights/${rel.slug}`} className="group block">
                      <m.div
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.8, ease: slowEase }}
                        className="flex flex-col h-full bg-paper border border-border/40 hover:border-signal/30 p-6 transition-all duration-500"
                      >
                        <div className="overflow-hidden mb-6 aspect-video">
                          <img
                            src={rel.image}
                            alt={rel.title}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1400ms]"
                            loading="lazy"
                          />
                        </div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="font-lato text-[9px] tracking-[0.2em] uppercase text-signal">
                            {rel.category}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-border" />
                          <span className="font-lato text-[10px] text-text-muted">{rel.date}</span>
                        </div>
                        <h4 className="font-syne text-lg font-800 tracking-tight group-hover:text-signal transition-colors duration-700 leading-snug mb-3">
                          {rel.title}
                        </h4>
                        <p className="font-lato text-xs text-text-muted leading-relaxed line-clamp-2 mt-auto">
                          {rel.excerpt}
                        </p>
                      </m.div>
                    </a>
                  </RevealText>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </PageTransition>
  );
}

