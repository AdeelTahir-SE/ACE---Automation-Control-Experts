import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about ACE Automation & Control Experts. Discover our core values, mission, and the expert engineering team driving our industrial electrical solutions.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
