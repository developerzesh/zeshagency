import Journal from "@/views/Journal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Journal — Behind the Scenes at Zesh Agency',
  description: 'The Zesh Agency journal: insights on growth strategy, search engineering, and the evolving digital marketing landscape.',
  alternates: {
    canonical: '/journal',
  },
  openGraph: {
    title: 'Journal — Behind the Scenes at Zesh Agency',
    description: 'Insights on growth strategy, search engineering, and the digital marketing landscape.',
  },
};

export default function Page() {
    return <Journal />;
}
