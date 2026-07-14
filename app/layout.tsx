import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ace-automation-control-experts.vercel.app/'),
  title: {
    default: "ACE Automation & Control Experts | Smart Electrical Solutions",
    template: "%s | ACE Automation",
  },
  description:
    "ACE Automation & Control Experts provides electrical system design, planning, execution and HT & LT panel manufacturing for industrial projects.",
  keywords: [
    "ACE Automation",
    "control experts",
    "electrical solutions",
    "HT panels",
    "LT panels",
    "electrical system design",
    "industrial electrical",
    "panel manufacturing",
    "SLD design",
    "Pakistan",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ACE Automation & Control Experts | Smart Electrical Solutions",
    description:
      "End-to-end industrial electrical system design, planning, execution and HT & LT panel manufacturing.",
    url: "/",
    siteName: "ACE Automation & Control Experts",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen flex flex-col font-[var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}