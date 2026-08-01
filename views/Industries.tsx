"use client";

import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import ParticleField from '../components/ParticleField';
import PageTransition from '../components/PageTransition';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { industries } from '../lib/data';

const slowEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Industries() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <PageTransition>

      {/* ── Hero ── */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-end overflow-hidden pb-36">
        <ParticleField />
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16 pt-40 w-full">
          <RevealText>
            <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">WHO WE SERVE</p>
          </RevealText>
          <RevealText duration={2}>
            <h1 className="font-syne text-4xl md:text-6xl lg:text-[5rem] font-800 tracking-[-0.04em] leading-[0.85] mb-32">
              Growth Systems Tailored to Your Industry Vitals<span className="text-signal">.</span>
            </h1>
          </RevealText>

          {/* Bottom row: description left, CTAs bottom-right */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-16">
            <RevealText delay={0.25} duration={1.6}>
              <p className="font-lato text-base md:text-lg text-text-secondary max-w-lg leading-[1.85]">
                We don't believe in generic content templates. Different business models demand different acquisition architectures. Below are the custom frameworks we deploy across key verticals to capture high-intent demand.
              </p>
            </RevealText>

            {/* Primary + Secondary CTA — bottom-right */}
            <RevealText delay={0.4} duration={1.4}>
              <div className="flex flex-col items-start gap-4">
                <MagneticButton strength={0.4}>
                  <a href="/contact" className="group flex items-center gap-4">
                    <span className="w-12 h-12 rounded-full bg-ink flex items-center justify-center group-hover:bg-signal transition-colors duration-[1200ms]">
                      <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} className="text-paper text-sm">→</motion.span>
                    </span>
                    <span className="font-lato text-sm font-medium text-ink">Book a Consultation Call</span>
                  </a>
                </MagneticButton>
                <MagneticButton strength={0.3}>
                  <a href="/case-studies" className="font-lato text-sm text-text-muted hover:text-ink transition-colors duration-700 sig-hover">Read Case Studies</a>
                </MagneticButton>
              </div>
            </RevealText>
          </div>
        </motion.div>
      </section>

      {/* ── Industry List ── */}
      <section className="py-32 md:py-48 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          {industries.map((ind, i) => (
            <RevealText key={ind.slug} delay={i * 0.07} duration={1.4}>
              <motion.div
                whileHover={{ x: 6 }}
                transition={{ duration: 1, ease: slowEase }}
                className="group py-32 md:py-40 border-b border-border"
              >
                {/* Top row: index + title + badge */}
                <div className="flex items-start md:items-center justify-between gap-6 mb-4">
                  <div className="flex items-baseline gap-4 flex-1">
                    <span className="font-lato text-[11px] text-text-muted w-8 flex-shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-syne text-2xl md:text-4xl font-800 tracking-tight group-hover:text-signal transition-colors duration-[1200ms]">
                      {ind.title}
                    </h3>
                  </div>
                  <span className="font-lato text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 rounded bg-signal/10 text-signal border border-signal/20 font-semibold flex-shrink-0 hidden sm:inline-block">
                    {ind.shortTitle}
                  </span>
                </div>

                {/* Tagline */}
                <p className="font-lato text-[11px] tracking-[0.15em] uppercase text-signal font-semibold mb-3 md:ml-12">
                  {ind.tagline}
                </p>

                {/* Description */}
                <p className="font-lato text-sm md:text-base text-text-secondary leading-[1.85] max-w-3xl md:ml-12 mb-6">
                  {ind.description}
                </p>

                {/* Challenges & Opportunities row: no cards, just pure inline columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:ml-12 mb-8 py-6 border-t border-b border-border/20">
                  <div>
                    <span className="font-lato text-[9px] tracking-[0.15em] uppercase text-text-muted font-bold block mb-3">Key Friction Points</span>
                    <ul className="space-y-2">
                      {ind.challenges.map((c) => (
                        <li key={c} className="flex items-start gap-2 font-lato text-xs text-text-secondary">
                          <span className="text-signal select-none mt-0.5">•</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="font-lato text-[9px] tracking-[0.15em] uppercase text-signal font-bold block mb-3">Core Opportunities</span>
                    <ul className="space-y-2">
                      {ind.opportunities.map((o) => (
                        <li key={o} className="flex items-start gap-2 font-lato text-xs text-text-secondary">
                          <span className="text-signal select-none mt-0.5">↗</span>
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Outcomes & View Framework link */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:ml-12">
                  <div className="flex flex-wrap gap-x-6 gap-y-1">
                    {ind.results.map((r) => (
                      <span key={r} className="font-lato text-xs text-text-muted flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-signal/30" />
                        {r}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`/industries/${ind.slug}`}
                    className="font-lato text-sm font-semibold text-signal flex items-center gap-1.5 group-hover:text-ink transition-colors duration-300 flex-shrink-0"
                  >
                    View Framework
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
                </div>

              </motion.div>
            </RevealText>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA Section ── */}
      <section className="relative py-32 md:py-48 border-t border-border overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-signal/[0.025] blur-[220px] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

            {/* Left copy */}
            <div className="md:col-span-7">
              <RevealText>
                <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-6">READY TO DEPLOY</p>
              </RevealText>
              <RevealText delay={0.1}>
                <h2 className="font-syne text-4xl md:text-6xl font-800 tracking-[-0.03em] leading-tight mb-8">
                  Accelerate your vertical organic growth<span className="text-signal">.</span>
                </h2>
              </RevealText>
              <RevealText delay={0.2}>
                <p className="font-lato text-base md:text-lg text-text-secondary leading-[1.85] max-w-lg mb-32">
                  Partner with us to engineer high-intent search hubs customized perfectly for your industry's buying behaviors. Get started with a zero-cost 30-minute visibility audit.
                </p>
              </RevealText>
              <RevealText delay={0.3}>
                <div className="flex flex-col items-start gap-4">
                  <MagneticButton strength={0.4}>
                    <a href="/contact" className="group flex items-center gap-4">
                      <span className="w-12 h-12 rounded-full bg-ink flex items-center justify-center group-hover:bg-signal transition-colors duration-[1200ms]">
                        <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} className="text-paper text-sm">→</motion.span>
                      </span>
                      <span className="font-lato text-sm font-medium text-ink">Book a Free Discovery Call</span>
                    </a>
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
                { value: '4 Key', label: 'Primary Industries Served' },
                { value: '$45M+', label: 'Client Revenue Impact' },
                { value: '100%', label: 'Dedicated Search Focus' },
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

