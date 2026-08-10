// Data for service-specific city pages (e.g. SEO/AEO/GEO in Dubai)
export const SOLUTIONS_CITIES = [
  { key: 'dubai', name: 'Dubai', country: 'United Arab Emirates', flag: '🇦🇪', badge: 'UAE' },
  { key: 'abudhabi', name: 'Abu Dhabi', country: 'United Arab Emirates', flag: '🇦🇪', badge: 'UAE' },
  { key: 'sanjose', name: 'San Jose', country: 'United States', flag: '🇺🇸', badge: 'USA' },
  { key: 'texas', name: 'Texas', country: 'United States', flag: '🇺🇸', badge: 'USA' },
  { key: 'fremont', name: 'Fremont', country: 'United States', flag: '🇺🇸', badge: 'USA' },
  { key: 'pleasanton', name: 'Pleasanton', country: 'United States', flag: '🇺🇸', badge: 'USA' },
] as const;

export type ServiceKey = 'seo-aeo-geo' | 'lead-gen' | 'social-media' | 'web-dev';
export type CityKey = typeof SOLUTIONS_CITIES[number]['key'];

export const SERVICES_META: Record<ServiceKey, { title: string; shortTitle: string; desc: string }> = {
  'seo-aeo-geo': {
    title: 'SEO / AEO / GEO Services',
    shortTitle: 'SEO/AEO/GEO',
    desc: 'Future-proof search visibility across Google, ChatGPT, Perplexity, and LLM-based answer engines.',
  },
  'lead-gen': {
    title: 'Lead Generation',
    shortTitle: 'Lead Gen',
    desc: 'High-intent B2B and B2C acquisition campaigns designed to scale sales pipelines and drive revenue.',
  },
  'social-media': {
    title: 'Social Media Management',
    shortTitle: 'Social Media',
    desc: 'Organic storytelling, high-performance executive branding, and paid acquisition on LinkedIn, Meta, and X.',
  },
  'web-dev': {
    title: 'Website Development',
    shortTitle: 'Web Dev',
    desc: 'High-performance, custom-crafted Next.js and React websites built for speed, aesthetics, and conversion.',
  },
};

// Custom contents helper to generate the 24 configurations with realistic, localized high-quality copy
export const getServiceCityData = (serviceKey: ServiceKey, cityKey: CityKey) => {
  const city = SOLUTIONS_CITIES.find(c => c.key === cityKey)!;
  const service = SERVICES_META[serviceKey];
  const cityName = city.name;

  // Customized taglines and descriptions
  let tagline = '';
  let sub = '';
  let whyCopy = '';
  let aboutCopy = '';
  let serviceList: [string, string, string][] = [];
  let stats: [string, string][] = [];
  let results: [string, string, string][] = [];
  let market: string[] = [];
  let industries: string[] = [];
  let resources: { title: string; desc: string; href: string }[] = [];

  const defaultProcess = [
    { step: '01', title: 'Deep Discovery', desc: 'We audit your technical stack, current rankings, and competitor search footprint in the local market.' },
    { step: '02', title: 'Growth Blueprint', desc: 'We build a 90-day roadmap targeting high-intent buyer terms and engine visibility indices.' },
    { step: '03', title: 'Execution & Optimization', desc: 'Our developers and content leads deploy code changes, write authority assets, and build brand citations.' },
    { step: '04', title: 'Attribution & Scale', desc: 'We connect rank gains and lead counts directly to pipeline value, adjusting monthly for compounding ROI.' },
  ];

  if (serviceKey === 'seo-aeo-geo') {
    tagline = `Dominate Search, Answer, and Generative Engines in ${cityName}.`;
    sub = `We optimize your brand presence across traditional search engines like Google and AI platforms like ChatGPT, Claude, Gemini, and Perplexity for ${cityName} audiences.`;
    whyCopy = `In ${cityName}, buyers no longer rely solely on Google. They ask AI engines for recommendations. Winning the modern search landscape means optimizing for both traditional algorithms and Large Language Models. We are the only agency in ${city.country} that integrates SEO, Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO) under one cohesive strategy.`;
    aboutCopy = `Our SEO, AEO, and GEO strategy in ${cityName} targets the complete funnel. We begin by securing top Google rankings for high-intent queries. Simultaneously, we optimize your site's structure, markdown syntax, and digital PR footprint to feed AI databases. This ensures when decision-makers in ${cityName} ask ChatGPT or Perplexity for the best partner in your niche, your brand is the primary recommendation.\n\nTraditional search is transforming, and we help you lead this change. By leveraging schema markups, citation engineering, and structured knowledge bases, we maximize your visibility on the channels where your local prospects are searching today.`;
    
    serviceList = [
      [`SEO Agency in ${cityName}`, `Rank #1 on Google for localized, commercial-intent buyer keywords.`, `seo`],
      [`Answer Engine Optimization (AEO)`, `Ensure ChatGPT, Claude, and Gemini reference your brand.`, `aeo`],
      [`Generative Engine Optimization (GEO)`, `Secure citations on Perplexity, SearchGPT, and Google Overviews.`, `geo`],
      [`Local Map Optimization`, `Dominate localized maps and near-me queries across ${cityName}.`, `local-seo`]
    ];

    stats = [
      ['97%', 'Search Engine Share'],
      ['45%+', 'AI Search Growth'],
      ['10x', 'Faster Authority Indexing'],
      ['Top 3', 'Average LLM Citations']
    ];

    results = [
      ['310%', 'Traffic Growth', `Average increase in organic visibility for our ${cityName} clients.`],
      ['#1', 'Google Rankings', `Achieved for high-competition commercial keywords.`],
      ['5.2x', 'LLM Mentions', `Improvement in ChatGPT and Perplexity brand recommendations.`],
      ['45 Days', 'To First Gains', `Noticeable uptick in indexation and organic search impressions.`]
    ];

    market = [
      `Bilingual query behaviors`,
      `AI engine citation patterns`,
      `Local user intent signals`,
      `Competitor backlink profile dynamics`,
      `Core Web Vitals and speed metrics`
    ];

    industries = ['Real Estate', 'B2B SaaS', 'Professional Services', 'Healthcare', 'Finance', 'E-Commerce'];

    resources = [
      { title: `Ultimate SEO/AEO/GEO Playbook`, desc: `How to adapt your digital presence for the age of AI search engines.`, href: `/blog` },
      { title: `${cityName} Search Dynamics Report`, desc: `An analytical breakdown of search volumes and local engine trends.`, href: `/blog` },
      { title: `Structured Data & Schema Guide`, desc: `Essential schemas to get indexed by LLMs and Answer Engines.`, href: `/blog` }
    ];
  } else if (serviceKey === 'lead-gen') {
    tagline = `Turn Search Traffic into Qualified Pipeline in ${cityName}.`;
    sub = `Data-driven B2B and B2C lead generation campaigns built on pay-per-click, paid social, and high-converting landing pages tailored for the ${cityName} market.`;
    whyCopy = `Most agencies focus on clicks; we focus on closed-won revenue. In ${cityName}'s premium market, acquiring high-quality leads requires sophisticated intent mapping, micro-targeted ad creatives, and frictionless conversion paths. We design custom acquisition engines that supply your sales team with warm, pre-qualified opportunities.`;
    aboutCopy = `Lead generation in ${cityName} demands a rigorous approach to audience targeting and budget allocation. We manage Google Ads, Meta Ads, and LinkedIn Marketing campaigns with complete transparency. By building custom middleware, we track leads from click to contract, ensuring your ad spend is optimized for cost-per-acquisition (CPA) and customer lifetime value (LTV).\n\nWhether you are targeting enterprise executives or high-net-worth consumers, our team handles copy, design, landing page creation, and lead scoring. This allows your team to skip cold outreach and focus entirely on closing deals.`;

    serviceList = [
      [`Google Search Ads`, `Capture high-intent buyers looking specifically for your solutions today.`, `lead-gen`],
      [`LinkedIn B2B Campaigns`, `Reach verified decision-makers, stakeholders, and executives in ${cityName}.`, `lead-gen`],
      [`High-Converting Landing Pages`, `Bespoke layouts engineered for maximum conversion and speed.`, `web-dev`],
      [`Funnel Optimization & Analytics`, `End-to-end attribution from initial impression to closed deal.`, `consultation`]
    ];

    stats = [
      ['4.8%', 'Average Landing Page Conv.'],
      ['-35%', 'Reduction in CPL'],
      ['94%', 'Lead Quality Match'],
      ['24/7', 'CRM Integration Lead Flow']
    ];

    results = [
      ['240%', 'Pipeline Volume', `Increase in SQLs (Sales Qualified Leads) within 90 days.`],
      ['-40%', 'Cost Per Lead (CPL)', `Average reduction compared to previous generic PPC agencies.`],
      ['3.8x', 'Sales Opportunities', `Created through direct search intent targeting.`],
      ['30 Days', 'To Campaign Launch', `From strategy alignment to live ad-sets and landing pages.`]
    ];

    market = [
      `Local ad auction density`,
      `Audience segmentation rules`,
      `High-net-worth buyer demographics`,
      `B2B procurement timelines`,
      `CRM conversion tracking models`
    ];

    industries = ['B2B Enterprise', 'Real Estate & PropTech', 'Financial Services', 'Legal Services', 'Healthcare & Clinics', 'SaaS'];

    resources = [
      { title: `High-Performance PPC Playbook`, desc: `Structuring Google and Meta campaigns for optimal lead quality.`, href: `/blog` },
      { title: `B2B Landing Page Blueprints`, desc: `Wireframes and psychology principles behind high-converting pages.`, href: `/blog` },
      { title: `Attribution & Analytics Guide`, desc: `How to trace leads from click to actual sales pipeline value.`, href: `/blog` }
    ];
  } else if (serviceKey === 'social-media') {
    tagline = `Build Executive Authority and Organic Brand Loyalty in ${cityName}.`;
    sub = `Premium social media management, organic engagement loops, and thought leadership campaigns designed to engage target audiences in ${cityName}.`;
    whyCopy = `Social media isn't just about posting regularly; it's about category dominance. For brands in ${cityName}, we create high-end visual assets, write compelling stories, and manage founder/executive profiles to build real industry authority. We build direct relationships between your executives and key local stakeholders.`;
    aboutCopy = `Social media management in ${cityName} is built around premium content execution and thought leadership. We believe in high-production assets — short-form video, structured slide decks, and insightful articles. Our specialized LinkedIn campaigns focus on executive branding, transforming your founders and leadership team into micro-influencers within your niche.\n\nWe handle scripting, video post-production, copywriting, and engagement monitoring. This keeps your brand consistently top-of-mind for potential buyers and talent, driving organic pipeline growth without relying solely on paid ads.`;

    serviceList = [
      [`Executive Branding on LinkedIn`, `Turn your leadership team into respected thought leaders.`, `social-media`],
      [`Organic Content Strategy`, `High-end slide decks, graphics, and articles tailored for your audience.`, `social-media`],
      [`Short-Form Video Production`, `Engaging Reels, Shorts, and TikToks designed for retention and reach.`, `social-media`],
      [`Community Engagement`, `Proactive community interaction to build brand loyalty and generate inbound DMs.`, `social-media`]
    ];

    stats = [
      ['4.2M+', 'Organic Impressions'],
      ['28%', 'Engagement Rate Boost'],
      ['2x', 'Inbound Lead Acceleration'],
      ['85%', 'Video Retention Improvement']
    ];

    results = [
      ['5.4x', 'Impression Velocity', `Growth in organic views across primary channels in 6 months.`],
      ['120%', 'Inbound Opportunities', `Increase in direct messages and inbound collaboration requests.`],
      ['Top 5%', 'Industry Share of Voice', `Achieved for client brand pages in their respective markets.`],
      ['30 Days', 'To Production Content', `From content calendar approval to fully edited visual assets.`]
    ];

    market = [
      `Trending content hooks`,
      `Algorithm distribution rules`,
      `Local visual asset styles`,
      `Thought leadership narrative arcs`,
      `Interactive layout formats`
    ];

    industries = ['Venture Capital', 'Technology & Startups', 'Real Estate', 'B2B Professional Services', 'Executive Coaching', 'Luxury Brands'];

    resources = [
      { title: `LinkedIn Thought Leadership Framework`, desc: `The exact content calendar template our founders use.`, href: `/blog` },
      { title: `Short-Form Video Optimization`, desc: `Editing styles, hook structures, and metrics that define viral reels.`, href: `/blog` },
      { title: `Corporate Storytelling Guide`, desc: `How to build a compelling narrative that converts followers to customers.`, href: `/blog` }
    ];
  } else if (serviceKey === 'web-dev') {
    tagline = `Bespoke, High-Performance Digital Experiences in ${cityName}.`;
    sub = `Custom React & Next.js websites built with premium aesthetics, micro-animations, and complete speed optimization for ${cityName} enterprises.`;
    whyCopy = `Your website is your ultimate digital storefront. In ${cityName}, a slow, templated WordPress site fails to reflect brand authority. We build custom web apps and marketing sites using React, Next.js, and modern CSS that load instantly, feel premium, and drive action.`;
    aboutCopy = `Our website development practice in ${cityName} is focused on combining visual excellence with technical performance. We implement custom animations using Framer Motion, set up server-side rendering for optimal Core Web Vitals, and configure headless CMS systems for seamless content updates.\n\nEvery site we deliver scores above 90 on Google PageSpeed Insights, guaranteeing high rankings and a smooth user experience. We build responsive layouts that handle traffic spikes and integrate with your CRM and analytics tools.`;

    serviceList = [
      [`Headless React & Next.js`, `Fast, server-side rendered websites designed to rank and scale.`, `web-dev`],
      [`Premium UI/UX Design`, `Custom visual interfaces, responsive layouts, and rich animations.`, `web-dev`],
      [`Headless CMS Integration`, `Sanity, Contentful, or Strapi setups for easy content updates.`, `web-dev`],
      [`PageSpeed & SEO Optimization`, `Guaranteed 90+ Core Web Vitals score for organic performance.`, `web-dev`]
    ];

    stats = [
      ['95+', 'Google PageSpeed Score'],
      ['< 1s', 'First Contentful Paint'],
      ['2x', 'Conversion Rate Lift'],
      ['100%', 'Mobile Responsive UX']
    ];

    results = [
      ['2.4x', 'Site Speed Increase', `Average page load time reduction compared to legacy systems.`],
      ['180%', 'Engagement Time', `Increase in average session duration due to clean UX.`],
      ['99.9%', 'Uptime Security', `Ensured by serverless deployments and CDNs.`],
      ['45 Days', 'To Final Launch', `Typical project lifecycle from wireframe to production.`]
    ];

    market = [
      `Next.js framework updates`,
      `Core Web Vitals benchmarks`,
      `Headless CMS workflows`,
      `Tailwind and CSS optimization`,
      `Accessibility (WCAG) guidelines`
    ];

    industries = ['B2B Enterprise', 'Tech Startups', 'E-Commerce', 'Real Estate', 'SaaS', 'Creative Portfolios'];

    resources = [
      { title: `Modern Web Development Guide`, desc: `Next.js, Tailwind, and Framer Motion architectures.`, href: `/blog` },
      { title: `PageSpeed Optimization Blueprint`, desc: `How we achieve a 95+ score on PageSpeed Insights.`, href: `/blog` },
      { title: `Choosing a Headless CMS`, desc: `A comparative study of Sanity, Contentful, and Strapi.`, href: `/blog` }
    ];
  }

  const testimonials = [
    {
      name: "Sriram Sankar",
      role: "FOUNDER",
      company: "Nyx Wolves",
      quote: "Straightforward, committed, and reliable. Zesh is among the rare few agencies that actually deliver exactly what they promise without any fluff."
    },
    {
      name: "Abdul Khan",
      role: "Ex-CMO",
      company: "TATA · Ex-Financial Advisor to Dhirubhai & Mukesh Ambani",
      quote: "Zesh combines marketing depth, consumer insights, innovation, and creativity with a genuine passion for work and an outcome focus unlike any other agency."
    },
    {
      name: "Hafsa Sayed",
      role: "FOUNDER",
      company: "HAFSA The Couture",
      quote: "Extremely professional and goal-oriented. Zesh understands that marketing must justify itself on the balance sheet — and they deliver exactly that."
    }
  ];

  return {
    name: `${service.shortTitle} in ${cityName}`,
    cityName: cityName,
    serviceTitle: service.title,
    serviceShortTitle: service.shortTitle,
    country: city.country,
    flag: city.flag,
    badge: city.badge,
    tagline: tagline,
    sub: sub,
    stats: stats,
    services: serviceList,
    why: whyCopy,
    market: market,
    industries: industries,
    results: results,
    testimonials: testimonials,
    about: aboutCopy,
    resources: resources,
    process: defaultProcess,
  };
};

// Map generated flat slugs to their keys
export const SERVICE_CITY_SLUG_MAP: Record<string, { serviceKey: ServiceKey; cityKey: CityKey }> = {};

for (const serviceKey of ['seo-aeo-geo', 'lead-gen', 'social-media', 'web-dev'] as ServiceKey[]) {
  for (const city of SOLUTIONS_CITIES) {
    const slug = `${serviceKey}_service_in_${city.key}`;
    SERVICE_CITY_SLUG_MAP[slug] = { serviceKey, cityKey: city.key };
  }
}

export const VALID_SERVICE_CITY_SLUGS = new Set(Object.keys(SERVICE_CITY_SLUG_MAP));
