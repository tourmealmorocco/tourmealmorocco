import { Award, Clock, Shield, DollarSign, Star, Globe } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Globe,
      title: "Local Expertise",
      description: "Deep knowledge of Meknès's culinary scene and trusted restaurant relationships"
    },
    {
      icon: Clock,
      title: "Reliable Timing",
      description: "Guaranteed seating and punctual service for your scheduled itineraries"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Only vetted restaurants meeting international hygiene and service standards"
    },
    {
      icon: DollarSign,
      title: "Negotiated Pricing",
      description: "Pre-arranged group rates providing excellent value for your clients"
    },
    {
      icon: Star,
      title: "Trusted by Agencies",
      description: "Proven track record with tour operators from Marrakech, Fès, Rabat, and beyond"
    },
    {
      icon: Award,
      title: "Seamless Experience",
      description: "We handle all coordination so you can focus on your guests' experience"
    }
  ];

  return (
    <section className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Why Partner With Us
          </h2>
          <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto">
            We make group dining in Meknès effortless, reliable, and exceptional
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-secondary-foreground/5 backdrop-blur-sm rounded-xl p-8 border border-secondary-foreground/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 shadow-soft">
                <benefit.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-2xl font-display font-bold mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-secondary-foreground/70 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-5xl font-display font-bold text-primary mb-2">50+</div>
            <div className="text-secondary-foreground/70">Partner Agencies</div>
          </div>
          <div>
            <div className="text-5xl font-display font-bold text-primary mb-2">15+</div>
            <div className="text-secondary-foreground/70">Restaurants</div>
          </div>
          <div>
            <div className="text-5xl font-display font-bold text-primary mb-2">10K+</div>
            <div className="text-secondary-foreground/70">Satisfied Tourists</div>
          </div>
          <div>
            <div className="text-5xl font-display font-bold text-primary mb-2">100%</div>
            <div className="text-secondary-foreground/70">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
