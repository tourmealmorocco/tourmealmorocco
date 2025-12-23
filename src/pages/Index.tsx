import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import ClientLogos from "@/components/ClientLogos";
import Pricing from "@/components/Pricing";
import WhyPartner from "@/components/WhyPartner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
const Index = () => {
  return <div className="min-h-screen">
      <Header />
      <Hero className="bg-destructive-foreground text-primary-soft" />
      <Gallery className="py-12 md:py-20" />
      <ClientLogos className="py-2 md:py-4 bg-secondary/20" />
      
      <WhyPartner />
      <Contact />
      <Footer />
    </div>;
};
export default Index;