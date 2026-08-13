import type { Metadata } from "next";
import { Syne, Inter, Lato } from "next/font/google";
import "./globals.css";
import PageLayout from "@/components/PageLayout";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZESHAGENCY — Digital Marketing Agency",
  description: "Zesh Agency · Strategic Growth Consultancy",
  icons: {
    icon: '/Group 3.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${syne.variable} ${inter.variable} ${lato.variable}`}>
      <head>
        <noscript>
          <style>{`
            * {
              opacity: 1 !important;
              filter: none !important;
              transform: none !important;
              animation: none !important;
              transition: none !important;
            }
          `}</style>
        </noscript>
      </head>
      <body className="min-h-full">
        <PageLayout>
          {children}
        </PageLayout>
      </body>
    </html>
  );
}
