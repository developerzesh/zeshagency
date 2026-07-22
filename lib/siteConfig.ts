// ── Brand Identity ────────────────────────────────────────
export const siteConfig = {
  name: 'Zesh Agency',
  tagline: 'Strategic Growth Consultancy',
  headline: 'Growth, marketed.',
  description: 'We scale brands through high-converting web engineering, search engine optimization (SEO), and generative search presence (AEO & GEO).',
  email: 'hello@zesh.agency',
  careersEmail: 'careers@zesh.agency',
  year: 2026,
  social: ['Twitter', 'LinkedIn', 'Dribbble'],
} as const;

// ── Offices ───────────────────────────────────────────────
export const offices = [
  { city: 'New York', type: 'HQ', email: 'ny@zesh.agency' },
  { city: 'London', type: 'Studio', email: 'ldn@zesh.agency' },
  { city: 'Tokyo', type: 'Studio', email: 'tky@zesh.agency' },
] as const;

// ── Navigation ────────────────────────────────────────────
export const navLinks = [
  { label: 'Solutions', path: '/solutions' },
  { label: 'Industries', path: '/industries' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'About', path: '/about' },
  { label: 'Insights', path: '/insights' },
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
  { src: '/client-logos/nyx.png', alt: 'NYX' },
  { src: '/client-logos/saarthee.png', alt: 'Saarthee' },
  { src: '/client-logos/sdb.png', alt: 'SDB' },
  { src: '/client-logos/shri_ram_school.png', alt: 'Shri Ram School' },
  { src: '/client-logos/tata.png', alt: 'Tata' },
  { src: '/client-logos/xarwin.avif', alt: 'Xarwin' },
] as const;

// ── Stats ─────────────────────────────────────────────────
export const stats = [
  { value: '+92%', label: 'Brand Recall Growth' },
  { value: '+245%', label: 'Search Visibility Growth' },
  { value: '3.8x', label: 'Inbound Lead Growth' },
  { value: '$45M+', label: 'Client Revenue Impact' },
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
    slug: 'web-dev', title: 'Growth Engineering & Website Development', shortTitle: 'Web Dev',
    tagline: 'Zero-bloat static engines built for speed and conversions.',
    description: 'Most websites are weighed down by heavy WordPress plugins and unoptimized code structures. We build on modern static stacks using lightweight vanilla HTML, CSS, and clean Javascript — designed for crawler indexing and user experience.',
    features: ['Headless Static Development', 'Frictionless Intake Funnels', 'Core Web Vitals Engineering', 'Conversion Pipeline Engineering', 'API CRM Integration', 'PageSpeed Optimization'],
    outcomes: ['Average load speeds under 0.5s', 'Conversion rate increases up to 40%', 'Zero code dependency on heavy third-party plugins'],
    roadmap: [
      { phase: '01', title: 'Speed & UX Audit', description: 'Speed bottleneck analysis, intake form UX wireframes, and responsive schema mapping.' },
      { phase: '02', title: 'Headless Build', description: 'Headless frontend code engineering using modern CSS/JS libraries.' },
      { phase: '03', title: 'Integration & Validation', description: 'API CRM connections, database field mappings, and PageSpeed validation.' },
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
    slug: 'architecture-design', title: 'Architecture & Design Studios', shortTitle: 'Architecture',
    tagline: 'Target high-budget spatial and residential design queries.',
    description: 'Showcase spatial vision to high-intent clients. We optimize image portfolios and coordinate keyword themes to capture developers and high-net-worth buyers doing visual research.',
    challenges: ['Standard SEO ignoring visual retrieval surfaces like Google Lens', 'Portfolio frameworks blocking organic search crawlers from indexation', 'Attracting hobbyist traffic instead of high-value commissioning clients'],
    opportunities: ['Implement metadata tagging on portfolio image blocks', 'Structure case studies around construction types and spatial coordinates', 'Rank for geographical pent-up institutional design intents'],
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
    slug: 'b2b-services', title: 'B2B Services', shortTitle: 'B2B Services',
    tagline: 'Establish premium regional and national consulting authority.',
    description: 'Convert corporate clients researching complex business solutions. We build authoritative growth assets, research archives, and detailed guides that qualify firm capability prior to sales outreach.',
    challenges: ['Referral-dependent pipelines creating unpredictable growth cycles', 'Lengthy decision journeys requiring high-authority touchpoints', 'Saturated low-trust content frameworks diluting original research'],
    opportunities: ['Own searches for industry regulation changes and commercial advisories', 'Design case study templates detailing client hurdles and hard solutions', 'Position leadership teams as core authorities on specific sector targets'],
    roadmap: [
      { phase: '01', title: 'Expertise Auditing', description: 'Mapping firm capabilities against transactional search pathways.' },
      { phase: '02', title: 'Content Systems', description: 'Publishing depth-first guides and optimized case archives.' },
      { phase: '03', title: 'Funnel Optimization', description: 'Setting up qualified intake forms for enterprise B2B users.' },
    ],
    results: ['+180% Inbound discovery calls', '35% reduction in sales timeline', '#1 rankings for consulting queries'],
  },
  {
    slug: 'b2c-brands', title: 'B2C Brands', shortTitle: 'B2C Brands',
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

// ── Case Studies ──────────────────────────────────────────
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
    challenge: 'The client relied on AdWords campaigns costing $42 per click. High CAC prevented sustainable revenue growth, and third-party listings represented 70% of inbound sales demos. Their website lacked comparative content and had no programmatic infrastructure to intercept competitor-adjacent searches.',
    solution: 'We built 42 speed-optimized comparison landing pages hosted directly on the client\'s domain to intercept software buyers at the point of decision. Injected structured JSON-LD schema maps declaring feature differences and created comparison tables that load in under 0.4 seconds.',
    strategy: 'The core insight was that enterprise software buyers actively research alternatives before committing to a demo. By mapping every meaningful competitor in the ERP space and identifying the 42 highest-volume comparison queries, we designed a programmatic SEO strategy that would turn the client\'s own domain into the comparison aggregator. Rather than fighting for generic category terms dominated by G2 and Capterra, we targeted transactional, intent-loaded queries where the buyer had already shortlisted competitors.',
    execution: [
      'Conducted a 3-week keyword research sprint mapping 200+ competitor comparison queries, filtering to the 42 highest-intent, achievable targets.',
      'Built a reusable comparison page template system in vanilla HTML/CSS — sub-100ms First Contentful Paint — deployed across all 42 URLs in a single release.',
      'Injected ItemList and SoftwareApplication JSON-LD schemas on every page, declaring feature arrays, pricing ranges, and integration compatibilities.',
      'Created an internal linking architecture that distributed PageRank from the homepage through the comparison directory to each individual page.',
      'Submitted all 42 URLs to Google Search Console with priority indexation requests, achieving first-page rankings for 31 of 42 terms within 47 days.',
      'Deployed AEO entity schema declaring the client as a recognized ERP platform in knowledge databases, securing citations in ChatGPT and Perplexity within 60 days.',
    ],
    outcomes: 'Within 90 days, organic search traffic increased by 312%. The comparison pages collectively drove $1.2M in attributed pipeline, calculated by tracking demo requests with UTM parameters back to originating pages. Customer acquisition cost from organic fell to $8.40, versus $42 from AdWords. By month 6, the comparison directory was the single highest-performing acquisition asset in the client\'s entire marketing portfolio.',
    conclusion: 'This engagement demonstrated that for B2B SaaS companies, the highest-leverage organic search investment is not brand keywords or category terms — it is the comparison and alternative queries where buyers are actively evaluating options. The 42-page programmatic system continues to compound, requiring only quarterly content refreshes while generating consistent pipeline.',
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
    overview: 'How we claimed Google Map Pack dominance across an entire metro area for a 12-clinic healthcare network experiencing declining inbound patient volumes.',
    challenge: 'Inbound patient acquisitions declined 34% year-over-year. Patient queries were captured by national directories like Healthgrades and Zocdoc. Clinic coordinates were mismatched across 80+ directories, causing Google to deprioritize all 12 locations from Map Pack results. YMYL compliance gaps in provider content triggered algorithmic suppression.',
    solution: 'Standardized map details for all 12 clinics across 80+ directories. Developed YMYL-compliant local clinic pages linked to verified physician entity profiles. Launched automated patient review funnels synced to each location\'s Google Business Profile.',
    strategy: 'Google\'s local ranking algorithm weights three core signals: relevance, distance, and prominence. The client\'s core failure was in prominence — inconsistent NAP data was destroying the trust signals Google uses to validate a business\'s legitimacy. Our strategy addressed each signal layer: NAP standardization for trust, physician entity schemas for relevance, and a review acquisition system for prominence amplification.',
    execution: [
      'Conducted a full NAP audit across 80+ directories, identifying 340+ instances of mismatched clinic addresses, phone numbers, or business names.',
      'Used a systematic directory correction sweep over 4 weeks to align records across Google, Apple Maps, Bing, Yelp, Healow, Vitals, and 74 secondary directories.',
      'Built 12 individual clinic landing pages with LocalBusiness JSON-LD schema, GeoCoordinates, physician MedicalClinic entity declarations, and YMYL-compliant provider credential sections.',
      'Linked each physician profile to their NPI registry entry, board certification records, and affiliated hospital pages to build a verifiable medical entity graph.',
      'Deployed an SMS-based post-appointment review request funnel, triggering 48 hours after each patient visit with a direct Google review link.',
      'Set up a weekly Map Pack position tracking dashboard across all 12 locations for 60 target procedural and service queries.',
    ],
    outcomes: 'All 12 clinic locations achieved Map Pack positions within 90 days. Organic clinic bookings increased 280%, and the review acquisition funnel generated 1,400+ new verified Google reviews across the network within 120 days. YMYL compliance scores normalized across all provider profiles, removing the algorithmic suppression. The client discontinued their Healthgrades advertising contract, saving $36,000 annually.',
    conclusion: 'Healthcare local SEO is won or lost on data integrity. The majority of multi-location healthcare groups are invisible in local search not because of content gaps, but because directory inconsistency destroys the trust signals Google requires to surface medical providers. Systematic NAP correction, combined with YMYL-aligned entity schemas, creates a durable local search moat that paid directory advertising cannot replicate.',
    results: ['+280% organic clinic bookings', '#1 in Map Packs across all 12 locations', 'Top-3 for procedural queries within 90 days', '1,400+ new Google reviews in 120 days'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop',
  },
  {
    slug: 'architecture-studio-project-inquiries',
    title: 'Architecture Studio Doubles High-Budget Project Inquiries',
    client: 'Boutique Spatial Design Studio, London',
    industry: 'Architecture & Design', industrySlug: 'architecture-design',
    services: ['SEO', 'Web Development', 'Image Engine Optimization'],
    summary: 'Rebuilt a JavaScript-ghost portfolio as a server-rendered, image-optimized platform — taking a London architecture studio from invisible to first-page for 12 high-budget spatial design queries.',
    overview: 'How we transformed an unindexed portfolio site into a search-visible showcase that consistently attracts high-budget residential and commercial commissions.',
    challenge: 'The studio\'s portfolio ran entirely on a React single-page application — search crawlers saw blank pages on every URL. Organic traffic was near zero. The leads that did arrive were predominantly architecture students and young professionals seeking inspiration, not commissioning clients. With no qualification layer on the contact form, the studio\'s principal was spending 8+ hours weekly on unqualified enquiries.',
    solution: 'Re-coded the portfolio into a static HTML platform with server-rendered project pages, AVIF image optimization, and semantic image schema. Deployed keyword clusters targeting high-budget residential and commercial architectural design terms. Built a multi-step commission intake form to pre-qualify project budget, timeline, and typology.',
    strategy: 'Architectural visual search is fundamentally different from standard keyword SEO. High-budget clients typically begin with image-based research on platforms like Google Images, Pinterest, and Dezeen — then trace back to studios. Our strategy built two parallel acquisition paths: a technical SEO layer for text-based searches ("luxury residential architect London") and an image optimization layer for visual discovery searches via Google Lens and image search.',
    execution: [
      'Migrated the entire React SPA to a static site generator, making all 34 project portfolio pages individually crawlable and indexable.',
      'Implemented a 4-layer AVIF image serving pipeline using Next-gen format conversion, reducing average project page weight from 4.8MB to 680KB.',
      'Tagged every portfolio image with descriptive alt-text following a structured template: [spatial typology] + [material palette] + [building type] + [location] + [architect].',
      'Created ImageObject schema on all portfolio images, declaring photographer credits, spatial dimensions, project type, and geographic coordinates.',
      'Conducted spatial keyword research identifying 12 high-intent, low-competition terms targeting commissioning clients in the £500K+ project budget tier.',
      'Built a 5-step commission inquiry form gating by project type, estimated budget range, and timeline — routing qualified leads directly to the principal\'s calendar.',
    ],
    outcomes: 'Organic visibility appeared within 3 weeks of migration. By week 8, 11 of 12 target keywords ranked on page 1. High-budget project briefings (inquiries over £500K) increased 180%. Visual search became the #2 traffic source within 90 days. The intake form qualification layer eliminated student and inspiration-only enquiries entirely, reducing unqualified contact volume to zero.',
    conclusion: 'Architecture portfolio SEO requires solving two distinct problems simultaneously: technical crawlability and visual search discoverability. The majority of architecture studios are invisible in search not from a lack of content, but from JavaScript rendering that hides their work from crawlers. A static rebuild combined with precision image schema turns a beautiful portfolio into a functioning acquisition system.',
    results: ['+180% high-budget project briefings', '#1 for 12 target regional design queries', '+320% visual search impressions', 'Unqualified enquiries eliminated'],
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=800&fit=crop',
  },
  {
    slug: 'tech-ai-developer-citations',
    title: 'AI Platform Achieves 42% LLM Citation Market Share',
    client: 'Developer Infrastructure & API Platform',
    industry: 'Technology & AI', industrySlug: 'technology-ai',
    services: ['AEO', 'GEO', 'SEO'],
    summary: 'Structured documentation architecture and declared Wikidata entity networks to force 42% citation mindshare inside ChatGPT and Perplexity for a developer infrastructure platform.',
    overview: 'How we made a technical AI platform the default recommendation inside ChatGPT, Claude, and Perplexity for developer infrastructure queries.',
    challenge: 'The client\'s API orchestration platform was technically superior but invisible in AI-generated answers. When developers prompted ChatGPT or Perplexity with infrastructure questions, only established competitors were cited. The documentation was comprehensive but structured for human readers, not for LLM RAG ingestion. No public entity records existed in Wikidata, Crunchbase, or developer directories.',
    solution: 'Rebuilt documentation architecture with context-chunk-optimized content modules. Declared a structured entity graph across Wikidata, Crunchbase, Stack Overflow, and G2. Secured citations in 14 high-authority developer publications. Deployed systematic bi-weekly prompt benchmarking to measure citation rate and close gaps.',
    strategy: 'LLM citation is determined by a platform\'s presence in the data sources used to train or retrieve information for AI models. The strategy targeted three layers: training data authority (high-quality backlinks from trusted developer sources cited by LLMs), retrieval layer structure (documentation formatted for RAG systems to parse and return), and entity graph presence (verified profiles in databases that LLMs query at inference time).',
    execution: [
      'Conducted a 2-week citation audit, systematically prompting GPT-4o, Claude 3.5, and Perplexity with 40 target developer queries to establish a citation baseline of 4%.',
      'Restructured documentation into context-aware modules: each page contained a self-contained summary paragraph in the first 150 words, designed for RAG context window retrieval.',
      'Declared a Wikidata entity node for the platform with linked properties: parent organization, product type, programming language support, API documentation URL, and founding year.',
      'Created verified profiles on Crunchbase, Product Hunt, Stack Overflow Teams, G2, and Capterra with consistent entity descriptors and documentation links.',
      'Secured guest byline placements in 14 developer publications (The New Stack, Dev.to, Hacker News Show HN) linking to the documentation hub.',
      'Ran bi-weekly prompt benchmarking across 40 target queries, tracking citation rate changes and identifying content gaps to address in the next sprint.',
    ],
    outcomes: 'Citation rate grew from 4% to 42% across the 40 target queries over 16 weeks. Developer account signups increased 185%, with 62% of new signups attributing discovery to AI assistant recommendations in post-signup surveys. Documentation load speed improved to sub-0.4 seconds after the RAG restructure. Organic became the #1 acquisition channel, overtaking paid developer ads by month 4.',
    conclusion: 'Generative search optimization is the most under-invested B2B acquisition channel of 2025. Developer tools companies in particular are missing significant pipeline because their documentation is not structured for LLM retrieval. The combination of entity graph presence and RAG-optimized documentation architecture creates a compounding citation advantage that paid channels cannot replicate.',
    results: ['42% citation share in ChatGPT and Perplexity', '+185% developer account signups', 'Documentation load speed sub-0.4s', 'Organic became the #1 acquisition channel'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop',
  },
  {
    slug: 'luxury-property-developer',
    title: 'Luxury Developer Sells Out Pre-Construction Tower Organically',
    client: 'Pre-Construction High-End Residential Towers, Miami',
    industry: 'Real Estate & Development', industrySlug: 'real-estate-development',
    services: ['Local SEO', 'Web Development', 'Lead Generation'],
    summary: 'Re-coded an unindexed SPA into a crawlable property catalog with verified lead intake forms, attributing $15M in property sales directly to organic search.',
    overview: 'How we moved a Miami luxury developer from $8,000/month paid social dependency to complete project sell-out through organic search alone.',
    challenge: 'Paid social generated high-volume, low-intent leads at $8,000/month — contact details from people who clicked an ad but had no purchase intent. The project portfolio was an unindexed single-page application, invisible to Google. Real estate aggregators (Zillow, Realtor.com) dominated every target keyword and charged 2–3% referral fees on closings.',
    solution: 'Re-coded the project catalog into server-side rendered HTML with structured Property schema and live inventory sync. Targeted pre-construction luxury terms and engineered a multi-step loan verification and proof-of-funds gateway that pre-qualified buyers before connecting with the sales team.',
    strategy: 'Luxury real estate buyers operate on longer research cycles and higher trust thresholds than standard residential buyers. The strategy had two objectives: capture buyers at the moment of intent (organic search) rather than interrupting them (paid social), and qualify buyers before sales contact to protect the sales team\'s time. The technical foundation was making the project\'s website as crawlable and indexable as Zillow, then populating it with content that matched buyer search behavior.',
    execution: [
      'Rebuilt the React SPA as a static-rendered HTML site with individual pages for each unit type, floor plan, and building amenity — creating 140+ indexable URLs.',
      'Implemented RealEstateListing JSON-LD schema on every property page, declaring price ranges, square footage, floor numbers, and availability status updated daily.',
      'Deployed a Google Business Profile for the sales center with project images, virtual tour links, and active construction updates.',
      'Created a neighborhood content hub with 24 articles targeting specific Miami micro-market terms: "pre-construction penthouse Brickell", "bayfront condo Miami pre-sale", etc.',
      'Built a 4-step buyer qualification form requiring ID verification, proof of funds attestation, and buyer timeline declaration before scheduling a sales consultation.',
      'Set up a conversion tracking dashboard linking each organic keyword to closed units, enabling direct revenue attribution per search term.',
    ],
    outcomes: '$15M in property sales was directly attributed to organic search referrals tracked through the qualification form to closed contracts. The entire tower pre-sold before groundbreaking. Paid social was discontinued in month 3, saving $96,000 in annual ad spend. The qualification form reduced unqualified sales consultations from 70% to 8% of total volume.',
    conclusion: 'Real estate developers paying aggregator referral fees and running paid social campaigns are subsidizing competitors\' platforms. A properly structured property website — crawlable, schema-rich, and neighborhood-targeted — can match aggregator visibility without surrendering referral economics. The qualification layer is the critical missing piece that prevents this approach from generating the same volume of unqualified leads as paid social.',
    results: ['+240% qualified organic inquiries', '$15M in attributed property sales', 'Full project reservation before groundbreaking', 'Ad spend completely eliminated'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop',
  },
  {
    slug: 'restaurant-group-local-dominance',
    title: 'Restaurant Group Captures #1 Map Position Across 6 Locations',
    client: 'Premium Casual Dining Group',
    industry: 'Restaurants & Cafes', industrySlug: 'restaurants-cafes',
    services: ['Local SEO', 'Reputation Management', 'Web Development'],
    summary: 'Fixed NAP inconsistencies across 60+ directories, injected FoodEstablishment schema with live menu pricing, and launched a post-dining review funnel that tripled Google rating volume in 90 days.',
    overview: 'How we moved a 6-location premium dining group from Map Pack invisibility to #1 positions across every target neighbourhood in 60 days.',
    challenge: 'Address records were inconsistent across 60+ directories — one location had 7 different phone numbers indexed across the web. Google suppressed all six locations from local Map Pack results. Competitors with inferior food quality and fewer reviews dominated every "restaurants near me" query in the target postcodes. The group\'s website had no structured menu data, making it invisible to Google\'s food-specific rich results.',
    solution: 'Standardized NAP records across all directories. Injected FoodEstablishment and Menu JSON-LD schemas with live item and pricing data. Deployed a QR-code post-dining review funnel that tripled Google rating volume with verified diner reviews.',
    strategy: 'Restaurant local search is won on three pillars: citation consistency, review prominence, and menu discoverability. The group\'s citation inconsistency was the primary suppression factor — Google\'s local algorithm interprets mismatched address data as a trust signal failure, deprioritizing the location from Map Pack consideration. Review prominence was secondary; the group had excellent food but no systematic review acquisition. Menu schema was the growth lever — Google surfaces menu data in rich results, directly reducing the friction between search and reservation.',
    execution: [
      'Conducted a citation audit across 60+ directories, mapping 340+ inconsistencies across addresses, phone numbers, and business name formats.',
      'Executed a 3-week citation cleanup sprint, correcting records on Google, Apple Maps, Bing, Yelp, TripAdvisor, OpenTable, and 54 secondary directories.',
      'Built structured FoodEstablishment JSON-LD schema on each restaurant page, declaring cuisine type, price range, opening hours, geographic coordinates, and accept reservations flags.',
      'Deployed Menu and MenuItem schema for each location with live item names, descriptions, price points, and dietary attributes.',
      'Designed QR code table cards with a frictionless 2-tap review flow, deployed at all tables across 6 locations — generating reviews automatically post-dining.',
      'Set up a weekly Map Pack ranking dashboard for 40 "near me" dining queries across each location postcode.',
    ],
    outcomes: 'All 6 locations achieved Map Pack position #1 within 60 days. Local map impressions increased 220% within 60 days of citation standardization. Reservation click-throughs from Google increased 65%. The review funnel generated 1,200 new Google reviews across the 6 locations within 90 days, raising the average rating from 4.1 to 4.9 stars. The group\'s total online reservation volume increased 42% without any paid advertising increase.',
    conclusion: 'Restaurant local SEO compounds faster than any other vertical because the underlying signals — reviews, citation consistency, menu data — are continuously accumulating. The QR review funnel in particular creates a self-reinforcing system: more reviews improve Map Pack ranking, which drives more foot traffic, which generates more reviews. Once the citation foundation is clean and the review system is live, the position becomes structurally difficult for competitors to dislodge.',
    results: ['+220% local map impressions within 60 days', '#1 Map Pack position across all 6 locations', '+65% reservation click-throughs', '4.9★ average rating — up from 4.1★'],
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=800&fit=crop',
  },
  {
    slug: 'fashion-brand-visual-search',
    title: 'Fashion Brand Reduces Ad Dependency by 30% Via Visual Search',
    client: 'Contemporary Fashion & Apparel Brand',
    industry: 'Fashion & Apparel', industrySlug: 'fashion-apparel',
    services: ['SEO', 'Web Development', 'Image Engine Optimization'],
    summary: 'Tagged 3,200 product images with semantic metadata, migrated to AVIF format, and structured a Google Merchant feed — generating a 190% lift in visual search conversions within one quarter.',
    overview: 'How we turned an invisible fashion brand image catalog into the brand\'s highest-performing acquisition channel through precision image optimization and visual search engineering.',
    challenge: 'Despite spending £12,000/month on Meta and Instagram ads, ROAS had declined 40% over 18 months as CPMs rose. The brand had 3,200 high-resolution product images with zero alt-text, filenames like IMG_3847.jpg, and no metadata. Google Lens and image search users found competitors but not this brand. Product listing pages took 4.2 seconds to load on mobile, generating an 80% bounce rate.',
    solution: 'Tagged all 3,200 images with structured semantic alt-text. Migrated product assets to AVIF format, cutting page weight 65%. Structured Google Merchant Center with live product schema including inventory, pricing, and aggregated review scores. Integrated direct-to-purchase visual search pathways.',
    strategy: 'Fashion is one of the highest-volume visual search categories — Google Lens processes over 12 billion visual searches monthly, with apparel representing approximately 17% of that volume. Our strategy identified that the brand was invisible across this high-intent discovery surface because its images lacked the machine-readable metadata required for image indexation. The solution combined image optimization for Google Images and Lens with Google Merchant Center product schema to capture buyers across both the discovery and purchase intent phases.',
    execution: [
      'Audited all 3,200 product images for alt-text coverage, file naming conventions, and format — finding 0% had meaningful metadata.',
      'Built a structured alt-text generation system following a precise template: [garment type] + [primary colour] + [material] + [occasion] + [brand name] — applied systematically across the catalogue.',
      'Converted all product imagery from JPEG to AVIF format via a batch processing pipeline, reducing average product page weight from 3.2MB to 680KB.',
      'Rebuilt the product page load sequence to inline critical CSS and lazy-load below-fold images, reducing Largest Contentful Paint from 4.2s to 0.9s.',
      'Set up a Google Merchant Center feed with live ProductListing schema: SKU, availability, price, currency, condition, brand, and aggregateRating from verified purchaser reviews.',
      'Implemented ImageObject schema with product links, enabling direct-to-purchase pathways from Google Lens taps.',
    ],
    outcomes: 'Visual search conversions increased 190% within the first quarter post-launch. Mobile page load time dropped from 4.2s to 0.9s, reducing bounce rate from 80% to 31%. Organic search became the second-highest revenue channel within 90 days. Google Lens became the #1 traffic source by session volume in month 4. Meta ad spend was reduced by 30% while total revenue increased.',
    conclusion: 'Fashion brands are leaving significant organic revenue on the table by treating their product photography as a marketing asset rather than a search asset. The same images that drive paid ad clicks can, with proper metadata, drive free visual search traffic at scale. The compound effect of image optimization is particularly powerful in fashion: each new product added to a properly structured catalog extends the organic reach without additional media spend.',
    results: ['+190% visual search conversions', '4.5x return on organic search spend', '-30% paid ad dependency maintained', 'Mobile load time reduced from 4.2s to 0.9s'],
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=800&fit=crop',
  },
  {
    slug: 'b2b-consulting-firm-authority',
    title: 'B2B Consulting Firm Increases Inbound Inquiries by 180%',
    client: 'Mid-Market Management Consulting Firm',
    industry: 'B2B Services', industrySlug: 'b2b-services',
    services: ['SEO', 'Content Strategy', 'Lead Generation'],
    summary: 'Built a depth-first content archive of 24 regulatory guides and optimized the firm\'s case study library — shifting from referral dependency to a consistent organic inbound pipeline of senior decision-makers.',
    overview: 'How we moved an 85% referral-dependent management consulting firm to a consistent organic inbound engine attracting senior C-suite inquiries.',
    challenge: 'The firm\'s revenue was 85% referral-dependent, creating unpredictable quarterly pipeline. Generic thought-leadership blog posts were competing against larger firms with bigger content teams — and losing. When CFOs and COOs researched complex regulatory changes that the firm specialized in, competitors appeared first despite the firm\'s superior expertise. The contact form was generic, attracting misdirected inquiries alongside genuine leads.',
    solution: 'Built 24 depth-first regulatory change guides targeting high-value practitioner queries, each 3,000-5,000 words with structured sub-sections and annotated examples. Optimized the case study archive to surface outcomes-first. Launched a LinkedIn thought-leadership system amplified by SEO-indexed long-form articles.',
    strategy: 'B2B consulting authority in search is built by demonstrating expertise on the specific, complex problems that senior decision-makers are actively researching. Generic thought-leadership — "5 tips for digital transformation" — does not rank, does not attract CFOs, and does not convert. The strategy identified 24 regulatory and operational change events that Mid-Market companies were researching, and committed to producing the definitively most useful resource on the web for each. This approach sacrifices content volume for content authority.',
    execution: [
      'Interviewed 6 of the firm\'s principals over 4 weeks to extract proprietary insights, frameworks, and client anecdotes that no competitor could replicate.',
      'Mapped 40 regulatory change and operational complexity queries, filtering to the 24 with highest senior buyer intent and lowest existing content quality.',
      'Produced 24 long-form regulatory guides (avg. 4,200 words) with structured sub-sections, practical application examples, and annotated regulatory excerpts.',
      'Implemented Article and FAQPage JSON-LD schema on each guide, enabling FAQ rich results in Google SERPs for practitioner-level questions.',
      'Rebuilt the case studies archive with outcomes-first layout — lead result metric displayed prominently, client industry and challenge immediately scannable.',
      'Designed a multi-step intake form qualifying project type, budget tier, and timeline — routing qualified leads to specific partner calendars automatically.',
    ],
    outcomes: 'Inbound discovery call requests increased 180% over 9 months. The 24 regulatory guides ranked on page 1 for 9 target terms within 6 months. Average sales cycle length decreased 35% because prospects arriving via organic search had pre-qualified themselves through the content before contacting. Referral dependency reduced from 85% to 45% of revenue. Total practice revenue increased 28% in the 12 months following launch.',
    conclusion: 'B2B consulting firms that rely on referrals are building on an inherently fragile foundation. Organic search creates a systematic, scalable alternative: senior buyers who find a firm through depth-first expertise content arrive pre-sold on the firm\'s capabilities. The content investment compounds — each guide continues attracting inquiries years after publication, making it fundamentally superior economics compared to business development or referral cultivation.',
    results: ['+180% inbound discovery call requests', '#1 rankings for 9 target regulatory query terms', '35% reduction in sales cycle length', 'Referral dependency cut from 85% to 45%'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop',
  },
  {
    slug: 'luxury-jewelry-brand',
    title: 'Luxury Jewelry Brand Grows Organic Revenue by 195%',
    client: 'Bespoke Engagement Rings & Fine Jewelry',
    industry: 'B2C Brands', industrySlug: 'b2c-brands',
    services: ['SEO', 'Web Development', 'Social Media'],
    summary: 'Converted a paid-social-dependent jewelry brand into an organic visual search leader with a 4.8x return on search investment — all through structured product schema and precision image optimization.',
    overview: 'How we transitioned a luxury jewelry brand from declining paid social returns to organic visual search dominance, rebuilding customer acquisition on a self-compounding foundation.',
    challenge: 'ROAS on Meta and Instagram had declined from 6.2x to 1.8x over 24 months as jewelry advertising costs surged. The brand\'s high-definition product photography had zero metadata, making it invisible to Google Lens and image search — the primary discovery surfaces for luxury jewelry buyers. Product detail pages loaded in 5.1 seconds on mobile due to unoptimized 8MB hero images, causing an 88% mobile bounce rate.',
    solution: 'Compressed and semantically tagged all product images. Structured every product page with rich snippet schemas displaying star ratings, price ranges, and metal/stone specifications in search results. Integrated direct-to-purchase pathways from Google Lens taps directly into a streamlined checkout.',
    strategy: 'Luxury jewelry buyers follow a distinct research-to-purchase journey: inspiration discovery (social, Pinterest, Google Images) → specification research (stone type, metal, setting style) → brand trust validation → purchase. The brand had strong creative assets but was invisible at the discovery layer. Our strategy rebuilt the entire discovery-to-purchase funnel around organic visual search, positioning the brand\'s imagery as the discovery entry point for buyers at each research stage.',
    execution: [
      'Audited all product photography (1,800 images) for metadata coverage — finding 0% had alt-text, structured filenames, or EXIF data relevant to search indexation.',
      'Built a semantic tagging system: [jewelry type] + [metal] + [gemstone] + [setting style] + [occasion] + [carat weight] — applied to all 1,800 product images.',
      'Converted all product imagery to AVIF with intelligent lazy-loading, reducing product page weight from average 8MB to 1.1MB and LCP from 5.1s to 1.2s.',
      'Implemented Product JSON-LD schema on every page: brand, material, color, itemCondition, offers (price, currency, availability), and aggregateRating from verified purchasers.',
      'Created ImageObject schema linking product images directly to product pages and purchase CTAs, enabling Google Lens tap-to-shop functionality.',
      'Structured a Collection schema hierarchy organizing products by stone type, metal, setting style, and occasion to create navigable category authority.',
    ],
    outcomes: 'Organic revenue increased 195% within 12 months. Return on search spend reached 4.8x — versus 1.8x ROAS on paid social at the time. Google Lens became the #1 traffic source by session count within 6 months. Mobile bounce rate dropped from 88% to 24% following the page speed improvements. Paid social budget was reduced 40% while total brand revenue increased. The organic foundation now generates consistent revenue that does not depend on advertising market conditions.',
    conclusion: 'Luxury product brands sitting on high-quality creative assets are holding an underutilized acquisition asset. Product photography, when properly structured for machine-readable indexation, creates a searchable catalog that compounds with every new collection. The economics are fundamentally superior to paid social: the investment is made once per product, and the resulting organic visibility compounds indefinitely — unlike ad spend that disappears the moment a campaign ends.',
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

// ── Careers ───────────────────────────────────────────────
export interface Career {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

export const careers: Career[] = [
  { slug: 'senior-growth-engineer', title: 'Senior Growth Engineer (HTML/JS/Performance)', department: 'Engineering', location: 'Remote', type: 'Full-time', description: 'Build zero-bloat static web frameworks, custom intake funnels, and optimized client platforms. You should have deep expertise in vanilla web engineering and performance budgeting.', requirements: ['Deep expertise in vanilla HTML, CSS, and JavaScript', 'Experience with performance budgeting and Core Web Vitals', 'Understanding of headless architecture and static site generation', 'Ability to build custom intake funnels and CRM integrations', 'Comfort with version control and modern development workflows', 'Full ownership of codebase architecture and site performance scoring'] },
  { slug: 'search-ai-architect', title: 'Search & AI Indexing Architect (SEO/AEO/GEO)', department: 'Search', location: 'Remote', type: 'Full-time', description: 'Declare entity schemas, audit LLM recommendations, and design programmatic comparison indexes. You should have deep experience mapping semantic entities and parsing scraper behaviors.', requirements: ['Deep expertise in technical SEO and semantic entity mapping', 'Understanding of LLM training data and citation patterns', 'Experience with JSON-LD structured data and knowledge graphs', 'Familiarity with AEO and GEO optimization techniques', 'Strong analytical skills for parsing scraper behaviors', 'Design and deploy indexing roadmaps for client portfolios'] },
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
