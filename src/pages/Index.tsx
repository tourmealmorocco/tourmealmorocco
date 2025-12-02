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
      <Hero />
      <Gallery className="py-[42px]" />
      <ClientLogos className="py-0" />
      <Pricing className="py-[2px]" />
      <WhyPartner />
      <Contact />
      <Footer />
    </div>;
};
export default Index;