import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import RevealText from './RevealText';
import MagneticButton from './MagneticButton';

const slowEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function CTA() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const parallaxX = useSpring(useTransform(mouseX, [-500, 500], [-4, 4]), { damping: 60, stiffness: 40, mass: 2 });
  const parallaxY = useSpring(useTransform(mouseY, [-500, 500], [-4, 4]), { damping: 60, stiffness: 40, mass: 2 });

  return (
    <section id="contact" className="relative py-32 md:py-48 border-t border-border" onMouseMove={(e) => { mouseX.set(e.clientX - window.innerWidth / 2); mouseY.set(e.clientY - window.innerHeight / 2); }}>
      <motion.div style={{ x: parallaxX, y: parallaxY }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-signal/[0.02] blur-[200px] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 relative z-10">
        <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-8">Start a Project</p></RevealText>
        <RevealText delay={0.1}>
          <h2 className="font-syne text-6xl md:text-8xl lg:text-[10rem] font-800 tracking-[-0.04em] leading-[0.88] mb-32">
            Let's create<br />something great<span className="text-signal">.</span>
          </h2>
        </RevealText>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <RevealText delay={0.2}><p className="font-lato text-base md:text-[17px] text-text-secondary max-w-md leading-[1.85]">Have a project in mind? We'd love to hear about it. Drop us a line and let's explore what we can build together.</p></RevealText>
          <RevealText delay={0.3}>
            <div className="flex flex-col items-start gap-5">
              <MagneticButton strength={0.4}><a href="mailto:hello@zesh.agency" className="font-syne text-2xl md:text-3xl font-800 text-ink hover:text-signal transition-colors duration-[1200ms] sig-hover">hello@zesh.agency</a></MagneticButton>
              <div className="flex items-center gap-6">{['Twitter', 'Dribbble', 'LinkedIn', 'Instagram'].map((s) => (<MagneticButton key={s} strength={0.15}><a href="#" className="font-lato text-[11px] tracking-[0.12em] uppercase text-text-muted hover:text-ink transition-colors duration-700">{s}</a></MagneticButton>))}</div>
            </div>
          </RevealText>
        </div>
      </div>
    </section>
  );
}
