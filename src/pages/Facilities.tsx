
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FacilitiesSection from '@/components/FacilitiesSection';
import ContactSection from '@/components/ContactSection';
import AboutSection from '@/components/AboutSection';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const FacilitiesPage = () => {
  const { t } = useLanguage();
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
        <section className="py-16 px-6 lg:px-10 bg-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display text-center mb-12">Le Nostre Strutture</h1>
            
            <div className="prose prose-lg max-w-4xl mx-auto mb-16">
              <p className="lead text-xl mb-6">
                ATH dispone di strutture all'avanguardia progettate specificamente per ottimizzare l'esperienza di allenamento attraverso l'integrazione della tecnologia VICKI.
              </p>
              
              <p>
                I nostri spazi sono stati concepiti per offrire un ambiente ottimale per lo sviluppo tennistico, con aree dedicate all'allenamento tecnico, alla preparazione atletica e all'analisi dei dati.
              </p>
            </div>
          </div>
        </section>
        
        <FacilitiesSection 
          title="Campi e Strutture"
          subtitle="Spazi progettati per massimizzare la tua evoluzione tennistica"
          compact={false}
        />
        
        <section className="py-16 px-6 lg:px-10 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display text-center mb-12">Servizi Offerti</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Affitti Premium</h3>
                <p className="text-gray-700">Prenotazione campi con tecnologia VICKI per sessioni private o di gruppo.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Clinic Tecniche</h3>
                <p className="text-gray-700">Sessioni formative intensive focalizzate su aspetti specifici del gioco.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Percorsi Valutativi</h3>
                <p className="text-gray-700">Analisi approfondite delle capacità tecniche, fisiche e tattiche con reporting completo.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Eventi e Tornei</h3>
                <p className="text-gray-700">Competizioni e incontri formativi con analisi tecnologica delle performance.</p>
              </div>
            </div>
          </div>
        </section>
        
        <AboutSection 
          title="Prenota una Sessione"
          description="Scopri le nostre strutture e la tecnologia VICKI in prima persona. Contattaci per prenotare una sessione dimostrativa o per richiedere informazioni sui nostri programmi."
          image="https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?q=80&w=1000"
          buttons={[
            { text: "Contattaci", href: '/contact' }
          ]}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default FacilitiesPage;
