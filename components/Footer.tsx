import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';
import { useTheme } from './ThemeContext';
import { SOLUTIONS_CITIES } from '../lib/serviceCityData';

export default function Footer() {
  const { isDark } = useTheme();
  const [expandedCity, setExpandedCity] = useState<string | null>(null);

  return (
    <footer className="border-t border-border py-14 md:py-28">
      <div className="max-w-[1400px] mx-auto px-4 md:px-16">

        {/* Top Row - Brand, Services, Industries, Consultancy */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 md:gap-x-12 gap-y-10 md:gap-y-8 mb-10 md:mb-16">

          {/* Brand block */}
          <div className="col-span-1 md:col-span-3">
            <MagneticButton strength={0.08}>
              <a href="/" className="block">
                <img
                  src={isDark ? "/images/dark_logo_zesh.png" : "/images/light_logo_zesh.png"}
                  alt="ZESH."
                  className="h-5 md:h-6 w-auto"
                  width="600"
                  height="64"
                />
              </a>
            </MagneticButton>

            <p className="font-lato text-sm text-text-secondary mt-5 max-w-[240px] leading-[1.85]">
              Partnering with ambitious brands to engineer high-converting growth systems.
            </p>
          </div>

          {/* Services block */}
          <div className="col-span-1 md:col-span-3">
            <p className="font-lato text-[10px] tracking-[0.2em] uppercase text-text-muted mb-5">
              Services
            </p>

            <ul className="space-y-3">
              {[
                { label: "Search Engine Optimization", path: "/services/seo" },
                { label: "Answer Engine Optimization", path: "/services/aeo" },
                { label: "Generative Engine Optimization", path: "/services/geo" },
                { label: "Website Development", path: "/services/web-dev" },
                { label: "Local SEO Dominance", path: "/services/local-seo" },
                { label: "Scalable Lead Generation", path: "/services/lead-gen" },
                { label: "Social Media Management", path: "/services/social-media" },
                { label: "High-Trust Consultation", path: "/services/consultation" },
                { label: "Google Ads & Paid Search", path: "/services/google-ads" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.path}
                    className="font-lato text-sm text-text-secondary hover:text-ink transition-colors duration-700"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries block */}
          <div className="col-span-1 md:col-span-3">
            <p className="font-lato text-[10px] tracking-[0.2em] uppercase text-text-muted mb-5">
              Industries
            </p>

            <ul className="space-y-3">
              {[
                { label: "SaaS & Technology", path: "/industries/saas" },
                { label: "E-commerce & D2C", path: "/industries/ecommerce" },
                { label: "Education & EdTech", path: "/industries/education" },
                { label: "Healthcare", path: "/industries/healthcare" },
                { label: "Real Estate", path: "/industries/real-estate" },
                { label: "Finance & FinTech", path: "/industries/finance" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.path}
                    className="font-lato text-sm text-text-secondary hover:text-ink transition-colors duration-700"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Consultancy block */}
          <div className="col-span-1 md:col-span-3">
            <p className="font-lato text-[10px] tracking-[0.2em] uppercase text-text-muted mb-5">
              Consultancy
            </p>

            <ul className="space-y-3">
              {[
                { label: "About", path: "/about" },
                { label: "Featured Cases", path: "/case-studies" },
                { label: "Insights & Advisory", path: "/insights" },
                { label: "Blog & Articles", path: "/blog" },
                { label: "Careers", path: "/careers" },
                { label: "Privacy Policy", path: "/privacy" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.path}
                    className="font-lato text-sm text-text-secondary hover:text-ink transition-colors duration-700"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Regional Services - Accordion */}
        <div className="border-t border-border pt-10 mb-16 md:mb-24">
          <p className="font-lato text-[10px] tracking-[0.2em] uppercase text-text-muted mb-6">Regional Services</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
            {SOLUTIONS_CITIES.map((city) => {
              const isExpanded = expandedCity === city.key;
              return (
                <div key={city.key} className="flex flex-col">
                  <div className="flex items-center justify-between cursor-pointer" onClick={() => setExpandedCity(isExpanded ? null : city.key)}>
                    <a
                      href={`/location/${city.key}`}
                      onClick={(e) => e.stopPropagation()}
                      className="font-lato text-sm font-medium text-text-secondary hover:text-ink transition-colors duration-300"
                    >
                      {city.name}
                    </a>
                    <m.svg
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      className="text-text-muted"
                    >
                      <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </m.svg>
                  </div>
                  <AnimatePresence>
                    {isExpanded && (
                      <m.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden will-change-transform"
                      >
                        <ul className="flex flex-col gap-2 pt-3">
                          {[
                            { label: `SEO services in ${city.name}`, path: `/location/${city.key}/seo-aeo-geo-service` },
                            { label: `Lead Gen services in ${city.name}`, path: `/location/${city.key}/lead-gen-service` },
                            { label: `Social Media services in ${city.name}`, path: `/location/${city.key}/social-media-service` },
                            { label: `Web Dev services in ${city.name}`, path: `/location/${city.key}/web-dev-service` },
                          ].map((service, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <div className="w-1 h-1 rounded-full bg-signal/50" />
                              <a
                                href={service.path}
                                className="font-lato text-[11px] text-text-muted hover:text-signal transition-colors duration-300"
                              >
                                {service.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </m.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-10 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-lato text-[11px] text-text-muted">
            © 2026 Zesh Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            {[
              // { name: 'Twitter', href: '#' },
              { name: 'LinkedIn', href: 'https://www.linkedin.com/company/zesh-agency/' },
              // { name: 'Meta', href: 'https://www.facebook.com/share/18GapT9Dzk/' },
              { name: 'Instagram', href: 'https://www.instagram.com/zeshagency' }
            ].map((s) => (
              <a
                key={s.name}
                href={s.href}
                className="font-lato text-[11px] text-text-muted hover:text-ink transition-colors duration-700"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
