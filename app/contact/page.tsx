import Contact from "@/views/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Zesh Agency — Schedule a Free Consultation',
  description: 'Get in touch with Zesh Agency for a free growth consultation. Expert SEO, AEO, and digital marketing strategies for your brand.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Zesh Agency — Schedule a Free Consultation',
    description: 'Get in touch with Zesh Agency for a free growth consultation.',
  },
};

export default function Page() {
    return <Contact />;
}
