import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import PanelSolutions from "./components/PanelSolutions";
import Projects from "./components/Projects";
import Clients from "./components/Clients";
import WhyChooseUs from "./components/WhyChooseUs";
import Industries from "./components/Industries";
import Certifications from "./components/Certifications";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <PanelSolutions />
        <Projects />
        <Clients />
        <WhyChooseUs />
        <Industries />
        <Certifications />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
