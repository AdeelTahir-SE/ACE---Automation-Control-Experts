import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Services",
  description: "Comprehensive electrical engineering services including consulting, commissioning, custom panel fabrication, and site electrification.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
