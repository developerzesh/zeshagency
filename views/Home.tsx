
import PageTransition from '../components/PageTransition';
import HeroSection from '../components/home/HeroSection';
import TrustBar from '../components/home/TrustBar';
import WhyChooseUs from '../components/home/WhyChooseUs';
import SolutionsGrid from '../components/home/SolutionsGrid';
import HowWeWork from '../components/home/HowWeWork';
import Metrics from '../components/home/Metrics';
import ComparisonTable from '../components/home/ComparisonTable';
import FeaturedCaseStudy from '../components/home/FeaturedCaseStudy';
import IndustriesGrid from '../components/home/IndustriesGrid';
import Testimonials from '../components/Testimonials';
import BlogSection from '../components/home/BlogSection';
import FAQSection from '../components/home/FAQSection';
import CTA from '../components/home/CTA';

export default function Home({ posts = [], caseStudies = [] }: { posts?: any[]; caseStudies?: any[] }) {
  const featuredCases = caseStudies.slice(0, 3).map((cs: any) => ({
    slug: cs.slug,
    title: cs.title,
    mainMetric: cs.homeStats?.[0]?.value || cs.results?.[0]?.split(' ')[0] || '',
    stats: cs.homeStats || cs.results?.slice(0, 3).map((r: string) => {
      const parts = r.split(' ');
      return { value: parts[0], label: parts.slice(1).join(' ') };
    }) || [],
  }));

  return (
    <PageTransition>
      <HeroSection />
      <TrustBar />
      <WhyChooseUs />
      <SolutionsGrid />
      <HowWeWork />
      <Metrics />
      <ComparisonTable />
      <FeaturedCaseStudy caseStudies={featuredCases} />
      <IndustriesGrid />
      <Testimonials />
      <BlogSection posts={posts} />
      <FAQSection />
      <CTA />
    </PageTransition>
  );
}
