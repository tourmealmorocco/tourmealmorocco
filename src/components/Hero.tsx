import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "@/assets/restaurant-interior-1.jpg";
import image2 from "@/assets/restaurant-interior-2.jpg";
import image3 from "@/assets/restaurant-interior-3.jpg";
import image4 from "@/assets/restaurant-interior-4.jpg";
import image5 from "@/assets/restaurant-interior-5.jpg";
import image6 from "@/assets/restaurant-interior-6.jpg";
const slides = [{
  image: image1,
  title: "Elegant Dining Experiences"
}, {
  image: image2,
  title: "Modern Group Settings"
}, {
  image: image3,
  title: "Authentic Moroccan Ambiance"
}, {
  image: image4,
  title: "Exquisite Cuisine"
}, {
  image: image5,
  title: "Spacious Interiors"
}, {
  image: image6,
  title: "Spectacular Views"
}];
const Hero = () => {
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
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  // Get next 3 images for bottom thumbnails
  const getNextThumbnails = () => {
    const thumbnails = [];
    for (let i = 1; i <= 3; i++) {
      const nextIndex = (selectedIndex + i) % slides.length;
      thumbnails.push({
        ...slides[nextIndex],
        index: nextIndex
      });
    }
    return thumbnails;
  };
  return <section className="relative h-screen overflow-hidden">
      {/* Main Carousel */}
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => <div key={index} className="flex-[0_0_100%] min-w-0 relative">
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>)}
        </div>
      </div>

      {/* Centered Content - No Glass Effect */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container-custom w-full text-center px-4">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-2xl">
              Premium Dining for
              <span className="block text-primary mt-2">Your Tour Groups</span>
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed drop-shadow-lg max-w-2xl mx-auto">Votre partenaire repas officiel pour les groupes touristiques</p>

            <Button size="lg" onClick={scrollToContact} className="bg-primary hover:bg-primary/90 text-primary-foreground text-base md:text-lg px-8 md:px-12 py-5 md:py-6 h-auto font-semibold rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300">
              Partner With Us
            </Button>
          </div>
        </div>
      </div>


      {/* Bottom Thumbnails - Next 3 Images */}
      <div className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-3 md:gap-6">
        {getNextThumbnails().map(thumbnail => <button key={thumbnail.index} onClick={() => scrollTo(thumbnail.index)} className="w-24 h-32 md:w-32 md:h-40 lg:w-40 lg:h-48 rounded-lg overflow-hidden border-2 border-white/30 hover:border-primary transition-all duration-300 hover:scale-105 backdrop-blur-sm">
            <img src={thumbnail.image} alt={thumbnail.title} className="w-full h-full object-cover" />
          </button>)}
      </div>
    </section>;
};
export default Hero;