"use client";

import { m } from 'framer-motion';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import PageTransition from '../components/PageTransition';
import { PortableText } from '@portabletext/react';

interface Job {
  slug: string;
  title: string;
  department: string;
  location: string;
  jobType: string;
  description: any[];
  applyLink?: string;
}

export default function CareerDetail({ job }: { job: Job }) {
  return (
    <PageTransition>
      <section className="pt-24 md:pt-40 pb-20 md:pb-36">
        <div className="max-w-[800px] mx-auto px-4 md:px-16">
          <RevealText duration={1.4}><a href="/careers" className="inline-flex items-center gap-2 font-lato text-[11px] tracking-[0.12em] uppercase text-text-muted hover:text-ink transition-colors duration-700 mb-14 block">← Careers</a></RevealText>

          <RevealText delay={0.1} duration={1.4}>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="font-lato text-[11px] tracking-[0.12em] uppercase text-signal">{job.department}</span>
              <span className="w-1 h-1 rounded-full bg-text-muted/15" />
              <span className="font-lato text-[11px] text-text-muted">{job.location}</span>
              <span className="font-lato text-[11px] text-text-muted">· {job.jobType}</span>
            </div>
          </RevealText>

          <RevealText delay={0.2} duration={2}>
            <h1 className="font-syne text-4xl md:text-6xl font-800 tracking-[-0.03em] leading-[1.05] mb-10">{job.title}<span className="text-signal">.</span></h1>
          </RevealText>

          <RevealText delay={0.3} duration={1.6}>
            <div className="font-lato text-base md:text-lg text-text-secondary leading-[1.85] mb-16 md:mb-28">
              <PortableText
                value={job.description}
                components={{
                  list: {
                    bullet: ({ children }) => <ul className="space-y-2 my-6">{children}</ul>,
                    number: ({ children }) => <ol className="space-y-2 my-6 pl-6 list-decimal">{children}</ol>,
                  },
                  listItem: {
                    bullet: ({ children }) => (
                      <m.div whileHover={{ x: 4 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }} className="group flex items-start gap-4 py-3 border-b border-border">
                        <span className="text-signal text-xs mt-1 group-hover:text-signal transition-colors duration-[1200ms]">→</span>
                        <span className="text-text-secondary group-hover:text-ink transition-colors duration-[1200ms]">{children}</span>
                      </m.div>
                    ),
                    number: ({ children }) => (
                      <li className="ml-2">{children}</li>
                    ),
                  },
                  marks: {
                    strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
                  },
                }}
              />
            </div>
          </RevealText>

          <RevealText delay={0.4} duration={1.4}>
            <div className="pt-8 border-t border-border">
              <MagneticButton strength={0.4}>
                <a
                  href={job.applyLink || 'mailto:Shahana@zeshagency.com'}
                  target={job.applyLink ? '_blank' : undefined}
                  rel={job.applyLink ? 'noopener noreferrer' : undefined}
                  className="font-lato text-sm font-medium text-signal sig-hover"
                >
                  Apply Now →
                </a>
              </MagneticButton>
            </div>
          </RevealText>
        </div>
      </section>
    </PageTransition>
  );
}
