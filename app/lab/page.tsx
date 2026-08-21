import Lab from "@/views/Lab";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Zesh Agency Lab | Experimental Search & Growth R&D',
  description: 'Explore Zesh Agency Lab experiments, prototypes, and research across next-generation search and growth optimization systems.',
  alternates: {
    canonical: '/lab',
  },
  openGraph: {
    title: 'Zesh Agency Lab | Experimental Search & Growth R&D',
    description: 'Explore Zesh Agency Lab experiments, prototypes, and research across next-generation search and growth optimization systems.',
  },
};

export default function Page() {
  return <Lab />;
}
