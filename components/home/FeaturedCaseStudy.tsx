"use client";

import { m } from 'framer-motion';
import RevealText from '../../components/RevealText';
import { slowEase } from '../../lib/animationEasing';

interface HomeStat {
  value: string;
  label: string;
}

interface CaseStudyCard {
  slug: string;
  title: string;
  mainMetric: string;
  stats: HomeStat[];
}

interface FeaturedCaseStudyProps {
  caseStudies: CaseStudyCard[];
}

export default function FeaturedCaseStudy({ caseStudies }: FeaturedCaseStudyProps) {
  return (
    <section className="relative py-14 md:py-48 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-4 md:px-16">
        {/* Header Block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 md:mb-24">
          <div className="md:col-span-6">
            <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">PROOF</p></RevealText>
            <RevealText delay={0.1}>
              <h2 className="font-syne text-4xl md:text-6xl font-800 tracking-[-0.03em] leading-tight">
                Strategic shifts that changed business trajectories<span className="text-signal">.</span>
              </h2>
            </RevealText>
          </div>
        </div>

        {/* 3-Column Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((card, i) => (
            <RevealText key={card.slug} delay={i * 0.12} duration={1.6}>
              <m.a
                href={`/case-studies/${card.slug}`}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.5, ease: slowEase }}
                className="group flex flex-col justify-between h-full bg-[#0E0F10] border border-[#1C1D1F] rounded-3xl p-8 md:p-10 transition-all duration-[600ms] cursor-pointer"
              >
                <div>
                  {/* Category / Label */}
                  <span className="font-lato text-[10px] tracking-[0.16em] uppercase text-[#71717A] font-bold block mb-4">
                    CASE STUDY
                  </span>
                  {/* Title */}
                  <h3 className="font-syne text-lg md:text-xl font-700 text-white tracking-tight leading-snug mb-8 group-hover:text-signal transition-colors duration-500">
                    {card.title}
                  </h3>
                </div>

                <div>
                  {/* Big Metric + Arrow row */}
                  <div className="flex items-center justify-between pointer-events-none mb-8">
                    <span className="text-5xl md:text-6xl font-extrabold font-inter tracking-tight text-signal leading-none">
                      {card.mainMetric}
                    </span>
                    <svg
                      className="w-10 h-10 text-signal/80 group-hover:text-signal group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>

                  {/* Divider line */}
                  <div className="h-px bg-[#27272A] w-full mb-6" />

                  {/* 3 Stats columns */}
                  <div className="grid grid-cols-3 gap-2">
                    {card.stats.map((stat, statIdx) => (
                      <div key={statIdx} className="flex flex-col text-left">
                        <span className="font-inter text-[15px] font-bold text-white leading-none mb-1.5">
                          {stat.value}
                        </span>
                        <span className="font-lato text-[9px] uppercase tracking-wider text-[#71717A]">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </m.a>
            </RevealText>
          ))}
        </div>

        <RevealText delay={0.4}>
          <div className="mt-16 md:mt-20 flex justify-start">
            <a href="/case-studies" className="font-lato text-sm font-medium text-signal sig-hover">Read More Case Studies →</a>
          </div>
        </RevealText>
      </div>
    </section>
  );
}
