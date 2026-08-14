import type { MetadataRoute } from 'next';
import { solutions, industries, caseStudies, insights } from '@/lib/siteConfig';
import { blogPosts } from '@/lib/blogData';
import { CITY_DATA } from '@/lib/cityData';
import { SOLUTIONS_CITIES, SERVICES_META } from '@/lib/serviceCityData';

const BASE_URL = 'https://zeshagency.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/solutions`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/solutions/seo-aeo-geo`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/case-studies`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/industries`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/insights`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/lab`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/studio`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/work`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/philosophy`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${BASE_URL}/journal`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/careers`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
  ];

  const solutionPages: MetadataRoute.Sitemap = solutions.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
    url: `${BASE_URL}/case-studies/${cs.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const industryPages: MetadataRoute.Sitemap = industries.map((i) => ({
    url: `${BASE_URL}/industries/${i.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const insightPages: MetadataRoute.Sitemap = insights.map((i) => ({
    url: `${BASE_URL}/insights/${i.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const cityPages: MetadataRoute.Sitemap = Object.keys(CITY_DATA).map((city) => ({
    url: `${BASE_URL}/location/${city}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const serviceCityPages: MetadataRoute.Sitemap = [];
  for (const city of SOLUTIONS_CITIES) {
    for (const serviceKey of Object.keys(SERVICES_META) as (keyof typeof SERVICES_META)[]) {
      const slug = `${serviceKey}-service-in-${city.key}`;
      serviceCityPages.push({
        url: `${BASE_URL}/location/${city.key}/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      });
      serviceCityPages.push({
        url: `${BASE_URL}/${city.key}/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      });
    }
  }

  return [
    ...staticPages,
    ...solutionPages,
    ...blogPages,
    ...caseStudyPages,
    ...industryPages,
    ...insightPages,
    ...cityPages,
    ...serviceCityPages,
  ];
}
