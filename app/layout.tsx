import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ElectroTech Solutions | Smart Electrical Solutions for a Better Tomorrow",
  description:
    "ElectroTech provides end-to-end electrical system design, planning, execution and manufacturing of HT & LT panels for industries of every scale. Trusted by Pepsi, Coca-Cola, WASA and more.",
  keywords: [
    "electrical solutions",
    "HT panels",
    "LT panels",
    "electrical system design",
    "industrial electrical",
    "panel manufacturing",
    "SLD design",
    "electrical engineering",
  ],
  openGraph: {
    title: "ElectroTech Solutions | Smart Electrical Solutions",
    description:
      "End-to-end electrical system design, planning, execution and manufacturing of HT & LT panels for industries.",
    type: "website",
    locale: "en_US",
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
