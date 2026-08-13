"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import { m, useScroll, useTransform } from 'framer-motion';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import CircleArrowButton from '../components/CircleArrowButton';
import ParticleField from '../components/ParticleField';
import PageTransition from '../components/PageTransition';
import { getServiceCityData, SOLUTIONS_CITIES, ServiceKey, CityKey } from '../lib/serviceCityData';
import { industries } from '../lib/siteConfig';

const slowEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

interface ServiceCityPageProps {
  serviceKey: ServiceKey;
  cityKey: CityKey;
}

export default function ServiceCityPage({ serviceKey, cityKey }: ServiceCityPageProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const data = getServiceCityData(serviceKey, cityKey);

  const aboutParagraphs = data.about.split('\n\n');

  // Helper to get paths to other cities for the same service
  const otherCities = SOLUTIONS_CITIES.filter(c => c.key !== cityKey);

  return (
    <PageTransition>

      {/* ── 1. HERO ── */}
      <section ref={heroRef} className="relative min-h-[60vh] md:min-h-[80vh] flex items-end overflow-hidden pb-20 md:pb-36">
        <ParticleField />
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-signal/[0.03] blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] font-syne font-800 text-[10rem] md:text-[16rem] text-ink/[0.02] dark:text-white/[0.015] leading-none select-none pointer-events-none z-0 uppercase">
          {data.badge}
        </div>
        <m.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-16 pt-24 md:pt-40 w-full">
          <RevealText duration={1.6}>
            <h1 className="font-syne text-4xl md:text-7xl lg:text-8xl font-800 tracking-[-0.04em] leading-[0.92] max-w-5xl">
              {data.serviceShortTitle} Agency<br />
              <span className="text-signal">in {data.cityName}.</span>
            </h1>
          </RevealText>
          <RevealText delay={0.2} duration={1.6}>
            <p className="font-lato text-base md:text-lg text-text-secondary max-w-2xl leading-[1.85] mt-8 mb-12">
              {data.sub}
            </p>
          </RevealText>
          <RevealText delay={0.35} duration={1.4}>
            <div className="flex flex-wrap items-center gap-6 md:gap-10">
              <CircleArrowButton
                label={`Get ${data.cityName} Strategy Audit`}
                onClick={() => window.open('https://calendar.app.google/Mp8HrgYK67yjuYA29', '_blank', 'noopener,noreferrer')}
              />
              <MagneticButton strength={0.3}>
                <Link href="/case-studies" className="font-lato text-sm text-text-muted hover:text-ink transition-colors duration-500 sig-hover py-2">
                  View Case Studies
                </Link>
              </MagneticButton>
            </div>
          </RevealText>
        </m.div>
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
                {data.serviceShortTitle} capabilities tailored<br />
                <span className="text-signal">to the {data.cityName} market.</span>
              </h2>
            </RevealText>
            <RevealText delay={0.2}>
              <p className="font-lato text-base text-text-secondary max-w-2xl leading-[1.85] mt-6">
                Every campaign is calibrated to {data.cityName}'s competitive dynamics, platform trends, and target buyer psychology.
              </p>
            </RevealText>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(data.services as [string, string, string][]).map(([title, desc, pathKey], i) => (
              <RevealText key={title} delay={i * 0.08} duration={1.4}>
                <Link href={`/services/${pathKey}`} className="block bg-surface/30 border border-border/40 p-8 md:p-10 rounded-2xl transition-all duration-[600ms] hover:bg-ink dark:hover:bg-white hover:text-paper dark:hover:text-ink group relative overflow-hidden">
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
                  We know the <span className="text-signal">{data.cityName} landscape.</span>
                </h2>
              </RevealText>
              <RevealText delay={0.2}>
                <p className="font-lato text-base text-text-secondary leading-[1.85] mb-8">{data.why}</p>
              </RevealText>
              <RevealText delay={0.3}>
                <CircleArrowButton
                  label="Start Your Audit"
                  onClick={() => window.open('https://calendar.app.google/Mp8HrgYK67yjuYA29', '_blank', 'noopener,noreferrer')}
                  size="sm"
                  animated={false}
                />
              </RevealText>
            </div>
            <div className="space-y-4 md:pt-16">
              <RevealText>
                <p className="font-lato text-[11px] tracking-[0.25em] uppercase text-text-muted mb-6 font-semibold">Why we win in {data.cityName}</p>
              </RevealText>
              {[
                { icon: '◆', title: 'Local Insights & Intent', desc: `Deep analysis of local keyword difficulty and specific buyer journeys in ${data.cityName}.` },
                { icon: '◆', title: 'Actionable Roadmaps', desc: 'No generic strategy files. We deliver concrete technical adjustments and content calendars.' },
                { icon: '◆', title: 'Principal-Led Service', desc: 'Work directly with senior leads who actively code, write, and manage ad platforms.' },
                { icon: '◆', title: 'Uncompromising Quality', desc: 'Ultra-fast builds, high-production content, and strict attribution models.' },
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
                  Compounding metrics<span className="text-signal">.</span>
                </h2>
              </RevealText>
            </div>
            <div className="md:col-span-6">
              <RevealText delay={0.2}>
                <p className="font-lato text-base text-text-secondary leading-[1.85]">
                  Every figure here reflects real performance metrics achieved across our campaigns. We value transparent metrics over vanity vanity scores.
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
                How we execute campaigns for {data.cityName} brands<span className="text-signal">.</span>
              </h2>
            </RevealText>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.process.map((step, i) => (
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
                Trusted by category leaders<span className="text-signal">.</span>
              </h2>
            </RevealText>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.testimonials.map((t, i) => (
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
                  Serving the <span className="text-signal">{data.cityName} market.</span>
                </h2>
              </RevealText>
              <RevealText delay={0.2}>
                <p className="font-lato text-base text-text-secondary leading-[1.85]">
                  Our strategies adjust specifically for local buyer parameters in {data.cityName}. We understand the region's query frequencies, digital density, and competitor activity.
                </p>
              </RevealText>
            </div>
            <div className="space-y-3 md:pt-16">
              <RevealText>
                <p className="font-lato text-[11px] tracking-[0.25em] uppercase text-text-muted mb-6 font-semibold">Market Expertise</p>
              </RevealText>
              <div className="divide-y divide-border/40">
                {data.market.map((item, i) => (
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
                    {data.industries.map((ind) => (
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

      {/* ── 7b. VERTICALS ── */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 md:px-16">
          <RevealText>
            <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4 font-semibold">VERTICALS</p>
          </RevealText>
          <RevealText delay={0.1}>
            <h2 className="font-syne text-2xl md:text-3xl font-800 tracking-[-0.03em] leading-tight mb-8">
              Specialized structures for high-value business models<span className="text-signal">.</span>
            </h2>
          </RevealText>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 md:mx-0 md:px-0">
            {industries.map((ind, i) => (
              <RevealText key={ind.slug} delay={i * 0.05} duration={1.2}>
                <Link
                  href={`/industries/${ind.slug}`}
                  className="group block flex-shrink-0 w-[280px] md:w-[300px] bg-surface/30 border border-border/40 rounded-2xl p-6 hover:border-signal/40 hover:bg-signal/5 transition-all duration-500 h-full"
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="font-syne text-lg font-800 tracking-tight text-ink group-hover:text-signal transition-colors duration-300">{ind.title}</h3>
                    <span className="text-signal group-hover:translate-x-1 transition-transform duration-[600ms] text-xs mt-1">→</span>
                  </div>
                  <p className="font-lato text-[11px] uppercase tracking-wider text-signal font-semibold mb-3">{ind.tagline}</p>
                  <p className="font-lato text-[13px] text-text-muted leading-[1.6]">{ind.description}</p>
                </Link>
              </RevealText>
            ))}
          </div>
          <RevealText delay={0.4}>
            <div className="mt-8">
              <Link href="/industries" className="font-lato text-sm font-medium text-signal sig-hover">Explore All Sectors We Serve →</Link>
            </div>
          </RevealText>
        </div>
      </section>

      {/* ── 8. ABOUT SEO/AEO/GEO SERVICES ── */}
      <section className="py-16 md:py-36 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
            <div className="md:col-span-4 md:sticky md:top-40 md:self-start">
              <RevealText>
                <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4 font-semibold">ABOUT</p>
              </RevealText>
              <RevealText delay={0.1}>
                <h2 className="font-syne text-3xl md:text-4xl font-800 tracking-[-0.03em] leading-tight mb-6">
                  {data.serviceShortTitle} inside {data.cityName}<span className="text-signal">.</span>
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
                  Ready to accelerate your presence in {data.cityName}<span className="text-signal">?</span>
                </h2>
                <p className="font-lato text-sm text-text-secondary mt-3 max-w-lg leading-[1.85]">
                  Get an audit of your current channels, competitor analysis, and prioritized action steps. Fully customized, completely commitment-free.
                </p>
              </div>
              <div className="flex flex-col gap-4 flex-shrink-0">
                <CircleArrowButton
                  label="Book Free Strategy Call"
                  onClick={() => window.open('https://calendar.app.google/Mp8HrgYK67yjuYA29', '_blank', 'noopener,noreferrer')}
                />
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
                {data.cityName} digital growth guides<span className="text-signal">.</span>
              </h2>
            </RevealText>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.resources.map((res, i) => (
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
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            {otherCities.map((c) => (
              <Link
                key={c.key}
                href={`/location/${c.key}/${serviceKey}-service-in-${c.key}`}
                className="font-lato text-[11px] font-bold text-text-secondary py-3.5 px-4 border border-border/50 rounded-xl transition-all duration-[400ms] flex items-center justify-between hover:bg-ink hover:text-paper hover:border-ink dark:hover:bg-white dark:hover:text-ink"
              >
                <span>{c.name}</span>
                <span className="text-xs">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </PageTransition>
  );
}

