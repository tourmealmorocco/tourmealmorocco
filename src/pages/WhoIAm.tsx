import Header from "@/components/Header";
import Footer from "@/components/Footer";
import profileImage from "@/assets/profile-whatsapp.png";
import { MapPin, Phone, Clock, Users } from "lucide-react";

const WhoIAm = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 md:pt-52 pb-16 md:pb-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Profile Card */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Profile Image */}
              <div className="relative">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary shadow-2xl shadow-primary/20">
                  <img
                    src={profileImage}
                    alt="Ayoub - Owner of Tour Meal Morocco"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Online Indicator */}
                <span className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 rounded-full border-4 border-background animate-pulse" />
              </div>

              {/* Info */}
              <div className="text-center md:text-left flex-1">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
                  Ayoub
                </h1>
                <p className="text-xl text-primary font-semibold mb-4">
                  Owner & Founder
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Your trusted partner for seamless group dining experiences across Morocco.
                </p>
              </div>
            </div>

            {/* About Section */}
            <div className="mt-16 space-y-8">
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                  About <span className="text-primary">Tour Meal Morocco</span>
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Tour Meal Morocco is your dedicated partner for hassle-free group dining solutions. 
                    We specialize in providing reliable meal stops for tour operators, travel agencies, 
                    and group organizers traveling through Morocco.
                  </p>
                  <p>
                    With years of experience in the hospitality industry, we understand the unique 
                    challenges of coordinating meals for large groups. Our network of carefully 
                    selected restaurants ensures quality food, timely service, and authentic 
                    Moroccan culinary experiences for your clients.
                  </p>
                  <p>
                    From traditional tagines to modern Moroccan cuisine, we handle all the 
                    logistics so you can focus on delivering exceptional tours.
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Based in Meknès</h3>
                    <p className="text-muted-foreground text-sm">Serving all major tourist destinations across Morocco</p>
                  </div>
                </div>

                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Group Specialists</h3>
                    <p className="text-muted-foreground text-sm">Experienced in handling groups of all sizes</p>
                  </div>
                </div>

                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Reliable Timing</h3>
                    <p className="text-muted-foreground text-sm">We understand tour schedules are critical</p>
                  </div>
                </div>

                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Direct Communication</h3>
                    <p className="text-muted-foreground text-sm">Reach Ayoub directly via WhatsApp anytime</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhoIAm;
