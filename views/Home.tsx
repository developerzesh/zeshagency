"use client";

import dynamic from 'next/dynamic';
import PageTransition from '../components/PageTransition';
import HeroSection from '../components/home/HeroSection';
import TrustBar from '../components/home/TrustBar';

const WhyChooseUs = dynamic(() => import('../components/home/WhyChooseUs'), { loading: () => <div className="min-h-[400px]" /> });
const SolutionsGrid = dynamic(() => import('../components/home/SolutionsGrid'), { loading: () => <div className="min-h-[800px]" /> });
const HowWeWork = dynamic(() => import('../components/home/HowWeWork'), { loading: () => <div className="min-h-[600px]" /> });
const Metrics = dynamic(() => import('../components/home/Metrics'), { loading: () => <div className="min-h-[600px]" /> });
const ComparisonTable = dynamic(() => import('../components/home/ComparisonTable'), { loading: () => <div className="min-h-[600px]" /> });
const FeaturedCaseStudy = dynamic(() => import('../components/home/FeaturedCaseStudy'), { loading: () => <div className="min-h-[500px]" /> });
const IndustriesGrid = dynamic(() => import('../components/home/IndustriesGrid'), { loading: () => <div className="min-h-[600px]" /> });
const Testimonials = dynamic(() => import('../components/Testimonials'), { loading: () => <div className="min-h-[500px]" /> });
const BlogSection = dynamic(() => import('../components/home/BlogSection'), { loading: () => <div className="min-h-[600px]" /> });
const FAQSection = dynamic(() => import('../components/home/FAQSection'), { loading: () => <div className="min-h-[500px]" /> });
const CTA = dynamic(() => import('../components/home/CTA'), { loading: () => <div className="min-h-[400px]" /> });

export default function Home() {
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
      <BlogSection />
      <FAQSection />
      <CTA />
    </PageTransition>
  );
}
