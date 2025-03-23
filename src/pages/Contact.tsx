
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';

const ContactPage = () => {
  const { t } = useLanguage();
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-20">
        <section className="py-16 px-6 lg:px-10 bg-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display text-center mb-12">Contatti e Prenotazioni</h1>
            
            <div className="prose prose-lg max-w-4xl mx-auto mb-16 text-center">
              <p className="lead text-xl mb-6">
                Prenota una sessione dimostrativa, richiedi informazioni sui nostri programmi o scopri le opportunità di collaborazione.
              </p>
            </div>
          </div>
        </section>
        
        <div className="bg-gray-50 py-16 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-display mb-6">Informazioni per Atleti e Famiglie</h2>
              <p className="text-lg mb-8">
                Contattaci per richiedere informazioni sui nostri programmi di allenamento, prenotare una sessione dimostrativa o una valutazione tecnica.
              </p>
              
              <ContactSection 
                title=""
                subtitle=""
                withBorder={false}
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-display mb-6">Collaborazioni Professionali</h2>
              <p className="text-lg mb-6">
                ATH è una rete aperta a coach, preparatori atletici, specialisti e società sportive interessati a integrare la tecnologia VICKI nella propria metodologia.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Per Coach e Tecnici</h3>
                  <p className="mb-4">Scopri come integrare la tua metodologia personale con l'analisi oggettiva dei dati per massimizzare i risultati dei tuoi atleti.</p>
                  <Button className="w-full">Richiedi Informazioni</Button>
                </div>
                
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Per Strutture Sportive</h3>
                  <p className="mb-4">Esplora le possibilità di implementazione della tecnologia VICKI nella tua struttura tennistica.</p>
                  <Button className="w-full">Contatta il Team Tecnico</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <section className="py-16 px-6 lg:px-10 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-display mb-8 text-center">Dove Siamo</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
                  {/* Placeholder for Google Maps - in a real implementation, replace with actual map */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    Mappa di Google (in implementazione)
                  </div>
                </div>
              </div>
              
              <div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Indirizzo</h3>
                    <p>ATH - Advanced Tennis Hub<br />Via Example 123, Rodano (MI)<br />20090, Italia</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Orari</h3>
                    <p>Lunedì - Venerdì: 9:00 - 21:00<br />Sabato: 9:00 - 19:00<br />Domenica: 9:00 - 13:00</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Contatti Diretti</h3>
                    <p>Telefono: +39 02 1234567<br />Email: info@ath-tennis.com</p>
                  </div>
                </div>
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
