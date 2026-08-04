import type { Metadata } from "next";
import "./globals.css";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "ZESH — Digital Marketing Agency",
  description: "Zesh Agency · Strategic Growth Consultancy",
  icons: {
    icon: '/favicon2.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* When JavaScript is disabled, Framer Motion inline opacity:0 / blur / transform
            styles would leave the page blank. This noscript block overrides them so all
            content is immediately visible without JS. */}
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
