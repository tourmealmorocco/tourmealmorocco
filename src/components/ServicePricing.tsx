import { Users, UserPlus, Info } from "lucide-react";

const ServicePricing = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Service Pricing
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing for our coordination services
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
          {/* Small Groups */}
          <div className="glass-card p-6 md:p-8 text-center animate-fade-in hover:border-primary/30 transition-all duration-300">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
              <Users className="w-7 h-7 md:w-8 md:h-8 text-primary" />
            </div>
            <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-2">
              Groups Under 15
            </h3>
            <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
              €4.50
            </div>
            <p className="text-muted-foreground text-sm md:text-base">
              per guest
            </p>
          </div>

          {/* Large Groups */}
          <div className="glass-card p-6 md:p-8 text-center animate-fade-in hover:border-primary/30 transition-all duration-300 relative" style={{ animationDelay: "0.1s" }}>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                Best Value
              </span>
            </div>
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
              <UserPlus className="w-7 h-7 md:w-8 md:h-8 text-primary" />
            </div>
            <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-2">
              Groups of 15+
            </h3>
            <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
              €4.00
            </div>
            <p className="text-muted-foreground text-sm md:text-base">
              per guest
            </p>
          </div>
        </div>

        {/* Note */}
        <div className="max-w-2xl mx-auto mt-8 md:mt-10">
          <div className="glass-card p-4 md:p-6 flex items-start gap-3 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-sm md:text-base text-muted-foreground">
              <span className="font-semibold text-foreground">Note:</span> Meal costs are separate and agreed in advance with your agency before each tour.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePricing;
