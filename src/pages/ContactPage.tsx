import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
const ContactPage = () => {
  return <div className="min-h-screen">
      <Header />
      <main className="pt-48 pb-20">
        <div className="container-custom my-[100px]">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-display mb-6">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to create unforgettable experiences for your groups? Let's talk!
            </p>
          </div>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>;
};
export default ContactPage;