import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import RevealText from './RevealText';

const slowEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

const processSteps = [
  { number: '01', title: 'Discovery', description: 'Deep-dive into your brand, audience, and objectives. We map the landscape and identify opportunities.', details: ['Stakeholder Interviews', 'Competitive Analysis', 'Brand Audit', 'Strategy Workshop'] },
  { number: '02', title: 'Define', description: 'Distill insights into a clear creative direction. Every decision rooted in strategy.', details: ['Creative Brief', 'Moodboarding', 'Information Architecture', 'Content Strategy'] },
  { number: '03', title: 'Design', description: 'Bring the vision to life through iterative design. We explore, refine, and perfect.', details: ['Wireframing', 'Visual Design', 'Prototyping', 'Design System'] },
  { number: '04', title: 'Deliver', description: 'Build, test, and launch with precision. Seamless handoff and post-launch optimization.', details: ['Development', 'QA Testing', 'Launch Strategy', 'Performance Monitoring'] },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={containerRef} className="relative py-32 md:py-48 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-32 md:mb-28">
          <div className="md:col-span-4">
            <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">How We Work</p></RevealText>
            <RevealText delay={0.1}><h2 className="font-syne text-5xl md:text-7xl font-800 tracking-[-0.03em]">Process<span className="text-signal">.</span></h2></RevealText>
          </div>
          <div className="md:col-span-5 md:col-start-8 flex items-end">
            <RevealText delay={0.2}><p className="font-lato text-base text-text-secondary leading-[1.85]">A proven methodology refined over 150+ projects. Every phase builds on the last.</p></RevealText>
          </div>
        </div>
        <div className="relative">
          <div className="absolute left-[15px] md:left-[19px] top-0 bottom-0 w-[1px] bg-border">
            <motion.div style={{ height: lineHeight }} className="w-full bg-signal transition-none" />
          </div>
          <div>
            {processSteps.map((step, i) => (
              <RevealText key={step.number} delay={i * 0.08} duration={1.2}>
                <motion.div whileHover={{ x: 6 }} transition={{ duration: 1, ease: slowEase }} className="group flex gap-8 md:gap-14 py-36 md:py-18 border-b border-border">
                  <div className="flex-shrink-0 pt-1">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-border bg-paper flex items-center justify-center group-hover:border-signal transition-colors duration-[1200ms]">
                      <span className="font-lato text-[10px] font-medium text-signal">{step.number}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-syne text-2xl md:text-4xl font-800 tracking-tight mb-4 group-hover:text-signal transition-colors duration-[1200ms]">{step.title}</h3>
                    <p className="font-lato text-sm md:text-base text-text-secondary leading-[1.85] mb-6 max-w-lg">{step.description}</p>
                    <div className="flex flex-wrap gap-x-6 gap-y-2">{step.details.map((d) => (<span key={d} className="font-lato text-[11px] tracking-[0.12em] uppercase text-text-muted group-hover:text-text-secondary transition-colors duration-[1200ms]">{d}</span>))}</div>
                  </div>
                </motion.div>
              </RevealText>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
