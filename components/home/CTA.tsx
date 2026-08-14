"use client";

import { m, useMotionValue, useSpring, useTransform } from 'framer-motion';
import RevealText from '../../components/RevealText';
import MagneticButton from '../../components/MagneticButton';

import { useState } from 'react';
import BookingModal from '../../components/BookingModal';

export default function CTA() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const parallaxX = useSpring(useTransform(mouseX, [-500, 500], [-4, 4]), { damping: 60, stiffness: 40, mass: 2 });
  const parallaxY = useSpring(useTransform(mouseY, [-500, 500], [-4, 4]), { damping: 60, stiffness: 40, mass: 2 });

  return (
    <section id="contact" className="relative py-16 md:py-48 border-t border-border" onMouseMove={(e) => { mouseX.set(e.clientX - window.innerWidth / 2); mouseY.set(e.clientY - window.innerHeight / 2); }}>
      <m.div style={{ x: parallaxX, y: parallaxY }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-signal/[0.02] blur-[200px] pointer-events-none will-change-transform" />
      <div className="max-w-[1400px] mx-auto px-4 md:px-16 relative z-10">
        <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-8">ACQUISITION</p></RevealText>
        <RevealText delay={0.1}>
          <h2 className="font-syne text-4xl md:text-6xl lg:text-[5rem] font-800 tracking-[-0.04em] leading-[0.88] mb-20 md:mb-32">
            Making marketing work for businesses<span className="text-signal">.</span>
          </h2>
        </RevealText>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <RevealText delay={0.2}><p className="font-lato text-base md:text-[17px] text-text-secondary max-w-md leading-[1.85]">We analyze your website metrics, inspect competitor search campaigns, and map out custom acquisition strategies from day one.</p></RevealText>
          <RevealText delay={0.3}>
            <div className="flex flex-col items-start gap-5">
              <MagneticButton strength={0.4}><button onClick={() => setIsBookingOpen(true)} className="inline-flex items-center gap-3 bg-ink text-paper px-6 py-3 rounded-lg font-lato text-sm font-medium hover:bg-signal transition-colors duration-500"><span>Book a Discovery Call</span><span className="text-xs">→</span></button></MagneticButton>
              <MagneticButton strength={0.2}><a href="/case-studies" className="font-lato text-sm text-text-muted hover:text-ink transition-colors duration-700 sig-hover">View Case Studies</a></MagneticButton>
            </div>
          </RevealText>
        </div>
      </div>
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </section>
  );
}
