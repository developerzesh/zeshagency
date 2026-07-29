"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import ParticleField from '../components/ParticleField';
import PageTransition from '../components/PageTransition';
import CTA from '../components/CTA';
import { CITY_DATA, CITIES, SOL_MAP } from '../lib/cityData';

const slowEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

const toPath = (p: string) => {
  const slug = SOL_MAP[p] || p;
  return `/solutions?slug=${slug}`;
};

interface CityPageProps {
  cityKey: string;
}

export default function CityPage({ cityKey }: CityPageProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const data = CITY_DATA[cityKey as keyof typeof CITY_DATA];

  if (!data) {
    return (
      <PageTransition>
        <div className="bg-ink min-h-[60vh] flex items-center justify-center py-44 px-6">
          <div className="text-center max-w-lg">
            <h1 className="font-syne text-4xl md:text-5xl font-800 text-paper mb-4 leading-tight">
              City Page Coming Soon
            </h1>
            <p className="font-lato text-base text-text-muted mb-8 leading-[1.85]">
              We are expanding our city coverage. Get in touch for your region.
            </p>
            <div className="inline-block">
              <MagneticButton strength={0.3}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-4 font-lato text-sm font-medium text-paper bg-signal px-6 py-3.5 rounded-xl hover:bg-signal/80 transition-all duration-300"
                >
                  Contact Us →
                </Link>
              </MagneticButton>
            </div>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative bg-paper text-ink pt-44 pb-28 px-6 md:px-16 overflow-hidden min-h-[85vh] flex items-center"
      >
        <ParticleField />

        {/* Subtle dynamic background glow */}
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-signal/[0.03] blur-[150px] rounded-full pointer-events-none" />

        {/* Large watermark city badge */}
        <div className="absolute bottom-[-10%] right-[-5%] font-syne font-800 text-[10rem] md:text-[20rem] text-ink/[0.02] dark:text-white/[0.015] leading-none select-none pointer-events-none z-0">
          {data.badge}
        </div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-[1400px] mx-auto w-full"
        >
          {/* Flag / Country Indicator */}
          {/* <div className="inline-flex items-center gap-2.5 bg-signal/10 border border-signal/25 rounded-full px-4.5 py-1.5 mb-8">
            <span className="text-lg">{data.flag}</span>
            <span className="font-lato text-[10px] font-bold tracking-[0.15em] uppercase text-signal">
              {data.country}
            </span>
          </div> */}

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
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <MagneticButton strength={0.4}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-4 font-lato text-sm font-medium text-paper bg-ink hover:bg-signal hover:text-ink px-6 py-3.5 rounded-xl transition-all duration-[800ms]"
                >
                  <span className="w-8 h-8 rounded-full bg-paper/10 group-hover:bg-ink/10 flex items-center justify-center transition-colors">
                    <span className="text-xs">→</span>
                  </span>
                  Get {data.name} Strategy Audit
                </Link>
              </MagneticButton>

              <MagneticButton strength={0.3}>
                <Link
                  href="/case-studies"
                  className="font-lato text-sm text-text-muted hover:text-ink transition-colors duration-500 sig-hover py-2"
                >
                  View Case Studies
                </Link>
              </MagneticButton>
            </div>
          </RevealText>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-surface/30 dark:bg-surface/5 border-t border-b border-border/40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-0 py-8 md:py-12">
            {data.stats.map(([num, label], i) => (
              <div
                key={label}
                className="px-4 md:px-8 border-r border-border/30 last:border-r-0 max-md:even:border-r-0 flex flex-col justify-center"
              >
                <div className="font-syne font-800 text-3xl md:text-4xl text-ink leading-none">
                  {num}
                </div>
                <p className="font-lato text-[11px] tracking-wider text-text-muted mt-2 uppercase font-semibold">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Different Section */}
      <section className="py-24 md:py-36 bg-paper">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">

            {/* Left Col */}
            <div>
              <RevealText>
                <p className="font-lato text-[11px] tracking-[0.25em] uppercase text-signal mb-4 font-semibold">
                  Why {data.name} Is Different
                </p>
              </RevealText>
              <RevealText delay={0.1}>
                <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em] leading-tight mb-8">
                  Understanding the <span className="text-signal">{data.name} market.</span>
                </h2>
              </RevealText>
              <RevealText delay={0.2}>
                <p className="font-lato text-base text-text-secondary leading-[1.85]">
                  {data.why}
                </p>
              </RevealText>
            </div>

            {/* Right Col */}
            <div className="space-y-6 md:pt-16">
              <RevealText>
                <p className="font-lato text-[11px] tracking-[0.25em] uppercase text-text-muted mb-6 font-semibold">
                  Local Market Expertise
                </p>
              </RevealText>

              <div className="divide-y divide-border/40">
                {data.market.map((item, i) => (
                  <RevealText key={i} delay={i * 0.08} duration={1.2}>
                    <div className="flex gap-4 py-4.5 items-start">
                      <div className="w-1.5 h-1.5 bg-signal rounded-full flex-shrink-0 mt-2.5" />
                      <p className="font-lato text-base text-text-secondary leading-relaxed">
                        {item}
                      </p>
                    </div>
                  </RevealText>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-36 bg-surface/30 border-t border-border/40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="mb-16 md:mb-20">
            <RevealText>
              <p className="font-lato text-[11px] tracking-[0.25em] uppercase text-signal mb-4 font-semibold">
                Services for {data.name} Brands
              </p>
            </RevealText>
            <RevealText delay={0.1}>
              <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em] leading-tight">
                Digital marketing tailored<br />
                <span className="text-signal">to the {data.name} market.</span>
              </h2>
            </RevealText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.services.map(([title, desc, pathKey], i) => (
              <RevealText key={title} delay={i * 0.08} duration={1.4}>
                <Link
                  href={toPath(pathKey)}
                  className="block bg-paper dark:bg-surface/5 border border-border/40 p-8 md:p-10 rounded-2xl transition-all duration-[600ms] hover:bg-ink dark:hover:bg-white hover:text-paper dark:hover:text-ink group relative overflow-hidden"
                >
                  <div className="w-6 h-0.5 bg-signal mb-6 transition-transform duration-500 group-hover:scale-x-150 group-hover:origin-left" />

                  <h3 className="font-syne text-xl md:text-2xl font-800 tracking-tight mb-4 group-hover:text-signal transition-colors duration-500">
                    {title}
                  </h3>

                  <p className="font-lato text-sm text-text-secondary leading-[1.8] mb-8 group-hover:text-text-muted transition-colors duration-500">
                    {desc}
                  </p>

                  <span className="font-lato text-[11px] font-bold text-signal tracking-[0.12em] uppercase flex items-center gap-1 group-hover:translate-x-1.5 transition-transform duration-500">
                    Explore Service <span className="text-xs">→</span>
                  </span>
                </Link>
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 md:py-36 bg-paper border-t border-border/40 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-signal/[0.02] blur-[200px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-16 relative z-10">
          <div className="mb-16">
            <RevealText>
              <p className="font-lato text-[10px] tracking-[0.3em] uppercase text-text-muted mb-4 font-semibold">
                Industries We Serve in {data.name}
              </p>
            </RevealText>
            <RevealText delay={0.1}>
              <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em] leading-tight">
                Sector expertise for <span className="text-signal">{data.name}'s economy.</span>
              </h2>
            </RevealText>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border/40 border border-border/40 rounded-2xl overflow-hidden">
            {data.industries.map((ind, i) => (
              <div
                key={ind}
                className="bg-paper dark:bg-surface/5 p-6 md:p-8 hover:bg-signal/5 dark:hover:bg-signal/5 transition-all duration-500 flex flex-col justify-between min-h-[120px] group cursor-default"
              >
                <div className="w-4 h-0.5 bg-signal/50 mb-6 group-hover:bg-signal group-hover:scale-x-125 transition-all" />
                <p className="font-syne font-700 text-base md:text-lg text-ink tracking-tight group-hover:text-signal transition-colors duration-300">
                  {ind}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Cities Section */}
      <section className="py-16 md:py-24 bg-surface/20 border-t border-border/40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <RevealText>
            <p className="font-lato text-[10px] tracking-[0.25em] uppercase text-text-muted mb-8 font-semibold">
              Also Serving
            </p>
          </RevealText>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {CITIES.filter(([, p]) => p !== `city-${cityKey}`).map(([name, path]) => (
              <Link
                key={name}
                href={`/${path}`}
                className="font-lato text-[11px] font-bold text-text-secondary py-3.5 px-4.5 border border-border/50 rounded-xl transition-all duration-[400ms] flex items-center justify-between hover:bg-ink hover:text-paper hover:border-ink dark:hover:bg-white dark:hover:text-ink"
              >
                <span>{name}</span>
                <span className="text-xs">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <CTA />
    </PageTransition>
  );
}
