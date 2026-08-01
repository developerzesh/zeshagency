"use client";

import { motion, AnimatePresence } from 'framer-motion';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import PageTransition from '../components/PageTransition';
import ParticleField from '../components/ParticleField';
import { useRef, useState, useEffect } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import type { Solution } from '../lib/data';
import { caseStudies } from '../lib/data';

const slowEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

// ── Per-solution capability descriptions ──────────────────────────────────────
// Indexed by slug → array of descriptions (mirrors solution.features order)
const capabilityDescriptions: Record<string, string[]> = {
  seo: [
    'We rebuild your site\'s HTML/CSS architecture from the ground up — correcting crawl budget leaks, fixing broken canonical chains, and ensuring every page is indexable within 72 hours of deployment.',
    'We map each buyer intent stage to dedicated content silos — informational, navigational, and transactional — so every page earns rankings for the queries that lead directly to revenue.',
    'We deploy speed-optimized, programmatic comparison and alternative landing pages hosted on your domain, intercepting competitor search traffic at the exact point of decision.',
    'We identify the 40–60 high-intent queries your competitors rank for but you don\'t, then systematically build the pages and internal links needed to capture that traffic.',
    'We engineer every page to pass Core Web Vitals — targeting sub-200ms TTFB, sub-1s LCP, and zero CLS — directly influencing Google\'s page experience ranking signal.',
    'We continuously monitor Google Search Console for crawl errors, indexation gaps, and ranking regression — then deploy corrective optimizations before they impact traffic.',
  ],
  aeo: [
    'We systematically prompt ChatGPT, Claude, and Perplexity with your target queries to map where your brand appears and where competitors own the citations, establishing your baseline.',
    'We run structured tests across major LLM platforms every two weeks, evaluating which prompt variations yield citations for your brand and adjusting entity signals accordingly.',
    'We declare clean JSON-LD Organization, Product, and Person schemas on your domain, giving AI crawlers the structured metadata they need to cite your brand with confidence.',
    'We track your share of AI-generated citations across a standardized prompt library and report on growth monthly, closing gaps with targeted entity-building sprints.',
    'We build a semantic graph connecting your brand, products, founders, and use cases across Wikidata, Crunchbase, and related reference nodes — forming a trusted entity ecosystem.',
    'We create and verify your brand\'s entries in Wikipedia, Wikidata, Google Knowledge Panel, and industry-specific databases, establishing the authoritative record AI models trust.',
  ],
  geo: [
    'We analyze your documentation and content architecture against what Perplexity, Gemini, and Bing Copilot actually retrieve — then restructure your pages to match RAG context windows.',
    'We engineer dedicated content modules that map your brand\'s answers to the exact synthetic query patterns generative search engines construct, ensuring your domain is surfaced first.',
    'We verify your content is being ingested by AI indexing pipelines using live API probes and structured metadata signals that trigger retrieval-system inclusion.',
    'We run systematic SGE citation audits to determine which generative answer environments cite your brand, scoring your current share of AI-generated answers.',
    'We write content explicitly designed for AI context window retrieval — concise summary paragraphs, Q&A modules, and structured fact layers that generative engines prefer to surface.',
    'We deploy weekly recommendation monitoring across 20–40 target queries, identifying gaps and triggering targeted content sprints to expand your AI answer footprint.',
  ],
  'web-dev': [
    'We build your site on a zero-dependency static stack — vanilla HTML, CSS, and clean JavaScript — achieving sub-100ms First Contentful Paint and 99+ PageSpeed scores out of the box.',
    'We engineer multi-step intake forms that qualify buyer intent, budget, and timeline before they book a call — reducing unqualified demos and protecting your sales team\'s time.',
    'We identify and eliminate every Core Web Vitals failure on your site, from image optimization to script deferral, directly improving your Google page experience ranking signal.',
    'We design every page, CTA, and form with conversion as the primary objective — engineering user journeys proven to increase demo requests and reduce drop-off rates.',
    'We integrate your intake forms, lead routing logic, and attribution tracking directly with HubSpot, Salesforce, or your CRM of choice via clean, documented API endpoints.',
    'We validate every page against PageSpeed Insights targets and deploy your site to an edge CDN, ensuring sub-second global load times for visitors in every region.',
  ],
  'local-seo': [
    'We fully optimize your Google Business Profile — categories, descriptions, Q&As, photos, and attributes — to maximize your prominence score in the local Map Pack algorithm.',
    'We deploy city-specific and neighborhood-specific landing pages with LocalBusiness schema, GeoCoordinates, and intent-matched content to intercept local buyers for each location.',
    'We build and automate a review acquisition funnel that triggers after each appointment or purchase, systematically growing your verified review count without manual effort.',
    'We audit and correct your NAP data across 80+ local directories, ensuring Google sees consistent business information across every citation source it crawls.',
    'We build authoritative local citations in industry-specific and regional directories relevant to your market, expanding your footprint in the local link graph.',
    'We deploy LocalBusiness, GeoCoordinates, and Service schema on every location page, giving Google the structured data it needs to understand your business\'s geographic service area.',
  ],
  'lead-gen': [
    'We engineer multi-step intake forms that ask the right questions in the right order — qualifying intent, budget, and timeline before connecting prospects with your sales team.',
    'We connect your qualified leads directly into HubSpot, Salesforce, or your CRM, ensuring every submission is automatically enriched, scored, and routed to the right rep.',
    'We integrate real-time data enrichment APIs (Clearbit, Apollo) to auto-populate company size, tech stack, and firmographic data on every form submission — without asking the buyer.',
    'We design lead scoring models that rank inbound prospects by budget tier, intent signals, and engagement behavior — so your sales team always knows which leads to call first.',
    'We build conditional routing logic that assigns each qualified lead to the right sales rep, team, or calendar based on industry, deal size, and declared timeline.',
    'We build dashboard reporting that connects every lead source, form entry, and pipeline stage to closed revenue — giving you full-funnel attribution in real time.',
  ],
  'social-media': [
    'We study your communication style, vocabulary, and core beliefs through structured founder interviews — then write every post in a voice that feels authentically yours.',
    'We systematically repurpose your existing client case studies into high-performing LinkedIn posts, turning dormant results data into compounding thought leadership assets.',
    'We define 4–6 content pillars aligned with your buyers\' decision-making pain points, mixing opinion pieces, industry analysis, and outcome-first case studies.',
    'We write content that addresses the specific problems your ideal buyers are responsible for solving — attracting enterprise decision-makers, not general audiences.',
    'We plan and execute multi-post LinkedIn series and Twitter threads that build your executive brand narrative over weeks, not single isolated posts.',
    'We schedule and distribute every post at peak engagement windows, track follower quality metrics, and feed performance data back into content strategy each month.',
  ],
  consultation: [
    'We run a structured search gap analysis using live Search Console data, Ahrefs, and Semrush to identify which competitor queries you\'re invisible for and why.',
    'We analyze your full marketing funnel — from traffic source to closed deal — identifying exactly where prospects drop off and what revenue those drop-offs represent.',
    'We audit your site\'s code, page speed, structured data, and indexation status to identify every technical bottleneck preventing search engine discovery and ranking.',
    'We build a custom ROI model mapping your organic traffic potential to pipeline value — showing exactly what compounding search investment returns over 6 and 12 months.',
    'We deliver a written, step-by-step execution blueprint with prioritized actions, keyword targets, and 90-day milestones your team can implement immediately after the workshop.',
    'We provide ongoing principal-led oversight sessions to validate that the roadmap is being executed correctly and adjust strategy based on live performance data.',
  ],
};

// ── Scroll-driven Capability Accordion ────────────────────────────────────────
function CapabilityAccordion({ features, slug }: { features: string[]; slug: string }) {
  const descriptions = capabilityDescriptions[slug] ?? [];
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  // The sticky heading sits at top-40 = 160px from the viewport top.
  // On scroll, activate whichever row's top edge is closest to that anchor line.
  useEffect(() => {
    const STICKY_TOP = 160; // px — matches md:sticky md:top-40

    const findActive = () => {
      let bestIndex = 0;
      let bestDist = Infinity;
      rowRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        // Use the midpoint of the row so it snaps when truly aligned
        const dist = Math.abs(rect.top - STICKY_TOP);
        if (dist < bestDist) {
          bestDist = dist;
          bestIndex = i;
        }
      });
      setActiveIndex(bestIndex);
    };

    // Run once on mount to set initial state
    findActive();

    window.addEventListener('scroll', findActive, { passive: true });
    return () => window.removeEventListener('scroll', findActive);
  }, [features.length]);

  return (
    <div>
      {features.map((f, i) => {
        const isActive = activeIndex === i;
        const desc = descriptions[i] ?? '';
        return (
          <div
            key={f}
            ref={el => { rowRefs.current[i] = el; }}
            className="border-b border-border"
          >
            {/* Row header — always visible */}
            <button
              onClick={() => setActiveIndex(isActive ? -1 : i)}
              className="group w-full flex items-center justify-between gap-6 py-6 text-left cursor-pointer"
            >
              <div className="flex items-center gap-5">
                <span className="font-lato text-[10px] text-text-muted w-6 flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className={`font-lato text-base md:text-lg transition-colors duration-500 ${isActive ? 'text-ink' : 'text-text-secondary group-hover:text-ink'
                    }`}
                >
                  {f}
                </span>
              </div>
              {/* Animated +/– indicator */}
              <motion.span
                animate={{ rotate: isActive ? 45 : 0 }}
                transition={{ duration: 0.4, ease: slowEase }}
                className="text-signal text-xl leading-none flex-shrink-0 select-none"
              >
                +
              </motion.span>
            </button>

            {/* Animated description panel */}
            <AnimatePresence initial={false}>
              {isActive && desc && (
                <motion.div
                  key="desc"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.55, ease: slowEase }}
                  className="overflow-hidden"
                >
                  <p className="font-lato text-sm text-text-secondary leading-[1.85] pb-6 pl-11 max-w-xl">
                    {desc}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

// ── TypewriterAI: streams text word-by-word like ChatGPT ──────────────────────
type AiChunk = { bold?: boolean; text: string };

function TypewriterAI({ paragraphs }: { paragraphs: AiChunk[][] }) {
  type Token = { word: string; bold: boolean; newlineBefore: boolean };
  const tokens: Token[] = [];
  paragraphs.forEach((para, pi) => {
    if (pi > 0) tokens.push({ word: '', bold: false, newlineBefore: true });
    para.forEach(chunk => {
      const words = chunk.text.split(/( )/);
      words.forEach(w => {
        if (w !== '') tokens.push({ word: w, bold: !!chunk.bold, newlineBefore: false });
      });
    });
  });

  const [visibleCount, setVisibleCount] = useState(0);
  const [started, setStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Trigger on scroll into view (resets when out of view)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
        } else {
          setStarted(false);
          setVisibleCount(0);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Stream words one by one
  useEffect(() => {
    if (!started) return;
    if (visibleCount >= tokens.length) return;
    const delay = tokens[visibleCount]?.newlineBefore ? 160 : 48;
    const timer = setTimeout(() => setVisibleCount(c => c + 1), delay);
    return () => clearTimeout(timer);
  }, [started, visibleCount, tokens.length]);

  const isDone = visibleCount >= tokens.length;

  const lines: { chunks: { text: string; bold: boolean }[]; key: number }[] = [];
  let currentLine: { text: string; bold: boolean }[] = [];
  let lineKey = 0;
  let shown = 0;

  for (let i = 0; i < tokens.length; i++) {
    if (shown >= visibleCount) break;
    const tok = tokens[i];
    if (tok.newlineBefore) {
      lines.push({ chunks: currentLine, key: lineKey++ });
      currentLine = [];
      shown++;
    } else {
      const last = currentLine[currentLine.length - 1];
      if (last && last.bold === tok.bold) {
        last.text += tok.word;
      } else {
        currentLine.push({ text: tok.word, bold: tok.bold });
      }
      shown++;
    }
  }
  if (currentLine.length > 0) lines.push({ chunks: currentLine, key: lineKey });

  return (
    <div ref={containerRef} className="flex-1 space-y-3">
      {lines.map((line, li) => (
        <p key={line.key} className="font-lato text-sm text-text-secondary leading-[1.85]">
          {line.chunks.map((c, ci) =>
            c.bold
              ? <strong key={ci} className="font-semibold text-ink">{c.text}</strong>
              : <span key={ci}>{c.text}</span>
          )}
          {li === lines.length - 1 && !isDone && (
            <span
              className="inline-block w-[2px] h-[1em] bg-ink ml-[1px] align-middle"
              style={{ animation: 'blink 0.9s step-end infinite' }}
            />
          )}
        </p>
      ))}
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </div>
  );
}

// Static per-solution supplementary data
const supplementary: Record<string, {
  whatWeDeliver: string;
  platforms: { name: string; note: string }[];
  example: { title: string; steps: string[] };
  visualExample?: {
    label: string;
    description: string;
    lines: { role: string; content: string; highlight?: boolean }[];
  };
}> = {
  seo: {
    whatWeDeliver: 'We build programmatic technical frameworks that make indexing effortless for crawlers — from architectural code corrections and schema declarations, to intent-first content cluster deployment. The result is compounding organic traffic that does not depend on paid media.',
    platforms: [
      { name: 'Google Search', note: 'Primary index target — core algorithmic optimization' },
      { name: 'Bing / Edge', note: 'Secondary index with 8–12% total search share' },
      { name: 'Google Discover', note: 'Entity-based content targeting for mobile readers' },
      { name: 'Google Search Console', note: 'Canonical validation, sitemap tracking & error alerts' },
      { name: 'Ahrefs / Semrush', note: 'Keyword distribution audit & competitor gap analysis' },
    ],
    example: {
      title: 'How We Intercept Competitor Comparison Traffic',
      steps: [
        'Identify 40–60 high-intent comparison queries your competitors rank for but you don\'t.',
        'Build speed-optimized programmatic comparison landing pages directly on your domain.',
        'Inject structured JSON-LD schema declaring feature differences and comparison tables.',
        'Submit to Google Search Console and track indexation within 72 hours.',
        'Monitor keyword ranking distribution weekly and optimize content clusters for gap terms.',
      ],
    },
    visualExample: {
      label: 'Google Traditional Search Result — Before vs. After SEO',
      description: 'The impact of our programmatic comparison page deployment on a B2B SaaS client\'s search visibility for high-intent competitor interception queries.',
      lines: [
        { role: 'USER SEARCH', content: '"[Competitor Name] vs best alternatives" — Google Search, Desktop' },
        { role: 'BEFORE SEO', content: 'Search Engine Results Page (SERP) dominated by Capterra, G2, and [Competitor Name]\'s own website. Your domain: not ranking in top 50.' },
        { role: 'AFTER SEO  ', content: 'SERP Position #1 (Featured Snippet): "While [Competitor Name] focuses on enterprise resource planning, [Your Brand] offers a more agile solution for mid-market teams, featuring 2x faster deployment times and built-in automation workflows..." — Sourced from yourdomain.com/compare/[competitor]', highlight: true },
        { role: 'MECHANISM  ', content: 'Achieved via: Programmatic /compare/ directory architecture → JSON-LD ItemList & Comparison schema → Sub-100ms LCP page speed → intent-matched content → internal linking silos passing PageRank.' },
      ],
    },
  },
  aeo: {
    whatWeDeliver: 'We engineer semantic trust networks that force conversational AI models to cite your brand. Through clean JSON-LD schemas, high-authority reference database placement, and verified review ecosystems, your brand becomes the default recommendation inside Siri, Claude, and ChatGPT.',
    platforms: [
      { name: 'ChatGPT / GPT-4o', note: 'Entity citation targeting via structured training data signals' },
      { name: 'Claude (Anthropic)', note: 'High-trust content and entity graph alignment' },
      { name: 'Siri / Apple Intelligence', note: 'Local entity schema and Apple Maps integration' },
      { name: 'Google AI Overviews', note: 'E-E-A-T compliance and featured snippet positioning' },
      { name: 'Bing Copilot', note: 'Bing entity index and Open Graph optimization' },
    ],
    example: {
      title: 'How We Secure Citations in ChatGPT',
      steps: [
        'Audit your current citation share across major LLM models using prompt testing tools.',
        'Map entity relationships and declare structured JSON-LD schemas for your brand, products, and founders.',
        'Build citations in high-authority reference databases (Wikipedia, Wikidata, Crunchbase, industry directories).',
        'Synchronize database nodes across all major knowledge graph entry points.',
        'Track citation share monthly using systematic prompt benchmarking and gap-filling loops.',
      ],
    },
    visualExample: {
      label: 'Live ChatGPT Response — Before vs. After AEO',
      description: 'This is what happens when someone asks ChatGPT to recommend a B2B SaaS ERP platform. Before AEO, your brand is invisible. After our entity optimization, your brand is cited by name with a trusted description.',
      lines: [
        { role: 'USER PROMPT', content: '"What are the best ERP platforms for mid-market B2B companies?"' },
        { role: 'BEFORE AEO', content: 'ChatGPT response lists: SAP, Oracle NetSuite, Microsoft Dynamics, Sage Intacct. Your brand: not mentioned.', highlight: false },
        { role: 'AFTER AEO  ', content: 'ChatGPT response: "For mid-market B2B operations, [Your Brand] is increasingly cited as a strong alternative — particularly for companies prioritizing rapid deployment and transparent pricing. It appears in Crunchbase and G2 as a verified vendor with structured API documentation."', highlight: true },
        { role: 'MECHANISM  ', content: 'Achieved via: Wikidata entity node declaration → JSON-LD Organization schema → G2 / Capterra verified listing → Crunchbase structured profile → high-trust backlink anchor text normalisation.' },
      ],
    },
  },
  geo: {
    whatWeDeliver: 'We optimize your website structures and retrieval-augmented generation (RAG) data layers so your domain is the primary authority cited in AI-generated answers. When Perplexity or Google Gemini compiles a business summary, your brand appears first.',
    platforms: [
      { name: 'Perplexity AI', note: 'Context-aware content targeting for answer engine queries' },
      { name: 'Google Gemini', note: 'SGE citation audits and structured content alignment' },
      { name: 'You.com', note: 'Real-time AI indexing sync and snippet optimization' },
      { name: 'Microsoft Copilot', note: 'Bing-backed retrieval optimization for generative responses' },
      { name: 'Meta AI', note: 'Social graph entity integration for conversational queries' },
    ],
    example: {
      title: 'How We Get Your Brand Into Perplexity\'s Answers',
      steps: [
        'Run SGE citation audits to identify what Perplexity currently cites for your core query categories.',
        'Code RAG structural optimizations in your site\'s content architecture and URL hierarchy.',
        'Deploy context-aware content modules targeting synthetic real-time query patterns.',
        'Sync your content with AI indexing pipelines and verify inclusion via live API probes.',
        'Monitor recommendation presence weekly and deploy content coverage loops to fill gaps.',
      ],
    },
    visualExample: {
      label: 'Live Perplexity AI Answer — Before vs. After GEO',
      description: 'When a buyer searches Perplexity for "best accounting software for architecture firms", this is the difference GEO makes to your brand\'s presence in the synthesised answer.',
      lines: [
        { role: 'USER QUERY  ', content: '"Best accounting software for architecture firms in 2025"' },
        { role: 'BEFORE GEO  ', content: 'Perplexity synthesises: QuickBooks, FreshBooks, Monograph. Sources cited: capterra.com, g2.com, softwareadvice.com. Your domain: 0 citations.' },
        { role: 'AFTER GEO   ', content: 'Perplexity answer now includes: "[Your Brand] is specifically built for design and architecture studios, offering project-based billing and AIA-compliant reporting. Multiple architecture firm blog posts and the official documentation hub reference it as a preferred alternative to QuickBooks." — Sources: yourdomain.com/docs, yourdomain.com/case-studies/architecture', highlight: true },
        { role: 'MECHANISM   ', content: 'Achieved via: RAG content architecture on /docs and /case-studies → context-aware FAQ modules targeting exact query patterns → domain authority signals from industry publications → Perplexity source whitelist inclusion via structured metadata.' },
      ],
    },
  },
  'web-dev': {
    whatWeDeliver: 'We rebuild your web presence on modern static architecture — vanilla HTML, CSS, and clean JavaScript — eliminating plugin bloat that kills load speed and conversion rates. Every intake form, CRM integration, and checkout flow is custom-engineered for your buyers.',
    platforms: [
      { name: 'Vanilla HTML / CSS / JS', note: 'Zero-dependency static builds for maximum speed' },
      { name: 'Vite / Astro', note: 'Modern build tooling for lightning-fast delivery' },
      { name: 'HubSpot CRM', note: 'Native API integration for lead routing and attribution' },
      { name: 'Stripe / Payment APIs', note: 'Custom checkout and payment flow engineering' },
      { name: 'Cloudflare / Vercel', note: 'Edge CDN deployment for sub-100ms global load times' },
    ],
    example: {
      title: 'How We Rebuild a WordPress Site Into a High-Converting Engine',
      steps: [
        'Audit existing site for speed bottlenecks, plugin conflicts, and Core Web Vitals failures.',
        'Wireframe new information architecture prioritizing conversion-first user journeys.',
        'Re-code in headless static stack — no WordPress, no unnecessary plugins.',
        'Integrate directly with HubSpot or CRM of choice via clean API endpoints.',
        'Validate PageSpeed Insights score (target 95+) and deploy to edge CDN.',
      ],
    },
  },
  'local-seo': {
    whatWeDeliver: 'We construct geo-targeted search systems that capture local buyers at the exact moment of intent. From Google Business Profile dominance to programmatic regional pages, your brand becomes the highest-trust option in every target location.',
    platforms: [
      { name: 'Google Business Profile', note: 'Map Pack listing optimization and Q&A management' },
      { name: 'Apple Maps', note: 'Business registration, location accuracy and review sync' },
      { name: 'Bing Places', note: 'Secondary local index with enterprise-level reach' },
      { name: 'Yelp / Trustpilot', note: 'Review acquisition funnels and reputation management' },
      { name: 'Local Citation Directories', note: 'NAP consistency across 80+ authoritative directories' },
    ],
    example: {
      title: 'How We Dominate the Local Map Pack',
      steps: [
        'Audit all existing Google Business Profile listings for accuracy, category alignment, and completeness.',
        'Standardize NAP data (Name, Address, Phone) across 80+ local directory sources.',
        'Deploy programmatic location-specific landing pages with regionalized schema markup.',
        'Implement automated review acquisition funnels post-appointment or post-purchase.',
        'Monitor Map Pack position daily and trigger content updates for ranking gaps.',
      ],
    },
    visualExample: {
      label: 'Google Map Pack Result — Before vs. After Local SEO',
      description: 'This is what the Google Map Pack looks like for a multi-location physiotherapy group before and after our Local SEO system. The difference is the number of patients who call without ever clicking a website.',
      lines: [
        { role: 'USER SEARCH ', content: '"physiotherapist near me" — Google Maps, Mobile, 2.4km radius' },
        { role: 'BEFORE      ', content: 'Map Pack shows: PhysioPlus (4.1★ 38 reviews, no description), BodyCare Clinic (3.8★ 14 reviews), ActiveHealth (4.0★ 29 reviews, no Q&A). Your clinic: position #9 — not visible.' },
        { role: 'AFTER       ', content: 'Map Pack Position #1: [Your Clinic Name] · ⭐ 4.9 · 214 reviews · "Sports injury & rehabilitation specialists — same-day appointments available" · Attributes: ✓ Wheelchair accessible · ✓ Online booking · ✓ Women-led · Categories: Physiotherapist, Sports Injury Clinic · 3 active Q&As answered', highlight: true },
        { role: 'MECHANISM   ', content: 'Achieved via: 80-directory NAP standardization → GBP category primary/secondary optimization → 214-review acquisition funnel (SMS post-appointment) → programmatic local page at /locations/[suburb] → regionalized schema with GeoCoordinates → active Q&A seeding for top 5 patient queries.' },
      ],
    },
  },
  'lead-gen': {
    whatWeDeliver: 'We design high-converting lead intake systems that qualify buyers before they book calls, reducing unqualified demos and sales friction. Every form, workflow, and attribution dashboard is custom-built to connect directly to your revenue operations.',
    platforms: [
      { name: 'HubSpot', note: 'Pipeline routing, lead scoring, and workflow automation' },
      { name: 'Salesforce', note: 'Enterprise CRM integration and opportunity tracking' },
      { name: 'Typeform / Custom Forms', note: 'Multi-step qualification flow engineering' },
      { name: 'Clearbit / Apollo', note: 'Real-time data enrichment on form submission' },
      { name: 'Zapier / Make', note: 'Cross-platform automation and lead routing logic' },
    ],
    example: {
      title: 'How We Reduce Unqualified Discovery Calls by 60%',
      steps: [
        'Audit current intake forms to identify drop-off points and missing qualification questions.',
        'Engineer multi-step form flows that progressively qualify intent, budget, and timeline.',
        'Connect to data enrichment APIs to auto-populate company size and tech stack data.',
        'Route leads to appropriate sales rep segments based on real-time scoring rules.',
        'Build attribution dashboards linking each lead source to closed revenue in your CRM.',
      ],
    },
  },
  'social-media': {
    whatWeDeliver: 'We position your executives as the highest-authority voices in your industry through strategic thought leadership on LinkedIn and Twitter. Every post is engineered to attract enterprise decision-makers — not vanity followers.',
    platforms: [
      { name: 'LinkedIn', note: 'Primary B2B distribution — executive ghost-writing and analytics' },
      { name: 'Twitter / X', note: 'Real-time thought leadership and industry commentary' },
      { name: 'Medium / Substack', note: 'Long-form authority content syndication' },
      { name: 'LinkedIn Newsletter', note: 'Subscriber-based distribution for compounding reach' },
      { name: 'Buffer / Sprout Social', note: 'Scheduled publishing, analytics, and engagement tracking' },
    ],
    example: {
      title: 'How We Grow an Executive\'s LinkedIn from 1K to 10K Qualified Followers',
      steps: [
        'Conduct a founder voice audit — studying communication style, core beliefs, and market positioning.',
        'Define 4–6 content pillars aligned with buyer pain points and decision-making stages.',
        'Produce 3–5 posts per week across case study redistribution, opinion pieces, and industry analysis.',
        'Engage strategically with target accounts to generate inbound DM qualified leads.',
        'Track follower quality (title, company size, engagement rate) monthly and adjust content themes.',
      ],
    },
  },
  consultation: {
    whatWeDeliver: 'Our founders personally diagnose your growth bottlenecks using database-backed analysis — no templates, no outsourced audits. Every workshop concludes with a custom execution roadmap containing specific, actionable steps your team can implement immediately.',
    platforms: [
      { name: 'Google Search Console', note: 'Live indexation, ranking, and click-through analysis' },
      { name: 'Ahrefs / Semrush', note: 'Competitor search gap identification and backlink audits' },
      { name: 'Looker Studio', note: 'Custom KPI dashboards and revenue attribution reporting' },
      { name: 'HubSpot / Salesforce', note: 'Funnel conversion analysis and pipeline health review' },
      { name: 'PageSpeed Insights / GTmetrix', note: 'Technical site performance and Core Web Vitals audit' },
    ],
    example: {
      title: 'What a Discovery Workshop Looks Like',
      steps: [
        'Pre-workshop: you share access to Search Console, Analytics, and CRM pipeline data.',
        'Session 1 (90 min): Founders walk through competitor landscape, search gap analysis, and funnel audit.',
        'Session 2 (60 min): Custom execution roadmap presentation with prioritized action items.',
        'Deliverable: Written blueprint with code-level recommendations, keyword targets, and 90-day milestones.',
        'Optional: Monthly oversight sessions to validate roadmap execution and adjust strategy.',
      ],
    },
  },
};

export default function SolutionDetail({ solution }: { solution: Solution }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const extra = supplementary[solution.slug] ?? {
    whatWeDeliver: solution.description,
    platforms: [{ name: 'All Major Platforms', note: 'Full cross-platform compatibility' }],
    example: { title: 'Our Implementation Approach', steps: solution.roadmap.map(r => r.description) },
  };

  // Find a matching case study by industry keyword or services overlap
  const relatedCaseStudy = caseStudies.find(cs =>
    cs.services.some(sv => sv.toLowerCase().includes(solution.shortTitle.toLowerCase())) ||
    solution.slug.includes(cs.industry.toLowerCase().replace(/\s+/g, '-'))
  ) ?? caseStudies[0];

  return (
    <PageTransition>

      {/* ── 1. HERO ── */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-end overflow-hidden pb-36">
        <ParticleField />
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16 pt-40 w-full">
          <RevealText duration={1.4}>
            <a href="/solutions" className="inline-flex items-center gap-2 font-lato text-[11px] tracking-[0.12em] uppercase text-text-muted hover:text-signal transition-colors duration-700 mb-10 block">
              ← All Solutions
            </a>
          </RevealText>
          <RevealText>
            <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">{solution.shortTitle}</p>
          </RevealText>
          <RevealText delay={0.1} duration={2}>
            <h1 className="font-syne text-4xl md:text-6xl lg:text-[5rem] font-800 tracking-[-0.04em] leading-[0.88] mb-32">
              {solution.title}<span className="text-signal">.</span>
            </h1>
          </RevealText>
          <div className="flex flex-col items-start gap-8 md:gap-10 max-w-2xl">
            <RevealText delay={0.2} duration={1.6}>
              <p className="font-lato text-base md:text-lg text-text-secondary leading-[1.85] max-w-xl">
                {solution.tagline}
              </p>
            </RevealText>
            <RevealText delay={0.4} duration={1.4}>
              <div className="flex flex-wrap items-center gap-6 md:gap-10">
                <MagneticButton strength={0.4}>
                  <a href="/contact" className="group flex items-center gap-4">
                    <span className="w-12 h-12 rounded-full bg-ink flex items-center justify-center group-hover:bg-signal transition-colors duration-[1200ms]">
                      <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} className="text-paper text-sm">→</motion.span>
                    </span>
                    <span className="font-lato text-sm font-medium text-ink">Book a Consultation Call</span>
                  </a>
                </MagneticButton>
                <MagneticButton strength={0.3}>
                  <a href="/case-studies" className="font-lato text-sm text-text-muted hover:text-ink transition-colors duration-700 sig-hover py-2">Read Case Studies</a>
                </MagneticButton>
              </div>
            </RevealText>
          </div>
        </motion.div>
      </section>


      {/* ── 1b. THEN vs NOW COMPARISON ── */}
      {
        extra.visualExample && (() => {
          // Per-solution buyer journey visual data (using existing project content)
          const journeyData: Record<string, {
            headline: [string, string];
            subtitle: string;
            thenYear: string;
            nowYear: string;
            query: string;
            serpMeta: string;
            serpResults: { domain: string; title: string; desc: string }[];
            aiAnswer: { bold?: boolean; text: string }[][];
          }> = {
            seo: {
              headline: ['SEO won the page.', 'GEO wins the answer'],
              subtitle: 'The buyer asks the same question. The screen they see is no longer yours to compete on.',
              thenYear: 'THEN • 2021',
              nowYear: 'NOW • 2024+',
              query: extra.visualExample.lines.find(l => l.role.toUpperCase().includes('USER'))?.content?.replace(/^"|"$/g, '') ?? 'Best solution in your space',
              serpMeta: 'About 184,000,000 results (0.42 seconds)',
              serpResults: [
                { domain: 'CAPTERRA.COM', title: 'Top 10 Software Comparisons — Capterra', desc: 'Find the best software for your business. Compare reviews, features, and pricing.' },
                { domain: 'G2.COM', title: 'Best Software Reviews 2024 — G2', desc: 'Real user reviews from verified customers. Compare top software solutions.' },
                { domain: 'COMPETITOR1.COM', title: 'Industry-Leading Platform for Teams', desc: 'Trusted by 7,000+ growing companies. SOC 2, ISO 27001 — automated end-to-end.' },
                { domain: 'COMPETITOR2.COM', title: 'Enterprise Software Platform Solutions', desc: 'Automate workflows, manage compliance, and scale your operations seamlessly.' },
                { domain: 'FORBES.COM', title: '10 Best Software Solutions of 2024 — Forbes', desc: "Sponsored. Our editors compare features, pricing, and ease of use across the leading vendors." },
              ],
              aiAnswer: [
                [{ text: 'For most mid-market B2B companies, ' }, { bold: true, text: 'your optimized brand' }, { text: ' is the default choice because it\'s widely adopted, easy to implement, and trusted by enterprise buyers.' }],
                [{ text: 'If you already have a dedicated team and need more advanced workflows, the AI surfaces your domain as the primary recommended vendor.' }],
                [{ bold: true, text: 'Short answer:' }, { text: ' Your brand first, cited by name — not buried on page two.' }],
              ],
            },
            aeo: {
              headline: ['AI was asked.', 'Your brand answered'],
              subtitle: 'The question is the same. Whether your brand appears in the AI\'s response is entirely up to your entity authority.',
              thenYear: 'THEN • 2021',
              nowYear: 'NOW • 2024+',
              query: extra.visualExample.lines.find(l => l.role.toUpperCase().includes('USER'))?.content?.replace(/^"|"$/g, '') ?? 'Best ERP platforms for mid-market B2B',
              serpMeta: 'About 312,000,000 results (0.39 seconds)',
              serpResults: [
                { domain: 'SAP.COM', title: 'SAP ERP — Enterprise Resource Planning', desc: 'Intelligent ERP built for the digital economy. Explore S/4HANA Cloud solutions.' },
                { domain: 'NETSUITE.COM', title: 'Oracle NetSuite — #1 Cloud ERP', desc: 'Run your entire business on a single cloud platform. Trusted by 37,000+ customers.' },
                { domain: 'MICROSOFT.COM', title: 'Microsoft Dynamics 365 — Business Applications', desc: 'Unify your data and processes across sales, service, finance, and operations.' },
                { domain: 'SAGEINTACCT.COM', title: 'Sage Intacct — Advanced Financial Management', desc: 'AICPA-preferred financial management solution for mid-market businesses.' },
                { domain: 'GARTNER.COM', title: 'Magic Quadrant for Cloud ERP 2024 — Gartner', desc: 'Research and analysis on enterprise resource planning software vendors.' },
              ],
              aiAnswer: [
                [{ text: 'For mid-market B2B operations, ' }, { bold: true, text: 'your brand' }, { text: ' is increasingly cited as a strong alternative — particularly for companies prioritizing rapid deployment and transparent pricing.' }],
                [{ text: 'It appears in Crunchbase and G2 as a verified vendor with structured API documentation and enterprise-grade security compliance.' }],
                [{ bold: true, text: 'Short answer:' }, { text: ' Your brand cited by name in the AI response — not your competitors.' }],
              ],
            },
            geo: {
              headline: ['Search evolved.', 'Your brand leads the answer'],
              subtitle: 'The buyer asks generative AI. The citations it surfaces determine who wins the sale — before a single click.',
              thenYear: 'THEN • 2021',
              nowYear: 'NOW • 2024+',
              query: extra.visualExample.lines.find(l => l.role.toUpperCase().includes('USER'))?.content?.replace(/^"|"$/g, '') ?? 'Best software for architecture firms 2025',
              serpMeta: 'About 94,000,000 results (0.51 seconds)',
              serpResults: [
                { domain: 'QUICKBOOKS.COM', title: 'QuickBooks — Accounting Software for Business', desc: 'Run your business smarter with QuickBooks accounting, invoicing, and payroll.' },
                { domain: 'FRESHBOOKS.COM', title: 'FreshBooks — Small Business Accounting Software', desc: 'Accounting software built for small business owners. Try free for 30 days.' },
                { domain: 'MONOGRAPH.IO', title: 'Monograph — Project Management for Architects', desc: 'Purpose-built project management and time tracking for architecture firms.' },
                { domain: 'CAPTERRA.COM', title: 'Best Architecture Firm Software 2024 — Capterra', desc: 'Compare the best architecture software. Find the right fit for your firm.' },
                { domain: 'G2.COM', title: 'Best AEC Software Reviews 2024 — G2', desc: 'Real reviews from verified customers in architecture, engineering & construction.' },
              ],
              aiAnswer: [
                [{ bold: true, text: 'Your brand' }, { text: ' is specifically built for design and architecture studios, offering project-based billing and AIA-compliant reporting.' }],
                [{ text: 'Multiple architecture firm blog posts and the official documentation hub reference it as a preferred alternative to QuickBooks for project-based billing.' }],
                [{ bold: true, text: 'Short answer:' }, { text: ' Your domain cited as the primary source — not aggregator directories.' }],
              ],
            },
            'local-seo': {
              headline: ['They searched near me.', 'You claimed the top spot'],
              subtitle: 'The map pack is the new homepage. The clinic, store, or firm at position one captures the call — not the website visit.',
              thenYear: 'THEN • Before',
              nowYear: 'NOW • After Local SEO',
              query: extra.visualExample.lines.find(l => l.role.toUpperCase().includes('USER'))?.content?.replace(/^"|"$/g, '') ?? 'physiotherapist near me',
              serpMeta: 'Map Pack — Google Maps, Mobile, 2.4km radius',
              serpResults: [
                { domain: '#1 — PHYSIOPLUS', title: '4.1 ★ · 38 reviews', desc: 'No business description. No Q&A. No booking link. Missing key attributes.' },
                { domain: '#2 — BODYCARE CLINIC', title: '3.8 ★ · 14 reviews', desc: 'Incomplete profile. Missing hours, services, and response to reviews.' },
                { domain: '#3 — ACTIVEHEALTH', title: '4.0 ★ · 29 reviews', desc: 'No Q&A section. Outdated photos. No booking integration.' },
                { domain: '#9 — YOUR CLINIC', title: 'Not visible in Map Pack', desc: 'Your clinic exists but is buried below the local pack — invisible to mobile intent buyers.' },
              ],
              aiAnswer: [
                [{ bold: true, text: 'Map Pack Position #1:' }, { text: ' Your Clinic Name · ⭐ 4.9 · 214 reviews' }],
                [{ bold: true, text: '"Sports injury & rehabilitation specialists' }, { text: ' — same-day appointments available"' }],
                [{ text: '✓ Wheelchair accessible  ✓ Online booking  ✓ Women-led' }],
                [{ text: 'Categories: Physiotherapist, Sports Injury Clinic · 3 active Q&As answered · Direct call button visible.' }],
              ],
            },
          };

          const jd = journeyData[solution.slug] ?? journeyData['seo'];

          return (
            <section className="py-24 md:py-36 border-t border-border bg-paper relative">
              <div className="max-w-[1400px] mx-auto px-6 md:px-16">

                {/* Header Title block */}
                <div className="max-w-4xl mb-16 md:mb-24">
                  <RevealText>
                    <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">THE BUYER JOURNEY</p>
                  </RevealText>
                  <RevealText delay={0.1}>
                    <h2 className="font-syne text-3xl md:text-5xl lg:text-6xl font-800 tracking-[-0.03em] leading-tight">
                      {jd.headline[0]}{" "}<br className="hidden sm:block" />
                      <span className="text-signal">{jd.headline[1]}.</span>
                    </h2>
                  </RevealText>
                  <RevealText delay={0.2}>
                    <p className="font-lato text-base md:text-lg text-text-secondary mt-6 max-w-2xl leading-[1.85]">
                      {jd.subtitle}
                    </p>
                  </RevealText>
                </div>

                {/* Grid 2 Columns comparison (Then vs Now) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

                  {/* LEFT — Traditional Search Mock (THEN) */}
                  <RevealText delay={0.15} duration={1.4}>
                    <div className="rounded-2xl border border-border bg-surface/30 overflow-hidden h-full flex flex-col">
                      <div className="px-5 py-3 border-b border-border">
                        <span className="font-lato text-[10px] tracking-[0.18em] uppercase text-text-muted font-semibold">
                          {jd.thenYear}
                        </span>
                      </div>

                      <div className="p-5 md:p-6 flex-1 flex flex-col">
                        {/* Search box bubble layout */}
                        <div className="flex items-center gap-3 border border-border rounded-full px-4 py-2.5 bg-surface/50 mb-4 select-none">
                          <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                          </svg>
                          <span className="font-lato text-sm text-text-secondary truncate">{jd.query}</span>
                        </div>

                        {/* Result meta header */}
                        <p className="font-lato text-[10px] tracking-[0.1em] uppercase text-text-muted mb-5 select-none">
                          {jd.serpMeta}
                        </p>

                        {/* SERP Results items */}
                        <div className="space-y-4 flex-1">
                          {jd.serpResults.map((r, i) => (
                            <div key={i} className="flex gap-3">
                              <span className="font-lato text-[10px] text-text-muted/65 w-4 flex-shrink-0 pt-0.5 select-none">
                                {String(i + 1).padStart(2, '0')}
                              </span>
                              <div>
                                <p className="font-lato text-[9px] tracking-[0.12em] uppercase text-text-secondary mb-0.5 font-bold">{r.domain}</p>
                                <p className="font-lato text-sm text-[#1a73e8] leading-snug mb-0.5 hover:underline cursor-pointer">{r.title}</p>
                                <p className="font-lato text-xs text-text-muted leading-[1.65]">{r.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </RevealText>

                  {/* RIGHT — AI Answer Mock (NOW) */}
                  <RevealText delay={0.25} duration={1.4}>
                    <div className="rounded-2xl border border-border bg-paper overflow-hidden h-full relative flex flex-col justify-between">
                      <div>
                        {/* Panel header */}
                        <div className="px-5 py-3 border-b border-border">
                          <span className="font-lato text-[10px] tracking-[0.18em] uppercase text-text-muted font-semibold">
                            {jd.nowYear}
                          </span>
                        </div>

                        <div className="p-5 md:p-6 flex flex-col gap-6">
                          {/* User message input mock (ChatGPT-style search bar) */}
                          <div className="flex items-center gap-4 border border-border/85 bg-paper rounded-md px-4 py-3 shadow-[0_1px_4px_rgba(0,0,0,0.015)] mb-2 select-none">
                            {/* ChatGPT outline Logo */}
                            <svg className="w-5 h-5 text-ink flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
                            </svg>
                            {/* Monospace Input text */}
                            <div className="flex-1 font-mono text-xs tracking-wider text-ink pt-0.5">
                              {jd.query}
                            </div>
                          </div>

                          {/* AI response content row */}
                          <div className="flex items-start gap-4">
                            {/* AI Avatar - Official ChatGPT branding */}
                            <div className="w-8 h-8 rounded-full bg-[#10a37f] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
                              </svg>
                            </div>

                            {/* Inner AI block */}
                            <div className="flex-1 flex flex-col gap-4">
                              <TypewriterAI paragraphs={jd.aiAnswer} />

                              {/* Actions bar */}
                              <div className="flex items-center gap-3 pt-2.5 border-t border-border/10 select-none">
                                <button className="text-text-muted hover:text-ink transition-colors duration-300" title="Copy">
                                  <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="5.5" y="5.5" width="8" height="9" rx="1.2" />
                                    <path d="M10.5 5.5V4A1.5 1.5 0 009 2.5H4A1.5 1.5 0 002.5 4v6.5A1.5 1.5 0 004 12h1.5" />
                                  </svg>
                                </button>
                                <button className="text-text-muted hover:text-ink transition-colors duration-300" title="Regenerate">
                                  <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M13.5 8A5.5 5.5 0 112.5 5.5" strokeLinecap="round" />
                                    <path d="M2.5 2.5v3h3" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                </button>
                                <button className="text-text-muted hover:text-ink transition-colors duration-300" title="Helpful">
                                  <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M5 7.5L7.5 2.5a1 1 0 011.8.6v2.9h3a1 1 0 01.95 1.32l-1.5 4.5A1 1 0 0110.8 12.5H5V7.5z" strokeLinejoin="round" />
                                    <path d="M5 7.5H3.5a.5.5 0 00-.5.5v4a.5.5 0 00.5.5H5" strokeLinejoin="round" />
                                  </svg>
                                </button>
                                <button className="text-text-muted hover:text-ink transition-colors duration-300" title="Not helpful">
                                  <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M11 8.5L8.5 13.5a1 1 0 01-1.8-.6V10H3.7a1 1 0 01-.95-1.32l1.5-4.5A1 1 0 015.2 3.5H11V8.5z" strokeLinejoin="round" />
                                    <path d="M11 8.5h1.5a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5H11" strokeLinejoin="round" />
                                  </svg>
                                </button>
                                <button className="text-text-muted hover:text-ink transition-colors duration-300 font-bold tracking-wider text-[10px]" title="More">···</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Shadow flare indicator */}
                      <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-signal/[0.05] blur-[50px] pointer-events-none" />
                    </div>
                  </RevealText>

                </div>
              </div>
            </section>
          );
        })()
      }


      {/* ── 2. WHAT WE DELIVER ── */}
      {/* <section className="py-32 md:py-48 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
            <div className="md:col-span-4 md:sticky md:top-40 md:self-start">
              <RevealText>
                <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">WHAT WE DELIVER</p>
              </RevealText>
              <RevealText delay={0.1}>
                <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em]">
                  The outcome<span className="text-signal">.</span>
                </h2>
              </RevealText>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <RevealText delay={0.2} duration={1.8}>
                <p className="font-lato text-base md:text-lg text-text-secondary leading-[1.9]">
                  {extra.whatWeDeliver}
                </p>
              </RevealText>
            </div>
          </div>
        </div>
      </section> */}

      {/* ── 3. CORE CAPABILITIES ── */}
      <section className="py-32 md:py-48 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
            <div className="md:col-span-4 md:sticky md:top-40 md:self-start">
              <RevealText>
                <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">CAPABILITIES</p>
              </RevealText>
              <RevealText delay={0.1}>
                <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em]">
                  Core capabilities<span className="text-signal">.</span>
                </h2>
              </RevealText>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <CapabilityAccordion features={solution.features} slug={solution.slug} />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3.1 SERVICES PRACTICE GRID ── */}
      {extra.visualExample && (() => {
        // Definitions for AEO / GEO / SEO / Local SEO pages services/practices
        const servicesData: Record<string, {
          subtitle: string;
          practices: {
            label: string;
            title: string;
            desc: string;
            type: 'audit' | 'voice' | 'strategy' | 'authority' | 'citation' | 'monitoring';
            mock: any;
          }[];
        }> = {
          seo: {
            subtitle: 'From crawl optimization to programmatic search engines index — six practices that rank your brand.',
            practices: [
              {
                label: '01 • AUDIT',
                title: 'Organic Search Audit',
                desc: 'A full read of how crawler bots see, interpret, and index your website. Find technical issues, indexation blocks, and keyword gap opportunities.',
                type: 'audit',
                mock: {
                  headerLeft: 'CITEBOUND · SEO HEALTH SCORE',
                  headerRight: 'BASELINE · JUL 2026',
                  score: 42,
                  scoreLabel: 'Below Target',
                  scorePeer: 'avg. peer score: 65',
                  bars: [
                    { label: 'CRAWLABILITY', value: 68 },
                    { label: 'CORE WEB VITALS', value: 45 },
                    { label: 'SCHEMA INDEX', value: 22 },
                    { label: 'SITEMAP SYNC', value: 30 },
                    { label: 'MOBILE SCORE', value: 58 }
                  ]
                }
              },
              {
                label: '02 • SEARCH TRACKING',
                title: 'Keyword Share of Search',
                desc: 'We track your organic rankings keyword by keyword, query by query — mapping search intent coverage against industry competitors.',
                type: 'voice',
                mock: {
                  headerLeft: 'SHARE OF SEARCH · CATEGORY',
                  headerRight: '↑ 6 PTS / MoM',
                  distribution: [
                    { label: 'YOUR BRAND', value: 26 },
                    { label: 'COMPETITOR A', value: 38 },
                    { label: 'COMPETITOR B', value: 28 },
                    { label: 'OTHERS', value: 8 }
                  ]
                }
              },
              {
                label: '03 • CONTENT',
                title: 'Intent Content Mapping',
                desc: 'We map the exact informational queries users search, then deploy targeted content silos that address user intent directly.',
                type: 'strategy',
                mock: {
                  query: 'competitor alternative tools for scale',
                  statusLabel: 'TARGET · SNIPPET MATCH',
                  extract: '“With direct internal pricing, SOC-2 readiness and sub-second loading, [Your Brand] ranks as the tier-one alternative...”',
                  footerLeft: 'CITED BY · GOOGLE · BING',
                  footerRight: '18 HITS'
                }
              },
              {
                label: '04 • TECHNICAL',
                title: 'Technical Site Authority',
                desc: 'We implement absolute optimizations on your core page loading, URL hierarchy, sitemap routing, and structured schemas.',
                type: 'authority',
                mock: {
                  headerLeft: 'TECHNICAL GRAPH · DOMAIN',
                  headerRight: 'OPTIMIZED',
                  brandName: 'Citebound.',
                  brandType: 'SEO SYSTEM LAYER',
                  metadata: [
                    { key: 'STACK', val: 'Edge Static HTML & Vanilla CSS' },
                    { key: 'SPEED', val: 'Sub-200ms TTFB | 99 PageSpeed' },
                    { key: 'SCHEMAS', val: 'ItemList, Organization, Articles' }
                  ]
                }
              },
              {
                label: '05 • BACKLINKS',
                title: 'PR-Driven Link Acquisition',
                desc: 'We build authoritative backlink authority from high-trust web publishers and journals to pass absolute PageRank to your site.',
                type: 'citation',
                mock: {
                  headerLeft: 'DOMAINS ROUTED · LAST 90 D',
                  headerRight: '14 / 30 EARNED',
                  badges: [
                    { domain: 'techcrunch.com', dots: 3 },
                    { domain: 'ycombinator.com', dots: 3 },
                    { domain: 'g2.com', dots: 2 },
                    { domain: 'forbes.com', dots: 3 }
                  ],
                  pendingLabel: '+ 10 PENDING',
                  footnote: 'Domain Rating (DR) increased from 42 to 64 in quarterly sprints.'
                }
              },
              {
                label: '06 • INTEL',
                title: 'Organic Search Leaderboard',
                desc: 'We audit competitors daily to pinpoint ranking drops, key directory changes, and quick-win keyword clusters you can intercept.',
                type: 'monitoring',
                mock: {
                  headerLeft: 'SEARCH LEADERBOARD · JUL 2026',
                  headerRight: '350 KEYWORDS',
                  rows: [
                    { rank: '01', label: 'Competitor A', score: '38%', change: '↓ 2' },
                    { rank: '02', label: 'Competitor B', score: '28%', change: '↑ 1' },
                    { rank: '03', label: 'Your brand', score: '26%', change: '↑ 12', isMatch: true },
                    { rank: '04', label: 'Others', score: '8%', change: '—' }
                  ]
                }
              }
            ]
          },
          aeo: {
            subtitle: 'From baseline diagnosis to category dominance — six interlocking practices that move your brand inside the answer.',
            practices: [
              {
                label: '01 • AUDIT',
                title: 'AI Visibility Audit',
                desc: 'A full read of how every major model describes, mentions, cites, and recommends your brand today. See what each model knows, what it gets wrong, and where competitors are eating your share.',
                type: 'audit',
                mock: {
                  headerLeft: 'CITEBOUND · AI VISIBILITY SCORE',
                  headerRight: 'BASELINE · JUL 2026',
                  score: 38,
                  scoreLabel: 'Below Category',
                  scorePeer: 'avg. peer: 61',
                  bars: [
                    { label: 'CHATGPT', value: 62 },
                    { label: 'PERPLEXITY', value: 41 },
                    { label: 'CLAUDE', value: 51 },
                    { label: 'GEMINI', value: 28 },
                    { label: 'COPILOT', value: 19 }
                  ]
                }
              },
              {
                label: '02 • VOICE tracking',
                title: 'Share of Voice Tracking',
                desc: 'We track your presence model by model, prompt by prompt — and show where you are gaining ground or being replaced.',
                type: 'voice',
                mock: {
                  headerLeft: 'SHARE OF ANSWER · CATEGORY',
                  headerRight: '↑ 3 PTS / MoM',
                  distribution: [
                    { label: 'YOUR BRAND', value: 23 },
                    { label: 'VANTA', value: 41 },
                    { label: 'DRATA', value: 28 },
                    { label: 'SECUREFRAME', value: 8 }
                  ]
                }
              },
              {
                label: '03 • STRATEGY',
                title: 'Prompt and Content Strategy',
                desc: 'We map the prompts your buyers actually ask, then build the pages AI can confidently quote back.',
                type: 'strategy',
                mock: {
                  query: 'best fintech compliance tool for series B',
                  statusLabel: 'ANSWER-READY EXTRACT · YOUR PAGE',
                  extract: '“For Series B fintechs juggling SOC 2 and FedRAMP, the leanest compliance stack pairs Vanta with...”',
                  footerLeft: 'CITED BY · CHATGPT · PERPLEXITY',
                  footerRight: '+ 14 PROMPTS'
                }
              },
              {
                label: '04 • AUTHORITY',
                title: 'Entity & Authority',
                desc: 'We tighten the signals that tell AI who you are, what you do, who you serve, and why you should be trusted. Schema, sources, citations, and a roadmap to own your category.',
                type: 'authority',
                mock: {
                  headerLeft: 'ENTITY GRAPH · YOUR BRAND',
                  headerRight: 'VERIFIED',
                  brandName: 'Citebound.',
                  brandType: 'AI SEARCH VISIBILITY AGENCY',
                  metadata: [
                    { key: 'ROLE', val: 'Agency that audits and tracks AI visibility' },
                    { key: 'SERVES', val: 'B2B SaaS • Pro services • Funded startups' },
                    { key: 'CITES', val: 'ChatGPT • Perplexity • Gemini • Claude' }
                  ]
                }
              },
              {
                label: '05 • CITATION',
                title: 'Citation & Digital PR',
                desc: 'We earn the third-party mentions, press placements, and review consensus models use to decide who is credible.',
                type: 'citation',
                mock: {
                  headerLeft: 'SOURCES MODELS PULL · LAST 90 D',
                  headerRight: '12 / 28 EARNED',
                  badges: [
                    { domain: 'techcrunch.com', dots: 3 },
                    { domain: 'ycombinator.com', dots: 3 },
                    { domain: 'g2.com', dots: 3 },
                    { domain: 'forbes.com', dots: 3 }
                  ],
                  pendingLabel: '+ 8 PENDING',
                  footnote: 'Citation quality moved Vanta from rank 05 to rank 01 in 90 days.'
                }
              },
              {
                label: '06 • MONITORING',
                title: 'Competitive Intelligence',
                desc: 'We track every competitor in your category — where they win the answer, where they slip, and where you can move in.',
                type: 'monitoring',
                mock: {
                  headerLeft: 'CATEGORY LEADERBOARD · JUL 2026',
                  headerRight: '128 PROMPTS',
                  rows: [
                    { rank: '01', label: 'Vanta', score: '41%', change: '↑ 2' },
                    { rank: '02', label: 'Drata', score: '28%', change: '↓ 1' },
                    { rank: '03', label: 'Your brand', score: '23%', change: '↑ 8', isMatch: true },
                    { rank: '04', label: 'Secureframe', score: '8%', change: '—' }
                  ]
                }
              }
            ]
          },
          geo: {
            subtitle: 'From RAG database parsing to generative assistant index citations — six practices to secure AI recommendation authority.',
            practices: [
              {
                label: '01 • BENCHMARK',
                title: 'RAG Visibility Audit',
                desc: 'We analyze how Retrieval-Augmented Generation engines process, index, and query your website. Identify indexing bugs and model attribution opportunities.',
                type: 'audit',
                mock: {
                  headerLeft: 'CITEBOUND · RAG SCORE',
                  headerRight: 'BASELINE · JUL 2026',
                  score: 34,
                  scoreLabel: 'Action Required',
                  scorePeer: 'avg. peer score: 58',
                  bars: [
                    { label: 'SOURCES SYNCED', value: 40 },
                    { label: 'CITATION QUALITY', value: 28 },
                    { label: 'GRAPH VERIFICATION', value: 55 },
                    { label: 'RAG ATTRIBUTION', value: 22 },
                    { label: 'TOP QUERY RANK', value: 48 }
                  ]
                }
              },
              {
                label: '02 • ANSWER ENGINE MATCHING',
                title: 'Generative Answer Tracking',
                desc: 'We trace citation counts inside Perplexity, Google Gemini, and OpenAI Search prompts, mapping recommendation share across cohorts.',
                type: 'voice',
                mock: {
                  headerLeft: 'GENERATIVE SHARE · CATEGORY',
                  headerRight: '↑ 5 PTS / MoM',
                  distribution: [
                    { label: 'YOUR BRAND', value: 21 },
                    { label: 'COMPETITOR A', value: 45 },
                    { label: 'COMPETITOR B', value: 24 },
                    { label: 'OTHERS', value: 10 }
                  ]
                }
              },
              {
                label: '03 • RETRIEVAL CONTENT',
                title: 'Retrieval Content Engineering',
                desc: 'We format and deploy structured content segments designed specifically for generative language models to query and cite.',
                type: 'strategy',
                mock: {
                  query: 'best security analytics platform for AWS',
                  statusLabel: 'SOURCED FROM · DOCUMENTATION HUB',
                  extract: '“For AWS environments undergoing compliance checks, [Your Brand] provides autonomous security logs cited by multiple third-party audits...”',
                  footerLeft: 'CITED BY · PERPLEXITY · GEMINI',
                  footerRight: '22 SOURCE FILES'
                }
              },
              {
                label: '04 • GRAPHS',
                title: 'Graph Node Verification',
                desc: 'We declare organization entity schemas to link your site nodes directly to global semantic databases like Wikidata or Google Knowledge Graph.',
                type: 'authority',
                mock: {
                  headerLeft: 'KNOWLEDGE GRAPH · ENTITY',
                  headerRight: 'VERIFIED',
                  brandName: 'Citebound.',
                  brandType: 'RAG DATABASE INDEX',
                  metadata: [
                    { key: 'CONTEXT', val: 'Semantic Entity Hub Integration' },
                    { key: 'NODES', val: 'Wikidata ID | DBpedia Node Sync' },
                    { key: 'SYNTAX', val: 'JSON-LD Graph Schema compliant' }
                  ]
                }
              },
              {
                label: '05 • CITATION',
                title: 'Trust Citation PR',
                desc: 'We acquire placement and backlinks on LLMs primary data sources, review directories, and technical documentation hubs.',
                type: 'citation',
                mock: {
                  headerLeft: 'SOURCE CITES · LLM SOURCES',
                  headerRight: '8 / 18 TRUSTED',
                  badges: [
                    { domain: 'github.com', dots: 3 },
                    { domain: 'reddit.com', dots: 2 },
                    { domain: 'stackoverflow.com', dots: 3 },
                    { domain: 'wikipedia.org', dots: 1 }
                  ],
                  pendingLabel: '+ 4 PENDING',
                  footnote: 'Source trust rating increased citation occurrence by 140% in 60 days.'
                }
              },
              {
                label: '06 • INTEL',
                title: 'RAG Competitor Tracking',
                desc: 'We parse the specific sources and websites cited by search agents to target directories your competitors own, then out-rank them.',
                type: 'monitoring',
                mock: {
                  headerLeft: 'GEO LEADERBOARD · JUL 2026',
                  headerRight: '64 LLM PROMPTS',
                  rows: [
                    { rank: '01', label: 'Competitor A', score: '45%', change: '↓ 4' },
                    { rank: '02', label: 'Competitor B', score: '24%', change: '↑ 2' },
                    { rank: '03', label: 'Your brand', score: '21%', change: '↑ 9', isMatch: true },
                    { rank: '04', label: 'Others', score: '10%', change: '—' }
                  ]
                }
              }
            ]
          },
          'local-seo': {
            subtitle: 'From local directory normalization to Map Pack dominance — six interlocking execution practices to capture regional buyers.',
            practices: [
              {
                label: '01 • GAP AUDIT',
                title: 'Map Pack Placement Audit',
                desc: 'A full read of your location-specific citation density, GBP profile health, review velocity, and regional directory completeness.',
                type: 'audit',
                mock: {
                  headerLeft: 'CITEBOUND · PROFILE HEALTH',
                  headerRight: 'BASELINE · JUL 2026',
                  score: 48,
                  scoreLabel: 'Action Required',
                  scorePeer: 'avg. peer score: 71',
                  bars: [
                    { label: 'GBP PROFILE SYNC', value: 88 },
                    { label: 'NAP CONSISTENCY', value: 42 },
                    { label: 'REVIEW DENSITY', value: 30 },
                    { label: 'SCHEMA ACCURACY', value: 55 },
                    { label: 'LOCAL BACKLINKS', value: 25 }
                  ]
                }
              },
              {
                label: '02 • MAP TRACKING',
                title: 'Regional Share of Map Pack',
                desc: 'We track your business profile locations across multiple ZIP codes, prompt queries, and regional borders to map listing share.',
                type: 'voice',
                mock: {
                  headerLeft: 'MAP PACK SHARE · 5KM RADIUS',
                  headerRight: '↑ 8 PTS / MoM',
                  distribution: [
                    { label: 'YOUR BRAND', value: 30 },
                    { label: 'COMPETITOR A', value: 35 },
                    { label: 'COMPETITOR B', value: 25 },
                    { label: 'OTHERS', value: 10 }
                  ]
                }
              },
              {
                label: '03 • SCHEMAS',
                title: 'Regional Schema & Content',
                desc: 'We declare multi-location local schemas, NAP profiles, and neighborhood-specific pages to address hyper-local search intent.',
                type: 'strategy',
                mock: {
                  query: 'sports therapist open near me',
                  statusLabel: 'LOCAL PROFILE · MAP SYNCED',
                  extract: '“With 210+ verified sports therapy listings, active booking, and same-day recovery sprints, [Your Brand] ranks #1 at...”',
                  footerLeft: 'CITED BY · GOOGLE MAPS · APPLE MAPS',
                  footerRight: '4 LOCATIONS'
                }
              },
              {
                label: '04 • PROFILE',
                title: 'Google Profile Execution',
                desc: 'We design, verify, and monitor Google Business Profiles, structured reviews routing, and multi-location attributes.',
                type: 'authority',
                mock: {
                  headerLeft: 'GBP ENTITY STATE',
                  headerRight: 'ACTIVE',
                  brandName: 'Citebound.',
                  brandType: 'LOCAL SERVICE HUB',
                  metadata: [
                    { key: 'MAPS', val: 'Google Business Profile & Apple Maps' },
                    { key: 'REVIEWS', val: 'Automation-ready review aggregation' },
                    { key: 'STATUS', val: 'Sub-5km Map Pack verified' }
                  ]
                }
              },
              {
                label: '05 • CITATION',
                title: 'NAP Directory Synced',
                desc: 'We sync and lock Name, Address, and Phone details across 80+ global listing aggregators (Yelp, TripAdvisor, Foursquare).',
                type: 'citation',
                mock: {
                  headerLeft: 'DIRECTORY SYNCED · LIVE DATA',
                  headerRight: '72 / 80 LOCKED',
                  badges: [
                    { domain: 'yelp.com', dots: 3 },
                    { domain: 'tripadvisor.com', dots: 3 },
                    { domain: 'foursquare.com', dots: 2 },
                    { domain: 'yellowpages.com', dots: 2 }
                  ],
                  pendingLabel: '+ 8 PENDING',
                  footnote: 'NAP synchronization errors reduced citation drops by 98%.'
                }
              },
              {
                label: '06 • INVENTORY',
                title: 'Regional Leaderboard',
                desc: 'We track map rankings of competitors in your radius to target gaps in reviews, photo volume, and local attributes.',
                type: 'monitoring',
                mock: {
                  headerLeft: 'LOCAL LEADERBOARD · JUL 2026',
                  headerRight: 'ZIP 10001 radius',
                  rows: [
                    { rank: '01', label: 'Competitor A', score: '35%', change: '↓ 3' },
                    { rank: '02', label: 'Your clinic/brand', score: '30%', change: '↑ 14', isMatch: true },
                    { rank: '03', label: 'Competitor B', score: '25%', change: '↓ 1' },
                    { rank: '04', label: 'Others', score: '10%', change: '—' }
                  ]
                }
              }
            ]
          }
        };

        const sd = servicesData[solution.slug] ?? servicesData['seo'];

        // Helper components to render beautiful mocks inside cards
        const renderMock = (practice: typeof sd.practices[0]) => {
          const v = practice.mock;
          if (practice.type === 'audit') {
            return (
              <div className="flex flex-col h-full gap-3 select-none">
                {/* Header row */}
                <div className="flex items-center justify-between border-b border-border/10 pb-2 text-[9px] tracking-wide text-text-muted">
                  <span>{v.headerLeft}</span>
                  <span>{v.headerRight}</span>
                </div>
                {/* Score + Bars row */}
                <div className="flex flex-row items-center gap-4 flex-1">
                  {/* Score panel — fixed width */}
                  <div className="flex flex-col items-start justify-center gap-1 pr-4 border-r border-border/20 flex-shrink-0 w-[90px]">
                    <div className="flex items-baseline gap-0.5 leading-none">
                      <span className="text-4xl font-extrabold text-ink font-syne leading-none">{v.score}</span>
                      <span className="text-[10px] text-text-muted self-end pb-0.5">/100</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-signal inline-block animate-pulse flex-shrink-0" />
                      <span className="text-[8px] font-semibold text-signal uppercase tracking-wider leading-tight">{v.scoreLabel}</span>
                    </div>
                    <span className="text-[8px] text-text-muted mt-0.5 leading-tight">{v.scorePeer}</span>
                  </div>
                  {/* Bars panel — fills remaining space */}
                  <div className="flex flex-col justify-center gap-2 flex-1">
                    {v.bars.map((bar: any, idx: number) => (
                      <div key={idx} className="space-y-0.5">
                        <div className="flex items-center justify-between text-[8px] tracking-wide text-text-secondary">
                          <span className="font-semibold uppercase">{bar.label}</span>
                          <span className="font-semibold text-ink">{bar.value}%</span>
                        </div>
                        <div className="h-[3px] w-full bg-border/30 rounded-full overflow-hidden">
                          <div className="h-full bg-signal rounded-full" style={{ width: `${bar.value}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          }

          if (practice.type === 'voice') {
            return (
              <div className="flex flex-col h-full justify-between gap-3 select-none">
                <div className="flex items-center justify-between border-b border-border/10 pb-2 text-[9px] tracking-wide text-text-muted">
                  <span>{v.headerLeft}</span>
                  <span className="text-signal font-semibold">{v.headerRight}</span>
                </div>
                <div className="flex h-5 w-full rounded overflow-hidden border border-border/40 my-1 bg-surface/50">
                  {v.distribution.map((segment: any, idx: number) => (
                    <div
                      key={idx}
                      className={`h-full ${idx === 0 ? 'bg-signal' : 'bg-surface'} transition-all`}
                      style={{
                        width: `${segment.value}%`,
                        opacity: idx === 0 ? 1 : idx === 1 ? 0.8 : idx === 2 ? 0.5 : 0.25
                      }}
                    />
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 pb-1">
                  {v.distribution.map((d: any, idx: number) => (
                    <div key={idx} className="flex items-center justify-between text-[8px] border-b border-border/5 pb-1">
                      <div className="flex items-center gap-1.5 truncate">
                        <span className={`w-1.5 h-1.5 rounded ${idx === 0 ? 'bg-signal' : 'bg-text-muted'} flex-shrink-0`} />
                        <span className="text-text-secondary font-semibold truncate">{d.label}</span>
                      </div>
                      <span className="text-ink font-semibold">{d.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          }

          if (practice.type === 'strategy') {
            return (
              <div className="flex flex-col h-full justify-between gap-3 text-[10px] sm:text-xs select-none">
                <div className="flex items-center justify-between border border-border rounded-md px-3 py-1.5 bg-surface/20">
                  <div className="flex items-center gap-1.5 truncate">
                    <span className="text-signal font-bold font-mono">&gt;</span>
                    <span className="text-ink tracking-tight font-semibold truncate font-mono text-[9px]">{v.query}</span>
                  </div>
                  <span className="text-[8px] text-text-muted font-bold tracking-tight">ASK ↵</span>
                </div>
                <div className="space-y-1 py-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-signal" />
                    <span className="text-[8px] font-semibold text-text-secondary uppercase tracking-wider">{v.statusLabel}</span>
                  </div>
                  <p className="font-lato italic text-[11px] text-text-secondary leading-relaxed border-l border-signal/40 pl-3">
                    {v.extract}
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-border/10 pt-2 text-[8px] text-text-muted">
                  <span className="uppercase tracking-wide font-medium">{v.footerLeft}</span>
                  <span className="text-signal font-bold tracking-wider">{v.footerRight}</span>
                </div>
              </div>
            );
          }

          if (practice.type === 'authority') {
            return (
              <div className="flex flex-col h-full justify-between gap-4 select-none">
                <div className="flex items-center justify-between border-b border-border/10 pb-2 text-[9px] tracking-wide text-text-muted">
                  <span>{v.headerLeft}</span>
                  <div className="flex items-center gap-1 text-[8px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-signal" />
                    <span className="text-signal font-semibold tracking-wider uppercase">{v.headerRight}</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                  <div className="sm:col-span-4 flex flex-col items-start gap-0.5 border-b sm:border-b-0 sm:border-r border-border/10 pb-2 sm:pb-0 sm:pr-3">
                    <span className="font-syne text-lg font-extrabold text-ink tracking-tight">{v.brandName}</span>
                    <span className="text-[7.5px] text-text-muted leading-tight uppercase font-medium">{v.brandType}</span>
                  </div>
                  <div className="sm:col-span-8 space-y-1 font-mono text-[8px] text-text-secondary">
                    {v.metadata.map((row: any, idx: number) => (
                      <div key={idx} className="flex gap-2">
                        <span className="font-semibold text-text-muted uppercase w-12 flex-shrink-0">{row.key}</span>
                        <span className="text-ink truncate">{row.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          }

          if (practice.type === 'citation') {
            return (
              <div className="flex flex-col h-full justify-between gap-4 select-none">
                <div className="flex items-center justify-between border-b border-border/10 pb-2 text-[9px] tracking-wide text-text-muted">
                  <span>{v.headerLeft}</span>
                  <span className="text-signal font-semibold">{v.headerRight}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 py-0.5">
                  {v.badges.map((b: any, idx: number) => (
                    <div key={idx} className="flex items-center gap-1 bg-surface-hover/80 border border-border/60 rounded px-2 py-0.5 text-[8px]">
                      <span className="text-text-secondary font-semibold">{b.domain}</span>
                      <div className="flex gap-[1px]">
                        {Array.from({ length: b.dots }).map((_, i) => (
                          <span key={i} className="w-[3px] h-[3px] rounded-full bg-signal" />
                        ))}
                      </div>
                    </div>
                  ))}
                  {v.pendingLabel && (
                    <div className="flex items-center gap-1 border border-border/30 border-dashed rounded px-2 py-0.5 text-[8px] text-text-muted italic">
                      {v.pendingLabel}
                    </div>
                  )}
                </div>
                <p className="font-lato italic text-[9px] text-text-muted leading-relaxed border-t border-border/5 pt-1.5 mt-0.5">
                  {v.footnote}
                </p>
              </div>
            );
          }

          if (practice.type === 'monitoring') {
            return (
              <div className="flex flex-col h-full justify-between gap-2 select-none">
                <div className="flex items-center justify-between border-b border-border/10 pb-2 text-[9px] tracking-wide text-text-muted">
                  <span>{v.headerLeft}</span>
                  <span>{v.headerRight}</span>
                </div>
                <div className="space-y-1 pb-0.5">
                  {v.rows.map((row: any, idx: number) => {
                    const isUser = row.isMatch || row.label.toLowerCase().includes('your brand') || row.label.toLowerCase().includes('your clinic');
                    return (
                      <div
                        key={idx}
                        className={`flex items-center justify-between py-0.5 px-2 rounded text-[9.5px] border ${isUser ? 'bg-signal/8 border-signal/25' : 'border-transparent'}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`font-semibold ${isUser ? 'text-signal' : 'text-text-muted'}`}>
                            {row.rank}
                          </span>
                          <span className={`font-semibold ${isUser ? 'text-ink' : 'text-text-secondary'}`}>
                            {row.label}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`font-semibold ${isUser ? 'text-ink' : 'text-text-secondary'}`}>
                            {row.score}
                          </span>
                          <span className={`w-8 text-right font-medium ${row.change.includes('↑') ? 'text-emerald-500 font-semibold' : row.change.includes('↓') ? 'text-red-500 font-semibold' : 'text-text-muted'}`}>
                            {row.change}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }

          return null;
        };

        return (
          <section className="py-32 md:py-48 border-t border-border">
            <div className="max-w-[1400px] mx-auto px-6 md:px-16">

              {/* Header Title block */}
              <div className="max-w-4xl mb-20 md:mb-28">
                <RevealText>
                  <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4 font-semibold">SERVICES</p>
                </RevealText>

                <RevealText delay={0.1} duration={2}>
                  <h2 className="font-syne text-4xl md:text-6xl font-800 tracking-[-0.03em] leading-tight mb-6">
                    We make your company easy for AI to find, understand, and recommend.
                  </h2>
                </RevealText>

                <RevealText delay={0.2} duration={1.6}>
                  <p className="font-lato text-base md:text-lg text-text-secondary leading-[1.85] max-w-2xl">
                    {sd.subtitle}
                  </p>
                </RevealText>
              </div>

              {/* 6 Practices Grid layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {sd.practices.map((practice, idx) => (
                  <RevealText key={idx} delay={idx * 0.1} duration={1.4}>
                    <div className="border border-border bg-surface/30 hover:bg-surface/50 transition-colors duration-500 rounded-2xl p-6 md:p-8 flex flex-col gap-6 h-full justify-between">
                      <div className="space-y-4">
                        <span className="font-mono text-[10px] tracking-widest text-text-muted uppercase font-semibold">
                          {practice.label}
                        </span>
                        <h3 className="font-syne text-2xl md:text-3xl font-800 tracking-tight text-ink">
                          {practice.title}
                        </h3>
                        <p className="font-lato text-sm text-text-secondary leading-relaxed">
                          {practice.desc}
                        </p>
                      </div>

                      {/* Mockup Display Box */}
                      <div className="rounded-xl border border-border bg-paper p-4 md:p-5 mt-4 min-h-[200px] flex flex-col justify-between shadow-[inset_0_1px_6px_rgba(0,0,0,0.02)]">
                        {renderMock(practice)}
                      </div>
                    </div>
                  </RevealText>
                ))}
              </div>

              {/* Red/Orange full-width CTA Box */}
              <RevealText delay={0.15} duration={1.4}>
                <a
                  href="#contact"
                  className="mt-16 flex items-center justify-between bg-signal text-ink hover:bg-ink hover:text-paper px-8 py-5 md:py-6 rounded-xl font-syne text-sm md:text-base font-800 tracking-tight transition-all duration-500 ease-out group"
                >
                  <span>Book an AI Visibility Audit</span>
                  <div className="flex items-end gap-[3px] select-none h-4">
                    <span className="w-[3px] h-2 bg-ink group-hover:bg-paper transition-colors duration-500" />
                    <span className="w-[3px] h-4 bg-ink group-hover:bg-paper transition-colors duration-500" />
                    <span className="w-[3px] h-3 bg-ink group-hover:bg-paper transition-colors duration-500" />
                  </div>
                </a>
              </RevealText>

            </div>
          </section>
        );
      })()}

      {/* ── PLATFORMS ECOSYSTEM ── */}
      {extra.visualExample && (() => {
        const platforms = [
          {
            num: '01',
            type: 'CONVERSATIONAL',
            name: 'ChatGPT',
            svg: (
              // NOTE: OpenAI pulled its logo from open icon libraries after its 2025/2026
              // rebrand (the old "blossom" mark is now used mainly for OpenAI Research).
              // Your original path below is that blossom mark — keeping it as the closest
              // available option. For the current official mark, check openai.com/brand.
              <svg className="w-5 h-5 text-black dark:text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
              </svg>
            )
          },
          {
            num: '02',
            type: 'CONVERSATIONAL',
            name: 'Gemini',
            svg: (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#8E75B2">
                <path d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81" />
              </svg>
            )
          },
          {
            num: '03',
            type: 'CONVERSATIONAL',
            name: 'Claude',
            svg: (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#D97757">
                <path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z" />
              </svg>
            )
          },
          {
            num: '04',
            type: 'ANSWER ENGINE',
            name: 'Perplexity',
            svg: (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1FB8CD">
                <path d="M22.3977 7.0896h-2.3106V.0676l-7.5094 6.3542V.1577h-1.1554v6.1966L4.4904 0v7.0896H1.6023v10.3976h2.8882V24l6.932-6.3591v6.2005h1.1554v-6.0469l6.9318 6.1807v-6.4879h2.8882V7.0896zm-3.4657-4.531v4.531h-5.355l5.355-4.531zm-13.2862.0676 4.8691 4.4634H5.6458V2.6262zM2.7576 16.332V8.245h7.8476l-6.1149 6.1147v1.9723H2.7576zm2.8882 5.0404v-3.8852h.0001v-2.6488l5.7763-5.7764v7.0111l-5.7764 5.2993zm12.7086.0248-5.7766-5.1509V9.0618l5.7766 5.7766v6.5588zm2.8882-5.0652h-1.733v-1.9723L13.3948 8.245h7.8478v8.087z" />
              </svg>
            )
          },
          {
            num: '05',
            type: 'ASSISTANT',
            name: 'Copilot',
            svg: (
              // Simple Icons only has a "GitHub Copilot" mark (the cat-face logo), not a
              // separate Microsoft Copilot logo. If you specifically need Microsoft's
              // Copilot glyph, you'll need to source it from Microsoft's own brand assets.
              <svg className="w-5 h-5 text-ink" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.922 16.997C23.061 18.492 18.063 22.02 12 22.02 5.937 22.02.939 18.492.078 16.997A.641.641 0 0 1 0 16.741v-2.869a.883.883 0 0 1 .053-.22c.372-.935 1.347-2.292 2.605-2.656.167-.429.414-1.055.644-1.517a10.098 10.098 0 0 1-.052-1.086c0-1.331.282-2.499 1.132-3.368.397-.406.89-.717 1.474-.952C7.255 2.937 9.248 1.98 11.978 1.98c2.731 0 4.767.957 6.166 2.093.584.235 1.077.546 1.474.952.85.869 1.132 2.037 1.132 3.368 0 .368-.014.733-.052 1.086.23.462.477 1.088.644 1.517 1.258.364 2.233 1.721 2.605 2.656a.841.841 0 0 1 .053.22v2.869a.641.641 0 0 1-.078.256Zm-11.75-5.992h-.344a4.359 4.359 0 0 1-.355.508c-.77.947-1.918 1.492-3.508 1.492-1.725 0-2.989-.359-3.782-1.259a2.137 2.137 0 0 1-.085-.104L4 11.746v6.585c1.435.779 4.514 2.179 8 2.179 3.486 0 6.565-1.4 8-2.179v-6.585l-.098-.104s-.033.045-.085.104c-.793.9-2.057 1.259-3.782 1.259-1.59 0-2.738-.545-3.508-1.492a4.359 4.359 0 0 1-.355-.508Zm2.328 3.25c.549 0 1 .451 1 1v2c0 .549-.451 1-1 1-.549 0-1-.451-1-1v-2c0-.549.451-1 1-1Zm-5 0c.549 0 1 .451 1 1v2c0 .549-.451 1-1 1-.549 0-1-.451-1-1v-2c0-.549.451-1 1-1Zm3.313-6.185c.136 1.057.403 1.913.878 2.497.442.544 1.134.938 2.344.938 1.573 0 2.292-.337 2.657-.751.384-.435.558-1.15.558-2.361 0-1.14-.243-1.847-.705-2.319-.477-.488-1.319-.862-2.824-1.025-1.487-.161-2.192.138-2.533.529-.269.307-.437.808-.438 1.578v.021c0 .265.021.562.063.893Zm-1.626 0c.042-.331.063-.628.063-.894v-.02c-.001-.77-.169-1.271-.438-1.578-.341-.391-1.046-.69-2.533-.529-1.505.163-2.347.537-2.824 1.025-.462.472-.705 1.179-.705 2.319 0 1.211.175 1.926.558 2.361.365.414 1.084.751 2.657.751 1.21 0 1.902-.394 2.344-.938.475-.584.742-1.44.878-2.497Z" />
              </svg>
            )
          },
          {
            num: '06',
            type: 'SOCIAL AI',
            name: 'Grok',
            svg: (
              <svg
                className="w-5 h-5 text-ink"
                viewBox="0 0 35 33"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.2371 21.0407L24.3186 12.8506C24.8619 12.4491 25.6384 12.6057 25.8973 13.2294C27.2597 16.5185 26.651 20.4712 23.9403 23.1851C21.2297 25.8989 17.4581 26.4941 14.0108 25.1386L10.2449 26.8843C15.6463 30.5806 22.2053 29.6665 26.304 25.5601C29.5551 22.3051 30.562 17.8683 29.6205 13.8673L29.629 13.8758C28.2637 7.99809 29.9647 5.64871 33.449 0.844576C33.5314 0.730667 33.6139 0.616757 33.6964 0.5L29.1113 5.09055V5.07631L13.2343 21.0436" />
                <path d="M10.9503 23.0313C7.07343 19.3235 7.74185 13.5853 11.0498 10.2763C13.4959 7.82722 17.5036 6.82767 21.0021 8.2971L24.7595 6.55998C24.0826 6.07017 23.215 5.54334 22.2195 5.17313C17.7198 3.31926 12.3326 4.24192 8.67479 7.90126C5.15635 11.4239 4.0499 16.8403 5.94992 21.4622C7.36924 24.9165 5.04257 27.3598 2.69884 29.826C1.86829 30.7002 1.0349 31.5745 0.36364 32.5L10.9474 23.0341" />
              </svg>
            )
          },
          {
            num: '07',
            type: 'OPEN MODEL',
            name: 'Deepseek',
            svg: (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#5786FE">
                <path d="M23.748 4.651c-.254-.124-.364.113-.512.233-.051.04-.094.09-.137.137-.372.397-.806.657-1.373.626-.829-.046-1.537.214-2.163.848-.133-.782-.575-1.248-1.247-1.548-.352-.155-.708-.311-.955-.65-.172-.24-.219-.509-.305-.774-.055-.16-.11-.323-.293-.35-.2-.031-.278.136-.356.276-.313.572-.434 1.202-.422 1.84.027 1.436.633 2.58 1.838 3.393.137.094.172.187.129.323-.082.28-.18.553-.266.833-.055.179-.137.218-.328.14a5.5 5.5 0 0 1-1.737-1.179c-.857-.828-1.631-1.743-2.597-2.46a12 12 0 0 0-.689-.47c-.985-.957.13-1.743.387-1.836.27-.098.094-.433-.778-.428-.872.003-1.67.295-2.687.685a3 3 0 0 1-.465.136 9.6 9.6 0 0 0-2.883-.101c-1.885.21-3.39 1.1-4.497 2.622C.082 8.776-.231 10.854.152 13.02c.403 2.284 1.568 4.175 3.36 5.653 1.857 1.533 3.997 2.284 6.438 2.14 1.482-.085 3.132-.284 4.994-1.86.47.234.962.328 1.78.398.629.058 1.235-.031 1.705-.129.735-.155.684-.836.418-.961-2.155-1.004-1.682-.595-2.112-.926 1.095-1.295 2.768-3.598 3.284-6.733.05-.346.115-.834.108-1.114-.004-.171.035-.238.23-.257a4.2 4.2 0 0 0 1.545-.475c1.397-.763 1.96-2.016 2.093-3.517.02-.23-.004-.467-.247-.588M11.58 18.168c-2.088-1.642-3.101-2.183-3.52-2.16-.39.024-.32.472-.234.763.09.288.207.487.371.74.114.167.192.416-.113.603-.673.416-1.842-.14-1.897-.168-1.361-.801-2.5-1.86-3.301-3.306-.775-1.393-1.225-2.888-1.299-4.482-.02-.385.094-.522.477-.592a4.7 4.7 0 0 1 1.53-.038c2.131.311 3.946 1.264 5.467 2.774.868.86 1.525 1.887 2.202 2.89.72 1.066 1.494 2.082 2.48 2.915.348.291.626.513.892.677-.802.09-2.14.109-3.055-.615zm1.001-6.44a.306.306 0 0 1 .415-.287.3.3 0 0 1 .113.074.3.3 0 0 1 .086.214c0 .17-.136.307-.308.307a.303.303 0 0 1-.306-.307m3.11 1.596c-.2.081-.4.151-.591.16a1.25 1.25 0 0 1-.798-.254c-.274-.23-.47-.358-.551-.758a1.7 1.7 0 0 1 .015-.588c.07-.327-.007-.537-.238-.727-.188-.156-.426-.199-.689-.199a.6.6 0 0 1-.254-.078.253.253 0 0 1-.114-.358 1 1 0 0 1 .192-.21c.356-.202.767-.136 1.146.016.352.144.618.408 1.001.782.392.451.462.576.685.915.176.264.336.536.446.848.066.194-.02.353-.25.45" />
              </svg>
            )
          },
          {
            num: '08',
            type: 'SEARCH OVERLAY',
            name: 'AI Overviews',
            svg: (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
            )
          }
        ];
        return (
          <section className="py-24 md:py-36 border-t border-border bg-paper relative">
            <div className="max-w-[1400px] mx-auto px-6 md:px-16">
              <div className="max-w-4xl mb-16 md:mb-24">
                <RevealText>
                  <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4 font-semibold">PLATFORMS</p>
                </RevealText>
                <RevealText delay={0.1}>
                  <h2 className="font-syne text-3xl md:text-5xl lg:text-6xl font-800 tracking-[-0.03em] leading-tight">
                    Eight surfaces where buyers{" "}<br className="hidden sm:block" />
                    <span className="text-signal">ask, compare, and decide.</span>
                  </h2>
                </RevealText>
                <RevealText delay={0.2}>
                  <p className="font-lato text-base md:text-lg text-text-secondary mt-6 max-w-2xl leading-[1.85]">
                    We track, optimize, and earn citations across the eight AI surfaces that already shape your shortlist.
                  </p>
                </RevealText>
              </div>
              <div className="border-t border-l border-border/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden">
                {platforms.map((p, idx) => (
                  <div key={idx} className="p-8 md:p-10 border-r border-b border-border/80 flex flex-col justify-between min-h-[190px] hover:bg-surface/30 transition-all duration-300">
                    <div className="flex items-center gap-2 text-[10px] tracking-[0.16em] uppercase text-text-muted font-bold">
                      <span>{p.num}</span>
                      <span className="w-1.5 h-1.5 bg-signal flex-shrink-0" />
                      <span>{p.type}</span>
                    </div>
                    <div className="flex items-center gap-4 mt-8">
                      <div className="w-9 h-9 rounded-lg bg-surface/50 border border-border/40 flex items-center justify-center shadow-[inset_0_1px_4px_rgba(0,0,0,0.015)]">
                        {p.svg}
                      </div>
                      <span className="font-syne text-lg font-800 tracking-tight text-ink">{p.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* ── WHO WE WORK WITH ── */}
      {extra.visualExample && (() => {
        const whoWeWorkData: Record<string, {
          headline: string;
          sub: string;
          industries: { num: string; title: string; tagline: string; query: string; audits: string[] }[];
        }> = {
          seo: {
            headline: 'Companies that need to be on the shortlist.',
            sub: 'Search visibility matters most where intent is highest. We work with brands competing for the queries below.',
            industries: [
              { num: '01', title: 'B2B SaaS', tagline: 'Comparison prompts decide the list.', query: 'best CRM for series B teams under 50', audits: ['Comparisons & alternatives', 'Category-leader prompts', 'Integration questions'] },
              { num: '02', title: 'Professional Services', tagline: 'Authority signals decide the call.', query: 'best SEO agency for enterprise brands', audits: ['Practice-area positioning', 'Authority & expertise signals', 'Client outcome pages'] },
              { num: '03', title: 'Funded Startups', tagline: 'Google frames you before the analyst does.', query: 'top series A devtools companies 2026', audits: ['Category-creation narrative', 'Founder & investor signals', 'Comparison clarity'] },
              { num: '04', title: 'Healthcare', tagline: 'Trust signals beat brand awareness.', query: 'HIPAA-compliant telehealth platforms', audits: ['Compliance language', 'Clinical evidence sources', 'Provider directory signals'] },
              { num: '05', title: 'Fintech & Finance', tagline: 'Regulators shape the answer.', query: 'alternatives to Stripe for marketplaces', audits: ['Regulatory trust signals', 'Fee & feature comparisons', 'Integration depth'] },
              { num: '06', title: 'Cybersecurity', tagline: 'Google cites whoever the analysts cite.', query: 'best SIEM tools for mid-market', audits: ['Analyst coverage signals', 'Threat report citations', 'Review platform dominance'] },
              { num: '07', title: 'Ecommerce', tagline: 'Review synthesis is the new shelf.', query: 'best running shoes for plantar fasciitis', audits: ['Review aggregation signals', 'Product schema & structure', 'Category page authority'] },
              { num: '08', title: 'Local & Multi-Location', tagline: 'Recommendations get geographic.', query: 'top dermatologist in Brooklyn', audits: ['NAP consistency signals', 'Local content depth', 'Map & directory presence'] },
            ]
          },
          aeo: {
            headline: 'Brands that need to own the answer.',
            sub: 'Answer engine optimization matters most when buyers ask before they click. We work with brands that want to be the cited source.',
            industries: [
              { num: '01', title: 'B2B SaaS', tagline: 'AI cites the clearest explainer.', query: 'how does AI-powered helpdesk work', audits: ['FAQ schema coverage', 'Definitional content depth', 'Question-answer alignment'] },
              { num: '02', title: 'Professional Services', tagline: 'Expertise earns the citation.', query: 'what is the difference between AEO and SEO', audits: ['Thought leadership signals', 'Long-form explainer depth', 'Schema markup completeness'] },
              { num: '03', title: 'Funded Startups', tagline: 'Be the definition of your category.', query: 'what is a usage-based pricing model', audits: ['Category-definition content', 'Comparison & contrast pages', 'Structured data coverage'] },
              { num: '04', title: 'Healthcare', tagline: 'Patients ask; AI answers.', query: 'what are the symptoms of early-stage diabetes', audits: ['Medical entity accuracy', 'Source credibility signals', 'Condition & treatment depth'] },
              { num: '05', title: 'Fintech & Finance', tagline: 'Complex questions need clear answers.', query: 'how does revenue-based financing work', audits: ['Regulated-term clarity', 'Jargon-to-plain-language gap', 'Feature explanation depth'] },
              { num: '06', title: 'Cybersecurity', tagline: 'Define the threat; own the answer.', query: 'what is a zero-trust network model', audits: ['Technical definition accuracy', 'Use-case scenario content', 'Threat taxonomy coverage'] },
              { num: '07', title: 'Ecommerce', tagline: 'Product questions become citations.', query: 'what fabric is best for athletic wear', audits: ['Product attribute depth', 'Buying-guide content', 'Material & spec schemas'] },
              { num: '08', title: 'Education & Training', tagline: 'Learning queries need trusted answers.', query: 'what coding language should I learn first', audits: ['Curriculum clarity signals', 'Outcome & ROI language', 'Comparison content depth'] },
            ]
          },
          geo: {
            headline: 'Brands that need to be recommended.',
            sub: 'Generative engine optimization matters most when AI models shortlist vendors. We help brands become the cited recommendation.',
            industries: [
              { num: '01', title: 'B2B SaaS', tagline: 'AI recommends the proven option.', query: 'best project management tool for remote teams', audits: ['Recommendation-signal density', 'Use-case clarity depth', 'Comparison page authority'] },
              { num: '02', title: 'Professional Services', tagline: 'Cited by AI, trusted by buyers.', query: 'best intellectual property law firm for startups', audits: ['Practice-area authority', 'Client outcome signals', 'Third-party citation coverage'] },
              { num: '03', title: 'Funded Startups', tagline: 'Get cited before the pitch deck.', query: 'top AI infrastructure companies to watch 2026', audits: ['Investor-facing signals', 'Media citation coverage', 'Category-leader narrative'] },
              { num: '04', title: 'Healthcare', tagline: 'Generative AI surfaces trusted providers.', query: 'best telehealth platform for chronic care management', audits: ['Accreditation signals', 'Clinical outcome citations', 'Provider credibility depth'] },
              { num: '05', title: 'Fintech & Finance', tagline: 'Compliance signals become recommendations.', query: 'best payment gateway for international SaaS', audits: ['Regulatory compliance signals', 'Integration partner citations', 'Security & trust language'] },
              { num: '06', title: 'Cybersecurity', tagline: 'AI recommends the most-cited vendor.', query: 'best endpoint security solution for SMBs', audits: ['Analyst report citations', 'Threat-response signals', 'Customer proof depth'] },
              { num: '07', title: 'Ecommerce', tagline: 'Product recommendations are earned.', query: 'best sustainable yoga mat brand', audits: ['Review synthesis signals', 'Brand value language', 'Product expert citations'] },
              { num: '08', title: 'Local & Multi-Location', tagline: 'Local recommendations go AI-first.', query: 'top family dentist near downtown Austin', audits: ['Local authority signals', 'Review aggregation coverage', 'Geographic entity depth'] },
            ]
          },
          'local-seo': {
            headline: 'Local businesses that deserve to be found.',
            sub: 'Local search intent is hyper-specific. We help businesses own the map pack, the AI answer, and the "near me" moment.',
            industries: [
              { num: '01', title: 'Restaurants & Hospitality', tagline: 'First result gets the reservation.', query: 'best Italian restaurant open now near me', audits: ['Google Business optimization', 'Menu schema coverage', 'Review velocity signals'] },
              { num: '02', title: 'Healthcare & Clinics', tagline: 'Patients choose the closest trusted provider.', query: 'urgent care clinic accepting walkins near me', audits: ['NAP consistency signals', 'Specialty & service depth', 'Insurance & hours clarity'] },
              { num: '03', title: 'Legal Services', tagline: 'Local trust wins the consult.', query: 'personal injury lawyer free consultation Brooklyn', audits: ['Local citation authority', 'Practice-area page depth', 'Review & credential signals'] },
              { num: '04', title: 'Home Services', tagline: 'Emergency queries need instant answers.', query: '24 hour plumber near me emergency', audits: ['Service-area page coverage', 'Emergency keyword signals', 'Availability & response time'] },
              { num: '05', title: 'Retail & Boutiques', tagline: 'In-store visits start online.', query: 'vintage clothing store open Saturday Chicago', audits: ['Inventory & hours schema', 'Neighborhood entity signals', 'Google Posts & offers'] },
              { num: '06', title: 'Fitness & Wellness', tagline: 'Class starts with a search.', query: 'yoga studio with beginners class near downtown', audits: ['Class schedule schema', 'Trainer authority signals', 'Amenity & facility depth'] },
              { num: '07', title: 'Real Estate', tagline: 'Local market expertise gets cited.', query: 'top real estate agent in Midtown Manhattan', audits: ['Neighborhood content depth', 'Listing & sold data signals', 'Agent authority coverage'] },
              { num: '08', title: 'Automotive', tagline: 'Service intent is local and urgent.', query: 'best auto repair shop near me for Honda', audits: ['Brand & model specificity', 'Service-type page depth', 'Review recency signals'] },
            ]
          }
        };

        const slug = solution.slug as keyof typeof whoWeWorkData;
        const wd = whoWeWorkData[slug] ?? whoWeWorkData.seo;

        return (
          <section className="py-24 md:py-36 border-t border-border">
            <div className="max-w-[1400px] mx-auto px-6 md:px-16">

              {/* Header */}
              <div className="max-w-4xl mb-16 md:mb-20">
                <RevealText>
                  <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4 font-semibold">WHO WE WORK WITH</p>
                </RevealText>
                <RevealText delay={0.1}>
                  <h2 className="font-syne text-3xl md:text-5xl lg:text-6xl font-800 tracking-[-0.03em] leading-tight">
                    {wd.headline.split('shortlist.').length > 1 ? (
                      <>{wd.headline.split('shortlist.')[0]}<span className="text-signal">shortlist.</span></>
                    ) : wd.headline.split('answer.').length > 1 ? (
                      <>{wd.headline.split('answer.')[0]}<span className="text-signal">answer.</span></>
                    ) : wd.headline.split('recommended.').length > 1 ? (
                      <>{wd.headline.split('recommended.')[0]}<span className="text-signal">recommended.</span></>
                    ) : wd.headline.split('found.').length > 1 ? (
                      <>{wd.headline.split('found.')[0]}<span className="text-signal">found.</span></>
                    ) : wd.headline}
                  </h2>
                </RevealText>
                <RevealText delay={0.2}>
                  <p className="font-lato text-base md:text-lg text-text-secondary mt-6 max-w-2xl leading-[1.85]">{wd.sub}</p>
                </RevealText>
              </div>

              {/* 4-col × 2-row card grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 border border-border/60 rounded-2xl overflow-hidden">
                {wd.industries.map((ind, idx) => (
                  <RevealText key={idx} delay={idx * 0.05} duration={1.3}>
                    <div className="bg-paper hover:bg-surface/40 transition-colors duration-500 p-6 md:p-7 flex flex-col gap-5 h-full">

                      {/* Number badge */}
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-signal flex-shrink-0" />
                        <span className="font-mono text-[10px] tracking-widest text-text-muted font-bold">{ind.num}</span>
                      </div>

                      {/* Title + tagline */}
                      <div>
                        <h3 className="font-syne text-lg md:text-xl font-800 tracking-tight text-ink mb-1">{ind.title}</h3>
                        <p className="font-lato text-sm text-text-secondary leading-snug">{ind.tagline}</p>
                      </div>

                      {/* Buyers ask chip */}
                      <div>
                        <p className="font-lato text-[9.5px] tracking-[0.18em] uppercase text-text-muted font-semibold mb-2">BUYERS ASK</p>
                        <div className="bg-ink rounded-md px-3 py-2.5 flex items-start gap-2">
                          <span className="text-signal font-mono text-xs mt-0.5 flex-shrink-0">›</span>
                          <span className="font-mono text-[11px] text-paper leading-snug">{ind.query}</span>
                        </div>
                      </div>

                      {/* We audit for */}
                      <div>
                        <p className="font-lato text-[9.5px] tracking-[0.18em] uppercase text-text-muted font-semibold mb-2">WE AUDIT FOR</p>
                        <ul className="space-y-1">
                          {ind.audits.map((a, i) => (
                            <li key={i} className="flex items-start gap-2 font-lato text-xs text-text-secondary">
                              <span className="text-signal font-bold mt-[1px] flex-shrink-0">+</span>
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </RevealText>
                ))}
              </div>

            </div>
          </section>
        );
      })()}

      {/* ── 4. ROADMAP ── */}
      <section className="py-32 md:py-48 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="mb-32 md:mb-28">
            <RevealText>
              <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">IMPLEMENTATION</p>
            </RevealText>
            <RevealText delay={0.1}>
              <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em]">
                How we do it<span className="text-signal">.</span>
              </h2>
            </RevealText>
          </div>
          <div className="space-y-0">
            {solution.roadmap.map((phase, i) => (
              <RevealText key={phase.phase} delay={i * 0.1} duration={1.4}>
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.8, ease: slowEase }}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-10 md:py-36 border-b border-border"
                >
                  <div className="md:col-span-2">
                    <span className="font-lato text-[11px] tracking-[0.2em] uppercase text-signal font-semibold">
                      Phase {phase.phase}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-syne text-xl md:text-2xl font-800 tracking-tight group-hover:text-signal transition-colors duration-[1200ms]">
                      {phase.title}
                    </h3>
                  </div>
                  <div className="md:col-span-5 md:col-start-8">
                    <p className="font-lato text-sm md:text-base text-text-secondary leading-[1.85]">
                      {phase.description}
                    </p>
                  </div>
                </motion.div>
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. EXPECTED OUTCOMES ── */}
      <section className="py-32 md:py-48 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
            <div className="md:col-span-4 md:sticky md:top-40 md:self-start">
              <RevealText>
                <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">OUTCOMES</p>
              </RevealText>
              <RevealText delay={0.1}>
                <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em]">
                  What to expect<span className="text-signal">.</span>
                </h2>
              </RevealText>
              <RevealText delay={0.2}>
                <p className="font-lato text-sm text-text-muted leading-[1.85] mt-6">
                  Every outcome listed is drawn from verified client engagements across this service area.
                </p>
              </RevealText>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              {solution.outcomes.map((o, i) => (
                <RevealText key={o} delay={0.1 + i * 0.1} duration={1.4}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.8, ease: slowEase }}
                    className="group flex items-start gap-6 py-8 border-b border-border"
                  >
                    <span className="font-syne text-3xl md:text-4xl font-800 text-signal/20 leading-none select-none flex-shrink-0 group-hover:text-signal/40 transition-colors duration-500">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="font-syne text-xl md:text-2xl font-800 tracking-tight text-ink leading-tight group-hover:text-signal transition-colors duration-[1200ms] pt-1">
                      {o}
                    </p>
                  </motion.div>
                </RevealText>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. PLATFORM COMPATIBILITY ── */}
      <section className="py-32 md:py-48 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="mb-32 md:mb-28">
            <RevealText>
              <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">INTEGRATIONS</p>
            </RevealText>
            <RevealText delay={0.1}>
              <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em]">
                Platform compatibility<span className="text-signal">.</span>
              </h2>
            </RevealText>
          </div>
          <div className="space-y-0">
            {extra.platforms.map((p, i) => (
              <RevealText key={p.name} delay={i * 0.08} duration={1.2}>
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.8, ease: slowEase }}
                  className="group flex flex-col md:flex-row md:items-center md:justify-between gap-3 py-7 border-b border-border"
                >
                  <div className="flex items-center gap-5">
                    <span className="font-lato text-[10px] text-text-muted w-6 flex-shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-syne text-lg md:text-xl font-800 tracking-tight group-hover:text-signal transition-colors duration-[1200ms]">
                      {p.name}
                    </span>
                  </div>
                  <span className="font-lato text-sm text-text-muted md:text-right max-w-xs md:ml-12 leading-relaxed">
                    {p.note}
                  </span>
                </motion.div>
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. EXAMPLE / DEMONSTRATION ── */}
      {/* <section className="py-32 md:py-48 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
            <div className="md:col-span-4 md:sticky md:top-40 md:self-start">
              <RevealText>
                <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">IN PRACTICE</p>
              </RevealText>
              <RevealText delay={0.1}>
                <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em]">
                  How it works<span className="text-signal">.</span>
                </h2>
              </RevealText>
              <RevealText delay={0.2}>
                <p className="font-lato text-sm text-text-muted leading-[1.85] mt-6">
                  {extra.example.title}
                </p>
              </RevealText>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              {extra.example.steps.map((step, i) => (
                <RevealText key={i} delay={0.1 + i * 0.08} duration={1.4}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.8, ease: slowEase }}
                    className="group flex items-start gap-6 py-7 border-b border-border"
                  >
                    <span className="font-lato text-[10px] tracking-[0.15em] text-signal font-bold flex-shrink-0 mt-1">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="font-lato text-sm md:text-base text-text-secondary group-hover:text-ink transition-colors duration-[1200ms] leading-[1.85]">
                      {step}
                    </p>
                  </motion.div>
                </RevealText>
              ))} */}

      {/* Visual Example Mock Block */}
      {/* {extra.visualExample && (
                <RevealText delay={0.3} duration={1.4}>
                  <div className="mt-16 bg-surface/20 backdrop-blur-3xl border border-border/50 rounded-2xl p-6 md:p-8">
                    <p className="font-lato text-[10px] tracking-[0.15em] uppercase text-signal font-bold mb-3">
                      {extra.visualExample.label}
                    </p>
                    <p className="font-lato text-sm text-text-muted leading-[1.7] mb-8 max-w-lg">
                      {extra.visualExample.description}
                    </p>
                    <div className="space-y-4">
                      {extra.visualExample.lines.map((line, i) => (
                        <div key={i} className={`flex flex-col md:flex-row md:items-start gap-2 md:gap-6 py-4 border-t border-border/30 ${line.highlight ? 'bg-signal/[0.03] -mx-4 px-4 rounded-lg border-t-0' : ''}`}>
                          <span className="font-lato text-[9px] tracking-[0.15em] uppercase text-text-muted w-24 flex-shrink-0 pt-1">
                            {line.role}
                          </span>
                          <span className={`font-lato text-sm leading-[1.7] ${line.highlight ? 'text-signal font-semibold' : 'text-text-secondary'}`}>
                            {line.content}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </RevealText>
              )}
            </div>
          </div>
        </div>
      </section> */}

      {/* ── 8. CASE STUDY ── */}
      <section className="py-32 md:py-48 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="mb-28 md:mb-24">
            <RevealText>
              <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">PROOF</p>
            </RevealText>
            <RevealText delay={0.1}>
              <h2 className="font-syne text-3xl md:text-5xl font-800 tracking-[-0.03em]">
                Real results<span className="text-signal">.</span>
              </h2>
            </RevealText>
          </div>

          <motion.div
            whileHover={{ x: 4 }}
            transition={{ duration: 0.8, ease: slowEase }}
            className="group"
          >
            {/* Meta row */}
            <div className="flex items-center gap-3 mb-8">
              <span className="font-lato text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 rounded bg-signal/10 text-signal border border-signal/20 font-semibold">
                {relatedCaseStudy.industry}
              </span>
              <span className="font-lato text-[11px] text-text-muted tracking-wider uppercase font-bold">
                {relatedCaseStudy.client}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-syne text-2xl md:text-4xl font-800 tracking-tight mb-6 group-hover:text-signal transition-colors duration-[1200ms]">
              {relatedCaseStudy.title}
            </h3>

            {/* Overview */}
            <p className="font-lato text-base text-text-secondary leading-[1.85] max-w-3xl mb-10">
              {relatedCaseStudy.overview}
            </p>

            {/* Challenge / Solution two-column */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-border mb-10">
              <div className="py-8 md:pr-12 md:border-r border-border">
                <p className="font-lato text-[10px] tracking-[0.16em] uppercase text-text-muted font-semibold mb-3">The Challenge</p>
                <p className="font-lato text-sm text-text-secondary leading-[1.85]">{relatedCaseStudy.challenge}</p>
              </div>
              <div className="py-8 md:pl-12">
                <p className="font-lato text-[10px] tracking-[0.16em] uppercase text-signal font-semibold mb-3">The Solution</p>
                <p className="font-lato text-sm text-text-secondary leading-[1.85]">{relatedCaseStudy.solution}</p>
              </div>
            </div>

            {/* Results */}
            <div className="border-t border-border pt-8 mb-10">
              <p className="font-lato text-[10px] tracking-[0.16em] uppercase text-text-muted font-semibold mb-5">Key Results</p>
              <div className="space-y-0">
                {relatedCaseStudy.results.map((r, i) => (
                  <RevealText key={i} delay={i * 0.07}>
                    <div className="flex items-center gap-4 py-4 border-b border-border/40 last:border-b-0">
                      <span className="text-signal font-bold select-none">✓</span>
                      <span className="font-lato text-sm md:text-base text-text-secondary">{r}</span>
                    </div>
                  </RevealText>
                ))}
              </div>
            </div>

            {/* CTA to full case study */}
            <a
              href={`/case-studies/${relatedCaseStudy.slug}`}
              className="font-lato text-sm font-semibold text-signal flex items-center gap-1.5 hover:text-ink transition-colors duration-300"
            >
              Read the Full Case Study
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      {extra.visualExample && (() => {
        const faqData: Record<string, { q: string; a: string }[]> = {
          seo: [
            { q: 'Is this the same as a traditional SEO audit?', a: 'No. Traditional SEO audits focus on rankings, pages, traffic, and technical health. This audit focuses on how AI systems describe, cite, compare, and recommend your brand in the moments buyers ask AI who to trust.' },
            { q: 'Which AI platforms do you optimize for?', a: 'ChatGPT, Perplexity, Gemini, Claude, Copilot, Grok, and Google AI Overviews. The exact mix is adjusted based on your category and where your buyers are actually searching.' },
            { q: 'Can you guarantee we rank #1 on Google?', a: 'No agency can guarantee specific rankings. What we guarantee is a rigorous process — comprehensive audits, evidence-based fixes, and clear reporting — so your site earns more visibility over time.' },
            { q: 'Can our team implement the recommendations?', a: 'Yes. The action plan is designed for in-house SEO, content, and web teams. We can also support execution through a Growth or Program engagement when that\'s a better fit.' },
          ],
          aeo: [
            { q: 'What exactly is Answer Engine Optimization?', a: 'AEO is the practice of structuring your content, schema, and authority signals so AI answer engines — ChatGPT, Gemini, Perplexity, and others — cite your brand when buyers ask questions in your category.' },
            { q: 'Which answer engines do you optimize for?', a: 'ChatGPT, Perplexity, Gemini, Claude, Copilot, Grok, and Google AI Overviews. We adjust the platform mix based on where your buyers actually ask questions.' },
            { q: 'Can you guarantee AI will cite us?', a: 'No. No agency can guarantee exact AI outputs — models update constantly. What we can guarantee is that we identify every signal that influences citation likelihood and give you a clear roadmap to improve them.' },
            { q: 'How long before we see results?', a: 'Most clients see measurable citation improvements within 60–90 days of implementing our recommendations. Full authority-building typically takes 3–6 months depending on category competition.' },
          ],
          geo: [
            { q: 'What makes GEO different from SEO or AEO?', a: 'GEO focuses specifically on earning recommendations inside generative AI responses — not just being indexed or cited once. It\'s about becoming the default brand a model surfaces when buyers ask for a vendor recommendation.' },
            { q: 'Which generative platforms do you cover?', a: 'ChatGPT, Perplexity, Gemini, Claude, Copilot, Grok, and Google AI Overviews. We track recommendation share across all major surfaces and prioritize the ones where your buyers are active.' },
            { q: 'Can you guarantee AI will recommend us?', a: 'No agency can guarantee specific AI outputs. What we can do is systematically improve every signal that influences whether a model recommends your brand — and show you exactly where you stand relative to competitors.' },
            { q: 'Can our team implement the GEO roadmap?', a: 'Yes. The roadmap is designed for in-house content, SEO, and PR teams. We can also support execution directly through a Growth or Program engagement.' },
          ],
          'local-seo': [
            { q: 'Is local SEO still relevant with AI search?', a: 'More than ever. AI-powered local answers (Google AI Overviews, ChatGPT with browsing, Perplexity) pull heavily from local signals — GBP, reviews, citations, NAP consistency. Local SEO now directly feeds AI recommendation visibility.' },
            { q: 'Which platforms do you optimize for?', a: 'Google Business Profile, Apple Maps, Bing Places, Yelp, and key vertical directories — as well as Google AI Overviews, ChatGPT, and Perplexity for local query answers. We prioritize based on where your buyers actually search.' },
            { q: 'Can you guarantee map pack rankings?', a: 'No. Local rankings depend on proximity, relevance, and prominence signals that we optimize but don\'t control. We guarantee a systematic process and clear reporting — most clients see measurable map pack improvements within 60–90 days.' },
            { q: 'Do you work with multi-location businesses?', a: 'Yes. We have a dedicated multi-location framework that manages on a per-location basis — including GBP optimization, localized content, and citation consistency — scaled to 10 or 10,000 locations.' },
          ],
        };

        const slug = solution.slug as keyof typeof faqData;
        const faqs = faqData[slug] ?? faqData.seo;

        return (
          <section className="py-24 md:py-36 border-t border-border">
            <div className="max-w-[1400px] mx-auto px-6 md:px-16">

              {/* Header */}
              <div className="mb-14 md:mb-16">
                <RevealText>
                  <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-6 font-semibold">QUESTIONS</p>
                </RevealText>
                <RevealText delay={0.1}>
                  <h2 className="font-syne text-3xl md:text-5xl lg:text-[3.5rem] font-800 tracking-[-0.03em] leading-tight max-w-3xl">
                    What teams ask before they request an audit
                  </h2>
                </RevealText>
              </div>

              {/* Q&A rows */}
              <div className="border-t border-border">
                {faqs.map((item, idx) => (
                  <RevealText key={idx} delay={idx * 0.08} duration={1.3}>
                    <div className="grid grid-cols-12 gap-6 md:gap-12 py-10 md:py-12 border-b border-border/60">
                      {/* Number */}
                      <div className="col-span-12 md:col-span-1">
                        <span className="font-mono text-[10px] tracking-widest text-text-muted font-bold">
                          Q.{String(idx + 1).padStart(2, '0')}
                        </span>
                      </div>
                      {/* Question */}
                      <div className="col-span-12 md:col-span-4">
                        <p className="font-syne text-lg md:text-xl font-700 tracking-tight text-ink leading-snug">
                          {item.q}
                        </p>
                      </div>
                      {/* Answer */}
                      <div className="col-span-12 md:col-span-6 md:col-start-7">
                        <p className="font-lato text-sm md:text-base text-text-secondary leading-[1.85]">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </RevealText>
                ))}
              </div>

            </div>
          </section>
        );
      })()}

      {/* ── 9. FINAL CTA ── */}
      <section className="relative py-32 md:py-48 border-t border-border overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-signal/[0.025] blur-[220px] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-8">
              <RevealText>
                <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-6">GET STARTED</p>
              </RevealText>
              <RevealText delay={0.1}>
                <h2 className="font-syne text-4xl md:text-6xl font-800 tracking-[-0.03em] leading-tight mb-8">
                  Ready to deploy {solution.shortTitle} for your business<span className="text-signal">?</span>
                </h2>
              </RevealText>
              <RevealText delay={0.2}>
                <p className="font-lato text-base md:text-lg text-text-secondary leading-[1.85] max-w-lg mb-32">
                  Book a 30-minute discovery call. Our founders will audit your current position, identify the biggest opportunities, and map out a custom {solution.shortTitle} roadmap — free, with no commitment.
                </p>
              </RevealText>
              <RevealText delay={0.3}>
                <div className="flex flex-col items-start gap-4">
                  <MagneticButton strength={0.4}>
                    <a href="/contact" className="group flex items-center gap-4">
                      <span className="w-12 h-12 rounded-full bg-ink flex items-center justify-center group-hover:bg-signal transition-colors duration-[1200ms]">
                        <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} className="text-paper text-sm">→</motion.span>
                      </span>
                      <span className="font-lato text-sm font-medium text-ink">Book a Free Discovery Call</span>
                    </a>
                  </MagneticButton>
                  <MagneticButton strength={0.3}>
                    <a href="/case-studies" className="font-lato text-sm text-text-muted hover:text-ink transition-colors duration-700 sig-hover">Read Case Studies</a>
                  </MagneticButton>
                </div>
              </RevealText>
            </div>
          </div>
        </div>
      </section>

    </PageTransition >
  );
}

