import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';

export default function GlobalCTA() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const parallaxX = useSpring(useTransform(mouseX, [-500, 500], [-4, 4]), { damping: 50, stiffness: 60, mass: 2.5 });
  const parallaxY = useSpring(useTransform(mouseY, [-500, 500], [-4, 4]), { damping: 50, stiffness: 60, mass: 2.5 });

  return (
    <section
      className="py-32 md:py-48 border-t border-border"
      onMouseMove={(e) => { mouseX.set(e.clientX - window.innerWidth / 2); mouseY.set(e.clientY - window.innerHeight / 2); }}
    >
      <motion.div
        style={{ x: parallaxX, y: parallaxY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-signal/[0.012] blur-[200px] pointer-events-none"
      />
      <div className="max-w-[1200px] mx-auto px-6 md:px-16 relative z-10 text-center">
        <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-8">Start a Project</p></RevealText>
        <RevealText delay={0.1} duration={1.6}>
          <h2 className="font-syne text-3xl md:text-6xl lg:text-8xl font-800 tracking-[-0.03em] leading-[0.95] mb-8">
            Ready to grow<span className="text-signal">?</span>
          </h2>
        </RevealText>
        <RevealText delay={0.2} duration={1.4}>
          <p className="font-lato text-base md:text-lg text-text-secondary max-w-lg mx-auto leading-[1.8] mb-14">
            Let's discuss how we can engineer your next phase of growth. No pitch decks — just a genuine conversation about what's possible.
          </p>
        </RevealText>
        <RevealText delay={0.3}>
          <MagneticButton strength={0.25}>
            <a href="/contact" className="font-lato text-[12px] tracking-[0.1em] uppercase bg-ink text-paper px-10 py-4 rounded-full hover:bg-signal transition-colors duration-700 inline-block">
              Book Discovery Call
            </a>
          </MagneticButton>
        </RevealText>
      </div>
    </section>
  );
}
