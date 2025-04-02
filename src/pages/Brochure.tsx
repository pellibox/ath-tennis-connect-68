
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import RevealAnimation from '@/components/RevealAnimation';
import PdfBrochureButton from '@/components/PdfBrochureButton';
import Hero from '@/components/Hero';
import { programCategories } from '@/data/programs';

const Brochure = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-20">
        <Hero
          title="ATH Tennis Hub Brochure"
          subtitle="Tutte le informazioni sui nostri programmi, tecnologie e servizi"
          imageSrc="/lovable-uploads/b06f970d-6ca3-4c8a-b55a-92ec5bc78f6a.png"
          fullHeight={false}
          overlayOpacity="dark"
          contentPosition="center"
        />
        
        <div className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <RevealAnimation>
              <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-display mb-4">Brochure Informativa</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Scarica la nostra brochure completa con tutte le informazioni sui programmi, prezzi e servizi offerti da ATH Tennis Hub.
                </p>
              </div>
            </RevealAnimation>
            
            <RevealAnimation delay={100}>
              <div className="bg-gray-50 p-6 md:p-10 rounded-lg shadow-sm mb-12">
                <h2 className="text-2xl font-display mb-6">Contenuti della Brochure</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-lg">Introduzione ad ATH</h3>
                    <p className="text-gray-600">Panoramica del centro e della filosofia di allenamento</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg">Tecnologia VICKI™</h3>
                    <p className="text-gray-600">Dettagli sul nostro sistema di analisi e coaching avanzato</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg">Programmi Completi</h3>
                    <p className="text-gray-600">
                      {programCategories.map(cat => cat.title).join(', ')}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg">Listino Prezzi</h3>
                    <p className="text-gray-600">Tariffe dettagliate per tutti i programmi e servizi</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg">Informazioni di Contatto</h3>
                    <p className="text-gray-600">Come raggiungerci e come contattarci</p>
                  </div>
                </div>
                
                <div className="mt-10 text-center">
                  <PdfBrochureButton size="lg" />
                </div>
              </div>
            </RevealAnimation>
            
            <RevealAnimation delay={200}>
              <div className="bg-ath-clay/5 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-4">Aggiornamenti Automatici</h3>
                <p className="text-gray-600 mb-4">
                  La nostra brochure è generata dinamicamente e contiene sempre le informazioni più aggiornate sui nostri programmi, prezzi e servizi. Ogni volta che scarichi il documento, avrai accesso ai contenuti più recenti del nostro sito.
                </p>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Brochure;
