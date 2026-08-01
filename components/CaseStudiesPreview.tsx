import { motion } from 'framer-motion';
import RevealText from './RevealText';
import CinematicImage from './CinematicImage';
import { caseStudies } from '../lib/data';

export default function CaseStudiesPreview() {
  return (
    <section id="case-studies" className="relative py-32 md:py-48 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-24 md:mb-32">
          <div>
            <RevealText duration={2}><h2 className="font-syne text-5xl md:text-7xl font-800 tracking-[-0.03em]">Case Studies<span className="text-signal">.</span></h2></RevealText>
          </div>
          <RevealText delay={0.2} duration={1.6}>
            <p className="font-lato text-base md:text-lg text-text-secondary max-w-md leading-[1.85]">Real results for real engagements. Every number is verified, every story is true.</p>
          </RevealText>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {caseStudies.map((cs, i) => (
            <RevealText key={cs.slug} delay={i * 0.12} duration={1.8}>
              <a href={`/case-studies/${cs.slug}`}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="group h-full bg-surface/20 border border-border/40 hover:border-signal/40 p-6 rounded-3xl backdrop-blur-2xl relative overflow-hidden flex flex-col justify-between"
                >
                  {/* Top linear glow */}
                  <div className="absolute inset-x-0 top-0 h-px bg-white/20" />

                  <div>
                    {/* Image section */}
                    <div className="rounded-2xl overflow-hidden mb-6 relative">
                      <CinematicImage
                        src={cs.image}
                        alt={cs.title}
                        aspect="16/9"
                        revealDelay={i * 0.08}
                        parallaxStrength={0.1}
                        hoverZoom={1.03}
                        revealDuration={2}
                      />
                    </div>

                    {/* Client + Industry Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-lato text-[9px] tracking-[0.2em] uppercase px-2.5 py-0.5 rounded bg-signal/15 text-signal border border-signal/25 inline-block font-semibold">
                        {cs.industry}
                      </span>
                      <span className="font-lato text-[10px] text-text-muted tracking-wider uppercase font-bold">
                        {cs.client}
                      </span>
                    </div>

                    {/* Main Title */}
                    <h3 className="font-syne text-xl md:text-2xl font-800 tracking-tight mb-4 group-hover:text-signal transition-colors duration-500">
                      {cs.title}
                    </h3>

                    {/* Challenge & Solution info grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-t border-border/20 border-b border-border/20 mb-4 bg-white/[0.02] dark:bg-white/[0.01] rounded-xl px-4">
                      <div>
                        <span className="font-lato text-[9px] tracking-[0.15em] uppercase text-text-muted font-bold block mb-1">
                          Challenge
                        </span>
                        <p className="font-lato text-xs text-text-secondary leading-relaxed">
                          {cs.challenge}
                        </p>
                      </div>
                      <div>
                        <span className="font-lato text-[9px] tracking-[0.15em] uppercase text-signal font-bold block mb-1">
                          Solution
                        </span>
                        <p className="font-lato text-xs text-[#a1a1aa] leading-relaxed">
                          {cs.solution}
                        </p>
                      </div>
                    </div>

                    {/* Results Accomplished */}
                    <div className="mb-6">
                      <span className="font-lato text-[9px] tracking-[0.15em] uppercase text-[#a1a1aa] font-bold block mb-2">
                        Key Results
                      </span>
                      <ul className="space-y-2">
                        {cs.results.map((res, idx) => (
                          <li key={idx} className="flex items-start gap-2 font-lato text-xs text-text-secondary">
                            <span className="text-[#8cda28] font-bold select-none">✓</span>
                            <span>{res}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA section */}
                  <div className="pt-4 border-t border-border/20 flex justify-between items-center mt-auto">
                    <span className="font-lato text-sm font-semibold text-signal flex items-center gap-1.5 group-hover:text-ink transition-colors duration-300">
                      Explore Case Study
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </motion.div>
              </a>
            </RevealText>
          ))}
        </div>

        <RevealText delay={0.3}>
          <div className="mt-20 md:mt-24 flex justify-center">
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
              <a href="/case-studies" className="font-lato text-sm font-medium text-signal sig-hover">View All Case Studies</a>
            </motion.div>
          </div>
        </RevealText>
      </div>
    </section>
  );
}

