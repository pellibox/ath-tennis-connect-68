
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import RevealAnimation from '@/components/RevealAnimation';
import VickiMonitoringBadge from '@/components/VickiMonitoringBadge';
import VickiPoweredBadge from '@/components/VickiPoweredBadge';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Performance4Program = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="relative">
          <Hero 
            title="Performance 4"
            subtitle="4 giorni a settimana per atleti dedicati che mirano all'eccellenza tennistica"
            imageSrc="/lovable-uploads/ef64c04d-055d-4d70-87f4-e67928a3b8e6.png"
            buttons={[
              { text: 'PRENOTA UNA PROVA', href: '/contact' },
              { text: 'CONTATTACI', href: '/contact', variant: 'outline' }
            ]}
            contentPosition="left"
            overlayOpacity="medium"
          />
          
          {/* Black banner with claim text - matching Method page style */}
          <div className="w-full bg-black py-16 relative" style={{ height: '300px' }}>
            <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
              <div className="flex items-center mb-2">
                <h2 className="text-white text-lg font-display mr-3">PERFORMANCE 4:</h2>
                <p className="text-white text-lg font-swiss max-w-3xl">
                  Programma di 48 settimane con 4 giorni di allenamento settimanale per un percorso avanzato verso il massimo potenziale
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <VickiMonitoringBadge level="elite" className="bg-opacity-20 border-opacity-30 text-white" />
                <VickiPoweredBadge className="bg-opacity-20 border-opacity-30 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-12">
            <RevealAnimation>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h2 className="text-3xl font-display">Performance 4</h2>
                <VickiMonitoringBadge level="elite" />
                <VickiPoweredBadge />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="text-lg mb-6">4 giorni a settimana - Programma di 48 settimane per atleti dedicati che mirano all'eccellenza tennistica</p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-4">
                Il programma Performance 4 è rivolto a tennisti agonisti con un forte impegno verso il miglioramento, 
                offrendo un'esperienza di allenamento intensiva di quattro giorni settimanali per accelerare i progressi 
                in tutte le aree del gioco.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <p>
                Con un approccio ancora più approfondito e personalizzato, questo programma sfrutta appieno la tecnologia VICKI™ 
                per ottimizzare ogni aspetto dell'allenamento, permettendo progressi significativi e misurabili durante tutto l'anno.
              </p>
            </RevealAnimation>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <RevealAnimation delay={250} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Dettagli del Programma</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>4 sessioni tennis da 1,5 ore (6 ore settimanali)</li>
                <li>4 sessioni atletica da 1,5 ore (6 ore settimanali)</li>
                <li>Massimo 2 atleti per campo</li>
                <li>Durata: 48 settimane</li>
                <li>Analisi tecnica e tattica avanzata con sistema VICKI™</li>
                <li>Report settimanali sui progressi</li>
                <li>Pianificazione personalizzata dell'intero anno agonistico</li>
                <li>Supporto per la partecipazione a tornei</li>
              </ul>
            </RevealAnimation>
            
            <RevealAnimation delay={300} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Benefici</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Progresso tecnico significativo grazie alla maggiore frequenza</li>
                <li>Attenzione quasi individuale con solo 2 atleti per campo</li>
                <li>Sviluppo fisico ottimale con allenamento continuativo</li>
                <li>Miglioramento rapido di tutti gli aspetti del gioco</li>
                <li>Costruzione di una solida mentalità agonistica</li>
                <li>Prevenzione infortuni attraverso monitoraggio avanzato</li>
                <li>Preparazione completa per competizioni di alto livello</li>
              </ul>
            </RevealAnimation>
          </div>
          
          <RevealAnimation delay={350}>
            <div className="bg-ath-clay/5 border border-ath-clay/20 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-display mb-4 text-ath-clay">Investimento</h3>
              <p className="text-xl mb-2">€ 6.500</p>
              <p className="text-gray-600 mb-6">Programma completo di 48 settimane</p>
              <div className="space-y-2 mb-6">
                <p><strong>Cosa include:</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>288 ore di allenamento (tennis + atletica)</li>
                  <li>Accesso completo alla piattaforma VICKI™ per monitoraggio progressi</li>
                  <li>Report settimanali personalizzati</li>
                  <li>4 valutazioni complete durante l'anno</li>
                  <li>Supporto per la pianificazione dei tornei</li>
                </ul>
              </div>
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-ath-clay text-white py-2 px-6 rounded hover:bg-ath-clay/90 transition-colors"
              >
                Richiedi Informazioni <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </RevealAnimation>
          
          <RevealAnimation delay={400}>
            <div className="text-center">
              <h3 className="text-2xl font-display mb-6">Programmi Correlati</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link to="/programs/performance-2" className="block p-6 border border-gray-200 rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                  <h4 className="text-lg font-medium mb-2">Performance 2</h4>
                  <p className="text-gray-600 mb-3">2 giorni a settimana per un percorso personalizzato</p>
                  <span className="inline-flex items-center text-ath-clay">Scopri <ArrowRight size={14} className="ml-1" /></span>
                </Link>
                <Link to="/programs/performance-3" className="block p-6 border border-gray-200 rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                  <h4 className="text-lg font-medium mb-2">Performance 3</h4>
                  <p className="text-gray-600 mb-3">3 giorni a settimana per un'intensità maggiore</p>
                  <span className="inline-flex items-center text-ath-clay">Scopri <ArrowRight size={14} className="ml-1" /></span>
                </Link>
                <Link to="/programs/elite" className="block p-6 border border-gray-200 rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                  <h4 className="text-lg font-medium mb-2">Elite Performance</h4>
                  <p className="text-gray-600 mb-3">Programma intensivo per atleti di alto livello</p>
                  <span className="inline-flex items-center text-ath-clay">Scopri <ArrowRight size={14} className="ml-1" /></span>
                </Link>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Performance4Program;
