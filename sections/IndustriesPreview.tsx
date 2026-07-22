import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import { industries } from '../lib/data';

export default function IndustriesPreview() {
  return (
    <section className="py-32 md:py-48 border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16">
        <div className="text-center mb-20">
          <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">Who We Serve</p></RevealText>
          <RevealText delay={0.1}><h2 className="font-syne text-4xl md:text-6xl lg:text-7xl font-800 tracking-[-0.03em]">Industries<span className="text-signal">.</span></h2></RevealText>
          <RevealText delay={0.2}><p className="font-lato text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-[1.8] mt-6">Deep expertise across sectors where search visibility drives revenue.</p></RevealText>
        </div>
        {/* Horizontal scroll strip — no cards */}
        <div className="flex gap-0 overflow-x-auto scrollbar-hide snap-x snap-mandatory -mx-6 md:mx-0 md:overflow-visible md:snap-none md:flex-wrap md:justify-center">
          {industries.slice(0, 8).map((industry, i) => (
            <RevealText key={industry.slug} delay={i * 0.05}>
              <a href={`/industries?slug=${industry.slug}`} className="block snap-center flex-shrink-0 md:flex-shrink">
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                  className="group px-6 md:px-8 py-6"
                >
                  <h3 className="font-syne text-lg md:text-xl font-800 group-hover:text-signal transition-colors duration-700 whitespace-nowrap">{industry.title}</h3>
                  <div className="mt-2 w-0 group-hover:w-full h-[1px] bg-signal/30 transition-all duration-700" />
                </motion.div>
              </a>
            </RevealText>
          ))}
        </div>
        <RevealText delay={0.5}>
          <div className="text-center mt-10">
            <a href="/industries" className="font-lato text-sm text-signal sig-hover">Explore all industries →</a>
          </div>
        </RevealText>
      </div>
    </section>
  );
}
