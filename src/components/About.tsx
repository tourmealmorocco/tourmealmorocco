import { Coffee, Sun, Moon } from "lucide-react";

const About = () => {
  const mealTypes = [
    {
      icon: Coffee,
      title: "Breakfast",
      description: "Traditional Moroccan breakfast options with continental choices"
    },
    {
      icon: Sun,
      title: "Lunch",
      description: "Authentic local cuisine perfect for midday group stops"
    },
    {
      icon: Moon,
      title: "Dinner",
      description: "Premium dining experiences with curated group menus"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background to-accent/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
            The Perfect Solution for<br />
            <span className="text-primary">Tourist Groups Passing Through Meknès</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full" />
        </div>

        {/* Problem & Solution */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div className="bg-card rounded-2xl p-10 shadow-medium border border-border">
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              The Challenge
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Many tourists pass through Meknès on their way to other destinations without overnight stays. 
              Finding reliable, quality restaurants that can accommodate large groups with guaranteed 
              timing and fair pricing is a constant challenge for tour operators.
            </p>
          </div>

          <div className="bg-primary/5 rounded-2xl p-10 shadow-medium border-2 border-primary/20">
            <h3 className="text-2xl font-display font-bold text-primary mb-4">
              Our Solution
            </h3>
            <p className="text-lg text-foreground leading-relaxed">
              We've partnered with Meknès's finest restaurants to offer pre-negotiated group menus, 
              guaranteed seating, and reliable timing. Your groups get authentic Moroccan dining 
              experiences without the uncertainty—every single time.
            </p>
          </div>
        </div>

        {/* Meal Options */}
        <div className="grid md:grid-cols-3 gap-8">
          {mealTypes.map((meal, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 text-center shadow-soft hover:shadow-medium transition-all duration-300 border border-border hover:border-primary/30"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <meal.icon className="w-10 h-10 text-primary" />
              </div>
              <h4 className="text-2xl font-display font-bold text-foreground mb-3">
                {meal.title}
              </h4>
              <p className="text-muted-foreground">
                {meal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
