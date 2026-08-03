"use client";

import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import PageTransition from '../components/PageTransition';
import type { Career } from '../lib/data';

export default function CareerDetail({ career }: { career: Career }) {
  return (
    <PageTransition>
      <section className="pt-24 md:pt-40 pb-20 md:pb-36">
        <div className="max-w-[800px] mx-auto px-4 md:px-16">
          <RevealText duration={1.4}><a href="/careers" className="inline-flex items-center gap-2 font-lato text-[11px] tracking-[0.12em] uppercase text-text-muted hover:text-ink transition-colors duration-700 mb-14 block">← Careers</a></RevealText>

          <RevealText delay={0.1} duration={1.4}>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="font-lato text-[11px] tracking-[0.12em] uppercase text-signal">{career.department}</span>
              <span className="w-1 h-1 rounded-full bg-text-muted/15" />
              <span className="font-lato text-[11px] text-text-muted">{career.location}</span>
              <span className="font-lato text-[11px] text-text-muted">· {career.type}</span>
            </div>
          </RevealText>

          <RevealText delay={0.2} duration={2}>
            <h1 className="font-syne text-4xl md:text-6xl font-800 tracking-[-0.03em] leading-[1.05] mb-10">{career.title}<span className="text-signal">.</span></h1>
          </RevealText>

          <RevealText delay={0.3} duration={1.6}>
            <p className="font-lato text-base md:text-lg text-text-secondary leading-[1.85] mb-16 md:mb-28">{career.description}</p>
          </RevealText>

          <RevealText delay={0.35} duration={1.4}>
            <div className="mb-16 md:mb-28">
              <p className="font-lato text-[11px] tracking-[0.2em] uppercase text-text-muted mb-8">Requirements</p>
              {career.requirements.map((req, i) => (
                <motion.div key={req} whileHover={{ x: 4 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }} className="group flex items-start gap-4 py-3 border-b border-border">
                  <span className="text-signal text-xs mt-1 group-hover:text-signal transition-colors duration-[1200ms]">→</span>
                  <span className="font-lato text-sm md:text-base text-text-secondary group-hover:text-ink transition-colors duration-[1200ms]">{req}</span>
                </motion.div>
              ))}
            </div>
          </RevealText>

          <RevealText delay={0.4} duration={1.4}>
            <div className="pt-8 border-t border-border">
              <MagneticButton strength={0.4}><a href="mailto:Shahana@zeshagency.com" className="font-lato text-sm font-medium text-signal sig-hover">Apply Now →</a></MagneticButton>
            </div>
          </RevealText>
        </div>
      </section>
    </PageTransition>
  );
}
