"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import MorphingShape from '../components/MorphingShape';
import PageTransition from '../components/PageTransition';

const manifesto = [
  { letter: 'D', title: 'Design is Intent', text: 'Every visual decision carries meaning. We don\'t decorate — we communicate. Form follows purpose, always.' },
  { letter: 'E', title: 'Excellence is Non-Negotiable', text: 'Good enough is the enemy of extraordinary. We pursue the exceptional with relentless precision.' },
  { letter: 'S', title: 'Simplicity is Sophistication', text: 'True elegance lies in reduction. We strip away the unnecessary until only the essential remains.' },
  { letter: 'I', title: 'Innovation Through Empathy', text: 'The most groundbreaking solutions come from deeply understanding the humans who will use them.' },
  { letter: 'G', title: 'Growth Demands Discomfort', text: 'We embrace the unknown. The best work happens at the edge of our abilities.' },
  { letter: 'N', title: 'Narrative Drives Connection', text: 'Facts inform, but stories transform. Every brand must tell a compelling story.' },
];
const principles = [
  { number: '001', title: 'Craft Over Speed', description: 'We take the time to do things right. Rushed work is wasted work.' },
  { number: '002', title: 'Question Everything', description: 'Assumptions are the enemy of innovation. We challenge briefs and conventions.' },
  { number: '003', title: 'Collaborate Radically', description: 'The best ideas emerge at intersections. We break down walls between disciplines.' },
  { number: '004', title: 'Measure Impact', description: 'Beautiful work that doesn\'t perform is incomplete. We define success before we begin.' },
  { number: '005', title: 'Leave It Better', description: 'Every project should leave the world slightly better than we found it.' },
];

export default function Philosophy() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(heroScroll, [0, 1], [0, 200]);
  const heroOpacity = useTransform(heroScroll, [0, 0.6], [1, 0]);
  const manifestoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: manifestoScroll } = useScroll({ target: manifestoRef, offset: ['start end', 'end start'] });
  const progressWidth = useTransform(manifestoScroll, [0, 1], ['0%', '100%']);

  return (
    <PageTransition>
      <section ref={heroRef} className="relative min-h-[60vh] md:min-h-[90vh] flex items-end overflow-hidden pb-20 md:pb-32">
        <MorphingShape />
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-16 pt-24 md:pt-40 w-full">
          <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">Our Beliefs</p></RevealText>
          <RevealText delay={0.1}><h1 className="font-syne text-4xl md:text-6xl lg:text-[5rem] font-800 tracking-[-0.04em] leading-[0.85]">Philosophy<span className="text-signal">.</span></h1></RevealText>
          <RevealText delay={0.2}><p className="font-lato text-base md:text-lg text-text-secondary max-w-lg mt-8 leading-[1.85]">The invisible architecture behind every decision we make.</p></RevealText>
        </motion.div>
      </section>

      <div className="fixed top-0 left-0 right-0 z-50 h-[1px]"><motion.div style={{ width: progressWidth }} className="h-full bg-signal" /></div>

      <section ref={manifestoRef} className="py-16 md:py-48 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 md:px-16">
          <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">D.E.S.I.G.N.</p></RevealText>
          <RevealText delay={0.1}><h2 className="font-syne text-4xl md:text-6xl font-800 tracking-[-0.03em] mb-16 md:mb-28">Manifesto<span className="text-signal">.</span></h2></RevealText>
          <div>
            {manifesto.map((item, i) => (
              <RevealText key={item.letter} delay={i * 0.08}>
                <motion.div whileHover={{ x: 10 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }} className="group flex items-start gap-8 md:gap-20 py-36 md:py-18 border-b border-border">
                  <span className="font-syne text-6xl md:text-8xl font-800 text-ink/[0.035] group-hover:text-signal transition-colors duration-1000 leading-none flex-shrink-0 w-16 md:w-24">{item.letter}</span>
                  <div className="flex-1 pt-2"><h3 className="font-syne text-xl md:text-3xl font-800 tracking-tight mb-3 group-hover:text-signal transition-colors duration-700">{item.title}</h3><p className="font-lato text-sm md:text-base text-text-secondary leading-[1.85] max-w-lg">{item.text}</p></div>
                </motion.div>
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-48 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-14 md:gap-20">
            <div className="md:col-span-5 md:sticky md:top-40 md:self-start"><RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">How We Work</p></RevealText><RevealText delay={0.1}><h2 className="font-syne text-5xl md:text-6xl font-800 tracking-[-0.03em]">Five Principles<span className="text-signal">.</span></h2></RevealText></div>
            <div className="md:col-span-5 md:col-start-8">
              {principles.map((p, i) => (
                <RevealText key={p.number} delay={i * 0.08}>
                  <motion.div whileHover={{ x: 6 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }} className="group py-10 border-b border-border">
                    <span className="font-lato text-[11px] tracking-[0.2em] text-signal mb-3 block">{p.number}</span>
                    <h3 className="font-syne text-xl md:text-2xl font-800 mb-3 group-hover:text-signal transition-colors duration-700">{p.title}</h3>
                    <p className="font-lato text-sm text-text-secondary leading-[1.85]">{p.description}</p>
                  </motion.div>
                </RevealText>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-48 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 md:px-16">
          <RevealText><h2 className="font-syne text-4xl md:text-6xl font-800 tracking-[-0.03em] mb-6">Share our vision<span className="text-signal">?</span></h2></RevealText>
          <RevealText delay={0.1}><p className="font-lato text-base text-text-secondary max-w-md mb-8 leading-[1.85]">If these principles resonate, we should talk.</p></RevealText>
          <MagneticButton strength={0.3}><button onClick={() => window.open('https://calendar.app.google/Mp8HrgYK67yjuYA29', '_blank', 'noopener,noreferrer')} className="inline-flex items-center gap-3 bg-ink text-paper px-6 py-3 rounded-lg font-lato text-sm font-medium hover:bg-signal transition-colors duration-500">Start a Conversation →</button></MagneticButton>
        </div>
      </section>
    </PageTransition>
  );
}
