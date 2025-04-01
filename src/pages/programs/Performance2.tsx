
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import RevealAnimation from '@/components/RevealAnimation';
import VickiUnifiedBadge from '@/components/VickiUnifiedBadge';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createStandardVimeoEmbed } from '@/utils/videoUtils';

const Performance2Program = () => {
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
            title="Performance 2"
            subtitle="2 giorni a settimana per un percorso verso l'eccellenza tennistica"
            imageSrc="/lovable-uploads/ef64c04d-055d-4d70-87f4-e67928a3b8e6.png"
            vimeoEmbed={createStandardVimeoEmbed('867339842')}
            buttons={[
              { text: 'PRENOTA UNA PROVA', href: '/contact' },
              { text: 'CONTATTACI', href: '/contact', variant: 'outline' }
            ]}
            contentPosition="left"
            overlayOpacity="medium"
          />
          
          <div className="w-full bg-black py-16 relative" style={{ height: '300px' }}>
            <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
              <div className="flex items-center mb-2">
                <h2 className="text-white text-lg font-display mr-3">PERFORMANCE 2:</h2>
                <p className="text-white text-lg font-swiss max-w-3xl">
                  Programma di 40 settimane per un percorso verso il proprio massimo potenziale
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <VickiUnifiedBadge level="advanced" className="bg-opacity-20 border-opacity-30 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-12">
            <RevealAnimation>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h2 className="text-3xl font-display">Performance 2</h2>
                <VickiUnifiedBadge level="advanced" />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="text-lg mb-6">2 giorni a settimana - Programma di 40 settimane per un percorso verso il proprio massimo potenziale</p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-4">
                Il programma Performance 2 è pensato per tennisti agonisti che vogliono intraprendere un percorso serio verso il miglioramento 
                continuo delle proprie capacità tecniche, fisiche e mentali, pur mantenendo un impegno di due giorni settimanali.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <p>
                Grazie alla tecnologia VICKI™, ogni sessione viene analizzata in tempo reale per fornire feedback immediati e 
                personalizzati, ottimizzando ogni minuto di allenamento e accelerando i progressi.
              </p>
            </RevealAnimation>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <RevealAnimation delay={250} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Dettagli del Programma</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>2 sessioni tennis da 1,5 ore (3 ore settimanali)</li>
                <li>2 sessioni atletica da 1,5 ore (3 ore settimanali)</li>
                <li>Massimo 3 atleti per campo</li>
                <li>Durata: 40 settimane</li>
                <li>Analisi tecnica e tattica con sistema VICKI™</li>
                <li>Report periodici sui progressi</li>
                <li>Pianificazione annuale della preparazione</li>
              </ul>
            </RevealAnimation>
            
            <RevealAnimation delay={300} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Benefici</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Miglioramento tecnico continuo basato su dati oggettivi</li>
                <li>Sviluppo fisico monitorato e personalizzato</li>
                <li>Crescita costante anche con frequenza bisettimanale</li>
                <li>Prevenzione infortuni attraverso l'analisi del carico</li>
                <li>Allenamento di qualità superiore grazie al numero limitato di atleti per campo</li>
                <li>Preparazione ottimale per competizioni FITP</li>
              </ul>
            </RevealAnimation>
          </div>
          
          <RevealAnimation delay={350}>
            <div className="bg-ath-clay/5 border border-ath-clay/20 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-display mb-4 text-ath-clay">Investimento</h3>
              <p className="text-xl mb-2">€ 4.000</p>
              <p className="text-gray-600 mb-6">Programma completo di 40 settimane</p>
              <div className="space-y-2 mb-6">
                <p><strong>Cosa include:</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>120 ore di allenamento (tennis + atletica)</li>
                  <li>Accesso alla piattaforma VICKI™ per monitoraggio progressi</li>
                  <li>Report periodici personalizzati</li>
                  <li>2 valutazioni complete durante l'anno</li>
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
                <Link to="/programs/performance-3" className="block p-6 border border-gray-200 rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                  <h4 className="text-lg font-medium mb-2">Performance 3</h4>
                  <p className="text-gray-600 mb-3">3 giorni a settimana per un'intensità maggiore</p>
                  <span className="inline-flex items-center text-ath-clay">Scopri <ArrowRight size={14} className="ml-1" /></span>
                </Link>
                <Link to="/programs/performance-4" className="block p-6 border border-gray-200 rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                  <h4 className="text-lg font-medium mb-2">Performance 4</h4>
                  <p className="text-gray-600 mb-3">4 giorni a settimana per atleti più dedicati</p>
                  <span className="inline-flex items-center text-ath-clay">Scopri <ArrowRight size={14} className="ml-1" /></span>
                </Link>
                <Link to="/programs/elite" className="block p-6 border border-gray-200 rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                  <h4 className="text-lg font-medium mb-2">Elite Performance</h4>
                  <p className="text-gray-600 mb-3">Programma intensivo per atleti di alto livello</p>
                  <span className="inline-flex items-center text-ath-clay">Scopri <ArrowRight size={14} className="ml-1" /></span>
                </Link>
              </div>
              <div className="mt-6">
                <Link to="/programs/parent" className="block p-6 border border-gray-200 rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                  <h4 className="text-lg font-medium mb-2">Genitore/Tutor</h4>
                  <p className="text-gray-600 mb-3">Programma di supporto per genitori e tutor di giovani atleti tra i 6 e i 18 anni. Disponibile come opzione separata.</p>
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

export default Performance2Program;
