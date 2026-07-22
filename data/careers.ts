export interface Career {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

export const careers: Career[] = [
  {
    slug: 'senior-growth-marketer',
    title: 'Senior Growth Marketer',
    department: 'Growth',
    location: 'New York / Remote',
    type: 'Full-time',
    description: 'We\'re looking for a Senior Growth Marketer who combines strategic thinking with execution excellence. You\'ll architect and execute multi-channel growth strategies that drive measurable business outcomes for our clients — from SEO and SMO to AEO and GEO.',
    requirements: ['5+ years in growth marketing or digital marketing', 'Deep expertise in SEO, SMO, paid media, and analytics', 'Experience with B2B SaaS or premium B2C clients', 'Strong analytical and storytelling skills', 'Comfort with ambiguity and fast iteration', 'Track record of measurable growth outcomes'],
    responsibilities: ['Architect and implement multi-channel growth strategies', 'Build and optimize social media and content systems', 'Design and optimize conversion funnels and lead generation', 'Collaborate with technical teams on search ecosystem design', 'Contribute to methodology and thought leadership', 'Mentor junior marketers and contribute to team growth'],
  },
  {
    slug: 'search-ai-specialist',
    title: 'Search & AI Specialist',
    department: 'Digital Marketing',
    location: 'London / Remote',
    type: 'Full-time',
    description: 'A first-of-its-kind role at the intersection of search and AI. You\'ll design strategies that ensure our clients are visible, cited, and recommended across AI-powered search surfaces and social algorithms.',
    requirements: ['4+ years in SEO, digital marketing, or AI/ML adjacent roles', 'Understanding of how LLMs retrieve, process, and cite information', 'Experience with structured data, knowledge graphs, and entity optimization', 'Technical proficiency in data analysis and automation', 'Forward-thinking mindset about the evolution of search and social', 'Excellent communication skills for client-facing strategic work'],
    responsibilities: ['Design and implement AEO, GEO, and SMO strategies for clients', 'Monitor and analyze AI output and social algorithm patterns', 'Build systems for tracking AI citation and social engagement rates', 'Develop structured data architectures optimized for AI parsing', 'Lead client workshops on visibility strategy', 'Contribute to thought leadership and methodology development'],
  },
];
