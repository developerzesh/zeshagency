"use client";

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import PageTransition from '../components/PageTransition';
import ParticleField from '../components/ParticleField';
import { careers } from '../lib/data';

const slowEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

// ─── Position Row Component ──────────────────────────────────────────────────
function PositionRow({ position, index }: { position: typeof careers[0]; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <RevealText delay={index * 0.06}>
      <motion.div layout onClick={() => setIsExpanded(!isExpanded)} className="group cursor-pointer">
        <motion.div whileHover={{ x: 6 }} transition={{ duration: 1, ease: slowEase }} className="py-8 md:py-10 border-b border-border/60">
          <div className="flex items-start md:items-baseline justify-between gap-4">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="font-lato text-[10px] tracking-[0.2em] uppercase text-signal py-0.5 px-2 bg-signal/10 border border-signal/20">{position.department}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-border" />
                <span className="font-lato text-[11px] text-text-muted">{position.location}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-border" />
                <span className="font-lato text-[11px] text-text-muted">{position.type}</span>
              </div>
              <h3 className="font-syne text-xl md:text-3xl font-800 tracking-tight group-hover:text-signal transition-colors duration-[1000ms]">{position.title}</h3>
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 45 : 0 }}
              transition={{ duration: 0.8, ease: slowEase }}
              className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-text-muted group-hover:text-signal transition-colors duration-700"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
            </motion.div>
          </div>
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0, filter: isExpanded ? 'blur(0px)' : 'blur(8px)' }}
            transition={{ duration: 0.8, ease: slowEase }}
            className="overflow-hidden"
          >
            <div className="pt-6">
              <p className="font-lato text-sm md:text-base text-text-secondary leading-[1.85] mb-6 max-w-xl">{position.description}</p>
              <div className="mb-6 space-y-2">
                <p className="font-lato text-[11px] uppercase tracking-wider text-ink font-semibold">Requirements:</p>
                {position.requirements.map((req) => (
                  <div key={req} className="flex items-start gap-3 py-0.5">
                    <span className="text-signal text-xs mt-0.5">→</span>
                    <span className="font-lato text-sm text-text-secondary leading-snug">{req}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <MagneticButton strength={0.2}>
                  <a href={`mailto:Shahana@zeshagency.com?subject=Application for ${encodeURIComponent(position.title)}`} className="font-lato text-xs tracking-wider uppercase font-semibold text-signal hover:text-ink transition-colors duration-700 block">
                    Submit Application →
                  </a>
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </RevealText>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Careers() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(useTransform(mouseX, [-500, 500], [-6, 6]), { damping: 50, stiffness: 30, mass: 2 });
  const glowY = useSpring(useTransform(mouseY, [-500, 500], [-6, 6]), { damping: 50, stiffness: 30, mass: 2 });

  return (
    <PageTransition>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[85vh] flex items-center overflow-hidden"
        onMouseMove={e => { mouseX.set(e.clientX - window.innerWidth / 2); mouseY.set(e.clientY - window.innerHeight / 2); }}
      >
        <ParticleField />
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div style={{ x: glowX, y: glowY }} className="absolute top-1/3 right-0 w-[550px] h-[550px] rounded-full bg-signal/[0.015] blur-[240px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-ink/[0.007] blur-[180px]" />
        </div>

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16 w-full pt-40 pb-32">
          <motion.p
            initial={{ opacity: 0, filter: 'blur(12px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.4, delay: 0.3, ease: slowEase }}
            className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-8"
          >
            Work at Zesh
          </motion.p>

          <h1 className="font-syne text-[clamp(2.8rem,5.5vw,6.5rem)] font-800 leading-[0.88] tracking-[-0.04em] mb-10 max-w-4xl">
            <motion.span
              initial={{ opacity: 0, filter: 'blur(40px)', y: 50 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ duration: 1.8, delay: 0.5, ease: slowEase }}
              className="block"
            >
              Join Us<span className="text-signal">.</span>
            </motion.span>
          </h1>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <motion.p
              initial={{ opacity: 0, filter: 'blur(20px)', y: 24 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ duration: 1.6, delay: 1.0, ease: slowEase }}
              className="font-lato text-base md:text-[17px] text-text-secondary max-w-lg leading-[1.85]"
            >
              Built for operators who love quiet focus and elite execution. We do not believe in corporate politics, status meetings, or micro-management.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, filter: 'blur(16px)', y: 16 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ duration: 1.6, delay: 1.4, ease: slowEase }}
              className="flex flex-col items-start gap-4 flex-shrink-0"
            >
              <MagneticButton strength={0.4}>
                <a href="#roles" className="group flex items-center gap-4">
                  <span className="w-12 h-12 rounded-full bg-ink flex items-center justify-center group-hover:bg-signal transition-colors duration-[1200ms]">
                    <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} className="text-paper text-sm">→</motion.span>
                  </span>
                  <span className="font-lato text-sm font-medium text-ink">Explore Open Roles</span>
                </a>
              </MagneticButton>
              <MagneticButton strength={0.3}>
                <a href="#why-us" className="font-lato text-sm text-text-muted hover:text-ink transition-colors duration-700 sig-hover">Why Zesh? ↓</a>
              </MagneticButton>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* § 1 — Why Work With Us */}
      <section id="why-us" className="py-28 md:py-36 border-t border-border/60">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-4">
              <RevealText>
                <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">01 — The Mission</p>
              </RevealText>
              <RevealText delay={0.1}>
                <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em] leading-tight">
                  Why Work With Us<span className="text-signal">?</span>
                </h2>
              </RevealText>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <RevealText delay={0.15}>
                <p className="font-lato text-base md:text-lg text-text-secondary leading-[1.85] mb-6">
                  Zesh is an elite growth agency. We do not design templates or write superficial SEO blog posts. We build high-performance headless search optimization engines, map entity nodes, and deploy programmatic alternative hubs for mid-market platforms.
                </p>
                <p className="font-lato text-base md:text-lg text-text-secondary leading-[1.85]">
                  If you want to work on projects where performance metrics are verified, data integrity overrides speculation, and your contributions are evaluated by the caliber of your code and strategy, you will thrive here.
                </p>
              </RevealText>
            </div>
          </div>
        </div>
      </section>

      {/* § 2 — Culture */}
      <section className="py-28 md:py-36 border-t border-border/60 bg-surface/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-4">
              <RevealText>
                <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">02 — Culture</p>
              </RevealText>
              <RevealText delay={0.1}>
                <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em] leading-tight">
                  Quiet Focus Over Meetings<span className="text-signal">.</span>
                </h2>
              </RevealText>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <div className="space-y-10">
                <RevealText delay={0.15}>
                  <div>
                    <h3 className="font-syne text-lg md:text-xl font-800 text-ink mb-3">No Mandatory Standups</h3>
                    <p className="font-lato text-base text-text-secondary leading-[1.85]">
                      We communicate asynchronously by default. Status reports are written, code reviews are structured, and calendars are design-blocked for deep work.
                    </p>
                  </div>
                </RevealText>
                <RevealText delay={0.2}>
                  <div>
                    <h3 className="font-syne text-lg md:text-xl font-800 text-ink mb-3">Complete Transparency</h3>
                    <p className="font-lato text-base text-text-secondary leading-[1.85]">
                      All strategy documents, client data grids, and agency financials are accessible to every member of the team. We make collective decisions driven by clean data.
                    </p>
                  </div>
                </RevealText>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* § 3 — Benefits */}
      <section className="py-28 md:py-36 border-t border-border/60">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="mb-28 md:mb-32">
            <RevealText>
              <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">03 — Benefits</p>
            </RevealText>
            <RevealText delay={0.1}>
              <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em] leading-tight">
                Designed for Operators<span className="text-signal">.</span>
              </h2>
            </RevealText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-r border-border/60">
            {[
              { title: 'Top-Tier Remote Compensation', desc: 'We pay above typical market rates because we expect self-directed engineering and project ownership.' },
              { title: 'Autonomous Workplaces', desc: 'Work from wherever you are most productive. We support absolute remote flexibility across global timezone nodes.' },
              { title: 'Choice of Premium Gear', desc: 'Specify whatever machine, monitor, and peripheral layout you need to build at your best. We finance it completely.' },
              { title: 'Unlimited Paid Time Off', desc: 'We require a minimum of 4 weeks off annually. Burnout is a failure of system management, not an employee metric.' },
              { title: 'Health & Wellness Stipends', desc: 'Monthly subsidies covering medical insurance supplements, workspace memberships, and physical conditioning.' },
              { title: 'Quiet Focus Days', desc: 'Tuesday and Thursday are code-exclusive blocks. Internal calls and messaging are paused to guard flow state.' }
            ].map((ben, idx) => (
              <RevealText key={ben.title} delay={idx * 0.05}>
                <div className="p-8 md:p-10 border-l border-b border-border/60 h-full hover:bg-surface/20 transition-colors duration-500">
                  <span className="font-lato text-xs tracking-wider text-signal font-semibold mb-2 block">{String(idx + 1).padStart(2, '0')}</span>
                  <h4 className="font-syne text-lg font-800 mb-3 text-ink">{ben.title}</h4>
                  <p className="font-lato text-sm text-text-secondary leading-[1.85]">{ben.desc}</p>
                </div>
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      {/* § 4 — Learning Opportunities */}
      <section className="py-28 md:py-36 border-t border-border/60 bg-surface/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-4">
              <RevealText>
                <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">04 — Education</p>
              </RevealText>
              <RevealText delay={0.1}>
                <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em] leading-tight">
                  Learning & Mastery<span className="text-signal">.</span>
                </h2>
              </RevealText>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <RevealText delay={0.15}>
                <p className="font-lato text-base md:text-lg text-text-secondary leading-[1.85] mb-6">
                  The search ecosystem is shifting rapidly. At Zesh, you will actively research and master next-generation discovery platforms:
                </p>
                <div className="space-y-6">
                  <div className="border-l-2 border-signal/40 pl-6 py-1">
                    <h4 className="font-syne text-base font-800 text-ink mb-1">Generative Engine Optimization (GEO)</h4>
                    <p className="font-lato text-sm text-text-muted leading-relaxed">Map dataset integrations and structure content blocks to win real-time recommendations inside AI search engines.</p>
                  </div>
                  <div className="border-l-2 border-signal/40 pl-6 py-1">
                    <h4 className="font-syne text-base font-800 text-ink mb-1">Headless Web Performance Tuning</h4>
                    <p className="font-lato text-sm text-text-muted leading-relaxed">Minimize execution payloads, inline critical CSS paths, and design asset-serving structures prioritizing sub-second paint milestones.</p>
                  </div>
                  <div className="border-l-2 border-signal/40 pl-6 py-1">
                    <h4 className="font-syne text-base font-800 text-ink mb-1">Semantic Entity Graphs</h4>
                    <p className="font-lato text-sm text-text-muted leading-relaxed">Deploy structured JSON-LD map configurations, declare organization and entity metadata databases (Wikidata, Crunchbase), and audit citations.</p>
                  </div>
                </div>
              </RevealText>
            </div>
          </div>
        </div>
      </section>

      {/* § 5 — Open Roles */}
      <section id="roles" className="py-28 md:py-36 border-t border-border/60">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-28 md:mb-32">
            <div className="md:col-span-4">
              <RevealText>
                <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">{careers.length} Available Openings</p>
              </RevealText>
              <RevealText delay={0.1}>
                <h2 className="font-syne text-4xl md:text-5xl font-800 tracking-[-0.03em]">Open Roles<span className="text-signal">.</span></h2>
              </RevealText>
            </div>
            <div className="md:col-span-5 md:col-start-8 flex items-end">
              <RevealText delay={0.2}>
                <p className="font-lato text-base text-text-secondary leading-[1.85]">
                  Select a position to review core requirements and apply.
                </p>
              </RevealText>
            </div>
          </div>
          <div className="space-y-0">
            {careers.map((p, i) => (
              <PositionRow key={p.slug} position={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* § 6 — Footer CTA */}
      <section className="py-32 md:py-48 border-t border-border/60 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-signal/[0.018] blur-[280px]" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-7">
              <RevealText>
                <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-6">Build the Future of Search</p>
              </RevealText>
              <RevealText delay={0.1}>
                <h2 className="font-syne text-4xl md:text-6xl lg:text-[5rem] font-800 tracking-[-0.04em] leading-[0.88]">
                  Don't see your specific role<span className="text-signal">?</span>
                </h2>
              </RevealText>
              <RevealText delay={0.2}>
                <p className="font-lato text-base md:text-[17px] text-text-secondary max-w-lg leading-[1.85] mt-8">
                  We are always seeking exceptional engineers and architects. If you prefer high autonomy, quiet focus, and building clean-code search systems, introduce yourself.
                </p>
              </RevealText>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <RevealText delay={0.3}>
                <div className="flex flex-col items-start gap-5">
                  <MagneticButton strength={0.4}>
                    <a href="mailto:Shahana@zeshagency.com" className="group flex items-center gap-4">
                      <span className="w-12 h-12 rounded-full bg-ink flex items-center justify-center group-hover:bg-signal transition-colors duration-[1200ms]">
                        <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} className="text-paper text-sm">→</motion.span>
                      </span>
                      <span className="font-lato text-sm font-medium text-ink">Shahana@zeshagency.com</span>
                    </a>
                  </MagneticButton>
                  <MagneticButton strength={0.3}>
                    <a href="/case-studies" className="font-lato text-sm text-text-muted hover:text-ink transition-colors duration-700 sig-hover">
                      Browse Client Case Studies
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
