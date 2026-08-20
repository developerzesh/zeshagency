import PrivacyPolicy from "@/views/PrivacyPolicy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Privacy Policy — Zesh Agency',
  description: 'Privacy policy for Zesh Agency. Learn how we collect, use, and protect your information when you visit zeshagency.com.',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy — Zesh Agency',
    description: 'Privacy policy for Zesh Agency. How we collect, use, and protect your information.',
  },
};

export default function Page() {
  return <PrivacyPolicy />;
}
