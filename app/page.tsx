import Header from "./components/Header";
import Hero from "./components/Hero";
import PanelSolutions from "./components/PanelSolutions";
import Clients from "./components/Clients";
import WhyChooseUs from "./components/WhyChooseUs";
import CoreValues from "./components/CoreValues";
import ProjectManagement from "./components/ProjectManagement";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[#f5f7fb]">
        <Hero />
        <PanelSolutions />
        <Clients />
        <WhyChooseUs />
        <CoreValues />
        <ProjectManagement />
        <Services />
        <Projects />
        <Certifications />
      </main>
      <Footer />
    </>
  );
}