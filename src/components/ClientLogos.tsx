import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
interface ClientLogo {
  id: string;
  logo_url: string;
  company_name: string;
}
interface ClientLogosProps {
  className?: string;
}
const ClientLogos = ({
  className
}: ClientLogosProps) => {
  const [logos, setLogos] = useState<ClientLogo[]>([]);
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "start"
  }, [Autoplay({
    delay: 2500,
    stopOnInteraction: false
  })]);

  useEffect(() => {
    const fetchLogos = async () => {
      const {
        data,
        error
      } = await supabase.from("client_logos").select("*").eq("is_active", true).order("display_order", {
        ascending: true
      });
      if (!error && data) {
        setLogos(data);
      }
    };
    fetchLogos();
  }, []);

  if (logos.length === 0) return null;

  return (
    <section className={`py-4 md:py-6 ${className || ""}`}>
      <div className="container-custom">
        <h3 className="text-center font-display text-lg md:text-xl text-muted-foreground mb-4 animate-fade-in">
          Trusted by Leading Agencies
        </h3>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex items-center">
            {logos.map(logo => (
              <div 
                key={logo.id} 
                className="flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%] min-w-0 flex items-center justify-center px-4 md:px-6"
              >
                <img 
                  src={logo.logo_url} 
                  alt={logo.company_name} 
                  className="h-16 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ClientLogos;