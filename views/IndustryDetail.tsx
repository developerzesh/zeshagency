"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import PageTransition from '../components/PageTransition';
import ParticleField from '../components/ParticleField';
import type { Industry } from '../lib/data';
import { caseStudies } from '../lib/data';

const slowEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

// ─── Section: Hero ────────────────────────────────────────────────────────────
function HeroSection({ industry }: { industry: Industry }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      <ParticleField />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div className="absolute top-1/3 -right-24 w-[700px] h-[700px] rounded-full bg-signal/[0.012] blur-[300px]" />
        <motion.div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-ink/[0.006] blur-[200px]" />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16 w-full pt-40 md:pt-40 pb-36">
        {/* Breadcrumb */}
        <motion.a
          href="/industries"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: slowEase }}
          className="inline-flex items-center gap-2 font-lato text-[10px] tracking-[0.3em] uppercase text-text-muted hover:text-signal transition-colors duration-700 mb-28 group"
        >
          <motion.span animate={{ x: [0, -3, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} className="group-hover:text-signal transition-colors duration-700">←</motion.span>
          <span>Industries</span>
        </motion.a>

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, filter: 'blur(12px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.4, delay: 0.4, ease: slowEase }}
          className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-7"
        >
          {industry.shortTitle}
        </motion.p>

        {/* Headline */}
        <h1 className="font-syne text-[clamp(2.6rem,5.5vw,6rem)] font-800 leading-[0.88] tracking-[-0.04em] mb-10 max-w-5xl">
          <motion.span
            initial={{ opacity: 0, filter: 'blur(40px)', y: 50 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 1.8, delay: 0.6, ease: slowEase }}
            className="block"
          >
            {industry.title}<span className="text-signal">.</span>
          </motion.span>
        </h1>

        {/* Two-column bottom row: tagline left / CTAs right */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mt-4">
          <motion.div
            initial={{ opacity: 0, filter: 'blur(24px)', y: 24 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 1.6, delay: 1.1, ease: slowEase }}
            className="max-w-xl"
          >
            <p className="font-lato text-base md:text-[17px] text-text-secondary leading-[1.9]">
              {industry.description}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, filter: 'blur(20px)', y: 16 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 1.6, delay: 1.5, ease: slowEase }}
            className="flex flex-col items-start gap-4 flex-shrink-0"
          >
            <MagneticButton strength={0.4}>
              <a href="/contact" className="group flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-ink flex items-center justify-center group-hover:bg-signal transition-colors duration-[1200ms]">
                  <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} className="text-paper text-sm">→</motion.span>
                </span>
                <span className="font-lato text-sm font-medium text-ink">Book a Consultation Call</span>
              </a>
            </MagneticButton>
            <MagneticButton strength={0.3}>
              <a href="/case-studies" className="font-lato text-sm text-text-muted hover:text-ink transition-colors duration-700 sig-hover">View Case Studies</a>
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

// ─── Section: Challenges We Solve ────────────────────────────────────────────
function ChallengesSection({ industry }: { industry: Industry }) {
  return (
    <section className="py-28 md:py-36 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Left label column */}
          <div className="md:col-span-4">
            <RevealText>
              <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">01 — Challenges</p>
            </RevealText>
            <RevealText delay={0.1}>
              <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em] leading-tight">
                Challenges We Solve<span className="text-signal">.</span>
              </h2>
            </RevealText>
            <RevealText delay={0.2}>
              <p className="font-lato text-sm text-text-muted leading-[1.85] mt-6 max-w-sm">
                Every {industry.shortTitle} company faces structural barriers to organic growth. These are the friction points we eliminate.
              </p>
            </RevealText>
          </div>

          {/* Right list column */}
          <div className="md:col-span-7 md:col-start-6">
            {industry.challenges.map((challenge, i) => (
              <RevealText key={challenge} delay={0.1 + i * 0.07}>
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.8, ease: slowEase }}
                  className="group flex items-baseline gap-6 py-6 border-b border-border/60 last:border-b-0"
                >
                  <span className="font-lato text-[10px] tracking-[0.2em] uppercase text-signal/50 group-hover:text-signal transition-colors duration-[900ms] flex-shrink-0 pt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-lato text-base md:text-lg text-text-secondary group-hover:text-ink transition-colors duration-[900ms] leading-[1.7]">
                    {challenge}
                  </span>
                </motion.div>
              </RevealText>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section: Our Approach ────────────────────────────────────────────────────
function ApproachSection({ industry }: { industry: Industry }) {
  return (
    <section className="py-28 md:py-36 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Right content first on desktop via col-start */}
          <div className="md:col-span-7 order-2 md:order-1">
            {industry.opportunities.map((opportunity, i) => (
              <RevealText key={opportunity} delay={0.1 + i * 0.07}>
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.8, ease: slowEase }}
                  className="group flex items-baseline gap-6 py-6 border-b border-border/60 last:border-b-0"
                >
                  <span className="w-5 h-5 flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-signal/30 group-hover:bg-signal transition-colors duration-[900ms]" />
                  </span>
                  <span className="font-lato text-base md:text-lg text-text-secondary group-hover:text-ink transition-colors duration-[900ms] leading-[1.7]">
                    {opportunity}
                  </span>
                </motion.div>
              </RevealText>
            ))}
          </div>

          {/* Label column */}
          <div className="md:col-span-4 md:col-start-9 order-1 md:order-2 flex flex-col md:items-end md:text-right">
            <RevealText>
              <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">02 — Approach</p>
            </RevealText>
            <RevealText delay={0.1}>
              <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em] leading-tight">
                Our Approach<span className="text-signal">.</span>
              </h2>
            </RevealText>
            <RevealText delay={0.2}>
              <p className="font-lato text-sm text-text-muted leading-[1.85] mt-6">
                Specific, systematic, and built around the organic search realities of {industry.shortTitle}.
              </p>
            </RevealText>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section: Strategic Roadmap ───────────────────────────────────────────────
function RoadmapSection({ industry }: { industry: Industry }) {
  return (
    <section className="py-28 md:py-36 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="mb-28 md:mb-32">
          <RevealText>
            <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">03 — Roadmap</p>
          </RevealText>
          <RevealText delay={0.1}>
            <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em] leading-tight">
              Strategic Roadmap<span className="text-signal">.</span>
            </h2>
          </RevealText>
          <RevealText delay={0.15}>
            <p className="font-lato text-sm text-text-muted max-w-lg leading-[1.85] mt-6">
              A structured, phased execution plan. Each phase is sequential and builds directly on the last.
            </p>
          </RevealText>
        </div>

        <div className="space-y-0">
          {industry.roadmap.map((phase, i) => (
            <RevealText key={phase.phase} delay={i * 0.1}>
              <motion.div
                whileHover={{ x: 6 }}
                transition={{ duration: 0.8, ease: slowEase }}
                className="group grid grid-cols-1 md:grid-cols-12 items-baseline gap-4 md:gap-8 py-8 border-b border-border/60 last:border-b-0"
              >
                <div className="md:col-span-1">
                  <span className="font-lato text-[11px] tracking-[0.25em] uppercase text-signal/60 group-hover:text-signal transition-colors duration-[900ms]">
                    {phase.phase}
                  </span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="font-syne text-xl md:text-2xl font-800 tracking-tight group-hover:text-signal transition-colors duration-[900ms]">
                    {phase.title}
                  </h3>
                </div>
                <div className="md:col-span-6 md:col-start-6">
                  <p className="font-lato text-sm md:text-base text-text-secondary group-hover:text-ink transition-colors duration-[900ms] leading-[1.85]">
                    {phase.description}
                  </p>
                </div>
                <div className="md:col-span-1 md:col-start-12 flex md:justify-end">
                  <span className="text-signal/30 group-hover:text-signal transition-colors duration-[900ms] text-sm">→</span>
                </div>
              </motion.div>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section: Expected Outcomes ───────────────────────────────────────────────
function OutcomesSection({ industry }: { industry: Industry }) {
  return (
    <section className="py-28 md:py-36 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
          <div className="md:col-span-4">
            <RevealText>
              <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">04 — Outcomes</p>
            </RevealText>
            <RevealText delay={0.1}>
              <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em] leading-tight">
                Expected Outcomes<span className="text-signal">.</span>
              </h2>
            </RevealText>
            <RevealText delay={0.2}>
              <p className="font-lato text-sm text-text-muted leading-[1.85] mt-6 max-w-xs">
                Measurable results drawn from our history of {industry.shortTitle} client engagements.
              </p>
            </RevealText>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
              {industry.results.map((result, i) => {
                const parts = result.split(' ');
                const metric = parts[0];
                const label = parts.slice(1).join(' ');
                return (
                  <RevealText key={result} delay={i * 0.1}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.8, ease: slowEase }}
                      className="group py-8 pr-8 border-b border-border/60 border-r-0 sm:odd:border-r sm:odd:border-border/60"
                    >
                      <span className="font-syne text-3xl md:text-4xl font-800 tracking-tight text-signal block mb-2 group-hover:scale-105 transition-transform duration-500 origin-left">
                        {metric}
                      </span>
                      <p className="font-lato text-sm text-text-muted leading-[1.6]">{label}</p>
                    </motion.div>
                  </RevealText>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section: Case Study (conditional) ───────────────────────────────────────
function CaseStudySection({ industry }: { industry: Industry }) {
  // Match by industry slug (case study industry field must match industry slug)
  const matched = caseStudies.find(
    cs => cs.industry.toLowerCase().replace(/[\s&]+/g, '-') === industry.slug ||
      cs.industry.toLowerCase().replace(/[\s&]+/g, '-').includes(industry.slug) ||
      industry.slug.includes(cs.industry.toLowerCase().replace(/[\s&]+/g, '-'))
  );

  if (!matched) return null;

  return (
    <section className="py-28 md:py-36 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <RevealText>
          <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">05 — Proof</p>
        </RevealText>
        <RevealText delay={0.1}>
          <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em] mb-28 leading-tight">
            In The Field<span className="text-signal">.</span>
          </h2>
        </RevealText>

        <RevealText delay={0.15}>
          <motion.div
            whileHover={{ x: 4 }}
            transition={{ duration: 0.8, ease: slowEase }}
            className="group grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start py-10 border-t border-b border-border/60"
          >
            {/* Meta column */}
            <div className="md:col-span-3">
              <p className="font-lato text-[10px] tracking-[0.25em] uppercase text-signal mb-3">Client</p>
              <p className="font-syne text-base font-800 mb-6 leading-snug">{matched.client}</p>
              <p className="font-lato text-[10px] tracking-[0.25em] uppercase text-signal mb-3">Services</p>
              <div className="flex flex-wrap gap-2">
                {matched.services.map(s => (
                  <span key={s} className="font-lato text-[10px] tracking-wider uppercase text-ink/70 border border-border px-2.5 py-1">{s}</span>
                ))}
              </div>
            </div>

            {/* Content column */}
            <div className="md:col-span-8 md:col-start-5">
              <h3 className="font-syne text-2xl md:text-3xl font-800 tracking-tight mb-6 group-hover:text-signal transition-colors duration-[1200ms]">
                {matched.title}
              </h3>
              <p className="font-lato text-sm md:text-base text-text-secondary leading-[1.9] mb-8">{matched.overview}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="font-lato text-[10px] tracking-[0.25em] uppercase text-signal mb-3">Challenge</p>
                  <p className="font-lato text-sm text-text-muted leading-[1.85]">{matched.challenge}</p>
                </div>
                <div>
                  <p className="font-lato text-[10px] tracking-[0.25em] uppercase text-signal mb-3">Solution</p>
                  <p className="font-lato text-sm text-text-muted leading-[1.85]">{matched.solution}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-border/60">
                <p className="font-lato text-[10px] tracking-[0.25em] uppercase text-signal mb-4">Results</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {matched.results.map(r => (
                    <div key={r} className="flex items-baseline gap-3">
                      <span className="w-1 h-1 rounded-full bg-signal flex-shrink-0 mt-2" />
                      <span className="font-lato text-sm text-text-secondary">{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={`/case-studies?slug=${matched.slug}`}
                  className="font-lato text-sm text-signal sig-hover hover:text-ink transition-colors duration-700"
                >
                  Read Full Case Study →
                </a>
              </div>
            </div>
          </motion.div>
        </RevealText>
      </div>
    </section>
  );
}

// ─── Section: Final CTA ───────────────────────────────────────────────────────
function CTASection({ industry }: { industry: Industry }) {
  return (
    <section className="py-32 md:py-48 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-signal/[0.018] blur-[280px]" />
      </div>
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16">
        <RevealText>
          <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-6">
            {industry.shortTitle} Growth Strategy
          </p>
        </RevealText>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7">
            <RevealText delay={0.1}>
              <h2 className="font-syne text-4xl md:text-6xl lg:text-[5rem] font-800 tracking-[-0.04em] leading-[0.88]">
                Ready to capture {industry.shortTitle.toLowerCase()} search demand<span className="text-signal">?</span>
              </h2>
            </RevealText>
            <RevealText delay={0.2}>
              <p className="font-lato text-base md:text-[17px] text-text-secondary max-w-lg leading-[1.85] mt-8">
                Let's audit your current organic search footprint, map your competitor gaps, and build a vertical-specific acquisition strategy from day one.
              </p>
            </RevealText>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <RevealText delay={0.3}>
              <div className="flex flex-col items-start gap-5">
                <MagneticButton strength={0.4}>
                  <a href="/contact" className="group flex items-center gap-4">
                    <span className="w-12 h-12 rounded-full bg-ink flex items-center justify-center group-hover:bg-signal transition-colors duration-[1200ms]">
                      <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} className="text-paper text-sm">→</motion.span>
                    </span>
                    <span className="font-lato text-sm font-medium text-ink">Book a Strategy Call</span>
                  </a>
                </MagneticButton>
                <MagneticButton strength={0.3}>
                  <a href="/case-studies" className="font-lato text-sm text-text-muted hover:text-ink transition-colors duration-700 sig-hover">
                    View Case Studies
                  </a>
                </MagneticButton>
              </div>
            </RevealText>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function IndustryDetail({ industry }: { industry: Industry }) {
  return (
    <PageTransition>
      <HeroSection industry={industry} />
      <ChallengesSection industry={industry} />
      <ApproachSection industry={industry} />
      <RoadmapSection industry={industry} />
      <OutcomesSection industry={industry} />
      <CaseStudySection industry={industry} />
      <CTASection industry={industry} />
    </PageTransition>
  );
}
