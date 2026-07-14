import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects",
  description: "Discover our successful industrial electrical projects, SCADA implementations, and power distribution systems across Pakistan.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
