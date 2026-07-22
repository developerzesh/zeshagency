import { useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';
import { solutions, industries, caseStudies } from '../lib/data';
import { useCursor } from './CursorContext';
import { useTheme } from './ThemeContext';

interface SubItem { label: string; path: string }
interface NavItem { label: string; path: string; submenu?: SubItem[] }

const insightCategories = ['AI & Search', 'Web Development', 'SEO Strategy'];

// ── Primary nav (with submenus) ──────────────────────────
const primaryNav: NavItem[] = [
  { label: 'Solutions', path: '/solutions', submenu: solutions.map(s => ({ label: s.title, path: `/solutions?slug=${s.slug}` })) },
  { label: 'Industries', path: '/industries', submenu: industries.map(i => ({ label: i.title, path: `/industries?slug=${i.slug}` })) },
  { label: 'Case Studies', path: '/case-studies', submenu: caseStudies.map(cs => ({ label: cs.title, path: `/case-studies?slug=${cs.slug}` })) },
];

// ── Secondary nav ────────────────────────────────────────
const secondaryNav: NavItem[] = [
  { label: 'About', path: '/about' },
  { label: 'Insights', path: '/insights', submenu: [{ label: 'All Articles', path: '/insights' }, ...insightCategories.map(c => ({ label: c, path: '/insights' }))] },
  { label: 'Blog', path: '/blog', submenu: [{ label: 'All Posts', path: '/blog' }, { label: 'SEO & Search', path: '/blog' }, { label: 'AI & GEO', path: '/blog' }, { label: 'Web Performance', path: '/blog' }, { label: 'Growth Strategy', path: '/blog' }] },
  { label: 'Careers', path: '/careers', submenu: [{ label: 'Open Roles', path: '/careers' }] },
];

// ── All items merged (used for mobile) ──────────────────
const navItems: NavItem[] = [...primaryNav, ...secondaryNav, { label: 'Contact', path: '/contact' }];

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

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const pathname = usePathname();
  const { startLoading } = useCursor();
  const submenuTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const { isDark, toggleTheme } = useTheme();

  const handleNavClick = () => { startLoading(); setIsOpen(false); };

  const showSubmenu = (path: string) => {
    if (submenuTimeout.current) clearTimeout(submenuTimeout.current);
    setActiveSubmenu(path);
  };
  const hideSubmenu = () => {
    submenuTimeout.current = setTimeout(() => setActiveSubmenu(null), 300);
  };

  const activeItem = navItems.find(item => item.path === activeSubmenu);

  // Shared desktop link class builder
  const linkClass = (path: string) =>
    `inline-flex items-center gap-1.5 font-lato text-[12px] tracking-[0.10em] uppercase px-3.5 py-2 rounded-lg transition-all duration-300 ${activeSubmenu === path
      ? 'text-ink bg-surface'
      : pathname === path
        ? 'text-ink font-semibold'
        : 'text-ink/50 hover:text-ink hover:bg-surface/60'
    }`;

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: slowEase }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* ── Bar ────────────────────────────────────────── */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="mt-5 bg-paper/85 backdrop-blur-2xl border border-border/40 rounded-2xl px-6 md:px-10 py-3.5 flex items-center justify-between">

            {/* Logo */}
            <MagneticButton strength={0.2}>
              <a href="/" onClick={handleNavClick} className="block">
                <img src={isDark ? "/images/zesh_logo.png" : "/images/zesh_logo_light.png"} alt="ZESH." className="h-6 md:h-7 w-auto" />
              </a>
            </MagneticButton>

            {/* ── Desktop nav ─────────────────────────────── */}
            <div className="hidden lg:flex items-center">

              {/* Primary group */}
              <div className="flex items-center">
                {primaryNav.map((item) => (
                  <div
                    key={item.path}
                    onMouseEnter={() => item.submenu && showSubmenu(item.path)}
                    onMouseLeave={hideSubmenu}
                    className="relative"
                  >
                    <a href={item.path} onClick={handleNavClick} className={linkClass(item.path)}>
                      {item.label}
                      {item.submenu && <Chevron active={activeSubmenu === item.path} />}
                    </a>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <span className="mx-3 h-4 w-px bg-border/60" />

              {/* Secondary group */}
              <div className="flex items-center">
                {secondaryNav.map((item) => (
                  <div
                    key={item.path}
                    onMouseEnter={() => item.submenu && showSubmenu(item.path)}
                    onMouseLeave={hideSubmenu}
                    className="relative"
                  >
                    <a href={item.path} onClick={handleNavClick} className={linkClass(item.path)}>
                      {item.label}
                      {item.submenu && <Chevron active={activeSubmenu === item.path} />}
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
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                ) : (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
                <motion.span animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} className="block h-[1.5px] w-full bg-ink origin-center" />
                <motion.span animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} className="block h-[1.5px] w-full bg-ink origin-center" />
                <motion.span animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} className="block h-[1.5px] w-full bg-ink origin-center" />
              </button>
            </div>
          </div>
        </div>

        {/* ── Desktop mega dropdown ─────────────────────── */}
        <AnimatePresence>
          {activeSubmenu && activeItem?.submenu && (
            <motion.div
              initial={{ opacity: 0, y: -14, scale: 0.98, filter: 'blur(14px)' }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, scale: 0.98, filter: 'blur(10px)' }}
              transition={{ duration: 0.45, ease: slowEase }}
              onMouseEnter={() => showSubmenu(activeSubmenu)}
              onMouseLeave={hideSubmenu}
              className="hidden lg:block absolute left-1/2 -translate-x-1/2 mt-2 w-full max-w-4xl"
            >
              <div className="mx-6 md:mx-16 relative rounded-2xl overflow-hidden">

                {/* ── Glass shell ── */}
                {/* Outermost: frosted glass layer */}
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'rgba(var(--glass-bg, 255,255,255), 0.96)',
                    backdropFilter: 'blur(40px) saturate(160%)',
                    WebkitBackdropFilter: 'blur(40px) saturate(160%)',
                    boxShadow: '0 8px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)',
                  }}
                />
                {/* Top-edge light refraction gradient */}
                <div
                  className="absolute inset-x-0 top-0 h-px rounded-t-2xl"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.7) 40%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.7) 60%, transparent 100%)',
                  }}
                />
                {/* Inner top glow / reflection */}
                <div
                  className="absolute inset-x-0 top-0 h-16 rounded-t-2xl pointer-events-none"
                  style={{
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.18) 0%, transparent 100%)',
                  }}
                />
                {/* Outer border – uses token so it's dark in light mode, bright in dark */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{ border: '1px solid var(--glass-border)' }}
                />
                {/* Bottom inner shadow line */}
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
                    <a
                      href={activeItem.path}
                      onClick={handleNavClick}
                      className="sig-hover font-lato text-[11px] tracking-[0.12em] uppercase text-signal hover:text-ink transition-colors duration-300"
                    >
                      View All →
                    </a>
                  </div>

                  {/* Item grid */}
                  <div className="grid grid-cols-2 gap-x-8 gap-y-0">
                    {activeItem.submenu.map((sub, i) => (
                      <motion.div
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
                          {/* Accent dot */}
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
                          {/* Arrow revealed on hover */}
                          <span className="ml-auto font-lato text-[10px] text-signal opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                            →
                          </span>
                        </a>
                      </motion.div>
                    ))}
                  </div>
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
                    Zesh Agency · Strategic Growth Consultancy
                  </p>
                  <span className="font-lato text-[10px] tracking-[0.12em] uppercase text-signal">
                    hello@zesh.agency
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ── Mobile full-screen menu ───────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-paper"
          >
            <div className="h-full flex flex-col pt-40 px-8 md:px-16 pb-8 overflow-y-auto">
              <div className="flex-1">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, filter: 'blur(16px)', x: -24 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', x: 0 }}
                    exit={{ opacity: 0, filter: 'blur(12px)', x: -16 }}
                    transition={{ delay: i * 0.06, duration: 0.8, ease: slowEase }}
                    className="mb-1"
                  >
                    <a
                      href={item.path}
                      onClick={handleNavClick}
                      className="font-syne text-4xl md:text-6xl font-800 text-ink/60 hover:text-ink transition-colors duration-300 block py-2"
                    >
                      {item.label}
                    </a>
                    {item.submenu && (
                      <motion.div
                        initial={{ opacity: 0, filter: 'blur(6px)' }}
                        animate={{ opacity: 1, filter: 'blur(0px)' }}
                        transition={{ delay: i * 0.06 + 0.15, duration: 0.6 }}
                        className="grid grid-cols-2 gap-x-6 pl-1 pt-1 pb-4"
                      >
                        {item.submenu.slice(0, 4).map((sub) => (
                          <a
                            key={sub.path + sub.label}
                            href={sub.path}
                            onClick={handleNavClick}
                            className="font-lato text-[11px] tracking-[0.08em] uppercase text-ink/40 hover:text-ink transition-colors duration-300 py-1"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Mobile footer */}
              <motion.div
                initial={{ opacity: 0, filter: 'blur(8px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="pt-8 mt-auto"
              >
                <div className="border-t border-border/50 pt-6">
                  <div className="flex flex-wrap gap-8 mb-6">
                    {['New York', 'London', 'Tokyo', 'Dubai'].map((city) => (
                      <span key={city} className="font-lato text-[10px] tracking-[0.2em] uppercase text-ink/35">{city}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-6">
                    {['Twitter', 'LinkedIn', 'Dribbble'].map((s) => (
                      <a key={s} href="#" className="font-lato text-[10px] tracking-[0.15em] uppercase text-ink/40 hover:text-ink transition-colors duration-300">{s}</a>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-border/30">
                    <button onClick={toggleTheme} className="font-lato text-[10px] tracking-[0.15em] uppercase text-ink/40 hover:text-ink transition-colors duration-300">
                      {isDark ? 'Light Mode' : 'Dark Mode'}
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
