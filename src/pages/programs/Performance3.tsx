
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

const Performance3Program = () => {
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
            title="Performance 3"
            subtitle="3 giorni a settimana per un'intensità maggiore nel percorso verso l'eccellenza tennistica"
            imageSrc="/lovable-uploads/53047a4d-087d-4e68-942b-d441b33bf6ab.png"
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
                <h2 className="text-white text-lg font-display mr-3">PERFORMANCE 3:</h2>
                <p className="text-white text-lg font-swiss max-w-3xl">
                  Programma di 48 settimane con 3 giorni di allenamento settimanale per un percorso più intenso verso il massimo potenziale
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <VickiMonitoringBadge level="advanced" className="bg-opacity-20 border-opacity-30 text-white" />
                <VickiPoweredBadge className="bg-opacity-20 border-opacity-30 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-12">
            <RevealAnimation>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h2 className="text-3xl font-display">Performance 3</h2>
                <VickiMonitoringBadge level="advanced" />
                <VickiPoweredBadge />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="text-lg mb-6">3 giorni a settimana - Programma di 48 settimane per un percorso più intenso verso il proprio massimo potenziale</p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-4">
                Il programma Performance 3 è dedicato a tennisti agonisti che desiderano un percorso più intenso verso il miglioramento 
                delle proprie capacità tecniche, fisiche e mentali, con un impegno di tre giorni settimanali.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <p>
                La maggiore frequenza settimanale permette un'accelerazione del processo di apprendimento e sviluppo, 
                ottimizzata dalla tecnologia VICKI™ che analizza ogni sessione in tempo reale per fornire feedback 
                immediati e personalizzati.
              </p>
            </RevealAnimation>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <RevealAnimation delay={250} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Dettagli del Programma</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>3 sessioni tennis da 1,5 ore (4,5 ore settimanali)</li>
                <li>3 sessioni atletica da 1,5 ore (4,5 ore settimanali)</li>
                <li>Massimo 3 atleti per campo</li>
                <li>Durata: 48 settimane</li>
                <li>Analisi tecnica e tattica con sistema VICKI™</li>
                <li>Report periodici sui progressi</li>
                <li>Pianificazione annuale della preparazione</li>
              </ul>
            </RevealAnimation>
            
            <RevealAnimation delay={300} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Benefici</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Miglioramento tecnico accelerato basato su dati oggettivi</li>
                <li>Maggiore continuità nell'apprendimento</li>
                <li>Sviluppo fisico più rapido e monitorato</li>
                <li>Rafforzamento delle competenze tattiche</li>
                <li>Prevenzione infortuni attraverso l'analisi del carico</li>
                <li>Allenamento di qualità superiore grazie al numero limitato di atleti per campo</li>
                <li>Preparazione ottimale per competizioni FITP</li>
              </ul>
            </RevealAnimation>
          </div>
          
          <RevealAnimation delay={350}>
            <div className="bg-ath-clay/5 border border-ath-clay/20 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-display mb-4 text-ath-clay">Investimento</h3>
              <p className="text-xl mb-2">€ 5.000</p>
              <p className="text-gray-600 mb-6">Programma completo di 48 settimane</p>
              <div className="space-y-2 mb-6">
                <p><strong>Cosa include:</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>216 ore di allenamento (tennis + atletica)</li>
                  <li>Accesso alla piattaforma VICKI™ per monitoraggio progressi</li>
                  <li>Report periodici personalizzati</li>
                  <li>3 valutazioni complete durante l'anno</li>
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
            </div>
          </RevealAnimation>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Performance3Program;
