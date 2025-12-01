import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 md:py-12 border-t border-white/10">
      <div className="absolute inset-0 bg-secondary/30" />
      
      <div className="container-custom relative z-10 px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-6 md:mb-8">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-3 md:mb-4">
              Meknès Meal <span className="text-primary">Partner</span>
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Premium dining solutions for tour operators and travel agencies in Meknès, Morocco.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg font-semibold text-foreground mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/our-work" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">
                  Our Work
                </a>
              </li>
              <li>
                <a href="/how-it-works" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base md:text-lg font-semibold text-foreground mb-3 md:mb-4">Contact</h4>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:contact@meknesmealpartner.com" className="text-sm md:text-base hover:text-primary transition-colors break-all">
                  contact@meknesmealpartner.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+212535123456" className="text-sm md:text-base hover:text-primary transition-colors">
                  +212 535 123 456
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm md:text-base">Meknès, Morocco</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-xs md:text-sm text-muted-foreground">
          <p>© {currentYear} Meknès Meal Partner. All rights reserved.</p>
          <div className="flex gap-4 md:gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
