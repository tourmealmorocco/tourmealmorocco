import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Send, Search, CheckCircle, Settings, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HowItWorks = () => {
  const navigate = useNavigate();

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

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-48 pb-20">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              How It Works
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              A simple 5-step process for seamless meal coordination
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <div className="space-y-4 md:space-y-6">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="glass-card p-5 md:p-6 flex items-center gap-4 md:gap-6 animate-fade-in hover:border-primary/30 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative flex-shrink-0">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                        <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
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
                );
              })}
            </div>
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
