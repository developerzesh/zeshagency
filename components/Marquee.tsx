import { motion } from 'framer-motion';
const items = ['SEO', 'SMO', 'AEO', 'GEO', 'Web Development', 'Growth Marketing'];
export default function Marquee() {
  return (
    <section className="relative py-5 border-y border-border overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-8 mx-8 font-syne text-base md:text-lg font-800 text-ink/[0.03]">
            {item}<span className="w-1 h-1 rounded-full bg-signal/10" />
          </span>
        ))}
      </div>
    </section>
  );
}
