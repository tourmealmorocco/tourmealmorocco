import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const navItems = [{
    path: "/",
    label: "Home"
  }, {
    path: "/our-work",
    label: "Our Work"
  }, {
    path: "/how-it-works",
    label: "How It Works"
  }, {
    path: "/who-i-am",
    label: "Who I Am"
  }, {
    path: "/contact",
    label: "Contact"
  }];
  return <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container-custom py-0 my-0">
        <div className="flex items-center justify-between gap-0 my-0 py-[11px]">
          <button onClick={() => navigate("/")} className="cursor-pointer">
            <img src={logo} alt="Meknès Premium Dining Logo" className="h-40 md:h-60 w-auto object-cover" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => <NavLink key={item.path} to={item.path} className="text-foreground hover:text-primary transition-colors font-medium" activeClassName="text-primary">
                {item.label}
              </NavLink>)}
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="py-0 my-[2px] h-[45px] w-[45px]" /> : <Menu className="h-8 w-8" />}
          </Button>
        </div>

      </div>

      {/* Full-screen Mobile Navigation */}
      {isMenuOpen && <nav className="md:hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-xl animate-fade-in flex flex-col items-center justify-center">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-6 p-2">
            <X className="h-10 w-10 text-white" />
          </button>
          <div className="flex flex-col items-center gap-8">
            {navItems.map(item => <NavLink key={item.path} to={item.path} className="text-white hover:text-primary transition-colors font-display font-semibold text-3xl" activeClassName="text-primary" onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </NavLink>)}
          </div>
        </nav>}
    </header>;
};
export default Header;