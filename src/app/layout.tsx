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
  title: "Dr. Viprat Joshi | Premier Dental Surgeon in Greater Vancouver",
  description: "Precision surgery and compassionate care. Specialized in complex restorative procedures, All-on-X, and advanced implantology serving Langley, North Vancouver, and Coquitlam.",
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
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
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
