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
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);
  useEffect(() => {
    const fetchHeroImages = async () => {
      const {
        data,
        error
      } = await supabase.from("hero_images").select("*").eq("is_active", true).order("display_order", {
        ascending: true
      });
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
  // Get all remaining images for bottom thumbnails (or up to 6)
  const getNextThumbnails = () => {
    const thumbnails = [];
    const maxThumbnails = Math.min(slides.length - 1, 6); // Show all or max 6
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
    return <section className="relative h-screen overflow-hidden flex items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </section>;
  }
  if (slides.length === 0) {
    return null;
  }
  return <section className="relative h-screen overflow-hidden">
      {/* Main Carousel */}
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => <div key={slide.id} className="flex-[0_0_100%] min-w-0 relative">
              <img src={slide.image_url} alt={slide.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>)}
        </div>
      </div>

      {/* Centered Content - No Glass Effect */}
      <div className="relative z-10 h-full my-[54px] gap-0 flex-col flex items-center justify-center px-0 py-0">
        <div className="container-custom w-full text-center px-4">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-2xl">
              Reliable Meal Stops <span className="block mt-2 text-white text-center font-serif"> For Groups </span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed drop-shadow-lg max-w-2xl mx-auto">
              Your partner for group meals in Morocco
            </p>

            <Button size="lg" onClick={scrollToContact} className="bg-primary hover:bg-primary/90 text-primary-foreground text-base md:text-lg px-8 md:px-12 py-5 md:py-6 h-auto font-semibold rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300">
              Partner With Us
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Thumbnails - Horizontal Row */}
      <div className="absolute bottom-16 md:bottom-20 left-0 right-0 z-20 overflow-hidden px-4">
        <div className="flex gap-2 md:gap-4 justify-center">
          {getNextThumbnails().map(thumbnail => <button key={thumbnail.index} onClick={() => scrollTo(thumbnail.index)} className="w-16 h-20 md:w-24 md:h-32 lg:w-28 lg:h-36 flex-shrink-0 rounded-lg overflow-hidden border-2 border-white/30 hover:border-primary transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              <img src={thumbnail.image_url} alt={thumbnail.title} className="w-full h-full object-cover shadow" />
            </button>)}
        </div>
      </div>
    </section>;
};
export default Hero;