import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';

const reasons = [
  { number: '01', title: 'Compounding, Not Campaigns', description: 'We build growth systems that accelerate over time — not campaigns that expire when the budget does.' },
  { number: '02', title: 'Search to Revenue', description: 'Every strategy is designed to convert visibility into pipeline. Traffic is a means, not an end.' },
  { number: '03', title: 'AI-First Visibility', description: 'We optimize for the AI-powered search landscape — LLMs, generative engines, and voice assistants.' },
  { number: '04', title: 'Senior Teams Only', description: 'No juniors running your account. Every engagement is led by practitioners with 10+ years of experience.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 md:py-48 border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16">
        <div className="text-center mb-20">
          <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">Why Zesh</p></RevealText>
          <RevealText delay={0.1}><h2 className="font-syne text-4xl md:text-6xl lg:text-7xl font-800 tracking-[-0.03em]">A different kind of growth partner<span className="text-signal">.</span></h2></RevealText>
        </div>
        {/* Full-width editorial rows — no cards */}
        <div>
          {reasons.map((reason, i) => (
            <RevealText key={reason.number} delay={i * 0.1}>
              <motion.div
                whileHover={{ x: 8 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="group flex gap-8 md:gap-20 py-12 md:py-16 border-b border-border"
              >
                <span className="font-lato text-sm font-medium text-signal pt-1 w-8 flex-shrink-0 hidden md:block">{reason.number}</span>
                <div className="flex-1">
                  <h3 className="font-syne text-xl md:text-3xl font-800 mb-3 group-hover:text-signal transition-colors duration-700">{reason.title}</h3>
                  <p className="font-lato text-sm md:text-base text-text-secondary leading-[1.8] max-w-lg">{reason.description}</p>
                </div>
              </motion.div>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
}
