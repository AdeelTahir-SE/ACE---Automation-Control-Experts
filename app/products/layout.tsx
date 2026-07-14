import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products & Solutions",
  description: "Explore our range of industrial electrical products including HT Panels, LT Panels, Switchgear, Distribution Boards, and VFD Panels.",
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
