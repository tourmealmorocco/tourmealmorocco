import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-meknes.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-primary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-6 py-20 animate-fade-in">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary-foreground mb-6 leading-tight">
          Reliable Meal Stops for Your<br />
          <span className="text-primary-soft">Tourist Groups in Meknès</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-soft/90 mb-12 max-w-3xl mx-auto font-light">
          Partner with top-rated restaurants offering curated menus<br />
          specially designed for travel agencies and tour operators
        </p>

        <Button 
          size="lg"
          variant="hero"
          onClick={scrollToContact}
          className="text-lg px-12 py-7 h-auto font-semibold"
        >
          Partner With Us
        </Button>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-primary-soft/80">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-trust-green rounded-full" />
            <span className="text-sm font-medium">Trusted by 50+ Agencies</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-trust-green rounded-full" />
            <span className="text-sm font-medium">15+ Partner Restaurants</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-trust-green rounded-full" />
            <span className="text-sm font-medium">5-Star Group Dining</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
