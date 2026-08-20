import Studio from "@/views/Studio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Studio — Zesh Agency Creative & Design',
  description: 'Zesh Agency Studio: creative design, brand identity, and visual strategy for high-growth companies.',
  alternates: {
    canonical: '/studio',
  },
  openGraph: {
    title: 'Studio — Zesh Agency Creative & Design',
    description: 'Creative design, brand identity, and visual strategy for high-growth companies.',
  },
};

export default function Page() {
    return <Studio />;
}
