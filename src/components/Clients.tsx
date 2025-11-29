import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Meknès Meal Partner has transformed how we handle group dining. The restaurants are exceptional and the service is flawless.",
    author: "Sarah Mitchell",
    position: "Tour Director",
    company: "Mediterranean Adventures",
    rating: 5,
  },
  {
    quote: "We've been working with them for 3 years. Our clients always rave about the authentic Moroccan dining experiences.",
    author: "Ahmed Benali",
    position: "Operations Manager",
    company: "Sahara Tours International",
    rating: 5,
  },
  {
    quote: "Reliable, professional, and the quality is always consistent. They've made our operations in Meknès incredibly smooth.",
    author: "Elena Rodriguez",
    position: "Group Travel Coordinator",
    company: "European Explorer Tours",
    rating: 5,
  },
];

const Clients = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-fade-in px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-3 md:mb-4">
            Trusted by Leading <span className="text-primary">Travel Agencies</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Join 50+ agencies who trust us for their group dining needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 px-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-6 md:p-8 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-3 md:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground/90 text-sm md:text-base lg:text-lg mb-4 md:mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="border-t border-white/10 pt-3 md:pt-4">
                <p className="font-semibold text-foreground text-sm md:text-base">{testimonial.author}</p>
                <p className="text-xs md:text-sm text-muted-foreground">{testimonial.position}</p>
                <p className="text-xs md:text-sm text-primary mt-1">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-4">
          {[
            { number: "50+", label: "Partner Agencies" },
            { number: "15+", label: "Premium Restaurants" },
            { number: "10K+", label: "Guests Served" },
            { number: "98%", label: "Satisfaction Rate" },
          ].map((stat, index) => (
            <div
              key={index}
              className="glass-card p-4 md:p-6 text-center"
            >
              <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1 md:mb-2">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
