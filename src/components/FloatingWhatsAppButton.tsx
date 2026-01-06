import { useState, useEffect, useRef } from "react";
import profileImage from "@/assets/profile-whatsapp.png";

const FloatingWhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showLabel, setShowLabel] = useState(true);
  const hasPlayedSound = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !isVisible) {
        setIsVisible(true);
        
        // Play notification sound only once
        if (!hasPlayedSound.current) {
          hasPlayedSound.current = true;
          playNotificationSound();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Check initial scroll position
    if (window.scrollY > 100) {
      setIsVisible(true);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  // Hide label after 5 seconds
  useEffect(() => {
    if (isVisible && showLabel) {
      const timer = setTimeout(() => {
        setShowLabel(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, showLabel]);

  const playNotificationSound = () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // Create a pleasant notification sound
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator.frequency.setValueAtTime(1000, audioContext.currentTime + 0.1);
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime + 0.2);
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.3);
    } catch (error) {
      // Audio not supported or blocked
      console.log("Audio playback not available");
    }
  };

  const handleClick = () => {
    window.open("https://wa.me/212777427476", "_blank");
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 transition-all duration-500 ease-out ${
        isVisible
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-0 translate-y-10 pointer-events-none"
      }`}
    >
      {/* Contact Ayoub Label */}
      <div
        className={`bg-background/95 backdrop-blur-sm text-foreground px-4 py-2 rounded-full shadow-lg border border-border/50 text-sm font-medium transition-all duration-300 ${
          showLabel && isVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-4 pointer-events-none"
        }`}
      >
        Contact Ayoub 👋
      </div>

      {/* WhatsApp Button */}
      <button
        onClick={handleClick}
        className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shadow-elegant transition-all duration-300 hover:scale-110 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label="Contact Ayoub on WhatsApp"
      >
        <img
          src={profileImage}
          alt="Contact Ayoub via WhatsApp"
          className="w-full h-full object-cover"
        />
        
        {/* Green Online Indicator */}
        <span className="absolute top-0 right-0 w-4 h-4 md:w-5 md:h-5 bg-green-500 rounded-full border-2 border-background animate-pulse" />
      </button>
    </div>
  );
};

export default FloatingWhatsAppButton;
