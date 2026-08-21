import Contact from "@/views/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Zesh Agency | Free SEO & Growth Consultation',
  description: 'Book a free consultation with Zesh Agency for SEO, AEO, GEO, and digital growth strategy tailored to your brand and industry.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Zesh Agency | Free SEO & Growth Consultation',
    description: 'Book a free consultation with Zesh Agency for SEO, AEO, GEO, and digital growth strategy tailored to your brand and industry.',
  },
};

export default function Page() {
  return <Contact />;
}
