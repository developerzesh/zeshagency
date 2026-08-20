import About from "@/views/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Zesh Agency — Growth Partner for Ambitious Brands',
  description: 'Learn about Zesh Agency, a strategic growth consultancy partnering with ambitious brands to engineer high-converting growth systems.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Zesh Agency — Growth Partner for Ambitious Brands',
    description: 'Learn about Zesh Agency, a strategic growth consultancy partnering with ambitious brands to engineer high-converting growth systems.',
  },
};

export default function Page() {
    return <About />;
}
