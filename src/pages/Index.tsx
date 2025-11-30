import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import WhyPartner from "@/components/WhyPartner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Clients />
      <WhyPartner />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
