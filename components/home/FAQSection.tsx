"use client";

import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import RevealText from '../../components/RevealText';
import { slowEase } from '../../lib/animationEasing';

const faqData = [
  {
    question: "What is the difference between SEO, AEO, and GEO?",
    answer: "SEO (Search Engine Optimization) targets keyword match rankings on traditional search engines. AEO (Answer Engine Optimization) ensures your brand is indexed and cited by conversational assistants (ChatGPT, Claude). GEO (Generative Engine Optimization) adapts website source data/structures so generative engines (Perplexity, Gemini RAG pipelines) confidently retrieve and recommend your domain."
  },
  {
    question: "How long does it take to see organic visibility improvements?",
    answer: "For technical upgrades and indexation fixes, we typically see crawl improvement and initial index health upgrades within 72 hours. Semantic graph integration and new keywords rank within 4 to 8 weeks, while enterprise authority building compounds over 3 to 6 months."
  },
  {
    question: "Do you work with in-house marketing execution teams?",
    answer: "Yes. We regularly partner with in-house product and marketing operators. We act as their specialized technical arm, delivering schema validation, retrieval content engineering, and programmatic page building, while providing ongoing reporting and blueprints they can run with."
  },
  {
    question: "What is your pricing structure and commitment?",
    answer: "We focus on outcome-oriented retainer models and quarterly sprints. After our initial discovery workshop, we build a customized 90-day execution blueprint with direct deliverables and milestones, allowing you full flexibility without locked annual contracts."
  },
  {
    question: "Can Zesh help integrate tracking with my CRM?",
    answer: "Absolutely. We build clean API connections that route and score inbound leads from multi-step forms directly into systems like HubSpot, Salesforce, or Marketo, including full closed-loop revenue attribution."
  }
];

export default function FAQSection() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-48 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-14 md:gap-20">
          {/* FAQ Header Column */}
          <div className="md:col-span-5 md:sticky md:top-40 md:self-start">
            <RevealText>
              <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">FAQS</p>
            </RevealText>
            <RevealText delay={0.1}>
              <h2 className="font-syne text-4xl md:text-5xl font-800 tracking-[-0.03em] leading-tight">
                Frequently asked questions<span className="text-signal">.</span>
              </h2>
            </RevealText>
          </div>

          {/* Accordion List Column */}
          <div className="md:col-span-7">
            <div>
              {faqData.map((faq, i) => {
                const isActive = activeFaq === i;
                return (
                  <div key={i} className="border-b border-border">
                    <button
                      onClick={() => setActiveFaq(isActive ? null : i)}
                      className="group w-full flex items-center justify-between gap-6 py-6 text-left cursor-pointer"
                    >
                      <span
                        className={`font-lato text-base md:text-lg font-bold transition-colors duration-500 ${isActive ? 'text-signal' : 'text-ink dark:text-[#EDECE7] group-hover:text-signal'
                          }`}
                      >
                        {faq.question}
                      </span>
                      <m.span
                        animate={{ rotate: isActive ? 45 : 0 }}
                        transition={{ duration: 0.4, ease: slowEase }}
                        className="text-signal text-xl leading-none flex-shrink-0 select-none will-change-transform"
                      >
                        +
                      </m.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <m.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.55, ease: slowEase }}
                          className="overflow-hidden will-change-transform"
                        >
                          <p className="font-lato text-sm text-text-secondary leading-[1.85] pb-6 pr-4">
                            {faq.answer}
                          </p>
                        </m.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
