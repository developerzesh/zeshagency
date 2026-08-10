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

// Per-city, per-service localized content lookup table
const CITY_SERVICE_DATA: Record<string, Record<string, {
  tagline: string; sub: string; why: string; about: string;
  services: [string, string, string][];
  stats: [string, string][];
  results: [string, string, string][];
  market: string[];
  industries: string[];
  resources: { title: string; desc: string; href: string }[];
  process: { step: string; title: string; desc: string }[];
}>> = {
  dubai: {
      'seo-aeo-geo': {
        tagline: `Drive Measurable Revenue Through Search & AI Engines in Dubai.`,
        sub: `We architect bilingual search authority across Google.ae, ChatGPT, and Perplexity, ensuring your brand captures high-intent demand from Dubai's enterprise and consumer markets.`,
        why: `Dubai's competitive landscape requires more than generic keyword optimization. Decision-makers evaluate partners across multiple surfaces — from traditional Google.ae searches to AI-driven recommendations in Perplexity. We unify SEO, AEO, and GEO to position your business exactly where your next clients are looking, focusing on profitability rather than vanity metrics.`,
        about: `Our strategy for Dubai businesses centers entirely on ROI. We bypass empty traffic to focus on acquiring high-value leads through technical excellence and authoritative content in both Arabic and English. By implementing advanced schema markup, optimizing structured data, and building genuine entity authority, we ensure your solutions are cited by the AI models powering modern search.

The era of simple ten-blue-links is over. We future-proof your digital presence, turning complex search algorithms into a predictable engine for business growth across the UAE without relying on unnecessary retainers.`,
        services: [
        ["Revenue-Focused SEO","Target high-intent Arabic and English queries on Google.ae that convert to actual sales.","seo"],
        ["Answer Engine Optimization","Structure your digital presence so ChatGPT and Claude confidently recommend your business.","aeo"],
        ["Generative Engine Optimization","Secure prominent citations in Perplexity and Google AI Overviews for Dubai-based searches.","geo"],
        ["Local Market Dominance","Capture highly qualified local demand across Google Maps and regional search tools.","local-seo"]
      ],
        stats: [
        ["99%","Internet Penetration"],
        ["73%","Mobile Search Share"],
        ["4.6M+","Digital Users"],
        ["Top 10","Global Business Hub"]
      ],
        results: [
        ["340%","Traffic Growth","Average organic increase for our Dubai clients."],
        ["#1","Google Rankings","Achieved for high-competition Dubai commercial keywords."],
        ["5.8x","LLM Mentions","Improvement in ChatGPT and Perplexity brand recommendations."],
        ["40 Days","To First Gains","Noticeable uptick in indexation and organic impressions."]
      ],
        market: [
          "Bilingual Arabic-English query behaviours",
          "AI engine citation patterns in the UAE",
          "High-intent MENA buyer signals",
          "Competitor backlink profile dynamics",
          "Core Web Vitals and speed metrics"
        ],
        industries: ["Real Estate & PropTech","B2B Enterprise","Professional Services","Healthcare & Wellness","Finance & FinTech","E-Commerce"],
        resources: [
        {"title":"Dubai Search Authority Guide","desc":"Strategies to build bilingual visibility across traditional and AI search engines.","href":"/blog"},
        {"title":"AI Search Impact in the UAE","desc":"Analyzing how Dubai decision-makers leverage AI for purchasing.","href":"/blog"},
        {"title":"Technical SEO for MENA","desc":"Structured data and schema markup essentials for the UAE market.","href":"/blog"}
      ],
        process: [
        {"step":"01","title":"Data-Driven Audit","desc":"We evaluate your current footprint across Google.ae and major AI engines to identify revenue-blocking gaps."},
        {"step":"02","title":"Strategic Roadmap","desc":"We develop a 90-day plan prioritizing high-ROI Arabic and English search terms and generative AI placements."},
        {"step":"03","title":"Technical Execution","desc":"Our team implements structural improvements, authoritative bilingual content, and advanced schema."},
        {"step":"04","title":"Transparent Reporting","desc":"Monthly performance reviews connect your search visibility directly to pipeline growth and revenue."}
      ],
      },
      'lead-gen': {
        tagline: `Convert Dubai's High-Intent Market Into Qualified Pipeline.`,
        sub: `Precision B2B and B2C lead generation campaigns built for Dubai's competitive landscape — targeting decision-makers across Google.ae, LinkedIn, and Meta with data-backed strategies.`,
        why: `Dubai buyers are discerning. They evaluate multiple vendors, consult peers, and expect premium service from the first touchpoint. A generic PPC campaign wastes budget on unqualified clicks. We build intent-mapped acquisition funnels that align ad spend with genuine buyer signals, ensuring every lead that reaches your team is worth pursuing.`,
        about: `Lead generation in Dubai demands a sophisticated approach to audience targeting and creative localisation. We manage Google Ads, Meta Ads, and LinkedIn campaigns with full transparency, calibrating copy for both Arabic and English-speaking decision-makers.

Every campaign includes custom landing pages, CRM integration, and lead scoring so your sales team focuses on closing, not filtering. We track cost-per-acquisition from initial click to signed contract, adjusting monthly based on what actually drives revenue.`,
        services: [
        ["Google Ads Dubai","Capture high-intent buyers on Google.ae actively searching for your solutions today.","lead-gen"],
        ["LinkedIn B2B Campaigns","Reach verified enterprise decision-makers and executives operating in the UAE market.","lead-gen"],
        ["High-Converting Landing Pages","Bespoke bilingual conversion pages engineered for Dubai's premium market expectations.","web-dev"],
        ["Funnel Attribution & Analytics","End-to-end CRM tracking from initial impression to closed deal in the UAE.","lead-gen"]
      ],
        stats: [
        ["5.1%","Landing Page Conversion"],
        ["-38%","Reduction in CPL"],
        ["96%","Lead Quality Match"],
        ["24/7","CRM Integration"]
      ],
        results: [
        ["260%","Pipeline Volume","Increase in qualified leads within 90 days."],
        ["-42%","Cost Per Lead","Average reduction vs. previous PPC campaigns."],
        ["4.1x","Sales Opportunities","Created through direct search intent targeting."],
        ["28 Days","To Campaign Launch","From strategy to live ad-sets and landing pages."]
      ],
        market: [
          "UAE ad auction density and competitive CPC",
          "Arabic-English audience segmentation rules",
          "High-net-worth buyer demographics in Dubai",
          "B2B procurement decision timelines",
          "CRM conversion tracking models"
        ],
        industries: ["B2B Enterprise","Real Estate & PropTech","Financial Services","Legal Services","Healthcare & Clinics","SaaS"],
        resources: [
        {"title":"Dubai PPC Playbook","desc":"Structuring Google and Meta campaigns for the UAE's premium market.","href":"/blog"},
        {"title":"B2B Landing Page Blueprints","desc":"Psychology principles behind high-converting pages for Dubai audiences.","href":"/blog"},
        {"title":"UAE Attribution Guide","desc":"How to trace leads from click to actual sales pipeline value in the UAE.","href":"/blog"}
      ],
        process: [
        {"step":"01","title":"Market Audit","desc":"We review your current acquisition channels and identify the highest-ROI opportunities in Dubai."},
        {"step":"02","title":"Campaign Architecture","desc":"We build intent-mapped campaigns targeting Dubai's specific buyer segments and decision stages."},
        {"step":"03","title":"Launch & Optimise","desc":"Our team deploys, monitors, and refines campaigns based on Dubai-specific performance data."},
        {"step":"04","title":"Pipeline Reporting","desc":"Monthly reports track qualified leads, cost-per-acquisition, and direct revenue contribution."}
      ],
      },
      'social-media': {
        tagline: `Build Genuine Brand Authority Across Dubai's Digital Landscape.`,
        sub: `Premium social media management for Dubai enterprises — executive branding on LinkedIn, high-production content across Meta platforms, and community strategies that convert followers into clients.`,
        why: `Social media in Dubai is a trust-building exercise before it's a sales channel. Your potential clients are researching your brand on Instagram before they reply to your email. We create content that demonstrates expertise, builds credibility with UAE audiences, and positions your leadership team as voices worth following.`,
        about: `Our Dubai social practice focuses on content quality over posting frequency. We produce executive thought leadership on LinkedIn, high-production video content for Instagram and TikTok, and platform-specific engagement strategies that build genuine relationships with your target market.

We handle scripting, production, editing, copywriting, and community monitoring — freeing your team to focus on operations while we build the brand presence that generates inbound inquiries.`,
        services: [
        ["Executive Branding on LinkedIn","Position your Dubai leadership team as respected industry voices.","social-media"],
        ["UAE Content Strategy","High-production Arabic and English content tailored for UAE audiences and platforms.","social-media"],
        ["Short-Form Video Production","Engaging Reels and TikToks built for Dubai's mobile-first audience.","social-media"],
        ["Community Engagement","Proactive relationship building across Dubai's professional networks.","social-media"]
      ],
        stats: [
        ["5.2M+","Organic Impressions"],
        ["31%","Engagement Rate Boost"],
        ["2.4x","Inbound Lead Acceleration"],
        ["88%","Video Retention Improvement"]
      ],
        results: [
        ["5.9x","Impression Growth","Organic reach across Dubai social channels in 6 months."],
        ["135%","Inbound Opportunities","Increase in direct inquiries from social channels."],
        ["Top 5%","Industry Authority","Achieved for client profiles in UAE markets."],
        ["25 Days","To First Content","From approval to published, production-quality assets."]
      ],
        market: [
          "UAE trending content formats and hooks",
          "Platform algorithm rules for MENA region",
          "Dubai audience visual preferences",
          "Arabic-English thought leadership narrative",
          "Bilingual engagement patterns"
        ],
        industries: ["Real Estate","Luxury & Lifestyle","Professional Services","Technology & SaaS","Executive Coaching","Finance"],
        resources: [
        {"title":"UAE LinkedIn Authority Framework","desc":"Building executive presence for Dubai business leaders.","href":"/blog"},
        {"title":"Dubai Short-Form Video Guide","desc":"Production standards and hooks that retain UAE audiences.","href":"/blog"},
        {"title":"Arabic-English Content Strategy","desc":"Creating bilingual content that resonates in the UAE.","href":"/blog"}
      ],
        process: [
        {"step":"01","title":"Brand Audit","desc":"We assess your current social presence and identify gaps relative to Dubai's competitive market."},
        {"step":"02","title":"Content Strategy","desc":"We design a platform-specific plan aligned with your audience and business objectives in the UAE."},
        {"step":"03","title":"Production & Publishing","desc":"Our team creates, edits, and publishes high-quality bilingual content on a consistent schedule."},
        {"step":"04","title":"Growth Reporting","desc":"Monthly reports track reach, engagement, and inbound inquiries generated through social channels."}
      ],
      },
      'web-dev': {
        tagline: `Premium Web Experiences That Reflect Dubai's Brand Standards.`,
        sub: `Custom React and Next.js websites built for Dubai enterprises — combining premium design, bilingual functionality, and performance optimization that meets the UAE's high market expectations.`,
        why: `In Dubai's premium market, your website is evaluated like a business card. A slow, templated site signals that you cut corners — and your prospects will assume the same of your services. We build custom platforms that load instantly, present your brand impeccably, and convert visitors into inquiries.`,
        about: `Our Dubai web practice delivers platforms built for the UAE's demanding digital standards. We implement bilingual React and Next.js architectures, Framer Motion animations, and headless CMS systems that your team can update without developer dependency.

Every platform we deliver scores above 90 on Google PageSpeed Insights and is optimised for local SEO, ensuring your site ranks and performs across both Arabic and English searches in the UAE.`,
        services: [
        ["Bilingual React & Next.js","Arabic-English websites built for Dubai's diverse enterprise market.","web-dev"],
        ["Premium UI/UX Design","Custom interfaces that reflect the visual standards Dubai's clients expect.","web-dev"],
        ["Headless CMS Integration","Sanity or Contentful setups for seamless bilingual content management.","web-dev"],
        ["PageSpeed & Local SEO","Guaranteed 90+ Core Web Vitals optimised for Google.ae performance.","web-dev"]
      ],
        stats: [
        ["97+","PageSpeed Score"],
        ["< 0.8s","First Contentful Paint"],
        ["2.3x","Conversion Rate Lift"],
        ["100%","Bilingual UX"]
      ],
        results: [
        ["2.8x","Speed Increase","Page load improvement vs. legacy Dubai sites."],
        ["195%","Session Duration","Increase in time-on-site after platform relaunch."],
        ["99.9%","Uptime","Ensured via serverless CDN deployment."],
        ["40 Days","To Launch","Typical project timeline from wireframe to production."]
      ],
        market: [
          "Bilingual web architecture standards",
          "UAE Core Web Vitals benchmarks",
          "Local SEO web requirements for Google.ae",
          "Headless CMS workflows for Arabic content",
          "Accessibility requirements for UAE businesses"
        ],
        industries: ["Real Estate & PropTech","Professional Services","Finance & FinTech","Healthcare","Luxury Retail","B2B Enterprise"],
        resources: [
        {"title":"Dubai Web Development Guide","desc":"Building bilingual platforms that meet UAE enterprise standards.","href":"/blog"},
        {"title":"Next.js for MENA Markets","desc":"Architecture decisions for Arabic-English web performance.","href":"/blog"},
        {"title":"Core Web Vitals UAE Benchmark","desc":"Performance standards for competitive Dubai markets.","href":"/blog"}
      ],
        process: [
        {"step":"01","title":"Platform Audit","desc":"We evaluate your current website against Dubai's enterprise standards and identify conversion blockers."},
        {"step":"02","title":"Design & Architecture","desc":"We design bilingual layouts reflecting your brand's market position in the UAE."},
        {"step":"03","title":"Development","desc":"Our team builds fast, accessible, and conversion-optimised platforms using modern frameworks."},
        {"step":"04","title":"Launch & Reporting","desc":"Post-launch performance tracking and SEO monitoring for ongoing UAE market relevance."}
      ],
      },
  },
  abudhabi: {
      'seo-aeo-geo': {
        tagline: `Secure Institutional Search Authority in Abu Dhabi.`,
        sub: `We engineer bilingual search dominance across Google.ae and emerging AI engines, establishing your firm as the definitive choice for Abu Dhabi's enterprise and government sectors.`,
        why: `In Abu Dhabi, visibility without credibility is useless. Sovereign wealth funds, government procurement teams, and major enterprises conduct exhaustive research prior to engagement. We design search strategies that demonstrate profound expertise and reliability, capturing high-value institutional attention across traditional search and AI platforms.`,
        about: `Our Abu Dhabi search methodology is engineered for long-cycle, high-stakes B2B procurement. We go beyond generic traffic generation to secure top-tier placements for complex enterprise queries. By structuring your digital assets for AI comprehension, we ensure your firm is the recommended entity when decision-makers query ChatGPT or Perplexity for industry-leading solutions.

Succeeding in the capital requires a nuanced understanding of bilingual trust signals. We build the technical infrastructure and authoritative content that sophisticated Abu Dhabi buyers demand before initiating a conversation.`,
        services: [
        ["Enterprise SEO Abu Dhabi","Target critical B2B and government procurement queries on Google.ae with precision.","seo"],
        ["Answer Engine Optimization","Structure institutional data so AI models cite your firm as an authoritative source.","aeo"],
        ["Generative Engine Optimization","Claim strategic visibility within AI overviews for Abu Dhabi's most valuable search terms.","geo"],
        ["Capital Market Local SEO","Establish unshakeable local relevance across Abu Dhabi's key commercial districts.","local-seo"]
      ],
        stats: [
        ["98%","Internet Penetration"],
        ["68%","B2B Research on Search"],
        ["3.2M+","Digital Users"],
        ["Government Hub","UAE Capital"]
      ],
        results: [
        ["290%","Organic Visibility","Increase for our Abu Dhabi enterprise clients."],
        ["Top 3","Institutional Queries","Ranking achieved for high-value procurement keywords."],
        ["4.8x","AI Citations","Improvement in LLM recommendation frequency."],
        ["50 Days","To Results","From technical audit to measurable search gains."]
      ],
        market: [
          "Government and institutional procurement query patterns",
          "Bilingual Arabic-English enterprise search behaviour",
          "AI engine citation patterns in UAE B2B",
          "Sovereign wealth fund research methodology",
          "Capital city regulatory content requirements"
        ],
        industries: ["Government & Public Sector","Energy & Utilities","Finance & Banking","B2B Enterprise","Professional Services","Healthcare"],
        resources: [
        {"title":"Reaching Institutional Buyers","desc":"Search strategies tailored for the UAE capital's government sectors.","href":"/blog"},
        {"title":"Enterprise AEO Framework","desc":"Navigating AI engine influence in Abu Dhabi procurement.","href":"/blog"},
        {"title":"Bilingual Authority Content","desc":"Crafting Arabic-first technical content for enterprises.","href":"/blog"}
      ],
        process: [
        {"step":"01","title":"Market Positioning Audit","desc":"We analyze your current search footprint against the rigorous standards of Abu Dhabi institutional buyers."},
        {"step":"02","title":"Strategic Roadmap","desc":"We craft a comprehensive plan emphasizing trust signals, bilingual depth, and AI platform visibility."},
        {"step":"03","title":"Technical Deployment","desc":"Our specialists execute advanced SEO protocols, publish authoritative content, and refine schema data."},
        {"step":"04","title":"Pipeline Analytics","desc":"We report strictly on metrics that matter: qualified enterprise inquiries and measurable revenue contribution."}
      ],
      },
      'lead-gen': {
        tagline: `Generate Enterprise-Grade Leads in Abu Dhabi.`,
        sub: `Data-driven acquisition campaigns engineered for Abu Dhabi's institutional market — reaching government stakeholders, enterprise procurement teams, and C-suite decision-makers.`,
        why: `Abu Dhabi's procurement cycles are longer and more deliberate than most markets. A generic lead generation campaign that works in consumer markets will fail here. We build intent-layered acquisition strategies that respect the Abu Dhabi buyer's research process, nurturing institutional interest into qualified opportunities.`,
        about: `Lead generation in Abu Dhabi requires a different approach to audience targeting, offer structure, and follow-up cadence. We specialise in high-value B2B campaigns across Google, LinkedIn, and sector-specific platforms that reach procurement officers, department heads, and board-level stakeholders.

Every campaign includes CRM integration, lead scoring, and transparent attribution so your business development team invests time only in opportunities with genuine potential.`,
        services: [
        ["Enterprise Google Ads","Target high-intent institutional queries on Google.ae for Abu Dhabi's B2B market.","lead-gen"],
        ["LinkedIn Decision-Maker Campaigns","Reach UAE government, banking, and enterprise decision-makers at scale.","lead-gen"],
        ["Institutional Landing Pages","High-trust conversion pages tailored to Abu Dhabi's institutional buyer expectations.","web-dev"],
        ["Pipeline Attribution","Track institutional leads from first touch to contract across Abu Dhabi channels.","lead-gen"]
      ],
        stats: [
        ["4.6%","Landing Page Conversion"],
        ["-30%","Reduction in CPL"],
        ["97%","Lead Quality Match"],
        ["B2B Focus","Institutional Targeting"]
      ],
        results: [
        ["210%","Pipeline Growth","Qualified enterprise leads in Abu Dhabi within 90 days."],
        ["-35%","Cost Per Lead","Reduction through precise institutional targeting."],
        ["3.5x","Opportunities Created","Through aligned intent-based campaigns."],
        ["32 Days","To Campaign Launch","From brief to live institutional campaigns."]
      ],
        market: [
          "Abu Dhabi institutional procurement timelines",
          "Government tender research patterns",
          "Enterprise audience segmentation in UAE capital",
          "Long-cycle B2B buyer behaviour",
          "CRM integration for complex sales pipelines"
        ],
        industries: ["Government & Public Sector","Energy & Infrastructure","Finance & Banking","Professional Services","Healthcare","Consulting"],
        resources: [
        {"title":"Abu Dhabi B2B Lead Generation Guide","desc":"Acquisition strategies for UAE capital institutional markets.","href":"/blog"},
        {"title":"Government Sector Lead Gen","desc":"Targeting procurement teams and departmental stakeholders effectively.","href":"/blog"},
        {"title":"Long-Cycle B2B Attribution","desc":"Tracking institutional opportunities across extended sales cycles.","href":"/blog"}
      ],
        process: [
        {"step":"01","title":"Institutional Audit","desc":"We map your acquisition gaps against Abu Dhabi's specific enterprise buyer journey."},
        {"step":"02","title":"Campaign Design","desc":"We build campaigns calibrated to institutional decision-making timelines and channels."},
        {"step":"03","title":"Launch & Refine","desc":"Our team deploys and optimises based on Abu Dhabi institutional engagement signals."},
        {"step":"04","title":"Pipeline Reporting","desc":"Monthly reports track qualified opportunities and direct revenue contribution."}
      ],
      },
      'social-media': {
        tagline: `Build Institutional Authority Through Social Media in Abu Dhabi.`,
        sub: `Premium social media management for Abu Dhabi's enterprise and government-adjacent market — building the credibility that institutional buyers require before initiating a business relationship.`,
        why: `Institutional buyers in Abu Dhabi research firms extensively before engaging. Your LinkedIn presence, the quality of your thought leadership, and the professionalism of your content all contribute to the trust threshold they need to cross before reaching out. We build that trust systematically.`,
        about: `Our Abu Dhabi social practice focuses on executive authority building and institutional content strategy. We create Arabic and English thought leadership, manage corporate LinkedIn profiles, and produce high-quality content that demonstrates your firm's expertise in the sectors Abu Dhabi's decision-makers care about.

We handle the complete content lifecycle — research, scripting, design, publishing, and engagement monitoring — maintaining the professional standard that Abu Dhabi's market demands.`,
        services: [
        ["Corporate LinkedIn Authority","Establish your firm as a trusted voice in Abu Dhabi's institutional market.","social-media"],
        ["Bilingual Content Strategy","Arabic and English thought leadership content for UAE institutional audiences.","social-media"],
        ["Executive Profile Management","Position your leadership team as recognised authorities in their sectors.","social-media"],
        ["Community & Engagement","Build genuine relationships within Abu Dhabi's professional networks.","social-media"]
      ],
        stats: [
        ["3.8M+","Professional Network Reach"],
        ["27%","Engagement Rate Boost"],
        ["2.1x","Inbound Inquiries"],
        ["90%","Content Retention Rate"]
      ],
        results: [
        ["4.5x","Professional Reach","Growth in Abu Dhabi institutional network engagement."],
        ["115%","Inbound Opportunities","Increase in professional inquiries via social channels."],
        ["Top 10%","Sector Authority","Achieved for client profiles in UAE institutional markets."],
        ["30 Days","To Published Content","From strategy approval to live, bilingual assets."]
      ],
        market: [
          "Abu Dhabi institutional content expectations",
          "Government-adjacent audience behaviour",
          "Bilingual Arabic-English professional content",
          "UAE LinkedIn usage patterns",
          "Institutional trust-building content formats"
        ],
        industries: ["Government & Public Sector","Energy & Infrastructure","Finance & Banking","Consulting","Healthcare","Professional Services"],
        resources: [
        {"title":"Abu Dhabi LinkedIn Authority Guide","desc":"Building professional authority for UAE institutional markets.","href":"/blog"},
        {"title":"Bilingual Executive Content","desc":"Creating Arabic-English thought leadership for Abu Dhabi audiences.","href":"/blog"},
        {"title":"Institutional Trust Signals","desc":"Social content strategies that satisfy enterprise buyer research.","href":"/blog"}
      ],
        process: [
        {"step":"01","title":"Authority Audit","desc":"We evaluate your current social presence against Abu Dhabi institutional expectations."},
        {"step":"02","title":"Content Architecture","desc":"We design a bilingual content plan aligned with your target institutional audience."},
        {"step":"03","title":"Production & Publishing","desc":"Our team creates and publishes authoritative content on a consistent cadence."},
        {"step":"04","title":"Authority Reporting","desc":"Monthly tracking of reach, professional engagement, and inbound inquiry generation."}
      ],
      },
      'web-dev': {
        tagline: `Enterprise-Grade Web Platforms for Abu Dhabi's Institutional Market.`,
        sub: `Custom bilingual React and Next.js websites built to meet the credibility standards of Abu Dhabi's government, enterprise, and professional service sectors.`,
        why: `Your website is often the first formal evaluation point for an Abu Dhabi institutional buyer. A slow, generic, or unprofessional platform signals risk before a conversation begins. We build platforms that project the authority, depth, and reliability that Abu Dhabi's institutional market demands.`,
        about: `Our Abu Dhabi web practice builds enterprise-grade digital platforms that meet the exacting standards of government-adjacent and institutional markets. We implement bilingual Arabic-English architectures, enterprise CMS solutions, and performance-optimised frameworks that load reliably across the UAE's network infrastructure.

Every platform we deliver achieves 90+ Google PageSpeed scores and is structured for long-term SEO performance on Google.ae, ensuring your firm maintains competitive visibility in Abu Dhabi's institutional search landscape.`,
        services: [
        ["Bilingual Enterprise Websites","Arabic-English platforms built to Abu Dhabi's institutional credibility standards.","web-dev"],
        ["Government-Standard UI/UX","Interfaces that project authority and reliability for UAE institutional audiences.","web-dev"],
        ["Enterprise CMS Integration","Scalable content management for bilingual institutional website operations.","web-dev"],
        ["Performance & Security","90+ PageSpeed scores with enterprise-level hosting and security configurations.","web-dev"]
      ],
        stats: [
        ["96+","PageSpeed Score"],
        ["< 1.0s","First Contentful Paint"],
        ["2.1x","Institutional Conversion"],
        ["100%","Bilingual Architecture"]
      ],
        results: [
        ["2.5x","Platform Speed","Improvement vs. previous Abu Dhabi enterprise sites."],
        ["170%","Session Engagement","Increase in time-on-site for institutional visitors."],
        ["99.9%","Uptime","Maintained across UAE network infrastructure."],
        ["45 Days","To Launch","Typical enterprise project timeline."]
      ],
        market: [
          "Abu Dhabi institutional web standards",
          "Government-adjacent credibility requirements",
          "Bilingual web architecture for UAE enterprises",
          "Core Web Vitals benchmarks on Google.ae",
          "Enterprise security and accessibility standards"
        ],
        industries: ["Government & Public Sector","Energy & Infrastructure","Finance & Banking","Professional Services","Healthcare","Consulting"],
        resources: [
        {"title":"Abu Dhabi Enterprise Web Guide","desc":"Building institutional-grade digital platforms for the UAE capital.","href":"/blog"},
        {"title":"Bilingual Web Architecture","desc":"Technical decisions for Arabic-English enterprise websites.","href":"/blog"},
        {"title":"Government-Adjacent UX Standards","desc":"Design principles for institutional credibility in Abu Dhabi.","href":"/blog"}
      ],
        process: [
        {"step":"01","title":"Institutional Audit","desc":"We evaluate your platform against the credibility standards Abu Dhabi buyers expect."},
        {"step":"02","title":"Architecture & Design","desc":"We design bilingual platforms that communicate institutional authority."},
        {"step":"03","title":"Development","desc":"Our team builds performant, bilingual, and enterprise-secure web platforms."},
        {"step":"04","title":"Launch & Monitoring","desc":"Post-launch tracking ensures ongoing performance and Google.ae SEO visibility."}
      ],
      },
  },
  sanjose: {
      'seo-aeo-geo': {
        tagline: `Capture Silicon Valley Search & AI Intent.`,
        sub: `We engineer multi-engine search visibility across Google, ChatGPT, and Perplexity, ensuring your technology brand intercepts high-intent buyers in San Jose's sophisticated market.`,
        why: `Tech buyers in Silicon Valley are inherently skeptical and technically advanced. They bypass marketing fluff, leverage AI for deep vendor comparisons, and rely heavily on authoritative peer reviews. We construct a data-backed search presence that satisfies their rigorous evaluation process, establishing your credibility across every platform they consult.`,
        about: `Our San Jose search strategy is purpose-built for the B2B tech sector. We recognize that securing traffic is secondary to capturing qualified pipeline. We implement complex SEO frameworks, optimize for Answer Engines (AEO), and secure placements in Generative AI overviews (GEO) to ensure your product is consistently surfaced during crucial technical evaluations.

We align our optimization efforts directly with your revenue goals, eliminating wasteful spend on low-intent keywords and focusing entirely on the queries that drive SaaS adoption and enterprise technology sales in the Bay Area.`,
        services: [
        ["B2B Tech SEO","Target competitive, high-intent SaaS and technology queries that drive product demos.","seo"],
        ["Answer Engine Optimization","Format your technical documentation so AI models confidently cite your solutions.","aeo"],
        ["Generative AI Visibility","Secure critical placements within AI overviews for complex Silicon Valley tech searches.","geo"],
        ["Bay Area Local Dominance","Establish authoritative local relevance for in-person B2B technology consultations.","local-seo"]
      ],
        stats: [
        ["98%","Internet Penetration"],
        ["78%","AI Tool Adoption"],
        ["Tech Hub","#1 US Innovation Center"],
        ["B2B Focus","Enterprise Buyer Market"]
      ],
        results: [
        ["320%","Tech Traffic Growth","Average increase for our San Jose B2B clients."],
        ["Top 3","SaaS Rankings","Achieved for competitive Silicon Valley tech keywords."],
        ["6.1x","LLM Citations","Improvement in AI engine recommendation frequency."],
        ["42 Days","To First Gains","From technical audit to measurable search results."]
      ],
        market: [
          "Silicon Valley B2B buyer research patterns",
          "AI tool adoption rates and query behaviours",
          "SaaS evaluation and demo-request intent signals",
          "Technical content standards for developer audiences",
          "Bay Area competitor SEO footprint analysis"
        ],
        industries: ["SaaS & B2B Technology","Artificial Intelligence","Cybersecurity","Developer Tools","Enterprise Software","Clean Technology"],
        resources: [
        {"title":"Silicon Valley Search Strategies","desc":"Advanced visibility tactics for highly competitive tech markets.","href":"/blog"},
        {"title":"The B2B Tech AEO Playbook","desc":"Understanding how CTOs use AI for software procurement.","href":"/blog"},
        {"title":"SaaS Generative Search Framework","desc":"Optimizing product data for AI engine extraction.","href":"/blog"}
      ],
        process: [
        {"step":"01","title":"Technical Capability Audit","desc":"We systematically evaluate your search footprint and AI citation rate against key Silicon Valley competitors."},
        {"step":"02","title":"Intent-Mapped Strategy","desc":"We develop a sprint-based plan prioritizing high-value tech queries and generative AI visibility."},
        {"step":"03","title":"Advanced Execution","desc":"Our team implements sophisticated schema, expert-led content, and robust technical SEO protocols."},
        {"step":"04","title":"Pipeline Attribution","desc":"We deliver transparent reporting that directly links our optimization efforts to your sales pipeline."}
      ],
      },
      'lead-gen': {
        tagline: `Drive Product Demos and Enterprise Deals in Silicon Valley.`,
        sub: `Performance-driven B2B lead generation for San Jose's tech ecosystem — connecting your SaaS product or technology service with qualified buyers actively evaluating solutions.`,
        why: `Silicon Valley buyers self-educate extensively before engaging sales. A generic PPC strategy might generate clicks, but it rarely generates qualified demos. We build intent-matched acquisition campaigns that meet tech buyers at the exact moment of decision, filtering for the accounts worth pursuing.`,
        about: `Lead generation for San Jose technology companies requires precision at every stage. We operate Google Search campaigns targeting bottom-funnel SaaS intent, LinkedIn campaigns targeting the exact job titles your product serves, and retargeting sequences designed for tech buyers with longer evaluation cycles.

Every campaign includes dedicated landing pages, CRM integration, and lead qualification scoring so your sales team spends time on genuine opportunities, not unqualified form submissions.`,
        services: [
        ["SaaS Google Ads","Capture demo requests and trial sign-ups from high-intent Silicon Valley tech buyers.","lead-gen"],
        ["LinkedIn Tech Campaigns","Reach CTOs, VPs of Engineering, and enterprise buyers in the Bay Area market.","lead-gen"],
        ["Conversion-Optimised Landing Pages","Technical product pages built for Silicon Valley buyer evaluation standards.","web-dev"],
        ["Pipeline & Demo Attribution","Track every lead from first click to closed deal across your San Jose sales pipeline.","lead-gen"]
      ],
        stats: [
        ["5.4%","Demo Conversion Rate"],
        ["-40%","Reduction in CPL"],
        ["95%","Lead Quality Match"],
        ["24/7","CRM Lead Flow"]
      ],
        results: [
        ["270%","Pipeline Growth","Qualified tech leads within 90 days in the Bay Area."],
        ["-38%","Cost Per Lead","Reduction vs. previous SaaS campaign benchmarks."],
        ["4.4x","Demo Requests","Generated through intent-mapped tech campaigns."],
        ["26 Days","To Campaign Launch","From brief to live campaigns targeting Silicon Valley."]
      ],
        market: [
          "SaaS buyer evaluation and demo-request patterns",
          "Bay Area enterprise budget cycles",
          "LinkedIn targeting for tech decision-makers",
          "Product-led growth vs. sales-led demand patterns",
          "CRM integration for complex SaaS pipelines"
        ],
        industries: ["SaaS & B2B Technology","Enterprise Software","Cybersecurity","AI & Machine Learning","Developer Tools","Cloud Services"],
        resources: [
        {"title":"Silicon Valley SaaS Lead Gen Guide","desc":"Acquisition strategies for Bay Area tech product companies.","href":"/blog"},
        {"title":"B2B Tech Landing Pages","desc":"Conversion design for Silicon Valley's technically sophisticated buyers.","href":"/blog"},
        {"title":"SaaS Pipeline Attribution","desc":"Tracking demos and trials through enterprise tech sales cycles.","href":"/blog"}
      ],
        process: [
        {"step":"01","title":"Tech Market Audit","desc":"We review your current acquisition channels against Silicon Valley SaaS benchmarks."},
        {"step":"02","title":"Intent Mapping","desc":"We design campaigns that align with the specific decision stages of your target tech buyers."},
        {"step":"03","title":"Launch & Optimise","desc":"Our team deploys and continuously refines based on Bay Area engagement and conversion data."},
        {"step":"04","title":"Pipeline Reporting","desc":"Monthly tracking of demos, qualified leads, and direct revenue contribution."}
      ],
      },
      'social-media': {
        tagline: `Build Technical Authority and Community in Silicon Valley.`,
        sub: `Social media management for San Jose technology companies — thought leadership that reaches developers, enterprise buyers, and the Bay Area's influential tech community.`,
        why: `In Silicon Valley, your social presence is a credibility signal. Technical buyers follow thought leaders, not brands. We build executive profiles and company pages that earn respect from the developer community and influence enterprise buying decisions through genuine expertise and insight.`,
        about: `Our San Jose social practice focuses on technical thought leadership over promotional content. We create LinkedIn posts, engineering blog syndication, X/Twitter threads, and YouTube shorts that demonstrate your team's depth of knowledge and position your brand as the logical choice for the problems you solve.

We handle research, writing, design, and engagement management — building the community presence that supports both inbound pipeline and talent acquisition in the Bay Area's competitive hiring market.`,
        services: [
        ["Tech Thought Leadership","Position your founders and engineers as respected voices in Silicon Valley's tech community.","social-media"],
        ["Developer Community Building","Authentic engagement strategies that build trust with technical audiences.","social-media"],
        ["Product Launch Content","Social campaigns that drive awareness and trial for SaaS product releases.","social-media"],
        ["Executive LinkedIn Strategy","Build the professional authority of your Bay Area leadership team.","social-media"]
      ],
        stats: [
        ["6.1M+","Tech Community Reach"],
        ["34%","Engagement Rate Boost"],
        ["2.8x","Inbound Tech Inquiries"],
        ["92%","Content Authority Score"]
      ],
        results: [
        ["6.8x","Community Growth","Technical audience growth across Bay Area channels."],
        ["145%","Inbound Opportunities","Increase in product inquiries from social channels."],
        ["Top 5%","Tech Authority","Achieved for client profiles in Silicon Valley markets."],
        ["22 Days","To Live Content","From strategy to published technical content."]
      ],
        market: [
          "Silicon Valley developer and tech community dynamics",
          "Technical content formats and engagement patterns",
          "Bay Area thought leadership narrative expectations",
          "Product Hunt, HackerNews, and tech platform culture",
          "Enterprise buyer social research behaviour"
        ],
        industries: ["SaaS & B2B Technology","Artificial Intelligence","Developer Tools","Enterprise Software","Cybersecurity","Clean Technology"],
        resources: [
        {"title":"Silicon Valley Tech Authority Guide","desc":"Building developer community trust through authentic content.","href":"/blog"},
        {"title":"SaaS Product Launch Social Strategy","desc":"Social campaigns that drive awareness and trial conversions.","href":"/blog"},
        {"title":"Bay Area Executive Branding","desc":"Building leadership authority in Silicon Valley's competitive market.","href":"/blog"}
      ],
        process: [
        {"step":"01","title":"Community Audit","desc":"We assess your current technical authority and community presence across Bay Area channels."},
        {"step":"02","title":"Content Strategy","desc":"We design a thought leadership plan calibrated to Silicon Valley's technical audience."},
        {"step":"03","title":"Production & Publishing","desc":"Our team creates expert-level content that earns credibility in the tech community."},
        {"step":"04","title":"Authority Reporting","desc":"Monthly tracking of community growth, engagement, and inbound pipeline from social."}
      ],
      },
      'web-dev': {
        tagline: `High-Performance Web Platforms for Silicon Valley Technology Companies.`,
        sub: `Custom React and Next.js development for San Jose tech companies — fast, scalable, and built to the standards that Silicon Valley's discerning technical buyers expect.`,
        why: `Technical buyers in Silicon Valley will evaluate your website's performance before they evaluate your product. Slow load times, poor mobile experience, or outdated architecture signal that you don't meet the technical bar. We build platforms that pass technical scrutiny and convert sophisticated visitors into demo requests.`,
        about: `Our San Jose web practice builds platforms for companies that understand performance. We implement Next.js App Router architectures, edge-deployed infrastructure, GraphQL APIs, and custom animation systems that deliver sub-second load times globally.

Every platform scores 95+ on Google PageSpeed Insights and is architected for SEO, supporting your product marketing and developer advocacy efforts across the Bay Area's competitive digital landscape.`,
        services: [
        ["Next.js Product Websites","Fast, scalable platforms built for SaaS product marketing in Silicon Valley.","web-dev"],
        ["Developer Documentation Platforms","Technical docs and developer portals built for the Bay Area's technical audience.","web-dev"],
        ["Headless Commerce & CMS","Flexible content infrastructure for high-growth tech companies.","web-dev"],
        ["Core Web Vitals Optimization","95+ PageSpeed scores across all devices for Silicon Valley SEO advantage.","web-dev"]
      ],
        stats: [
        ["98+","PageSpeed Score"],
        ["< 0.6s","First Contentful Paint"],
        ["2.6x","Demo Conversion Lift"],
        ["100%","Mobile Responsive"]
      ],
        results: [
        ["3.1x","Speed Improvement","Page load performance vs. previous Bay Area tech platforms."],
        ["210%","Engagement Time","Increase in session duration on rebuilt product pages."],
        ["99.99%","Uptime","Via edge-deployed serverless infrastructure."],
        ["35 Days","To Launch","Average project timeline from wireframe to production."]
      ],
        market: [
          "Silicon Valley technical web performance standards",
          "SaaS product page conversion best practices",
          "Developer audience UX requirements",
          "Bay Area Core Web Vitals benchmarks",
          "Next.js App Router and edge deployment patterns"
        ],
        industries: ["SaaS & B2B Technology","Artificial Intelligence","Developer Tools","Enterprise Software","Cybersecurity","Fintech"],
        resources: [
        {"title":"Silicon Valley Web Performance Guide","desc":"Technical standards for Bay Area technology company websites.","href":"/blog"},
        {"title":"SaaS Product Page Conversion","desc":"Design and copy principles that drive demos in tech markets.","href":"/blog"},
        {"title":"Next.js Edge Architecture","desc":"Building globally fast platforms for Silicon Valley companies.","href":"/blog"}
      ],
        process: [
        {"step":"01","title":"Technical Audit","desc":"We evaluate your platform against Silicon Valley web performance and conversion benchmarks."},
        {"step":"02","title":"Architecture Planning","desc":"We design a scalable, performant platform architecture for your tech product."},
        {"step":"03","title":"Development","desc":"Our team builds with Next.js, TypeScript, and modern tooling to Bay Area technical standards."},
        {"step":"04","title":"Launch & Monitoring","desc":"Post-launch performance tracking and ongoing optimisation for Silicon Valley competitiveness."}
      ],
      },
  },
  texas: {
      'seo-aeo-geo': {
        tagline: `Command Search Authority Across Texas Markets.`,
        sub: `We engineer precise search visibility across Google and AI platforms, capturing high-intent demand from Dallas enterprises, Houston energy firms, and Austin tech hubs.`,
        why: `Texas requires a nuanced, multi-layered approach to search. A strategy that resonates with an Austin SaaS founder will likely fail with a Houston oil executive. We develop highly specialized SEO, AEO, and GEO campaigns tailored to the distinct economic drivers of each major Texas metro, ensuring your brand connects with the right decision-makers.`,
        about: `Our methodology for Texas businesses discards generic optimization in favor of deep, industry-specific relevance. We focus on measurable business growth by securing top placements for commercial intent queries while actively shaping how AI engines perceive your brand.

Whether you need to dominate regional Google Maps results in San Antonio or become the cited authority in Perplexity for Dallas financial services, we provide the technical rigor and strategic insight necessary to turn search visibility into tangible revenue.`,
        services: [
        ["Statewide B2B SEO","Target commercial-intent queries across Texas's varied industrial sectors.","seo"],
        ["Answer Engine Optimization","Position your brand as the definitive answer for Texas-specific AI inquiries.","aeo"],
        ["Generative Engine Optimization","Secure prominent citations within AI overviews for key regional industries.","geo"],
        ["Multi-Metro Local SEO","Dominate localized search results across Dallas, Houston, Austin, and San Antonio.","local-seo"]
      ],
        stats: [
        ["30M+","Texas Population"],
        ["4 Major Metros","Dallas, Houston, Austin, SA"],
        ["Energy Hub","Global Oil & Gas Center"],
        ["Tech Growth","Fastest US Tech Market"]
      ],
        results: [
        ["300%","Multi-City Visibility","Average increase across Texas metro markets."],
        ["Top 3","Industry Rankings","Achieved across Dallas, Houston, and Austin searches."],
        ["5.5x","AI Citations","Improvement in Texas-specific LLM recommendations."],
        ["45 Days","To Results","From Texas market audit to measurable search gains."]
      ],
        market: [
          "Dallas enterprise search intent patterns",
          "Houston energy sector query behaviour",
          "Austin tech and startup search dynamics",
          "Texas multi-city local SEO requirements",
          "Energy, finance, and tech sector AI citation patterns"
        ],
        industries: ["Energy & Oil and Gas","Finance & Banking","SaaS & Technology","Real Estate & PropTech","Healthcare","Professional Services"],
        resources: [
        {"title":"Texas Multi-City Search Playbook","desc":"Adapting strategies for the distinct markets of Dallas, Houston, and Austin.","href":"/blog"},
        {"title":"Energy Sector Authority","desc":"Establishing trust and visibility for Houston's industrial markets.","href":"/blog"},
        {"title":"Tech Search in Austin","desc":"Capturing intent in highly competitive innovation hubs.","href":"/blog"}
      ],
        process: [
        {"step":"01","title":"Regional Data Analysis","desc":"We map your current visibility against specific Texas metro markets and industry verticals."},
        {"step":"02","title":"Market-Specific Strategy","desc":"We construct customized optimization roadmaps tailored to the unique demands of each target city."},
        {"step":"03","title":"Targeted Execution","desc":"Our experts deploy localized content, advanced schema, and technical fixes to capture regional intent."},
        {"step":"04","title":"Revenue Reporting","desc":"We provide transparent analytics linking our regional search improvements directly to your sales pipeline."}
      ],
      },
      'lead-gen': {
        tagline: `Generate Qualified Leads Across Every Texas Market.`,
        sub: `Multi-city lead generation campaigns for Texas businesses — reaching energy executives in Houston, enterprise buyers in Dallas, and tech decision-makers in Austin with precision targeting.`,
        why: `Texas is too large and economically diverse for a single lead generation approach. Houston buyers in energy think differently from Austin SaaS founders or Dallas financial services executives. We build city-specific acquisition campaigns that speak to each market's distinct priorities and buying behaviour.`,
        about: `Lead generation across Texas requires market-specific creative, channel mix, and targeting strategy. We run parallel Google Ads and LinkedIn campaigns calibrated for each major metro, with city-specific landing pages that reflect local market context.

Every campaign includes CRM integration, lead scoring, and transparent attribution across all Texas markets — so you know exactly which city and channel is driving your best revenue opportunities.`,
        services: [
        ["Multi-Metro Google Ads","City-specific campaigns targeting high-intent buyers across Texas's major markets.","lead-gen"],
        ["Texas LinkedIn B2B Campaigns","Reach energy, finance, and tech decision-makers across Dallas, Houston, and Austin.","lead-gen"],
        ["City-Specific Landing Pages","Market-aware conversion pages for each major Texas metropolitan area.","web-dev"],
        ["Texas Pipeline Attribution","Track qualified leads and revenue contribution across all Texas markets.","lead-gen"]
      ],
        stats: [
        ["5.2%","Landing Page Conversion"],
        ["-35%","Reduction in CPL"],
        ["93%","Lead Quality Match"],
        ["4 Cities","Multi-Metro Coverage"]
      ],
        results: [
        ["245%","Statewide Pipeline","Qualified leads across Texas markets in 90 days."],
        ["-37%","Cost Per Lead","Reduction through city-specific targeting."],
        ["3.9x","Opportunities","Generated across Dallas, Houston, and Austin."],
        ["30 Days","To Launch","From brief to live campaigns across Texas."]
      ],
        market: [
          "Houston energy sector budget cycles",
          "Dallas enterprise procurement patterns",
          "Austin startup and SaaS buyer behaviour",
          "Texas-wide B2B decision-maker demographics",
          "Multi-city CRM attribution models"
        ],
        industries: ["Energy & Oil and Gas","Finance & Banking","SaaS & Technology","Real Estate","Healthcare","Professional Services"],
        resources: [
        {"title":"Texas Multi-City Lead Gen Guide","desc":"Acquisition strategies calibrated for each major Texas market.","href":"/blog"},
        {"title":"Houston Energy Sector Campaigns","desc":"Targeting oil, gas, and industrial buyers across Texas.","href":"/blog"},
        {"title":"Austin SaaS Lead Generation","desc":"Campaigns designed for the Texas tech ecosystem.","href":"/blog"}
      ],
        process: [
        {"step":"01","title":"Texas Market Audit","desc":"We map acquisition opportunities across each target Texas metro and industry."},
        {"step":"02","title":"City-Specific Architecture","desc":"We design market-aware campaigns tailored to each Texas metro's buyer profile."},
        {"step":"03","title":"Multi-City Launch","desc":"Our team deploys and optimises parallel campaigns across Texas markets."},
        {"step":"04","title":"Statewide Reporting","desc":"Monthly reports track qualified leads and revenue by city and industry sector."}
      ],
      },
      'social-media': {
        tagline: `Build Regional Brand Authority Across Texas.`,
        sub: `Social media management for Texas businesses — building credibility with Houston energy executives, Dallas enterprise buyers, and Austin's tech community through relevant, market-specific content.`,
        why: `Brand authority on social media in Texas is market-specific. Content that resonates in Austin's startup culture rarely performs in Houston's energy sector. We build city-aware content strategies that earn genuine engagement from the specific audiences your business needs to reach.`,
        about: `Our Texas social practice creates content calibrated to each major metro's culture and business priorities. We manage LinkedIn for enterprise and energy-sector authority, produce video content for Austin's tech community, and maintain the professional brand presence that Dallas's corporate market expects.

We handle strategy, production, and community management — building consistent brand presence across all Texas markets without requiring your team to manage multiple regional social strategies.`,
        services: [
        ["Energy Sector LinkedIn Authority","Build credibility with Houston's oil, gas, and industrial decision-makers.","social-media"],
        ["Texas Multi-City Content Strategy","Market-specific content for Dallas enterprise, Houston energy, and Austin tech.","social-media"],
        ["Austin Tech Community Building","Authentic engagement with Texas's fastest-growing startup ecosystem.","social-media"],
        ["Corporate Executive Branding","Position your Dallas and Houston leadership team as recognised industry voices.","social-media"]
      ],
        stats: [
        ["4.8M+","Texas Market Reach"],
        ["29%","Engagement Rate Boost"],
        ["2.3x","Inbound Leads"],
        ["3 Metro Markets","Simultaneous Coverage"]
      ],
        results: [
        ["5.2x","Statewide Reach","Growth across Texas social channels in 6 months."],
        ["118%","Inbound Inquiries","Increase across Dallas, Houston, and Austin markets."],
        ["Top 10%","Industry Authority","Achieved for clients in Texas energy and tech sectors."],
        ["28 Days","To Live Content","From strategy to published, market-specific content."]
      ],
        market: [
          "Texas metro-specific content culture and tone",
          "Houston energy sector professional network behaviour",
          "Austin startup and tech community engagement patterns",
          "Dallas corporate LinkedIn usage and expectations",
          "Multi-city content strategy management"
        ],
        industries: ["Energy & Oil and Gas","Finance & Banking","SaaS & Technology","Real Estate","Healthcare","Professional Services"],
        resources: [
        {"title":"Texas Social Media Authority Guide","desc":"City-specific content strategies for Texas's diverse markets.","href":"/blog"},
        {"title":"Houston Energy Sector Social","desc":"Building credibility with industrial and energy-sector audiences.","href":"/blog"},
        {"title":"Austin Tech Community Engagement","desc":"Social strategies for Texas's startup and innovation ecosystem.","href":"/blog"}
      ],
        process: [
        {"step":"01","title":"Texas Market Audit","desc":"We assess your social presence across each target Texas metro and audience."},
        {"step":"02","title":"City-Specific Strategy","desc":"We design content plans tailored to each market's culture and business priorities."},
        {"step":"03","title":"Multi-City Production","desc":"Our team creates market-aware content published consistently across Texas."},
        {"step":"04","title":"Statewide Reporting","desc":"Monthly tracking of reach, engagement, and inbound by Texas metro."}
      ],
      },
      'web-dev': {
        tagline: `Premium Web Platforms Built for Texas's Diverse Business Markets.`,
        sub: `Custom React and Next.js websites for Texas enterprises — meeting the professional standards of Houston's energy sector, Dallas's corporate market, and Austin's tech ecosystem.`,
        why: `A website built for one Texas market may underperform in another. Houston energy executives expect gravitas and technical depth. Austin tech buyers want speed, simplicity, and clear product value. Dallas corporate buyers need credibility signals and easy paths to consultation. We build platforms that serve each market's priorities.`,
        about: `Our Texas web practice builds scalable digital platforms for businesses operating across multiple markets. We implement Next.js architectures that perform reliably statewide, with content management systems that allow your marketing team to customise messaging by city and sector without developer dependency.

Every platform we deliver achieves 90+ Google PageSpeed scores and is optimised for local SEO across all target Texas metros, ensuring competitive visibility from Houston to Austin.`,
        services: [
        ["Texas Enterprise Websites","Scalable Next.js platforms serving multiple Texas markets simultaneously.","web-dev"],
        ["Multi-City Landing Pages","Market-specific conversion pages for Dallas, Houston, Austin, and San Antonio.","web-dev"],
        ["Headless CMS for Texas Teams","Content management that scales across multiple Texas city and sector audiences.","web-dev"],
        ["Multi-Market SEO Architecture","Technical web structure optimised for statewide Texas search visibility.","web-dev"]
      ],
        stats: [
        ["95+","PageSpeed Score"],
        ["< 0.9s","Load Time"],
        ["2.2x","Multi-City Conversion"],
        ["100%","Mobile Responsive"]
      ],
        results: [
        ["2.7x","Speed Improvement","Page load performance across Texas market deployments."],
        ["185%","Engagement Time","Increase in session duration post-platform rebuild."],
        ["99.9%","Uptime","Across all Texas-targeted deployments."],
        ["38 Days","To Launch","Average project timeline for Texas enterprise sites."]
      ],
        market: [
          "Texas multi-city web performance requirements",
          "Houston energy sector credibility standards",
          "Austin tech product page conversion patterns",
          "Dallas corporate web design expectations",
          "Multi-metro local SEO architecture"
        ],
        industries: ["Energy & Oil and Gas","Finance & Banking","SaaS & Technology","Real Estate","Healthcare","Professional Services"],
        resources: [
        {"title":"Texas Multi-City Web Strategy","desc":"Building platforms that serve diverse Texas market audiences.","href":"/blog"},
        {"title":"Houston Energy Sector Web Standards","desc":"Design and performance expectations for industrial markets.","href":"/blog"},
        {"title":"Austin SaaS Product Website Guide","desc":"Conversion-focused web design for Texas tech companies.","href":"/blog"}
      ],
        process: [
        {"step":"01","title":"Texas Market Audit","desc":"We evaluate your platform against each target Texas market's expectations."},
        {"step":"02","title":"Multi-Market Architecture","desc":"We design scalable platforms that serve Dallas, Houston, and Austin simultaneously."},
        {"step":"03","title":"Development","desc":"Our team builds performant, SEO-optimised platforms for Texas's competitive markets."},
        {"step":"04","title":"Launch & Statewide Monitoring","desc":"Post-launch tracking across all Texas markets for ongoing competitive visibility."}
      ],
      },
  },
  fremont: {
      'seo-aeo-geo': {
        tagline: `Drive Growth in Fremont Through Advanced Search.`,
        sub: `We engineer powerful search visibility tailored to Fremont's unique market dynamics, bridging the gap between Silicon Valley tech demands and vibrant local commerce.`,
        why: `Operating in Fremont means navigating a highly specific intersection of Bay Area technological sophistication and diverse community needs. Standard SEO tactics often miss this nuance. We deploy data-driven strategies that accurately capture high-intent traffic, ensuring your business is highly visible on traditional search engines and emerging AI platforms alike.`,
        about: `Our approach for Fremont businesses focuses entirely on generating measurable returns. We recognize that visibility without conversion is a wasted investment. By integrating technical SEO, Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO), we ensure your brand effectively reaches its ideal audience — whether you are a tech firm scaling across the Bay Area or a premium service provider targeting local neighborhoods.

We don't rely on vanity metrics; we build a sustainable digital infrastructure that consistently drives qualified leads and supports your long-term business objectives.`,
        services: [
        ["Revenue-Driven SEO Fremont","Target high-converting queries tailored to Fremont's unique economic landscape.","seo"],
        ["Answer Engine Integration","Optimize your business data to ensure consistent citations by major AI models.","aeo"],
        ["Generative Search Authority","Secure prime real estate in AI-generated overviews for relevant local and tech queries.","geo"],
        ["Tri-City Local Dominance","Capture highly qualified local intent across Fremont, Newark, and Union City.","local-seo"]
      ],
        stats: [
        ["230K+","Fremont Population"],
        ["Bay Area","Tech-Adjacent Market"],
        ["Diverse Economy","Tech + Local Commerce"],
        ["High Intent","Educated Consumer Base"]
      ],
        results: [
        ["285%","Local Visibility","Average increase in Fremont search results."],
        ["Top 5","Tri-City Rankings","Achieved for key Fremont and Tri-City keywords."],
        ["4.9x","AI Citations","Improvement in Fremont-specific LLM recommendations."],
        ["44 Days","To Results","From Fremont audit to measurable search gains."]
      ],
        market: [
          "Fremont Bay Area tech-adjacent buyer behaviour",
          "Tri-City local search intent patterns",
          "Diverse community multilingual search signals",
          "Local service discovery on AI platforms",
          "Newark and Union City competitive search landscape"
        ],
        industries: ["Technology Services","Local Professional Services","Healthcare & Wellness","Real Estate","Education","Home Services"],
        resources: [
        {"title":"Fremont Search Strategy","desc":"Navigating visibility in a diverse, tech-adjacent market.","href":"/blog"},
        {"title":"Tri-City Authority Building","desc":"Effectively capturing local demand across the region.","href":"/blog"},
        {"title":"AI Search for Local Business","desc":"How generative models impact local service discovery.","href":"/blog"}
      ],
        process: [
        {"step":"01","title":"Data-Centric Audit","desc":"We conduct a precise analysis of your current visibility within Fremont's specific competitive landscape."},
        {"step":"02","title":"Intent-Aligned Strategy","desc":"We formulate a targeted action plan focused exclusively on queries that drive actual business value."},
        {"step":"03","title":"Technical Deployment","desc":"Our specialists implement structural enhancements, authoritative content, and advanced schema markup."},
        {"step":"04","title":"ROI-Focused Reporting","desc":"We deliver clear analytics connecting our optimization efforts directly to your lead generation and sales."}
      ],
      },
      'lead-gen': {
        tagline: `Generate High-Quality Local Leads in Fremont and the Tri-City Area.`,
        sub: `Lead generation campaigns built for Fremont's tech-adjacent, diverse market — reaching local business owners, service seekers, and community professionals with targeted digital advertising.`,
        why: `Fremont's buyer base is unique — educated, tech-adjacent, and community-oriented. Generic PPC campaigns targeting the broader Bay Area waste budget on audiences outside your service radius. We build geographically precise campaigns that reach Fremont's specific buyer profile at the right moment.`,
        about: `Lead generation in Fremont works best when campaigns are calibrated to the Tri-City area's specific demographics, service needs, and local competitive landscape. We run Google Local Service Ads, Google Search campaigns, and Meta campaigns targeting Fremont's diverse communities.

Every campaign includes dedicated local landing pages, call tracking, CRM integration, and transparent attribution — so you know exactly which campaigns are driving your Fremont business growth.`,
        services: [
        ["Fremont Google Ads","Geo-targeted campaigns reaching high-intent buyers within Fremont and surrounding cities.","lead-gen"],
        ["Local Service Ads","Google LSA campaigns placing your business at the top of Fremont service searches.","lead-gen"],
        ["Tri-City Landing Pages","Localised conversion pages for Fremont, Newark, and Union City audiences.","web-dev"],
        ["Local Attribution Tracking","Track calls, forms, and walk-ins from Fremont-specific campaigns.","lead-gen"]
      ],
        stats: [
        ["4.9%","Local Conversion Rate"],
        ["-32%","Reduction in CPL"],
        ["91%","Lead Quality Match"],
        ["Tri-City","Area Coverage"]
      ],
        results: [
        ["220%","Fremont Lead Growth","Qualified local leads in 90 days."],
        ["-34%","Cost Per Lead","Reduction through Tri-City geo-targeting."],
        ["3.6x","Opportunities","Generated through local Fremont campaigns."],
        ["24 Days","To Launch","From brief to live local campaigns."]
      ],
        market: [
          "Fremont local service demand patterns",
          "Tri-City area buyer demographics",
          "Bay Area local ad auction density",
          "Community-specific service needs",
          "Local mobile search behaviour in Fremont"
        ],
        industries: ["Healthcare & Wellness","Home Services","Real Estate","Education & Tutoring","Local Professional Services","Technology Services"],
        resources: [
        {"title":"Fremont Local Lead Gen Guide","desc":"Acquisition strategies for Fremont's diverse local market.","href":"/blog"},
        {"title":"Tri-City Google LSA Guide","desc":"Local Service Ads setup for Fremont area businesses.","href":"/blog"},
        {"title":"Local Attribution for Service Businesses","desc":"Tracking leads from local search to booked appointments.","href":"/blog"}
      ],
        process: [
        {"step":"01","title":"Fremont Market Audit","desc":"We review local demand signals, competitors, and acquisition gaps specific to Fremont."},
        {"step":"02","title":"Local Campaign Design","desc":"We build geo-targeted campaigns calibrated to Fremont's buyer demographics."},
        {"step":"03","title":"Launch & Optimise","desc":"Our team deploys local campaigns and refines based on Fremont-specific performance data."},
        {"step":"04","title":"Local Pipeline Reporting","desc":"Monthly reports track Fremont leads, calls, and revenue generated."}
      ],
      },
      'social-media': {
        tagline: `Build Local Trust and Brand Presence in Fremont.`,
        sub: `Social media management for Fremont businesses — building community trust, local authority, and consistent brand presence with Fremont's diverse and tech-adjacent audience.`,
        why: `Fremont's community is close-knit and digitally active. Local businesses that show up authentically on social media — sharing community stories, local expertise, and genuine value — earn the trust that drives referrals and repeat business. Generic brand content doesn't work here.`,
        about: `Our Fremont social practice creates community-first content that resonates with the Tri-City area's diverse audience. We produce local storytelling content, professional service showcases, and community engagement strategies that build the kind of brand presence that Fremont residents and businesses actively recommend.

We manage the full content lifecycle — strategy, production, scheduling, and engagement monitoring — maintaining your brand's community presence without demanding your time.`,
        services: [
        ["Fremont Community Content","Local storytelling and community-focused content for Fremont's diverse audience.","social-media"],
        ["Local Business Authority","Position your Fremont business as the trusted local choice in your category.","social-media"],
        ["Service Showcase Content","High-quality visual content demonstrating your expertise to Fremont customers.","social-media"],
        ["Community Engagement","Authentic relationship building with Fremont's local networks and communities.","social-media"]
      ],
        stats: [
        ["1.4M+","Tri-City Reach"],
        ["26%","Engagement Rate Boost"],
        ["1.9x","Local Referrals"],
        ["85%","Community Retention"]
      ],
        results: [
        ["4.1x","Local Reach","Growth across Fremont social channels."],
        ["105%","Inbound Inquiries","Increase in local inquiries from social presence."],
        ["Top Local","Community Authority","Recognised as a leading local business voice."],
        ["26 Days","To Live Content","From strategy to published community content."]
      ],
        market: [
          "Fremont community content formats and preferences",
          "Tri-City area social platform usage patterns",
          "Local business trust signals on social media",
          "Diverse community engagement strategies",
          "Bay Area local business referral dynamics"
        ],
        industries: ["Healthcare & Wellness","Home Services","Real Estate","Education","Local Professional Services","Restaurants & Food"],
        resources: [
        {"title":"Fremont Community Social Guide","desc":"Building authentic local presence in the Tri-City area.","href":"/blog"},
        {"title":"Local Business Social Strategy","desc":"Social content that drives trust and referrals in Fremont.","href":"/blog"},
        {"title":"Bay Area Local Business Content","desc":"Community storytelling for tech-adjacent local markets.","href":"/blog"}
      ],
        process: [
        {"step":"01","title":"Community Audit","desc":"We evaluate your current local presence and identify Fremont community engagement gaps."},
        {"step":"02","title":"Local Content Strategy","desc":"We design a community-first content plan tailored to Fremont's audience."},
        {"step":"03","title":"Production & Publishing","desc":"Our team creates authentic local content published consistently across platforms."},
        {"step":"04","title":"Community Reporting","desc":"Monthly tracking of reach, local engagement, and inbound inquiries generated."}
      ],
      },
      'web-dev': {
        tagline: `Professional Web Platforms for Fremont's Growing Business Community.`,
        sub: `Custom websites and digital platforms for Fremont businesses — combining professional design, local SEO, and performance optimization that converts local visitors into customers.`,
        why: `In the Bay Area's competitive local market, a professional web presence is a baseline expectation. Fremont's tech-adjacent consumer base is web-savvy — they evaluate websites critically and choose businesses that present themselves with clarity and confidence. A template site simply won't stand out.`,
        about: `Our Fremont web practice builds professional, conversion-focused platforms for local service businesses and growing companies. We implement clean, fast Next.js builds with integrated local SEO architecture, Google Business Profile alignment, and call-tracking systems that connect your website directly to local revenue.

Every platform we deliver achieves 90+ Google PageSpeed scores and is optimised for Tri-City local search visibility, ensuring your Fremont business ranks competitively across relevant local searches.`,
        services: [
        ["Fremont Business Websites","Professional local platforms designed to convert Fremont visitors into customers.","web-dev"],
        ["Local SEO Web Architecture","Technical structure optimised for Fremont and Tri-City local search visibility.","web-dev"],
        ["Service Business Platforms","Conversion-focused websites for Fremont's home services, healthcare, and professional sectors.","web-dev"],
        ["Google Business Integration","Website-to-GBP alignment that strengthens local search authority in Fremont.","web-dev"]
      ],
        stats: [
        ["93+","PageSpeed Score"],
        ["< 1.0s","Load Time"],
        ["2.0x","Local Conversion"],
        ["100%","Mobile Responsive"]
      ],
        results: [
        ["2.4x","Speed Improvement","Page load performance for Fremont local business sites."],
        ["160%","Session Engagement","Increase in time-on-site after platform rebuild."],
        ["99.9%","Uptime","Across all Fremont business platform deployments."],
        ["32 Days","To Launch","Average timeline for Fremont local business websites."]
      ],
        market: [
          "Fremont local business web performance expectations",
          "Bay Area consumer web evaluation standards",
          "Local SEO web architecture for Tri-City visibility",
          "Service business conversion page requirements",
          "Mobile-first design for Fremont's mobile audience"
        ],
        industries: ["Healthcare & Wellness","Home Services","Real Estate","Education","Local Professional Services","Technology Services"],
        resources: [
        {"title":"Fremont Local Business Web Guide","desc":"Building professional platforms for the Tri-City market.","href":"/blog"},
        {"title":"Local SEO Web Architecture","desc":"Technical web structure for Fremont and Bay Area local search.","href":"/blog"},
        {"title":"Service Business Website Standards","desc":"Conversion design for Fremont's local service businesses.","href":"/blog"}
      ],
        process: [
        {"step":"01","title":"Fremont Audit","desc":"We evaluate your current platform against local market expectations and conversion performance."},
        {"step":"02","title":"Local-First Design","desc":"We design platforms that reflect your Fremont brand and serve your local audience."},
        {"step":"03","title":"Development","desc":"Our team builds fast, locally-optimised platforms for Fremont's competitive market."},
        {"step":"04","title":"Launch & Local Monitoring","desc":"Post-launch Tri-City SEO tracking and performance reporting."}
      ],
      },
  },
  pleasanton: {
      'seo-aeo-geo': {
        tagline: `Capture Premium Search Demand in Pleasanton.`,
        sub: `We build decisive search visibility across Google and AI engines, ensuring your brand captures high-value inquiries from Pleasanton and the broader Tri-Valley market.`,
        why: `Pleasanton's affluent demographic conducts meticulous research before making purchasing decisions. They seek out premium service providers who demonstrate clear expertise and trustworthiness. We design search strategies that elevate your brand above generic competitors, ensuring you are the definitive choice for high-intent buyers evaluating their options.`,
        about: `Our strategy for Pleasanton focuses exclusively on acquiring high-value clients. We implement rigorous SEO, AEO, and GEO techniques to establish your firm's credibility precisely when Tri-Valley residents and businesses are ready to buy.

We recognize that for premium services, trust is the primary conversion metric. By optimizing your digital presence to satisfy complex search intents and secure citations in AI-driven overviews, we build a robust inbound engine that consistently delivers qualified, lucrative opportunities to your business.`,
        services: [
        ["Premium Local SEO Pleasanton","Target high-intent service queries tailored to the Tri-Valley's affluent market.","seo"],
        ["Answer Engine Optimization","Structure your expertise so AI models recognize and recommend your business in Pleasanton.","aeo"],
        ["Generative Engine Optimization","Secure valuable visibility within AI overviews for competitive Tri-Valley searches.","geo"],
        ["Tri-Valley Map Dominance","Establish authoritative local relevance across Pleasanton, Dublin, and Livermore.","local-seo"]
      ],
        stats: [
        ["80K+","Pleasanton Population"],
        ["Top 5","US Best Places to Live"],
        ["96%","Internet Penetration"],
        ["High Income","Affluent Tri-Valley Market"]
      ],
        results: [
        ["310%","Premium Traffic","Average increase in Pleasanton high-intent searches."],
        ["Top 3","Local Rankings","Achieved for premium Tri-Valley service keywords."],
        ["4.5x","AI Mentions","Improvement in Pleasanton-specific LLM recommendations."],
        ["40 Days","To Results","From Pleasanton audit to measurable search gains."]
      ],
        market: [
          "Pleasanton affluent buyer research patterns",
          "Tri-Valley premium service search intent",
          "Dublin and Livermore local SEO dynamics",
          "High-income household purchasing behaviour",
          "AI search patterns for premium local services"
        ],
        industries: ["Healthcare & Wellness","Financial Services","Real Estate","Home Services","Education & Private Tutoring","Legal Services"],
        resources: [
        {"title":"Marketing to Affluent Buyers","desc":"Strategies for capturing premium search intent in the Tri-Valley.","href":"/blog"},
        {"title":"Local Authority Building","desc":"Establishing trust through localized SEO and content.","href":"/blog"},
        {"title":"AI Search in Suburbia","desc":"How emerging technologies impact local service discovery.","href":"/blog"}
      ],
        process: [
        {"step":"01","title":"Market Positioning Audit","desc":"We evaluate your search presence against the high standards of Pleasanton's premium buyers."},
        {"step":"02","title":"Targeted Growth Strategy","desc":"We craft a focused plan prioritizing the most lucrative local queries and AI placements."},
        {"step":"03","title":"Precision Execution","desc":"Our team implements sophisticated local SEO tactics, authoritative content, and schema data."},
        {"step":"04","title":"Pipeline Analytics","desc":"We provide transparent reporting linking our search improvements directly to your revenue growth."}
      ],
      },
      'lead-gen': {
        tagline: `Attract Premium Clients in Pleasanton and the Tri-Valley.`,
        sub: `Lead generation campaigns built for Pleasanton's affluent market — reaching high-intent families, professionals, and businesses with precision targeting that delivers quality over volume.`,
        why: `Pleasanton's premium buyer base doesn't respond to generic advertising. They're research-intensive, comparison-oriented, and choose service providers based on demonstrated expertise and trust. Our lead generation campaigns are built to attract clients who are genuinely ready to engage and can afford your services.`,
        about: `Lead generation in Pleasanton requires campaigns that match the premium expectations of the Tri-Valley market. We run Google Ads targeting high-income zip codes, Meta campaigns reaching Pleasanton's professional demographics, and Google Local Service Ads placing your business at the top of relevant local searches.

Every campaign is calibrated for lead quality over volume — ensuring the inquiries your team receives are genuinely aligned with your service offering and pricing.`,
        services: [
        ["Premium Google Ads Pleasanton","High-intent local campaigns reaching Tri-Valley's affluent buyer segments.","lead-gen"],
        ["Pleasanton Meta Campaigns","Targeted advertising reaching Pleasanton's professional and family demographics.","lead-gen"],
        ["Premium Service Landing Pages","Conversion pages reflecting the quality standards Pleasanton buyers expect.","web-dev"],
        ["Tri-Valley Lead Attribution","Track premium inquiries from first touch to booked consultation.","lead-gen"]
      ],
        stats: [
        ["5.5%","Premium Conversion Rate"],
        ["-28%","Reduction in CPL"],
        ["95%","Lead Quality Match"],
        ["Tri-Valley","Area Coverage"]
      ],
        results: [
        ["250%","Pleasanton Lead Growth","Premium qualified leads in 90 days."],
        ["-32%","Cost Per Lead","Reduction through affluent demographic targeting."],
        ["3.8x","Opportunities","Generated through Tri-Valley precision campaigns."],
        ["25 Days","To Launch","From brief to live premium campaigns."]
      ],
        market: [
          "Pleasanton affluent household demographics",
          "Tri-Valley premium service purchasing patterns",
          "Dublin and Livermore buyer comparison behaviour",
          "High-income local ad targeting parameters",
          "Premium service category competitive density"
        ],
        industries: ["Healthcare & Wellness","Financial Services","Real Estate","Home Services","Education & Private Tutoring","Legal Services"],
        resources: [
        {"title":"Pleasanton Premium Lead Gen Guide","desc":"Attracting high-value clients in the Tri-Valley's affluent market.","href":"/blog"},
        {"title":"Affluent Buyer Digital Advertising","desc":"Campaign strategies calibrated for Pleasanton's premium demographic.","href":"/blog"},
        {"title":"Tri-Valley Local Service Campaigns","desc":"Lead generation for premium service businesses across Dublin and Livermore.","href":"/blog"}
      ],
        process: [
        {"step":"01","title":"Premium Market Audit","desc":"We review acquisition gaps and opportunities specific to Pleasanton's affluent buyer profile."},
        {"step":"02","title":"Precision Campaign Design","desc":"We build campaigns calibrated to the Tri-Valley's premium service expectations."},
        {"step":"03","title":"Launch & Quality Optimise","desc":"Our team deploys campaigns optimising for lead quality, not just volume."},
        {"step":"04","title":"Premium Pipeline Reporting","desc":"Monthly reports track qualified leads, booking rates, and revenue generated."}
      ],
      },
      'social-media': {
        tagline: `Build Premium Local Authority in Pleasanton and the Tri-Valley.`,
        sub: `Social media management for Pleasanton's premium service businesses — creating the brand presence that earns trust from the Tri-Valley's affluent, research-intensive community.`,
        why: `Pleasanton's community is active on social media but discerning about who they trust and follow. Premium service providers who share genuine expertise, local knowledge, and authentic brand stories earn the community trust that converts to referrals and high-value clients.`,
        about: `Our Pleasanton social practice creates content that resonates with the Tri-Valley's affluent, community-oriented audience. We produce premium service showcases, educational content, local community stories, and professional thought leadership that positions your business as the obvious choice for Pleasanton's high-value clients.

We handle strategy, production, and community engagement — building the consistent brand presence that generates both inbound inquiries and word-of-mouth referrals across Pleasanton, Dublin, and Livermore.`,
        services: [
        ["Pleasanton Community Authority","Build trust with Pleasanton's affluent community through authentic, premium content.","social-media"],
        ["Premium Service Showcases","High-quality visual content demonstrating your expertise to Tri-Valley's demanding audience.","social-media"],
        ["Educational Thought Leadership","Expert content that earns respect from Pleasanton's research-intensive buyers.","social-media"],
        ["Tri-Valley Community Engagement","Authentic relationship building with Pleasanton, Dublin, and Livermore networks.","social-media"]
      ],
        stats: [
        ["1.2M+","Tri-Valley Reach"],
        ["30%","Engagement Rate Boost"],
        ["2.2x","Premium Referrals"],
        ["85%","Community Retention"]
      ],
        results: [
        ["4x","Local Premium Reach","Growth across Pleasanton social channels."],
        ["110%","Inbound Inquiries","Increase from Tri-Valley social presence."],
        ["Top Local","Community Authority","Recognised as a premium local business voice."],
        ["28 Days","To Live Content","From strategy to published premium content."]
      ],
        market: [
          "Pleasanton affluent community content preferences",
          "Tri-Valley social media usage patterns",
          "Premium service brand trust signals",
          "Dublin and Livermore community engagement dynamics",
          "High-income audience referral behaviour"
        ],
        industries: ["Healthcare & Wellness","Financial Services","Real Estate","Home Services","Education","Legal Services"],
        resources: [
        {"title":"Pleasanton Premium Social Guide","desc":"Building community authority for the Tri-Valley's affluent market.","href":"/blog"},
        {"title":"Affluent Audience Content Strategy","desc":"Social content that resonates with Pleasanton's premium buyers.","href":"/blog"},
        {"title":"Tri-Valley Community Engagement","desc":"Building authentic relationships across Dublin and Livermore.","href":"/blog"}
      ],
        process: [
        {"step":"01","title":"Pleasanton Audit","desc":"We assess your current social presence against Tri-Valley premium market expectations."},
        {"step":"02","title":"Premium Content Strategy","desc":"We design content that earns trust from Pleasanton's discerning community."},
        {"step":"03","title":"Production & Publishing","desc":"Our team creates premium content published consistently across platforms."},
        {"step":"04","title":"Community Reporting","desc":"Monthly tracking of reach, premium engagement, and inbound inquiries."}
      ],
      },
      'web-dev': {
        tagline: `Premium Digital Platforms for Pleasanton's Affluent Market.`,
        sub: `Custom websites for Pleasanton service businesses — combining premium design aesthetics, conversion architecture, and local SEO that matches the Tri-Valley's high market expectations.`,
        why: `Pleasanton's affluent buyers evaluate everything, including your website. A slow, generic, or visually underwhelming platform signals that your service quality may be equally mediocre. We build platforms that reflect the premium standard your market demands and convert discerning visitors into high-value consultations.`,
        about: `Our Pleasanton web practice builds premium, conversion-focused platforms for the Tri-Valley's service businesses. We implement clean Next.js architectures with high-quality UI design, integrated local SEO structure, and call-tracking systems that connect your website directly to booked appointments and consultations.

Every platform achieves 90+ Google PageSpeed scores and is optimised for Tri-Valley local search visibility — ensuring your Pleasanton business ranks competitively for the premium service queries your ideal clients are searching.`,
        services: [
        ["Pleasanton Premium Websites","High-quality platforms reflecting the standard Tri-Valley's affluent buyers expect.","web-dev"],
        ["Conversion-Optimised Design","Premium UX architecture that guides Pleasanton visitors to consultation bookings.","web-dev"],
        ["Local SEO Architecture","Technical web structure optimised for Tri-Valley local search visibility.","web-dev"],
        ["Premium Service Platforms","Conversion-focused websites for Pleasanton's healthcare, financial, and professional sectors.","web-dev"]
      ],
        stats: [
        ["96+","PageSpeed Score"],
        ["< 0.7s","Load Time"],
        ["2.2x","Consultation Conversion"],
        ["100%","Mobile Responsive"]
      ],
        results: [
        ["2.6x","Speed Improvement","Page load performance for Pleasanton service sites."],
        ["170%","Engagement Time","Increase in session duration post-rebuild."],
        ["99.9%","Uptime","Across all Pleasanton platform deployments."],
        ["35 Days","To Launch","Average timeline for Pleasanton premium business websites."]
      ],
        market: [
          "Pleasanton affluent consumer web evaluation standards",
          "Tri-Valley premium service website expectations",
          "Local SEO web architecture for Dublin and Livermore",
          "High-income audience conversion page requirements",
          "Mobile design standards for Pleasanton's professional audience"
        ],
        industries: ["Healthcare & Wellness","Financial Services","Real Estate","Home Services","Education","Legal Services"],
        resources: [
        {"title":"Pleasanton Premium Web Guide","desc":"Building platforms for the Tri-Valley's affluent market expectations.","href":"/blog"},
        {"title":"Premium Service Website Standards","desc":"Design principles for Pleasanton's high-value client base.","href":"/blog"},
        {"title":"Tri-Valley Local SEO Web Architecture","desc":"Technical structure for Dublin, Livermore, and Pleasanton visibility.","href":"/blog"}
      ],
        process: [
        {"step":"01","title":"Pleasanton Audit","desc":"We evaluate your platform against the premium expectations of Tri-Valley buyers."},
        {"step":"02","title":"Premium Design","desc":"We design platforms reflecting the quality standard Pleasanton's market demands."},
        {"step":"03","title":"Development","desc":"Our team builds fast, locally-optimised platforms for Tri-Valley's competitive market."},
        {"step":"04","title":"Launch & Tri-Valley Monitoring","desc":"Post-launch local SEO tracking and performance reporting across Pleasanton and surrounds."}
      ],
      },
  },
};

const TESTIMONIALS = [
  {
    "name": "Sriram Sankar",
    "role": "FOUNDER",
    "company": "Nyx Wolves",
    "quote": "Straightforward, committed, and reliable. Zesh is among the rare few agencies that actually deliver exactly what they promise without any fluff."
  },
  {
    "name": "Abdul Khan",
    "role": "Ex-CMO",
    "company": "TATA · Ex-Financial Advisor to Dhirubhai & Mukesh Ambani",
    "quote": "Zesh combines marketing depth, consumer insights, innovation, and creativity with a genuine passion for work and an outcome focus unlike any other agency."
  },
  {
    "name": "Hafsa Sayed",
    "role": "FOUNDER",
    "company": "HAFSA The Couture",
    "quote": "Extremely professional and goal-oriented. Zesh understands that marketing must justify itself on the balance sheet — and they deliver exactly that."
  }
];

export const getServiceCityData = (serviceKey: ServiceKey, cityKey: CityKey) => {
  const city = SOLUTIONS_CITIES.find(c => c.key === cityKey)!;
  const service = SERVICES_META[serviceKey];
  const data = CITY_SERVICE_DATA[cityKey][serviceKey];

  return {
    name: `${service.shortTitle} in ${city.name}`,
    cityName: city.name,
    serviceTitle: service.title,
    serviceShortTitle: service.shortTitle,
    country: city.country,
    flag: city.flag,
    badge: city.badge,
    tagline: data.tagline,
    sub: data.sub,
    stats: data.stats,
    services: data.services,
    why: data.why,
    market: data.market,
    industries: data.industries,
    results: data.results,
    testimonials: TESTIMONIALS,
    about: data.about,
    resources: data.resources,
    process: data.process,
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
