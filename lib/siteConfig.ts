// ── Brand Identity ────────────────────────────────────────
export const siteConfig = {
  name: 'Zesh Agency',
  tagline: 'Strategic Growth Consultancy',
  headline: 'Growth, marketed.',
  description: 'We scale brands through high-converting web engineering, search engine optimization (SEO), and generative search presence (AEO & GEO).',
  email: 'Shahana@zeshagency.com',
  careersEmail: 'Shahana@zeshagency.com',
  year: 2026,
  social: ['Twitter', 'LinkedIn', 'Dribbble'],
} as const;

// ── Offices ───────────────────────────────────────────────
export const offices = [
  { city: 'New York', type: 'HQ', email: 'Shahana@zeshagency.com' },
  { city: 'London', type: 'Studio', email: 'Shahana@zeshagency.com' },
  { city: 'Tokyo', type: 'Studio', email: 'Shahana@zeshagency.com' },
] as const;

export const citiesNav = [
  { label: 'Dubai', path: '/location/dubai' },
  { label: 'Abu Dhabi', path: '/location/abudhabi' },
  { label: 'San Jose', path: '/location/sanjose' },
  { label: 'Texas', path: '/location/texas' },
  { label: 'Fremont', path: '/location/fremont' },
  { label: 'Pleasanton', path: '/location/pleasanton' },
  { label: 'New York', path: '/location/newyork' },
  { label: 'London', path: '/location/london' },
  { label: 'Sydney', path: '/location/sydney' },
  { label: 'Mumbai', path: '/location/mumbai' },
  { label: 'Riyadh', path: '/location/riyadh' },
  { label: 'Johannesburg', path: '/location/johannesburg' },
] as const;

// ── Navigation ────────────────────────────────────────────
export const navLinks = [
  { label: 'Services', path: '/services' },
  { label: 'Industries', path: '/industries' },
  { label: 'Locations', path: '/location/dubai' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'About', path: '/about' },
  { label: 'Resources', path: '/blog' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
] as const;

// ── Hero Section ──────────────────────────────────────────
export const heroContent = {
  badge: 'Trusted by brands backed by META and Shark Tank',
  headline: 'Empowering Businesses with Creative, Marketing & Technology Solutions',
  description: 'Trusted by million-dollar enterprises and powered by top-tier expertise.',
  primaryCTA: { label: 'Schedule a Free Consultation', path: '/contact' },
  secondaryCTA: { label: 'View Case Studies', path: '/case-studies' },
  microcopy: 'Trusted by billion-dollar enterprises and powered by top-tier expertise.',
} as const;

// ── Trust Bar ─────────────────────────────────────────────
export const trustLabel = 'Retained by leading brands.';

export const trustClients = [
  'SaaS Platforms', 'Enterprise Tech', 'Luxury Real Estate', 'Medical Clinics',
  'Fortune 500', 'Healthcare Networks', 'Architecture Firms', 'Professional Services',
] as const;

export const trustLogos = [
  { src: '/client-logos/Goldmine.png', alt: 'Goldmine' },
  { src: '/client-logos/Heita.png', alt: 'Heita' },
  { src: '/client-logos/Makobrew.png', alt: 'Makobrew' },
  { src: '/client-logos/Meetstream.png', alt: 'Meetstream' },
  { src: '/client-logos/Pawparazzi.png', alt: 'Pawparazzi' },
  { src: '/client-logos/Pincha.png', alt: 'Pincha' },
  { src: '/client-logos/bajaj.png', alt: 'Bajaj' },
  { src: '/client-logos/nyxw.png', alt: 'NYX' },
  { src: '/client-logos/saarthee.png', alt: 'Saarthee' },
  { src: '/client-logos/uleadspace.png', alt: 'UleadSpace' },
  { src: '/client-logos/sdb.png', alt: 'SDB' },
  { src: '/client-logos/shri_ram_school.png', alt: 'Shri Ram School' },
  { src: '/client-logos/tata.png', alt: 'Tata' },
  { src: '/client-logos/xarwin.svg', alt: 'Xarwin' },
  { src: '/client-logos/hafsa logo.png', alt: 'Hafsa' },
] as const;

// ── Stats ─────────────────────────────────────────────────
export const stats = [
  { value: '+92%', label: 'Brand Recall Growth', icon: 'Megaphone' },
  { value: '+245%', label: 'Search Visibility Growth', icon: 'Search' },
  { value: '3.8x', label: 'Inbound Lead Growth', icon: 'Magnet' },
  { value: '$45M+', label: 'Client Revenue Impact', icon: 'DollarSign' },
] as const;

// ── Values ────────────────────────────────────────────────
export const values = [
  { title: 'Direct Communication', description: 'We do not use corporate euphemisms or hide behind marketing fluff. We tell you exactly what is failing, why it\'s failing, and how we are correcting it.' },
  { title: 'Senior Execution Only', description: 'Your systems are designed, coded, and optimized under direct founder oversight. Our founders personally strategize and supervise every step.' },
  { title: 'Revenue Alignment', description: 'Pageviews mean nothing if your sales demo pipeline is empty. Every keyword we target and page we build is chosen because it connects to an active buyer.' },
  { title: 'Operational Respect', description: 'We believe great work happens when talented operators are given the quiet focus to solve complex problems. We meet weekly, execute quickly, and respect your team\'s focus.' },
] as const;

// ── Why Choose Us ─────────────────────────────────────────
export const reasons = [
  {
    number: '01', title: 'Strategic Transparency',
    description: 'We don\'t hide performance data behind marketing jargon. You get direct access to real-time dashboards showing pipeline value, client acquisition cost (CAC), and exact ranking distribution.'
  },
  {
    number: '02', title: 'Founder Oversight',
    description: 'Your systems are designed, coded, and optimized under direct founder oversight. Our founders personally strategize and supervise every step to ensure absolute technical and strategic alignment.'
  },
  {
    number: '03', title: 'Retainer Flexibility',
    description: 'No 1-year or 6-month retainer traps — our relationships are built on continuous value and trust. If we aren\'t moving the needle, we adjust the roadmap dynamically.'
  },
] as const;

export const aboutStats = [
  { value: '80+', label: 'Brand Clients' },
  { value: '15+', label: 'Industries' },
  { value: '12+', label: 'Countries' },
  { value: '8+', label: 'Years' },
] as const;

// ── Solutions ─────────────────────────────────────────────
export interface RoadmapPhase {
  phase: string;
  title: string;
  description: string;
}

export interface Solution {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  features: string[];
  outcomes: string[];
  roadmap: RoadmapPhase[];
}

export const solutions: Solution[] = [
  {
    slug: 'seo', title: 'Search Engine Optimization', shortTitle: 'SEO',
    tagline: 'Technical structures that outrank competitors.',
    description: 'Modern SEO is a technical battle. Search engines favor lightning-fast page loading speeds, semantic content depth, and strict structural hierarchy. We build programmatic frameworks that make indexing effortless for crawlers.',
    features: ['Technical SEO Architecture', 'Intent-First Content Clusters', 'Programmatic Hub Development', 'Competitor Search Theft', 'Core Web Vitals Engineering', 'Search Console Refinement'],
    outcomes: ['+312% average organic traffic growth', 'Top-3 placement for core intent terms', 'Elimination of dependency on paid keyword auctions'],
    roadmap: [
      { phase: '01', title: 'Code Architecture Correction', description: 'Re-coding file structures, correcting core web vitals, and eliminating server bottlenecks.' },
      { phase: '02', title: 'Programmatic Hub Deployment', description: 'Deployment of intent-first programmatic landing hubs and high-value search assets.' },
      { phase: '03', title: 'Indexation & Refinement', description: 'Indexation scans verification, analytics tag testing, and search console refinement.' },
    ],
  },
  {
    slug: 'web-dev', title: 'Website Development', shortTitle: 'Web Dev',
    tagline: 'Zero-bloat static engines built for speed and conversions.',
    description: 'Most websites are weighed down by heavy WordPress plugins and unoptimized code structures. We build on modern static stacks using lightweight vanilla HTML, CSS, and clean JavaScript — designed for crawler indexing and user experience.',
    features: ['Headless Static Development', 'Frictionless Intake Funnels', 'Core Web Vitals Engineering', 'Conversion Pipeline Engineering', 'API CRM Integration', 'PageSpeed Optimization'],
    outcomes: ['Average load speeds under 0.5s', 'Conversion rate increases up to 40%', 'Zero code dependency on heavy third-party plugins'],
    roadmap: [
      { phase: '01', title: 'Speed & UX Audit', description: 'Speed bottleneck analysis, intake form UX wireframes, and responsive schema mapping.' },
      { phase: '02', title: 'Headless Build', description: 'Headless frontend code engineering using modern CSS/JS libraries.' },
      { phase: '03', title: 'Integration & Validation', description: 'API CRM connections, database field mappings, and PageSpeed validation.' },
    ],
  },
  {
    slug: 'google-ads',
    title: 'Google Ads & Paid Search',
    shortTitle: 'Google Ads',
    tagline: 'High-intent paid traffic that converts immediately.',
    description: 'Organic search strategy takes time to mature. Paid search campaigns intercept high-intent buyers instantly. We build, audit, and optimize Google Ads accounts with strict conversion tracking and zero-waste budget routing.',
    features: [
      'Search Campaign Architecture',
      'High-Intent Keyword Harvesting',
      'Landing Page Conversion Alignment',
      'Conversion Tracking Validation',
      'B2B Negative Keyword Scrubber',
      'Bid Strategy Calibration'
    ],
    outcomes: [
      'Lower cost-per-acquisition (CPA) on paid campaigns',
      'Significant increases in qualified demo requests and leads',
      'Elimination of budget waste on low-intent search queries'
    ],
    roadmap: [
      { phase: '01', title: 'Account & Audit Scans', description: 'Auditing legacy campaigns, mapping conversion track leaks, and identifying negative keyword drains.' },
      { phase: '02', title: 'Campaign Build & Alignment', description: 'Re-building campaign groups around high-intent ad units and configuring custom landing experiences.' },
      { phase: '03', title: 'Calibrate & Scale', description: 'Automating bid strategy rules, monitoring click-to-lead latency, and scaling top performers.' },
    ],
  },
  {
    slug: 'social-media', title: 'Social Media Management & Distribution', shortTitle: 'Social',
    tagline: 'Elevate executive authority where B2B buyers read.',
    description: 'High-value B2B buyers trust experienced operators. We write strategic case study insights and distribute them on LinkedIn and Twitter to position your executives as authoritative consultancies.',
    features: ['Executive Ghostwriting', 'Case Study Redistribution', 'Thought-Leadership Architecture', 'Intent-Driven Writing', 'Founder-Led Campaigns', 'Distribution Pipelines'],
    outcomes: ['Significant increases in profile views', 'Organic network growth', 'Qualified DMs from enterprise decision-makers'],
    roadmap: [
      { phase: '01', title: 'Voice Audit', description: 'Founder voice audits, content themes selection, and target profile planning.' },
      { phase: '02', title: 'Content Creation', description: 'Thought leadership article creation and case-study redistribution campaigns.' },
      { phase: '03', title: 'Publish & Grow', description: 'Automated publishing, follower growth audits, and direct-inquiry funnel sync.' },
    ],
  },
  {
    slug: 'aeo', title: 'Answer Engine Optimization', shortTitle: 'AEO',
    tagline: 'Securing citations inside conversational AI models.',
    description: 'Conversational models evaluate semantic trust networks. To win AEO, your brand must exist in high-authority reference databases, possess clean JSON-LD schemas, and maintain active, verified reviews that LLM scrapers scan.',
    features: ['LLM Reference Mapping', 'Conversational Prompt Auditing', 'Semantic Schema Declarations', 'Citation Tracking', 'Entity Relationship Mapping', 'Knowledge Graph Optimization'],
    outcomes: ['Direct citations in Siri, Claude, and ChatGPT', 'High-trust inbound requests', 'AI citation share increase'],
    roadmap: [
      { phase: '01', title: 'Citation Audit', description: 'Base recommendation audit across major LLM models and citation maps analysis.' },
      { phase: '02', title: 'Schema Engineering', description: 'Custom JSON-LD schema engineering and entity relationship graph declaration.' },
      { phase: '03', title: 'Sync & Track', description: 'Database nodes synchronization and live citation share tracking.' },
    ],
  },
  {
    slug: 'geo', title: 'Generative Engine Optimization', shortTitle: 'GEO',
    tagline: 'Aligning your brand with synthetic search queries.',
    description: 'Generative search engines compile multiple database queries to write real-time business summaries. We optimize your website structures so your domain is cited as the primary authority in AI-generated answers.',
    features: ['Retrieval-Augmented Graph Syncing', 'Perplexity Context Targeting', 'Real-Time AI Indexing Syncs', 'SGE Citation Audits', 'Context-Aware Optimization', 'AI Index Audit Monitoring'],
    outcomes: ['Verified citations in Google Gemini and Perplexity', 'Driving highly educated prospects to your pipeline', 'AI recommendation presence'],
    roadmap: [
      { phase: '01', title: 'Citation Audit', description: 'SGE citation audits and AI search indexing scan profiles mapping.' },
      { phase: '02', title: 'RAG Optimization', description: 'Coding retrieval-augmented generation (RAG) structural optimizations.' },
      { phase: '03', title: 'Monitor & Cover', description: 'Live context-aware recommendation monitoring and content coverage loops.' },
    ],
  },
  {
    slug: 'local-seo', title: 'Local SEO Dominance', shortTitle: 'Local SEO',
    tagline: 'Dominate local search maps and local organic intent.',
    description: 'Local search dominance requires precise geo-targeting. We construct localized schema graphs, optimize Google Business Profile assets, and deploy dynamic regional pages that load instantly for local prospects.',
    features: ['Google Map Pack Optimization', 'Programmatic Location Hubs', 'Local Review Acquisition Systems', 'Directory Synchronization', 'Regional Citation Building', 'Multi-Location Schema'],
    outcomes: ['#1 in target geo-coordinates', 'Significant increases in local calls', 'Clean local index coverage'],
    roadmap: [
      { phase: '01', title: 'Location Audit', description: 'Location coordinate maps analysis and Google Business Profile listing audits.' },
      { phase: '02', title: 'Hub Deployment', description: 'Programmatic local page deployment and regional directory synchronization.' },
      { phase: '03', title: 'Funnel Automation', description: 'Review funnel automation, map pack position monitoring, and local lead routing.' },
    ],
  },
  {
    slug: 'lead-gen', title: 'Scalable Lead Generation', shortTitle: 'Lead Gen',
    tagline: 'Predictable pipelines from high-intent inbound search.',
    description: 'High-converting lead gen combines intuitive UI layout with real-time database enrichment. We design multi-step intake forms that qualify buyers before scheduling calls, reducing sales friction.',
    features: ['Automated Intake Flows', 'HubSpot & CRM Syncing', 'Data Enrichment Tools', 'Intent Scoring', 'Dynamic Lead Routing', 'Attribution Dashboards'],
    outcomes: ['Reductions in unqualified meeting bookings', 'Higher conversion rates on intake pages', 'Automated pipeline attribution'],
    roadmap: [
      { phase: '01', title: 'CRM Audit', description: 'CRM intake workflow audits and funnel qualification mapping.' },
      { phase: '02', title: 'Form Engineering', description: 'Dynamic multi-step qualification form engineering and enrichment API sync.' },
      { phase: '03', title: 'Scoring & Test', description: 'Dynamic lead scoring calibration, CRM sync testing, and attribution dashboards.' },
    ],
  },
  {
    slug: 'consultation', title: 'High-Trust Consultation', shortTitle: 'Consulting',
    tagline: 'Principal-led workshops to unlock hidden revenue.',
    description: 'Most agencies pitch templates. We run database-backed analysis sessions where our founders examine your conversion funnels, code base bottlenecks, and design custom execution roadmaps.',
    features: ['Competitor Search Audits', 'Conversion Funnel Analysis', 'Technical Site Audits', 'ROI Modeling', 'Growth Blueprint Mapping', 'Principal-Led Strategy'],
    outcomes: ['Complete strategic clarity on visibility gaps', 'Detailed roadmaps to fix conversion drops', 'Immediate code optimization blueprints'],
    roadmap: [
      { phase: '01', title: 'Diagnostics', description: 'Growth metrics diagnostics, competitor search spend scans, and site auditing.' },
      { phase: '02', title: 'Workshop', description: 'Principal-led workshops, roadblock diagnostics, and custom blueprint mapping.' },
      { phase: '03', title: 'Oversight', description: 'Implementation oversight, monthly health checks, and strategic roadmap adjustments.' },
    ],
  },
];

// ── Industries ────────────────────────────────────────────
export interface Industry {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  challenges: string[];
  opportunities: string[];
  roadmap: RoadmapPhase[];
  results: string[];
}

export const industries: Industry[] = [
  {
    slug: 'saas', title: 'SaaS & Platforms', shortTitle: 'SaaS',
    tagline: 'Scale trial-to-paid and sales demo pipeline growth.',
    description: 'Intercept B2B evaluation traffic and build compounding search visibility. We capture active software buyers at the exact point of decision by aligning search intent with programmatic alternatives and structured entity network schemas.',
    challenges: ['Aggregator directory dominance capturing high-intent category terms', 'Low conversion rates from unqualified informational traffic', 'Gaps in AI search recommendations (AEO) due to missing digital footprints'],
    opportunities: ['Deploy programmatic comparison landing pages hosted on your own domain', 'Structure schemas to force citations inside ChatGPT, Claude, and Perplexity', 'Rank high for alternative queries to intercept competitor pipeline'],
    roadmap: [
      { phase: '01', title: 'Category Mapping', description: 'Auditing category keywords, search maps, and competitor visibility gaps.' },
      { phase: '02', title: 'Platform Setup', description: 'Deploying speed-optimized comparison templates and schema mapping.' },
      { phase: '03', title: 'Authority Scale', description: 'Establishing entity validation profiles and citations in reference graphs.' },
    ],
    results: ['+312% Organic Search traffic', '$1.2M Attributed pipeline growth', '#1 for 42 core comparison terms'],
  },
  {
    slug: 'healthcare-medical', title: 'Healthcare & Medical', shortTitle: 'Healthcare',
    tagline: 'Acquire patient bookings under strict medical search guidelines.',
    description: 'Establish ultimate trust and authority. We build clinical organic search pipelines fully aligned with Google\'s E-E-A-T and YMYL (Your Money Your Life) algorithms while claims are validated by local map placement.',
    challenges: ['Strict algorithmic filters deindexing medical content lacking verifiable authorship', 'Inconsistent NAP directory records causing local map pack exclusion', 'Complex treatment searches failing to convert due to low-trust page copy'],
    opportunities: ['Rank #1 local Map Pack for localized patient intent terms', 'Implement physician schema metadata linking profiles to trusted directories', 'Design clinical resource hubs that answer complex procedural queries'],
    roadmap: [
      { phase: '01', title: 'YMYL Alignment', description: 'Auditing medical content authorship and clinical credentialing signals.' },
      { phase: '02', title: 'Map Coordination', description: 'Standardizing NAP records and launching location clinic landing pages.' },
      { phase: '03', title: 'Review Pipelines', description: 'Deploying automated compliance-friendly patient feedback acquisition.' },
    ],
    results: ['+280% organic clinic bookings', 'Top-3 map pack dominance', '8/10 procedural terms rank #1'],
  },
  {
    slug: 'architecture-design', title: 'Architecture & Design Studios', shortTitle: 'architecture',
    tagline: 'Target high-budget spatial and residential design queries.',
    description: 'Showcase spatial vision to high-intent clients. We optimize image portfolios and coordinate keyword themes to capture developers and high-net-worth buyers doing visual research.',
    challenges: ['Standard SEO ignoring visual retrieval surfaces like Google Lens', 'Portfolio frameworks blocking organic search crawlers from indexation', 'Attracting hobbyist traffic instead of high-value commissioning clients'],
    opportunities: ['Implement metadata tagging on portfolio image blocks', 'Structure case studies around construction types and spatial coordinates',       'Rank for high-intent geographical searches from institutional design buyers'],
    roadmap: [
      { phase: '01', title: 'Asset Diagnostics', description: 'Portfolio indexing audits and search engine crawl budget optimization.' },
      { phase: '02', title: 'Image Tagging', description: 'Deploying high-speed AVIF imagery and programmatic image schema.' },
      { phase: '03', title: 'Lead Funneling', description: 'Optimizing high-budget spatial design intakes and request roadmaps.' },
    ],
    results: ['+180% project briefings', '#1 list for luxury spatial queries', '+320% visual search impressions'],
  },
  {
    slug: 'technology-ai', title: 'Technology & AI Systems', shortTitle: 'Tech & AI',
    tagline: 'Secure search engine citation dominance inside conversational tools.',
    description: 'Position technical products where developers and engineers search. We construct clean documentation directories and declare dense schema networks so your system gets recommended inside LLM answer platforms.',
    challenges: ['AI engines writing competitor summaries without citation links to your site', 'Rapid keyword shifting as developer terminology evolves weekly', 'Low-trust content templates written without deep developer insight'],
    opportunities: ['Format technical code examples for LLM retrieval and ingestion', 'Directly optimize developer documentation directories for high authority', 'Declare structural organization schemas for entity graph insertion'],
    roadmap: [
      { phase: '01', title: 'Syntax Auditing', description: 'Reviewing document structure, APIs, and JSON-LD schema layouts.' },
      { phase: '02', title: 'RAG Construction', description: 'Building context modules optimized for AI scanner data retrieval.' },
      { phase: '03', title: 'Validation Loops', description: 'Evaluating LLMs (ChatGPT, Claude) to verify citation rate improvements.' },
    ],
    results: ['42% representation in AI replies', '+185% developer account signups', 'Sub-0.4s documentation load speed'],
  },
  {
    slug: 'real-estate-development', title: 'Real Estate & Development', shortTitle: 'Real Estate',
    tagline: 'Dominate competitive property searches and bypass syndicators.',
    description: 'Capture active local and commercial buyers search intent. We deploy neighborhood search systems, coordinate local maps, and build speed-optimized project indices that bypass directory gatekeepers.',
    challenges: ['Third-party listings dominating SERPs and charging heavy commission fees', 'Daily listing inventory changing faster than search indexing loops', 'Generic property contact forms bringing in unqualified volume'],
    opportunities: ['Launch neighborhood-specific content hubs and location catalogs', 'Sync live inventories to Google schema maps for real-time visibility', 'Deploy verification filters to qualify private viewing requests'],
    roadmap: [
      { phase: '01', title: 'Inventory Setup', description: 'Configuring property database structure and geographical schema.' },
      { phase: '02', title: 'Regional Deployment', description: 'Launching indexable catalog listing pages and local maps packs.' },
      { phase: '03', title: 'Agent Integrations', description: 'Connecting qualified request routing filters directly with sales agents.' },
    ],
    results: ['+240% qualified organic leads', '$15M+ Attributed property sales', '#1 for 18 local target keywords'],
  },
  {
    slug: 'restaurants-cafes', title: 'Restaurants & Cafes', shortTitle: 'Hospitality',
    tagline: 'Capture high-volume local hospitality demand.',
    description: 'Convert local dining intent into reservations. We synchronize location data, map profiles, and indexable menu items so your operations become the top suggestion for local food queries.',
    challenges: ['Extreme local map pack density and aggregator directory dominance', 'Address discrepancies across directories causing map ranking penalties', 'Inability to showcase menus directly inside search snippets'],
    opportunities: ['Declare structured FoodEstablishment schemas with price arrays for menu items', 'Acquire regular customer feedback using automated intake review loops', 'Dominate localized "near me" dining queries across targeted coordinates'],
    roadmap: [
      { phase: '01', title: 'NAP Verification', description: 'Aligning business addresses across search grids and Apple/Google Maps.' },
      { phase: '02', title: 'Menu Schema', description: 'Injecting schema descriptors for culinary inventory items and pricing.' },
      { phase: '03', title: 'Review Growth', description: 'Launching table-side feedback codes to trigger map listings.' },
    ],
    results: ['+220% local maps impressions', '+65% reservation click-throughs', '#1 map rating in target radius'],
  },
  {
    slug: 'fashion-apparel', title: 'Fashion & Apparel', shortTitle: 'Fashion',
    tagline: 'Scale direct-to-consumer visual search conversions.',
    description: 'Optimize styles for image and product discovery. We build structured product indices, metadata tags, and visual citation graphs to capture shoppers exploration across image platforms.',
    challenges: ['Paid advertising cost multipliers reducing margin profits on social pipelines', 'Unoptimized product shots missing from Google Lens and Image Search', 'Slow product listing detail pages triggering mobile cart abandonment'],
    opportunities: ['Optimize catalog images with descriptively rich semantic meta tags', 'Rank product names directly in organic visual shopping results', 'Link visual search points directly with instant checkout systems'],
    roadmap: [
      { phase: '01', title: 'Store Auditing', description: 'Reviewing catalog page speeds and visual search visibility indexing.' },
      { phase: '02', title: 'Image Optimizations', description: 'Writing alt metadata and migrating product shots to AVIF formats.' },
      { phase: '03', title: 'Cart Speeding', description: 'Optimizing direct-checkout loops to decrease customer dropoffs.' },
    ],
    results: ['+190% visual search conversions', '4.5x Return on search spend', '-30% ad spend dependencies'],
  },
  {
    slug: 'b2b-services', title: 'B2B services', shortTitle: 'B2B services',
    tagline: 'Establish premium regional and national consulting authority.',
    description: 'Convert corporate clients researching complex business solutions. We build authoritative growth assets, research archives, and detailed guides that qualify firm capability prior to sales outreach.',
    challenges: ['Referral-dependent pipelines creating unpredictable growth cycles', 'Lengthy decision journeys requiring high-authority touchpoints', 'Saturated low-trust content frameworks diluting original research'],
    opportunities: ['Own search demand for industry regulation changes and commercial advisories', 'Design case study templates detailing client hurdles and hard solutions', 'Position leadership teams as core authorities on specific sector targets'],
    roadmap: [
      { phase: '01', title: 'Expertise Auditing', description: 'Mapping firm capabilities against transactional search pathways.' },
      { phase: '02', title: 'Content Systems', description: 'Publishing depth-first guides and optimized case archives.' },
      { phase: '03', title: 'Funnel Optimization', description: 'Setting up qualified intake forms for enterprise B2B users.' },
    ],
    results: ['+180% Inbound discovery calls', '35% reduction in sales cycle length', '#1 rankings for consulting queries'],
  },
  {
    slug: 'b2c-brands', title: 'B2C Brands', shortTitle: 'B2C brands',
    tagline: 'Convert high-volume consumer intent without reliance on paid media.',
    description: 'Unlocking organic discovery channels for consumer products. We align purchase intent and lifestyle values with speed-optimized landing page funnels that convert visitors automatically.',
    challenges: ['High CPA across paid social networks reducing digital profitability', 'Unoptimized shopping feeds causing poor product list visibility', 'Crawl budget issues on large catalogs deindexing main landing pages'],
    opportunities: ['Sync product arrays directly with organic Merchant search consoles', 'Implement dynamic product schema displaying active pricing and reviews in search results', 'Deploy speed-optimized product hubs targeting intent queries'],
    roadmap: [
      { phase: '01', title: 'Feed Diagnosis', description: 'Analyzing catalog configurations and PageSpeed load thresholds.' },
      { phase: '02', title: 'Product Markup', description: 'Integrating organization, product, and review schemas.' },
      { phase: '03', title: 'Market Launch', description: 'Aligning Google Merchant indexes and setting up review systems.' },
    ],
    results: ['+180% organic transaction volume', '+45% mobile PageSpeed score', '-28% acquisition cost rates'],
  },
];

// ── Case Studies (static fallback for non-migrated components) ──
export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  industrySlug: string;
  services: string[];
  summary: string;
  overview: string;
  challenge: string;
  solution: string;
  strategy: string;
  execution: string[];
  outcomes: string;
  conclusion: string;
  results: string[];
  image: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'b2b-saas-pipeline-expansion',
    title: 'Scaling B2B SaaS Pipeline by 312%',
    client: 'Enterprise Resource Planning (ERP) Platform',
    industry: 'SaaS', industrySlug: 'saas',
    services: ['SEO', 'AEO', 'Web Development'],
    summary: 'Bypassed legacy directory listings through 42 programmatic comparison pages, turning competitor search traffic into a compounding inbound pipeline worth $1.2M.',
    overview: 'How we bypassed legacy directory listings by building custom programmatic comparison alternatives that intercept buyers at the point of decision.',
    challenge: 'The client relied on AdWords campaigns costing $42 per click. High CAC prevented sustainable revenue growth, and third-party listings represented 70% of inbound sales demos.',
    solution: 'We built 42 speed-optimized comparison landing pages hosted directly on the client\'s domain to intercept software buyers at the point of decision.',
    strategy: 'The core insight was that enterprise software buyers actively research alternatives before committing to a demo.',
    execution: [
      'Conducted a 3-week keyword research sprint mapping 200+ competitor comparison queries.',
      'Built a reusable comparison page template system in vanilla HTML/CSS.',
      'Injected ItemList and SoftwareApplication JSON-LD schemas on every page.',
      'Created an internal linking architecture that distributed PageRank.',
      'Submitted all 42 URLs to Google Search Console with priority indexation requests.',
      'Deployed AEO entity schema securing citations in ChatGPT and Perplexity within 60 days.',
    ],
    outcomes: 'Within 90 days, organic search traffic increased by 312%. The comparison pages collectively drove $1.2M in attributed pipeline.',
    conclusion: 'For B2B SaaS companies, the highest-leverage organic search investment is comparison and alternative queries.',
    results: ['+312% organic search traffic in 90 days', '$1.2M in attributed pipeline growth', 'Top-3 rankings for 42 target comparison queries', 'CAC reduced from $42 to $8.40'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
  },
  {
    slug: 'multi-location-healthcare',
    title: 'Map Pack Dominance Across a Metro Area',
    client: 'Regional Network of 12 Clinical Facilities',
    industry: 'Healthcare & Medical', industrySlug: 'healthcare-medical',
    services: ['Local SEO', 'AEO', 'Reputation Management'],
    summary: 'Standardized NAP data, built 12 local clinic pages, and deployed patient review funnels — resulting in Map Pack #1 positions across every target location within 90 days.',
    overview: 'How we claimed Google Map Pack dominance across an entire metro area for a 12-clinic healthcare network.',
    challenge: 'Inbound patient acquisitions declined 34% over 18 months as competitors optimized their Google Business Profiles.',
    solution: 'Standardized NAP data across all directories. Built 12 individual clinic landing pages on a single domain.',
    strategy: 'Healthcare local search operates on three trust pillars: citation consistency, review volume, and structured data.',
    execution: [
      'Audited 60+ directories mapping 340+ NAP inconsistencies.',
      'Consolidated 12 separate clinic websites into a single domain.',
      'Built LocalBusiness JSON-LD schema for each clinic.',
      'Created a centralized Google Business Profile management system.',
      'Deployed a post-appointment SMS review funnel.',
      'Implemented call tracking with dynamic number insertion.',
    ],
    outcomes: 'All 12 clinics achieved Map Pack #1 positions within 90 days. Inbound patient bookings increased 280%.',
    conclusion: 'Multi-location healthcare organizations face a unique SEO challenge requiring technical standardization.',
    results: ['+280% organic clinic bookings', '#1 in Map Packs across all 12 locations', 'Top-3 for procedural queries within 90 days', '800+ new patient reviews in 90 days'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=800&fit=crop',
  },
  {
    slug: 'architecture-studio-visibility',
    title: 'Architecture Studio Doubles High-Budget Project Inquiries',
    client: 'Boutique Spatial Design Studio, London',
    industry: 'Architecture & Design', industrySlug: 'architecture-design',
    services: ['SEO', 'Web Development', 'Image Engine Optimization'],
    summary: 'Rebuilt a JavaScript-ghost portfolio as a server-rendered, image-optimized platform.',
    overview: 'How we turned an invisible architecture portfolio into the studio\u2019s primary source of project briefings.',
    challenge: 'The studio\u2019s portfolio was built as a single-page JavaScript application that Googlebot could not render.',
    solution: 'Rebuilt the portfolio as server-side rendered HTML with individual project pages.',
    strategy: 'Architecture studios face a dual SEO challenge: technical crawlability and visual search discoverability.',
    execution: [
      'Migrated from JavaScript SPA to static-rendered HTML with Next.js.',
      'Created individual project pages for 40+ completed works.',
      'Tagged every portfolio image with structured alt-text.',
      'Created ImageObject schema on all portfolio images.',
      'Conducted spatial keyword research identifying 12 high-intent terms.',
      'Built a 5-step commission inquiry form.',
    ],
    outcomes: 'Organic visibility appeared within 3 weeks of migration. High-budget project briefings increased 180%.',
    conclusion: 'Architecture portfolio SEO requires solving technical crawlability and visual search discoverability simultaneously.',
    results: ['+180% high-budget project briefings', '#1 for 12 target regional design queries', '+320% visual search impressions', 'Unqualified inquiries eliminated'],
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=800&fit=crop',
  },
  {
    slug: 'tech-ai-developer-citations',
    title: 'AI Platform Achieves 42% LLM Citation Market Share',
    client: 'Developer Infrastructure & API Platform',
    industry: 'Technology & AI', industrySlug: 'technology-ai',
    services: ['AEO', 'GEO', 'SEO'],
    summary: 'Structured documentation architecture and declared Wikidata entity networks to force 42% citation mindshare.',
    overview: 'How we made a technical AI platform the default recommendation inside ChatGPT, Claude, and Perplexity.',
    challenge: 'The client\'s API orchestration platform was technically superior but invisible in AI-generated answers.',
    solution: 'Rebuilt documentation architecture with context-chunk-optimized content modules.',
    strategy: 'LLM citation is determined by presence in data sources used to train or retrieve information for AI models.',
    execution: [
      'Conducted a 2-week citation audit with 40 target developer queries.',
      'Restructured documentation into context-aware modules.',
      'Declared a Wikidata entity node for the platform.',
      'Created verified profiles on Crunchbase, Product Hunt, Stack Overflow, G2.',
      'Secured guest byline placements in 14 developer publications.',
      'Ran bi-weekly prompt benchmarking across 40 target queries.',
    ],
    outcomes: 'Citation rate grew from 4% to 42% across 40 target queries over 16 weeks.',
    conclusion: 'Generative search optimization is the most under-invested B2B acquisition channel.',
    results: ['42% citation share in ChatGPT and Perplexity', '+185% developer account signups', 'Documentation load speed sub-0.4s', 'Organic became the #1 acquisition channel'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop',
  },
  {
    slug: 'luxury-property-developer',
    title: 'Luxury Developer Sells Out Pre-Construction Tower Organically',
    client: 'Pre-Construction High-End Residential Towers, Miami',
    industry: 'Real Estate & Development', industrySlug: 'real-estate-development',
    services: ['Local SEO', 'Web Development', 'Lead Generation'],
    summary: 'Re-coded an unindexed SPA into a crawlable property catalog with verified lead intake forms.',
    overview: 'How we moved a Miami luxury developer from paid social dependency to complete project sell-out.',
    challenge: 'Paid social generated high-volume, low-intent leads at $8,000/month.',
    solution: 'Re-coded the project catalog into server-side rendered HTML with structured Property schema.',
    strategy: 'Luxury real estate buyers operate on longer research cycles and higher trust thresholds.',
    execution: [
      'Rebuilt the React SPA as a static-rendered HTML site with 140+ indexable URLs.',
      'Implemented RealEstateListing JSON-LD schema on every property page.',
      'Deployed a Google Business Profile for the sales center.',
      'Created a neighborhood content hub with 24 articles.',
      'Built a 4-step buyer qualification form.',
      'Set up a conversion tracking dashboard.',
    ],
    outcomes: '$15M in property sales directly attributed to organic search. Entire tower pre-sold before groundbreaking.',
    conclusion: 'A properly structured property website can match aggregator visibility without surrendering referral economics.',
    results: ['+240% qualified organic inquiries', '$15M in attributed property sales', 'Full project reservation before groundbreaking', 'Ad spend completely eliminated'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop',
  },
  {
    slug: 'restaurant-group-local-dominance',
    title: 'Restaurant Group Captures #1 Map Position Across 6 Locations',
    client: 'Premium Casual Dining Group',
    industry: 'Restaurants & Cafes', industrySlug: 'restaurants-cafes',
    services: ['Local SEO', 'Reputation Management', 'Web Development'],
    summary: 'Fixed NAP inconsistencies across 60+ directories, injected FoodEstablishment schema.',
    overview: 'How we moved a 6-location premium dining group from Map Pack invisibility to #1 positions.',
    challenge: 'Address records were inconsistent across 60+ directories.',
    solution: 'Standardized NAP records across all directories. Injected FoodEstablishment and Menu JSON-LD schemas.',
    strategy: 'Restaurant local search is won on three pillars: citation consistency, review prominence, and menu discoverability.',
    execution: [
      'Conducted a citation audit across 60+ directories.',
      'Executed a 3-week citation cleanup sprint.',
      'Built structured FoodEstablishment JSON-LD schema.',
      'Deployed Menu and MenuItem schema for each location.',
      'Designed QR code table cards with a frictionless review flow.',
      'Set up a weekly Map Pack ranking dashboard.',
    ],
    outcomes: 'All 6 locations achieved Map Pack #1 within 60 days. Local map impressions increased 220%.',
    conclusion: 'Restaurant local SEO compounds faster than any other vertical.',
    results: ['+220% local map impressions within 60 days', '#1 Map Pack position across all 6 locations', '+65% reservation click-throughs', '4.9★ average rating — up from 4.1★'],
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=800&fit=crop',
  },
  {
    slug: 'fashion-brand-visual-search',
    title: 'Fashion Brand Reduces Ad Dependency by 30% Via Visual Search',
    client: 'Contemporary Fashion & Apparel Brand',
    industry: 'Fashion & Apparel', industrySlug: 'fashion-apparel',
    services: ['SEO', 'Web Development', 'Image Engine Optimization'],
    summary: 'Tagged 3,200 product images with semantic metadata, migrated to AVIF format.',
    overview: 'How we turned an invisible fashion brand image catalog into the brand\'s highest-performing acquisition channel.',
    challenge: 'Despite spending £12,000/month on Meta and Instagram ads, ROAS had declined 40%.',
    solution: 'Tagged all 3,200 images with structured semantic alt-text. Migrated to AVIF format.',
    strategy: 'Fashion is one of the highest-volume visual search categories.',
    execution: [
      'Audited all 3,200 product images for metadata coverage.',
      'Built a structured alt-text generation system.',
      'Converted all product imagery from JPEG to AVIF format.',
      'Rebuilt the product page load sequence.',
      'Set up a Google Merchant Center feed with live ProductListing schema.',
      'Implemented ImageObject schema with product links.',
    ],
    outcomes: 'Visual search conversions increased 190% within the first quarter.',
    conclusion: 'Fashion brands are leaving significant organic revenue on the table.',
    results: ['+190% visual search conversions', '4.5x return on organic search spend', '-30% paid ad dependency maintained', 'Mobile load time reduced from 4.2s to 0.9s'],
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=800&fit=crop',
  },
  {
    slug: 'b2b-consulting-firm-authority',
    title: 'B2B Consulting Firm Increases Inbound Inquiries by 180%',
    client: 'Mid-Market Management Consulting Firm',
    industry: 'B2B Services', industrySlug: 'b2b-services',
    services: ['SEO', 'Content Strategy', 'Lead Generation'],
    summary: 'Built a depth-first content archive of 24 regulatory guides.',
    overview: 'How we moved an 85% referral-dependent consulting firm to a consistent organic inbound engine.',
    challenge: 'The firm\'s revenue was 85% referral-dependent, creating unpredictable quarterly pipeline.',
    solution: 'Built 24 depth-first regulatory change guides targeting high-value practitioner queries.',
    strategy: 'B2B consulting authority is built by demonstrating expertise on specific, complex problems.',
    execution: [
      'Interviewed 6 of the firm\'s principals over 4 weeks.',
      'Mapped 40 regulatory change queries, filtering to 24 with highest intent.',
      'Produced 24 long-form regulatory guides.',
      'Implemented Article and FAQPage JSON-LD schema.',
      'Rebuilt the case studies archive with outcomes-first layout.',
      'Designed a multi-step intake form.',
    ],
    outcomes: 'Inbound discovery call requests increased 180% over 9 months.',
    conclusion: 'B2B consulting firms relying on referrals are building on a fragile foundation.',
    results: ['+180% inbound discovery call requests', '#1 rankings for 9 target regulatory query terms', '35% reduction in sales cycle length', 'Referral dependency cut from 85% to 45%'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop',
  },
  {
    slug: 'luxury-jewelry-brand',
    title: 'Luxury Jewelry Brand Grows Organic Revenue by 195%',
    client: 'Bespoke Engagement Rings & Fine Jewelry',
    industry: 'B2C Brands', industrySlug: 'b2c-brands',
    services: ['SEO', 'Web Development', 'Social Media'],
    summary: 'Converted a paid-social-dependent jewelry brand into an organic visual search leader.',
    overview: 'How we transitioned a luxury jewelry brand from declining paid social returns to organic visual search dominance.',
    challenge: 'ROAS on Meta and Instagram had declined from 6.2x to 1.8x over 24 months.',
    solution: 'Compressed and semantically tagged all product images. Structured every product page with rich snippet schemas.',
    strategy: 'Luxury jewelry buyers follow a distinct research-to-purchase journey.',
    execution: [
      'Audited all 1,800 product images for metadata coverage.',
      'Built a semantic tagging system.',
      'Converted all product imagery to AVIF with lazy-loading.',
      'Implemented Product JSON-LD schema on every page.',
      'Created ImageObject schema for Google Lens tap-to-shop.',
      'Structured a Collection schema hierarchy.',
    ],
    outcomes: 'Organic revenue increased 195% within 12 months.',
    conclusion: 'Luxury product brands sitting on high-quality creative assets hold an underutilized acquisition asset.',
    results: ['+195% organic revenue growth', '4.8x return on search investment', 'Paid ad dependency reduced 40%', 'Mobile bounce rate from 88% to 24%'],
    image: 'https://images.unsplash.com/photo-1515562141589-67f0d569b6f5?w=1200&h=800&fit=crop',
  },
];

// ── Insights / Articles ───────────────────────────────────
export interface InsightArticle {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  tags: string[];
  image: string;
  content: string[];
}

export const insightCategories = ['All', 'AI & Search', 'Web Development', 'SEO Strategy'] as const;

export const insights: InsightArticle[] = [
  {
    slug: 'llm-citation-shift',
    title: 'The LLM Citation Shift: How to Rank in ChatGPT and Claude',
    category: 'AI & Search',
    date: 'Jan 2026',
    readTime: '8 min',
    excerpt: 'A technical analysis of semantic indexing structures and database nodes scanned by conversational AI engines. Learn how to structure your brand for AI recommendations.',
    author: 'Luca Vance',
    authorRole: 'Head of Search & AI',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    tags: ['AEO', 'GEO', 'LLM Citation', 'Search Engineering'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=800&fit=crop',
    content: [
      'The landscape of search is undergoing its most significant transformation since Google\'s PageRank algorithm reshaped the web in 1998. The rise of AI-powered answer engines — from ChatGPT\'s browsing capabilities to Perplexity\'s real-time synthesis — has created an entirely new frontier for brand visibility.',
      'For growth-focused organizations, this isn\'t a threat — it\'s an unprecedented opportunity. Brands that position themselves as authoritative sources in their domain will be cited by AI engines, recommended in synthesized answers, and featured in the conversational responses that increasingly shape buying decisions.',
      'To rank in ChatGPT and Perplexity, you must optimize for RAG (Retrieval-Augmented Generation) systems. Focus on declaring clear Wikidata entity mappings, organizing your documentation into brief semantic nodes, and securing authoritative backlinks from developer-focused portals that LLMs query at inference time.',
      'The question isn\'t whether AI will transform search — it already has. The question is whether your brand will be queryable, cited, and recommended when it does.'
    ]
  },
  {
    slug: 'wordpress-vs-headless',
    title: 'Why WordPress and Plugins Are Dragging Down Your Conversions',
    category: 'Web Development',
    date: 'Dec 2025',
    readTime: '6 min',
    excerpt: 'An engineering comparison of bloated CMS templates vs. clean headless code architecture. The performance decision that\'s costing you revenue.',
    author: 'Aris Thorne',
    authorRole: 'Principal Growth Engineer',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    tags: ['Headless CMS', 'Next.js', 'Core Web Vitals', 'Conversion Rate'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
    content: [
      'For years, WordPress has been the default operating system of the marketing web. But as page speed becomes a core ranking signal and conversion optimization shifts to micro-interactions, the legacy CMS platform is showing its age. Bloated plug-ins and nested themes drag down performance, driving mobile bounce rates sky-high.',
      'A headless web architecture separates the visual layer from the content management database. By serving pre-rendered static HTML via global CDNs, headless sites achieve sub-second load times. The resulting performance lift directly affects your bottom line: Google rewards fast load times with higher search rankings, and users rewards speed with higher conversion rates.',
      'In our benchmarks, migrating from WordPress to a performance-centric static stack (like vanilla HTML/CSS or React with static generation) reduced average Largest Contentful Paint (LCP) from 4.8 seconds to 0.6 seconds. This performance jump correlates directly with a 30% reduction in bounce rate and a 220% lift in page value.',
      'The era of template bloat is over. Premium brands demand premium engineering: custom, lightweight, and incredibly fast.'
    ]
  },
  {
    slug: 'bypassing-aggregators',
    title: 'Bypassing Aggregators: The SaaS Blueprint to Intercept Alternative Queries',
    category: 'SEO Strategy',
    date: 'Nov 2025',
    readTime: '10 min',
    excerpt: 'A programmatic SEO guide to capturing high-intent comparative terms directly on your domain. How to own "[Competitor] alternatives" searches.',
    author: 'Isla Vance',
    authorRole: 'Chief Strategy Officer',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    tags: ['Programmatic SEO', 'SaaS Marketing', 'Aggregators', 'Buying Intent'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
    content: [
      'In highly competitive SaaS markets, search results are often dominated by directories like G2, Capterra, and Trustradius. Trying to outrank these aggregators for broad category keywords is a costly, uphill battle. The smarter move? Bypass them entirely by targeting comparison and alternative queries directly.',
      'When buyers search for \'[Your Competitor] alternatives\' or \'[Competitor A] vs [Competitor B]\', they are at the bottom of the funnel. They have identified their problem and are actively evaluating solutions. By building programmatic comparison pages on your own domain, you intercept these buyers at the precise moment of decision.',
      'To succeed, comparison pages must load instantly, feature objective and feature-specific comparison graphs, and declare structured SoftwareApplication and ItemList schema. By treating comparison as a programmatic directory rather than a singular static blog post, you turn your domain into an authority hub.',
      'Stop renting traffic from third-party aggregators. Build a programmatic alternative directory and capture high-intent buyers directly.'
    ]
  }
];

// ── Careers Page Perks ────────────────────────────────────
export const perks = [
  { title: 'Autonomy & Trust', description: 'We trust you to manage your time and deliverables. You work directly with founders and clients without administrative middle-managers.' },
  { title: 'Quiet Focus', description: 'We minimize meeting overhead so you have uninterrupted hours to code, analyze, and strategize. Deep work requires quiet space.' },
  { title: 'Continuous Mastery', description: 'Work on cutting-edge generative and answer engine search systems (AEO & GEO) that define the future of digital discovery.' },
  { title: 'Competitive Pay', description: 'Top-of-market compensation with full benefits.' },
  { title: 'Remote Flexibility', description: 'Work from anywhere. Fully remote environment.' },
  { title: 'Best Tools', description: 'Choose your tools. We provide whatever you need.' },
] as const;
