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

const slides = [
  { image: image1, title: "Elegant Dining Experiences" },
  { image: image2, title: "Modern Group Settings" },
  { image: image3, title: "Authentic Moroccan Ambiance" },
  { image: image4, title: "Exquisite Cuisine" },
  { image: image5, title: "Spacious Interiors" },
  { image: image6, title: "Spectacular Views" },
];

const Hero = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 30 },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

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
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Main Carousel */}
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-background/20" />
            </div>
          ))}
        </div>
      </div>

      {/* Glass Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom">
          <div className="max-w-2xl">
            <div className="glass rounded-3xl p-12 animate-slide-up">
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-foreground mb-6 leading-tight">
                Premium Dining for
                <span className="block text-primary">Your Tour Groups</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Partner with Meknès' finest restaurants. Curated menus, guaranteed quality, and seamless group dining experiences.
              </p>

              <Button 
                size="lg"
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-6 h-auto font-semibold rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300"
              >
                Partner With Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-3">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
              index === selectedIndex
                ? "border-primary scale-110 shadow-xl shadow-primary/50"
                : "border-white/20 opacity-60 hover:opacity-100 hover:scale-105"
            }`}
          >
            <img
              src={slide.image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 glass w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-foreground group-hover:scale-110 transition-transform" />
      </button>
      
      <button
        onClick={scrollNext}
        className="absolute right-32 lg:right-36 top-1/2 -translate-y-1/2 z-20 glass w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-foreground group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "w-12 bg-primary"
                : "w-8 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
