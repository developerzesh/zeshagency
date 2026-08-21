import PrivacyPolicy from "@/views/PrivacyPolicy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Privacy Policy | Zesh Agency Data & Security Terms',
  description: 'Read how Zesh Agency collects, uses, and protects your information and data when you visit zeshagency.com and use our growth services.',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | Zesh Agency Data & Security Terms',
    description: 'Read how Zesh Agency collects, uses, and protects your information and data when you visit zeshagency.com and use our growth services.',
  },
};

export default function Page() {
  return <PrivacyPolicy />;
}
