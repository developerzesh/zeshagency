import MagneticButton from './MagneticButton';
import { useTheme } from './ThemeContext';
import { citiesNav } from '../lib/data';

export default function Footer() {
  const { isDark } = useTheme();

  return (
    <footer className="border-t border-border py-14 md:py-28">
      <div className="max-w-[1400px] mx-auto px-4 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 md:gap-x-12 gap-y-10 md:gap-y-8 mb-16 md:mb-24">
          {/* Brand block */}
          <div className="col-span-2 md:col-span-1">
            <MagneticButton strength={0.1}>
              <a href="/" className="block">
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

          {/* Solutions block */}
          <div className="col-span-1">
            <p className="font-lato text-[10px] tracking-[0.2em] uppercase text-text-muted mb-5">
              Solutions
            </p>

            <ul className="space-y-3">
              {[
                { label: "Search Engine Optimization", path: "/solutions/seo" },
                { label: "Answer Engine Optimization", path: "/solutions/aeo" },
                { label: "Generative Engine Optimization", path: "/solutions/geo" },
                { label: "Website Development", path: "/solutions/web-dev" },
                { label: "Local SEO Dominance", path: "/solutions/local-seo" },
                { label: "Scalable Lead Generation", path: "/solutions/lead-gen" },
                { label: "Social Media Management", path: "/solutions/social-media" },
                { label: "High-Trust Consultation", path: "/solutions/consultation" },
                { label: "Google Ads & Paid Search", path: "/solutions/google-ads" },
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
          <div className="col-span-1">
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
          <div className="col-span-1">
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
                { label: "Privacy Policy", path: "/" },
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

        {/* Bottom bar */}
        <div className="pt-10 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-lato text-[11px] text-text-muted">
            © 2026 Zesh. All rights reserved.
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
