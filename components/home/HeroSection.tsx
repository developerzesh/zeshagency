"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { m, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import ParticleField from '../../components/ParticleField';
import CircleArrowButton from '../../components/CircleArrowButton';
import MagneticButton from '../../components/MagneticButton';
import LineGrid from '../../components/LineGrid';
import { heroContent } from '../../lib/data';
import { slowEase } from '../../lib/animationEasing';

import BookingModal from '../../components/BookingModal';

export default function HeroSection() {
  const [metaActive, setMetaActive] = useState(false);
  const [sharkActive, setSharkActive] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const announcementOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const announcementY = useTransform(scrollYProgress, [0, 0.1], [0, -8]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const parallaxX = useSpring(useTransform(mouseX, [-500, 500], [-4, 4]), { damping: 60, stiffness: 40, mass: 2 });
  const parallaxY = useSpring(useTransform(mouseY, [-500, 500], [-4, 4]), { damping: 60, stiffness: 40, mass: 2 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, [mouseX, mouseY]);

  const headlineWords = heroContent.headline.split(' ');
  const mid = Math.ceil(headlineWords.length / 2);
  const line1 = headlineWords.slice(0, mid).join(' ');
  const line2 = headlineWords.slice(mid).join(' ');

  return (
   <section id="hero" ref={containerRef} className="relative min-h-[60vh] md:min-h-[90vh] flex items-center overflow-hidden">

      <m.div
        style={{ opacity: announcementOpacity, y: announcementY }}
        aria-label="Announcement"
        className="absolute top-0 left-0 right-0 z-20 flex min-h-9 items-center justify-center gap-3 px-4 py-2 text-center font-lato text-[10px] font-bold tracking-[0.12em] text-ink uppercase will-change-transform md:text-[11px]"
      >
        <div className="absolute inset-0 bg-signal" />
        <span className="relative z-10 flex items-center gap-2">
          <svg className="w-3 h-3 md:w-3.5 md:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
          </svg>
          Awarded 30 Under 30 For Innovative Marketing
          <svg className="w-3 h-3 md:w-3.5 md:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
          </svg>
        </span>
      </m.div>
      <ParticleField />
      <LineGrid className="hidden md:block" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <m.div style={{ x: parallaxX, y: parallaxY }} className="absolute top-1/3 -right-20 w-[600px] h-[600px] rounded-full bg-signal/[0.015] blur-[250px] will-change-transform" />
        <m.div style={{ x: parallaxX, y: parallaxY }} className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-ink/[0.008] blur-[180px] will-change-transform" />
      </div>
     <m.div style={{ y, opacity }} className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-16 w-full pt-24 md:pt-32 pb-10 md:pb-10 will-change-transform">
        <m.div
          initial={{ opacity: 0, filter: 'blur(20px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.1, ease: slowEase }}
          className="flex flex-wrap items-center gap-4 font-lato text-[11px] tracking-[0.3em] uppercase text-text-muted mb-8 md:mb-12"
        >
          <span>GROWTH PARTNER TO BRANDS BACKED BY</span>
          <span className="hidden md:inline text-text-muted">Meta</span>
          <Image src="/meta_logo.png" alt="Meta" width={140} height={48} onClick={() => setMetaActive(!metaActive)} className={`h-6 md:h-12 w-auto object-contain opacity-60 transition-all duration-500 md:-mx-4 -mx-2 logo-meta-390 grayscale hover:opacity-100 hover:grayscale-0 ${metaActive ? '!opacity-100 !grayscale-0' : ''}`} />
          <span>and</span>
          <span className="hidden md:inline text-text-muted">Shark Tank</span>
          <Image src="/shark_tank_logo.png" alt="Shark Tank" width={140} height={48} onClick={() => setSharkActive(!sharkActive)} className={`h-7 md:h-12 w-auto object-contain opacity-60 transition-all duration-500 logo-shark-390 grayscale hover:opacity-100 hover:grayscale-0 ${sharkActive ? '!opacity-100 !grayscale-0' : ''}`} />
        </m.div>
       <h1 className="font-syne text-[clamp(2.2rem,5.5vw,5.5rem)] font-800 leading-[0.9] tracking-[-0.03em] mb-6 md:mb-8 max-w-5xl">
          <m.span
            initial={{ opacity: 0, filter: 'blur(40px)', y: 50 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: slowEase }}
            className="block mb-2"
          >
            {line1}
          </m.span>
          <m.span
            initial={{ opacity: 0, filter: 'blur(40px)', y: 50 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: slowEase }}
            className="block"
          >
            {line2}
          </m.span>
        </h1>
        <div className="flex flex-col items-start gap-5 md:gap-6">
          <m.p
            initial={{ opacity: 0, filter: 'blur(24px)', y: 30 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: slowEase }}
            className="font-lato text-sm md:text-base text-text-secondary leading-[1.85] max-w-xl"
          >
            {heroContent.description}
          </m.p>
          <m.div
            initial={{ opacity: 0, filter: 'blur(20px)', y: 20 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: slowEase }}
            className="flex flex-wrap items-center gap-6 md:gap-10"
          >
            <CircleArrowButton
              label={heroContent.primaryCTA.label}
              onClick={() => setIsBookingOpen(true)}
              animated={false}
            />
            <MagneticButton strength={0.15}>
              <a href="/case-studies" className="font-lato text-sm text-text-muted hover:text-ink transition-colors duration-700 sig-hover">{heroContent.secondaryCTA.label}</a>
            </MagneticButton>
          </m.div>
        </div>
      </m.div>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </section>
  );
}
