"use client";

import { m } from 'framer-motion';
import RevealText from '../../components/RevealText';
import { stats } from '../../lib/data';
import { slowEase } from '../../lib/animationEasing';

const renderStatSvg = (iconName: string) => {
  const commonProps = "w-5 h-5 text-signal group-hover:scale-110 transition-transform duration-300";
  switch (iconName) {
    case 'Megaphone':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={commonProps}>
          <path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
          <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14" />
          <path d="M8 6v8" />
        </svg>
      );
    case 'Search':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={commonProps}>
          <path d="m21 21-4.34-4.34" />
          <circle cx="11" cy="11" r="8" />
        </svg>
      );
    case 'Magnet':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={commonProps}>
          <path d="m12 15 4 4" />
          <path d="M2.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.029-6.029a1 1 0 1 1 3 3l-6.029 6.029a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.365-6.367A1 1 0 0 0 8.716 4.282z" />
          <path d="m5 8 4 4" />
        </svg>
      );
    case 'DollarSign':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={commonProps}>
          <line x1="12" x2="12" y1="2" y2="22" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      );
    default:
      return null;
  }
};

export default function Metrics() {
  return (
    <section className="relative py-16 md:py-48 border-t border-border overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-signal/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

          <div className="lg:col-span-5">
            <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">THE METRICS</p></RevealText>
            <RevealText delay={0.1}>
              <h2 className="font-syne text-4xl md:text-5xl font-800 tracking-[-0.03em] leading-[1.1] mb-6">
                Partnering with ambitious brands who demand proven expertise, predictable systems, and real business results<span className="text-signal">.</span>
              </h2>
            </RevealText>
            <RevealText delay={0.2}>
              <p className="font-lato text-base text-text-secondary leading-[1.85] max-w-lg mb-10 lg:mb-0">
                We design high-converting growth architecture that turns your website into a measurable enterprise asset. Performance, scaled and secured.
              </p>
            </RevealText>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, i) => {
                const SvgIcon = stat.icon ? renderStatSvg(stat.icon) : null;
                return (
                  <m.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: i * 0.15, ease: slowEase }}
                    whileHover={{ y: -5 }}
                    className="bg-paper/50 dark:bg-ink/5 border border-border/50 backdrop-blur-sm p-8 md:p-10 rounded-2xl flex flex-col justify-between group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-signal/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-signal/30 transition-colors duration-700" />

                    <div className="w-16 h-14 mb-8 flex items-end justify-between relative z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      <m.div initial={{ height: 0 }} whileInView={{ height: "40%" }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-2.5 bg-signal/30 rounded-t-sm" />
                      <m.div initial={{ height: 0 }} whileInView={{ height: "60%" }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-2.5 bg-signal/60 rounded-t-sm" />
                      <m.div initial={{ height: 0 }} whileInView={{ height: "80%" }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-2.5 bg-signal/90 rounded-t-sm" />
                      <m.div initial={{ height: 0 }} whileInView={{ height: "100%" }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-2.5 bg-signal rounded-t-sm" />

                      <svg className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-md" viewBox="0 0 64 56">
                        <m.path
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeInOut" }}
                          d="M 4 36 L 22 18 L 36 30 L 60 6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          className="text-ink dark:text-white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <m.path
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4 }}
                          d="M 48 6 H 60 V 18"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          className="text-ink dark:text-white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      {SvgIcon && (
                        <div className="absolute -bottom-2 -right-3 bg-paper dark:bg-[#121212] border border-border/80 dark:border-border/20 rounded-full p-1.5 shadow-md flex items-center justify-center w-8 h-8 z-20 group-hover:border-signal/50 transition-colors duration-300">
                          {SvgIcon}
                        </div>
                      )}
                    </div>

                    <h3 className="font-lato text-5xl md:text-6xl font-700 tracking-tight text-ink mb-6 relative z-10">{stat.value}</h3>
                    <div className="w-8 h-[2px] bg-signal mb-6 relative z-10" />
                    <p className="font-lato text-[11px] tracking-[0.2em] uppercase text-text-muted leading-relaxed relative z-10 pr-4">
                      {stat.label}
                    </p>
                  </m.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
