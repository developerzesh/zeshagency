"use client";

import { useRef } from 'react';
import { m, useScroll, useTransform } from 'framer-motion';
import RevealText from '../components/RevealText';
import PageTransition from '../components/PageTransition';
import { slowEase } from '../lib/animationEasing';

const sections = [
  {
    title: 'Information We Collect',
    content: [
      'We collect information you provide directly, such as when you fill out a contact form, schedule a consultation, or subscribe to our newsletter. This may include your name, email address, company name, phone number, and project details.',
      'We automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referral URLs, pages viewed, and the time and date of your visit. This data is collected through cookies and similar tracking technologies.',
    ],
  },
  {
    title: 'How We Use Your Information',
    content: [
      'We use the information we collect to respond to your inquiries, provide requested services, send project updates and proposals, improve our website and services, and send occasional marketing communications (with your consent).',
      'We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality obligations.',
    ],
  },
  {
    title: 'Cookies and Tracking',
    content: [
      'Our website uses essential cookies to ensure basic functionality. We may also use analytics cookies to understand how visitors interact with our website, which helps us improve user experience.',
      'You can control cookie preferences through your browser settings. Disabling certain cookies may affect website functionality.',
    ],
  },
  {
    title: 'Data Security',
    content: [
      'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    title: 'Data Retention',
    content: [
      'We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements.',
    ],
  },
  {
    title: 'Your Rights',
    content: [
      'You have the right to access, correct, update, or delete your personal information at any time. You may also opt out of marketing communications by contacting us or using the unsubscribe link in our emails.',
      'If you are located in the European Economic Area (EEA), you have additional rights under the General Data Protection Regulation (GDPR), including the right to data portability and the right to lodge a complaint with a supervisory authority.',
    ],
  },
  {
    title: 'Third-Party Links',
    content: [
      'Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third parties. We encourage you to review the privacy policies of any third-party sites you visit.',
    ],
  },
];

export default function PrivacyPolicy() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(heroScroll, [0, 1], [0, 100]);
  const heroOpacity = useTransform(heroScroll, [0, 0.6], [1, 0]);

  return (
    <PageTransition>
      <section ref={heroRef} className="relative min-h-[20vh] md:min-h-[40vh] flex items-end overflow-hidden pb-8 md:pb-12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] rounded-full bg-signal/[0.02] blur-[200px]" />
          <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] rounded-full bg-ink/[0.01] blur-[150px]" />
        </div>
        <m.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-16 pt-20 md:pt-24 pb-8 md:pb-12 w-full">
          <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">Legal</p></RevealText>
          <RevealText><h1 className="font-syne text-[clamp(2.2rem,5vw,4.5rem)] font-800 leading-[0.95] tracking-[-0.02em] mb-4">Privacy Policy</h1></RevealText>
          <RevealText><p className="font-lato text-sm text-text-muted">Last Updated: August 14, 2026</p></RevealText>
        </m.div>
      </section>

      <section className="relative ">
        <div className="max-w-[1400px] mx-auto px-4 md:px-16 w-full">
          <RevealText>
            <p className="font-lato text-base text-text-secondary leading-[1.9] mb-8 mt-2">
              Zesh Agency (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the zeshagency.com website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </RevealText>

          {sections.map((section, i) => (
            <m.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.05, ease: slowEase }}
              className="mb-12"
            >
              <h2 className="font-syne text-xl md:text-2xl font-700 text-ink mb-2">{section.title}</h2>
              {section.content.map((paragraph, j) => (
                <p key={j} className="font-lato text-sm md:text-base text-text-secondary leading-[1.9] mb-4">
                  {paragraph}
                </p>
              ))}
            </m.div>
          ))}

          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.05, ease: slowEase }}
            className="mb-12"
          >
            <h2 className="font-syne text-xl md:text-2xl font-700 text-ink mb-2">Content &amp; Image Protection</h2>
            <div className="font-lato text-sm md:text-base text-text-secondary leading-[1.9] space-y-4">
              <p>
                All content on this website, including but not limited to text, graphics, logos, icons, images, videos, case study results, performance metrics, service descriptions, blog articles, and design elements, is the exclusive intellectual property of Zesh Agency and is protected by applicable copyright, trademark, and intellectual property laws.
              </p>
              <p>
                <strong className="text-ink">Copying, reproduction, redistribution, or use of any content, images, or proprietary materials from this website without explicit written consent from Zesh Agency is strictly prohibited.</strong> This includes, but is not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Screenshots, downloads, or reproduction of any page layout, design, or visual asset</li>
                <li>Use of our case study results, performance data, or client outcomes in any external materials</li>
                <li>Replication of our service descriptions, process frameworks, or strategic methodologies</li>
                <li>Extraction of content for training AI models, datasets, or automated systems</li>
                <li>Hotlinking, embedding, or framing any image or media asset from this site</li>
                <li>Use of our brand name, logo, or visual identity without prior authorization</li>
              </ul>
              <p>
                We actively monitor for unauthorized use of our content. Any violation may result in immediate legal action, including DMCA takedown notices, cease-and-desist orders, and claims for damages. By accessing this website, you agree to respect the intellectual property rights of Zesh Agency and its clients.
              </p>
              <p>
                If you wish to reference or repurpose any content from this site, you must obtain prior written permission by contacting us at <a href="mailto:Shahana@zeshagency.com" className="text-signal hover:underline">Shahana@zeshagency.com</a>.
              </p>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.05, ease: slowEase }}
          >
            <h2 className="font-syne text-xl md:text-2xl font-700 text-ink mb-2">Contact Us</h2>
            <p className="font-lato text-sm md:text-base text-text-secondary leading-[1.9]">
              If you have questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:Shahana@zeshagency.com" className="text-signal hover:underline">Shahana@zeshagency.com</a>.
            </p>
          </m.div>
        </div>
      </section>
    </PageTransition>
  );
}
