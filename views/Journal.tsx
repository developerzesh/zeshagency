"use client";

import { useRef, useState } from 'react';
import { m, useScroll, useTransform } from 'framer-motion';
import RevealText from '../components/RevealText';
import PageTransition from '../components/PageTransition';
import ImagePreview from '../components/ImagePreview';

const articles = [
  { id: 1, title: 'The Architecture of Emotion: How Space Design Shapes Feeling', category: 'Design Thinking', date: 'Dec 2024', readTime: '8 min', excerpt: 'Exploring the invisible relationship between spatial design and emotional response, and what it means for digital experiences.', image: '/images/hero-main.jpg' },
  { id: 2, title: 'Beyond the Fold: Rethinking Scroll in the Age of Immersive Web', category: 'Web Design', date: 'Nov 2024', readTime: '6 min', excerpt: 'The vertical scroll is 30 years old. It\'s time to reconsider how we move through digital content.', image: '/images/service-design.jpg' },
  { id: 3, title: 'Generative Design: When Algorithms Become Creative Partners', category: 'Technology', date: 'Oct 2024', readTime: '10 min', excerpt: 'How AI-assisted design tools are transforming the creative process from execution to curation.', image: '/images/lab-experiment.jpg' },
  { id: 4, title: 'The Quiet Power of Negative Space in Digital Interfaces', category: 'UI/UX', date: 'Sep 2024', readTime: '5 min', excerpt: 'Why the most impactful design decisions are often about what you leave out, not what you put in.', image: '/images/about-office.jpg' },
  { id: 5, title: 'Motion as Meaning: The Semantics of Animation in UX', category: 'Motion Design', date: 'Aug 2024', readTime: '7 min', excerpt: 'Every animation communicates something. Understanding the language of motion makes you a better designer.', image: '/images/service-motion.jpg' },
  { id: 6, title: 'Designing for Depth: Lessons from Spatial Computing', category: 'Emerging Tech', date: 'Jul 2024', readTime: '9 min', excerpt: 'As computing moves beyond flat screens, what can 2D designers learn from spatial thinking?', image: '/images/service-dev.jpg' },
];
const categories = ['All', 'Design Thinking', 'Web Design', 'Technology', 'UI/UX', 'Motion Design', 'Emerging Tech'];

export default function Journal() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredArticles = activeCategory === 'All' ? articles : articles.filter(a => a.category === activeCategory);

  return (
    <PageTransition>
      <section ref={heroRef} className="relative min-h-[55vh] md:min-h-[70vh] flex items-end overflow-hidden pb-20 md:pb-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none"><div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-ink/[0.008] blur-[180px]" /></div>
        <m.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-16 pt-24 md:pt-40 w-full">
          <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">Insights & Ideas</p></RevealText>
          <RevealText delay={0.1}><h1 className="font-syne text-4xl md:text-6xl lg:text-[5rem] font-800 tracking-[-0.04em] leading-[0.85]">The Journal<span className="text-signal">.</span></h1></RevealText>
          <RevealText delay={0.2}><p className="font-lato text-base md:text-lg text-text-secondary max-w-lg mt-8 leading-[1.85]">Thoughts on design, technology, and the creative process.</p></RevealText>
        </m.div>
      </section>

      <section className="border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 md:px-16 py-8">
          <div className="flex flex-wrap gap-6">{categories.map((cat) => (<m.button key={cat} onClick={() => setActiveCategory(cat)} whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.5 }} className={`font-lato text-[11px] tracking-[0.12em] uppercase transition-colors duration-700 ${activeCategory === cat ? 'text-ink' : 'text-text-muted hover:text-ink'}`}>{cat}</m.button>))}</div>
        </div>
      </section>

      <section className="py-14 md:py-36">
        <div className="max-w-[1400px] mx-auto px-4 md:px-16">
          {filteredArticles.map((article, i) => (
            <RevealText key={article.id} delay={i * 0.06}>
              <m.article whileHover={{ x: 8 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }} className="group py-10 border-b border-border">
                <div className="flex items-center gap-4 mb-3"><span className="font-lato text-[11px] tracking-[0.12em] uppercase text-signal">{article.category}</span><span className="w-1 h-1 rounded-full bg-text-muted/20" /><span className="font-lato text-[11px] text-text-muted">{article.date}</span><span className="font-lato text-[11px] text-text-muted">· {article.readTime}</span></div>
                <ImagePreview image={article.image} size="md" caption={article.category}>
                  <h3 className="font-syne text-xl md:text-3xl font-800 tracking-tight leading-tight group-hover:text-signal transition-colors duration-700 mb-3">{article.title}</h3>
                </ImagePreview>
                <p className="font-lato text-sm text-text-secondary leading-[1.85] max-w-xl">{article.excerpt}</p>
              </m.article>
            </RevealText>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
