import { useRef } from 'react';
import { m, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const blurVal = useTransform(scrollYProgress, [0, 0.5], [0, 12]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const parallaxX = useSpring(useTransform(mouseX, [-500, 500], [-5, 5]), { damping: 50, stiffness: 80, mass: 2 });
  const parallaxY = useSpring(useTransform(mouseY, [-500, 500], [-5, 5]), { damping: 50, stiffness: 80, mass: 2 });

  return (
    <section ref={ref} className="relative min-h-[70vh] md:min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <m.div style={{ x: parallaxX, y: parallaxY }} className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-ink/[0.006] blur-[180px] animate-float" />
        <m.div style={{ x: parallaxY, y: parallaxX }} className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-signal/[0.006] blur-[150px] animate-float-delayed" />
      </div>

      <m.div style={{ y, opacity, filter: useTransform(blurVal, (v) => `blur(${v}px)`) }} className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-16 w-full pt-20 md:pt-32 pb-12 md:pb-20">
        <div className="max-w-4xl">
          <RevealText delay={0.6}>
            <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-10">
              Digital Marketing Agency
            </p>
          </RevealText>

          <RevealText delay={0.8} duration={1.6}>
            <h1 className="font-syne text-[clamp(2.4rem,8vw,7.5rem)] font-800 leading-[0.95] tracking-[-0.02em] mb-10 break-words">
              Growth,<br />marketed<span className="text-signal">.</span>
            </h1>
          </RevealText>

          <RevealText delay={1.0} duration={1.4}>
            <p className="font-lato text-lg md:text-xl text-text-secondary max-w-xl leading-[1.8] mb-16">
              We build search ecosystems, AI visibility, and conversion architecture that compounds — turning digital presence into predictable revenue.
            </p>
          </RevealText>

          <RevealText delay={1.2} duration={1.4}>
            <div className="flex flex-col sm:flex-row items-start gap-5">
              <MagneticButton strength={0.25}>
                <a href="/contact" className="font-lato text-[12px] tracking-[0.1em] uppercase bg-ink text-paper px-8 py-4 rounded-full hover:bg-signal transition-colors duration-700 inline-block">
                  Book Discovery Call
                </a>
              </MagneticButton>
              <MagneticButton strength={0.25}>
                <a href="/solutions" className="font-lato text-[12px] tracking-[0.1em] uppercase text-ink hover:text-signal transition-colors duration-700 sig-hover inline-block py-4">
                  Explore Solutions
                </a>
              </MagneticButton>
            </div>
          </RevealText>
        </div>
      </m.div>

      <m.div
        initial={{ opacity: 0, filter: 'blur(8px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ delay: 3, duration: 1.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3"
      >
        <m.div animate={{ y: [0, 6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="w-[1px] h-10 bg-ink/10" />
        <span className="font-lato text-[8px] tracking-[0.35em] uppercase text-text-muted">Scroll</span>
      </m.div>
    </section>
  );
}
