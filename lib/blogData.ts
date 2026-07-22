// ── Blog Post Data ─────────────────────────────────────────────────────────
// Separate from siteConfig to keep it manageable.
// Each post supports both simple string[] content OR rich section objects.

export type ContentSection = string | {
    heading?: string;
    body?: string;
    bullets?: string[];
    callout?: string;
};

export interface BlogPost {
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
    toc?: string[];                // Optional headings for sidebar ToC
    content: ContentSection[];
}

export const blogCategories = [
    'All', 'SEO & Search', 'AI & GEO', 'Web Performance', 'Growth Strategy', 'Case Breakdowns',
] as const;

export const blogPosts: BlogPost[] = [
    {
        slug: 'programmatic-seo-saas-2025',
        title: 'The Complete Programmatic SEO Playbook for SaaS in 2025',
        category: 'SEO & Search',
        date: 'Jul 2026',
        readTime: '12 min',
        excerpt: 'How to build comparison and alternative landing pages that intercept high-intent buyers at the moment of decision — without relying on G2 or Capterra.',
        author: 'Isla Vance',
        authorRole: 'Chief Strategy Officer',
        authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
        tags: ['Programmatic SEO', 'SaaS', 'Comparison Pages', 'Buying Intent', 'Organic Growth'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=900&fit=crop',
        toc: [
            'Why Aggregators Win (and How to Beat Them)',
            'Identifying the Right Comparison Queries',
            'Building Programmatic Templates at Scale',
            'Schema Markup for Comparison Pages',
            'Internal Linking Architecture',
            'Measuring Programmatic SEO ROI',
        ],
        content: [
            {
                heading: 'Why Aggregators Win (and How to Beat Them)',
                body: 'Directories like G2, Capterra, and Trustradius dominate SaaS category searches not because they have better products, but because they have more pages. Every "best [software] alternatives" query sends buyers to their marketplace — where your competitor might outbid you for a featured slot.',
                callout: 'The solution isn\'t to outrank G2 on their own terms. It\'s to intercept buyers before they get there, on pages you own and control.',
            },
            {
                heading: 'Identifying the Right Comparison Queries',
                body: 'Not all comparison queries are equal. The highest-value targets are queries where the buyer has already shortlisted and is now evaluating final options.',
                bullets: [
                    '"[Competitor] alternatives" — buyer is actively looking to switch',
                    '"[Your product] vs [Competitor]" — buyer is comparing you directly',
                    '"Best [Competitor] alternatives for [use case]" — segment-specific intent',
                    '"[Competitor] pricing" alternatives — cost-sensitive evaluation',
                ],
            },
            {
                heading: 'Building Programmatic Templates at Scale',
                body: 'The core of programmatic SEO is a single reusable template deployed across dozens of unique URLs. Each page must feel genuinely useful, not auto-generated spam. The key variables that differ: competitor name, feature comparison data, and pricing context.',
                callout: 'Speed is non-negotiable. Every comparison page must load under 1 second. Buyers evaluating software are comparing multiple tabs simultaneously.',
            },
            {
                heading: 'Schema Markup for Comparison Pages',
                body: 'Declaring structured data on comparison pages does two things: it helps Google understand the page structure, and it positions your brand for AI-powered search citations. Use SoftwareApplication and ItemList schema to declare feature arrays and pricing ranges.',
                bullets: [
                    'SoftwareApplication schema for each product being compared',
                    'ItemList schema wrapping the full comparison structure',
                    'FAQPage schema for the Q&A section covering common objections',
                    'Review schema linking to verified third-party review sources',
                ],
            },
            {
                heading: 'Internal Linking Architecture',
                body: 'Your comparison directory needs a hub-and-spoke link structure. The hub page (a central "Alternatives to [Competitor]" index) distributes PageRank to every spoke (individual comparison pages). The homepage should link to the hub. This creates a compounding authority loop.',
            },
            {
                heading: 'Measuring Programmatic SEO ROI',
                body: 'Track each page\'s contribution to demo bookings using UTM parameters tied to the comparison page slug. Calculate cost-per-acquisition from organic comparison traffic versus Google Ads. In most cases, organic comparison pages generate qualified leads at 70-85% lower CAC than paid search.',
                callout: 'One client\'s 42-page comparison directory generated $1.2M in attributed pipeline within 90 days of launch — at a CAC of $8.40 vs $42 from AdWords.',
            },
        ],
    },
    {
        slug: 'aeo-geo-brand-visibility-2026',
        title: 'AEO vs GEO: How to Get Your Brand Cited in ChatGPT, Claude & Perplexity',
        category: 'AI & GEO',
        date: 'Jun 2026',
        readTime: '10 min',
        excerpt: 'The architectural differences between Answer Engine Optimization and Generative Engine Optimization — and the exact steps to build presence in both.',
        author: 'Luca Vance',
        authorRole: 'Head of Search & AI',
        authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
        tags: ['AEO', 'GEO', 'ChatGPT', 'Perplexity', 'LLM Citation', 'Entity Mapping'],
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1400&h=900&fit=crop',
        toc: [
            'AEO vs GEO: The Key Distinction',
            'How LLMs Decide Which Brands to Cite',
            'Building Your Entity Graph',
            'RAG-Optimized Content Architecture',
            'Measuring Citation Share',
        ],
        content: [
            {
                heading: 'AEO vs GEO: The Key Distinction',
                body: 'Answer Engine Optimization (AEO) focuses on getting your brand cited in conversational AI responses — ChatGPT, Claude, Siri. Generative Engine Optimization (GEO) targets AI search surfaces that synthesize real-time web content — Perplexity, Google AI Overviews, Bing Copilot. Different systems. Different optimization strategies.',
                callout: 'Most brands optimize for neither. They continue publishing blog posts for Google while their competitors quietly accumulate AI citation share.',
            },
            {
                heading: 'How LLMs Decide Which Brands to Cite',
                body: 'Large Language Models built on training data (GPT-4, Claude) cite brands that appear frequently in high-authority, trustworthy sources from their training corpus. Retrieval-augmented systems (Perplexity) cite brands that appear on pages the system can actually crawl and parse efficiently.',
                bullets: [
                    'Training data authority: guest posts in developer publications, Wikipedia mentions, Wikidata entity nodes',
                    'Schema declaration: JSON-LD organization and product schemas that match the query context',
                    'RAG readability: content structured so the first 150 words of each page answer the core question',
                    'Entity consistency: same brand name, description, and facts across all public profiles',
                ],
            },
            {
                heading: 'Building Your Entity Graph',
                body: 'Your entity graph is the network of public records that AI systems query to understand who you are. Start with a Wikidata entry, then ensure consistency across Crunchbase, LinkedIn, Google Business Profile, and industry directories.',
                callout: 'An AI platform we worked with grew from 4% to 42% citation share in 16 weeks by declaring a Wikidata entity node and restructuring their documentation for RAG ingestion.',
            },
            {
                heading: 'RAG-Optimized Content Architecture',
                body: 'Retrieval-Augmented Generation systems extract "chunks" from pages to answer queries. Each page should contain a self-contained summary in its opening paragraph — one that directly answers the most likely query that would bring someone to that page. Avoid burying the answer behind 400 words of context.',
                bullets: [
                    'Open every page with a 2-sentence direct answer to the most relevant query',
                    'Use clear H2 headings that mirror how questions are actually phrased',
                    'Include a structured FAQ section with 5-7 common questions',
                    'End with a definitive conclusion that reinforces the key claim',
                ],
            },
            {
                heading: 'Measuring Citation Share',
                body: 'Track citation share by systematically prompting AI systems with your target queries weekly. Establish a baseline, then measure after each optimization sprint. A 40-query benchmark set, tested across 3 systems (GPT-4o, Claude, Perplexity) gives you 120 data points per month.',
            },
        ],
    },
    {
        slug: 'core-web-vitals-revenue-impact',
        title: 'Core Web Vitals Are a Revenue Problem, Not a Technical One',
        category: 'Web Performance',
        date: 'May 2026',
        readTime: '8 min',
        excerpt: 'Why every 100ms of Largest Contentful Paint delay costs real pipeline, and how to build a performance budget that ties pagespeed directly to revenue outcomes.',
        author: 'Aris Thorne',
        authorRole: 'Principal Growth Engineer',
        authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
        tags: ['Core Web Vitals', 'LCP', 'Performance Budget', 'Conversion Rate', 'Revenue Impact'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=900&fit=crop',
        toc: [
            'The Real Cost of Slow Pages',
            'Diagnosing Your LCP Bottleneck',
            'Building a Performance Budget',
            'The Architecture Decisions That Actually Matter',
            'Measuring Performance Against Revenue',
        ],
        content: [
            {
                heading: 'The Real Cost of Slow Pages',
                body: 'Every 100ms improvement in page load time correlates with a 1% lift in conversion rates according to Cloudflare and Deloitte research. For a SaaS company generating $100K MRR from its website, a 500ms load time improvement is worth $5,000 in additional monthly revenue — ongoing, compounding, free.',
                callout: 'Bounce rate from mobile users on pages loading > 3 seconds is typically 53% or higher. Over half your mobile visitors never see your value proposition.',
            },
            {
                heading: 'Diagnosing Your LCP Bottleneck',
                body: 'Largest Contentful Paint is almost always caused by one of three things: server response time, render-blocking resources, or unoptimized images. Run a Lighthouse audit, check the "LCP element" in the trace, then work backwards.',
                bullets: [
                    'Server response > 600ms: switch to a CDN-served static build',
                    'Render-blocking JS: defer non-critical scripts, inline critical CSS',
                    'Unoptimized hero images: migrate to AVIF, add explicit width/height, preload the LCP image',
                    'Third-party scripts: audit every tag in GTM, remove what isn\'t tracked',
                ],
            },
            {
                heading: 'Building a Performance Budget',
                body: 'A performance budget is a set of limits for page weight and load metrics enforced in your build pipeline. Set a hard limit on total page weight (< 200KB compressed HTML/CSS/JS), individual image sizes (< 150KB per image), and LCP target (< 2.5s on 4G mobile).',
                callout: 'Enforce budgets via Lighthouse CI in your GitHub Actions pipeline. A failed performance budget should block a merge, not appear as a warning nobody reads.',
            },
            {
                heading: 'The Architecture Decisions That Actually Matter',
                body: 'WordPress with plugins will never achieve consistent sub-1s LCP at scale. The architecture decision that determines performance ceiling is made before a single line of CSS is written. Static generation beats server-side rendering beats SPAs for time-to-first-byte. Vanilla HTML/CSS beats React for raw paint speed.',
                bullets: [
                    'Static HTML: theoretically instant TTFB from CDN edge nodes',
                    'SSG frameworks (Astro, Next.js export): excellent for component-based static sites',
                    'Headless WordPress + static frontend: decouples performance from CMS complexity',
                    'React SPA: should only be used when UI interactivity requires it (dashboards, apps)',
                ],
            },
            {
                heading: 'Measuring Performance Against Revenue',
                body: 'Set up a custom GA4 event that fires when your LCP image loads. Segment conversion rates by LCP bucket (< 1s, 1-2.5s, 2.5-4s, > 4s). Calculate the revenue delta between your slowest and fastest cohorts. This gives you the exact ROI number to justify a performance engineering investment to a CFO.',
            },
        ],
    },
    {
        slug: 'local-seo-map-pack-domination',
        title: 'Local SEO in 2026: The Complete Map Pack Domination Framework',
        category: 'SEO & Search',
        date: 'Apr 2026',
        readTime: '11 min',
        excerpt: 'The three pillars of local search dominance — NAP consistency, review prominence, and local schema — explained with the exact process we use to get clients into the top 3 map positions in under 90 days.',
        author: 'Isla Vance',
        authorRole: 'Chief Strategy Officer',
        authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
        tags: ['Local SEO', 'Google Maps', 'NAP', 'Review Management', 'Map Pack'],
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&h=900&fit=crop',
        toc: [
            'How Google Ranks Local Results',
            'NAP Audit: The Foundation',
            'Building Review Velocity',
            'Local Schema Architecture',
            'The 90-Day Domination Roadmap',
        ],
        content: [
            {
                heading: 'How Google Ranks Local Results',
                body: 'The local ranking algorithm weights three signals: relevance (does this business match the query?), distance (how close is it to the searcher?), and prominence (how well-known and trusted is it?). Most businesses fail entirely on prominence — the signal most controlled by your digital presence.',
                callout: 'Prominence is the only local ranking signal you can materially improve in 90 days. It\'s also the one most businesses completely ignore.',
            },
            {
                heading: 'NAP Audit: The Foundation',
                body: 'NAP stands for Name, Address, Phone number. Google cross-references your NAP data across 80+ directories to validate your business\'s legitimacy. A single mismatched phone number across 12 directories triggers a trust signal failure that suppresses your local ranking.',
                bullets: [
                    'Run a citation audit using BrightLocal or Whitespark to identify all existing listings',
                    'Document every variant of your business name, address format, and phone number',
                    'Prioritize corrections in this order: Google Business Profile → Apple Maps → Bing → Yelp → Top 20 industry directories',
                    'Set up automated monitoring to catch future inconsistencies as they appear',
                ],
            },
            {
                heading: 'Building Review Velocity',
                body: 'Review count and recency are both ranking signals. A business with 200 reviews averaging 4.9 stars and 3 reviews in the last month will often lose to a competitor with 80 reviews averaging 4.7 stars but 15 reviews last month. Recency signals active operation.',
                callout: 'The highest-converting review acquisition system we\'ve deployed: an automated SMS sent 48 hours post-appointment with a single-tap link directly to the Google review form.',
            },
            {
                heading: 'Local Schema Architecture',
                body: 'LocalBusiness schema tells Google exactly what your business does, where it is, and when it\'s open. Include GeoCoordinates for precision, hasMap linking to your Google Maps listing, areaServed for service-area businesses, and aggregateRating if you have verified review data.',
                bullets: [
                    'LocalBusiness or a more specific subtype (MedicalClinic, Restaurant, LawFirm)',
                    'GeoCoordinates with 6+ decimal precision',
                    'openingHoursSpecification for each day of the week',
                    'priceRange using $ notation',
                    'sameAs array pointing to all verified social and directory profiles',
                ],
            },
            {
                heading: 'The 90-Day Domination Roadmap',
                body: 'Month 1: Complete NAP audit and begin citation corrections. Deploy LocalBusiness schema. Create or optimize Google Business Profile with photos, services, and attributes. Month 2: Launch review acquisition funnel. Set up weekly Map Pack ranking tracking. Begin local content publishing. Month 3: Review funnel reaches steady state. Analyze ranking movements, adjust service area targeting, publish neighborhood-specific pages.',
            },
        ],
    },
    {
        slug: 'b2b-content-strategy-authority',
        title: 'The B2B Content Authority Framework: Stop Writing For Traffic, Start Writing For Decisions',
        category: 'Growth Strategy',
        date: 'Mar 2026',
        readTime: '9 min',
        excerpt: 'Why most B2B content fails to generate qualified pipeline and how depth-first authority content creates a compounding inbound engine that attracts decision-makers.',
        author: 'Isla Vance',
        authorRole: 'Chief Strategy Officer',
        authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
        tags: ['B2B Content', 'Thought Leadership', 'Pipeline Generation', 'Content Strategy', 'Authority SEO'],
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&h=900&fit=crop',
        toc: [
            'Why High-Volume Content Fails in B2B',
            'The Decision-Maker Content Matrix',
            'Going Depth-First: The 4,000-Word Opportunity',
            'Distribution: From Organic to LinkedIn',
            'Measuring Content Against Pipeline',
        ],
        content: [
            {
                heading: 'Why High-Volume Content Fails in B2B',
                body: 'The "publish 3x per week" strategy works for consumer media businesses that monetize pageviews. B2B consulting firms, SaaS companies, and professional services firms don\'t sell ads — they sell relationships. And relationships are built on demonstrated expertise, not content volume.',
                callout: 'A CFO researching a $500K software decision reads differently than a consumer browsing for recipe ideas. Depth signals authority. Shallow content signals a content farm.',
            },
            {
                heading: 'The Decision-Maker Content Matrix',
                body: 'Map your content to the actual questions decision-makers ask at each stage of their research. Early stage: awareness of a problem ("are we growing as fast as we should?"). Middle stage: evaluation of options ("what does a good SEO agency actually deliver?"). Late stage: risk reduction ("what does implementation look like?").',
                bullets: [
                    'Early-stage: industry benchmarks, "state of" reports, trend analysis',
                    'Middle-stage: comparison guides, methodology explainers, case studies',
                    'Late-stage: implementation timelines, ROI calculators, contract FAQs',
                    'All stages: proof of expertise through specificity and original data',
                ],
            },
            {
                heading: 'Going Depth-First: The 4,000-Word Opportunity',
                body: 'When a CFO searches for "how to reduce CAC through organic search," they want a definitive answer — not a 600-word overview that ends with "contact us to learn more." The brand willing to publish a true 4,000-word operational guide on that topic earns the shortlist slot.',
                callout: 'We mapped 40 regulatory change queries for a B2B consulting client. Of the 24 we produced depth-first guides on, 9 ranked page 1 within 6 months — generating $1.8M in new pipeline over 12 months.',
            },
            {
                heading: 'Distribution: From Organic to LinkedIn',
                body: 'Organic traffic from long-form content compounds over time. LinkedIn distribution compresses the timeline. When a founder-level LinkedIn post links to a 4,000-word operational guide, it creates two acquisition paths simultaneously: immediate traffic from followers and long-term organic from search.',
                bullets: [
                    'Publish the full guide on your domain first (always own your content)',
                    'Extract 3-5 key insights for a LinkedIn carousel post',
                    'Write a founder perspective post linking to the full guide',
                    'Repurpose the Q&A from a discovery call into a FAQ addendum',
                ],
            },
            {
                heading: 'Measuring Content Against Pipeline',
                body: 'Set up a custom pipeline source field in your CRM. When a qualified lead comes in, capture where they found you. After 90 days of consistent publishing, you should begin seeing "found you through your content" appear in discovery calls. Track this as a pipeline source with attributed contract value.',
            },
        ],
    },
    {
        slug: 'saas-pipeline-312-case-breakdown',
        title: 'Case Breakdown: How We Grew a SaaS Pipeline by 312% in 90 Days',
        category: 'Case Breakdowns',
        date: 'Feb 2026',
        readTime: '14 min',
        excerpt: 'A complete behind-the-scenes breakdown of the 42-page programmatic comparison strategy that turned $42 CPC keywords into $8.40 organic leads for an ERP platform.',
        author: 'Luca Vance',
        authorRole: 'Head of Search & AI',
        authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
        tags: ['Case Study', 'SaaS SEO', 'Programmatic SEO', 'Pipeline Growth', 'B2B'],
        image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1400&h=900&fit=crop',
        toc: [
            'The Client Situation',
            'The Core Insight',
            'The 6-Week Build Process',
            'Schema Architecture',
            'Week-by-Week Results',
            'What We\'d Do Differently',
        ],
        content: [
            {
                heading: 'The Client Situation',
                body: 'An Enterprise Resource Planning (ERP) platform was spending $42 per click on Google Ads for their target keywords. Their website generated fewer than 200 organic sessions per month. Third-party directories like G2 and Capterra dominated every category keyword and charged listing fees on top of referral commissions.',
                callout: 'The client\'s dependency on paid search meant their customer acquisition cost was structurally tied to Google\'s auction price. Every time a competitor increased bids, their CAC increased.',
            },
            {
                heading: 'The Core Insight',
                body: 'Enterprise software buyers don\'t go to Google and search "best ERP software." They\'ve already done that research. By the time they\'re serious, they\'re searching for "[Competitor X] alternatives" or "[Competitor X] vs [Competitor Y]." These are the queries where the buying decision is already in progress.',
                bullets: [
                    'Competitor alternative queries had 60-80% lower keyword difficulty than category queries',
                    'Conversion rates on comparison pages are typically 2-3x higher than category pages',
                    'G2 and Capterra don\'t rank for most long-tail comparison queries — opening exists',
                    'All 42 target queries had < 5 competing pages with genuine comparison content',
                ],
            },
            {
                heading: 'The 6-Week Build Process',
                body: 'Week 1-2: Keyword research sprint identifying 200+ competitor comparison queries. Filtered to 42 highest-intent targets with achievable difficulty. Week 3-4: Template design and development. Built a reusable comparison page template in vanilla HTML/CSS achieving sub-100ms First Contentful Paint. Week 5-6: Content production, schema injection, and deployment across all 42 URLs simultaneously.',
                callout: 'We deployed all 42 pages in a single release with a coordinated Google Search Console submission. 31 of 42 reached page 1 within 47 days.',
            },
            {
                heading: 'Schema Architecture',
                body: 'Each comparison page declared three schema types: SoftwareApplication for the client\'s product and each competitor, ItemList for the comparison feature matrix, and FAQPage for objection-handling questions. The schema made the pages immediately parseable by both Google\'s featured snippets and AI citation systems.',
                bullets: [
                    'SoftwareApplication: applicationCategory, featureList, offers, operatingSystem',
                    'ItemList: each feature row as a ListItem with position and item',
                    'FAQPage: 5 questions per page covering switching costs, migration, pricing, and support',
                ],
            },
            {
                heading: 'Week-by-Week Results',
                body: 'Weeks 1-3: Indexation only, no ranking signals yet. Weeks 4-6: First page 1 rankings appear for lowest-competition queries (long-tail, 3-word comparison phrases). Weeks 7-8: Mid-competition queries begin moving. First organic demo bookings attributed to comparison pages. Weeks 9-12: 31 of 42 queries reach page 1. Pipeline attribution dashboard shows $480K in opportunities. Week 16: Pipeline reaches $1.2M.',
            },
            {
                heading: 'What We\'d Do Differently',
                body: 'We\'d invest earlier in the AEO layer. The comparison pages performed well in traditional search, but we added AEO entity declarations in week 10. Starting this in week 1 would have accelerated AI citation share. We\'d also build the FAQ sections earlier — they drove 23% of conversion events through featured snippet traffic that wasn\'t in the original projection.',
            },
        ],
    },
];
