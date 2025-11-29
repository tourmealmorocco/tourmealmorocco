import { Users, Utensils, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import restaurant1 from "@/assets/restaurant-1.jpg";
import restaurant2 from "@/assets/restaurant-2.jpg";
import restaurant3 from "@/assets/restaurant-3.jpg";

const FeaturedRestaurants = () => {
  const restaurants = [
    {
      name: "Riad Al Bartal",
      image: restaurant1,
      description: "Traditional Moroccan cuisine in an elegant historic setting",
      capacity: "80+ guests",
      cuisine: "Moroccan Traditional"
    },
    {
      name: "Le Ziryab",
      image: restaurant2,
      description: "Upscale dining with stunning architecture and group menus",
      capacity: "100+ guests",
      cuisine: "Contemporary Moroccan"
    },
    {
      name: "Maison Meknès",
      image: restaurant3,
      description: "Modern space with authentic flavors, perfect for large groups",
      capacity: "120+ guests",
      cuisine: "Fusion Moroccan"
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-padding bg-gradient-to-b from-accent/30 to-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
            Our Partner Restaurants
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hand-selected establishments offering exceptional group dining experiences
          </p>
        </div>

        {/* Restaurant Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {restaurants.map((restaurant, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300 border border-border"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={restaurant.image} 
                  alt={restaurant.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-display font-bold text-primary-foreground">
                    {restaurant.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {restaurant.description}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-medium">{restaurant.capacity}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Utensils className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-medium">{restaurant.cuisine}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-medium">Meknès, Morocco</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA for Restaurant Partners */}
        <div className="text-center bg-primary/5 rounded-2xl p-12 border-2 border-primary/20">
          <h3 className="text-3xl font-display font-bold text-foreground mb-4">
            Are You a Restaurant Owner in Meknès?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our network of trusted dining partners and gain access to consistent group bookings 
            from international travel agencies
          </p>
          <Button 
            size="lg"
            variant="default"
            onClick={scrollToContact}
            className="text-base px-10"
          >
            Become a Partner Restaurant
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRestaurants;
