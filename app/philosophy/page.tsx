import Philosophy from "@/views/Philosophy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Our Philosophy — Transparency & Senior Execution',
  description: 'Zesh Agency believes in direct communication, senior-only execution, revenue alignment, and operational respect. Learn our growth philosophy.',
  alternates: {
    canonical: '/philosophy',
  },
  openGraph: {
    title: 'Our Philosophy — Transparency & Senior Execution',
    description: 'Direct communication, senior-only execution, revenue alignment, and operational respect.',
  },
};

export default function Page() {
    return <Philosophy />;
}
