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
  description: "Precision Surgery. Compassionate Care. The personal brand and clinical expertise of Dr. Viprat Joshi.",
};

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
      <body>{children}</body>
    </html>
  );
}
