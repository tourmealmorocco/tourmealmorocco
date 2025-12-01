-- Create hero_images table
CREATE TABLE public.hero_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url TEXT NOT NULL,
  title TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create gallery_images table
CREATE TABLE public.gallery_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url TEXT NOT NULL,
  caption TEXT,
  display_order INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create client_logos table
CREATE TABLE public.client_logos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  logo_url TEXT NOT NULL,
  company_name TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create pricing_plans table
CREATE TABLE public.pricing_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  price TEXT NOT NULL,
  description TEXT,
  features JSONB NOT NULL DEFAULT '[]'::jsonb,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.hero_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.client_logos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pricing_plans ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for public read access (everyone can view)
CREATE POLICY "Anyone can view active hero images"
  ON public.hero_images FOR SELECT
  USING (is_active = true);

CREATE POLICY "Anyone can view active gallery images"
  ON public.gallery_images FOR SELECT
  USING (is_active = true);

CREATE POLICY "Anyone can view active client logos"
  ON public.client_logos FOR SELECT
  USING (is_active = true);

CREATE POLICY "Anyone can view active pricing plans"
  ON public.pricing_plans FOR SELECT
  USING (is_active = true);

-- Insert sample data for hero images
INSERT INTO public.hero_images (image_url, title, display_order) VALUES
  ('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&h=1080&fit=crop', 'Experience Meknes', 1),
  ('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop', 'Discover Morocco', 2),
  ('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&h=1080&fit=crop', 'Journey Together', 3);

-- Insert sample data for gallery images
INSERT INTO public.gallery_images (image_url, caption, display_order) VALUES
  ('https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=800&h=600&fit=crop', 'Happy Group Tour 2023', 1),
  ('https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800&h=600&fit=crop', 'Desert Adventure', 2),
  ('https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&h=600&fit=crop', 'Cultural Experience', 3),
  ('https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=800&h=600&fit=crop', 'Mountain Retreat', 4),
  ('https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?w=800&h=600&fit=crop', 'City Exploration', 5),
  ('https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=800&h=600&fit=crop', 'Beach Paradise', 6);

-- Insert sample data for client logos
INSERT INTO public.client_logos (logo_url, company_name, display_order) VALUES
  ('https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop', 'Travel Agency 1', 1),
  ('https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop', 'Tour Operator 2', 2),
  ('https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop', 'Travel Partner 3', 3),
  ('https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop', 'Agency 4', 4);

-- Insert sample pricing plan
INSERT INTO public.pricing_plans (name, price, description, features) VALUES
  ('Premium Partnership', 'Contact Us', 'Complete travel management solution for your groups', 
   '["Dedicated trip coordinator", "24/7 support throughout journey", "Customized itineraries", "Exclusive local experiences", "Transport & accommodation", "Flexible payment options"]'::jsonb);