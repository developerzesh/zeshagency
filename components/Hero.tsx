import { useEffect, useRef } from 'react';
import { m, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import CircleArrowButton from './CircleArrowButton';
import MagneticButton from './MagneticButton';
import ParticleField from './ParticleField';
import LineGrid from './LineGrid';


const slowEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

function BlurWord({ word, delay }: { word: string; delay: number }) {
  return (
    <m.span
      initial={{ opacity: 0, filter: 'blur(36px)', y: 50 }}
      animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      transition={{ duration: 1.6, delay, ease: slowEase, filter: { duration: 1.4, delay, ease: slowEase } }}
      className="inline-block mr-[0.25em]"
    >
      {word === 'growth.' ? (
        <span className="text-signal">{word.replace('.', '')}<span className="text-signal">.</span></span>
      ) : word}
    </m.span>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const parallaxX = useSpring(useTransform(mouseX, [-500, 500], [-4, 4]), { damping: 60, stiffness: 40, mass: 2 });
  const parallaxY = useSpring(useTransform(mouseY, [-500, 500], [-4, 4]), { damping: 60, stiffness: 40, mass: 2 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => { mouseX.set(e.clientX - window.innerWidth / 2); mouseY.set(e.clientY - window.innerHeight / 2); };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, [mouseX, mouseY]);

  const words = ['We', 'engineer', 'the', 'future', 'of', 'growth.'];

  return (
    <section id="hero" ref={containerRef} className="relative min-h-[70vh] md:h-screen flex items-center overflow-hidden">
      <ParticleField />

      {/* Soft ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <m.div style={{ x: parallaxX, y: parallaxY }} className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-ink/[0.012] blur-[200px]" />
      </div>

      {/* Line grid – right side */}
      <LineGrid className="hidden md:block" />

      <m.div style={{ y, opacity }} className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-16 w-full pt-24 md:pt-40">
        {/* Location tag */}
        <m.p
          initial={{ opacity: 0, filter: 'blur(20px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.4, delay: 0.3, ease: slowEase }}
          className="font-lato text-[11px] tracking-[0.3em] uppercase text-text-muted mb-14 md:mb-32"
        >
          Digital Marketing Agency<span className="text-signal mx-3">—</span>New York · London · Tokyo · Dubai
        </m.p>

        {/* Headline */}
        <h1 className="font-syne text-[clamp(3rem,8vw,8.5rem)] font-800 leading-[0.92] tracking-[-0.03em] mb-20 md:mb-32">
          {words.map((word, i) => (
            <BlurWord key={word} word={word} delay={0.5 + i * 0.12} />
          ))}
        </h1>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-16">
          <m.p
            initial={{ opacity: 0, filter: 'blur(24px)', y: 30 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 1.4, delay: 1.4, ease: slowEase }}
            className="font-lato text-base md:text-[17px] text-text-secondary max-w-md leading-[1.85]"
          >
            Strategy, design, and technology converge to create growth engines that define categories and move markets.
          </m.p>

          <m.div
            initial={{ opacity: 0, filter: 'blur(20px)', y: 20 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 1.4, delay: 1.6, ease: slowEase }}
            className="flex items-center gap-10"
          >
            <CircleArrowButton label="Selected Work" href="#work" />
            <MagneticButton strength={0.08}>
              <a href="#contact" className="font-lato text-sm text-text-muted hover:text-ink transition-colors duration-700 sig-hover">Get in Touch</a>
            </MagneticButton>
          </m.div>
        </div>

        <m.div initial={{ opacity: 0, filter: 'blur(8px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} transition={{ delay: 3, duration: 1.8, ease: slowEase }} className="hidden md:flex items-center gap-3 mt-20">
          <m.div animate={{ y: [0, 6, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }} className="w-[1px] h-10 bg-ink/10" />
          <span className="font-lato text-[10px] tracking-[0.2em] uppercase text-text-muted">Scroll to explore</span>
        </m.div>
      </m.div>
    </section>
  );
}
