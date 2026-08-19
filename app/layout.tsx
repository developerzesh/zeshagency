import type { Metadata } from "next";
import { Syne, Inter, Lato } from "next/font/google";
import "./globals.css";
import PageLayout from "@/components/PageLayout";
import { getAllCaseStudies } from "@/lib/queries";

export const revalidate = 3600;

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
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const caseStudies = await getAllCaseStudies();

  return (
    <html lang="en" suppressHydrationWarning className={`h-full ${syne.variable} ${inter.variable} ${lato.variable}`}>
      <head>
        <link rel="icon" href="/Group 3.svg" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/Group 2.svg" media="(prefers-color-scheme: dark)" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('zesh-theme');if(t==='dark'||t===null){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){document.documentElement.classList.add('dark');}})();`,
          }}
        />
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
        <PageLayout caseStudies={caseStudies}>
          {children}
        </PageLayout>
      </body>
    </html>
  );
}
