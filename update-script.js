const fs = require('fs');
const file = 'd:\\zeshagency\\lib\\serviceCityData.ts';
let content = fs.readFileSync(file, 'utf8');

const replacements = {
  dubai: {
    tagline: 'Drive Measurable Revenue Through Search & AI Engines in Dubai.',
    sub: 'We architect bilingual search authority across Google.ae, ChatGPT, and Perplexity, ensuring your brand captures high-intent demand from Dubai\'s enterprise and consumer markets.',
    why: 'Dubai\'s competitive landscape requires more than generic keyword optimization. Decision-makers evaluate partners across multiple surfaces—from traditional Google.ae searches to AI-driven recommendations in Perplexity. We unify SEO, AEO, and GEO to position your business exactly where your next clients are looking, focusing on profitability rather than vanity metrics.',
    about: 'Our strategy for Dubai businesses centers entirely on ROI. We bypass empty traffic to focus on acquiring high-value leads through technical excellence and authoritative content in both Arabic and English. By implementing advanced schema markup, optimizing structured data, and building genuine entity authority, we ensure your solutions are cited by the AI models powering modern search.\n\nThe era of simple ten-blue-links is over. We future-proof your digital presence, turning complex search algorithms into a predictable engine for business growth across the UAE without relying on unnecessary retainers.',
    services: [
      ['Revenue-Focused SEO', 'Target high-intent Arabic and English queries on Google.ae that convert to actual sales.', 'seo'],
      ['Answer Engine Optimization', 'Structure your digital presence so ChatGPT and Claude confidently recommend your business.', 'aeo'],
      ['Generative Engine Optimization', 'Secure prominent citations in Perplexity and Google AI Overviews for Dubai-based searches.', 'geo'],
      ['Local Market Dominance', 'Capture highly qualified local demand across Google Maps and regional search tools.', 'local-seo']
    ],
    resources: [{ title: 'Dubai Search Authority Guide', desc: 'Strategies to build bilingual visibility across traditional and AI search engines.', href: '/blog' }, { title: 'AI Search Impact in the UAE', desc: 'Analyzing how Dubai decision-makers leverage AI for purchasing.', href: '/blog' }, { title: 'Technical SEO for MENA', desc: 'Structured data and schema markup essentials for the UAE market.', href: '/blog' }],
    process: [
      { step: '01', title: 'Data-Driven Audit', desc: 'We evaluate your current footprint across Google.ae and major AI engines to identify revenue-blocking gaps.' },
      { step: '02', title: 'Strategic Roadmap', desc: 'We develop a 90-day plan prioritizing high-ROI Arabic and English search terms and generative AI placements.' },
      { step: '03', title: 'Technical Execution', desc: 'Our team implements structural improvements, authoritative bilingual content, and advanced schema.' },
      { step: '04', title: 'Transparent Reporting', desc: 'Monthly performance reviews connect your search visibility directly to pipeline growth and revenue.' }
    ]
  },
  abudhabi: {
    tagline: 'Secure Institutional Search Authority in Abu Dhabi.',
    sub: 'We engineer bilingual search dominance across Google.ae and emerging AI engines, establishing your firm as the definitive choice for Abu Dhabi\'s enterprise and government sectors.',
    why: 'In Abu Dhabi, visibility without credibility is useless. Sovereign wealth funds, government procurement teams, and major enterprises conduct exhaustive research prior to engagement. We design search strategies that demonstrate profound expertise and reliability, capturing high-value institutional attention across traditional search and AI platforms.',
    about: 'Our Abu Dhabi search methodology is engineered for long-cycle, high-stakes B2B procurement. We go beyond generic traffic generation to secure top-tier placements for complex enterprise queries. By structuring your digital assets for AI comprehension, we ensure your firm is the recommended entity when decision-makers query ChatGPT or Perplexity for industry-leading solutions.\n\nSucceeding in the capital requires a nuanced understanding of bilingual trust signals. We build the technical infrastructure and authoritative content that sophisticated Abu Dhabi buyers demand before initiating a conversation.',
    services: [
      ['Enterprise SEO', 'Target critical B2B and government procurement queries on Google.ae with precision.', 'seo'],
      ['Answer Engine Optimization', 'Structure institutional data so AI models cite your firm as an authoritative source.', 'aeo'],
      ['Generative Engine Optimization', 'Claim strategic visibility within AI overviews for Abu Dhabi\'s most valuable search terms.', 'geo'],
      ['Capital Market Local SEO', 'Establish unshakeable local relevance across Abu Dhabi\'s key commercial districts.', 'local-seo']
    ],
    resources: [{ title: 'Reaching Institutional Buyers', desc: 'Search strategies tailored for the UAE capital\'s government sectors.', href: '/blog' }, { title: 'Enterprise AEO Framework', desc: 'Navigating AI engine influence in Abu Dhabi procurement.', href: '/blog' }, { title: 'Bilingual Authority Content', desc: 'Crafting Arabic-first technical content for enterprises.', href: '/blog' }],
    process: [
      { step: '01', title: 'Market Positioning Audit', desc: 'We analyze your current search footprint against the rigorous standards of Abu Dhabi institutional buyers.' },
      { step: '02', title: 'Strategic Roadmap', desc: 'We craft a comprehensive plan emphasizing trust signals, bilingual depth, and AI platform visibility.' },
      { step: '03', title: 'Technical Deployment', desc: 'Our specialists execute advanced SEO protocols, publish authoritative content, and refine schema data.' },
      { step: '04', title: 'Pipeline Analytics', desc: 'We report strictly on metrics that matter: qualified enterprise inquiries and measurable revenue contribution.' }
    ]
  },
  sanjose: {
    tagline: 'Capture Silicon Valley Search & AI Intent.',
    sub: 'We engineer multi-engine search visibility across Google, ChatGPT, and Perplexity, ensuring your technology brand intercepts high-intent buyers in San Jose\'s sophisticated market.',
    why: 'Tech buyers in Silicon Valley are inherently skeptical and technically advanced. They bypass marketing fluff, leverage AI for deep vendor comparisons, and rely heavily on authoritative peer reviews. We construct a data-backed search presence that satisfies their rigorous evaluation process, establishing your credibility across every platform they consult.',
    about: 'Our San Jose search strategy is purpose-built for the B2B tech sector. We recognize that securing traffic is secondary to capturing qualified pipeline. We implement complex SEO frameworks, optimize for Answer Engines (AEO), and secure placements in Generative AI overviews (GEO) to ensure your product is consistently surfaced during crucial technical evaluations.\n\nWe align our optimization efforts directly with your revenue goals, eliminating wasteful spend on low-intent keywords and focusing entirely on the queries that drive SaaS adoption and enterprise technology sales in the Bay Area.',
    services: [
      ['B2B Tech SEO', 'Target competitive, high-intent SaaS and technology queries that drive product demos.', 'seo'],
      ['Answer Engine Optimization', 'Format your technical documentation so AI models confidently cite your solutions.', 'aeo'],
      ['Generative AI Visibility', 'Secure critical placements within AI overviews for complex Silicon Valley tech searches.', 'geo'],
      ['Bay Area Local Dominance', 'Establish authoritative local relevance for in-person B2B technology consultations.', 'local-seo']
    ],
    resources: [{ title: 'Silicon Valley Search Strategies', desc: 'Advanced visibility tactics for highly competitive tech markets.', href: '/blog' }, { title: 'The B2B Tech AEO Playbook', desc: 'Understanding how CTOs use AI for software procurement.', href: '/blog' }, { title: 'SaaS Generative Search Framework', desc: 'Optimizing product data for AI engine extraction.', href: '/blog' }],
    process: [
      { step: '01', title: 'Technical Capability Audit', desc: 'We systematically evaluate your search footprint and AI citation rate against key Silicon Valley competitors.' },
      { step: '02', title: 'Intent-Mapped Strategy', desc: 'We develop a sprint-based plan prioritizing high-value tech queries and generative AI visibility.' },
      { step: '03', title: 'Advanced Execution', desc: 'Our team implements sophisticated schema, expert-led content, and robust technical SEO protocols.' },
      { step: '04', title: 'Pipeline Attribution', desc: 'We deliver transparent reporting that directly links our optimization efforts to your sales pipeline.' }
    ]
  },
  texas: {
    tagline: 'Command Search Authority Across Texas Markets.',
    sub: 'We engineer precise search visibility across Google and AI platforms, capturing high-intent demand from Dallas enterprises, Houston energy firms, and Austin tech hubs.',
    why: 'Texas requires a nuanced, multi-layered approach to search. A strategy that resonates with an Austin SaaS founder will likely fail with a Houston oil executive. We develop highly specialized SEO, AEO, and GEO campaigns tailored to the distinct economic drivers of each major Texas metro, ensuring your brand connects with the right decision-makers.',
    about: 'Our methodology for Texas businesses discards generic optimization in favor of deep, industry-specific relevance. We focus on measurable business growth by securing top placements for commercial intent queries while actively shaping how AI engines perceive your brand.\n\nWhether you need to dominate regional Google Maps results in San Antonio or become the cited authority in Perplexity for Dallas financial services, we provide the technical rigor and strategic insight necessary to turn search visibility into tangible revenue.',
    services: [
      ['Statewide B2B SEO', 'Target commercial-intent queries across Texas\'s varied industrial sectors.', 'seo'],
      ['Answer Engine Optimization', 'Position your brand as the definitive answer for Texas-specific AI inquiries.', 'aeo'],
      ['Generative Engine Optimization', 'Secure prominent citations within AI overviews for key regional industries.', 'geo'],
      ['Multi-Metro Local SEO', 'Dominate localized search results across Dallas, Houston, Austin, and San Antonio.', 'local-seo']
    ],
    resources: [{ title: 'Texas Multi-City Search Playbook', desc: 'Adapting strategies for the distinct markets of Dallas, Houston, and Austin.', href: '/blog' }, { title: 'Energy Sector Authority', desc: 'Establishing trust and visibility for Houston\'s industrial markets.', href: '/blog' }, { title: 'Tech Search in Austin', desc: 'Capturing intent in highly competitive innovation hubs.', href: '/blog' }],
    process: [
      { step: '01', title: 'Regional Data Analysis', desc: 'We map your current visibility against specific Texas metro markets and industry verticals.' },
      { step: '02', title: 'Market-Specific Strategy', desc: 'We construct customized optimization roadmaps tailored to the unique demands of each target city.' },
      { step: '03', title: 'Targeted Execution', desc: 'Our experts deploy localized content, advanced schema, and technical fixes to capture regional intent.' },
      { step: '04', title: 'Revenue Reporting', desc: 'We provide transparent analytics linking our regional search improvements directly to your sales pipeline.' }
    ]
  },
  fremont: {
    tagline: 'Drive Growth in Fremont Through Advanced Search.',
    sub: 'We engineer powerful search visibility tailored to Fremont\'s unique market dynamics, bridging the gap between Silicon Valley tech demands and vibrant local commerce.',
    why: 'Operating in Fremont means navigating a highly specific intersection of Bay Area technological sophistication and diverse community needs. Standard SEO tactics often miss this nuance. We deploy data-driven strategies that accurately capture high-intent traffic, ensuring your business is highly visible on traditional search engines and emerging AI platforms alike.',
    about: 'Our approach for Fremont businesses focuses entirely on generating measurable returns. We recognize that visibility without conversion is a wasted investment. By integrating technical SEO, Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO), we ensure your brand effectively reaches its ideal audience—whether you are a tech firm scaling across the Bay Area or a premium service provider targeting local neighborhoods.\n\nWe don\'t rely on vanity metrics; we build a sustainable digital infrastructure that consistently drives qualified leads and supports your long-term business objectives.',
    services: [
      ['Revenue-Driven SEO', 'Target high-converting queries tailored to Fremont\'s unique economic landscape.', 'seo'],
      ['Answer Engine Integration', 'Optimize your business data to ensure consistent citations by major AI models.', 'aeo'],
      ['Generative Search Authority', 'Secure prime real estate in AI-generated overviews for relevant local and tech queries.', 'geo'],
      ['Tri-City Local Dominance', 'Capture highly qualified local intent across Fremont, Newark, and Union City.', 'local-seo']
    ],
    resources: [{ title: 'Fremont Search Strategy', desc: 'Navigating visibility in a diverse, tech-adjacent market.', href: '/blog' }, { title: 'Tri-City Authority Building', desc: 'Effectively capturing local demand across the region.', href: '/blog' }, { title: 'AI Search for Local Business', desc: 'How generative models impact local service discovery.', href: '/blog' }],
    process: [
      { step: '01', title: 'Data-Centric Audit', desc: 'We conduct a precise analysis of your current visibility within Fremont\'s specific competitive landscape.' },
      { step: '02', title: 'Intent-Aligned Strategy', desc: 'We formulate a targeted action plan focused exclusively on queries that drive actual business value.' },
      { step: '03', title: 'Technical Deployment', desc: 'Our specialists implement structural enhancements, authoritative content, and advanced schema markup.' },
      { step: '04', title: 'ROI-Focused Reporting', desc: 'We deliver clear analytics connecting our optimization efforts directly to your lead generation and sales.' }
    ]
  },
  pleasanton: {
    tagline: 'Capture Premium Search Demand in Pleasanton.',
    sub: 'We build decisive search visibility across Google and AI engines, ensuring your brand captures high-value inquiries from Pleasanton and the broader Tri-Valley market.',
    why: 'Pleasanton\'s affluent demographic conducts meticulous research before making purchasing decisions. They seek out premium service providers who demonstrate clear expertise and trustworthiness. We design search strategies that elevate your brand above generic competitors, ensuring you are the definitive choice for high-intent buyers evaluating their options.',
    about: 'Our strategy for Pleasanton focuses exclusively on acquiring high-value clients. We implement rigorous SEO, AEO, and GEO techniques to establish your firm\'s credibility precisely when Tri-Valley residents and businesses are ready to buy.\n\nWe recognize that for premium services, trust is the primary conversion metric. By optimizing your digital presence to satisfy complex search intents and secure citations in AI-driven overviews, we build a robust inbound engine that consistently delivers qualified, lucrative opportunities to your business.',
    services: [
      ['High-Intent Local SEO', 'Target premium service queries specifically tailored to the Tri-Valley market.', 'seo'],
      ['Answer Engine Optimization', 'Structure your expertise so AI models recognize and recommend your business.', 'aeo'],
      ['Generative Engine Optimization', 'Secure valuable visibility within AI overviews for competitive local searches.', 'geo'],
      ['Tri-Valley Map Dominance', 'Establish authoritative relevance across Pleasanton, Dublin, and Livermore.', 'local-seo']
    ],
    resources: [{ title: 'Marketing to Affluent Buyers', desc: 'Strategies for capturing premium search intent in the Tri-Valley.', href: '/blog' }, { title: 'Local Authority Building', desc: 'Establishing trust through localized SEO and content.', href: '/blog' }, { title: 'AI Search in Suburbia', desc: 'How emerging technologies impact local service discovery.', href: '/blog' }],
    process: [
      { step: '01', title: 'Market Positioning Audit', desc: 'We evaluate your search presence against the high standards of Pleasanton\'s premium buyers.' },
      { step: '02', title: 'Targeted Growth Strategy', desc: 'We craft a focused plan prioritizing the most lucrative local queries and AI placements.' },
      { step: '03', title: 'Precision Execution', desc: 'Our team implements sophisticated local SEO tactics, authoritative content, and schema data.' },
      { step: '04', title: 'Pipeline Analytics', desc: 'We provide transparent reporting linking our search improvements directly to your revenue growth.' }
    ]
  }
};

let output = content;

function replaceBlock(city, objKey, data) {
  const cityRegex = new RegExp(`    ${city}: \\{\\s+\\'seo-aeo-geo\\': \\{([\\s\\S]*?)\\s+\\},\\s+\\'lead-gen\\':`);
  const match = output.match(cityRegex);
  if (!match) {
    console.log(`Could not find block for ${city}`);
    return;
  }
  
  let block = match[1];
  
  for (const prop of ['tagline', 'sub', 'why', 'about']) {
    const propRegex = new RegExp(`(${prop}: \\')([\\s\\S]*?)(\\',\\n)`);
    block = block.replace(propRegex, (m, p1, p2, p3) => {
      // Escape single quotes but preserve newlines
      return p1 + data[prop].replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\\n/g, "\\\\n") + p3;
    });
  }
  
  const servicesStr = "[\n" + data.services.map(s => `          ['${s[0].replace(/'/g, "\\'")}', '${s[1].replace(/'/g, "\\'")}', '${s[2]}']`).join(",\n") + "\n        ]";
  block = block.replace(/(services: )(\[[\s\S]*?\])(,\n\s+stats)/, `$1${servicesStr}$3`);

  const resourcesStr = "[\n" + data.resources.map(r => `          { title: '${r.title.replace(/'/g, "\\'")}', desc: '${r.desc.replace(/'/g, "\\'")}', href: '${r.href}' }`).join(",\n") + "\n        ]";
  block = block.replace(/(resources: )\[[\s\S]*?\](,\n\s+process)/, `$1${resourcesStr}$2`);
  
  const processStr = "[\n" + data.process.map(p => `          { step: '${p.step}', title: '${p.title.replace(/'/g, "\\'")}', desc: '${p.desc.replace(/'/g, "\\'")}' }`).join(",\n") + "\n        ]";
  block = block.replace(/(process: )\[[\s\S]*?\](\n\s+)$/, `$1${processStr}$2`);

  // We have to use a replacer function to avoid issue with $ signs if any
  output = output.replace(cityRegex, () => `    ${city}: {\n      'seo-aeo-geo': {${block}\n      },\n      'lead-gen':`);
}

for (const city in replacements) {
  replaceBlock(city, 'seo-aeo-geo', replacements[city]);
}

fs.writeFileSync(file, output);
console.log('Successfully updated serviceCityData.ts');
