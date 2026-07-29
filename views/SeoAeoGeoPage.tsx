"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import ParticleField from '../components/ParticleField';
import PageTransition from '../components/PageTransition';

const slowEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

const TARGET_CITIES = [
  { key: 'dubai', name: 'Dubai', desc: 'Rank #1 on Google.ae and dominate middle-east LLM citations.' },
  { key: 'abudhabi', name: 'Abu Dhabi', desc: 'Reach enterprise and government decision makers in the UAE capital.' },
  { key: 'sanjose', name: 'San Jose', desc: 'Secure Silicon Valley search dominance and tech sector indexing.' },
  { key: 'texas', name: 'Texas', desc: 'Accelerate visibility across Austin, Dallas, and major Texas hubs.' },
  { key: 'fremont', name: 'Fremont', desc: 'Own East Bay queries and local manufacturer engine citations.' },
  { key: 'pleasanton', name: 'Pleasanton', desc: 'Target premium local searchers and professional services markets.' }
];

export default function SeoAeoGeoPage() {
  const [activeTab, setActiveTab] = useState<'seo' | 'aeo' | 'geo'>('seo');

  const tabs = {
    seo: {
      title: "Search Engine Optimization",
      subtitle: "The Foundation of Traditional Web Visibility",
      desc: "Traditional SEO is about ranking your website pages on top of search engine results pages (SERPs) like Google and Bing. By optimizing keywords, improving page speeds, and building high-authority backlinks, we ensure high-intent searchers find your business first.",
      bulletPoints: [
        "Keyword & Intent Research: Finding search terms that indicate direct buyer readiness.",
        "Technical Architecture: Perfecting Core Web Vitals, HTML hierarchies, and site indexing structures.",
        "Content Velocity: Publishing highly informative, cluster-based authority pages that win search volume.",
        "Authority Link Building: Acquiring natural, high-reputation backlinks to drive domain strength."
      ],
      color: "text-signal"
    },
    aeo: {
      title: "Answer Engine Optimization",
      subtitle: "Securing Citations Inside Conversational AI Platforms",
      desc: "AEO shifts focus from SERP links to AI conversational agents like ChatGPT, Claude, and Gemini. When users ask AI for direct answers or tool recommendations, AEO ensures your brand is chosen, cited, and recommended in the generated responses.",
      bulletPoints: [
        "Structured Schema Markup: Supplying search crawlers with semantic data structures they can easily parse.",
        "Q&A Content Optimization: Crafting precise, direct answers to common industry-related conversational queries.",
        "Entity Authority Engineering: Establishing your brand as a recognized entity in the LLM knowledge graphs.",
        "Third-Party Citations: Placing your brand inside review platforms and data sets that AI engines scrape."
      ],
      color: "text-orange-400"
    },
    geo: {
      title: "Generative Engine Optimization",
      subtitle: "Dominating Generative Search Interfaces",
      desc: "GEO is optimized for search engines that synthesize results dynamically, such as Perplexity, SearchGPT, and Google Overviews (formerly SGE). It focuses on semantic context, formatting relevance, and digital PR footprint to maintain high citations inside AI-generated summaries.",
      bulletPoints: [
        "Sources & Citation Engineering: Inserting your domain directly into the primary sources cited by AI engines.",
        "Semantic Relevance Mapping: Writing contents that align precisely with how LLMs map conceptual similarities.",
        "Dynamic Layout Formatting: Structuring data into markdown tables, bullet lists, and visual formats favored by GEO.",
        "Digital PR Integration: Building high-impact mentions across industry publications that Perplexity references."
      ],
      color: "text-cyan-400"
    }
  };

  return (
    <PageTransition>
      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-40 pb-20">
        <ParticleField />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-signal/[0.04] blur-[150px] rounded-full pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-cyan-500/[0.03] blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16 w-full">
          <RevealText duration={1.6}>
            <h1 className="font-syne text-5xl md:text-8xl font-800 tracking-[-0.04em] leading-[0.9] max-w-5xl">
              SEO / AEO / GEO<br />
              <span className="text-signal">The Search Era is Evolving.</span>
            </h1>
          </RevealText>

          <RevealText delay={0.2} duration={1.6}>
            <p className="font-lato text-base md:text-lg text-text-secondary max-w-2xl leading-[1.85] mt-8 mb-12">
              From web links on Google, to direct answers inside ChatGPT, to real-time generative summaries on Perplexity. We construct future-proof digital authority engines that dominate every search channel.
            </p>
          </RevealText>

          <RevealText delay={0.35} duration={1.4}>
            <div className="flex flex-wrap items-center gap-6">
              <MagneticButton strength={0.4}>
                <Link href="/contact" className="group flex items-center gap-4">
                  <span className="w-12 h-12 rounded-full bg-ink flex items-center justify-center group-hover:bg-signal transition-colors duration-[1200ms]">
                    <span className="text-paper text-sm">→</span>
                  </span>
                  <span className="font-lato text-sm font-medium text-ink">Get A Future-Proof Search Audit</span>
                </Link>
              </MagneticButton>
            </div>
          </RevealText>
        </div>
      </section>

      {/* ── EVOLUTION ROADMAP (Interactive Tabs) ── */}
      <section className="py-24 md:py-36 border-t border-border bg-surface/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="mb-16 md:mb-20">
            <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4 font-semibold">THE NEW PARADIGM</p>
            <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em] leading-tight">
              One Unified Strategy.<br />
              Three Layers of Visibility.
            </h2>
          </div>

          {/* Interactive Navigation Grid */}
          <div className="grid grid-cols-3 gap-2 md:gap-4 mb-12 border-b border-border pb-4">
            {(Object.keys(tabs) as Array<keyof typeof tabs>).map((tabKey) => (
              <button
                key={tabKey}
                onClick={() => setActiveTab(tabKey)}
                className={`text-left py-4 px-2 md:px-6 rounded-xl transition-all duration-500 relative overflow-hidden ${
                  activeTab === tabKey ? 'bg-surface/50 border-l-4 border-signal' : 'hover:bg-surface/20'
                }`}
              >
                <div className="font-syne font-800 text-xs md:text-sm uppercase tracking-wider text-text-muted mb-1">
                  Phase {tabKey === 'seo' ? '01' : tabKey === 'aeo' ? '02' : '03'}
                </div>
                <div className="font-syne font-800 text-base md:text-xl text-ink uppercase">
                  {tabKey.toUpperCase()}
                </div>
              </button>
            ))}
          </div>

          {/* Content Block with Tab Animation */}
          <div className="min-h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45, ease: slowEase }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
              >
                <div>
                  <h3 className="font-syne text-2xl md:text-3xl font-800 text-ink mb-2">
                    {tabs[activeTab].title}
                  </h3>
                  <p className="font-lato text-xs tracking-wider text-signal uppercase font-bold mb-6">
                    {tabs[activeTab].subtitle}
                  </p>
                  <p className="font-lato text-base text-text-secondary leading-[1.85] mb-8">
                    {tabs[activeTab].desc}
                  </p>
                </div>
                <div className="bg-surface/30 border border-border/40 p-6 md:p-8 rounded-2xl">
                  <h4 className="font-syne font-700 text-sm uppercase text-text-muted mb-6 tracking-widest">Key Focus Areas</h4>
                  <ul className="space-y-4">
                    {tabs[activeTab].bulletPoints.map((point, index) => {
                      const [title, desc] = point.split(': ');
                      return (
                        <li key={index} className="flex gap-3 items-start">
                          <span className="text-signal text-xs mt-1">◆</span>
                          <div>
                            <strong className="font-syne font-700 text-sm text-ink block">{title}</strong>
                            <span className="font-lato text-xs text-text-secondary leading-relaxed">{desc}</span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── REGIONAL DIRECTORY (Target City Links) ── */}
      <section className="py-24 md:py-36 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="mb-16 md:mb-20 text-center max-w-2xl mx-auto">
            <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4 font-semibold">LOCATION INDEX</p>
            <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em] leading-tight">
              Calibrated for Local Markets
            </h2>
            <p className="font-lato text-sm text-text-secondary leading-relaxed mt-4">
              Select your market below to view localized search opportunities, optimization parameters, and regional case studies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TARGET_CITIES.map((city, idx) => (
              <RevealText key={city.key} delay={idx * 0.08} duration={1.2}>
                <Link
                  href={`/seo-aeo-geo_in_${city.key}`}
                  className="group block border border-border/40 bg-surface/20 rounded-2xl p-6 md:p-8 hover:border-signal/40 hover:bg-signal/5 transition-all duration-500 h-full flex flex-col justify-between"
                >
                  <div>
                    <span className="font-lato text-[10px] tracking-widest text-signal font-bold uppercase mb-4 block">SEO / AEO / GEO</span>
                    <h3 className="font-syne text-xl font-800 text-ink mb-3 group-hover:text-signal transition-colors duration-300">{city.name}</h3>
                    <p className="font-lato text-xs text-text-secondary leading-[1.8]">{city.desc}</p>
                  </div>
                  <span className="font-lato text-[11px] font-bold text-signal tracking-[0.12em] uppercase flex items-center gap-1 mt-6 group-hover:translate-x-1.5 transition-transform duration-500">
                    Explore Strategy <span className="text-xs">→</span>
                  </span>
                </Link>
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONCLUDING CTA STRIP ── */}
      <section className="border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 bg-signal/5 border border-signal/20 rounded-2xl px-8 md:px-12 py-10 md:py-12">
            <div>
              <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-3 font-semibold">GET STARTED</p>
              <h2 className="font-syne text-2xl md:text-4xl font-800 tracking-[-0.02em] leading-tight max-w-xl">
                Ready to secure generative engine dominance?
              </h2>
              <p className="font-lato text-sm text-text-secondary mt-3 max-w-lg leading-[1.85]">
                Let our technical leads audit your current indexing, search appearances, and entity mapping footprint. Completely free audit.
              </p>
            </div>
            <div className="flex flex-col gap-4 flex-shrink-0">
              <MagneticButton strength={0.4}>
                <Link href="/contact" className="group flex items-center gap-4">
                  <span className="w-12 h-12 rounded-full bg-ink flex items-center justify-center group-hover:bg-signal transition-colors duration-[1200ms]">
                    <span className="text-paper text-sm">→</span >
                  </span>
                  <span className="font-lato text-sm font-medium text-ink font-semibold">Request System Audit</span>
                </Link>
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
