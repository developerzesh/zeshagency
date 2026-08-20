import Careers from "@/views/Careers";
import { getAllJobs } from "@/lib/queries";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Careers at Zesh Agency — Join Our Growth Team',
  description: 'Explore career opportunities at Zesh Agency. Join a team of senior growth engineers, strategists, and SEO specialists building high-performance systems.',
  alternates: {
    canonical: '/careers',
  },
  openGraph: {
    title: 'Careers at Zesh Agency — Join Our Growth Team',
    description: 'Explore career opportunities at Zesh Agency. Join our team of senior growth engineers and strategists.',
  },
};

export default async function Page() {
    const jobs = await getAllJobs();
    return <Careers jobs={jobs} />;
}
