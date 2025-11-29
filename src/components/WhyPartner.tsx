import { Shield, Clock, Users, Award, MapPin, Utensils } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Guaranteed Quality",
    description: "Vetted restaurants with consistent high standards and certified hygiene practices.",
  },
  {
    icon: Clock,
    title: "Reliable Timing",
    description: "Pre-scheduled reservations ensure your groups are never waiting or delayed.",
  },
  {
    icon: Users,
    title: "Group Specialists",
    description: "Restaurants experienced in handling large tour groups with efficiency and care.",
  },
  {
    icon: Award,
    title: "Curated Menus",
    description: "Specially designed group menus featuring authentic Moroccan and international cuisine.",
  },
  {
    icon: MapPin,
    title: "Strategic Locations",
    description: "Perfectly positioned restaurants along major tour routes through Meknès.",
  },
  {
    icon: Utensils,
    title: "Flexible Options",
    description: "Breakfast, lunch, and dinner packages with customizable dietary accommodations.",
  },
];

const WhyPartner = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Why Partner <span className="text-primary">With Us?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We handle all the details so you can focus on delivering exceptional tour experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-display font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Value Proposition */}
        <div className="mt-16 glass rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-display font-bold text-foreground mb-4">
            Local Expertise, <span className="text-primary">International Standards</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Our deep relationships with Meknès' best restaurants combined with our understanding 
            of international tour operations ensure seamless dining experiences for your groups.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-muted-foreground">No Hidden Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-muted-foreground">Flexible Booking</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-muted-foreground">24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-muted-foreground">Multi-Language Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;
