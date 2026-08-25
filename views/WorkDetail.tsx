"use client";

import { useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { m, useScroll, useTransform } from 'framer-motion';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import CinematicImage from '../components/CinematicImage';
import PageTransition from '../components/PageTransition';
import ImageModal from '../components/ImageModal';

const projectsData: Record<string, { title: string; category: string; year: string; client: string; overview: string; challenge: string; solution: string; results: string[]; images: string[]; tags: string[] }> = {
  '1': { title: 'Meridian', category: 'Brand Identity', year: '2024', client: 'Meridian Hospitality Group', overview: 'A complete brand overhaul for a luxury hospitality group spanning 12 properties worldwide.', challenge: 'Meridian had grown through acquisitions, resulting in 12 distinct brand identities that confused guests and diluted their luxury positioning.', solution: 'We developed a flexible brand system with a core identity that adapts to each property\'s locale. Clean lines, generous whitespace, and a restrained palette.', results: ['Brand recognition +280%', 'Booking conversion +45%', 'Guest satisfaction +32%', '3 industry design awards'], images: ['/images/project-meridian.jpg', '/images/service-brand.jpg', '/images/about-office.jpg'], tags: ['Brand Strategy', 'Visual Identity', 'Digital Design', 'Art Direction'] },
  '2': { title: 'Vertex Labs', category: 'Digital Product', year: '2024', client: 'Vertex Labs Inc.', overview: 'A ground-up redesign of a SaaS analytics platform that drove 340% increase in user engagement.', challenge: 'The interface was built by engineers for engineers, with a steep learning curve that drove 60% of trial users to churn.', solution: 'We redesigned around progressive disclosure — surface simplicity with depth on demand.', results: ['User engagement +340%', 'Trial-to-paid +180%', 'Support tickets -65%', 'NPS 12 to 72'], images: ['/images/project-vertex.jpg', '/images/service-dev.jpg', '/images/service-design.jpg'], tags: ['Product Design', 'UX Strategy', 'Design System', 'Prototyping'] },
  '3': { title: 'Aether', category: 'Web Experience', year: '2023', client: 'Aether Audio', overview: 'An immersive WebGL experience for a premium audio brand that won 3 Awwwards.', challenge: 'Aether needed a digital experience that matched their flagship headphone\'s premium positioning.', solution: 'A fully immersive 3D experience with audio-reactive particles and scroll-driven animations.', results: ['3 Awwwards', 'Launch sales +400%', 'Avg. session 4.2 min', '15+ design publications'], images: ['/images/project-aether.jpg', '/images/service-motion.jpg', '/images/about-office.jpg'], tags: ['WebGL', 'Creative Development', '3D Design', 'Interaction Design'] },
  '4': { title: 'Prism', category: 'Creative Direction', year: '2023', client: 'Prism Technologies', overview: 'A multi-channel launch campaign that generated 2M+ impressions in 48 hours.', challenge: 'Prism was entering a crowded market with a genuinely different but hard-to-explain product.', solution: 'A campaign around "seeing differently" using prismatic visual effects across all touchpoints.', results: ['2M+ impressions / 48hrs', '45% brand awareness', '50K waitlist signups', '200+ influencer shares'], images: ['/images/project-prism.jpg', '/images/service-creative.jpg', '/images/about-office.jpg'], tags: ['Campaign Strategy', 'Creative Direction', 'Visual Identity', 'Content Creation'] },
};

export default function WorkDetail() {
  const searchParams = useSearchParams();
  const id = searchParams?.get('id') || '1';
  const project = projectsData[id] || projectsData['1'];
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <PageTransition>
      <section ref={heroRef} className="relative min-h-[55vh] md:min-h-[70vh] flex items-end overflow-hidden pb-16 md:pb-28">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <CinematicImage
            src={project.images[0]}
            alt={project.title}
            aspect="21/9"
            parallaxStrength={0.15}
            revealDuration={2.4}
            overlayStrength={0.94}
            className="absolute inset-0"
          />
        </div>
        <m.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-16 pt-24 md:pt-40 w-full">
          <a href="/work" className="inline-flex items-center gap-2 font-lato text-[11px] tracking-[0.12em] uppercase text-text-muted hover:text-ink transition-colors duration-700 mb-10">← Back to Work</a>
          <div className="flex flex-wrap items-center gap-4 mb-4"><span className="font-lato text-[11px] tracking-[0.12em] uppercase text-signal">{project.category}</span><span className="w-1 h-1 rounded-full bg-text-muted/20" /><span className="font-lato text-[11px] text-text-muted">{project.year}</span><span className="font-lato text-[11px] text-text-muted">· {project.client}</span></div>
          <h1 className="font-syne text-4xl md:text-6xl lg:text-[5rem] font-800 tracking-[-0.04em] leading-[0.85]">{project.title}<span className="text-signal">.</span></h1>
        </m.div>
      </section>

      <div className="max-w-[1400px] mx-auto px-4 md:px-16 py-8">
        <RevealText duration={2}>
          <CinematicImage
            src={project.images[0]}
            alt={project.title}
            aspect="21/9"
            parallaxStrength={0.12}
            revealDuration={2.2}
            hoverZoom={1.02}
          />
        </RevealText>
      </div>

      <section className="py-16 md:py-48"><div className="max-w-[1400px] mx-auto px-4 md:px-16"><div className="grid grid-cols-1 md:grid-cols-12 gap-12"><div className="md:col-span-6"><RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">Overview</p><p className="font-lato text-lg md:text-xl text-text-secondary leading-[1.8]">{project.overview}</p></RevealText></div><div className="md:col-span-3 md:col-start-9"><div className="flex flex-wrap gap-3">{project.tags.map((tag) => (<span key={tag} className="font-lato text-[11px] tracking-[0.12em] uppercase text-text-muted">{tag}</span>))}</div></div></div></div></section>

      <div className="max-w-[1400px] mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.images.slice(1).map((img, i) => (
            <RevealText key={img} delay={i * 0.15} duration={1.8}>
              <ImageModal images={project.images} captions={project.tags}>
                <CinematicImage
                  src={img}
                  alt={`${project.title} detail ${i + 1}`}
                  aspect="4/3"
                  parallaxStrength={0.08}
                  revealDelay={i * 0.1}
                  hoverZoom={1.03}
                />
              </ImageModal>
            </RevealText>
          ))}
        </div>
      </div>

      <section className="py-16 md:py-48 border-t border-border mt-16"><div className="max-w-[1400px] mx-auto px-4 md:px-16"><div className="grid grid-cols-1 md:grid-cols-2 gap-16"><div><RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">The Challenge</p><p className="font-lato text-base md:text-lg text-text-secondary leading-[1.85]">{project.challenge}</p></RevealText></div><div><RevealText delay={0.1}><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-ink mb-4">The Solution</p><p className="font-lato text-base md:text-lg text-text-secondary leading-[1.85]">{project.solution}</p></RevealText></div></div></div></section>

      <section className="py-16 md:py-48 border-t border-border"><div className="max-w-[1400px] mx-auto px-4 md:px-16"><RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">Impact</p></RevealText><RevealText delay={0.1}><h2 className="font-syne text-4xl md:text-6xl font-800 tracking-[-0.03em] mb-20 md:mb-32">Results<span className="text-signal">.</span></h2></RevealText><div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-14">{project.results.map((result, i) => (<RevealText key={result} delay={i * 0.1}><m.div whileHover={{ y: -4 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}><span className="font-lato text-2xl md:text-4xl font-700 tracking-tight text-ink">{result.split(' ')[0]}</span><p className="font-lato text-sm text-text-secondary mt-2">{result.split(' ').slice(1).join(' ')}</p></m.div></RevealText>))}</div></div></section>

      <section className="py-16 md:py-48 border-t border-border"><div className="max-w-[1400px] mx-auto px-4 md:px-16"><RevealText><h2 className="font-syne text-4xl md:text-6xl font-800 tracking-[-0.03em] mb-6">Like what you see<span className="text-signal">?</span></h2></RevealText><RevealText delay={0.1}><p className="font-lato text-base text-text-secondary max-w-md mb-8 leading-[1.85]">Every project starts with a conversation.</p></RevealText><MagneticButton strength={0.15}><button onClick={() => window.open('https://calendar.app.google/Mp8HrgYK67yjuYA29', '_blank', 'noopener,noreferrer')} className="inline-flex items-center gap-3 bg-ink text-paper px-6 py-3 rounded-lg font-lato text-sm font-medium hover:bg-signal transition-colors duration-500">Start a Project →</button></MagneticButton></div></section>
    </PageTransition>
  );
}
