"use client";

import { useRef, useState } from 'react';
import { m, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import WireframeGlobe from '../components/WireframeGlobe';
import PageTransition from '../components/PageTransition';

const slowEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

const team = [
  { name: 'Alex Chen', role: 'Creative Director', location: 'New York', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop' },
  { name: 'Maya Rivera', role: 'Design Lead', location: 'London', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop' },
  { name: 'Liam Novak', role: 'Tech Director', location: 'Tokyo', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop' },
  { name: 'Sofia Park', role: 'Motion Designer', location: 'New York', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop' },
  { name: 'Kai MÃ¼ller', role: 'Sr. Developer', location: 'London', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
  { name: 'Elena Sato', role: 'Brand Strategist', location: 'Dubai', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop' },
  { name: 'James Wright', role: 'Product Designer', location: 'New York', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop' },
  { name: 'Aisha Patel', role: 'UX Researcher', location: 'Tokyo', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop' },
];
const culture = [
  { number: '01', title: 'Radical Collaboration', description: 'No silos. Every project is a shared canvas where design, code, and strategy converge from day one.' },
  { number: '02', title: 'Obsessive Craft', description: 'We sweat the details others overlook. The last 5% is where mediocre becomes memorable.' },
  { number: '03', title: 'Fearless Experimentation', description: 'We prototype wildly, fail fast, and emerge with solutions that push boundaries.' },
  { number: '04', title: 'Purposeful Disruption', description: 'We challenge conventions not for shock value, but to create genuinely better experiences.' },
];

function TeamRow({ member, index }: { member: { name: string; role: string; location: string; image: string }; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <RevealText key={member.name} delay={index * 0.05}>
      <m.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ x: 6 }}
        transition={{ duration: 1, ease: slowEase }}
        className="group flex items-center justify-between py-6 border-b border-border"
      >
        <div className="flex items-center gap-4">
          <span className="font-lato text-[11px] text-text-muted w-6">{String(index + 1).padStart(2, '0')}</span>
          <div className="flex items-center gap-3">
            <h3 className="font-syne text-xl md:text-2xl font-800 group-hover:text-signal transition-colors duration-[1200ms]">{member.name}</h3>
            <AnimatePresence>
              {isHovered && (
                <m.div
                  initial={{ opacity: 0, scale: 0.8, width: 0 }}
                  animate={{ opacity: 1, scale: 1, width: 48 }}
                  exit={{ opacity: 0, scale: 0.8, width: 0 }}
                  transition={{ duration: 0.6, ease: slowEase }}
                  className="overflow-hidden rounded-full flex-shrink-0"
                >
                  <img src={member.image} alt={member.name} className="w-12 h-12 rounded-full object-cover" />
                </m.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex items-baseline gap-6">
          <span className="font-lato text-sm text-text-muted hidden md:inline">{member.role}</span>
          <span className="font-lato text-[11px] tracking-[0.12em] uppercase text-text-muted flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-signal/40" />{member.location}
          </span>
        </div>
      </m.div>
    </RevealText>
  );
}

export default function Studio() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <PageTransition>
      <section ref={heroRef} className="relative min-h-[60vh] md:min-h-[80vh] flex items-end overflow-hidden pb-20 md:pb-32">
        <WireframeGlobe />
        <m.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-16 pt-24 md:pt-40 w-full">
          <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">Our Studio</p></RevealText>
          <RevealText delay={0.1}><h1 className="font-syne text-4xl md:text-6xl lg:text-[5rem] font-800 tracking-[-0.04em] leading-[0.85]">The Studio<span className="text-signal">.</span></h1></RevealText>
          <RevealText delay={0.2}><p className="font-lato text-base md:text-lg text-text-secondary max-w-lg mt-8 leading-[1.85]">A collective of visionaries, engineers, and storytellers united by an obsession with exceptional design.</p></RevealText>
        </m.div>
      </section>

      <section className="py-16 md:py-48 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 md:mb-28">
            <div className="md:col-span-4"><RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">The People</p></RevealText><RevealText delay={0.1}><h2 className="font-syne text-4xl md:text-6xl font-800 tracking-[-0.03em]">Team<span className="text-signal">.</span></h2></RevealText></div>
            <div className="md:col-span-5 md:col-start-8 flex items-end"><RevealText delay={0.2}><p className="font-lato text-base text-text-secondary leading-[1.85]">40+ creatives across four continents. Diverse perspectives, one shared standard of excellence.</p></RevealText></div>
          </div>
          <div>
            {team.map((member, i) => (
              <TeamRow key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-48 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-5 md:sticky md:top-32 md:self-start">
              <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">How We Think</p></RevealText>
              <RevealText delay={0.1}><h2 className="font-syne text-4xl md:text-6xl font-800 tracking-[-0.03em]">Culture<span className="text-signal">.</span></h2></RevealText>
              <RevealText delay={0.2}><p className="font-lato text-base text-text-secondary max-w-md mt-6 leading-[1.85]">Our culture is the invisible architecture behind every project.</p></RevealText>
            </div>
            <div className="md:col-span-5 md:col-start-8">
              {culture.map((item, i) => (
                <RevealText key={item.number} delay={i * 0.1}>
                  <m.div whileHover={{ x: 6 }} transition={{ duration: 1, ease: slowEase }} className="group py-10 border-b border-border">
                    <div className="flex items-start gap-8"><span className="font-lato text-sm font-medium text-signal pt-1">{item.number}</span><div><h3 className="font-syne text-xl md:text-2xl font-800 mb-3 group-hover:text-signal transition-colors duration-[1200ms]">{item.title}</h3><p className="font-lato text-sm text-text-secondary leading-[1.85]">{item.description}</p></div></div>
                  </m.div>
                </RevealText>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-48 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 md:px-16 text-center">
          <RevealText><h2 className="font-syne text-4xl md:text-6xl font-800 tracking-[-0.03em] mb-6">Join the team<span className="text-signal">.</span></h2></RevealText>
          <RevealText delay={0.1}><p className="font-lato text-base text-text-secondary max-w-md mx-auto mb-10 leading-[1.85]">We're always looking for exceptional people who share our obsession with craft.</p></RevealText>
          <MagneticButton strength={0.15}><a href="/careers" className="font-lato text-sm font-medium text-signal sig-hover">View Openings →</a></MagneticButton>
        </div>
      </section>
    </PageTransition>
  );
}
