import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { m, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import MagneticButton from './MagneticButton';
import { solutions, industries } from '../lib/data';
import { citiesNav } from '../lib/siteConfig';
import { useTheme } from './ThemeContext';
import type { CaseStudy } from '../lib/data';

interface SubItem { label: string; path: string }
interface NavItem { label: string; path: string; submenu?: SubItem[] }

// ── Primary nav (with submenus) ──────────────────────────
function getPrimaryNav(caseStudies: CaseStudy[]): NavItem[] {
  return [
    { label: 'Services', path: '/services', submenu: solutions.map(s => ({ label: s.title, path: `/services/${s.slug}` })) },
    { label: 'Industries', path: '/industries', submenu: industries.map(i => ({ label: i.title, path: `/industries/${i.slug}` })) },
    { label: 'Locations', path: '', submenu: citiesNav.map(c => ({ label: c.label, path: c.path })) },
    { label: 'Case Studies', path: '/case-studies', submenu: caseStudies.map(cs => ({ label: cs.title, path: `/case-studies/${cs.slug}` })) },
  ];
}

// ── Secondary nav ────────────────────────────────────────
const secondaryNav: NavItem[] = [
  { label: 'About', path: '/about' },
  { label: 'Resources', path: '/blog', submenu: [{ label: 'Blog', path: '/blog' }, { label: 'Insights', path: '/insights' }] },
  { label: 'Careers', path: '/careers', submenu: [{ label: 'Open Roles', path: '/careers' }] },
];

const slowEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

// Chevron icon for items that have submenus
function Chevron({ active }: { active: boolean }) {
  return (
    <svg
      width="10" height="10" viewBox="0 0 10 10" fill="none"
      className={`transition-transform duration-300 ${active ? 'rotate-180' : 'rotate-0'}`}
    >
      <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Navigation({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const homepageNavTop = useTransform(scrollY, [0, 36], [36, 0]);
  const submenuTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const cityTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    let lastY = window.scrollY;
    let scrollUpDistance = 0;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const diff = currentY - lastY;

      if (diff > 0) {
        scrollUpDistance = 0;
        if (currentY > viewportHeight * 0.5) {
          setHidden(true);
        }
      } else {
        scrollUpDistance += Math.abs(diff);
        if (scrollUpDistance > viewportHeight * 0.1) {
          setHidden(false);
          scrollUpDistance = 0;
        }
      }

      lastY = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const primaryNav = getPrimaryNav(caseStudies);
  const navItems: NavItem[] = [...primaryNav, ...secondaryNav, { label: 'Contact', path: '/contact' }];

  const handleNavClick = () => { setIsOpen(false); };

  const showSubmenu = (path: string) => {
    if (submenuTimeout.current) clearTimeout(submenuTimeout.current);
    setActiveSubmenu(path);
  };
  const hideSubmenu = () => {
    submenuTimeout.current = setTimeout(() => setActiveSubmenu(null), 300);
  };

  const showCityServices = (cityKey: string) => {
    if (cityTimeout.current) clearTimeout(cityTimeout.current);
    setHoveredCity(cityKey);
  };
  const hideCityServices = () => {
    cityTimeout.current = setTimeout(() => setHoveredCity(null), 200);
  };

  const activeItem = navItems.find(item => item.label === activeSubmenu);

  // Shared desktop link class builder
  const linkClass = (label: string) =>
    `inline-flex items-center gap-1.5 font-lato text-[12px] tracking-[0.10em] uppercase px-3.5 py-2 rounded-lg transition-all duration-300 ${activeSubmenu === label
      ? 'text-ink dark:text-white bg-surface'
      : 'text-ink/50 dark:text-white/50 hover:text-ink dark:hover:text-white hover:bg-surface/60'
    }`;

  return (
    <>
      <m.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        style={pathname === '/' ? { top: homepageNavTop } : { top: 0 }}
        className="fixed left-0 right-0 z-50"
      >
        {/* ── Bar ────────────────────────────────────────── */}
        <div className="max-w-[1400px] mx-auto px-4 md:px-16">
          <div className="mt-8 bg-paper/85 backdrop-blur-2xl border border-border/40 rounded-2xl px-6 md:px-10 py-3.5 flex items-center justify-between">

            {/* Logo */}
            <MagneticButton strength={0.05}>
              <a href="/" onClick={handleNavClick} className="block">
                <img src={isDark ? "/images/dark_logo_zesh.png" : "/images/light_logo_zesh.png"} alt="ZESH." className="h-4 md:h-5 w-auto" width="600" height="64" />
              </a>
            </MagneticButton>

            {/* ── Desktop nav ─────────────────────────────── */}
            <div className="hidden lg:flex items-center">

              {/* Primary group */}
              <div className="flex items-center">
                {primaryNav.map((item) => {
                  const isLocations = item.label === 'Locations';
                  return (
                    <div
                      key={item.label}
                      onMouseEnter={() => item.submenu && showSubmenu(item.label)}
                      onMouseLeave={hideSubmenu}
                      className="relative"
                    >
                      {isLocations ? (
                        <span className={`${linkClass(item.label)} cursor-default select-none`}>
                          {item.label}
                          {item.submenu && <Chevron active={activeSubmenu === item.label} />}
                        </span>
                      ) : (
                        <a href={item.path} onClick={handleNavClick} className={linkClass(item.label)}>
                          {item.label}
                          {item.submenu && <Chevron active={activeSubmenu === item.label} />}
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Divider */}
              <span className="mx-3 h-4 w-px bg-border/60" />

              {/* Secondary group */}
              <div className="flex items-center">
                {secondaryNav.map((item) => (
                  <div
                    key={item.label}
                    onMouseEnter={() => item.submenu && showSubmenu(item.label)}
                    onMouseLeave={hideSubmenu}
                    className="relative"
                  >
                    <a href={item.path} onClick={handleNavClick} className={linkClass(item.label)}>
                      {item.label}
                      {item.submenu && <Chevron active={activeSubmenu === item.label} />}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right controls ──────────────────────────── */}
            <div className="flex items-center gap-3">

              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="hidden lg:flex items-center justify-center w-8 h-8 rounded-lg text-ink/40 hover:text-ink hover:bg-surface/60 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                ) : (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="black" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </button>

              {/* Contact CTA */}
              <a
                href="/contact"
                onClick={handleNavClick}
                className="hidden lg:inline-flex items-center font-lato text-[11px] tracking-[0.12em] uppercase px-4 py-2 rounded-lg bg-ink text-paper hover:bg-ink/80 transition-all duration-300"
              >
                Contact
              </a>

              {/* Mobile hamburger */}
              <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden flex flex-col gap-1.5 w-7 ml-1" aria-label="Open menu">
                <m.span animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} className="block h-[1.5px] w-full bg-ink origin-center will-change-transform" />
                <m.span animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} className="block h-[1.5px] w-full bg-ink origin-center will-change-transform" />
                <m.span animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} className="block h-[1.5px] w-full bg-ink origin-center will-change-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* ── Desktop mega dropdown ─────────────────────── */}
        <AnimatePresence>
          {activeSubmenu && activeItem?.submenu && (
            <m.div
              initial={{ opacity: 0, y: -14, scale: 0.98, filter: 'blur(14px)' }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, scale: 0.98, filter: 'blur(10px)' }}
              transition={{ duration: 0.45, ease: slowEase }}
              onMouseEnter={() => showSubmenu(activeSubmenu)}
              onMouseLeave={hideSubmenu}
              className="hidden lg:block absolute left-1/2 -translate-x-1/2 mt-2 w-full max-w-5xl will-change-transform"
            >
              <div className="mx-6 md:mx-16 relative rounded-2xl overflow-hidden">

                {/* ── Glass shell ── */}
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'rgba(var(--glass-bg, 255,255,255), 0.96)',
                    backdropFilter: 'blur(40px) saturate(160%)',
                    WebkitBackdropFilter: 'blur(40px) saturate(160%)',
                    boxShadow: '0 8px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)',
                  }}
                />
                <div
                  className="absolute inset-x-0 top-0 h-px rounded-t-2xl"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.7) 40%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.7) 60%, transparent 100%)',
                  }}
                />
                <div
                  className="absolute inset-x-0 top-0 h-16 rounded-t-2xl pointer-events-none"
                  style={{
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.18) 0%, transparent 100%)',
                  }}
                />
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{ border: '1px solid var(--glass-border)' }}
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-px"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }}
                />

                {/* ── Content ── */}
                <div className="relative z-10 px-10 pt-8 pb-0">

                  {/* Header row */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="font-syne text-[22px] font-800 text-ink leading-tight">
                        {activeItem.label}
                      </p>
                      <p className="font-lato text-[10px] tracking-[0.22em] uppercase text-ink/55 mt-1">
                        Explore {activeItem.label.toLowerCase()}
                      </p>
                    </div>
                    {activeItem.label !== 'Locations' && (
                      <a
                        href={activeItem.path}
                        onClick={handleNavClick}
                        className="sig-hover font-lato text-[11px] tracking-[0.12em] uppercase text-signal hover:text-ink transition-colors duration-300"
                      >
                        View All →
                      </a>
                    )}
                  </div>

                  {/* Locations: full-width cities grid */}
                  {activeItem.label === 'Locations' ? (
                    <div className="pb-4">
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {activeItem.submenu.map((sub, i) => {
                          const pathParts = sub.path.split('/').filter(Boolean);
                          const cityKey = pathParts[pathParts.length - 1];
                          const cityName = sub.label;
                          const isHovered = hoveredCity === cityKey;
                          return (
                            <m.div
                              key={sub.path + sub.label}
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.03, duration: 0.4, ease: slowEase }}
                              className="relative"
                              onMouseEnter={() => showCityServices(cityKey)}
                              onMouseLeave={hideCityServices}
                            >
                              <a
                                href={sub.path}
                                onClick={handleNavClick}
                                className={`group flex items-center gap-3 py-3 px-4 border-b border-ink/5 hover:border-signal/30 transition-all duration-300 rounded-lg ${isHovered ? 'bg-signal/10 border-signal/30' : ''}`}
                              >
                                <span className={`w-[5px] h-[5px] rounded-full shrink-0 transition-all duration-300 ${isHovered ? 'bg-signal' : ''}`} style={{ background: isHovered ? 'rgba(244,165,54,1)' : 'transparent', border: isHovered ? 'none' : '1.5px solid rgba(244,165,54,0.55)' }} />
                                <span className={`font-lato text-[13px] transition-colors duration-300 ${isHovered ? 'text-ink font-semibold' : 'text-ink/75 group-hover:text-ink'}`}>{sub.label}</span>
                                <span className="ml-auto font-lato text-[10px] text-signal opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
                              </a>
                              {/* Services dropdown below city on hover */}
                              <AnimatePresence>
                                {isHovered && (
                                  <m.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.25, ease: slowEase }}
                                    className="overflow-hidden"
                                  >
                                    <div className="pl-4 pt-2 pb-1 space-y-0.5">
                                      {[
                                        { slug: 'seo-aeo-geo', label: `SEO services in ${cityName}` },
                                        { slug: 'lead-gen', label: `Lead Gen services in ${cityName}` },
                                        { slug: 'social-media', label: `Social Media services in ${cityName}` },
                                        { slug: 'web-dev', label: `Web Dev services in ${cityName}` },
                                      ].map((service, j) => (
                                        <m.div
                                          key={service.slug}
                                          initial={{ opacity: 0, x: -8 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{ delay: j * 0.04, duration: 0.3, ease: slowEase }}
                                        >
                                          <a
                                            href={`/location/${cityKey}/${service.slug}-service`}
                                            onClick={handleNavClick}
                                            className="group flex items-center gap-2 py-1.5 hover:text-signal transition-colors duration-200"
                                          >
                                            <span className="w-[3px] h-[3px] rounded-full bg-signal/50 shrink-0" />
                                            <span className="font-lato text-[11px] text-ink/60 group-hover:text-signal transition-colors duration-200">{service.label}</span>
                                          </a>
                                        </m.div>
                                      ))}
                                    </div>
                                  </m.div>
                                )}
                              </AnimatePresence>
                            </m.div>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    /* Default: two-column grid for other nav items */
                    <div className="grid grid-cols-2 gap-x-8 gap-y-0">
                      {activeItem.submenu.map((sub, i) => (
                        <m.div
                          key={sub.path + sub.label}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.03, duration: 0.4, ease: slowEase }}
                        >
                          <a
                            href={sub.path}
                            onClick={handleNavClick}
                            className="group flex items-center gap-3 py-3 border-b border-ink/10 hover:border-signal/30 transition-all duration-300"
                          >
                            <span
                              className="w-[5px] h-[5px] rounded-full shrink-0 transition-all duration-300 group-hover:scale-125"
                              style={{
                                background: 'transparent',
                                border: '1.5px solid rgba(244,165,54,0.55)',
                              }}
                            />
                            <span className="font-lato text-[13px] text-ink/75 group-hover:text-ink transition-colors duration-300">
                              {sub.label}
                            </span>
                            <span className="ml-auto font-lato text-[10px] text-signal opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                              →
                            </span>
                          </a>
                        </m.div>
                      ))}
                    </div>
                  )}
                </div>

                {/* ── Frosted footer strip ── */}
                <div
                  className="relative z-10 mt-5 px-10 py-4 flex items-center justify-between"
                  style={{
                    background: 'rgba(0,0,0,0.03)',
                    boxShadow: 'inset 0 1px 0 rgba(0,0,0,0.07)',
                  }}
                >
                  <p className="font-lato text-[10px] tracking-[0.18em] uppercase text-ink/60">
                    Zesh Agency
                  </p>
                  <span className="font-lato text-[10px] tracking-[0.12em] uppercase text-signal">
                    Shahana@zeshagency.com
                  </span>
                </div>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </m.nav>

      {/* ── Mobile full-screen menu ───────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-paper will-change-transform"
          >
            <div className="h-full flex flex-col pt-24 md:pt-40 px-8 md:px-16 pb-8 overflow-y-auto">
              <div className="flex-1">
                {navItems.map((item, i) => {
                  const hasSubmenu = item.submenu && item.submenu.length > 0;
                  const isExpanded = expandedMobile === item.label;
                  const isLocations = item.label === 'Locations';
                  return (
                    <m.div
                      key={item.label}
                      initial={{ opacity: 0, filter: 'blur(16px)', x: -24 }}
                      animate={{ opacity: 1, filter: 'blur(0px)', x: 0 }}
                      exit={{ opacity: 0, filter: 'blur(12px)', x: -16 }}
                      transition={{ delay: i * 0.06, duration: 0.8, ease: slowEase }}
                      className="mb-1 will-change-transform"
                    >
                      <div className="flex items-center justify-between">
                        {isLocations ? (
                          <span className="font-syne text-4xl md:text-6xl font-800 text-ink/60 hover:text-ink transition-colors duration-300 block py-2">
                            {item.label}
                          </span>
                        ) : (
                          <a
                            href={item.path}
                            onClick={handleNavClick}
                            className="font-syne text-4xl md:text-6xl font-800 text-ink/60 hover:text-ink transition-colors duration-300 block py-2"
                          >
                            {item.label}
                          </a>
                        )}
                        {hasSubmenu && (
                          <button
                            onClick={() => setExpandedMobile(isExpanded ? null : item.label)}
                            className="p-2 text-ink/40 hover:text-ink transition-colors duration-300"
                          >
                            <m.svg
                              animate={{ rotate: isExpanded ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              width="16" height="16" viewBox="0 0 16 16" fill="none"
                            >
                              <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </m.svg>
                          </button>
                        )}
                      </div>
                      <AnimatePresence>
                        {hasSubmenu && isExpanded && (
                          <m.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: slowEase }}
                            className="overflow-hidden will-change-transform"
                          >
                            <div className="grid grid-cols-2 gap-x-6 pl-1 pt-1 pb-4">
                              {item.submenu!.slice(0, 6).map((sub) => (
                                <a
                                  key={sub.path + sub.label}
                                  href={sub.path}
                                  onClick={handleNavClick}
                                  className="font-lato text-[11px] tracking-[0.08em] uppercase text-ink/40 hover:text-ink transition-colors duration-300 py-1"
                                >
                                  {sub.label}
                                </a>
                              ))}
                            </div>
                          </m.div>
                        )}
                      </AnimatePresence>
                    </m.div>
                  );
                })}
              </div>

              {/* Mobile footer */}
              <m.div
                initial={{ opacity: 0, filter: 'blur(8px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="pt-8 mt-auto"
              >
                <div className="border-t border-border/50 pt-6">
                  <div className="flex flex-wrap gap-6 mb-6">
                    {[
                      { name: 'LinkedIn', href: 'https://www.linkedin.com/company/zesh-agency/' },
                      { name: 'Instagram', href: 'https://www.instagram.com/zeshagency' },
                    ].map((s) => (
                      <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="font-lato text-[10px] tracking-[0.15em] uppercase text-ink/40 hover:text-ink transition-colors duration-300">{s.name}</a>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-border/30">
                    <button onClick={toggleTheme} className="font-lato text-[10px] tracking-[0.15em] uppercase text-ink/40 hover:text-ink transition-colors duration-300">
                      {isDark ? 'Light Mode' : 'Dark Mode'}
                    </button>
                  </div>
                </div>
              </m.div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}


