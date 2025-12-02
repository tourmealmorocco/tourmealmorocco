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
    path: "/contact",
    label: "Contact"
  }];
  return <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container-custom py-0 my-0">
        <div className="flex items-center justify-between py-[33px] my-0 gap-0">
          <button onClick={() => navigate("/")} className="cursor-pointer">
            <img src={logo} alt="Meknès Premium Dining Logo" className="h-60 md:h-60 w-auto object-cover" />
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

        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="md:hidden glass-card p-6 mb-4 animate-fade-in absolute right-4 top-full mt-2 w-64 z-50 my-0 py-[7px] px-[25px]">
            <div className="flex flex-col gap-4">
              {navItems.map(item => <NavLink key={item.path} to={item.path} className="text-foreground hover:text-primary transition-colors font-medium text-lg" activeClassName="text-primary" onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </NavLink>)}
            </div>
          </nav>}
      </div>
    </header>;
};
export default Header;