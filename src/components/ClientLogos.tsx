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
    align: "center"
  }, [Autoplay({
    delay: 3000,
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
  return <section className={`py-16 bg-secondary/30 ${className || ""}`}>
      <div className="container-custom px-0 my-0 py-px">
        <h3 className="text-center font-display mb-12 animate-fade-in text-3xl py-0 my-0">
          Trusted Partners
        </h3>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex items-center">
            {logos.map(logo => <div key={logo.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 flex items-center justify-center px-8">
                <img src={logo.logo_url} alt={logo.company_name} className="h-80 w-auto object-contain" />
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default ClientLogos;