import { 
  CalendarCheck, 
  Camera, 
  ClipboardList, 
  Salad, 
  HandCoins, 
  CreditCard, 
  UserCheck, 
  Users 
} from "lucide-react";

const services = [
  {
    icon: CalendarCheck,
    title: "Restaurant Selection & Reservation",
    description: "We find and book the ideal venues for your groups"
  },
  {
    icon: Camera,
    title: "Atmosphere Preview",
    description: "Sharing restaurant ambiance and seating areas"
  },
  {
    icon: ClipboardList,
    title: "Menu Coordination",
    description: "Working with agencies to plan perfect menus"
  },
  {
    icon: Salad,
    title: "Dietary Requirements",
    description: "Vegetarian, halal, and special request handling"
  },
  {
    icon: HandCoins,
    title: "Price Negotiation",
    description: "Securing competitive group rates"
  },
  {
    icon: CreditCard,
    title: "Payment Coordination",
    description: "Managing all financial arrangements"
  },
  {
    icon: UserCheck,
    title: "On-Site Coordination",
    description: "Working directly with restaurant teams"
  },
  {
    icon: Users,
    title: "Guide Liaison",
    description: "Coordinating with local or agency-provided guides"
  }
];

const WhatWeHandle = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            What We Handle for Your Tour Groups
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive meal coordination from start to finish
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-5 md:p-6 text-center animate-fade-in hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <h3 className="text-base md:text-lg font-display font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeHandle;
