import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface ClientLogo {
  id: string;
  logo_url: string;
  company_name: string;
}

const ClientLogos = () => {
  const [logos, setLogos] = useState<ClientLogo[]>([]);

  useEffect(() => {
    const fetchLogos = async () => {
      const { data, error } = await supabase
        .from("client_logos")
        .select("*")
        .eq("is_active", true)
        .order("display_order", { ascending: true });

      if (!error && data) {
        setLogos(data);
      }
    };

    fetchLogos();
  }, []);

  if (logos.length === 0) return null;

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container-custom">
        <h3 className="text-center text-2xl font-display mb-12 animate-fade-in">
          Trusted Partners
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {logos.map((logo, index) => (
            <div
              key={logo.id}
              className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={logo.logo_url}
                alt={logo.company_name}
                className="h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
