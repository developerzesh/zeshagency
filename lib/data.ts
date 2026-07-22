// ═══════════════════════════════════════════════════════════
// NEXUS THEME — Data Re-exports
// ═══════════════════════════════════════════════════════════
// All content data is defined in siteConfig.ts.
// This file re-exports for backward compatibility with
// existing components that import from '../lib/data'.
// ═══════════════════════════════════════════════════════════

export {
  siteConfig,
  offices,
  navLinks,
  heroContent,
  trustLabel,
  trustClients,
  trustLogos,
  stats,
  aboutStats,
  values,
  reasons,
  solutions,
  industries,
  caseStudies,
  insightCategories,
  insights,
  careers,
  perks,
} from './siteConfig';

export type { Solution, Industry, CaseStudy, InsightArticle, Career } from './siteConfig';
