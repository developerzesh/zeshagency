"use client";

import { useState } from 'react';
import BookingModal from '../components/BookingModal';
import CircleArrowButton from '../components/CircleArrowButton';
import PageTransition from '../components/PageTransition';
import ParticleField from '../components/ParticleField';
import RevealText from '../components/RevealText';
import type { Solution } from '../lib/data';
import {
  QUICK_COMMERCE_PLATFORMS,
  QUICK_COMMERCE_SERVICES,
  type QuickCommerceServiceSlug,
} from '../lib/quickCommerce';

const quickCommerceFaqs = [
  {
    question: 'Which quick commerce platforms do you work with?',
    answer: 'Blinkit, Swiggy Instamart, Zepto, JioMart, BigBasket, Amazon Daily and Flipkart Minutes.',
  },
  {
    question: 'What is included in onboarding?',
    answer: 'Seller account setup and documentation, product catalogue creation and listing, brand registration, category approvals and launch support.',
  },
  {
    question: 'What does ongoing management cover?',
    answer: 'Catalogue and content updates, inventory and pricing monitoring, order and performance tracking, platform issue resolution and reporting.',
  },
  {
    question: 'What is included in Quick Commerce Ads?',
    answer: 'Campaign setup and keyword targeting, budget and bid optimisation, sponsored listings, banner placements and regular performance reports.',
  },
];

export default function QuickCommerceServicePage({
  solution,
  serviceSlug,
}: {
  solution: Solution;
  serviceSlug: QuickCommerceServiceSlug;
}) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const service = QUICK_COMMERCE_SERVICES[serviceSlug];
  const headline = solution.tagline.replace(/[.!?]$/, '');

  return (
    <PageTransition>
      <section className="relative min-h-[60vh] md:min-h-[75vh] flex items-end overflow-hidden pb-16 md:pb-28">
        <ParticleField />
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-16 pt-24 md:pt-40 w-full">
          <RevealText duration={1.4}>
            <a
              href="/services"
              className="inline-flex items-center gap-2 font-lato text-xs tracking-[0.12em] uppercase text-text-muted hover:text-signal transition-colors duration-500 mb-10"
            >
              ← All Services
            </a>
          </RevealText>
          <RevealText>
            <p className="font-lato text-xs tracking-[0.3em] uppercase text-signal mb-4">
              {solution.shortTitle}
            </p>
          </RevealText>
          <RevealText delay={0.1} duration={1.4}>
            <h1 className="font-syne text-4xl md:text-6xl lg:text-[5rem] font-800 tracking-[-0.04em] leading-[0.9] mb-8 max-w-5xl">
              {headline}<span className="text-signal">.</span>
            </h1>
          </RevealText>
          <div className="max-w-2xl">
            <RevealText delay={0.2}>
              <p className="font-lato text-base md:text-lg text-text-secondary leading-[1.85] mb-8">
                {service.intro}
              </p>
            </RevealText>
            <RevealText delay={0.3}>
              <CircleArrowButton
                label="Talk to Us"
                onClick={() => setIsBookingOpen(true)}
                animated={false}
              />
            </RevealText>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-24 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 md:px-16">
          <RevealText>
            <p className="font-lato text-xs tracking-[0.3em] uppercase text-signal mb-4">PLATFORMS</p>
            <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em] mb-10">
              Platforms we work with<span className="text-signal">.</span>
            </h2>
          </RevealText>
          <div className="quick-commerce-marquee-viewport scrollbar-hide overflow-x-auto overflow-y-hidden -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible">
            <div className="quick-commerce-marquee-track flex w-max sm:block sm:w-full">
              <div className="quick-commerce-platform-group flex shrink-0 gap-3 pr-3 sm:w-full sm:flex-wrap sm:pr-0">
                {QUICK_COMMERCE_PLATFORMS.map((platform) => (
                  <span
                    key={platform}
                    className="shrink-0 rounded-full border border-border bg-surface/30 px-4 py-2.5 font-lato text-sm text-text-secondary"
                  >
                    {platform}
                  </span>
                ))}
              </div>
              <div
                className="quick-commerce-platform-group flex shrink-0 gap-3 pr-3 sm:hidden"
                aria-hidden="true"
              >
                {QUICK_COMMERCE_PLATFORMS.map((platform) => (
                  <span
                    key={`duplicate-${platform}`}
                    className="shrink-0 rounded-full border border-border bg-surface/30 px-4 py-2.5 font-lato text-sm text-text-secondary"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 md:px-16">
          <div>
            <RevealText>
              <p className="font-lato text-xs tracking-[0.3em] uppercase text-signal mb-4">OUR SERVICES</p>
              <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em]">
                From onboarding to growth
                <span className="text-signal">.</span>
              </h2>
            </RevealText>
          </div>
          <div className="mt-8 md:mt-14">
            {service.sections.map((section, index) => (
              <RevealText key={section.title} delay={index * 0.08}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10 py-8 md:py-10 border-t border-border/70">
                  <div className="md:col-span-5">
                    <span className="font-lato text-xs tracking-[0.2em] text-signal uppercase">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-syne text-2xl md:text-3xl font-800 tracking-tight mt-3 mb-2">
                      {section.title}
                    </h3>
                    <p className="font-lato text-sm md:text-base text-text-secondary leading-[1.8]">
                      {section.summary}
                    </p>
                    <p className="font-lato text-sm text-text-muted leading-[1.8] mt-4 max-w-xl">
                      {section.description}
                    </p>
                  </div>
                  <ul className="md:col-span-6 md:col-start-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 self-center">
                    {section.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 font-lato text-sm text-text-muted leading-[1.7]">
                        <span className="text-signal" aria-hidden="true">↗</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5 md:sticky md:top-40 md:self-start">
            <RevealText>
              <p className="font-lato text-xs tracking-[0.3em] uppercase text-signal mb-4">QUICK COMMERCE</p>
              <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em] leading-tight">
                Quick commerce FAQs<span className="text-signal">.</span>
              </h2>
            </RevealText>
          </div>
          <div className="md:col-span-7">
            {quickCommerceFaqs.map((faq) => (
              <details key={faq.question} className="group border-b border-border">
                <summary className="flex items-center justify-between gap-6 py-6 cursor-pointer list-none">
                  <span className="font-lato text-base md:text-lg font-bold text-ink group-open:text-signal transition-colors duration-300">
                    {faq.question}
                  </span>
                  <span className="font-lato text-xl text-signal transition-transform duration-300 group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="font-lato text-sm text-text-secondary leading-[1.85] pb-6 pr-8">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <RevealText>
              <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em] leading-tight mb-5">
                Ready to grow on quick commerce<span className="text-signal">?</span>
              </h2>
              <p className="font-lato text-base md:text-lg text-text-secondary leading-[1.85] max-w-2xl">
                Let&apos;s get your brand on every platform that matters.
              </p>
            </RevealText>
          </div>
          <div className="md:col-span-4 md:flex md:justify-end">
            <RevealText delay={0.1}>
              <CircleArrowButton
                label="Get Started"
                onClick={() => setIsBookingOpen(true)}
                animated={false}
              />
            </RevealText>
          </div>
        </div>
      </section>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </PageTransition>
  );
}
