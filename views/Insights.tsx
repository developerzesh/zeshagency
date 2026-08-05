"use client";

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import RevealText from '../components/RevealText';
import PageTransition from '../components/PageTransition';
import MagneticButton from '../components/MagneticButton';
import ParticleField from '../components/ParticleField';
import { insights, insightCategories } from '../lib/data';

const slowEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Insights() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All' ? insights : insights.filter(a => a.category === activeCategory);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(useTransform(mouseX, [-500, 500], [-6, 6]), { damping: 50, stiffness: 30, mass: 2 });
  const glowY = useSpring(useTransform(mouseY, [-500, 500], [-6, 6]), { damping: 50, stiffness: 30, mass: 2 });

  return (
    <PageTransition>
      <section
        ref={heroRef}
        className="relative min-h-[60vh] md:min-h-[85vh] flex items-center overflow-hidden"
        onMouseMove={(e) => {
          mouseX.set(e.clientX - window.innerWidth / 2);
          mouseY.set(e.clientY - window.innerHeight / 2);
        }}
      >
        <ParticleField />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div style={{ x: glowX, y: glowY }} className="absolute top-1/3 right-0 w-[550px] h-[550px] rounded-full bg-signal/[0.015] blur-[220px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-ink/[0.007] blur-[180px]" />
        </div>

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-16 pt-24 md:pt-40 w-full">
          <motion.p
            initial={{ opacity: 0, filter: 'blur(12px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.4, delay: 0.3, ease: slowEase }}
            className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-8"
          >
            Resources & Analysis
          </motion.p>

          <h1 className="font-syne text-[clamp(2.8rem,5.5vw,6.5rem)] font-800 leading-[0.88] tracking-[-0.04em] mb-10 max-w-4xl">
            <motion.span
              initial={{ opacity: 0, filter: 'blur(40px)', y: 50 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ duration: 1.8, delay: 0.5, ease: slowEase }}
              className="block"
            >
              Insights<span className="text-signal">.</span>
            </motion.span>
          </h1>

          {/* Two-column Hero bottom details & CTAs */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mt-4">
            <motion.div
              initial={{ opacity: 0, filter: 'blur(20px)', y: 24 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ duration: 1.6, delay: 1.0, ease: slowEase }}
              className="max-w-lg"
            >
              <p className="font-lato text-lg md:text-xl text-text-secondary leading-[1.85]">
                Straightforward analysis for growth-focused operators. We pull back the curtain on AEO, headless speed optimization, and search strategies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, filter: 'blur(16px)', y: 16 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ duration: 1.6, delay: 1.4, ease: slowEase }}
              className="flex flex-col items-start gap-4 flex-shrink-0"
            >
              <MagneticButton strength={0.4}>
                <button onClick={() => window.open('https://calendar.app.google/Mp8HrgYK67yjuYA29', '_blank', 'noopener,noreferrer')} className="inline-flex items-center gap-3 bg-ink text-paper px-6 py-3 rounded-lg font-lato text-sm font-medium hover:bg-signal transition-colors duration-500">
                  <span className="w-12 h-12 rounded-full bg-signal flex items-center justify-center group-hover:bg-signal/80 transition-colors duration-[1200ms]">
                    <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} className="text-ink text-sm">→</motion.span>
                  </span>
                  <span className="font-lato text-sm font-medium text-paper">Book a Strategy Call</span>
                </button>
              </MagneticButton>
              <MagneticButton strength={0.3}>
                <a href="#articles" className="font-lato text-sm text-text-muted hover:text-ink transition-colors duration-700 sig-hover">Browse Articles ↓</a>
              </MagneticButton>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Categories Filter Strip */}
      <section className="border-t border-b border-border/60 py-6 sticky top-0 z-30 backdrop-blur-2xl bg-paper/80">
        <div className="max-w-[1400px] mx-auto px-4 md:px-16 flex flex-wrap gap-4 items-center">
          <span className="font-lato text-[10px] tracking-[0.25em] uppercase text-text-muted mr-3 flex-shrink-0">Topic</span>
          {insightCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-lato text-[11px] tracking-wider uppercase px-4 py-2 border transition-all duration-500 ${activeCategory === cat
                ? 'bg-signal text-paper border-signal'
                : 'bg-transparent text-text-muted border-border/40 hover:border-signal/50 hover:text-ink'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Listing */}
      <section id="articles" className="md:py-48">
        <div className="max-w-[1400px] mx-auto px-4 md:px-16">
          {filtered.length === 0 ? (
            <div className="py-14 md:py-32 text-center">
              <p className="font-syne text-xl font-800 text-text-muted">No articles found in this category.</p>
            </div>
          ) : (
            filtered.map((article, i) => (
              <RevealText key={article.slug} delay={i * 0.07} duration={1.4}>
                <a href={`/insights/${article.slug}`} className="group block border-b border-border/60 last:border-b-0">
                  <motion.article
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.8, ease: slowEase }}
                    className="py-14 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-baseline"
                  >
                    {/* Index / Date Meta */}
                    <div className="md:col-span-3 flex flex-col gap-1">
                      <span className="font-lato text-[10px] tracking-[0.2em] uppercase text-signal/50 group-hover:text-signal transition-colors duration-[900ms]">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-lato text-[11px] text-text-muted mt-2">{article.date} · {article.readTime}</span>
                    </div>

                    {/* Main Title & Excerpt */}
                    <div className="md:col-span-7">
                      <span className="font-lato text-[9px] tracking-[0.2em] uppercase px-2 py-0.5 border border-signal/25 bg-signal/15 text-signal inline-block mb-4">
                        {article.category}
                      </span>
                      <h3 className="font-syne text-xl md:text-3xl font-800 tracking-tight leading-tight group-hover:text-signal transition-colors duration-[1000ms] mb-4">
                        {article.title}
                      </h3>
                      <p className="font-lato text-sm md:text-base text-text-secondary leading-[1.85] max-w-2xl">
                        {article.excerpt}
                      </p>
                    </div>

                    {/* Arrow indicator */}
                    <div className="md:col-span-2 flex justify-end">
                      <span className="text-signal/30 group-hover:text-signal transition-colors duration-[900ms] text-lg font-bold">
                        →
                      </span>
                    </div>
                  </motion.article>
                </a>
              </RevealText>
            ))
          )}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 md:py-48 border-t border-border/60 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-signal/[0.018] blur-[280px]" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-7">
              <RevealText>
                <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-6">Build Your Engine</p>
              </RevealText>
              <RevealText delay={0.1}>
                <h2 className="font-syne text-4xl md:text-6xl lg:text-[5rem] font-800 tracking-[-0.04em] leading-[0.88]">
                  Ready to build a compounding organic channel<span className="text-signal">?</span>
                </h2>
              </RevealText>
              <RevealText delay={0.2}>
                <p className="font-lato text-base md:text-[17px] text-text-secondary max-w-lg leading-[1.85] mt-8">
                  We design zero-bloat static sites, entity schema structures, and comparison matrices engineered to win citations inside Perplexity, ChatGPT, and Google.
                </p>
              </RevealText>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <RevealText delay={0.3}>
                <div className="flex flex-col items-start gap-5">
                  <MagneticButton strength={0.4}>
                    <button onClick={() => window.open('https://calendar.app.google/Mp8HrgYK67yjuYA29', '_blank', 'noopener,noreferrer')} className="inline-flex items-center gap-3 bg-ink text-paper px-6 py-3 rounded-lg font-lato text-sm font-medium hover:bg-signal transition-colors duration-500">
                      <span className="w-12 h-12 rounded-full bg-signal flex items-center justify-center group-hover:bg-signal/80 transition-colors duration-[1200ms]">
                        <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} className="text-ink text-sm">→</motion.span>
                      </span>
                      <span className="font-lato text-sm font-medium text-paper">Book a Strategy Call</span>
                    </button>
                  </MagneticButton>
                  <MagneticButton strength={0.3}>
                    <a href="/case-studies" className="font-lato text-sm text-text-muted hover:text-ink transition-colors duration-700 sig-hover">
                      View Client Case Studies
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

