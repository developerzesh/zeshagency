"use client";

import { m } from 'framer-motion';
import RevealText from '../../components/RevealText';
import { solutions } from '../../lib/data';
import { slowEase } from '../../lib/animationEasing';

export default function SolutionsGrid() {
  const topSolutions = solutions;
  const diagnoses = [
    'Your site has technical barriers preventing crawlers from indexing your highest-value pages.',
    'Slow, plugin-heavy architecture is killing your conversion rates and wasting your crawl budget.',
    'You\'re wasting ad spend on broad keywords while high-intent buyers research competitors — and convert elsewhere.',
    'Your executives are invisible on LinkedIn while competitors build authority and attract inbound deal flow.',
    'Your brand is missing from AI-generated answers while competitors get recommended by ChatGPT and Perplexity.',
    'Your content isn\'t optimized for voice search and conversational AI queries.',
    'Local competitors dominate the map pack while your business is invisible in local search results.',
    'Your lead capture forms are generic and unqualified, wasting your sales team\'s time.',
    'You need strategic guidance but keep getting generic template-based consulting instead of data-driven insights.',
  ];
  return (
    <section className="relative py-14 md:py-48 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 md:mb-28">
          <div className="md:col-span-5">
            <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">SOLUTIONS</p></RevealText>
            <RevealText delay={0.1}><h2 className="font-syne text-4xl md:text-6xl font-800 tracking-[-0.03em]">Engineered to capture market share<span className="text-signal">.</span></h2></RevealText>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex flex-col justify-end">
            <RevealText delay={0.2}>
              <p className="font-lato text-base text-text-secondary leading-[1.85] mb-8 max-w-md">From search visibility to paid acquisition, every system is built to compound — not just perform once.</p>
            </RevealText>
            <RevealText delay={0.3}>
              <div className="hidden md:flex items-center gap-8">
                <div className="relative w-[180px] h-[180px] flex-shrink-0">
                  <svg viewBox="0 0 180 180" className="w-full h-full -rotate-90">
                    {[75, 93.75, 112.5].map((r) => (
                      <circle
                        key={r}
                        cx="90"
                        cy="90"
                        r={r / 2}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        className="text-border/60"
                      />
                    ))}
                    <m.circle
                      cx="90" cy="90" r="37.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-signal"
                      strokeDasharray="236"
                      initial={{ strokeDashoffset: 236 }}
                      whileInView={{ strokeDashoffset: 60 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: 0.5, ease: slowEase }}
                    />
                    <m.circle
                      cx="90" cy="90" r="46.875"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-signal/50"
                      strokeDasharray="294"
                      initial={{ strokeDashoffset: 294 }}
                      whileInView={{ strokeDashoffset: 98 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2.2, delay: 0.7, ease: slowEase }}
                    />
                    <m.circle
                      cx="90" cy="90" r="56.25"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className="text-signal/30"
                      strokeDasharray="353"
                      initial={{ strokeDashoffset: 353 }}
                      whileInView={{ strokeDashoffset: 150 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2.4, delay: 0.9, ease: slowEase }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <m.span
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.2, duration: 0.8 }}
                      className="font-syne text-5xl font-800 text-ink leading-none"
                    >
                      9<span className="text-signal">+</span>
                    </m.span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-lato text-[10px] tracking-[0.2em] uppercase text-text-muted">Full-stack</span>
                  <span className="font-lato text-[10px] tracking-[0.2em] uppercase text-text-muted">Growth systems</span>
                </div>
              </div>
            </RevealText>
          </div>
        </div>
        <div className="space-y-0">
          {topSolutions.map((s, i) => (
            <RevealText key={s.slug} delay={i * 0.1} duration={1.4}>
              <m.a
                href={`/services/${s.slug}`}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.8, ease: slowEase }}
                className="group block py-8 md:py-10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-px flex-1 bg-border/40" />
                  <span className="font-lato text-[10px] tracking-[0.2em] uppercase text-text-muted">{String(i + 1).padStart(2, '0')}</span>
                  <span className="h-px flex-1 bg-border/40" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
                  <div className="md:col-span-5">
                    <p className="font-lato text-[10px] tracking-[0.2em] uppercase text-signal mb-3">Diagnosis</p>
                    <p className="font-lato text-sm md:text-base text-text-secondary leading-[1.8]">&ldquo;{diagnoses[i]}&rdquo;</p>
                  </div>
                  <div className="md:col-span-6 md:col-start-7">
                    <span className="font-lato text-[10px] tracking-[0.15em] uppercase text-signal mb-1 block">{s.shortTitle}</span>
                    <h3 className="font-syne text-2xl md:text-3xl font-800 tracking-tight mb-3 group-hover:text-signal transition-colors duration-[1200ms]">{s.title}</h3>
                    <p className="font-lato text-sm text-text-secondary leading-[1.8] mb-3">{s.tagline}</p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4">
                      {s.features.slice(0, 3).map((f) => (
                        <span key={f} className="font-lato text-[11px] text-text-muted">{f}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3 pt-2 border-t border-border/30">
                      <span className="font-lato text-[11px] font-medium text-signal">Evidence</span>
                      <span className="font-lato text-[11px] text-text-muted italic">{s.outcomes[0]}</span>
                    </div>
                  </div>
                </div>
              </m.a>
            </RevealText>
          ))}
        </div>
        <RevealText delay={0.5}>
          <div className="mt-10 flex justify-start">
            <a href="/solutions" className="font-lato text-sm font-medium text-signal sig-hover">View All 9 Capabilities →</a>
          </div>
        </RevealText>
      </div>
    </section>
  );
}
