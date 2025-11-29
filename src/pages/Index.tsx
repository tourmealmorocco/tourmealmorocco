import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import FeaturedRestaurants from "@/components/FeaturedRestaurants";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <HowItWorks />
      <FeaturedRestaurants />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
