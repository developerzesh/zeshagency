import Philosophy from "@/views/Philosophy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Zesh Agency Philosophy | Senior Execution & Transparency',
  description: 'Learn the Zesh Agency philosophy: direct communication, senior-only execution, revenue alignment, and operational respect for clients.',
  alternates: {
    canonical: '/philosophy',
  },
  openGraph: {
    title: 'Zesh Agency Philosophy | Senior Execution & Transparency',
    description: 'Learn the Zesh Agency philosophy: direct communication, senior-only execution, revenue alignment, and operational respect for clients.',
  },
};

export default function Page() {
    return <Philosophy />;
}

