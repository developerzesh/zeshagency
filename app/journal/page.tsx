import Journal from "@/views/Journal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Zesh Agency Journal | Strategy Notes & Experiments',
  description: 'Follow the Zesh Agency journal for behind-the-scenes notes on search engineering, growth experiments, and digital strategy.',
  alternates: {
    canonical: '/journal',
  },
  openGraph: {
    title: 'Zesh Agency Journal | Strategy Notes & Experiments',
    description: 'Follow the Zesh Agency journal for behind-the-scenes notes on search engineering, growth experiments, and digital strategy.',
  },
};

export default function Page() {
    return <Journal />;
}

