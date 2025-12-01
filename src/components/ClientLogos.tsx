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
  return <section className="py-16 bg-secondary/30">
      
    </section>;
};
export default ClientLogos;