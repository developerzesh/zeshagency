"use client";

import { useRef } from 'react';
import { m, useScroll, useTransform } from 'framer-motion';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import FloatingGeometry from '../components/FloatingGeometry';
import PageTransition from '../components/PageTransition';
import ImagePreview from '../components/ImagePreview';

const slowEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

const experiments = [
  { id: '01', title: 'Neural Mesh', category: 'Generative Art', tech: ['Three.js', 'WebGL', 'GPT-4'], description: 'An AI-driven mesh generation system that creates unique organic forms from text prompts, rendered in real-time WebGL.', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop' },
  { id: '02', title: 'SoundScape', category: 'Audio Visualization', tech: ['Web Audio', 'GLSL', 'R3F'], description: 'Real-time audio-reactive 3D landscapes that morph and evolve based on frequency analysis and beat detection.', image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&h=400&fit=crop' },
  { id: '03', title: 'DataFlow', category: 'Data Visualization', tech: ['D3.js', 'Three.js', 'WebSocket'], description: 'Immersive data visualization engine that transforms complex datasets into navigable 3D particle systems.', image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600&h=400&fit=crop' },
  { id: '04', title: 'TypeMotion', category: 'Kinetic Typography', tech: ['Cannon.js', 'Framer Motion', 'Canvas'], description: 'Physics-driven typography engine where letters respond to gravity, collisions, and user interaction.', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop' },
  { id: '05', title: 'PixelForge', category: 'Creative Tools', tech: ['GLSL', 'WebGPU', 'React Flow'], description: 'A browser-based shader editor with live preview, node-based visual programming, and instant share links.', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop' },
  { id: '06', title: 'VoidWalker', category: 'Interactive Experience', tech: ['Procedural', 'WebGL', 'Ambisonics'], description: 'A meditative infinite walk through procedurally generated abstract landscapes with ambient audio.', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop' },
];

export default function Lab() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <PageTransition>
      <section ref={heroRef} className="relative min-h-[60vh] md:min-h-[80vh] flex items-end overflow-hidden pb-20 md:pb-32">
        <FloatingGeometry />
        <m.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-16 pt-24 md:pt-40 w-full">
          <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">Experimental</p></RevealText>
          <RevealText delay={0.1}><h1 className="font-syne text-4xl md:text-6xl lg:text-[5rem] font-800 tracking-[-0.04em] leading-[0.85]">The Lab<span className="text-signal">.</span></h1></RevealText>
          <RevealText delay={0.2}><p className="font-lato text-base md:text-lg text-text-secondary max-w-lg mt-8 leading-[1.85]">Where ideas become prototypes. Our experimental playground for creative technology and interactive experiences.</p></RevealText>
        </m.div>
      </section>

      <section className="py-16 md:py-48 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 md:mb-28">
            <div className="md:col-span-4"><RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">Explore</p></RevealText><RevealText delay={0.1}><h2 className="font-syne text-4xl md:text-6xl font-800 tracking-[-0.03em]">Experiments<span className="text-signal">.</span></h2></RevealText></div>
            <div className="md:col-span-5 md:col-start-8 flex items-end"><RevealText delay={0.2}><p className="font-lato text-base text-text-secondary leading-[1.85]">Internal R&D projects that push technology to its limits.</p></RevealText></div>
          </div>
          <div>
            {experiments.map((exp, i) => (
              <RevealText key={exp.id} delay={i * 0.06}>
                <m.div whileHover={{ x: 6 }} transition={{ duration: 1, ease: slowEase }} className="group py-10 md:py-48 border-b border-border">
                    <div className="flex items-start md:items-baseline justify-between gap-4 mb-4">
                      <div className="flex items-baseline gap-6"><span className="font-lato text-[11px] text-text-muted">{exp.id}</span><ImagePreview image={exp.image} size="md" caption={exp.category}><h3 className="font-syne text-2xl md:text-3xl font-800 tracking-tight group-hover:text-signal transition-colors duration-[1200ms]">{exp.title}</h3></ImagePreview></div>
                      <span className="font-lato text-[11px] tracking-[0.12em] uppercase text-signal flex-shrink-0">{exp.category}</span>
                    </div>
                    <p className="font-lato text-sm text-text-secondary leading-[1.85] max-w-xl ml-0 md:ml-12 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-4 ml-0 md:ml-12">{exp.tech.map((t) => (<span key={t} className="font-lato text-[11px] tracking-[0.12em] uppercase text-text-muted">{t}</span>))}</div>
                  </m.div>
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-48 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[{ value: '47', label: 'Experiments Shipped' }, { value: '12', label: 'Open Source Projects' }, { value: '8', label: 'Tech Talks Given' }, { value: '3', label: 'Awards Won' }].map((stat, i) => (
              <RevealText key={stat.label} delay={i * 0.1}><m.div whileHover={{ y: -4 }} transition={{ duration: 1, ease: slowEase }}><span className="font-lato text-3xl md:text-5xl font-700 tracking-tight text-ink">{stat.value}</span><p className="font-lato text-[11px] tracking-[0.2em] uppercase text-text-muted mt-3">{stat.label}</p></m.div></RevealText>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-48 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 md:px-16">
          <RevealText><h2 className="font-syne text-4xl md:text-6xl font-800 tracking-[-0.03em] mb-6">Have an idea<span className="text-signal">?</span></h2></RevealText>
          <RevealText delay={0.1}><p className="font-lato text-base text-text-secondary max-w-md mb-8 leading-[1.85]">We love collaborating on experimental projects. Let's build something that's never been done before.</p></RevealText>
          <MagneticButton strength={0.3}><a href="mailto:Shahana@zeshagency.com" className="font-lato text-sm font-medium text-signal sig-hover">Shahana@zeshagency.com â†’</a></MagneticButton>
        </div>
      </section>
    </PageTransition>
  );
}
