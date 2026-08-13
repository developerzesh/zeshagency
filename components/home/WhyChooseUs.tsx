"use client";

import { m } from 'framer-motion';
import RevealText from '../../components/RevealText';
import { reasons } from '../../lib/data';
import { slowEase } from '../../lib/animationEasing';

export default function WhyChooseUs() {
  return (
    <section className="relative py-16 md:py-48 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 md:mb-28">
          <div className="md:col-span-5">
            <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">THE DIFFERENCE</p></RevealText>
            <RevealText delay={0.1}><h2 className="font-syne text-4xl md:text-6xl font-800 tracking-[-0.03em]">Built for operators who expect clear growth systems<span className="text-signal">.</span></h2></RevealText>
          </div>
          <div className="md:col-span-5 md:col-start-7 flex items-end">
            <RevealText delay={0.2}>
              <p className="font-lato text-base text-text-secondary leading-[1.85]">We built Zesh to focus purely on measurable outcomes. Our mission is to align strategic growth planning with high-converting execution, replacing speculation with performance.</p>
            </RevealText>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {reasons.map((r, i) => (
            <RevealText key={r.number} delay={i * 0.12} duration={1.4}>
              <m.div whileHover={{ y: -4 }} transition={{ duration: 0.8, ease: slowEase }} className="group">
                <span className="font-lato text-[11px] tracking-[0.15em] text-signal">{r.number}</span>
                <h3 className="font-syne text-2xl md:text-3xl font-800 tracking-tight mt-4 mb-5 group-hover:text-signal transition-colors duration-[1200ms]">{r.title}</h3>
                <p className="font-lato text-sm text-text-secondary leading-[1.85]">{r.description}</p>
              </m.div>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
}
