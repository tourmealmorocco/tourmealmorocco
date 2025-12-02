import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string | null;
  features: string[];
}
interface PricingProps {
  className?: string;
}
const Pricing = ({
  className
}: PricingProps) => {
  const [plan, setPlan] = useState<PricingPlan | null>(null);
  useEffect(() => {
    const fetchPlan = async () => {
      const {
        data,
        error
      } = await supabase.from("pricing_plans").select("*").eq("is_active", true).maybeSingle();
      if (!error && data) {
        setPlan(data as PricingPlan);
      }
    };
    fetchPlan();
  }, []);
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  if (!plan) return null;
  return <section className={`py-20 bg-gradient-to-b from-secondary/20 to-background ${className || ""}`}>
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display mb-4">Our Partnership</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for an exceptional group travel experience
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="glass-card p-10 text-center animate-fade-in py-[29px] my-0 mx-0 px-[5px]">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-primary font-semibold text-sm">{plan.name}</span>
            </div>
            <div className="mb-8">
              <div className="text-5xl font-display mb-2">{plan.price}</div>
              {plan.description && <p className="text-muted-foreground">{plan.description}</p>}
            </div>
            <ul className="space-y-4 mb-8 text-left">
              {plan.features.map((feature, index) => <li key={index} className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="flex-1">{feature}</span>
                </li>)}
            </ul>
            <Button onClick={scrollToContact} size="lg" className="w-full">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Pricing;