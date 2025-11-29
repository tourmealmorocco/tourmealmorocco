import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    agencyName: "",
    country: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      agencyName: "",
      country: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-fade-in px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-3 md:mb-4">
            Start Your <span className="text-primary">Partnership</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch to discuss how we can support your tour operations in Meknès
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 md:space-y-8 animate-slide-up">
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-4 md:mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground mb-1 text-sm md:text-base">Email</p>
                    <a href="mailto:contact@meknesmealpartner.com" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors break-all">
                      contact@meknesmealpartner.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1 text-sm md:text-base">Phone</p>
                    <a href="tel:+212535123456" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">
                      +212 535 123 456
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1 text-sm md:text-base">Location</p>
                    <p className="text-sm md:text-base text-muted-foreground">
                      Meknès, Morocco<br />
                      Serving agencies worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 md:p-8">
              <h4 className="text-base md:text-lg font-semibold text-foreground mb-3 md:mb-4">
                Business Hours
              </h4>
              <div className="space-y-2 text-sm md:text-base text-muted-foreground">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
                <p className="text-primary font-semibold">24/7 Emergency Support for Partners</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-6 md:p-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs md:text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-input border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary text-sm md:text-base h-10 md:h-11"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="agencyName" className="block text-xs md:text-sm font-medium text-foreground mb-2">
                    Agency Name
                  </label>
                  <Input
                    id="agencyName"
                    name="agencyName"
                    type="text"
                    value={formData.agencyName}
                    onChange={handleChange}
                    className="bg-input border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary text-sm md:text-base h-10 md:h-11"
                    placeholder="Your Travel Agency"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-xs md:text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-input border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary text-sm md:text-base h-10 md:h-11"
                    placeholder="john@agency.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs md:text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-input border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary text-sm md:text-base h-10 md:h-11"
                    placeholder="+1 234 567 8900"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="country" className="block text-xs md:text-sm font-medium text-foreground mb-2">
                  Country
                </label>
                <Input
                  id="country"
                  name="country"
                  type="text"
                  value={formData.country}
                  onChange={handleChange}
                  className="bg-input border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary text-sm md:text-base h-10 md:h-11"
                  placeholder="United States"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs md:text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="bg-input border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary resize-none text-sm md:text-base"
                  placeholder="Tell us about your tour operations and how we can help..."
                />
              </div>

              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl h-11 md:h-12 text-sm md:text-base hover:scale-[1.02] transition-transform duration-300"
              >
                Send Partnership Inquiry
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to be contacted regarding partnership opportunities.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
