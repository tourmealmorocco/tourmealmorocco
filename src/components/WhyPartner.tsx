import { MapPin, Users, Phone, Clock, DollarSign, Globe } from "lucide-react";

const benefits = [
  {
    icon: MapPin,
    title: "Local Expertise in Meknès",
    description: "Deep knowledge of the best dining venues in the region"
  },
  {
    icon: Users,
    title: "Direct Restaurant Relationships",
    description: "Trusted partnerships with quality establishments"
  },
  {
    icon: Phone,
    title: "Single Point of Contact",
    description: "One coordinator for all meal arrangements"
  },
  {
    icon: Clock,
    title: "Time-Saving Solution",
    description: "We handle logistics so you can focus on your tours"
  },
  {
    icon: DollarSign,
    title: "Clear Pricing",
    description: "No hidden fees, transparent cost structure"
  },
  {
    icon: Globe,
    title: "International Operators Welcome",
    description: "Experience serving agencies worldwide"
  }
];

const WhyPartner = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Why Partner With Us
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Streamline your tour operations with our dedicated meal coordination service
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="glass-card p-6 md:p-8 animate-fade-in hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;
