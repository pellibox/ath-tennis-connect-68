
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { useLocation } from 'react-router-dom';
import Hero from '@/components/Hero';
import RevealAnimation from '@/components/RevealAnimation';
import PdfBrochureButton from '@/components/PdfBrochureButton';

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
          fullHeight={false}
          overlayOpacity="dark"
          contentPosition="center"
          contentVerticalPosition="bottom"
        />
        
        <div className="bg-ath-clay text-white py-6 px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <RevealAnimation immediate={true}>
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg md:text-xl font-medium">Scarica la nostra brochure completa</h3>
                <p className="text-sm md:text-base opacity-90">Tutti i programmi, prezzi e servizi in un unico documento</p>
              </div>
            </RevealAnimation>
            <RevealAnimation immediate={true} delay={100}>
              <PdfBrochureButton variant="outline" className="bg-white hover:bg-gray-100 text-ath-clay border-white" />
            </RevealAnimation>
          </div>
        </div>
        
        <ContactSection 
          title="Richiedi Informazioni"
          subtitle="Compila il modulo per informazioni su programmi, disponibilità o collaborazioni"
          address="Via F. Turati, 9, 20090 Rodano MI, Italia"
          phone="+39 02 1234567"
          email="info@ath.tennis"
        />
        
        <section className="py-16 px-6 lg:px-10 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-display mb-6">ATH Tennis Hub</h2>
                <p className="mb-4 font-swiss">Via F. Turati, 9</p>
                <p className="mb-4 font-swiss">20090 Rodano MI, Italia</p>
                <p className="mb-4 font-swiss">Email: info@ath.tennis</p>
                <p className="mb-4 font-swiss">Tel: +39 02 1234567</p>
              </div>
              
              <div>
                <h2 className="text-2xl font-display mb-6">Orari</h2>
                <p className="mb-4 font-swiss">Lunedì - Venerdì: 7:00 - 23:00</p>
                <p className="mb-4 font-swiss">Sabato: 9:00 - 20:00</p>
                <p className="mb-4 font-swiss">Domenica: 9:00 - 18:00</p>
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
