"use client";

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import ParticleField from '../components/ParticleField';
import PageTransition from '../components/PageTransition';
import { CITY_DATA, CITIES, SOL_MAP } from '../lib/cityData';

const slowEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

const toPath = (p: string) => {
  const slug = SOL_MAP[p] || p;
  return `/solutions/${slug}`;
};

interface CityPageProps {
  cityKey: string;
}

export default function CityPage({ cityKey }: CityPageProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const data = CITY_DATA[cityKey as keyof typeof CITY_DATA] as any;

  if (!data) {
    return (
      <PageTransition>
        <div className="min-h-[60vh] flex items-center justify-center py-44 px-6">
          <div className="text-center max-w-lg">
            <h1 className="font-syne text-4xl md:text-5xl font-800 mb-4 leading-tight">
              City Page Coming Soon
            </h1>
            <p className="font-lato text-base text-text-muted mb-8 leading-[1.85]">
              We are expanding our city coverage. Get in touch for your region.
            </p>
            <MagneticButton strength={0.3}>
              <Link href="/contact" className="inline-flex items-center gap-4 font-lato text-sm font-medium text-paper bg-ink px-6 py-3.5 rounded-xl hover:bg-signal hover:text-ink transition-all duration-[800ms]">
                Contact Us →
              </Link>
            </MagneticButton>
          </div>
        </div>
      </PageTransition>
    );
  }

  const aboutParagraphs = (data.about as string).split('\n\n');

  return (
    <PageTransition>

      {/* ── 1. HERO ── */}
      <section ref={heroRef} className="relative min-h-[60vh] md:min-h-[80vh] flex items-end overflow-hidden pb-20 md:pb-36">
        <ParticleField />
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-signal/[0.03] blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] font-syne font-800 text-[10rem] md:text-[20rem] text-ink/[0.02] dark:text-white/[0.015] leading-none select-none pointer-events-none z-0">
          {data.badge}
        </div>
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-16 pt-24 md:pt-40 w-full">
          <RevealText duration={1.6}>
            <h1 className="font-syne text-4xl md:text-7xl lg:text-8xl font-800 tracking-[-0.04em] leading-[0.92] max-w-5xl">
              Digital Marketing Agency<br />
              <span className="text-signal">in {data.name}.</span>
            </h1>
          </RevealText>
          <RevealText delay={0.2} duration={1.6}>
            <p className="font-lato text-base md:text-lg text-text-secondary max-w-2xl leading-[1.85] mt-8 mb-12">
              {data.sub}
            </p>
          </RevealText>
          <RevealText delay={0.35} duration={1.4}>
            <div className="flex flex-wrap items-center gap-6 md:gap-10">
              <MagneticButton strength={0.4}>
                <button onClick={() => window.open('https://calendar.app.google/Mp8HrgYK67yjuYA29', '_blank', 'noopener,noreferrer')} className="inline-flex items-center gap-3 bg-ink text-paper px-6 py-3 rounded-lg font-lato text-sm font-medium hover:bg-signal transition-colors duration-500">
                  <span className="w-12 h-12 rounded-full bg-signal flex items-center justify-center group-hover:bg-signal/80 transition-colors duration-[1200ms]">
                    <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} className="text-ink text-sm">→</motion.span>
                  </span>
                  <span className="font-lato text-sm font-medium text-paper">Get {data.name} Strategy Audit</span>
                </button>
              </MagneticButton>
              <MagneticButton strength={0.3}>
                <Link href="/case-studies" className="font-lato text-sm text-text-muted hover:text-ink transition-colors duration-500 sig-hover py-2">
                  View Case Studies
                </Link>
              </MagneticButton>
            </div>
          </RevealText>
        </motion.div>
      </section>

      {/* ── 2. OUR SERVICES ── */}
      <section className="py-16 md:py-36 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 md:px-16">
          <div className="mb-16 md:mb-20">
            <RevealText>
              <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4 font-semibold">OUR SERVICES</p>
            </RevealText>
            <RevealText delay={0.1}>
              <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em] leading-tight">
                Digital marketing tailored<br />
                <span className="text-signal">to the {data.name} market.</span>
              </h2>
            </RevealText>
            <RevealText delay={0.2}>
              <p className="font-lato text-base text-text-secondary max-w-2xl leading-[1.85] mt-6">
                Every service we offer is calibrated to {data.name}'s specific search landscape, buyer behaviour, and competitive dynamics.
              </p>
            </RevealText>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(data.services as [string, string, string][]).map(([title, desc, pathKey], i) => (
              <RevealText key={title} delay={i * 0.08} duration={1.4}>
                <Link href={toPath(pathKey)} className="block bg-surface/30 border border-border/40 p-8 md:p-10 rounded-2xl transition-all duration-[600ms] hover:bg-ink dark:hover:bg-white hover:text-paper dark:hover:text-ink group relative overflow-hidden">
                  <div className="w-6 h-0.5 bg-signal mb-6 transition-transform duration-500 group-hover:scale-x-150 group-hover:origin-left" />
                  <h3 className="font-syne text-xl md:text-2xl font-800 tracking-tight mb-4 group-hover:text-signal transition-colors duration-500">{title}</h3>
                  <p className="font-lato text-sm text-text-secondary leading-[1.8] mb-8 group-hover:text-text-muted transition-colors duration-500">{desc}</p>
                  <span className="font-lato text-[11px] font-bold text-signal tracking-[0.12em] uppercase flex items-center gap-1 group-hover:translate-x-1.5 transition-transform duration-500">
                    Explore Service <span className="text-xs">→</span>
                  </span>
                </Link>
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHY CHOOSE US ── */}
      <section className="py-16 md:py-36 border-t border-border bg-surface/20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
            <div>
              <RevealText>
                <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4 font-semibold">WHY CHOOSE US</p>
              </RevealText>
              <RevealText delay={0.1}>
                <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em] leading-tight mb-8">
                  We know the <span className="text-signal">{data.name} market.</span>
                </h2>
              </RevealText>
              <RevealText delay={0.2}>
                <p className="font-lato text-base text-text-secondary leading-[1.85] mb-8">{data.why}</p>
              </RevealText>
              <RevealText delay={0.3}>
                <MagneticButton strength={0.4}>
                  <button onClick={() => window.open('https://calendar.app.google/Mp8HrgYK67yjuYA29', '_blank', 'noopener,noreferrer')} className="inline-flex items-center gap-3 bg-ink text-paper px-6 py-3 rounded-lg font-lato text-sm font-medium hover:bg-signal transition-colors duration-500">
                    <span className="w-10 h-10 rounded-full bg-signal flex items-center justify-center group-hover:bg-signal/80 transition-colors duration-[1200ms]">
                      <span className="text-ink text-xs">→</span>
                    </span>
                    <span className="text-paper">Start Your Audit</span>
                  </button>
                </MagneticButton>
              </RevealText>
            </div>
            <div className="space-y-4 md:pt-16">
              <RevealText>
                <p className="font-lato text-[11px] tracking-[0.25em] uppercase text-text-muted mb-6 font-semibold">Why we win in {data.name}</p>
              </RevealText>
              {[
                { icon: '◆', title: 'Local Market Depth', desc: `Deep understanding of ${data.name}'s search landscape, buyer psychology, and competitive dynamics.` },
                { icon: '◆', title: 'Proven Process', desc: 'A structured 4-step methodology that turns market intelligence into measurable revenue results.' },
                { icon: '◆', title: 'Transparent Reporting', desc: 'Every ranking, every lead, every conversion tracked and reported monthly with full attribution.' },
                { icon: '◆', title: 'Principal-Led Work', desc: 'Senior strategists manage every account. No account managers, no offshore delegation.' },
              ].map((item, i) => (
                <RevealText key={i} delay={i * 0.08} duration={1.2}>
                  <div className="flex gap-4 py-5 border-b border-border/40 items-start group">
                    <span className="text-signal text-xs mt-1 flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-syne font-700 text-base text-ink mb-1">{item.title}</p>
                      <p className="font-lato text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </RevealText>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. OUR RESULTS ── */}
      <section className="py-16 md:py-36 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center mb-20">
            <div className="md:col-span-6">
              <RevealText>
                <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4 font-semibold">OUR RESULTS</p>
              </RevealText>
              <RevealText delay={0.1}>
                <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em] leading-tight">
                  Numbers that speak<span className="text-signal">.</span>
                </h2>
              </RevealText>
            </div>
            <div className="md:col-span-6">
              <RevealText delay={0.2}>
                <p className="font-lato text-base text-text-secondary leading-[1.85]">
                  Every metric below is drawn from real client campaigns in {data.name} and comparable markets. We don't use industry averages — we use our own data.
                </p>
              </RevealText>
            </div>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/40 border border-border/40 rounded-2xl overflow-hidden mb-8">
            {(data.stats as [string, string][]).map(([num, label], i) => (
              <RevealText key={label} delay={i * 0.08} duration={1.2}>
                <div className="bg-paper dark:bg-surface/5 px-6 py-8 md:py-10 flex flex-col justify-center">
                  <div className="font-syne font-800 text-3xl md:text-4xl text-ink leading-none mb-2">{num}</div>
                  <p className="font-lato text-[11px] tracking-wider text-text-muted uppercase font-semibold">{label}</p>
                </div>
              </RevealText>
            ))}
          </div>

          {/* Result highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {(data.results as [string, string, string][]).map(([metric, label, context], i) => (
              <RevealText key={label} delay={i * 0.1} duration={1.4}>
                <div className="bg-surface/30 border border-border/40 rounded-2xl p-6 md:p-8 hover:bg-signal/5 transition-colors duration-500">
                  <div className="font-syne font-800 text-4xl md:text-5xl text-signal leading-none mb-3">{metric}</div>
                  <p className="font-syne font-700 text-base text-ink mb-2">{label}</p>
                  <p className="font-lato text-xs text-text-muted leading-relaxed">{context}</p>
                </div>
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. OUR PROCESS ── */}
      <section className="py-16 md:py-36 border-t border-border bg-surface/20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-16">
          <div className="mb-16 md:mb-20">
            <RevealText>
              <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4 font-semibold">OUR PROCESS</p>
            </RevealText>
            <RevealText delay={0.1}>
              <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em] leading-tight max-w-2xl">
                How we turn {data.name} market intelligence into<span className="text-signal"> revenue.</span>
              </h2>
            </RevealText>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(data.process as { step: string; title: string; desc: string }[]).map((step, i) => (
              <RevealText key={step.step} delay={i * 0.1} duration={1.4}>
                <div className="relative border border-border/40 bg-paper dark:bg-surface/5 rounded-2xl p-6 md:p-8 hover:border-signal/40 transition-colors duration-500 h-full">
                  <span className="font-mono text-[10px] tracking-widest text-signal font-bold mb-6 block">{step.step}</span>
                  <div className="w-6 h-0.5 bg-signal/40 mb-5" />
                  <h3 className="font-syne text-lg md:text-xl font-800 tracking-tight text-ink mb-4">{step.title}</h3>
                  <p className="font-lato text-sm text-text-secondary leading-[1.85]">{step.desc}</p>
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-signal/30" />
                  )}
                </div>
              </RevealText>
            ))}
          </div>
          <RevealText delay={0.4} duration={1.4}>
            <div className="mt-12 flex flex-wrap items-center gap-6 md:gap-10">
              <MagneticButton strength={0.4}>
                <button onClick={() => window.open('https://calendar.app.google/Mp8HrgYK67yjuYA29', '_blank', 'noopener,noreferrer')} className="inline-flex items-center gap-3 bg-ink text-paper px-6 py-3 rounded-lg font-lato text-sm font-medium hover:bg-signal transition-colors duration-500">
                  <span className="w-12 h-12 rounded-full bg-signal flex items-center justify-center group-hover:bg-signal/80 transition-colors duration-[1200ms]">
                    <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} className="text-ink text-sm">→</motion.span>
                  </span>
                  <span className="font-lato text-sm font-medium text-paper">Start with a Free Audit</span>
                </button>
              </MagneticButton>
              <MagneticButton strength={0.3}>
                <Link href="/case-studies" className="font-lato text-sm text-text-muted hover:text-ink transition-colors duration-500 sig-hover py-2">
                  See Client Results
                </Link>
              </MagneticButton>
            </div>
          </RevealText>
        </div>
      </section>

      {/* ── 6. TESTIMONIALS ── */}
      <section className="py-16 md:py-36 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 md:px-16">
          <div className="mb-16 md:mb-20">
            <RevealText>
              <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4 font-semibold">CLIENT TESTIMONIALS</p>
            </RevealText>
            <RevealText delay={0.1}>
              <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em] leading-tight">
                What {data.name} clients say<span className="text-signal">.</span>
              </h2>
            </RevealText>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.testimonials as { name: string; role: string; company: string; quote: string }[]).map((t, i) => (
              <RevealText key={t.name} delay={i * 0.1} duration={1.4}>
                <div className="border border-border/40 bg-surface/30 rounded-2xl p-7 md:p-8 flex flex-col justify-between h-full hover:border-signal/30 transition-colors duration-500">
                  <div>
                    <div className="text-signal text-2xl mb-6 select-none">"</div>
                    <p className="font-lato text-base text-text-secondary leading-[1.85] mb-8">
                      {t.quote}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 border-t border-border/40 pt-5">
                    <div className="w-9 h-9 rounded-full bg-signal/15 flex items-center justify-center flex-shrink-0">
                      <span className="font-syne font-800 text-sm text-signal">{t.name[0]}</span>
                    </div>
                    <div>
                      <p className="font-syne font-700 text-sm text-ink leading-tight">{t.name}</p>
                      <p className="font-lato text-[11px] text-text-muted">{t.role}, {t.company}</p>
                    </div>
                  </div>
                </div>
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. LOCAL PRESENCE ── */}
      <section className="py-16 md:py-36 border-t border-border bg-surface/20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
            <div>
              <RevealText>
                <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4 font-semibold">LOCAL PRESENCE</p>
              </RevealText>
              <RevealText delay={0.1}>
                <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em] leading-tight mb-8">
                  Deep expertise in the <span className="text-signal">{data.name} market.</span>
                </h2>
              </RevealText>
              <RevealText delay={0.2}>
                <p className="font-lato text-base text-text-secondary leading-[1.85]">
                  Our strategies are calibrated to the specific search behaviour, competitive dynamics, and buyer psychology of {data.name}. We don't apply generic templates — we apply {data.name}-specific intelligence.
                </p>
              </RevealText>
            </div>
            <div className="space-y-3 md:pt-16">
              <RevealText>
                <p className="font-lato text-[11px] tracking-[0.25em] uppercase text-text-muted mb-6 font-semibold">Market Expertise</p>
              </RevealText>
              <div className="divide-y divide-border/40">
                {(data.market as string[]).map((item, i) => (
                  <RevealText key={i} delay={i * 0.08} duration={1.2}>
                    <div className="flex gap-4 py-4 items-start">
                      <div className="w-1.5 h-1.5 bg-signal rounded-full flex-shrink-0 mt-2.5" />
                      <p className="font-lato text-base text-text-secondary leading-relaxed">{item}</p>
                    </div>
                  </RevealText>
                ))}
              </div>
              <RevealText delay={0.4}>
                <div className="pt-6">
                  <p className="font-lato text-[11px] tracking-[0.25em] uppercase text-text-muted mb-5 font-semibold">Industries We Serve</p>
                  <div className="flex flex-wrap gap-2">
                    {(data.industries as string[]).map((ind) => (
                      <span key={ind} className="font-lato text-xs text-text-secondary border border-border/50 rounded-full px-3 py-1.5 hover:border-signal/50 hover:text-signal transition-colors duration-300 cursor-default">
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealText>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. ABOUT SEO SERVICES ── */}
      <section className="py-16 md:py-36 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
            <div className="md:col-span-4 md:sticky md:top-40 md:self-start">
              <RevealText>
                <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4 font-semibold">ABOUT</p>
              </RevealText>
              <RevealText delay={0.1}>
                <h2 className="font-syne text-3xl md:text-4xl font-800 tracking-[-0.03em] leading-tight mb-6">
                  SEO Services in {data.name}<span className="text-signal">.</span>
                </h2>
              </RevealText>
              <RevealText delay={0.2}>
                <MagneticButton strength={0.3}>
                  <Link href="/contact" className="group inline-flex items-center gap-3 font-lato text-sm text-text-muted hover:text-ink transition-colors duration-500 sig-hover">
                    Speak to a strategist <span className="text-xs">→</span>
                  </Link>
                </MagneticButton>
              </RevealText>
            </div>
            <div className="md:col-span-7 md:col-start-6 space-y-6">
              {aboutParagraphs.map((para, i) => (
                <RevealText key={i} delay={i * 0.1} duration={1.6}>
                  <p className="font-lato text-base md:text-lg text-text-secondary leading-[1.9]">{para}</p>
                </RevealText>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. EXPLORE MORE (CTA STRIP) ── */}
      <section className="border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 md:px-16 py-16 md:py-16">
          <RevealText duration={1.4}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 bg-signal/5 border border-signal/20 rounded-2xl px-8 md:px-12 py-10 md:py-12">
              <div>
                <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-3 font-semibold">EXPLORE MORE</p>
                <h2 className="font-syne text-2xl md:text-4xl font-800 tracking-[-0.02em] leading-tight max-w-xl">
                  Ready to dominate search in {data.name}<span className="text-signal">?</span>
                </h2>
                <p className="font-lato text-sm text-text-secondary mt-3 max-w-lg leading-[1.85]">
                  Book a free 30-minute strategy call. Our founders will audit your current {data.name} presence and map out a custom growth roadmap — no commitment required.
                </p>
              </div>
              <div className="flex flex-col gap-4 flex-shrink-0">
                <MagneticButton strength={0.4}>
                  <button onClick={() => window.open('https://calendar.app.google/Mp8HrgYK67yjuYA29', '_blank', 'noopener,noreferrer')} className="inline-flex items-center gap-3 bg-ink text-paper px-6 py-3 rounded-lg font-lato text-sm font-medium hover:bg-signal transition-colors duration-500">
                    <span className="w-12 h-12 rounded-full bg-signal flex items-center justify-center group-hover:bg-signal/80 transition-colors duration-[1200ms]">
                      <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} className="text-ink text-sm">→</motion.span>
                    </span>
                    <span className="font-lato text-sm font-medium text-paper">Book Free Strategy Call</span>
                  </button>
                </MagneticButton>
                <MagneticButton strength={0.3}>
                  <Link href="/solutions" className="font-lato text-sm text-text-muted hover:text-ink transition-colors duration-500 sig-hover py-1 text-center">
                    Explore All Solutions
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </RevealText>
        </div>
      </section>

      {/* ── 10. RESOURCES ── */}
      <section className="py-16 md:py-36 border-t border-border bg-surface/20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-16">
          <div className="mb-14 md:mb-16">
            <RevealText>
              <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4 font-semibold">RESOURCES</p>
            </RevealText>
            <RevealText delay={0.1}>
              <h2 className="font-syne text-3xl md:text-4xl font-800 tracking-[-0.03em] leading-tight">
                {data.name} digital marketing<span className="text-signal"> guides.</span>
              </h2>
            </RevealText>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.resources as { title: string; desc: string; href: string }[]).map((res, i) => (
              <RevealText key={res.title} delay={i * 0.1} duration={1.4}>
                <Link href={res.href} className="group block border border-border/40 bg-paper dark:bg-surface/5 rounded-2xl p-7 md:p-8 hover:border-signal/40 hover:bg-signal/5 transition-all duration-500 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-6 h-0.5 bg-signal mb-5 group-hover:scale-x-150 group-hover:origin-left transition-transform duration-500" />
                    <h3 className="font-syne text-lg font-800 tracking-tight text-ink mb-3 group-hover:text-signal transition-colors duration-300">{res.title}</h3>
                    <p className="font-lato text-sm text-text-secondary leading-[1.8]">{res.desc}</p>
                  </div>
                  <span className="font-lato text-[11px] font-bold text-signal tracking-[0.12em] uppercase flex items-center gap-1 mt-6 group-hover:translate-x-1.5 transition-transform duration-500">
                    Read Guide <span className="text-xs">→</span>
                  </span>
                </Link>
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      {/* ── OTHER CITIES ── */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 md:px-16">
          <RevealText>
            <p className="font-lato text-[10px] tracking-[0.25em] uppercase text-text-muted mb-8 font-semibold">Also Serving</p>
          </RevealText>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {CITIES.filter(([, p]) => p !== `city-${cityKey}`).map(([name, path]) => (
              <Link
                key={name}
                href={`/${path}`}
                className="font-lato text-[11px] font-bold text-text-secondary py-3.5 px-4 border border-border/50 rounded-xl transition-all duration-[400ms] flex items-center justify-between hover:bg-ink hover:text-paper hover:border-ink dark:hover:bg-white dark:hover:text-ink"
              >
                <span>{name}</span>
                <span className="text-xs">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </PageTransition>
  );
}

