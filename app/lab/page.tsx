import Lab from "@/views/Lab";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Lab — Experimental Growth Tools & Research',
  description: 'Zesh Agency Lab: experimental tools, research, and prototypes for next-generation search and growth optimization.',
  alternates: {
    canonical: '/lab',
  },
  openGraph: {
    title: 'Lab — Experimental Growth Tools & Research',
    description: 'Experimental tools, research, and prototypes for next-generation search optimization.',
  },
};

export default function Page() {
    return <Lab />;
}
