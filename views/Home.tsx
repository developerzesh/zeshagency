"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import ParticleField from '../components/ParticleField';
import MagneticButton from '../components/MagneticButton';
import RevealText from '../components/RevealText';
import CinematicImage from '../components/CinematicImage';
import PageTransition from '../components/PageTransition';
import { solutions, industries, caseStudies, stats, heroContent, trustLabel, trustLogos, reasons, values } from '../lib/data';
import { blogPosts } from '../lib/blogData';
import Testimonials from '../components/Testimonials';

const slowEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

const renderStatSvg = (iconName: string) => {
  const commonProps = "w-5 h-5 text-signal group-hover:scale-110 transition-transform duration-300";
  switch (iconName) {
    case 'Megaphone':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={commonProps}>
          <path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
          <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14" />
          <path d="M8 6v8" />
        </svg>
      );
    case 'Search':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={commonProps}>
          <path d="m21 21-4.34-4.34" />
          <circle cx="11" cy="11" r="8" />
        </svg>
      );
    case 'Magnet':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={commonProps}>
          <path d="m12 15 4 4" />
          <path d="M2.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.029-6.029a1 1 0 1 1 3 3l-6.029 6.029a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.365-6.367A1 1 0 0 0 8.716 4.282z" />
          <path d="m5 8 4 4" />
        </svg>
      );
    case 'DollarSign':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={commonProps}>
          <line x1="12" x2="12" y1="2" y2="22" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      );
    default:
      return null;
  }
};

function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      <ParticleField />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div style={{ x: parallaxX, y: parallaxY }} className="absolute top-1/3 -right-20 w-[600px] h-[600px] rounded-full bg-signal/[0.015] blur-[250px]" />
        <motion.div style={{ x: parallaxX, y: parallaxY }} className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-ink/[0.008] blur-[180px]" />
      </div>
      <motion.div style={{ y, opacity }} className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16 w-full pt-40 md:pt-40">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(20px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.4, delay: 0.3, ease: slowEase }}
          className="flex flex-wrap items-center gap-4 font-lato text-[11px] tracking-[0.3em] uppercase text-text-muted mb-6 md:mb-10"
        >
          <span>GROWTH PARTNER TO BRANDS BACKED BY</span>
          <img src="/meta_logo.png" alt="Meta" className="h-3 md:h-8 w-auto object-contain opacity-60 grayscale dark:brightness-0 dark:invert hover:opacity-100 hover:grayscale-0 hover:dark:brightness-100 hover:dark:invert-0 transition-all duration-500 md:-mx-4 -mx-2" />
          <span>and</span>
          <img src="/shark_tank_logo.png" alt="Shark Tank" className="h-5 md:h-8 w-auto object-contain opacity-60 grayscale dark:brightness-0 dark:invert hover:opacity-100 hover:grayscale-0 hover:dark:brightness-100 hover:dark:invert-0 transition-all duration-500" />
        </motion.div>
        <h1 className="font-syne text-[clamp(2.2rem,5.5vw,5.5rem)] font-800 leading-[0.9] tracking-[-0.03em] mb-10 md:mb-14 max-w-5xl">
          <motion.span
            initial={{ opacity: 0, filter: 'blur(40px)', y: 50 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 1.6, delay: 0.5, ease: slowEase }}
            className="block mb-2"
          >
            {line1}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, filter: 'blur(40px)', y: 50 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 1.6, delay: 0.8, ease: slowEase }}
            className="block"
          >
            {line2}
          </motion.span>
        </h1>
        <div className="flex flex-col items-start gap-8 md:gap-10">
          <motion.p
            initial={{ opacity: 0, filter: 'blur(24px)', y: 30 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 1.6, delay: 1.4, ease: slowEase }}
            className="font-lato text-sm md:text-base text-text-secondary leading-[1.85] max-w-xl"
          >
            {heroContent.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, filter: 'blur(20px)', y: 20 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 1.6, delay: 1.7, ease: slowEase }}
            className="flex flex-wrap items-center gap-6 md:gap-10"
          >
            <MagneticButton strength={0.4}>
              <a href="https://calendar.app.google/SU1NfUdT8yYEVbVe7" className="group flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-ink flex items-center justify-center group-hover:bg-signal transition-colors duration-[1200ms]">
                  <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} className="text-paper text-sm">→</motion.span>
                </span>
                <span className="font-lato text-sm font-medium text-ink">{heroContent.primaryCTA.label}</span>
              </a>
            </MagneticButton>
            <MagneticButton strength={0.3}>
              <a href="/case-studies" className="font-lato text-sm text-text-muted hover:text-ink transition-colors duration-700 sig-hover">{heroContent.secondaryCTA.label}</a>
            </MagneticButton>
          </motion.div>
        </div>
        <motion.p
          initial={{ opacity: 0, filter: 'blur(12px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ delay: 2.5, duration: 1.8, ease: slowEase }}
          className="font-lato text-[10px] text-text-muted mt-16 max-w-sm leading-relaxed"
        >
          {heroContent.microcopy}
        </motion.p>
      </motion.div>
    </section>
  );
}

function TrustBar() {
  const logos = [...trustLogos, ...trustLogos];
  return (
    <section className="relative py-10 md:py-14 border-y border-border/80 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 mb-10">
        <RevealText>
          <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal text-center md:text-left">Retained by leading brands.</p>
        </RevealText>
      </div>
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 relative">
        <div className="relative w-full overflow-hidden">
          {/* Left fade-out overlay */}
          <div
            className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, var(--color-paper) 0%, transparent 100%)',
            }}
          />
          {/* Right fade-out overlay */}
          <div
            className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(-90deg, var(--color-paper) 0%, transparent 100%)',
            }}
          />

          <motion.div
            className="flex gap-16 md:gap-24 items-center"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 35, ease: 'linear', repeat: Infinity }}
          >
            {logos.map((logo, i) => (
              <div key={`${logo.alt}-${i}`} className="flex items-center flex-shrink-0">
                <img src={logo.src} alt={logo.alt} className="h-8 md:h-12 w-auto object-contain opacity-50 grayscale dark:brightness-0 dark:invert hover:opacity-100 hover:grayscale-0 hover:dark:brightness-100 hover:dark:invert-0 transition-all duration-500" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="relative py-32 md:py-48 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-32 md:mb-28">
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
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.8, ease: slowEase }} className="group">
                <span className="font-lato text-[11px] tracking-[0.15em] text-signal">{r.number}</span>
                <h3 className="font-syne text-2xl md:text-3xl font-800 tracking-tight mt-4 mb-5 group-hover:text-signal transition-colors duration-[1200ms]">{r.title}</h3>
                <p className="font-lato text-sm text-text-secondary leading-[1.85]">{r.description}</p>
              </motion.div>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionsGrid() {
  const topSolutions = solutions.slice(0, 4);
  const diagnoses = [
    'Your site has technical barriers preventing crawlers from indexing your highest-value pages.',
    'Conversational AI models don\x27t cite your brand because your entity lacks structured semantic trust signals.',
    'Generative search engines compile answers without referencing your domain or expertise.',
    'Slow, plugin-heavy architecture is killing your conversion rates and wasting your crawl budget.',
  ];
  return (
    <section className="relative py-32 md:py-48 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-32 md:mb-28">
          <div className="md:col-span-5">
            <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">SOLUTIONS</p></RevealText>
            <RevealText delay={0.1}><h2 className="font-syne text-4xl md:text-6xl font-800 tracking-[-0.03em]">Engineered to capture market share<span className="text-signal">.</span></h2></RevealText>
          </div>
        </div>
        <div className="space-y-0">
          {topSolutions.map((s, i) => (
            <RevealText key={s.slug} delay={i * 0.1} duration={1.4}>
              <motion.a
                href={`/solutions?slug=${s.slug}`}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.8, ease: slowEase }}
                className="group block py-8 md:py-10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-px flex-1 bg-border/40" />
                  <span className="font-lato text-[10px] tracking-[0.2em] uppercase text-text-muted">{String(i + 1).padStart(2, '0')}</span>
                  <span className="h-px flex-1 bg-border/40" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
                  <div className="md:col-span-5">
                    <p className="font-lato text-[10px] tracking-[0.2em] uppercase text-signal mb-3">Diagnosis</p>
                    <p className="font-lato text-sm md:text-base text-text-muted leading-[1.8]">&ldquo;{diagnoses[i]}&rdquo;</p>
                  </div>
                  <div className="md:col-span-6 md:col-start-7">
                    {/* <p className="font-lato text-[10px] tracking-[0.2em] uppercase text-signal mb-2">Prescription</p> */}
                    <span className="font-lato text-[10px] tracking-[0.15em] uppercase text-signal mb-1 block">{s.shortTitle}</span>
                    <h3 className="font-syne text-2xl md:text-3xl font-800 tracking-tight mb-3 group-hover:text-signal transition-colors duration-[1200ms]">{s.title}</h3>
                    <p className="font-lato text-sm text-text-secondary leading-[1.8] mb-3">{s.tagline}</p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4">
                      {s.features.slice(0, 3).map((f) => (
                        <span key={f} className="font-lato text-[11px] text-text-muted">{f}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3 pt-2 border-t border-border/30">
                      <span className="font-lato text-[11px] font-medium text-signal">Evidence</span>
                      <span className="font-lato text-[11px] text-text-muted italic">{s.outcomes[0]}</span>
                    </div>
                  </div>
                </div>
              </motion.a>
            </RevealText>
          ))}
        </div>
        <RevealText delay={0.5}>
          <div className="mt-10 flex justify-start">
            <a href="/solutions" className="font-lato text-sm font-medium text-signal sig-hover">View All 8 Capabilities →</a>
          </div>
        </RevealText>
      </div>
    </section>
  );
}

function HowWeWork() {
  const slowEaseLocal = [0.22, 1, 0.36, 1] as [number, number, number, number];
  return (
    <section className="py-32 md:py-48 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-14 md:gap-20">
          <div className="md:col-span-5 md:sticky md:top-40 md:self-start">
            <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">PRINCIPLES</p></RevealText>
            <RevealText delay={0.1}><h2 className="font-syne text-5xl md:text-6xl font-800 tracking-[-0.03em] mb-6">How we work<span className="text-signal">.</span></h2></RevealText>
            <RevealText delay={0.2}>
              <p className="font-lato text-sm md:text-base text-text-secondary leading-[1.85] mb-10 max-w-sm">
                We don't use account managers or sales layers. When you partner with Zesh, senior engineers and strategists work directly on your growth systems — with full transparency on every action and outcome.
              </p>
            </RevealText>
            <RevealText delay={0.3}>
              <div className="flex flex-col gap-4">
                <a
                  href="https://calendar.app.google/SU1NfUdT8yYEVbVe7"
                  className="group flex items-center gap-4"
                >
                  <span className="w-10 h-10 rounded-full bg-ink flex items-center justify-center group-hover:bg-signal transition-colors duration-[800ms] flex-shrink-0">
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                      className="text-paper text-sm"
                    >
                      →
                    </motion.span>
                  </span>
                  <span className="font-lato text-sm font-medium text-ink group-hover:text-signal transition-colors duration-500">
                    Schedule Discovery Call
                  </span>
                </a>
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
                <motion.div whileHover={{ x: 4 }} transition={{ duration: 1, ease: slowEaseLocal }} className="group py-8 border-b border-border">
                  <h4 className="font-syne text-xl md:text-2xl font-800 mb-2 group-hover:text-signal transition-colors duration-[1200ms]">{v.title}</h4>
                  <p className="font-lato text-sm text-text-secondary leading-[1.8]">{v.description}</p>
                </motion.div>
              </RevealText>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <section className="relative py-32 md:py-48 border-t border-border overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-signal/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

          <div className="lg:col-span-5">
            <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">THE METRICS</p></RevealText>
            <RevealText delay={0.1}>
              <h2 className="font-syne text-4xl md:text-5xl font-800 tracking-[-0.03em] leading-[1.1] mb-6">
                Partnering with ambitious brands who demand proven expertise, predictable systems, and real business results<span className="text-signal">.</span>
              </h2>
            </RevealText>
            <RevealText delay={0.2}>
              <p className="font-lato text-base text-text-secondary leading-[1.85] max-w-lg mb-10 lg:mb-0">
                We design high-converting growth architecture that turns your website into a measurable enterprise asset. Performance, scaled and secured.
              </p>
            </RevealText>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, i) => {
                const SvgIcon = stat.icon ? renderStatSvg(stat.icon) : null;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: i * 0.15, ease: slowEase }}
                    whileHover={{ y: -5 }}
                    className="bg-paper/50 dark:bg-ink/5 border border-border/50 backdrop-blur-sm p-8 md:p-10 rounded-2xl flex flex-col justify-between group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-signal/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-signal/30 transition-colors duration-700" />

                    {/* Graphical Representation of Trend */}
                    <div className="w-16 h-14 mb-8 flex items-end justify-between relative z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      {/* Increasing Bars */}
                      <motion.div initial={{ height: 0 }} whileInView={{ height: "40%" }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }} className="w-2.5 bg-signal/30 rounded-t-sm" />
                      <motion.div initial={{ height: 0 }} whileInView={{ height: "60%" }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }} className="w-2.5 bg-signal/60 rounded-t-sm" />
                      <motion.div initial={{ height: 0 }} whileInView={{ height: "80%" }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }} className="w-2.5 bg-signal/90 rounded-t-sm" />
                      <motion.div initial={{ height: 0 }} whileInView={{ height: "100%" }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }} className="w-2.5 bg-signal rounded-t-sm" />

                      {/* Overlay Trend Arrow matching the image */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-md" viewBox="0 0 64 56">
                        <motion.path
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6, duration: 1, ease: "easeInOut" }}
                          d="M 4 36 L 22 18 L 36 30 L 60 6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          className="text-ink dark:text-white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <motion.path
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 1.4 }}
                          d="M 48 6 H 60 V 18"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          className="text-ink dark:text-white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      {/* Parameter Logo Badge at Bottom-Right of Graph */}
                      {SvgIcon && (
                        <div className="absolute -bottom-2 -right-3 bg-paper dark:bg-[#121212] border border-border/80 dark:border-border/20 rounded-full p-1.5 shadow-md flex items-center justify-center w-8 h-8 z-20 group-hover:border-signal/50 transition-colors duration-300">
                          {SvgIcon}
                        </div>
                      )}
                    </div>

                    <h3 className="font-syne text-5xl md:text-6xl font-800 tracking-tight text-ink mb-6 relative z-10">{stat.value}</h3>
                    <div className="w-8 h-[2px] bg-signal mb-6 relative z-10" />
                    <p className="font-lato text-[11px] tracking-[0.2em] uppercase text-text-muted leading-relaxed relative z-10 pr-4">
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

const comparisonRows = [
  { capability: 'Work as an Extended Team', inHouse: { text: 'No', type: 'no' }, other: { text: 'Yes', type: 'yes' }, zesh: { text: 'Yes', type: 'yes' } },
  { capability: 'Industry Specialists', inHouse: { text: 'Limited', type: 'neutral' }, other: { text: 'Generalist Approach', type: 'neutral' }, zesh: { text: 'Specialized SaaS Focus', type: 'highlight' } },
  { capability: 'Cost Effective', inHouse: { text: 'No', type: 'no' }, other: { text: 'Partial', type: 'neutral' }, zesh: { text: 'Yes', type: 'yes' } },
  { capability: 'Agility & Fast Execution', inHouse: { text: 'No', type: 'no' }, other: { text: 'Maybe', type: 'neutral' }, zesh: { text: 'Yes', type: 'yes' } },
  { capability: 'Scalability', inHouse: { text: 'Challenging', type: 'neutral' }, other: { text: 'Restricted', type: 'neutral' }, zesh: { text: 'Highly Flexible', type: 'highlight' } },
  { capability: 'Transparency & Reporting', inHouse: { text: 'Basic', type: 'neutral' }, other: { text: 'Minimal', type: 'neutral' }, zesh: { text: 'Comprehensive', type: 'highlight' } },
  { capability: 'Technology & Tool Access', inHouse: { text: 'Additional Cost', type: 'neutral' }, other: { text: 'Limited', type: 'neutral' }, zesh: { text: 'Fully Integrated', type: 'highlight' } },
  { capability: 'Performance Optimization', inHouse: { text: 'Manual', type: 'neutral' }, other: { text: 'Basic', type: 'neutral' }, zesh: { text: 'Data-Driven & Advanced', type: 'highlight' } },
  { capability: 'Predictive Analytics', inHouse: { text: 'No', type: 'no' }, other: { text: 'No', type: 'no' }, zesh: { text: 'AI-Powered Insights', type: 'highlight' } },
  { capability: 'Continuous Campaign Learning', inHouse: { text: 'No', type: 'no' }, other: { text: 'No', type: 'no' }, zesh: { text: 'AI-Led Optimization', type: 'highlight' } },
];

type CellType = 'yes' | 'no' | 'neutral' | 'highlight';

function ComparisonCell({ text, type }: { text: string; type: CellType }) {
  if (type === 'yes') {
    return (
      <div className="flex items-center justify-center gap-1.5 font-lato text-sm text-text-secondary">
        {text} <span className="text-green-500 font-bold">✓</span>
      </div>
    );
  }
  if (type === 'no') {
    return (
      <div className="flex items-center justify-center gap-1.5 font-lato text-sm text-text-secondary">
        {text} <span className="text-red-500 font-bold">✗</span>
      </div>
    );
  }
  if (type === 'highlight') {
    return (
      <div className="font-lato text-sm text-white text-center font-medium leading-snug">
        {text}
      </div>
    );
  }
  return <div className="font-lato text-sm text-text-secondary text-center">{text}</div>;
}

function ComparisonTable() {
  return (
    <section className="relative py-32 md:py-48 border-t border-border overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-signal/[0.04] blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-16 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 md:mb-24">
          <div className="md:col-span-6">
            <RevealText>
              <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">THE ADVANTAGE</p>
            </RevealText>
            <RevealText delay={0.1}>
              <h2 className="font-syne text-4xl md:text-6xl font-800 tracking-[-0.03em] leading-tight">
                Why brands choose Zesh over the alternatives<span className="text-signal">.</span>
              </h2>
            </RevealText>
          </div>
          <div className="md:col-span-5 md:col-start-8 flex items-end">
            <RevealText delay={0.2}>
              <p className="font-lato text-base text-text-secondary leading-[1.85]">
                Not every agency delivers the same depth of expertise, speed, or strategic alignment. Here's how we compare — transparently.
              </p>
            </RevealText>
          </div>
        </div>

        {/* Comparison Table */}
        <RevealText delay={0.15} duration={1.4}>
          <div className="w-full overflow-x-auto rounded-2xl border border-border/50">
            <table className="w-full min-w-[700px] border-collapse">
              {/* Table Header */}
              <thead>
                <tr>
                  <th className="bg-paper/60 dark:bg-ink/10 backdrop-blur-sm text-left px-6 py-5 font-syne font-800 text-ink text-base tracking-tight border-b border-border/60 rounded-tl-2xl w-[32%]">
                    Capability
                  </th>
                  <th className="bg-paper/60 dark:bg-ink/10 backdrop-blur-sm px-4 py-5 font-lato font-semibold text-ink text-sm text-center border-b border-border/60 border-l border-border/40 w-[20%]">
                    In-House
                  </th>
                  <th className="bg-paper/60 dark:bg-ink/10 backdrop-blur-sm px-4 py-5 font-lato font-semibold text-ink text-sm text-center border-b border-border/60 border-l border-border/40 w-[20%]">
                    Other Agencies
                  </th>
                  <th className="bg-signal/90 px-4 py-5 font-lato font-bold text-white text-sm text-center border-b border-signal/50 border-l border-signal/30 w-[22%] rounded-tr-2xl">
                    Zesh Agency
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {comparisonRows.map((row, i) => (
                  <motion.tr
                    key={row.capability}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, delay: i * 0.04, ease: slowEase }}
                    className="group"
                  >
                    {/* Capability */}
                    <td className={`px-6 py-5 font-lato text-sm text-ink border-b border-border/40 transition-colors duration-300 ${i % 2 === 0 ? 'bg-paper/30 dark:bg-ink/5' : 'bg-transparent'} group-hover:bg-signal/5`}>
                      {row.capability}
                    </td>

                    {/* In-House */}
                    <td className={`px-4 py-5 border-b border-border/40 border-l border-border/30 text-center transition-colors duration-300 ${i % 2 === 0 ? 'bg-paper/30 dark:bg-ink/5' : 'bg-transparent'} group-hover:bg-signal/5`}>
                      <ComparisonCell text={row.inHouse.text} type={row.inHouse.type as CellType} />
                    </td>

                    {/* Other Agencies */}
                    <td className={`px-4 py-5 border-b border-border/40 border-l border-border/30 text-center transition-colors duration-300 ${i % 2 === 0 ? 'bg-paper/30 dark:bg-ink/5' : 'bg-transparent'} group-hover:bg-signal/5`}>
                      <ComparisonCell text={row.other.text} type={row.other.type as CellType} />
                    </td>

                    {/* Zesh Column — always highlighted */}
                    <td className={`px-4 py-5 border-b border-signal/20 border-l border-signal/20 text-center transition-colors duration-300 ${i % 2 === 0 ? 'bg-signal/80' : 'bg-signal/70'} group-hover:bg-signal/90 ${i === comparisonRows.length - 1 ? 'rounded-br-2xl' : ''}`}>
                      <ComparisonCell text={row.zesh.text} type={row.zesh.type as CellType} />
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </RevealText>

        {/* Bottom CTA */}
        <RevealText delay={0.4}>
          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
            <a
              href="https://calendar.app.google/SU1NfUdT8yYEVbVe7"
              className="font-lato text-sm font-medium text-signal sig-hover flex items-center gap-2 group"
            >
              <span className="w-8 h-8 rounded-full bg-signal/15 flex items-center justify-center group-hover:bg-signal/30 transition-colors duration-500">
                <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} className="text-signal text-xs">→</motion.span>
              </span>
              Book a Free Consultation
            </a>
            <a href="/solutions" className="font-lato text-sm text-text-muted hover:text-ink transition-colors duration-700 sig-hover">
              Explore All Solutions
            </a>
          </div>
        </RevealText>
      </div>
    </section>
  );
}

function FeaturedCaseStudy() {
  const cards = [
    {
      slug: 'b2b-saas-pipeline-expansion',
      title: 'How We Drove a 312% Inbound Pipeline Expansion for an Enterprise B2B SaaS Platform',
      mainMetric: '312%',
      stats: [
        { value: '+312%', label: 'Traffic' },
        { value: '$1.2M', label: 'Pipeline' },
        { value: '90 Days', label: 'Duration' }
      ]
    },
    {
      slug: 'multi-location-healthcare',
      title: 'How We Achieved #1 Map Pack Dominance Across a Metro Area for 12 Clinical Facilities',
      mainMetric: '#1',
      stats: [
        { value: '+280%', label: 'Bookings' },
        { value: '1,400+', label: 'Reviews' },
        { value: '90 Days', label: 'Duration' }
      ]
    },
    {
      slug: 'architecture-studio-project-inquiries',
      title: 'How We Doubled High-Budget Commissions and Inquiries for an Architecture Studio',
      mainMetric: '180%',
      stats: [
        { value: '+180%', label: 'Inquiries' },
        { value: '+320%', label: 'Impressions' },
        { value: '8 Weeks', label: 'Duration' }
      ]
    }
  ];

  return (
    <section className="relative py-32 md:py-48 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        {/* Header Block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 md:mb-24">
          <div className="md:col-span-6">
            <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">PROOF</p></RevealText>
            <RevealText delay={0.1}>
              <h2 className="font-syne text-4xl md:text-6xl font-800 tracking-[-0.03em] leading-tight">
                Strategic shifts that changed business trajectories<span className="text-signal">.</span>
              </h2>
            </RevealText>
          </div>
        </div>

        {/* 3-Column Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, i) => (
            <RevealText key={card.slug} delay={i * 0.12} duration={1.6}>
              <motion.a
                href={`/case-studies?slug=${card.slug}`}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.5, ease: slowEase }}
                className="group flex flex-col justify-between h-full bg-[#0E0F10] border border-[#1C1D1F] rounded-3xl p-8 md:p-10 transition-all duration-[600ms] cursor-pointer"
              >
                <div>
                  {/* Category / Label */}
                  <span className="font-lato text-[10px] tracking-[0.16em] uppercase text-[#71717A] font-bold block mb-4">
                    CASE STUDY
                  </span>
                  {/* Title */}
                  <h3 className="font-syne text-lg md:text-xl font-700 text-white tracking-tight leading-snug mb-8 group-hover:text-signal transition-colors duration-500">
                    {card.title}
                  </h3>
                </div>

                <div>
                  {/* Big Metric + Arrow row */}
                  <div className="flex items-center justify-between pointer-events-none mb-8">
                    <span className="text-5xl md:text-6xl font-extrabold font-inter tracking-tight text-signal leading-none">
                      {card.mainMetric}
                    </span>
                    <svg
                      className="w-10 h-10 text-signal/80 group-hover:text-signal group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>

                  {/* Divider line */}
                  <div className="h-px bg-[#27272A] w-full mb-6" />

                  {/* 3 Stats columns */}
                  <div className="grid grid-cols-3 gap-2">
                    {card.stats.map((stat, statIdx) => (
                      <div key={statIdx} className="flex flex-col text-left">
                        <span className="font-inter text-[15px] font-bold text-white leading-none mb-1.5">
                          {stat.value}
                        </span>
                        <span className="font-lato text-[9px] uppercase tracking-wider text-[#71717A]">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.a>
            </RevealText>
          ))}
        </div>

        <RevealText delay={0.4}>
          <div className="mt-16 md:mt-20 flex justify-start">
            <a href="/case-studies" className="font-lato text-sm font-medium text-signal sig-hover">Read More Case Studies →</a>
          </div>
        </RevealText>
      </div>
    </section>
  );
}

function IndustriesGrid() {
  const topIndustries = industries.slice(0, 4);
  return (
    <section className="relative py-32 md:py-48 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-32 md:mb-28">
          <div className="md:col-span-6">
            <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">VERTICALS</p></RevealText>
            <RevealText delay={0.1}><h2 className="font-syne text-4xl md:text-6xl font-800 tracking-[-0.03em] leading-tight">Specialized structures for high-value business models<span className="text-signal">.</span></h2></RevealText>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {topIndustries.map((ind, i) => (
            <RevealText key={ind.slug} delay={i * 0.08} duration={1.4}>
              <a href={`/industries?slug=${ind.slug}`} className="group block py-6 border-b border-border h-full flex flex-col justify-between">
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

function CTA() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const parallaxX = useSpring(useTransform(mouseX, [-500, 500], [-4, 4]), { damping: 60, stiffness: 40, mass: 2 });
  const parallaxY = useSpring(useTransform(mouseY, [-500, 500], [-4, 4]), { damping: 60, stiffness: 40, mass: 2 });

  return (
    <section id="contact" className="relative py-32 md:py-48 border-t border-border" onMouseMove={(e) => { mouseX.set(e.clientX - window.innerWidth / 2); mouseY.set(e.clientY - window.innerHeight / 2); }}>
      <motion.div style={{ x: parallaxX, y: parallaxY }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-signal/[0.02] blur-[200px] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 relative z-10">
        <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-8">ACQUISITION</p></RevealText>
        <RevealText delay={0.1}>
          <h2 className="font-syne text-4xl md:text-6xl lg:text-[5rem] font-800 tracking-[-0.04em] leading-[0.88] mb-32">
            Making marketing work for businesses<span className="text-signal">.</span>
          </h2>
        </RevealText>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <RevealText delay={0.2}><p className="font-lato text-base md:text-[17px] text-text-secondary max-w-md leading-[1.85]">We analyze your website metrics, inspect competitor search campaigns, and map out custom acquisition strategies from day one.</p></RevealText>
          <RevealText delay={0.3}>
            <div className="flex flex-col items-start gap-5">
              <MagneticButton strength={0.4}><a href="/contact" className="font-syne text-xl md:text-2xl font-800 text-ink hover:text-signal transition-colors duration-[1200ms] sig-hover">Book a Discovery Call</a></MagneticButton>
              <MagneticButton strength={0.2}><a href="/case-studies" className="font-lato text-sm text-text-muted hover:text-ink transition-colors duration-700 sig-hover">View Case Studies</a></MagneticButton>
            </div>
          </RevealText>
        </div>
      </div>
    </section>
  );
}

function BlogSection() {
  const latestPosts = blogPosts.slice(0, 3);
  return (
    <section className="relative py-32 md:py-48 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 md:mb-24">
          <div className="md:col-span-6">
            <RevealText>
              <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">INSIGHTS</p>
            </RevealText>
            <RevealText delay={0.1}>
              <h2 className="font-syne text-4xl md:text-6xl font-800 tracking-[-0.03em] leading-tight">
                Latest thinking from our team<span className="text-signal">.</span>
              </h2>
            </RevealText>
          </div>
          <div className="md:col-span-5 md:col-start-8 flex items-end">
            <RevealText delay={0.2}>
              <p className="font-lato text-base text-text-secondary leading-[1.85]">
                Perspectives on growth strategy, performance marketing, and the technical systems that drive enterprise acquisition.
              </p>
            </RevealText>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post, i) => (
            <RevealText key={post.slug} delay={i * 0.08} duration={1.4}>
              <a href={`/blog?slug=${post.slug}`} className="group block h-full">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.7, ease: slowEase }}
                  className="border border-border/40 hover:border-signal/30 rounded-xl overflow-hidden transition-all duration-700 bg-paper/30 dark:bg-ink/5 h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="overflow-hidden aspect-video">
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-[1200ms]"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-lato text-[9px] tracking-[0.2em] uppercase text-signal">{post.category}</span>
                        <span className="w-1 h-1 rounded-full bg-border" />
                        <span className="font-lato text-[10px] text-text-muted">{post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-border" />
                        <span className="font-lato text-[10px] text-text-muted">{post.readTime} read</span>
                      </div>
                      <h4 className="font-syne text-lg font-800 tracking-tight group-hover:text-signal transition-colors duration-700 leading-snug mb-2">
                        {post.title}
                      </h4>
                      <p className="font-lato text-xs text-text-muted leading-relaxed line-clamp-2">{post.excerpt}</p>
                    </div>
                  </div>
                </motion.div>
              </a>
            </RevealText>
          ))}
        </div>

        <RevealText delay={0.4}>
          <div className="mt-16 md:mt-20 flex justify-start">
            <a href="/blog" className="font-lato text-sm font-medium text-signal sig-hover">View All Insights →</a>
          </div>
        </RevealText>
      </div>
    </section>
  );
}

const faqData = [
  {
    question: "What is the difference between SEO, AEO, and GEO?",
    answer: "SEO (Search Engine Optimization) targets keyword match rankings on traditional search engines. AEO (Answer Engine Optimization) ensures your brand is indexed and cited by conversational assistants (ChatGPT, Claude). GEO (Generative Engine Optimization) adapts website source data/structures so generative engines (Perplexity, Gemini RAG pipelines) confidently retrieve and recommend your domain."
  },
  {
    question: "How long does it take to see organic visibility improvements?",
    answer: "For technical upgrades and indexation fixes, we typically see crawl improvement and initial index health upgrades within 72 hours. Semantic graph integration and new keywords rank within 4 to 8 weeks, while enterprise authority building compounds over 3 to 6 months."
  },
  {
    question: "Do you work with in-house marketing execution teams?",
    answer: "Yes. We regularly partner with in-house product and marketing operators. We act as their specialized technical arm, delivering schema validation, retrieval content engineering, and programmatic page building, while providing ongoing reporting and blueprints they can run with."
  },
  {
    question: "What is your pricing structure and commitment?",
    answer: "We focus on outcome-oriented retainer models and quarterly sprints. After our initial discovery workshop, we build a customized 90-day execution blueprint with direct deliverables and milestones, allowing you full flexibility without locked annual contracts."
  },
  {
    question: "Can Zesh help integrate tracking with my CRM?",
    answer: "Absolutely. We build clean API connections that route and score inbound leads from multi-step forms directly into systems like HubSpot, Salesforce, or Marketo, including full closed-loop revenue attribution."
  }
];

function FAQSection() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <section className="py-32 md:py-48 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-14 md:gap-20">
          {/* FAQ Header Column */}
          <div className="md:col-span-5 md:sticky md:top-40 md:self-start">
            <RevealText>
              <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">FAQS</p>
            </RevealText>
            <RevealText delay={0.1}>
              <h2 className="font-syne text-4xl md:text-5xl font-800 tracking-[-0.03em] leading-tight">
                Frequently asked questions<span className="text-signal">.</span>
              </h2>
            </RevealText>
          </div>

          {/* Accordion List Column */}
          <div className="md:col-span-7">
            <div>
              {faqData.map((faq, i) => {
                const isActive = activeFaq === i;
                return (
                  <div key={i} className="border-b border-border">
                    <button
                      onClick={() => setActiveFaq(isActive ? null : i)}
                      className="group w-full flex items-center justify-between gap-6 py-6 text-left cursor-pointer"
                    >
                      <span
                        className={`font-syne text-base md:text-lg font-bold transition-colors duration-500 ${isActive ? 'text-signal' : 'text-ink dark:text-[#EDECE7] group-hover:text-signal'
                          }`}
                      >
                        {faq.question}
                      </span>
                      <motion.span
                        animate={{ rotate: isActive ? 45 : 0 }}
                        transition={{ duration: 0.4, ease: slowEase }}
                        className="text-signal text-xl leading-none flex-shrink-0 select-none"
                      >
                        +
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.55, ease: slowEase }}
                          className="overflow-hidden"
                        >
                          <p className="font-lato text-sm text-text-secondary leading-[1.85] pb-6 pr-4">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <TrustBar />
      <WhyChooseUs />
      <SolutionsGrid />
      <HowWeWork />
      <Metrics />
      <ComparisonTable />
      <FeaturedCaseStudy />
      <IndustriesGrid />
      <Testimonials />
      <BlogSection />
      <FAQSection />
      <CTA />
    </PageTransition>
  );
}
