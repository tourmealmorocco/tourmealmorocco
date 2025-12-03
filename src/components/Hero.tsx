import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Loader2 } from "lucide-react";

interface HeroSlide {
  id: string;
  image_url: string;
  title: string;
}

const Hero = () => {
  const [slides, setSlides] = useState<HeroSlide[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    duration: 30
  }, [Autoplay({
    delay: 5000,
    stopOnInteraction: false
  })]);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    const fetchHeroImages = async () => {
      const { data, error } = await supabase
        .from("hero_images")
        .select("*")
        .eq("is_active", true)
        .order("display_order", { ascending: true });
      
      if (!error && data) {
        setSlides(data);
      }
      setLoading(false);
    };
    fetchHeroImages();
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  const getNextThumbnails = () => {
    const thumbnails = [];
    const maxThumbnails = Math.min(slides.length - 1, 5);
    for (let i = 1; i <= maxThumbnails; i++) {
      const nextIndex = (selectedIndex + i) % slides.length;
      thumbnails.push({
        ...slides[nextIndex],
        index: nextIndex
      });
    }
    return thumbnails;
  };

  if (loading) {
    return (
      <section className="relative h-screen overflow-hidden flex items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </section>
    );
  }

  if (slides.length === 0) {
    return null;
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Main Carousel */}
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide) => (
            <div key={slide.id} className="flex-[0_0_100%] min-w-0 relative">
              <img src={slide.image_url} alt={slide.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20" />
            </div>
          ))}
        </div>
      </div>

      {/* Centered Content - Modern Mobile First */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-6">
        <div className="w-full text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4 md:mb-6 leading-[1.1] tracking-tight">
            Reliable Meal Stops
            <span className="block mt-1 md:mt-2 text-primary">For Groups</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 mb-6 md:mb-10 leading-relaxed max-w-xl mx-auto font-light">
            Your trusted partner for seamless group dining experiences in Morocco
          </p>

          <Button 
            size="lg" 
            onClick={scrollToContact} 
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm md:text-base px-6 md:px-10 py-4 md:py-6 h-auto font-semibold rounded-full shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
          >
            Partner With Us
          </Button>
        </div>
      </div>

      {/* Bottom Thumbnails - Aligned to edge */}
      <div className="absolute bottom-6 md:bottom-12 left-0 right-0 z-20 px-2 md:px-4">
        <div className="flex gap-2 md:gap-3 justify-end overflow-hidden">
          {getNextThumbnails().map(thumbnail => (
            <button 
              key={thumbnail.index} 
              onClick={() => scrollTo(thumbnail.index)} 
              className="w-14 h-16 sm:w-16 sm:h-20 md:w-20 md:h-24 lg:w-24 lg:h-28 flex-shrink-0 rounded-lg md:rounded-xl overflow-hidden border border-white/20 hover:border-primary/60 transition-all duration-300 hover:scale-105 group"
            >
              <img 
                src={thumbnail.image_url} 
                alt={thumbnail.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
