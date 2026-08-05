"use client";

import { useState, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import PageTransition from '../components/PageTransition';
import ParticleField from '../components/ParticleField';
import { caseStudies } from '../lib/data';

const slowEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

// Derive filters from data
const ALL_INDUSTRIES = ['All', ...Array.from(new Set(caseStudies.map(cs => cs.industry)))];
const ALL_SERVICES = ['All', ...Array.from(new Set(caseStudies.flatMap(cs => cs.services)))];

// ─── Aggregate Stats ──────────────────────────────────────────────────────────
const STATS = [
  { value: '9', label: 'Industry Verticals' },
  { value: '$45M+', label: 'Client Revenue Attributed' },
  { value: '312%', label: 'Peak Organic Traffic Lift' },
  { value: '100%', label: 'Verified Results' },
];

// ─── Hero ─────────────────────────────────────────────────────────────────────
function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(useTransform(mouseX, [-500, 500], [-8, 8]), { damping: 50, stiffness: 30, mass: 2 });
  const glowY = useSpring(useTransform(mouseY, [-500, 500], [-8, 8]), { damping: 50, stiffness: 30, mass: 2 });

  return (
    <section
      ref={heroRef}
      className="relative min-h-[60vh] md:min-h-[80vh] flex items-center overflow-hidden"
      onMouseMove={e => { mouseX.set(e.clientX - window.innerWidth / 2); mouseY.set(e.clientY - window.innerHeight / 2); }}
    >
      <ParticleField />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div style={{ x: glowX, y: glowY }} className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full bg-signal/[0.015] blur-[260px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-ink/[0.007] blur-[200px]" />
      </div>

      <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-16 w-full pt-24 md:pt-40 pb-20 md:pb-32">
        <motion.p
          initial={{ opacity: 0, filter: 'blur(12px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.4, delay: 0.3, ease: slowEase }}
          className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-8"
        >
          Client Work
        </motion.p>

        <h1 className="font-syne text-[clamp(2.8rem,5.5vw,6.5rem)] font-800 leading-[0.88] tracking-[-0.04em] mb-10 max-w-4xl">
          <motion.span
            initial={{ opacity: 0, filter: 'blur(40px)', y: 50 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 1.8, delay: 0.5, ease: slowEase }}
            className="block"
          >
            Case Studies<span className="text-signal">.</span>
          </motion.span>
        </h1>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <motion.p
            initial={{ opacity: 0, filter: 'blur(20px)', y: 24 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 1.6, delay: 1.0, ease: slowEase }}
            className="font-lato text-base md:text-[17px] text-text-secondary max-w-lg leading-[1.9]"
          >
            Strategic shifts that changed business trajectories. Every number is verified. Every story is real. Nine verticals, nine documented results.
          </motion.p>
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
                <span className="font-lato text-sm font-medium text-paper">Start a Project</span>
              </button>
            </MagneticButton>
            <MagneticButton strength={0.3}>
              <a href="/solutions" className="font-lato text-sm text-text-muted hover:text-ink transition-colors duration-700 sig-hover">Explore Our Solutions</a>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 1.8, ease: slowEase }}
          className="grid grid-cols-2 md:grid-cols-4 gap-0 mt-20 border-t border-border/50 pt-10"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 2.0 + i * 0.1, ease: slowEase }}
              className="pr-8 md:border-r border-border/40 last:border-r-0 mb-6 md:mb-0"
            >
              <span className="font-syne text-2xl md:text-3xl font-800 text-signal block mb-1">{stat.value}</span>
              <p className="font-lato text-xs text-text-muted tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── Filter Bar ───────────────────────────────────────────────────────────────
interface FilterBarProps {
  activeIndustry: string;
  activeService: string;
  onIndustry: (v: string) => void;
  onService: (v: string) => void;
  count: number;
  total: number;
}

function FilterBar({ activeIndustry, activeService, onIndustry, onService, count, total }: FilterBarProps) {
  return (
    <div className="border-t border-b border-border/60 py-4 sticky top-[72px] z-30 backdrop-blur-2xl bg-paper/80">
      <div className="max-w-[1400px] mx-auto px-4 md:px-16">
        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-10">
          {/* Industry filter */}
          <div className="flex items-center gap-2">
            <span className="font-lato text-[10px] tracking-[0.25em] uppercase text-text-muted flex-shrink-0">Industry</span>
            <div className="flex overflow-x-auto gap-2 items-center scrollbar-hide">
              {ALL_INDUSTRIES.map(ind => (
                <button
                  key={ind}
                  id={`filter-industry-${ind.toLowerCase().replace(/[\s&+]/g, '-')}`}
                  onClick={() => onIndustry(ind)}
                  className={`font-lato text-[11px] tracking-wider uppercase px-3 py-1.5 border transition-all duration-500 flex-shrink-0 whitespace-nowrap ${activeIndustry === ind
                      ? 'bg-signal text-paper border-signal'
                      : 'bg-transparent text-text-muted border-border/40 hover:border-signal/50 hover:text-ink'
                    }`}
                >
                  {ind}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:block w-px h-5 bg-border/40 self-center" />

          {/* Service filter */}
          <div className="flex items-center gap-2">
            <span className="font-lato text-[10px] tracking-[0.25em] uppercase text-text-muted flex-shrink-0">Service</span>
            <div className="flex overflow-x-auto gap-2 items-center scrollbar-hide">
              {ALL_SERVICES.map(svc => (
                <button
                  key={svc}
                  id={`filter-service-${svc.toLowerCase().replace(/[\s&+]/g, '-')}`}
                  onClick={() => onService(svc)}
                  className={`font-lato text-[11px] tracking-wider uppercase px-3 py-1.5 border transition-all duration-500 flex-shrink-0 whitespace-nowrap ${activeService === svc
                      ? 'bg-ink text-paper border-ink'
                      : 'bg-transparent text-text-muted border-border/40 hover:border-ink/40 hover:text-ink'
                    }`}
                >
                  {svc}
                </button>
              ))}
            </div>
          </div>

          {/* Count */}
          <div className="md:ml-auto flex-shrink-0">
            <span className="font-lato text-[11px] text-text-muted">
              Showing <span className="text-ink font-semibold">{count}</span> of <span className="text-ink font-semibold">{total}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Case Study Row ───────────────────────────────────────────────────────────
function CaseStudyRow({ cs, index }: { cs: typeof caseStudies[0]; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: slowEase }}
    >
      <a href={`/case-studies/${cs.slug}`} className="group block border-b border-border/60 last:border-b-0">
        <motion.div
          whileHover={{ x: 5 }}
          transition={{ duration: 0.8, ease: slowEase }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 items-start"
        >
          {/* Index + industry */}
          <div className="md:col-span-1 flex md:flex-col gap-3 md:gap-0">
            <span className="font-lato text-[10px] tracking-[0.2em] uppercase text-signal/50 group-hover:text-signal transition-colors duration-[900ms]">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          {/* Image thumbnail */}
          <div className="md:col-span-3 overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 1.2, ease: slowEase }}
              className="w-full aspect-video overflow-hidden bg-surface/20"
            >
              <img
                src={cs.image}
                alt={cs.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1400ms]"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Content */}
          <div className="md:col-span-5">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="font-lato text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 text-signal border border-signal/30 bg-signal/10">
                {cs.industry}
              </span>
              {cs.services.map(s => (
                <span key={s} className="font-lato text-[9px] tracking-[0.15em] uppercase px-2.5 py-1 text-ink/50 border border-border/50">
                  {s}
                </span>
              ))}
            </div>

            <h2 className="font-syne text-xl md:text-2xl font-800 tracking-tight mb-3 group-hover:text-signal transition-colors duration-[1000ms]">
              {cs.title}
            </h2>
            <p className="font-lato text-xs text-text-muted tracking-wider uppercase mb-3">{cs.client}</p>
            <p className="font-lato text-sm md:text-base text-text-secondary leading-[1.85]">
              {cs.summary}
            </p>
          </div>

          {/* Results + CTA */}
          <div className="md:col-span-3">
            <p className="font-lato text-[10px] tracking-[0.25em] uppercase text-signal mb-4">Key Results</p>
            <div className="space-y-3 mb-8">
              {cs.results.slice(0, 3).map(r => (
                <div key={r} className="flex items-baseline gap-3">
                  <span className="w-1 h-1 rounded-full bg-signal flex-shrink-0 mt-2" />
                  <span className="font-lato text-sm text-text-secondary leading-snug">{r}</span>
                </div>
              ))}
            </div>
            <span className="font-lato text-sm text-signal group-hover:text-ink transition-colors duration-700 sig-hover inline-flex items-center gap-2">
              Read Case Study
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>→</motion.span>
            </span>
          </div>
        </motion.div>
      </a>
    </motion.div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function CaseStudies() {
  const [activeIndustry, setActiveIndustry] = useState('All');
  const [activeService, setActiveService] = useState('All');

  const filtered = useMemo(() => {
    return caseStudies.filter(cs => {
      const matchInd = activeIndustry === 'All' || cs.industry === activeIndustry;
      const matchSvc = activeService === 'All' || cs.services.includes(activeService);
      return matchInd && matchSvc;
    });
  }, [activeIndustry, activeService]);

  const handleIndustry = (v: string) => {
    setActiveIndustry(v);
    setActiveService('All');
  };
  const handleService = (v: string) => {
    setActiveService(v);
    setActiveIndustry('All');
  };

  return (
    <PageTransition>
      <HeroSection />

      <FilterBar
        activeIndustry={activeIndustry}
        activeService={activeService}
        onIndustry={handleIndustry}
        onService={handleService}
        count={filtered.length}
        total={caseStudies.length}
      />

      <section className="py-14 md:py-36">
        <div className="max-w-[1400px] mx-auto px-4 md:px-16">
          {/* Empty state */}
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-32 text-center"
            >
              <p className="font-syne text-2xl font-800 text-text-muted mb-4">No results match these filters.</p>
              <button
                onClick={() => { setActiveIndustry('All'); setActiveService('All'); }}
                className="font-lato text-sm text-signal sig-hover"
              >
                Clear filters →
              </button>
            </motion.div>
          )}

          {/* Row list */}
          <AnimatePresence mode="popLayout">
            {filtered.map((cs, i) => (
              <CaseStudyRow key={cs.slug} cs={cs} index={i} />
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-48 border-t border-border relative overflow-hidden">
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
                  Ready to become our next case study<span className="text-signal">?</span>
                </h2>
              </RevealText>
              <RevealText delay={0.2}>
                <p className="font-lato text-base md:text-[17px] text-text-secondary max-w-lg leading-[1.85] mt-8">
                  We audit your organic search position, map competitor gaps, and deploy a vertical-specific acquisition strategy. No generic playbooks — only custom-built systems.
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
                    <a href="/industries" className="font-lato text-sm text-text-muted hover:text-ink transition-colors duration-700 sig-hover">
                      Explore Our Industries
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

