"use client";

import { useRef } from 'react';
import { m, useScroll, useTransform } from 'framer-motion';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import ParticleField from '../components/ParticleField';
import PageTransition from '../components/PageTransition';
import { values, aboutStats } from '../lib/data';
import Testimonials from '../components/Testimonials';

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <PageTransition>
      <section ref={heroRef} className="relative min-h-[60vh] md:min-h-[80vh] flex items-end overflow-hidden pb-20 md:pb-36">
        <ParticleField />
        <m.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-16 pt-24 md:pt-40 w-full">
          <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">OUR ETHOS</p></RevealText>
          <RevealText duration={2}><h1 className="font-syne text-4xl md:text-6xl lg:text-[5rem] font-800 tracking-[-0.04em] leading-[0.85]">Built to focus purely on outcomes<span className="text-signal">.</span></h1></RevealText>
          <RevealText delay={0.3} duration={1.6}><p className="font-lato text-lg md:text-xl text-text-secondary max-w-lg mt-10 leading-[1.85]">We built this agency to focus purely on outcomes. Our mission is to align strategic growth planning with high-converting execution, replacing speculation with performance.</p></RevealText>
        </m.div>
      </section>

      <section className="py-16 md:py-48 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 md:px-16">
          <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">Our Story</p></RevealText>
          <RevealText delay={0.1} duration={1.8}>
            <blockquote className="font-syne text-2xl md:text-4xl font-800 tracking-[-0.02em] leading-[1.4] text-ink">
              "Every week, we speak with operators who are looking for strategic clarity. They want growth systems that connect directly to their bottom line without administrative bottlenecks or delayed updates.
              <br /><br />
              We started this agency with a single mandate: to build the strategic partner we would want to hire. A lean, highly technical team of operators who work directly on your codebase, design your databases, and declare your entity maps.
              <br /><br />
              We don't employ account executives or sales reps. When you partner with us, you work directly with senior engineers and strategists building your growth engines. If something isn't working, we are honest about it."
              <br /><br />
              <span className="text-signal text-lg md:text-xl">— The Founding Team</span>
            </blockquote>
          </RevealText>
        </div>
      </section>

      <section className="py-16 md:py-48 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 md:px-16">
          <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">THE OPERATORS</p></RevealText>
          <RevealText delay={0.1}><h2 className="font-syne text-4xl md:text-6xl font-800 tracking-[-0.03em] mb-10">The heroes who make everything possible<span className="text-signal">.</span></h2></RevealText>
          <RevealText delay={0.2} duration={1.8}><p className="font-lato text-base md:text-lg text-text-secondary leading-[1.85]">We believe exceptional systems are built by operators who have the quiet focus to think clearly. We don't just hire specialists; we partner with the absolute best in their fields. These are the developers, search architects, and data strategists who work behind the scenes every day to design and code the growth systems that compound our partners' revenue. They are our heroes—the ones who make our clients' success possible through their relentless dedication, high-performance code, and strategic brilliance. We don't have account managers or layers of administration to slow down execution. Every partner you collaborate with is directly responsible for engineering your growth pathways, bringing senior expertise to your everyday strategy. We are incredibly grateful to work alongside them, and we know that every milestone we achieve is built entirely on their expertise.</p></RevealText>
        </div>
      </section>

      <section className="py-16 md:py-48 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-14 md:gap-20">
            <div className="md:col-span-5 md:sticky md:top-40 md:self-start">
              <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">PRINCIPLES</p></RevealText>
              <RevealText delay={0.1}><h2 className="font-syne text-5xl md:text-6xl font-800 tracking-[-0.03em] mb-6">How we work<span className="text-signal">.</span></h2></RevealText>
              <RevealText delay={0.2}>
                <p className="font-lato text-sm md:text-base text-text-secondary leading-[1.85] mb-10 max-w-sm">
                  We don't use account managers or sales layers. When you partner with Zesh Agency, senior engineers and strategists work directly on your growth systems — with full transparency on every action and outcome.
                </p>
              </RevealText>
              <RevealText delay={0.3}>
                <div className="flex flex-col gap-4">
                  <button
                    onClick={() => window.open('https://calendar.app.google/Mp8HrgYK67yjuYA29', '_blank', 'noopener,noreferrer')}
                    className="inline-flex items-center gap-3 bg-ink text-paper px-6 py-3 rounded-lg font-lato text-sm font-medium hover:bg-signal transition-colors duration-500"
                  >
                    <span>Schedule Discovery Call</span>
                    <span className="text-xs">→</span>
                  </button>
                  <a
                    href="/case-studies"
                    className="font-lato text-sm text-text-muted hover:text-ink transition-colors duration-700 sig-hover pl-14"
                  >
                    View Case Studies
                  </a>
                </div>
              </RevealText>
            </div>
            <div className="md:col-span-5 md:col-start-8">
              {values.map((v, i) => (
                <RevealText key={v.title} delay={0.3 + i * 0.12} duration={1.6}>
                  <m.div whileHover={{ x: 4 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }} className="group py-8 border-b border-border">
                    <h4 className="font-syne text-xl md:text-2xl font-800 mb-2 group-hover:text-signal transition-colors duration-[1200ms]">{v.title}</h4>
                    <p className="font-lato text-sm text-text-secondary leading-[1.8]">{v.description}</p>
                  </m.div>
                </RevealText>
              ))}
            </div>
          </div>
        </div>
      </section>



      <section className="py-16 md:py-48 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 md:px-16">
          <RevealText duration={2}><h2 className="font-syne text-4xl md:text-6xl font-800 tracking-[-0.03em] mb-10">Long-term partners, not locked-in clients<span className="text-signal">.</span></h2></RevealText>
          <RevealText delay={0.2} duration={1.6}><p className="font-lato text-base md:text-lg text-text-secondary leading-[1.85]">We are incredibly grateful that nearly all of our partners join us through direct recommendations and word of mouth. Our longest relationships span up to 8 years, growing together as our systems compound their digital presence.</p></RevealText>
        </div>
      </section>

      <section className="py-16 md:py-48 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 md:px-16 text-center">
          <div className="flex flex-wrap justify-between gap-10 md:gap-8">
            {aboutStats.map((stat, i) => (
              <RevealText key={stat.label} delay={i * 0.1} duration={1.8}>
                <m.div whileHover={{ y: -3 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }} className="text-center">
                  <span className="font-lato text-4xl md:text-6xl font-700 tracking-tight text-ink">{stat.value}</span>
                  <p className="font-lato text-[11px] tracking-[0.2em] uppercase text-text-muted mt-3">{stat.label}</p>
                </m.div>
              </RevealText>
            ))}
          </div>
          <div className="mt-20 flex justify-center">
            <MagneticButton strength={0.3}><button onClick={() => window.open('https://calendar.app.google/Mp8HrgYK67yjuYA29', '_blank', 'noopener,noreferrer')} className="inline-flex items-center gap-3 bg-ink text-paper px-6 py-3 rounded-lg font-lato text-sm font-medium hover:bg-signal transition-colors duration-500">Let's Talk →</button></MagneticButton>
          </div>
        </div>
      </section>
      <Testimonials />
    </PageTransition>
  );
}
