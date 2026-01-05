import { useState, useEffect } from "react";
import profileImage from "@/assets/profile-whatsapp.png";

const FloatingWhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Once visible, disconnect observer - button stays visible
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px",
      }
    );

    const pricingSection = document.getElementById("service-pricing");
    if (pricingSection) {
      observer.observe(pricingSection);
    }

    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    window.open("https://wa.me/212777427476", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-6 right-6 z-50 w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shadow-elegant transition-all duration-500 ease-out hover:scale-110 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
        isVisible
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-0 translate-y-10 pointer-events-none"
      }`}
      aria-label="Contact us on WhatsApp"
    >
      <img
        src={profileImage}
        alt="Contact via WhatsApp"
        className="w-full h-full object-cover"
      />
    </button>
  );
};

export default FloatingWhatsAppButton;
