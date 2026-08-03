"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import CinematicImage from '../components/CinematicImage';
import PageTransition from '../components/PageTransition';
import ParticleField from '../components/ParticleField';
import type { CaseStudy } from '../lib/data';
import { caseStudies } from '../lib/data';

const slowEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

// ─── § 1 — Hero / Title ───────────────────────────────────────────────────────
function HeroSection({ cs }: { cs: CaseStudy }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 170]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(useTransform(mouseX, [-600, 600], [-8, 8]), { damping: 50, stiffness: 30, mass: 2 });
  const glowY = useSpring(useTransform(mouseY, [-600, 600], [-8, 8]), { damping: 50, stiffness: 30, mass: 2 });

  return (
    <section
      ref={heroRef}
      className="relative min-h-[70vh] md:min-h-screen flex items-center overflow-hidden"
      onMouseMove={e => { mouseX.set(e.clientX - window.innerWidth / 2); mouseY.set(e.clientY - window.innerHeight / 2); }}
    >
      <ParticleField />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div style={{ x: glowX, y: glowY }} className="absolute top-1/3 right-0 w-[640px] h-[640px] rounded-full bg-signal/[0.015] blur-[280px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-ink/[0.007] blur-[200px]" />
      </div>

      <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-16 w-full pt-24 md:pt-40 pb-20 md:pb-36">
        {/* Breadcrumb */}
        <motion.a
          href="/case-studies"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: slowEase }}
          className="inline-flex items-center gap-2 font-lato text-[10px] tracking-[0.3em] uppercase text-text-muted hover:text-signal transition-colors duration-700 mb-16 md:mb-28 group"
        >
          <motion.span animate={{ x: [0, -3, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} className="group-hover:text-signal">←</motion.span>
          Case Studies
        </motion.a>

        {/* Meta row */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(12px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.4, delay: 0.4, ease: slowEase }}
          className="flex flex-wrap items-center gap-3 mb-8"
        >
          <a href={`/industries/${cs.industrySlug}`} className="font-lato text-[10px] tracking-[0.25em] uppercase text-signal border border-signal/30 bg-signal/10 px-3 py-1.5 hover:bg-signal hover:text-paper transition-all duration-500">
            {cs.industry}
          </a>
          {cs.services.map(s => (
            <span key={s} className="font-lato text-[10px] tracking-[0.2em] uppercase text-ink/50 border border-border/50 px-3 py-1.5">{s}</span>
          ))}
          <span className="w-1 h-1 rounded-full bg-border/60 mx-1" />
          <span className="font-lato text-[11px] text-text-muted">{cs.client}</span>
        </motion.div>

        {/* Headline */}
        <h1 className="font-syne text-[clamp(2.6rem,5vw,6rem)] font-800 leading-[0.88] tracking-[-0.04em] mb-20 md:mb-32 max-w-5xl">
          <motion.span
            initial={{ opacity: 0, filter: 'blur(40px)', y: 50 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 1.8, delay: 0.6, ease: slowEase }}
            className="block"
          >
            {cs.title}<span className="text-signal">.</span>
          </motion.span>
        </h1>

        {/* Overview + CTAs */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <motion.p
            initial={{ opacity: 0, filter: 'blur(20px)', y: 24 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 1.6, delay: 1.1, ease: slowEase }}
            className="font-lato text-base md:text-[17px] text-text-secondary max-w-xl leading-[1.9]"
          >
            {cs.overview}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, filter: 'blur(16px)', y: 16 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 1.6, delay: 1.5, ease: slowEase }}
            className="flex flex-col items-start gap-4 flex-shrink-0"
          >
            <MagneticButton strength={0.4}>
              <a href="https://calendar.app.google/Mp8HrgYK67yjuYA29" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-ink flex items-center justify-center group-hover:bg-signal transition-colors duration-[1200ms]">
                  <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} className="text-paper text-sm">→</motion.span>
                </span>
                <span className="font-lato text-sm font-medium text-ink">Get a Similar Result</span>
              </a>
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

// ─── § 2 — Results ────────────────────────────────────────────────────────────
function ResultsSection({ cs }: { cs: CaseStudy }) {
  return (
    <section className="py-16 md:py-48 border-t border-border/60">
      <div className="max-w-[1400px] mx-auto px-4 md:px-16">
        <RevealText>
          <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-20 md:mb-32">Key Results</p>
        </RevealText>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-border/40">
          {cs.results.map((result, i) => {
            const parts = result.split(' ');
            const metric = parts[0];
            const label = parts.slice(1).join(' ');
            return (
              <RevealText key={result} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.8, ease: slowEase }}
                  className="md:px-10 first:pl-0"
                >
                  <span className="font-syne text-3xl md:text-4xl lg:text-5xl font-800 tracking-tight text-signal block mb-3 leading-none">
                    {metric}
                  </span>
                  <p className="font-lato text-sm text-text-muted leading-[1.6]">{label}</p>
                </motion.div>
              </RevealText>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── § 3 — Hero Image ─────────────────────────────────────────────────────────
function ImageSection({ cs }: { cs: CaseStudy }) {
  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-16 py-6 md:py-10">
      <RevealText duration={2}>
        <CinematicImage
          src={cs.image}
          alt={cs.title}
          aspect="16/9"
          parallaxStrength={0.07}
          revealDuration={2.2}
          hoverZoom={1.02}
        />
      </RevealText>
    </div>
  );
}

// ─── § 4 — Challenge ─────────────────────────────────────────────────────────
function ChallengeSection({ cs }: { cs: CaseStudy }) {
  return (
    <section className="py-14 md:py-36 border-t border-border/60">
      <div className="max-w-[1400px] mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-4">
            <RevealText>
              <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">01 — Challenge</p>
            </RevealText>
            <RevealText delay={0.1}>
              <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em] leading-tight">
                The Challenge<span className="text-signal">.</span>
              </h2>
            </RevealText>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <RevealText delay={0.15}>
              <p className="font-lato text-base md:text-lg text-text-secondary leading-[1.9]">{cs.challenge}</p>
            </RevealText>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── § 5 — Solution ───────────────────────────────────────────────────────────
function SolutionSection({ cs }: { cs: CaseStudy }) {
  return (
    <section className="py-14 md:py-36 border-t border-border/60">
      <div className="max-w-[1400px] mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-7 order-2 md:order-1">
            <RevealText delay={0.1}>
              <p className="font-lato text-base md:text-lg text-text-secondary leading-[1.9]">{cs.solution}</p>
            </RevealText>
          </div>
          <div className="md:col-span-4 md:col-start-9 order-1 md:order-2 flex flex-col md:items-end md:text-right">
            <RevealText>
              <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">02 — Solution</p>
            </RevealText>
            <RevealText delay={0.05}>
              <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em] leading-tight">
                The Solution<span className="text-signal">.</span>
              </h2>
            </RevealText>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── § 6 — Strategy ───────────────────────────────────────────────────────────
function StrategySection({ cs }: { cs: CaseStudy }) {
  return (
    <section className="py-14 md:py-36 border-t border-border/60 bg-surface/10">
      <div className="max-w-[1400px] mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-4">
            <RevealText>
              <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">03 — Strategy</p>
            </RevealText>
            <RevealText delay={0.1}>
              <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em] leading-tight">
                Strategic Thinking<span className="text-signal">.</span>
              </h2>
            </RevealText>
            <RevealText delay={0.2}>
              <p className="font-lato text-xs text-text-muted leading-[1.85] mt-6 max-w-xs">
                The underlying reasoning and competitive insight that shaped our approach.
              </p>
            </RevealText>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <RevealText delay={0.15}>
              <p className="font-lato text-base md:text-lg text-text-secondary leading-[1.95] border-l-2 border-signal/40 pl-6">
                {cs.strategy}
              </p>
            </RevealText>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── § 7 — Execution ─────────────────────────────────────────────────────────
function ExecutionSection({ cs }: { cs: CaseStudy }) {
  return (
    <section className="py-14 md:py-36 border-t border-border/60">
      <div className="max-w-[1400px] mx-auto px-4 md:px-16">
        <div className="mb-16 md:mb-28 md:mb-20 md:mb-32">
          <RevealText>
            <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">04 — Execution</p>
          </RevealText>
          <RevealText delay={0.1}>
            <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em] leading-tight">
              How We Did It<span className="text-signal">.</span>
            </h2>
          </RevealText>
        </div>

        <div className="space-y-0">
          {cs.execution.map((step, i) => (
            <RevealText key={step} delay={i * 0.07}>
              <motion.div
                whileHover={{ x: 6 }}
                transition={{ duration: 0.8, ease: slowEase }}
                className="group grid grid-cols-1 md:grid-cols-12 items-baseline gap-4 md:gap-8 py-7 border-b border-border/60 last:border-b-0"
              >
                <div className="md:col-span-1">
                  <span className="font-lato text-[10px] tracking-[0.25em] uppercase text-signal/50 group-hover:text-signal transition-colors duration-[900ms]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="md:col-span-10 md:col-start-3">
                  <p className="font-lato text-base md:text-[17px] text-text-secondary group-hover:text-ink transition-colors duration-[900ms] leading-[1.85]">
                    {step}
                  </p>
                </div>
                <div className="hidden md:flex md:col-span-1 justify-end">
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

// ─── § 8 — Outcomes ───────────────────────────────────────────────────────────
function OutcomesSection({ cs }: { cs: CaseStudy }) {
  return (
    <section className="py-14 md:py-36 border-t border-border/60 bg-surface/10">
      <div className="max-w-[1400px] mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-4">
            <RevealText>
              <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">05 — Outcomes</p>
            </RevealText>
            <RevealText delay={0.1}>
              <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em] leading-tight">
                What Happened<span className="text-signal">.</span>
              </h2>
            </RevealText>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <RevealText delay={0.15}>
              <p className="font-lato text-base md:text-lg text-text-secondary leading-[1.95]">
                {cs.outcomes}
              </p>
            </RevealText>
            {/* Result pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-12">
              {cs.results.map((result, i) => {
                const parts = result.split(' ');
                return (
                  <RevealText key={result} delay={0.2 + i * 0.08}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.8, ease: slowEase }}
                      className="group flex items-baseline gap-4 py-5 border-b border-border/50"
                    >
                      <span className="font-syne text-2xl font-800 text-signal group-hover:scale-105 transition-transform duration-500 origin-left flex-shrink-0">
                        {parts[0]}
                      </span>
                      <p className="font-lato text-sm text-text-muted leading-snug">{parts.slice(1).join(' ')}</p>
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

// ─── § 9 — Conclusion ────────────────────────────────────────────────────────
function ConclusionSection({ cs }: { cs: CaseStudy }) {
  return (
    <section className="py-14 md:py-36 border-t border-border/60">
      <div className="max-w-[1400px] mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-4">
            <RevealText>
              <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">06 — Conclusion</p>
            </RevealText>
            <RevealText delay={0.1}>
              <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em] leading-tight">
                The Takeaway<span className="text-signal">.</span>
              </h2>
            </RevealText>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <RevealText delay={0.15}>
              <p className="font-lato text-base md:text-lg text-text-secondary leading-[1.95]">
                {cs.conclusion}
              </p>
            </RevealText>
            <RevealText delay={0.25}>
              <div className="mt-10 pt-8 border-t border-border/40">
                <p className="font-lato text-xs text-text-muted uppercase tracking-[0.2em] mb-3">Industry</p>
                <a
                  href={`/industries/${cs.industrySlug}`}
                  className="font-lato text-sm text-signal sig-hover hover:text-ink transition-colors duration-700"
                >
                  Read our {cs.industry} industry guide →
                </a>
              </div>
            </RevealText>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── § 10 — Related Case Studies ─────────────────────────────────────────────
function RelatedSection({ cs }: { cs: CaseStudy }) {
  const related = caseStudies.filter(c => c.slug !== cs.slug).slice(0, 2);
  if (related.length === 0) return null;

  return (
    <section className="py-16 md:py-48 border-t border-border/60">
      <div className="max-w-[1400px] mx-auto px-4 md:px-16">
        <RevealText>
          <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-3">More Case Studies</p>
        </RevealText>
        <RevealText delay={0.1}>
          <h2 className="font-syne text-2xl md:text-3xl font-800 tracking-[-0.03em] mb-16 md:mb-28">
            Further Reading<span className="text-signal">.</span>
          </h2>
        </RevealText>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {related.map((rel, i) => (
            <RevealText key={rel.slug} delay={i * 0.1}>
              <a href={`/case-studies/${rel.slug}`} className="group block">
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.8, ease: slowEase }}
                  className="grid grid-cols-3 gap-6 py-8 border-b border-border/60 first:border-t-0 md:pr-12 md:even:pl-12 md:even:pr-0 md:even:border-l md:even:border-t-0 md:border-b border-border/60"
                >
                  <div className="col-span-1 overflow-hidden">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-[1400ms]"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-span-2">
                    <span className="font-lato text-[9px] tracking-[0.2em] uppercase text-signal mb-2 block">{rel.industry}</span>
                    <h3 className="font-syne text-base md:text-lg font-800 tracking-tight mb-2 group-hover:text-signal transition-colors duration-[900ms]">{rel.title}</h3>
                    <p className="font-lato text-xs text-text-muted leading-relaxed line-clamp-2">{rel.summary}</p>
                  </div>
                </motion.div>
              </a>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── § 11 — CTA ──────────────────────────────────────────────────────────────
function CTASection({ cs }: { cs: CaseStudy }) {
  return (
    <section className="py-16 md:py-48 border-t border-border/60 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-signal/[0.018] blur-[280px]" />
      </div>
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7">
            <RevealText>
              <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-6">Build Your Story</p>
            </RevealText>
            <RevealText delay={0.1}>
              <h2 className="font-syne text-4xl md:text-6xl lg:text-[5rem] font-800 tracking-[-0.04em] leading-[0.88]">
                Want results like these<span className="text-signal">?</span>
              </h2>
            </RevealText>
            <RevealText delay={0.2}>
              <p className="font-lato text-base md:text-[17px] text-text-secondary max-w-lg leading-[1.85] mt-8">
                We audit your current organic position in {cs.industry}, map competitive gaps, and build a tailored acquisition system from day one.
              </p>
            </RevealText>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <RevealText delay={0.3}>
              <div className="flex flex-col items-start gap-5">
                <MagneticButton strength={0.4}>
                  <a href="https://calendar.app.google/Mp8HrgYK67yjuYA29" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
                    <span className="w-12 h-12 rounded-full bg-ink flex items-center justify-center group-hover:bg-signal transition-colors duration-[1200ms]">
                      <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} className="text-paper text-sm">→</motion.span>
                    </span>
                    <span className="font-lato text-sm font-medium text-ink">Book a Strategy Call</span>
                  </a>
                </MagneticButton>
                <MagneticButton strength={0.3}>
                  <a href="/case-studies" className="font-lato text-sm text-text-muted hover:text-ink transition-colors duration-700 sig-hover">
                    View All Case Studies
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
export default function CaseStudyDetail({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <PageTransition>
      <HeroSection cs={caseStudy} />
      <ResultsSection cs={caseStudy} />
      <ImageSection cs={caseStudy} />
      <ChallengeSection cs={caseStudy} />
      <SolutionSection cs={caseStudy} />
      <StrategySection cs={caseStudy} />
      <ExecutionSection cs={caseStudy} />
      <OutcomesSection cs={caseStudy} />
      <ConclusionSection cs={caseStudy} />
      <RelatedSection cs={caseStudy} />
      <CTASection cs={caseStudy} />
    </PageTransition>
  );
}


