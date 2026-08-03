import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import RevealText from './RevealText';
import CinematicImage from './CinematicImage';
import ImageModal from './ImageModal';


const slowEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

const projects = [
  { id: 1, title: 'Meridian', category: 'Brand Identity', year: '2024', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=800&fit=crop', description: 'Complete brand overhaul for a luxury hospitality group spanning 12 properties worldwide.' },
  { id: 2, title: 'Vertex Labs', category: 'Digital Product', year: '2024', image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=1200&h=800&fit=crop', description: 'Ground-up redesign of a SaaS analytics platform driving 340% increase in user engagement.' },
  { id: 3, title: 'Aether', category: 'Web Experience', year: '2023', image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=1200&h=800&fit=crop', description: 'An immersive WebGL experience for a premium audio brand that won 3 Awwwards.' },
  { id: 4, title: 'Prism', category: 'Creative Direction', year: '2023', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=800&fit=crop', description: 'Multi-channel launch campaign that generated 2M+ impressions in 48 hours.' },
  { id: 5, title: 'Solace', category: 'Product Design', year: '2023', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop', description: 'Wellness app redesign that increased daily active users by 280%.' },
  { id: 6, title: 'Onyx', category: 'E-Commerce', year: '2024', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop', description: 'Luxury e-commerce platform with AR try-on generating $4M in first-quarter revenue.' },
];

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const handleWheel = (e: React.WheelEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      el.scrollBy({ left: e.deltaY * 1.5, behavior: 'auto' });
    }
  };

  return (
    <section id="work" className="relative py-16 md:py-48 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-4 md:px-16 mb-20 md:mb-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">Selected Work</p></RevealText>
            <RevealText delay={0.1}><h2 className="font-syne text-5xl md:text-7xl font-800 tracking-[-0.03em]">Projects<span className="text-signal">.</span></h2></RevealText>
          </div>
          <div className="flex items-center gap-4">
            <RevealText delay={0.2}>
              <button onClick={() => scrollRef.current?.scrollBy({ left: -440, behavior: 'smooth' })} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-ink transition-colors duration-700">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 1L3 7L9 13" stroke="#0A0A0A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </RevealText>
            <RevealText delay={0.25}>
              <button onClick={() => scrollRef.current?.scrollBy({ left: 440, behavior: 'smooth' })} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-ink transition-colors duration-700">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 1L11 7L5 13" stroke="#0A0A0A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </RevealText>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        onWheel={handleWheel}
        className="overflow-x-auto overflow-y-hidden scrollbar-hide px-4 md:px-16"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex gap-6 md:gap-8 pb-4" style={{ width: 'max-content' }}>
          {projects.map((p, i) => (
            <RevealText key={p.id} delay={i * 0.08} duration={1.2}>
              <ImageModal images={[p.image]} captions={[p.description]}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 1.2, ease: slowEase }}
                  className="group w-[320px] md:w-[440px] flex-shrink-0"
                >
                  <CinematicImage
                    src={p.image}
                    alt={p.title}
                    aspect="4/3"
                    revealDelay={i * 0.06}
                    parallaxStrength={0.06}
                    hoverZoom={1.04}
                  />
                  <div className="flex items-center gap-3 mb-2 mt-5">
                    <span className="font-lato text-[11px] tracking-[0.12em] uppercase text-signal">{p.category}</span>
                    <span className="w-1 h-1 rounded-full bg-text-muted/15" />
                    <span className="font-lato text-[11px] text-text-muted">{p.year}</span>
                  </div>
                  <h3 className="font-syne text-2xl md:text-3xl font-800 tracking-tight group-hover:text-signal transition-colors duration-[1200ms]">{p.title}</h3>
                </motion.div>
              </ImageModal>
            </RevealText>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-16 mt-14">
        <RevealText delay={0.3}>
          <a href="/case-studies" className="font-lato text-sm font-medium text-signal sig-hover">View All Case Studies →</a>
        </RevealText>
      </div>
    </section>
  );
}
