import MagneticButton from './MagneticButton';
import { useCursor } from './CursorContext';
import { useTheme } from './ThemeContext';
import { citiesNav } from '../lib/data';

export default function Footer() {
  const { startLoading } = useCursor();
  const handleNav = () => startLoading();
  const { isDark } = useTheme();

  return (
    <footer className="border-t border-border py-18 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 mb-28">
          {/* Brand block (col-span-2) */}
          <div className="col-span-2 md:col-span-2">
            <MagneticButton strength={0.1}>
              <a href="/" onClick={handleNav} className="block">
                <img
                  src={isDark ? "/images/dark_logo_zesh.png" : "/images/light_logo_zesh.png"}
                  alt="ZESH."
                  className="h-5 md:h-6 w-auto"
                />
              </a>
            </MagneticButton>
            <p className="font-lato text-sm text-text-secondary mt-5 max-w-[240px] leading-[1.85]">
              Partnering with ambitious brands to engineer high-converting growth systems.
            </p>
          </div>

          {/* Solutions block (col-span-2) */}
          <div className="col-span-1 md:col-span-2">
            <p className="font-lato text-[10px] tracking-[0.2em] uppercase text-text-muted mb-5">Solutions</p>
            <ul className="space-y-3">
              {[
                { label: 'Search Engine Optimization', path: '/solutions?slug=seo' },
                { label: 'Answer Engine Optimization', path: '/solutions?slug=aeo' },
                { label: 'Generative Engine Optimization', path: '/solutions?slug=geo' },
                { label: 'Website Development', path: '/solutions?slug=web-dev' },
                { label: 'Local SEO Dominance', path: '/solutions?slug=local-seo' },
                { label: 'Scalable Lead Generation', path: '/solutions?slug=lead-gen' },
                { label: 'Social Media Management', path: '/solutions?slug=social-media' },
                { label: 'High-Trust Consultation', path: '/solutions?slug=consultation' },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.path}
                    onClick={handleNav}
                    className="font-lato text-sm text-text-secondary hover:text-ink transition-colors duration-700"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Regional Solutions block (col-span-2 md:col-span-3) */}
          <div className="col-span-2 md:col-span-3">
            <p className="font-lato text-[10px] tracking-[0.2em] uppercase text-text-muted mb-5">Regional Solutions</p>
            <div className="grid grid-cols-1 gap-4">
              {[
                { name: 'Dubai', key: 'dubai' },
                { name: 'Abu Dhabi', key: 'abudhabi' },
                { name: 'San Jose', key: 'sanjose' },
                { name: 'Texas', key: 'texas' },
                { name: 'Fremont', key: 'fremont' },
                { name: 'Pleasanton', key: 'pleasanton' },
              ].map((city) => (
                <div key={city.key} className="flex flex-col">
                  <span className="font-syne font-bold text-xs text-text-secondary mb-1">{city.name}</span>
                  <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-[11px] text-text-muted leading-none">
                    <a href={`/seo-aeo-geo_in_${city.key}`} onClick={handleNav} className="hover:text-signal transition-colors duration-300">SEO/AEO/GEO</a>
                    <span className="opacity-40">|</span>
                    <a href={`/lead-gen_in_${city.key}`} onClick={handleNav} className="hover:text-signal transition-colors duration-300">Lead Gen</a>
                    <span className="opacity-40">|</span>
                    <a href={`/social-media_in_${city.key}`} onClick={handleNav} className="hover:text-signal transition-colors duration-300">Social Media</a>
                    <span className="opacity-40">|</span>
                    <a href={`/web-dev_in_${city.key}`} onClick={handleNav} className="hover:text-signal transition-colors duration-300">Web Dev</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cities We Serve block (col-span-1 md:col-span-2) */}
          <div className="col-span-1 md:col-span-2">
            <p className="font-lato text-[10px] tracking-[0.2em] uppercase text-text-muted mb-5">Cities We Serve</p>
            <ul className="space-y-3">
              {citiesNav.map((city) => (
                <li key={city.label} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-signal" />
                  <a
                    href={city.path}
                    onClick={handleNav}
                    className="font-lato text-sm text-text-secondary hover:text-ink transition-colors duration-700"
                  >
                    {city.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Consultancy block (col-span-1 md:col-span-3) */}
          <div className="col-span-1 md:col-span-3">
            <p className="font-lato text-[10px] tracking-[0.2em] uppercase text-text-muted mb-5">Consultancy</p>
            <ul className="space-y-3">
              {[
                { label: 'Why Partner With Us', path: '/about' },
                { label: 'Featured Cases', path: '/case-studies' },
                { label: 'Insights & Advisory', path: '/insights' },
                { label: 'Blog & Articles', path: '/blog' },
                { label: 'Careers', path: '/careers' },
                { label: 'Privacy Policy', path: '/' },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.path}
                    onClick={handleNav}
                    className="font-lato text-sm text-text-secondary hover:text-ink transition-colors duration-700"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-10 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-lato text-[11px] text-text-muted">
            © 2026 Zesh. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            {[
              { name: 'Twitter', href: '#' },
              { name: 'LinkedIn', href: 'https://www.linkedin.com/company/zesh-agency/' },
              { name: 'Facebook', href: 'https://www.facebook.com/share/18GapT9Dzk/' },
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
