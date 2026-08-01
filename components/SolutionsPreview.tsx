import RevealText from './RevealText';
import { solutions } from '../lib/data';

export default function SolutionsPreview() {
  return (
    <section id="solutions" className="relative py-32 md:py-48 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24 md:mb-32">
          <div className="md:col-span-5">
            <RevealText duration={2}><h2 className="font-syne text-5xl md:text-7xl font-800 tracking-[-0.03em]">Solutions<span className="text-signal">.</span></h2></RevealText>
          </div>
          <div className="md:col-span-4 md:col-start-8 flex items-end">
            <RevealText delay={0.2} duration={1.6}><p className="font-lato text-base md:text-lg text-text-secondary leading-[1.85]">Eight specialized disciplines, one unified growth system. Each solution designed to compound with the others.</p></RevealText>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {solutions.map((s, i) => (
            <RevealText key={s.slug} delay={i * 0.08} duration={1.4}>
              <a href={`/solutions/${s.slug}`} className="group block py-10 md:py-48 px-0 border-b border-border md:even:pl-16 md:odd:pr-16">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-syne text-xl md:text-2xl font-800 tracking-tight group-hover:text-signal transition-colors duration-[1200ms]">{s.title}</h3>
                  <span className="font-syne text-sm font-800 text-signal group-hover:text-signal transition-colors duration-[1200ms] flex-shrink-0">{s.shortTitle}</span>
                </div>
                <p className="font-lato text-sm text-text-secondary leading-[1.8] max-w-sm group-hover:text-text-primary transition-colors duration-[1200ms]">{s.tagline}</p>
              </a>
            </RevealText>
          ))}
        </div>
        <RevealText delay={0.5}>
          <div className="mt-20">
            <a href="/solutions" className="font-lato text-sm font-medium text-signal sig-hover">View all solutions →</a>
          </div>
        </RevealText>
      </div>
    </section>
  );
}
