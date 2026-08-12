import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import { solutions } from '../data/solutions';

export default function FeaturedSolutions() {
  return (
    <section className="py-16 md:py-48 border-t border-border">
      <div className="max-w-[1200px] mx-auto px-4 md:px-16">
        <div className="text-center mb-20">
          <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">What We Do</p></RevealText>
          <RevealText delay={0.1}><h2 className="font-syne text-4xl md:text-6xl lg:text-7xl font-800 tracking-[-0.03em]">Solutions<span className="text-signal">.</span></h2></RevealText>
            <RevealText delay={0.2}><p className="font-lato text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-[1.8] mt-6">End-to-end digital marketing — from search visibility to social optimization to AI-powered growth.</p></RevealText>
        </div>
        {/* Horizontal scroll carousel — no cards */}
        <div className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-4 md:overflow-visible md:snap-none">
          {solutions.slice(0, 4).map((solution, i) => (
            <RevealText key={solution.slug} delay={i * 0.08}>
              <a href={`/services/${solution.slug}`} className="block snap-center flex-shrink-0 w-[82vw] md:w-auto">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                  className="group h-full"
                >
                  <div className="mb-4">
                    <span className="font-lato text-[10px] tracking-[0.2em] uppercase text-signal">{solution.shortTitle}</span>
                  </div>
                  <h3 className="font-syne text-xl md:text-2xl font-800 mb-3 group-hover:text-signal transition-colors duration-700">{solution.title}</h3>
                  <p className="font-lato text-sm text-text-secondary leading-[1.8] mb-6">{solution.tagline}</p>
                  <div className="flex flex-wrap gap-3">
                    {solution.features.slice(0, 3).map((f) => (
                      <span key={f} className="font-lato text-[10px] tracking-[0.1em] uppercase text-text-muted">{f}</span>
                    ))}
                  </div>
                  <div className="mt-6 w-full h-[1px] bg-border group-hover:bg-signal/20 transition-colors duration-700" />
                </motion.div>
              </a>
            </RevealText>
          ))}
        </div>
        <RevealText delay={0.4}>
          <div className="text-center mt-14">
            <a href="/solutions" className="font-lato text-sm text-signal sig-hover">View all solutions →</a>
          </div>
        </RevealText>
      </div>
    </section>
  );
}
