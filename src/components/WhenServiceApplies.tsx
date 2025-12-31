import { MapPin, Route, Utensils, Briefcase } from "lucide-react";

const useCases = [
  {
    icon: MapPin,
    title: "Direct Meknès Tours",
    description: "Tour groups traveling directly to Meknès"
  },
  {
    icon: Route,
    title: "Multi-City Itineraries",
    description: "Tours including Meknès in the travel circuit"
  },
  {
    icon: Utensils,
    title: "All Meal Types",
    description: "Breakfast, lunch, dinner, or any scheduled meal stop"
  },
  {
    icon: Briefcase,
    title: "B2B Only",
    description: "Exclusively for travel agencies and tour operators"
  }
];

const WhenServiceApplies = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/10">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">When Our Service</span>{" "}
            <span className="text-primary">Applies</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Our service is designed for professional tour operators
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="glass-card p-6 md:p-8 flex items-start gap-4 animate-fade-in hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <useCase.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-2">
                  {useCase.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhenServiceApplies;
