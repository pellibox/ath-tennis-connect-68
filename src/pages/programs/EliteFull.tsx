
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

const EliteFullProgram = () => {
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
            title="Elite Performance Full"
            subtitle="Programma completo per atleti di alto livello con allenamento professionale giornaliero"
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
                <h2 className="text-white text-lg font-display mr-3">ELITE PERFORMANCE FULL:</h2>
                <p className="text-white text-lg font-swiss max-w-3xl">
                  Programma intensivo completo di 48 settimane con allenamento professionale mattina e pomeriggio per atleti di élite
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
                <h2 className="text-3xl font-display">Elite Performance Full</h2>
                <VickiMonitoringBadge level="elite" />
                <VickiPoweredBadge />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="text-lg mb-6">Programma completo di 48 settimane con allenamento professionale mattina e pomeriggio per atleti di élite</p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-4">
                Il programma Elite Performance Full rappresenta la nostra offerta più completa e intensiva, 
                progettata per tennisti che aspirano a raggiungere i più alti livelli di competizione. 
                Con sessioni di allenamento mattutine e pomeridiane per cinque giorni alla settimana, 
                questo programma offre un'immersione totale nell'eccellenza tennistica.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <p>
                Ogni aspetto dell'allenamento è ottimizzato attraverso la tecnologia VICKI™, 
                che monitora costantemente i progressi e fornisce feedback in tempo reale, 
                permettendo ai nostri coach di personalizzare ogni dettaglio del percorso formativo.
              </p>
            </RevealAnimation>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <RevealAnimation delay={250} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Dettagli del Programma</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>5 sessioni tennis mattina da 2 ore (10 ore settimanali)</li>
                <li>5 sessioni tennis pomeriggio da 2 ore (10 ore settimanali)</li>
                <li>7 sessioni atletica da 1,5 ore (10,5 ore settimanali)</li>
                <li>Massimo 2 atleti per campo</li>
                <li>Durata: 48 settimane</li>
                <li>Analisi tecnica e tattica elite con sistema VICKI™</li>
                <li>Report giornalieri sui progressi</li>
                <li>Pianificazione personalizzata dell'intero anno agonistico</li>
                <li>Supporto completo per tornei nazionali e internazionali</li>
                <li>Team multidisciplinare dedicato (coach, preparatore, mental coach)</li>
              </ul>
            </RevealAnimation>
            
            <RevealAnimation delay={300} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Benefici</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Sviluppo professionale completo paragonabile ad accademie internazionali</li>
                <li>Attenzione quasi individuale con massimo 2 atleti per campo</li>
                <li>Progresso tecnico rapido e continuo</li>
                <li>Preparazione fisica di livello professionale</li>
                <li>Sviluppo mentale avanzato per la competizione ad alto livello</li>
                <li>Monitoraggio costante per prevenzione infortuni</li>
                <li>Possibilità di raggiungere il massimo potenziale agonistico</li>
                <li>Preparazione completa per competizioni nazionali e internazionali</li>
              </ul>
            </RevealAnimation>
          </div>
          
          <RevealAnimation delay={350}>
            <div className="bg-ath-clay/5 border border-ath-clay/20 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-display mb-4 text-ath-clay">Investimento</h3>
              <p className="text-xl mb-2">€ 15.000</p>
              <p className="text-gray-600 mb-6">Programma completo di 48 settimane</p>
              <div className="space-y-2 mb-6">
                <p><strong>Cosa include:</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>960 ore di allenamento tennis</li>
                  <li>504 ore di preparazione atletica</li>
                  <li>Accesso completo alla piattaforma VICKI™ per monitoraggio avanzato</li>
                  <li>Report giornalieri personalizzati</li>
                  <li>Valutazioni complete mensili</li>
                  <li>Supporto per la pianificazione e la partecipazione ai tornei</li>
                  <li>Team multidisciplinare dedicato</li>
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
                <Link to="/programs/performance-4" className="block p-6 border border-gray-200 rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                  <h4 className="text-lg font-medium mb-2">Performance 4</h4>
                  <p className="text-gray-600 mb-3">4 giorni a settimana per atleti dedicati</p>
                  <span className="inline-flex items-center text-ath-clay">Scopri <ArrowRight size={14} className="ml-1" /></span>
                </Link>
                <Link to="/programs/elite" className="block p-6 border border-gray-200 rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                  <h4 className="text-lg font-medium mb-2">Elite Performance</h4>
                  <p className="text-gray-600 mb-3">5 giorni a settimana, sessioni al mattino</p>
                  <span className="inline-flex items-center text-ath-clay">Scopri <ArrowRight size={14} className="ml-1" /></span>
                </Link>
                <Link to="/programs/professional" className="block p-6 border border-gray-200 rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                  <h4 className="text-lg font-medium mb-2">Professionisti</h4>
                  <p className="text-gray-600 mb-3">Supporto completo per atleti professionisti</p>
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

export default EliteFullProgram;
