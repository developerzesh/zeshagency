import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import RevealText from './RevealText';
import CinematicImage from './CinematicImage';
import { useCursor } from './CursorContext';

const slowEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

const services = [
  { number: '01', title: 'SEO', description: 'Dominate organic search with technical excellence, content strategy, and authority building that compounds over time.', tags: ['Technical SEO', 'Content Strategy', 'Link Building'], image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop' },
  { number: '02', title: 'SMO', description: 'Optimize your social media presence to build authority, drive engagement, and generate leads across every platform.', tags: ['Platform Strategy', 'Content', 'Community'], image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop' },
  { number: '03', title: 'AEO', description: 'Get your brand cited by AI engines like ChatGPT and Perplexity through structured content and authority positioning.', tags: ['AI Citation', 'Structured Data', 'Entity'], image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop' },
  { number: '04', title: 'GEO', description: 'Optimize your brand\'s presence in generative AI outputs — appearing in synthesized answers and recommendations.', tags: ['Generative AI', 'Content Calibration', 'Monitoring'], image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop' },
  { number: '05', title: 'Web Development', description: 'Build high-performance websites engineered for speed, search visibility, and conversion from the ground up.', tags: ['Frontend', 'CMS', 'Performance'], image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop' },
];

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { setCursorState } = useCursor();

  const handleWheel = (e: React.WheelEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      el.scrollBy({ left: e.deltaY * 1.5, behavior: 'auto' });
    }
  };

  return (
    <section id="services" className="relative py-32 md:py-48 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 mb-28 md:mb-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">What We Do</p></RevealText>
            <RevealText delay={0.1}><h2 className="font-syne text-5xl md:text-7xl font-800 tracking-[-0.03em]">Services<span className="text-signal">.</span></h2></RevealText>
          </div>
          <div className="flex items-center gap-4">
            <RevealText delay={0.2}>
              <button onClick={() => scrollRef.current?.scrollBy({ left: -400, behavior: 'smooth' })} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-ink transition-colors duration-700">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 1L3 7L9 13" stroke="#0A0A0A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </RevealText>
            <RevealText delay={0.25}>
              <button onClick={() => scrollRef.current?.scrollBy({ left: 400, behavior: 'smooth' })} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-ink transition-colors duration-700">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 1L11 7L5 13" stroke="#0A0A0A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </RevealText>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        onWheel={handleWheel}
        onMouseEnter={() => setCursorState('drag-h')}
        onMouseLeave={() => setCursorState('default')}
        className="overflow-x-auto overflow-y-hidden scrollbar-hide px-6 md:px-16"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex gap-6 md:gap-8 pb-4" style={{ width: 'max-content' }}>
          {services.map((s, i) => (
            <RevealText key={s.number} delay={i * 0.06} duration={1.2}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 1.2, ease: slowEase }}
                className="group w-[300px] md:w-[380px] flex-shrink-0"
              >
                <div className="relative">
                  <CinematicImage
                    src={s.image}
                    alt={s.title}
                    aspect="4/3"
                    revealDelay={i * 0.05}
                    parallaxStrength={0.06}
                    hoverZoom={1.04}
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="font-lato text-[11px] tracking-[0.15em] text-signal">{s.number}</span>
                  </div>
                </div>
                <h3 className="font-syne text-xl md:text-2xl font-800 tracking-tight mb-3 mt-5 group-hover:text-signal transition-colors duration-[1200ms]">{s.title}</h3>
                <p className="font-lato text-sm text-text-secondary leading-[1.85] mb-4">{s.description}</p>
                <div className="flex flex-wrap gap-4">
                  {s.tags.map((tag) => (
                    <span key={tag} className="font-lato text-[11px] tracking-[0.12em] uppercase text-text-muted">{tag}</span>
                  ))}
                </div>
              </motion.div>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
}
