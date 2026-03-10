import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <footer className="bg-foreground py-6 text-center text-sm text-background/50">
        © {new Date().getFullYear()} Mauricio Somma. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default Index;
