import RevealText from '../components/RevealText';

const metrics = [
  { value: '340%', label: 'Average organic pipeline growth' },
  { value: '150+', label: 'Engagements delivered' },
  { value: '4.2x', label: 'Average ROI in year one' },
  { value: '98%', label: 'Client retention rate' },
];

export default function ResultsMetrics() {
  return (
    <section className="py-32 md:py-48 border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16">
        <div className="text-center mb-20">
          <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">Impact</p></RevealText>
          <RevealText delay={0.1}><h2 className="font-syne text-4xl md:text-6xl lg:text-7xl font-800 tracking-[-0.03em]">Results that compound<span className="text-signal">.</span></h2></RevealText>
        </div>
        {/* Large metrics in a flowing horizontal strip — mobile scrollable */}
        <div className="flex gap-12 md:gap-20 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 md:justify-center md:overflow-visible md:snap-none">
          {metrics.map((metric, i) => (
            <RevealText key={metric.label} delay={i * 0.12}>
              <div className="snap-center flex-shrink-0 text-center md:text-left">
                <span className="font-lato text-5xl md:text-7xl lg:text-8xl font-700 tracking-tight text-ink">{metric.value}</span>
                <p className="font-lato text-[11px] tracking-[0.15em] uppercase text-text-muted mt-4 max-w-[200px] md:max-w-none">{metric.label}</p>
              </div>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
}
