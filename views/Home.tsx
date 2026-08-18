
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

export default function Home({ posts = [] }: { posts?: any[] }) {
  return (
    <PageTransition>
      <HeroSection />
      <TrustBar />
      <WhyChooseUs />
      <SolutionsGrid />
      <HowWeWork />
      <Metrics />
      <ComparisonTable />
      <FeaturedCaseStudy />
      <IndustriesGrid />
      <Testimonials />
      <BlogSection posts={posts} />
      <FAQSection />
      <CTA />
    </PageTransition>
  );
}
