import { Shield, Clock, Users, Award, MapPin, Utensils } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const benefits = [{
  icon: Shield,
  title: "Guaranteed Quality",
  description: "Vetted restaurants with consistent high standards and certified hygiene practices."
}, {
  icon: Clock,
  title: "Reliable Timing",
  description: "Pre-scheduled reservations ensure your groups are never waiting or delayed."
}, {
  icon: Users,
  title: "Group Specialists",
  description: "Restaurants experienced in handling large tour groups with efficiency and care."
}, {
  icon: Award,
  title: "Curated Menus",
  description: "Specially designed group menus featuring authentic Moroccan and international cuisine."
}, {
  icon: MapPin,
  title: "Strategic Locations",
  description: "Perfectly positioned restaurants along major tour routes through Meknès."
}, {
  icon: Utensils,
  title: "Flexible Options",
  description: "Breakfast, lunch, and dinner packages with customizable dietary accommodations."
}];
const WhyPartner = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  );

  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-8 md:mb-12 animate-fade-in px-4">
          <span className="text-primary text-xs md:text-sm font-medium tracking-wider uppercase mb-2 block">
            Why Choose Us
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Why Partner <span className="text-primary">With Us?</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index} 
                  className="flex-[0_0_85%] sm:flex-[0_0_70%] md:flex-[0_0_45%] lg:flex-[0_0_32%] min-w-0 px-2 md:px-3"
                >
                  <div className="glass-card p-5 md:p-6 h-full group">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    
                    <h3 className="text-base md:text-lg font-display font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Value Proposition - Compact for mobile */}
        <div className="mt-8 md:mt-12 glass rounded-xl md:rounded-2xl p-5 md:p-8 text-center mx-2 md:mx-4">
          <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-foreground mb-2 md:mb-3">
            Local Expertise, <span className="text-primary">International Standards</span>
          </h3>
          <p className="text-xs md:text-sm text-muted-foreground max-w-2xl mx-auto mb-4 md:mb-6">
            Our deep relationships with Meknès' best restaurants ensure seamless dining experiences for your groups.
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-5 text-xs">
            {["No Hidden Fees", "Flexible Booking", "24/7 Support", "Multi-Language"].map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyPartner;