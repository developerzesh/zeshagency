import RevealText from '../components/RevealText';

const clients = ['Fortune 500', 'Series A–D Startups', 'Healthcare Networks', 'Luxury Brands', 'SaaS Platforms', 'Real Estate Groups', 'Architecture Firms', 'Professional Services'];

export default function TrustBar() {
  return (
    <section className="py-14 md:py-16 border-y border-border">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16">
        <RevealText>
          <p className="font-lato text-[10px] tracking-[0.3em] uppercase text-text-muted mb-8 text-center">Trusted by growth-focused organizations</p>
        </RevealText>
        {/* Mobile: horizontal scroll */}
        <div className="flex gap-10 overflow-x-auto scrollbar-hide snap-x snap-mandatory md:flex-wrap md:justify-center md:overflow-visible md:snap-none pb-2 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
          {clients.map((client, i) => (
            <RevealText key={client} delay={i * 0.06}>
              <span className="font-lato text-sm text-text-muted tracking-wide whitespace-nowrap snap-center">{client}</span>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
}
