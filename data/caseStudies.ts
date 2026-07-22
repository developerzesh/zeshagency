export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  services: string[];
  context: string;
  challenge: string;
  shift: string;
  execution: string;
  results: string[];
  insight: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'b2b-saas-pipeline-expansion',
    title: 'Pipeline Expansion',
    client: 'Enterprise SaaS Platform',
    industry: 'B2B SaaS',
    services: ['SEO', 'AEO', 'Content Strategy'],
    context: 'A mid-market SaaS platform with a strong product but limited organic visibility. Their pipeline relied heavily on paid channels, creating unsustainable CAC and vulnerability to ad cost inflation.',
    challenge: 'Organic search contributed only 12% of pipeline. Paid channels dominated at 68% with rising CPCs. The sales team lacked enough qualified leads to hit targets, and the marketing team couldn\'t scale paid efficiently.',
    shift: 'We reframed their SEO from "blog content" to "category infrastructure" — building a comprehensive search ecosystem that captured buyers at every stage of the evaluation journey, from problem awareness to vendor comparison.',
    execution: 'Deployed 180+ programmatic pages targeting long-tail use cases. Built 40+ comparison and alternative pages for bottom-funnel capture. Implemented AEO strategy for AI vendor recommendations. Created technical content hub establishing product expertise authority.',
    results: ['Organic pipeline 340% increase', 'Demo requests 180% growth', 'Paid CAC offset by 45%', 'Category keyword top-3 rankings: 67 terms'],
    insight: 'The fastest path to pipeline growth isn\'t more content — it\'s the right content architecture. Mapping the entire buyer journey to searchable assets created a compounding acquisition engine that paid channels can\'t match.',
  },
  {
    slug: 'luxury-property-developer',
    title: 'Luxury Property Developer',
    client: 'Premium Real Estate Group',
    industry: 'Real Estate',
    services: ['Local SEO', 'Web Development', 'Lead Generation'],
    context: 'A luxury property developer with 8 developments across three markets. Despite stunning properties, their digital presence didn\'t match the caliber of their projects — resulting in missed opportunities and broker dependency.',
    challenge: '92% of inquiries came through brokers, eating into margins. Direct online inquiries were minimal. Their website was beautiful but invisible in search, and local competitors dominated neighborhood-level searches.',
    shift: 'We positioned each development as a neighborhood authority — creating hyperlocal content ecosystems that captured buyers searching for lifestyle, not just listings. The website became a destination, not a brochure.',
    execution: 'Rebuilt website with headless architecture for speed and SEO. Created neighborhood guides for each development area. Implemented local SEO across all 8 developments. Built lead nurture system for long consideration cycles.',
    results: ['Direct inquiries 400% increase', 'Broker dependency reduced 35%', 'Average inquiry quality 2x improvement', 'Development pre-sale velocity 3x'],
    insight: 'Luxury buyers don\'t search for listings — they search for lifestyle. Building neighborhood authority around each development created a direct inquiry channel that bypassed broker gatekeepers entirely.',
  },
  {
    slug: 'multi-location-healthcare-group',
    title: 'Multi-Location Healthcare',
    client: 'Regional Healthcare Network',
    industry: 'Healthcare',
    services: ['Local SEO', 'AEO', 'Social Media'],
    context: 'A healthcare network with 24 locations across a major metro area. Despite strong patient satisfaction, new patient acquisition was declining as digital-first competitors captured search visibility.',
    challenge: 'Only 3 of 24 locations appeared in local packs. Online reviews were inconsistent. Service line searches were dominated by competitors, and the organization had no strategy for AI-driven health queries.',
    shift: 'We treated each location as both independent and interconnected — building local authority at the practice level while leveraging system-wide authority for competitive service lines.',
    execution: 'Optimized all 24 Google Business Profiles with consistent NAP and service-specific content. Implemented review generation system across all locations. Created service line content hubs for high-value procedures. Deployed AEO strategy for health information queries.',
    results: ['Local pack visibility 85% across locations', 'New patient inquiries 300% increase', 'Online reviews 4x volume increase', 'Average rating 4.8 stars'],
    insight: 'Multi-location healthcare SEO isn\'t one strategy — it\'s 24 synchronized strategies. The system-wide authority amplified individual location visibility, creating a competitive moat that single-location practices couldn\'t penetrate.',
  },
  {
    slug: 'luxury-jewelry-brand',
    title: 'Luxury Jewelry Brand',
    client: 'Heritage Jewelry Maison',
    industry: 'Premium B2C',
    services: ['SEO', 'Web Development', 'Social Media'],
    context: 'A heritage jewelry brand with 60+ years of craftsmanship. Their online presence failed to convey the artistry and heritage that defined their brand, resulting in a digital experience that felt generic rather than exceptional.',
    challenge: 'Online revenue was 8% of total — far below industry average. Search visibility for key collections was minimal. The website didn\'t match the in-boutique experience, and social media engagement was declining.',
    shift: 'We redesigned the digital experience to mirror the boutique journey — from discovery and inspiration through to consultation and acquisition. Every touchpoint conveyed the same care and craftsmanship as their physical experience.',
    execution: 'Rebuilt website with immersive collection storytelling. Implemented SEO strategy targeting aspirational and collection-specific searches. Created social content system showcasing craftsmanship. Built AEO strategy for luxury gift and occasion queries.',
    results: ['Online revenue 280% increase', 'Collection page traffic 5x', 'Social engagement 4x industry average', 'Average order value 35% increase'],
    insight: 'Luxury digital experiences fail when they optimize for transaction instead of emotion. Rebuilding the journey around aspiration and storytelling transformed the website from a catalog into a boutique — and the revenue followed.',
  },
];
