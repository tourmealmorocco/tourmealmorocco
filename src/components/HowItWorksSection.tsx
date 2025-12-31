import { Send, Search, CheckCircle, Settings, PartyPopper } from "lucide-react";

const steps = [
  {
    icon: Send,
    number: 1,
    title: "Share Your Requirements",
    description: "Agency shares tour route, group size, and meal timing"
  },
  {
    icon: Search,
    number: 2,
    title: "Receive Proposals",
    description: "We propose suitable restaurants and menu options"
  },
  {
    icon: CheckCircle,
    number: 3,
    title: "Confirm Details",
    description: "Menus and guest requirements are confirmed"
  },
  {
    icon: Settings,
    number: 4,
    title: "We Manage Everything",
    description: "We handle reservations, pricing, and coordination"
  },
  {
    icon: PartyPopper,
    number: 5,
    title: "Group Arrives Ready",
    description: "Your tour group arrives — everything is prepared"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/10">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">How It</span>{" "}
            <span className="text-primary">Works</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple 5-step process for seamless meal coordination
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 md:space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="glass-card p-5 md:p-6 flex items-center gap-4 md:gap-6 animate-fade-in hover:border-primary/30 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative flex-shrink-0">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <step.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 md:w-7 md:h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs md:text-sm font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
