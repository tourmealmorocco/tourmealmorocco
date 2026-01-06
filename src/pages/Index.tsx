import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import ClientLogos from "@/components/ClientLogos";
import WhyPartner from "@/components/WhyPartner";
import WhenServiceApplies from "@/components/WhenServiceApplies";
import WhatWeHandle from "@/components/WhatWeHandle";
import HowItWorksSection from "@/components/HowItWorksSection";
import ServicePricing from "@/components/ServicePricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Gallery className="py-12 md:py-20" />
      <ClientLogos className="py-2 md:py-4 bg-secondary/20" />
      <WhyPartner />
      <WhenServiceApplies />
      <WhatWeHandle />
      <HowItWorksSection />
      <ServicePricing id="service-pricing" />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
