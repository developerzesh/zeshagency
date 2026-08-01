import RevealText from './RevealText';
import { industries } from '../lib/data';

export default function IndustriesPreview() {
  return (
    <section className="relative py-32 md:py-48 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24 md:mb-32">
          <div className="md:col-span-5">
            <RevealText duration={2}><h2 className="font-syne text-5xl md:text-7xl font-800 tracking-[-0.03em]">Industries<span className="text-signal">.</span></h2></RevealText>
          </div>
          <div className="md:col-span-4 md:col-start-8 flex items-end">
            <RevealText delay={0.2} duration={1.6}><p className="font-lato text-base md:text-lg text-text-secondary leading-[1.85]">Deep expertise across sectors. We understand your market because we've shaped results in it.</p></RevealText>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-12 gap-y-6">
          {industries.map((ind, i) => (
            <RevealText key={ind.slug} delay={i * 0.08} duration={1.4}>
              <a href={`/industries/${ind.slug}`} className="group block py-6 border-b border-border">
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-syne text-lg md:text-xl font-800 tracking-tight group-hover:text-signal transition-colors duration-[1200ms]">{ind.title}</h3>
                  <span className="text-signal group-hover:text-signal transition-colors duration-[1200ms] text-xs">→</span>
                </div>
                <p className="font-lato text-[13px] text-text-muted leading-[1.6]">{ind.tagline}</p>
              </a>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
}

