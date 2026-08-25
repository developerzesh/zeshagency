import Careers from "@/views/Careers";
import { getAllJobs } from "@/lib/queries";
import type { Metadata } from "next";

export const revalidate = false;

export const metadata: Metadata = {
  title: 'Careers at Zesh Agency | Join Our Growth & SEO Team',
  description: 'Explore careers at Zesh Agency and join a senior team building SEO, AEO, GEO, and high-converting web systems for ambitious brands.',
  alternates: {
    canonical: '/careers',
  },
  openGraph: {
    title: 'Careers at Zesh Agency | Join Our Growth & SEO Team',
    description: 'Explore careers at Zesh Agency and join a senior team building SEO, AEO, GEO, and high-converting web systems for ambitious brands.',
  },
};

export default async function Page() {
  const jobs = await getAllJobs();
  return <Careers jobs={jobs} />;
}
