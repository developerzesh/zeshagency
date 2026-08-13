"use client";

import { m } from 'framer-motion';
import RevealText from '../../components/RevealText';
import { slowEase } from '../../lib/animationEasing';

type CellType = 'yes' | 'no' | 'neutral' | 'highlight';

const comparisonRows = [
  { capability: 'Work as an Extended Team', inHouse: { text: 'No', type: 'no' }, other: { text: 'Yes', type: 'yes' }, zesh: { text: 'Yes', type: 'yes' } },
  { capability: 'Industry Specialists', inHouse: { text: 'Limited', type: 'neutral' }, other: { text: 'Generalist Approach', type: 'neutral' }, zesh: { text: 'Specialized SaaS Focus', type: 'highlight' } },
  { capability: 'Cost Effective', inHouse: { text: 'No', type: 'no' }, other: { text: 'Partial', type: 'neutral' }, zesh: { text: 'Yes', type: 'yes' } },
  { capability: 'Agility & Fast Execution', inHouse: { text: 'No', type: 'no' }, other: { text: 'Maybe', type: 'neutral' }, zesh: { text: 'Yes', type: 'yes' } },
  { capability: 'Scalability', inHouse: { text: 'Challenging', type: 'neutral' }, other: { text: 'Restricted', type: 'neutral' }, zesh: { text: 'Highly Flexible', type: 'highlight' } },
  { capability: 'Transparency & Reporting', inHouse: { text: 'Basic', type: 'neutral' }, other: { text: 'Minimal', type: 'neutral' }, zesh: { text: 'Comprehensive', type: 'highlight' } },
  { capability: 'Technology & Tool Access', inHouse: { text: 'Additional Cost', type: 'neutral' }, other: { text: 'Limited', type: 'neutral' }, zesh: { text: 'Fully Integrated', type: 'highlight' } },
  { capability: 'Performance Optimization', inHouse: { text: 'Manual', type: 'neutral' }, other: { text: 'Basic', type: 'neutral' }, zesh: { text: 'Data-Driven & Advanced', type: 'highlight' } },
  { capability: 'Predictive Analytics', inHouse: { text: 'No', type: 'no' }, other: { text: 'No', type: 'no' }, zesh: { text: 'AI-Powered Insights', type: 'highlight' } },
  { capability: 'Continuous Campaign Learning', inHouse: { text: 'No', type: 'no' }, other: { text: 'No', type: 'no' }, zesh: { text: 'AI-Led Optimization', type: 'highlight' } },
];

function ComparisonCell({ text, type, zeshCol = false }: { text: string; type: CellType; zeshCol?: boolean }) {
  if (type === 'yes') {
    return (
      <div className={`flex items-center justify-center gap-1.5 font-lato text-[13px] font-medium ${zeshCol ? 'text-white' : 'text-text-secondary'}`}>
        {text} <span className="text-green-400 font-bold">✓</span>
      </div>
    );
  }
  if (type === 'no') {
    return (
      <div className={`flex items-center justify-center gap-1.5 font-lato text-[13px] ${zeshCol ? 'text-white/80' : 'text-text-secondary'}`}>
        {text} <span className="text-red-400 font-bold">✗</span>
      </div>
    );
  }
  if (type === 'highlight') {
    return (
      <div className="font-lato text-[13px] text-white text-center font-medium leading-snug">
        {text}
      </div>
    );
  }
  return <div className="font-lato text-[13px] text-text-secondary text-center">{text}</div>;
}

export default function ComparisonTable() {
  return (
    <section className="relative py-16 md:py-48 border-t border-border overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-signal/[0.04] blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 md:px-16 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 md:mb-24">
          <div className="md:col-span-6">
            <RevealText>
              <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">THE ADVANTAGE</p>
            </RevealText>
            <RevealText delay={0.1}>
              <h2 className="font-syne text-4xl md:text-6xl font-800 tracking-[-0.03em] leading-tight">
                Why brands choose Zesh over the alternatives<span className="text-signal">.</span>
              </h2>
            </RevealText>
          </div>
          <div className="md:col-span-5 md:col-start-8 flex items-end">
            <RevealText delay={0.2}>
              <p className="font-lato text-base text-text-secondary leading-[1.85]">
                Not every agency delivers the same depth of expertise, speed, or strategic alignment. Here&apos;s how we compare — transparently.
              </p>
            </RevealText>
          </div>
        </div>

        {/* Comparison Table */}
        <RevealText delay={0.15} duration={1.4}>
          <div className="relative">
            {/* Mobile scroll hint */}
            <div className="md:hidden flex items-center justify-end gap-1.5 mb-3 pr-1">
              <span className="text-signal text-xs font-bold arrow-bounce-fast">→</span>
              <span className="font-lato text-[10px] tracking-[0.15em] uppercase text-signal/70">Scroll</span>
            </div>
            <div className="w-full overflow-x-auto rounded-2xl border border-border/50">
              <table className="w-full min-w-[700px] border-collapse">
                {/* Table Header */}
                <thead>
                  <tr>
                    <th className="bg-paper/60 dark:bg-ink/10 backdrop-blur-sm text-left px-6 py-5 font-lato font-semibold text-ink text-sm tracking-wide border-b border-border/60 rounded-tl-2xl w-[32%]">
                      Capability
                    </th>
                    <th className="bg-paper/60 dark:bg-ink/10 backdrop-blur-sm px-4 py-5 font-lato font-semibold text-ink text-sm text-center border-b border-border/60 border-l border-border/40 w-[20%]">
                      In-House
                    </th>
                    <th className="bg-paper/60 dark:bg-ink/10 backdrop-blur-sm px-4 py-5 font-lato font-semibold text-ink text-sm text-center border-b border-border/60 border-l border-border/40 w-[20%]">
                      Other Agencies
                    </th>
                    <th className="bg-signal/90 px-4 py-5 font-lato font-bold text-white text-sm text-center border-b border-signal/50 border-l border-signal/30 w-[22%] rounded-tr-2xl">
                      Zesh Agency
                    </th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <m.tr
                      key={row.capability}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.5, delay: i * 0.04, ease: slowEase }}
                      className="group"
                    >
                      {/* Capability */}
                      <td className={`px-6 py-5 font-lato text-sm text-ink border-b border-border/40 transition-colors duration-300 ${i % 2 === 0 ? 'bg-paper/30 dark:bg-ink/5' : 'bg-transparent'} group-hover:bg-signal/5`}>
                        {row.capability}
                      </td>

                      {/* In-House */}
                      <td className={`px-4 py-5 border-b border-border/40 border-l border-border/30 text-center transition-colors duration-300 ${i % 2 === 0 ? 'bg-paper/30 dark:bg-ink/5' : 'bg-transparent'} group-hover:bg-signal/5`}>
                        <ComparisonCell text={row.inHouse.text} type={row.inHouse.type as CellType} />
                      </td>

                      {/* Other Agencies */}
                      <td className={`px-4 py-5 border-b border-border/40 border-l border-border/30 text-center transition-colors duration-300 ${i % 2 === 0 ? 'bg-paper/30 dark:bg-ink/5' : 'bg-transparent'} group-hover:bg-signal/5`}>
                        <ComparisonCell text={row.other.text} type={row.other.type as CellType} />
                      </td>

                      {/* Zesh Column — always highlighted */}
                      <td className={`px-4 py-5 border-b border-signal/20 border-l border-signal/20 text-center transition-colors duration-300 ${i % 2 === 0 ? 'bg-signal/85' : 'bg-signal/75'} group-hover:bg-signal ${i === comparisonRows.length - 1 ? 'rounded-br-2xl' : ''}`}>
                        <ComparisonCell text={row.zesh.text} type={row.zesh.type as CellType} zeshCol />
                      </td>
                    </m.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </RevealText>

        {/* Bottom CTA */}
        <RevealText delay={0.4}>
          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
            <button
              onClick={() => window.open('https://calendar.app.google/Mp8HrgYK67yjuYA29', '_blank', 'noopener,noreferrer')}
              className="inline-flex items-center gap-3 bg-signal text-ink px-6 py-3 rounded-lg font-lato text-sm font-medium hover:bg-signal/80 transition-colors duration-500"
            >
              <span>Book a Free Consultation</span>
              <span className="text-xs">→</span>
            </button>
            <a href="/solutions" className="font-lato text-sm text-text-muted hover:text-ink transition-colors duration-700 sig-hover">
              Explore All Solutions
            </a>
          </div>
        </RevealText>
      </div>
    </section>
  );
}
