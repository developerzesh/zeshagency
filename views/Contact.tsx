"use client";

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import PageTransition from '../components/PageTransition';
import Testimonials from '../components/Testimonials';

const offices = [
  { city: 'New York', type: 'HQ', email: 'ny@zesh.agency' },
  { city: 'London', type: 'Studio', email: 'ldn@zesh.agency' },
  { city: 'Tokyo', type: 'Studio', email: 'tky@zesh.agency' },
];

export default function Contact() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const parallaxX = useSpring(useTransform(mouseX, [-500, 500], [-3, 3]), { damping: 60, stiffness: 40, mass: 2 });
  const parallaxY = useSpring(useTransform(mouseY, [-500, 500], [-3, 3]), { damping: 60, stiffness: 40, mass: 2 });

  return (
    <PageTransition>
      <section className="relative pt-40 pb-36 overflow-hidden" onMouseMove={(e) => { mouseX.set(e.clientX - window.innerWidth / 2); mouseY.set(e.clientY - window.innerHeight / 2); }}>
        <motion.div style={{ x: parallaxX, y: parallaxY }} className="absolute top-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-signal/[0.015] blur-[200px] pointer-events-none" />
        <motion.div style={{ x: parallaxX, y: parallaxY }} className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-ink/[0.006] blur-[180px] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 relative z-10">
          <RevealText duration={1.4}><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-6">Discovery</p></RevealText>
          <RevealText duration={2}><h1 className="font-syne text-4xl md:text-6xl lg:text-7xl font-800 tracking-[-0.04em] leading-[0.9] mb-10">Let's build a predictable revenue engine<span className="text-signal">.</span></h1></RevealText>
          <RevealText delay={0.2} duration={1.6}><p className="font-lato text-lg md:text-xl text-text-secondary max-w-2xl leading-[1.85]">We respect your time. No generic sales pitches or follow-up call sequences. You will speak directly with our founders to analyze your organic search pipeline and conversion roadblocks.</p></RevealText>
        </div>
      </section>

      <section className="py-32 md:py-48 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-7">
              <RevealText duration={1.4}><p className="font-lato text-[11px] tracking-[0.2em] uppercase text-text-muted mb-8">Share your challenge</p></RevealText>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <RevealText delay={0.1} duration={1.2}>
                  <div>
                    <label className="font-lato text-[11px] tracking-[0.15em] uppercase text-text-muted block mb-3">Full Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-border py-3 font-lato text-base text-ink outline-none focus:border-ink transition-colors duration-700 placeholder:text-text-muted" placeholder="Alexander Wright" />
                    <p className="font-lato text-[10px] text-text-muted mt-2 italic">The name of the growth operator behind the brand.</p>
                  </div>
                </RevealText>
                <RevealText delay={0.15} duration={1.2}>
                  <div>
                    <label className="font-lato text-[11px] tracking-[0.15em] uppercase text-text-muted block mb-3">Work Email</label>
                    <input type="email" className="w-full bg-transparent border-b border-border py-3 font-lato text-base text-ink outline-none focus:border-ink transition-colors duration-700 placeholder:text-text-muted" placeholder="alexander@company.com" />
                    <p className="font-lato text-[10px] text-text-muted mt-2 italic">The inbox you actually check.</p>
                  </div>
                </RevealText>
                <RevealText delay={0.2} duration={1.2}>
                  <div>
                    <label className="font-lato text-[11px] tracking-[0.15em] uppercase text-text-muted block mb-3">Company Website URL</label>
                    <input type="url" className="w-full bg-transparent border-b border-border py-3 font-lato text-base text-ink outline-none focus:border-ink transition-colors duration-700 placeholder:text-text-muted" placeholder="https://company.com" />
                    <p className="font-lato text-[10px] text-text-muted mt-2 italic">To analyze your search visibility gaps prior to the call.</p>
                  </div>
                </RevealText>
                <RevealText delay={0.25} duration={1.2}>
                  <div>
                    <label className="font-lato text-[11px] tracking-[0.15em] uppercase text-text-muted block mb-3">What is not working right now?</label>
                    <textarea rows={5} className="w-full bg-transparent border-b border-border py-3 font-lato text-base text-ink outline-none focus:border-ink transition-colors duration-700 placeholder:text-text-muted resize-none" placeholder="Tell us about your product, organic search visibility gaps, or current pipeline challenges..." />
                    <p className="font-lato text-[10px] text-text-muted mt-2 italic">Be as thorough as you like — our founders read every submission.</p>
                  </div>
                </RevealText>
                <RevealText delay={0.3} duration={1.2}><MagneticButton strength={0.4}><button type="submit" className="font-lato text-sm font-medium text-signal sig-hover mt-4">Request Discovery Call →</button></MagneticButton></RevealText>
                <RevealText delay={0.35} duration={1.2}><p className="font-lato text-[10px] text-text-muted mt-4">We respond within 12 business hours. Your submission is safe, secure, and confidential.</p></RevealText>
              </form>
            </div>

            <div className="md:col-span-4 md:col-start-9">
              <RevealText delay={0.2} duration={1.4}><p className="font-lato text-[11px] tracking-[0.2em] uppercase text-text-muted mb-8">Offices</p></RevealText>
              {offices.map((office, i) => (
                <RevealText key={office.city} delay={0.25 + i * 0.06} duration={1.2}>
                  <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }} className="group py-6 border-b border-border">
                    <div className="flex items-center gap-3 mb-1"><div className="w-1.5 h-1.5 rounded-full bg-signal" /><h3 className="font-syne text-lg font-800">{office.city}</h3><span className="font-lato text-[10px] tracking-[0.12em] uppercase text-text-muted">{office.type}</span></div>
                    <a href={`mailto:${office.email}`} className="font-lato text-sm text-text-secondary group-hover:text-ink transition-colors duration-700">{office.email}</a>
                  </motion.div>
                </RevealText>
              ))}
              <RevealText delay={0.45} duration={1.2}>
                <div className="mt-10">
                  <p className="font-lato text-[11px] tracking-[0.2em] uppercase text-text-muted mb-4">General</p>
                  <a href="mailto:hello@zesh.agency" className="font-lato text-sm text-text-secondary hover:text-ink transition-colors duration-700">hello@zesh.agency</a>
                </div>
              </RevealText>
              <RevealText delay={0.5} duration={1.2}>
                <div className="mt-8">
                  <p className="font-lato text-[11px] tracking-[0.2em] uppercase text-text-muted mb-4">Social</p>
                  <div className="flex gap-6">{['Twitter', 'LinkedIn', 'Dribbble'].map((s) => (<a key={s} href="#" className="font-lato text-sm text-text-muted hover:text-ink transition-colors duration-700">{s}</a>))}</div>
                </div>
              </RevealText>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
    </PageTransition>
  );
}
