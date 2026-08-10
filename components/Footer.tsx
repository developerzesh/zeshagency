import MagneticButton from './MagneticButton';
import { useTheme } from './ThemeContext';
import { citiesNav } from '../lib/data';
import { SOLUTIONS_CITIES } from '../lib/serviceCityData';

export default function Footer() {
  const { isDark } = useTheme();

  return (
    <footer className="border-t border-border py-14 md:py-28">
      <div className="max-w-[1400px] mx-auto px-4 md:px-16">
        
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 md:gap-x-12 gap-y-10 md:gap-y-8 mb-10 md:mb-16">
          
          {/* Brand block */}
          <div className="col-span-1 md:col-span-3">
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
          <div className="col-span-1 md:col-span-3">
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

          {/* Regional Solutions block */}
          <div className="col-span-1 md:col-span-6">
            <p className="font-lato text-[10px] tracking-[0.2em] uppercase text-text-muted mb-5">Regional Solutions</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
              {SOLUTIONS_CITIES.map((city) => (
                <div key={city.key} className="flex flex-col gap-3">
                  <span className="font-syne font-bold text-xs text-text-secondary border-b border-border/50 pb-2">{city.name}</span>
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: `SEO services in ${city.name}`, path: `/seo-aeo-geo_service_in_${city.key}` },
                      { label: `Lead Gen services in ${city.name}`, path: `/lead-gen_service_in_${city.key}` },
                      { label: `Social Media services in ${city.name}`, path: `/social-media_service_in_${city.key}` },
                      { label: `Web Dev services in ${city.name}`, path: `/web-dev_service_in_${city.key}` },
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
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 md:gap-x-12 gap-y-10 md:gap-y-8 mb-16 md:mb-24">
          
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

          {/* Cities We Serve block */}
          <div className="col-span-1 md:col-span-6">
            <p className="font-lato text-[10px] tracking-[0.2em] uppercase text-text-muted mb-5">Cities We Serve</p>
            <ul className="grid grid-cols-2 gap-y-3">
              {citiesNav.map((city) => (
                <li key={city.label} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-signal" />
                  <a
                    href={city.path}
                    className="font-lato text-sm text-text-secondary hover:text-ink transition-colors duration-700"
                  >
                    {city.label}
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
