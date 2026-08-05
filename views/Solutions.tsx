"use client";

import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import ParticleField from '../components/ParticleField';
import PageTransition from '../components/PageTransition';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { solutions } from '../lib/data';

const slowEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Solutions() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <PageTransition>

      {/* ── Hero ── */}
      <section ref={heroRef} className="relative min-h-[60vh] md:min-h-[80vh] flex items-end overflow-hidden pb-20 md:pb-36">
        <ParticleField />
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-16 pt-24 md:pt-40 w-full">
          <RevealText>
            <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">WHAT WE BUILD</p>
          </RevealText>
          <RevealText duration={2}>
            <h1 className="font-syne text-4xl md:text-6xl lg:text-[5rem] font-800 tracking-[-0.04em] leading-[0.85] mb-20 md:mb-32">
              Growth Systems Built for Search Dominance<span className="text-signal">.</span>
            </h1>
          </RevealText>

          {/* Bottom row: description and CTAs aligned left */}
          <div className="flex flex-col items-start gap-8 md:gap-10 max-w-2xl">
            <RevealText delay={0.25} duration={1.6}>
              <p className="font-lato text-base md:text-lg text-text-secondary leading-[1.85] max-w-xl">
                We replace abstract vanity metrics with attributed sales pipelines. Below is the technical roadmap and capability suite we deploy to establish authority inside traditional, AI, and conversational search platforms.
              </p>
            </RevealText>

            {/* Primary + Secondary CTA — left-aligned */}
            <RevealText delay={0.4} duration={1.4}>
              <div className="flex flex-wrap items-center gap-6 md:gap-10">
                <MagneticButton strength={0.4}>
                  <button onClick={() => window.open('https://calendar.app.google/Mp8HrgYK67yjuYA29', '_blank', 'noopener,noreferrer')} className="inline-flex items-center gap-3 bg-ink text-paper px-6 py-3 rounded-lg font-lato text-sm font-medium hover:bg-signal transition-colors duration-500">
                    <span className="w-12 h-12 rounded-full bg-signal flex items-center justify-center group-hover:bg-signal/80 transition-colors duration-[1200ms]">
                      <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} className="text-ink text-sm">→</motion.span>
                    </span>
                    <span className="font-lato text-sm font-medium text-paper">Book a Consultation Call</span>
                  </button>
                </MagneticButton>
                <MagneticButton strength={0.3}>
                  <a href="/case-studies" className="font-lato text-sm text-text-muted hover:text-ink transition-colors duration-700 sig-hover py-2">Read Case Studies</a>
                </MagneticButton>
              </div>
            </RevealText>
          </div>
        </motion.div>
      </section>


      {/* ── Solution List ── */}
      <section className="py-16 md:py-48 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 md:px-16">
          {solutions.map((s, i) => (
            <RevealText key={s.slug} delay={i * 0.07} duration={1.4}>
              <motion.div
                whileHover={{ x: 6 }}
                transition={{ duration: 1, ease: slowEase }}
                className="group py-10 md:py-36 border-b border-border"
              >
                {/* Top row: index + title + shortTitle badge */}
                <div className="flex items-start md:items-center justify-between gap-6 mb-4">
                  <div className="flex items-baseline gap-4 flex-1">
                    <span className="font-lato text-[11px] text-text-muted w-8 flex-shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {/* Service Title */}
                    <h3 className="font-syne text-2xl md:text-4xl font-800 tracking-tight group-hover:text-signal transition-colors duration-[1200ms]">
                      {s.title}
                    </h3>
                  </div>
                  <span className="font-lato text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 rounded bg-signal/10 text-signal border border-signal/20 font-semibold flex-shrink-0 hidden sm:inline-block">
                    {s.shortTitle}
                  </span>
                </div>

                {/* Tagline */}
                <p className="font-lato text-[11px] tracking-[0.15em] uppercase text-signal font-semibold mb-3 md:ml-12">
                  {s.tagline}
                </p>

                {/* Description — expanded */}
                <p className="font-lato text-sm md:text-base text-text-secondary leading-[1.85] max-w-3xl md:ml-12 mb-5">
                  {s.description}
                </p>

                {/* Features pills */}
                <div className="flex flex-wrap gap-2 mb-6 md:ml-12">
                  {s.features.map((f) => (
                    <span key={f} className="font-lato text-[10px] tracking-[0.08em] uppercase text-text-muted bg-ink/[0.04] dark:bg-white/[0.04] px-3 py-1 rounded-md border border-border/30">
                      {f}
                    </span>
                  ))}
                </div>

                {/* Outcomes + Learn More row */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:ml-12">
                  <ul className="flex flex-wrap gap-x-6 gap-y-1">
                    {s.outcomes.map((o) => (
                      <li key={o} className="flex items-center gap-1.5 font-lato text-xs text-text-muted">
                        <span className="text-signal font-bold select-none">↗</span>
                        {o}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More CTA */}
                  <a
                    href={`/solutions/${s.slug}`}
                    className="font-lato text-sm font-semibold text-signal flex items-center gap-1.5 group-hover:text-ink transition-colors duration-300 flex-shrink-0"
                  >
                    Learn More
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </motion.div>
            </RevealText>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA Section ── */}
      <section className="relative py-16 md:py-48 border-t border-border overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-signal/[0.025] blur-[220px] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 md:px-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

            {/* Left copy */}
            <div className="md:col-span-7">
              <RevealText>
                <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-6">READY TO START</p>
              </RevealText>
              <RevealText delay={0.1}>
                <h2 className="font-syne text-4xl md:text-6xl font-800 tracking-[-0.03em] leading-tight mb-8">
                  Not sure which system fits your business<span className="text-signal">?</span>
                </h2>
              </RevealText>
              <RevealText delay={0.2}>
                <p className="font-lato text-base md:text-lg text-text-secondary leading-[1.85] max-w-lg mb-20 md:mb-32">
                  Our founders run a free 30-minute discovery call where we audit your current search visibility, identify your biggest growth blockers, and map out a custom capability stack — at no cost and no obligation.
                </p>
              </RevealText>
              <RevealText delay={0.3}>
                <div className="flex flex-col items-start gap-4">
                  <MagneticButton strength={0.4}>
                    <button onClick={() => window.open('https://calendar.app.google/Mp8HrgYK67yjuYA29', '_blank', 'noopener,noreferrer')} className="inline-flex items-center gap-3 bg-ink text-paper px-6 py-3 rounded-lg font-lato text-sm font-medium hover:bg-signal transition-colors duration-500">
                      <span className="w-12 h-12 rounded-full bg-signal flex items-center justify-center group-hover:bg-signal/80 transition-colors duration-[1200ms]">
                        <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} className="text-ink text-sm">→</motion.span>
                      </span>
                      <span className="font-lato text-sm font-medium text-paper">Book a Free Discovery Call</span>
                    </button>
                  </MagneticButton>
                  <MagneticButton strength={0.3}>
                    <a href="/case-studies" className="font-lato text-sm text-text-muted hover:text-ink transition-colors duration-700 sig-hover">Read Case Studies</a>
                  </MagneticButton>
                </div>
              </RevealText>
            </div>

            {/* Right trust stats */}
            <div className="md:col-span-4 md:col-start-9 flex flex-col justify-center gap-10">
              {[
                { value: '8', label: 'Specialized Capabilities' },
                { value: '$45M+', label: 'Client Revenue Impact' },
                { value: '98%', label: 'Client Retention Rate' },
              ].map((stat, i) => (
                <RevealText key={stat.label} delay={0.3 + i * 0.1}>
                  <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.8, ease: slowEase }}>
                    <span className="font-syne text-4xl md:text-5xl font-800 tracking-tight text-ink block leading-none">
                      {stat.value}
                    </span>
                    <p className="font-lato text-[11px] tracking-[0.2em] uppercase text-text-muted mt-3">
                      {stat.label}
                    </p>
                  </motion.div>
                </RevealText>
              ))}
            </div>

          </div>
        </div>
      </section>

    </PageTransition>
  );
}
