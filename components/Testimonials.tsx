"use client";

import { motion } from 'framer-motion';
import RevealText from './RevealText';

const testimonials = [
  {
    quote:
      "Straightforward, committed, and reliable. These are the three words I would use to describe Zesh. They are among the rare few agencies that actually do exactly what they promise.",
    name: "Sriram Sankar",
    role: "Founder, Nyx Wolves",
  },
  {
    quote:
      "Zesh combines marketing knowledge, consumer insights, innovation, and creativity with a genuine passion for work and an outcome focus unlike any agency I've worked with.",
    name: "Abdul Khan",
    role: "Ex-CMO, TATA · Ex-Financial Advisor to Dhirubhai & Mukesh Ambani",
  },
  {
    quote:
      "Extremely professional and always goal-oriented. Zesh understands that marketing must justify itself on the balance sheet — and they deliver exactly that.",
    name: "Hafsa Sayed",
    role: "Founder, HAFSA The Couture",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-32 md:py-48 border-t border-border overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-signal/[0.025] blur-[220px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-16 relative z-10">
        {/* Section header */}
        <div className="mb-32 md:mb-28">
          <RevealText>
            <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">
              WHAT CLIENTS SAY
            </p>
          </RevealText>
          <RevealText delay={0.1}>
            <h2 className="font-syne text-4xl md:text-6xl font-800 tracking-[-0.03em] max-w-3xl leading-tight">
              Trusted by founders who demand results<span className="text-signal">.</span>
            </h2>
          </RevealText>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t, i) => (
            <RevealText key={t.name} delay={i * 0.14} duration={1.6}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col justify-between bg-surface/20 border border-border/40 hover:border-signal/30 rounded-3xl p-8 backdrop-blur-2xl overflow-hidden h-full"
              >
                {/* Top shine line */}
                <div className="absolute inset-x-0 top-0 h-px bg-white/15" />

                <div>
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <span key={s} className="text-signal text-sm">★</span>
                    ))}
                  </div>

                  {/* Decorative quote mark */}
                  <span className="font-syne text-6xl font-800 text-signal/20 leading-none select-none block -mt-2 mb-2">
                    &ldquo;
                  </span>

                  {/* Quote body */}
                  <p className="font-lato text-[15px] text-text-secondary leading-[1.85] mb-8">
                    {t.quote}
                  </p>
                </div>

                {/* Author */}
                <div className="pt-6 border-t border-border/20">
                  <p className="font-syne text-base font-800 tracking-tight text-ink group-hover:text-signal transition-colors duration-500">
                    {t.name}
                  </p>
                  <p className="font-lato text-[11px] tracking-[0.12em] uppercase text-text-muted mt-1 leading-relaxed">
                    {t.role}
                  </p>
                </div>
              </motion.div>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
}
