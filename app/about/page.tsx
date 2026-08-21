import About from "@/views/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Zesh Agency | Senior SEO & Growth Partners',
  description: 'Meet Zesh Agency, the senior-only growth consultancy behind SEO, AEO, GEO, and high-converting web systems for ambitious brands worldwide.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Zesh Agency | Senior SEO & Growth Partners',
    description: 'Meet Zesh Agency, the senior-only growth consultancy behind SEO, AEO, GEO, and high-converting web systems for ambitious brands worldwide.',
  },
};

export default function Page() {
  return <About />;
}
