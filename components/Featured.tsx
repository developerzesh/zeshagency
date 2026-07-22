import { motion } from 'framer-motion';
import RevealText from './RevealText';
import CinematicImage from './CinematicImage';

export default function Featured() {
  return (
    <section className="relative py-32 md:py-48 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <RevealText>
          <p className="font-lato text-[10px] tracking-[0.35em] uppercase text-signal mb-5">Featured</p>
        </RevealText>
        <RevealText delay={0.1} duration={1.4}>
          <h2 className="font-syne text-5xl md:text-7xl font-800 tracking-[-0.03em] mb-28 md:mb-24">Latest<span className="text-signal">.</span></h2>
        </RevealText>

        {/* Apple-style large feature card */}
        <RevealText delay={0.2} duration={1.6}>
          <motion.a href="/work/1" whileHover={{ y: -4 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }} className="group block">
            <CinematicImage
              src="/images/project-meridian.jpg"
              alt="Meridian project"
              aspect="21/9"
              parallaxStrength={0.1}
              revealDuration={2}
              hoverZoom={1.03}
              rounded="rounded-2xl"
            />
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-10">
              <motion.div
                initial={{ opacity: 0, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ delay: 0.6, duration: 1 }}
              >
                <span className="font-lato text-[10px] tracking-[0.2em] uppercase text-ink bg-paper/70 backdrop-blur-xl px-4 py-2 rounded-full">Featured Project</span>
              </motion.div>
            </div>
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 mt-8">
              <div>
                <h3 className="font-syne text-3xl md:text-5xl font-800 tracking-tight group-hover:text-signal transition-colors duration-700 mb-2">Meridian</h3>
                <p className="font-lato text-sm text-text-secondary leading-[1.9] max-w-lg">A complete brand overhaul for a luxury hospitality group spanning 12 properties worldwide. Brand recognition increased 280%.</p>
              </div>
              <div className="flex items-baseline gap-6 flex-shrink-0">
                <span className="font-lato text-[11px] text-text-muted">Brand Identity</span>
                <span className="font-lato text-[11px] text-text-muted">2024</span>
                <motion.span animate={{ x: 0 }} whileHover={{ x: 6 }} transition={{ duration: 0.6 }} className="text-signal text-sm">→</motion.span>
              </div>
            </div>
          </motion.a>
        </RevealText>

        {/* Two smaller feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-16 md:mt-20">
          {[
            { title: 'Generative Design', subtitle: 'When Algorithms Become Creative Partners', tag: 'Journal', image: '/images/journal-tech.jpg', href: '/journal' },
            { title: 'Neural Mesh', subtitle: 'AI-driven mesh generation in real-time WebGL', tag: 'Lab', image: '/images/lab-experiment.jpg', href: '/lab' },
          ].map((item, i) => (
            <RevealText key={item.title} delay={0.3 + i * 0.12} duration={1.2}>
              <motion.a href={item.href} whileHover={{ y: -4 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }} className="group block">
                <div className="relative">
                  <CinematicImage
                    src={item.image}
                    alt={item.title}
                    aspect="4/3"
                    parallaxStrength={0.08}
                    revealDelay={i * 0.1}
                    hoverZoom={1.04}
                    rounded="rounded-2xl"
                  />
                  <div className="absolute top-5 left-5 z-10">
                    <span className="font-lato text-[9px] tracking-[0.2em] uppercase text-ink bg-paper/60 backdrop-blur-xl px-3 py-1.5 rounded-full">{item.tag}</span>
                  </div>
                </div>
                <h3 className="font-syne text-xl md:text-2xl font-800 tracking-tight group-hover:text-signal transition-colors duration-700 mb-1 mt-5">{item.title}</h3>
                <p className="font-lato text-sm text-text-secondary leading-[1.9]">{item.subtitle}</p>
              </motion.a>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
}
