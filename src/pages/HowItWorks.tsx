import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Users, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HowItWorks = () => {
  const navigate = useNavigate();

  const steps = [
    {
      icon: Calendar,
      title: "1. Share Your Vision",
      description: "Tell us about your group, dates, and dream experiences in Meknes and Morocco.",
    },
    {
      icon: MapPin,
      title: "2. Custom Itinerary",
      description: "We design a personalized journey showcasing the best of Moroccan culture and hospitality.",
    },
    {
      icon: Users,
      title: "3. Seamless Coordination",
      description: "Our team handles all logistics - transport, accommodation, dining, and activities.",
    },
    {
      icon: Star,
      title: "4. Unforgettable Experience",
      description: "Enjoy a worry-free journey with 24/7 support and authentic local experiences.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-48 pb-20">
        <div className="container-custom">
          <div className="text-center mb-20 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-display mb-6">How It Works</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Four simple steps to an extraordinary group travel experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-8 animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="glass-card p-12 text-center animate-fade-in">
            <h2 className="text-3xl font-display mb-6">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="font-semibold mb-2">Local Expertise</h4>
                <p className="text-muted-foreground">Deep knowledge of Meknes and Morocco</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Trusted by Agencies</h4>
                <p className="text-muted-foreground">Proven track record with travel partners</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Full Support</h4>
                <p className="text-muted-foreground">24/7 assistance throughout your journey</p>
              </div>
            </div>
            <Button onClick={() => navigate("/contact")} size="lg" className="mt-4">
              Start Planning Your Journey
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
