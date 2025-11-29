import { MessageCircle, FileText, Calendar, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: MessageCircle,
      title: "Contact Us",
      description: "Reach out through our partnership form with your agency details and typical group sizes."
    },
    {
      number: "02",
      icon: FileText,
      title: "Receive Menu Options",
      description: "We provide curated menu selections from our partner restaurants with transparent pricing."
    },
    {
      number: "03",
      icon: Calendar,
      title: "Confirm Reservations",
      description: "We handle all restaurant coordination, ensuring guaranteed seating and timing for your groups."
    },
    {
      number: "04",
      icon: CheckCircle,
      title: "Enjoy Peace of Mind",
      description: "Your groups experience quality dining with zero hassle—every reservation guaranteed."
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20 animate-slide-up">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            Simple & Streamlined
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
            How Partnership Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four straightforward steps to provide your tourist groups with exceptional dining experiences
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
              
              <div className="relative bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-border h-full">
                {/* Step Number */}
                <div className="text-6xl font-display font-bold text-primary/10 mb-4">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 shadow-soft">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
