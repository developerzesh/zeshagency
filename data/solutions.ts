export interface Solution {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  features: string[];
  outcomes: string[];
  roadmap: { phase: string; title: string; description: string }[];
}

export const solutions: Solution[] = [
  {
    slug: 'seo',
    title: 'Search Engine Optimization',
    shortTitle: 'SEO',
    tagline: 'Dominate organic search with precision-engineered strategies.',
    description: 'Our SEO methodology goes beyond keywords. We architect comprehensive search ecosystems that compound over time — building authority, capturing intent, and converting visibility into revenue. Every strategy is backed by data, refined by testing, and built to scale.',
    features: ['Technical SEO Architecture', 'Content Strategy & Execution', 'Authority & Link Building', 'SERP Feature Optimization', 'Competitive Intelligence', 'Performance Monitoring'],
    outcomes: ['Organic traffic growth 3–8x', 'Top-3 rankings for priority terms', 'Qualified lead increase 150%+', 'Compounding monthly returns'],
    roadmap: [
      { phase: '01', title: 'Audit & Architecture', description: 'Comprehensive technical audit, competitive analysis, and strategic framework design.' },
      { phase: '02', title: 'Foundation Build', description: 'Technical fixes, content architecture, and authority foundation establishment.' },
      { phase: '03', title: 'Scale & Compound', description: 'Content velocity, link acquisition, and continuous optimization for compounding growth.' },
      { phase: '04', title: 'Defend & Expand', description: 'Market leadership defense, new opportunity capture, and strategic expansion.' },
    ],
  },
  {
    slug: 'aeo',
    title: 'Answer Engine Optimization',
    shortTitle: 'AEO',
    tagline: 'Become the source AI cites when it answers.',
    description: 'As AI reshapes search, being found isn\'t enough — you must be cited. Our AEO framework ensures your brand becomes the authoritative source that language models reference, featured snippets surface, and voice assistants recommend.',
    features: ['Structured Data Architecture', 'Knowledge Graph Optimization', 'Featured Snippet Capture', 'Voice Search Readiness', 'AI Citation Strategy', 'Entity Authority Building'],
    outcomes: ['AI citation rate 40%+', 'Featured snippet ownership 3x', 'Knowledge panel establishment', 'Voice search visibility'],
    roadmap: [
      { phase: '01', title: 'Entity Mapping', description: 'Define your brand entity, relationships, and knowledge graph architecture.' },
      { phase: '02', title: 'Structure & Schema', description: 'Implement comprehensive structured data and content architecture for AI parsing.' },
      { phase: '03', title: 'Authority Seeding', description: 'Distribute authoritative content across AI training surfaces and citation sources.' },
      { phase: '04', title: 'Citation Monitoring', description: 'Track AI mentions, optimize for citation, and expand entity authority.' },
    ],
  },
  {
    slug: 'geo',
    title: 'Generative Engine Optimization',
    shortTitle: 'GEO',
    tagline: 'Engineer your presence in generative AI outputs.',
    description: 'Generative AI is the new search frontier. Our GEO practice ensures your brand appears in AI-generated summaries, recommendations, and comparisons — positioning you where the next billion queries will be answered.',
    features: ['AI Output Analysis', 'Generative Content Strategy', 'Model Training Optimization', 'Brand Mention Engineering', 'Competitive AI Positioning', 'Output Monitoring & Adaptation'],
    outcomes: ['AI output appearance 5x', 'Brand mention in AI summaries', 'Competitive AI positioning', 'First-mover advantage capture'],
    roadmap: [
      { phase: '01', title: 'AI Landscape Audit', description: 'Map your current AI visibility across ChatGPT, Gemini, Perplexity, and Claude.' },
      { phase: '02', title: 'Content Engineering', description: 'Create content specifically architected for AI model ingestion and citation.' },
      { phase: '03', title: 'Distribution & Training', description: 'Seed content across AI training surfaces and citation pathways.' },
      { phase: '04', title: 'Monitor & Optimize', description: 'Track AI output mentions and continuously refine for improved visibility.' },
    ],
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    shortTitle: 'Development',
    tagline: 'Build digital infrastructure that converts and performs.',
    description: 'We build websites that are strategic assets — engineered for speed, optimized for conversion, and architected for scale. Every technical decision serves a business outcome.',
    features: ['Headless CMS Architecture', 'Performance Engineering', 'Conversion Rate Optimization', 'Technical SEO Integration', 'Progressive Web Apps', 'API-First Development'],
    outcomes: ['Page speed scores 95+', 'Conversion rate lift 2–4x', 'Core Web Vitals optimized', 'Scalable architecture'],
    roadmap: [
      { phase: '01', title: 'Strategy & Architecture', description: 'Technical specification, information architecture, and platform selection.' },
      { phase: '02', title: 'Design & Prototyping', description: 'High-fidelity design, interaction prototyping, and stakeholder alignment.' },
      { phase: '03', title: 'Build & Integrate', description: 'Development, CMS integration, and third-party service connection.' },
      { phase: '04', title: 'Launch & Optimize', description: 'Performance optimization, QA, launch, and post-launch iteration.' },
    ],
  },
  {
    slug: 'smo',
    title: 'Social Media Optimization',
    shortTitle: 'SMO',
    tagline: 'Turn social presence into a growth channel.',
    description: 'We optimize your social media presence across every platform to build authority, drive engagement, and generate leads. Our SMO approach combines platform-specific strategy with content optimization and community management.',
    features: ['Platform Strategy & Audit', 'Content Optimization', 'Community Management', 'Influencer Collaboration', 'Paid Social Campaigns', 'Analytics & Reporting'],
    outcomes: ['Engagement rate 5x industry avg', 'Follower growth 200%+', 'Social-driven leads 3x', 'Brand authority establishment'],
    roadmap: [
      { phase: '01', title: 'Audit & Strategy', description: 'Platform audit, competitive analysis, and content strategy development.' },
      { phase: '02', title: 'Content System Build', description: 'Content creation workflows, templates, and publishing infrastructure.' },
      { phase: '03', title: 'Growth & Engagement', description: 'Organic growth tactics, community building, and engagement optimization.' },
      { phase: '04', title: 'Scale & Monetize', description: 'Conversion optimization, paid amplification, and revenue attribution.' },
    ],
  },
];
