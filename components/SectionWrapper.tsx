import { motion } from 'framer-motion';

export default function SectionWrapper({ label, title, subtitle, children, centered = false, className = '' }: {
  label?: string; title: string; subtitle?: string; children?: React.ReactNode; centered?: boolean; className?: string;
}) {
  return (
    <section className={`py-32 md:py-48 ${className}`}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(30px)', y: 60 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <h2 className={`font-syne text-4xl md:text-6xl lg:text-7xl font-800 tracking-[-0.03em] mb-6 ${centered ? 'text-center' : ''}`}>
            {title}<span className="text-signal">.</span>
          </h2>
        </motion.div>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, filter: 'blur(20px)', y: 40 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.4, delay: 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className={`font-lato text-base md:text-lg text-text-secondary leading-[1.85] max-w-2xl mb-32 md:mb-28 ${centered ? 'text-center mx-auto' : ''}`}
          >
            {subtitle}
          </motion.p>
        )}
        {children}
      </div>
    </section>
  );
}
