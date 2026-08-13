"use client";

import RevealText from '../../components/RevealText';
import { industries } from '../../lib/data';

export default function IndustriesGrid() {
  return (
    <section className="relative py-16 md:py-48 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 md:mb-28">
          <div className="md:col-span-6">
            <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">VERTICALS</p></RevealText>
            <RevealText delay={0.1}><h2 className="font-syne text-4xl md:text-6xl font-800 tracking-[-0.03em] leading-tight">Specialized structures for high-value business models<span className="text-signal">.</span></h2></RevealText>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
          {industries.map((ind, i) => (
            <RevealText key={ind.slug} delay={i * 0.08} duration={1.4}>
              <a href={`/industries/${ind.slug}`} className="group block py-6 border-b border-border h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-3">
                    <h3 className="font-syne text-lg md:text-xl font-800 tracking-tight group-hover:text-signal transition-colors duration-[1200ms]">{ind.title}</h3>
                    <span className="text-signal group-hover:translate-x-1 transition-transform duration-[600ms] text-xs">→</span>
                  </div>
                  <p className="font-lato text-[11px] uppercase tracking-wider text-signal font-semibold mb-2 leading-relaxed">{ind.tagline}</p>
                  <p className="font-lato text-[13px] text-text-muted leading-[1.6] mb-4">{ind.description}</p>
                </div>
                <div className="mt-2">
                  <span className="inline-block text-[10px] uppercase font-lato tracking-wider text-signal bg-signal/15 px-2.5 py-0.5 rounded border border-signal/25 font-semibold">
                    {ind.results[0]}
                  </span>
                </div>
              </a>
            </RevealText>
          ))}
        </div>
        <RevealText delay={0.5}>
          <div className="mt-20">
            <a href="/industries" className="font-lato text-sm font-medium text-signal sig-hover">Explore All 9 Sectors We Serve →</a>
          </div>
        </RevealText>
      </div>
    </section>
  );
}
