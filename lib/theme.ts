import type {} from 'framer-motion';

// ═══════════════════════════════════════════════════════════
// NEXUS THEME — Design Tokens
// ═══════════════════════════════════════════════════════════
// This file contains ALL design tokens for the theme.
// AI agents: Change these values to rebrand. Never hardcode
// colors, durations, or easing in components — import from here.
// ═══════════════════════════════════════════════════════════

// ── Color Tokens ──────────────────────────────────────────
// These mirror the CSS custom properties in index.css.
// When changing colors, update BOTH this file AND index.css.
export const colors = {
  ink: '#0A0A0A',
  paper: '#F6F5F0',
  signal: '#F4A536',
  // Derived (Paper variants — NOT new colors)
  surface: '#EDECE7',
  border: '#DDDCD6',
  textSecondary: '#3A3A36',
  textMuted: '#5A5A55',
} as const;

// ── Motion Tokens ─────────────────────────────────────────
export const motion = {
  // The ONE easing curve for the entire theme
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],

  // Duration scale (seconds)
  duration: {
    reveal: 1.2,
    revealSlow: 1.8,
    revealFast: 0.8,
    hover: 1.0,
    hoverSlow: 1.2,
    color: 0.7,
    colorSlow: 1.2,
    page: 1.0,
    preloader: 1.2,
    image: 1.8,
    modal: 1.2,
  },

  // Blur values for entrance animations
  blur: {
    reveal: 20,
    page: 12,
    image: 24,
    modal: 30,
    exit: 8,
  },

  // Spring physics for interactive elements
  spring: {
    magnetic: { damping: 40, stiffness: 150, mass: 1.2 },
    cursor: { damping: 50, stiffness: 120, mass: 1.5 },
    cursorDot: { damping: 60, stiffness: 200, mass: 0.8 },
    parallax: { damping: 50, stiffness: 80, mass: 2.0 },
    preloader: { damping: 30, stiffness: 60, mass: 1.5 },
  },

  // Offsets for RevealText directions
  revealOffset: 40,
} as const;

// ── Layout Tokens ─────────────────────────────────────────
export const layout = {
  maxWidth: '1200px',
  maxWidthWide: '1400px',
  paddingX: 'px-6 md:px-16',
  sectionY: 'py-32 md:py-48',
  sectionYCompact: 'py-20 md:py-28',
  sectionYLarge: 'py-36 md:py-52',
  footerY: 'py-28 md:py-36',
  border: 'border-t border-border',
} as const;

// ── Typography Tokens ─────────────────────────────────────
export const typography = {
  heading: {
    font: 'font-syne',
    weight: 'font-800',
    tracking: 'tracking-[-0.03em]',
    trackingTight: 'tracking-[-0.04em]',
  },
  body: {
    font: 'font-lato',
    leading: 'leading-[1.85]',
  },
  label: {
    size: 'text-[11px]',
    tracking: 'tracking-[0.2em]',
    case: 'uppercase',
  },
  caption: {
    size: 'text-[10px]',
    tracking: 'tracking-[0.15em]',
    case: 'uppercase',
  },
} as const;
