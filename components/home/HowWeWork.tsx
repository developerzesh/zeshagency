"use client";

import { m } from 'framer-motion';
import RevealText from '../../components/RevealText';
import { values } from '../../lib/data';
import { slowEase } from '../../lib/animationEasing';

export default function HowWeWork() {
  return (
    <section className="py-16 md:py-48 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-14 md:gap-20">
          <div className="md:col-span-5 md:sticky md:top-40 md:self-start">
            <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">PRINCIPLES</p></RevealText>
            <RevealText delay={0.1}><h2 className="font-syne text-5xl md:text-6xl font-800 tracking-[-0.03em] mb-6">How we work<span className="text-signal">.</span></h2></RevealText>
            <RevealText delay={0.2}>
              <p className="font-lato text-sm md:text-base text-text-secondary leading-[1.85] mb-10 max-w-sm">
                We don&apos;t use account managers or sales layers. When you partner with Zesh Agency, senior engineers and strategists work directly on your growth systems — with full transparency on every action and outcome.
              </p>
            </RevealText>
            <RevealText delay={0.3}>
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => window.open('https://calendar.app.google/Mp8HrgYK67yjuYA29', '_blank', 'noopener,noreferrer')}
                  className="inline-flex items-center gap-2 md:gap-3 bg-ink text-paper px-4 py-2 md:px-6 md:py-3 rounded-lg font-lato text-xs md:text-sm font-medium hover:bg-signal transition-colors duration-500 w-fit"
                >
                  <span>Schedule Discovery Call</span>
                  <span className="text-xs">→</span>
                </button>
                <a
                  href="/case-studies"
                  className="font-lato text-sm text-text-muted hover:text-ink transition-colors duration-700 sig-hover"
                >
                  View Case Studies
                </a>
              </div>
            </RevealText>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            {values.map((v, i) => (
              <RevealText key={v.title} delay={0.3 + i * 0.12} duration={1.6}>
                <m.div whileHover={{ x: 4 }} transition={{ duration: 1, ease: slowEase }} className="group py-8 border-b border-border">
                  <h4 className="font-syne text-xl md:text-2xl font-800 mb-2 group-hover:text-signal transition-colors duration-[1200ms]">{v.title}</h4>
                  <p className="font-lato text-sm text-text-secondary leading-[1.8]">{v.description}</p>
                </m.div>
              </RevealText>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
