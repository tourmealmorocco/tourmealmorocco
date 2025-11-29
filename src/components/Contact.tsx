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
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Start Your <span className="text-primary">Partnership</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch to discuss how we can support your tour operations in Meknès
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-display font-semibold text-foreground mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Email</p>
                    <a href="mailto:contact@meknesmealpartner.com" className="text-muted-foreground hover:text-primary transition-colors">
                      contact@meknesmealpartner.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Phone</p>
                    <a href="tel:+212535123456" className="text-muted-foreground hover:text-primary transition-colors">
                      +212 535 123 456
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Location</p>
                    <p className="text-muted-foreground">
                      Meknès, Morocco<br />
                      Serving agencies worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Business Hours
              </h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
                <p className="text-primary font-semibold">24/7 Emergency Support for Partners</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-input border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="agencyName" className="block text-sm font-medium text-foreground mb-2">
                    Agency Name
                  </label>
                  <Input
                    id="agencyName"
                    name="agencyName"
                    type="text"
                    value={formData.agencyName}
                    onChange={handleChange}
                    className="bg-input border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary"
                    placeholder="Your Travel Agency"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-input border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary"
                    placeholder="john@agency.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-input border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary"
                    placeholder="+1 234 567 8900"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-foreground mb-2">
                  Country
                </label>
                <Input
                  id="country"
                  name="country"
                  type="text"
                  value={formData.country}
                  onChange={handleChange}
                  className="bg-input border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary"
                  placeholder="United States"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-input border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary resize-none"
                  placeholder="Tell us about your tour operations and how we can help..."
                />
              </div>

              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl h-12 text-base hover:scale-[1.02] transition-transform duration-300"
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
