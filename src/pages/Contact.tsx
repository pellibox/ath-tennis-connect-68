
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { useLocation } from 'react-router-dom';
import Hero from '@/components/Hero';

const ContactPage = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Check if there's a hash in the URL and scroll to that section
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-20">
        <Hero
          title="Contattaci"
          subtitle="Per informazioni, prenotazioni o collaborazioni"
          imageSrc="/lovable-uploads/b06f970d-6ca3-4c8a-b55a-92ec5bc78f6a.png"
          height="medium"
          overlayOpacity="dark"
          contentPosition="center"
          contentVerticalPosition="bottom"
        />
        
        <ContactSection 
          title="Richiedi Informazioni"
          subtitle="Compila il modulo per informazioni su programmi, disponibilità o collaborazioni"
          address="Via del Tennis 123, 20873 Rodano (MI)"
          phone="+39 02 1234567"
          email="info@ath-tennis.it"
        />
        
        <section className="py-16 px-6 lg:px-10 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-display mb-6">ATH Tennis Hub</h2>
                <p className="mb-4">Via del Tennis 123</p>
                <p className="mb-4">20873 Rodano (MI)</p>
                <p className="mb-4">Email: info@ath-tennis.it</p>
                <p className="mb-4">Tel: +39 02 1234567</p>
              </div>
              
              <div>
                <h2 className="text-2xl font-display mb-6">Orari</h2>
                <p className="mb-4">Lunedì - Venerdì: 8:00 - 22:00</p>
                <p className="mb-4">Sabato: 9:00 - 20:00</p>
                <p className="mb-4">Domenica: 9:00 - 18:00</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
