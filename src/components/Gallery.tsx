import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
interface GalleryImage {
  id: string;
  image_url: string;
  caption: string | null;
}
interface GalleryProps {
  className?: string;
}
const Gallery = ({
  className
}: GalleryProps) => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchImages = async () => {
      const {
        data,
        error
      } = await supabase.from("gallery_images").select("*").eq("is_active", true).order("display_order", {
        ascending: true
      }).limit(6);
      if (!error && data) {
        setImages(data);
      }
      setLoading(false);
    };
    fetchImages();
  }, []);
  if (loading) {
    return <section className={`py-20 bg-gradient-to-b from-background to-secondary/20 ${className || ""}`}>
        <div className="container-custom flex justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </section>;
  }
  return <section className={`py-20 bg-gradient-to-b from-background to-secondary/20 ${className || ""}`}>
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="md:text-5xl font-display mb-4 text-center text-3xl">Our Happy Clients</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See the memorable experiences we've created for groups from around the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {images.map((image, index) => <div key={image.id} className="group relative overflow-hidden rounded-lg animate-fade-in" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={image.image_url} alt={image.caption || "Gallery image"} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium">{image.caption}</p>
              </div>
            </div>)}
        </div>

        <div className="text-center animate-fade-in">
          <Button onClick={() => navigate("/our-work")} size="lg" variant="outline">
            View All Gallery
          </Button>
        </div>
      </div>
    </section>;
};
export default Gallery;