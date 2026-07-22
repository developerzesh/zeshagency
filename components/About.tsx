import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import RevealText from './RevealText';
import MagneticButton from './MagneticButton';
import ImageModal from './ImageModal';

const slowEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '40+', label: 'Global Clients' },
  { value: '12', label: 'Design Awards' },
  { value: '98%', label: 'Client Retention' },
];
const values = [
  { title: 'Precision', description: 'Every strategy is engineered with obsessive attention to detail. We measure what matters and optimize relentlessly.' },
  { title: 'Purpose', description: 'Growth without direction is noise. Every tactic serves a strategy, every metric serves an outcome.' },
  { title: 'Progress', description: 'We push boundaries in SEO, SMO, AEO, and GEO because the digital landscape never stops evolving.' },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section id="about" ref={containerRef} className="relative py-32 md:py-48 border-t border-border">
      <motion.div style={{ y: backgroundY }} className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-ink/[0.008] blur-[200px] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        {/* Stats — no hover images, just clean numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-14 mb-28 md:mb-36">
          {stats.map((stat, i) => (
            <RevealText key={stat.label} delay={i * 0.1}>
              <motion.div whileHover={{ y: -3 }} transition={{ duration: 1, ease: slowEase }}>
                <span className="font-lato text-5xl md:text-7xl font-700 tracking-tight text-ink">{stat.value}</span>
                <p className="font-lato text-[11px] tracking-[0.2em] uppercase text-text-muted mt-3">{stat.label}</p>
              </motion.div>
            </RevealText>
          ))}
        </div>
        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5">
            <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">Who We Are</p></RevealText>
            <RevealText delay={0.1}><h2 className="font-syne text-5xl md:text-7xl font-800 tracking-[-0.03em] mb-8">About<span className="text-signal">.</span></h2></RevealText>
            <RevealText delay={0.2}><p className="font-lato text-base md:text-[17px] text-text-secondary leading-[1.85] mb-6">We are a digital marketing agency that engineers growth through SEO, SMO, AEO, GEO, and web development. Since 2019, we've partnered with ambitious brands to turn digital visibility into measurable revenue.</p></RevealText>
            <RevealText delay={0.3}><p className="font-lato text-base md:text-[17px] text-text-secondary leading-[1.85] mb-10">Our approach unifies every marketing channel into a single growth engine — where each discipline compounds the others and results accelerate over time.</p></RevealText>
            <MagneticButton strength={0.3}><a href="#contact" className="font-lato text-sm font-medium text-signal sig-hover">Let's Talk →</a></MagneticButton>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            {values.map((v, i) => (
              <RevealText key={v.title} delay={0.3 + i * 0.1}>
                <motion.div whileHover={{ x: 4 }} transition={{ duration: 1, ease: slowEase }} className="group py-8 border-b border-border">
                  <h4 className="font-syne text-xl md:text-2xl font-800 mb-2 group-hover:text-signal transition-colors duration-[1200ms]">{v.title}</h4>
                  <p className="font-lato text-sm text-text-secondary leading-[1.85]">{v.description}</p>
                </motion.div>
              </RevealText>
            ))}
            <RevealText delay={0.6}>
              <div className="mt-14">
                <p className="font-lato text-[11px] tracking-[0.2em] uppercase text-text-muted mb-6">Global Presence</p>
                <div className="grid grid-cols-2 gap-4">
                  {[{ city: 'New York', type: 'HQ' }, { city: 'London', type: 'Studio' }, { city: 'Tokyo', type: 'Studio' }, { city: 'Dubai', type: 'Office' }].map((o) => (
                    <div key={o.city} className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-signal" /><span className="font-lato text-sm text-text-secondary">{o.city}</span><span className="font-lato text-[10px] text-text-muted">{o.type}</span></div>
                  ))}
                </div>
              </div>
            </RevealText>
          </div>
        </div>
      </div>
    </section>
  );
}
