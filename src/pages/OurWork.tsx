import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Loader2 } from "lucide-react";
interface GalleryImage {
  id: string;
  image_url: string;
  caption: string | null;
}
const OurWork = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  useEffect(() => {
    const fetchImages = async () => {
      const {
        data,
        error
      } = await supabase.from("gallery_images").select("*").eq("is_active", true).order("display_order", {
        ascending: true
      });
      if (!error && data) {
        setImages(data);
      }
      setLoading(false);
    };
    fetchImages();
  }, []);
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>;
  }
  return <div className="min-h-screen">
      <Header />
      <main className="pt-48 pb-20">
        <div className="container-custom my-[100px]">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-display mb-6">Our Happy Clients</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Memories we've created with groups from around the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => <div key={image.id} className="group relative overflow-hidden rounded-lg cursor-pointer animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }} onClick={() => setSelectedImage(image)}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={image.image_url} alt={image.caption || "Gallery image"} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium">{image.caption}</p>
                </div>
              </div>)}
          </div>
        </div>
      </main>

      {selectedImage && <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="max-w-5xl w-full">
            <img src={selectedImage.image_url} alt={selectedImage.caption || "Gallery image"} className="w-full h-auto rounded-lg" />
            {selectedImage.caption && <p className="text-white text-center mt-4 text-lg">
                {selectedImage.caption}
              </p>}
          </div>
        </div>}

      <Footer />
    </div>;
};
export default OurWork;