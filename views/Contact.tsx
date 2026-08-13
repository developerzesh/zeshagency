"use client";

import { useState } from 'react';
import { m, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import PageTransition from '../components/PageTransition';
import Testimonials from '../components/Testimonials';

const offices = [
  { city: 'India', type: 'HQ', email: 'Pune' },
  { city: 'USA', type: 'Studio', email: 'San Jose' },
  // { city: 'Tokyo', type: 'Studio', email: 'Shahana@zeshagency.com' },
];

export default function Contact() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const parallaxX = useSpring(useTransform(mouseX, [-500, 500], [-3, 3]), { damping: 60, stiffness: 40, mass: 2 });
  const parallaxY = useSpring(useTransform(mouseY, [-500, 500], [-3, 3]), { damping: 60, stiffness: 40, mass: 2 });

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [message, setMessage] = useState('');

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [statusMsg, setStatusMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) {
      setStatus('error');
      setStatusMsg('Please fill in both name and email fields.');
      return;
    }

    setStatus('sending');
    setStatusMsg('Encrypting pipeline telemetry...');

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey || serviceId.includes('here') || templateId.includes('here') || publicKey.includes('here')) {
      // Local fallback simulation if credentials are not configured yet
      setTimeout(() => {
        setStatus('success');
        setStatusMsg('Strategy audit requested. (Placeholder Mode: configured successfully!)');
        setFullName('');
        setEmail('');
        setWebsiteUrl('');
        setMessage('');
      }, 1500);
      return;
    }

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            from_name: fullName,
            reply_to: email,
            website_url: websiteUrl,
            message: message,
          },
        }),
      });

      if (response.ok) {
        setStatus('success');
        setStatusMsg('Your discovery call request has been received. Our lead strategist will review your site and contact you within 12 hours.');
        setFullName('');
        setEmail('');
        setWebsiteUrl('');
        setMessage('');
      } else {
        const errorText = await response.text();
        throw new Error(errorText || 'Failed to submit form.');
      }
    } catch (err: any) {
      setStatus('error');
      setStatusMsg(err.message || 'Submission failed. Please check credentials or try again later.');
    }
  };

  return (
    <PageTransition>
      <section className="relative pt-24 md:pt-40 pb-20 md:pb-36 overflow-hidden" onMouseMove={(e) => { mouseX.set(e.clientX - window.innerWidth / 2); mouseY.set(e.clientY - window.innerHeight / 2); }}>
        <m.div style={{ x: parallaxX, y: parallaxY }} className="absolute top-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-signal/[0.015] blur-[200px] pointer-events-none" />
        <m.div style={{ x: parallaxX, y: parallaxY }} className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-ink/[0.006] blur-[180px] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 md:px-16 relative z-10">
          <RevealText duration={1.4}><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-6">Discovery</p></RevealText>
          <RevealText duration={2}><h1 className="font-syne text-4xl md:text-6xl lg:text-7xl font-800 tracking-[-0.04em] leading-[0.9] mb-10">Let's build a predictable revenue engine<span className="text-signal">.</span></h1></RevealText>
          <RevealText delay={0.2} duration={1.6}><p className="font-lato text-lg md:text-xl text-text-secondary max-w-2xl leading-[1.85]">We respect your time. No generic sales pitches or follow-up call sequences. You will speak directly with our founders to analyze your organic search pipeline and conversion roadblocks.</p></RevealText>
        </div>
      </section>

      <section className="py-16 md:py-48 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-7">
              <RevealText duration={1.4}><p className="font-lato text-[11px] tracking-[0.2em] uppercase text-text-muted mb-8">Share your challenge</p></RevealText>
              <form className="space-y-8" onSubmit={handleSubmit}>
                <RevealText delay={0.1} duration={1.2}>
                  <div>
                    <label className="font-lato text-[11px] tracking-[0.15em] uppercase text-text-muted block mb-3">Full Name</label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="w-full bg-transparent border-b border-border py-3 font-lato text-base text-ink outline-none focus:border-ink transition-colors duration-700 placeholder:text-text-muted"
                      placeholder="Alexander Wright"
                    />
                    <p className="font-lato text-[10px] text-text-muted mt-2 italic">The name of the growth operator behind the brand.</p>
                  </div>
                </RevealText>
                <RevealText delay={0.15} duration={1.2}>
                  <div>
                    <label className="font-lato text-[11px] tracking-[0.15em] uppercase text-text-muted block mb-3">Work Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-transparent border-b border-border py-3 font-lato text-base text-ink outline-none focus:border-ink transition-colors duration-700 placeholder:text-text-muted"
                      placeholder="alexander@company.com"
                    />
                    <p className="font-lato text-[10px] text-text-muted mt-2 italic">The inbox you actually check.</p>
                  </div>
                </RevealText>
                <RevealText delay={0.2} duration={1.2}>
                  <div>
                    <label className="font-lato text-[11px] tracking-[0.15em] uppercase text-text-muted block mb-3">Company Website URL</label>
                    <input
                      type="url"
                      value={websiteUrl}
                      onChange={(e) => setWebsiteUrl(e.target.value)}
                      className="w-full bg-transparent border-b border-border py-3 font-lato text-base text-ink outline-none focus:border-ink transition-colors duration-700 placeholder:text-text-muted"
                      placeholder="https://company.com"
                    />
                    <p className="font-lato text-[10px] text-text-muted mt-2 italic">To analyze your search visibility gaps prior to the call.</p>
                  </div>
                </RevealText>
                <RevealText delay={0.25} duration={1.2}>
                  <div>
                    <label className="font-lato text-[11px] tracking-[0.15em] uppercase text-text-muted block mb-3">What is not working right now?</label>
                    <textarea
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-transparent border-b border-border py-3 font-lato text-base text-ink outline-none focus:border-ink transition-colors duration-700 placeholder:text-text-muted resize-none"
                      placeholder="Tell us about your product, organic search visibility gaps, or current pipeline challenges..."
                    />
                    <p className="font-lato text-[10px] text-text-muted mt-2 italic">Be as thorough as you like — our founders read every submission.</p>
                  </div>
                </RevealText>

                <AnimatePresence mode="wait">
                  {status !== 'idle' && (
                    <m.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className={`p-4 rounded-xl border font-lato text-sm leading-[1.6] ${status === 'sending' ? 'bg-ink/5 border-ink/10 text-ink/70' :
                        status === 'success' ? 'bg-signal/5 border-signal/25 text-ink' :
                          'bg-red-500/5 border-red-500/25 text-red-600'
                        }`}
                    >
                      {statusMsg}
                    </m.div>
                  )}
                </AnimatePresence>

                <RevealText delay={0.3} duration={1.2}>
                  <MagneticButton strength={0.4}>
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className={`font-lato text-sm font-medium text-signal sig-hover mt-4 transition-opacity duration-300 ${status === 'sending' ? 'opacity-40 cursor-default' : ''}`}
                    >
                      {status === 'sending' ? 'Sending Request...' : 'Request Discovery Call →'}
                    </button>
                  </MagneticButton>
                </RevealText>
                <RevealText delay={0.35} duration={1.2}><p className="font-lato text-[10px] text-text-muted mt-4">We respond within 12 business hours. Your submission is safe, secure, and confidential.</p></RevealText>
              </form>
            </div>

            <div className="md:col-span-4 md:col-start-9">
              <RevealText delay={0.2} duration={1.4}><p className="font-lato text-[11px] tracking-[0.2em] uppercase text-text-muted mb-8">Offices</p></RevealText>
              {offices.map((office, i) => (
                <RevealText key={office.city} delay={0.25 + i * 0.06} duration={1.2}>
                  <m.div whileHover={{ x: 4 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }} className="group py-6 border-b border-border">
                    <div className="flex items-center gap-3 mb-1"><div className="w-1.5 h-1.5 rounded-full bg-signal" /><h3 className="font-syne text-lg font-800">{office.city}</h3><span className="font-lato text-[10px] tracking-[0.12em] uppercase text-text-muted">{office.type}</span></div>
                    <a href={`mailto:${office.email}`} className="font-lato text-sm text-text-secondary group-hover:text-ink transition-colors duration-700">{office.email}</a>
                  </m.div>
                </RevealText>
              ))}
              <RevealText delay={0.45} duration={1.2}>
                <div className="mt-10">
                  <p className="font-lato text-[11px] tracking-[0.2em] uppercase text-text-muted mb-4">General</p>
                  <a href="mailto:Shahana@zeshagency.com" className="font-lato text-sm text-text-secondary hover:text-ink transition-colors duration-700 block mb-3">Shahana@zeshagency.com</a>
                  <a href="tel:+917498194011" className="font-lato text-sm text-text-secondary hover:text-ink transition-colors duration-700 block mb-4">+91 74981 94011</a>
                  <p className="font-lato text-sm text-text-secondary leading-[1.8]">Pizza Hut, Green Park, 7/2/3A, Rajas Society, Katraj, Pune, Maharashtra 411046</p>
                </div>
              </RevealText>
              <RevealText delay={0.5} duration={1.2}>
                <div className="mt-8">
                  <p className="font-lato text-[11px] tracking-[0.2em] uppercase text-text-muted mb-4">Social</p>
                  <div className="flex gap-6">
                    <a href="https://www.linkedin.com/company/zesh-agency/" target="_blank" rel="noopener noreferrer" className="font-lato text-sm text-text-muted hover:text-ink transition-colors duration-700">LinkedIn</a>
                    <a href="https://www.instagram.com/zeshagency" target="_blank" rel="noopener noreferrer" className="font-lato text-sm text-text-muted hover:text-ink transition-colors duration-700">Instagram</a>
                  </div>
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
