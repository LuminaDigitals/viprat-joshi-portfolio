import type { Metadata } from "next";
import { DM_Serif_Display, Roboto } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  variable: "--font-dm-serif",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vipratjoshi.com'),
  title: "Dr. Viprat Joshi | Premier Dental Surgeon in Greater Vancouver",
  description: "Precision surgery and compassionate care. Specialized in complex restorative procedures, All-on-X, and advanced implantology serving Langley, North Vancouver, and Coquitlam.",
  openGraph: {
    title: "Dr. Viprat Joshi | Surgical Excellence",
    description: "Precision surgery and compassionate care. Specialized in complex restorative procedures serving the Greater Vancouver area.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dr. Viprat Joshi Dental Surgery',
      },
    ],
  },
};

import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import SchemaMarkup from "@/components/SchemaMarkup";
import Script from 'next/script';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${roboto.variable}`}
    >
      {process.env.NEXT_PUBLIC_GTM_ID && <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />}
      <head>
        <SchemaMarkup />
        {/* Google tag (gtag.js) - Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18192904645"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18192904645');
          `}
        </Script>
      </head>
      <body>
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
