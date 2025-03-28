
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import RevealAnimation from '@/components/RevealAnimation';
import { UserGender, UserType, loadUserPreferences } from '@/components/UserTypeSelector';
import VickiMonitoringBadge from '@/components/VickiMonitoringBadge';
import VickiPoweredBadge from '@/components/VickiPoweredBadge';
import ContactSection from '@/components/ContactSection';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const YoungAthletesProgram = () => {
  const { t } = useLanguage();
  const [userGender, setUserGender] = useState<UserGender | null>(null);
  const [userType, setUserType] = useState<UserType | null>(null);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Load user preferences
    const { gender, type } = loadUserPreferences();
    if (gender) setUserGender(gender);
    if (type) setUserType(type);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="relative">
          <Hero 
            title="Agonista Performance (13+ anni)"
            subtitle="Programma completo per giovani atleti che vogliono competere a livello agonistico"
            imageSrc="/lovable-uploads/ef64c04d-055d-4d70-87f4-e67928a3b8e6.png"
            vimeoEmbed='<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068596935?h=222acb69b2&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Agonista Performance"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
            buttons={[
              { text: 'PRENOTA UNA PROVA', href: '/contact' },
              { text: 'CONTATTACI', href: '/contact', variant: 'outline' }
            ]}
            contentPosition="left"
            overlayOpacity="medium"
          />
          
          {/* Black banner with claim text */}
          <div className="w-full bg-black py-16 relative" style={{ height: '300px' }}>
            <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
              <div className="flex items-center mb-2">
                <h2 className="text-white text-lg font-display mr-3">AGONISTA PERFORMANCE:</h2>
                <p className="text-white text-lg font-swiss max-w-3xl">
                  Programma completo per giovani atleti che vogliono competere a livello agonistico
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
                <h2 className="text-3xl font-swiss">Agonista Performance (13+ anni)</h2>
                <VickiMonitoringBadge level="advanced" />
                <VickiPoweredBadge />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="text-lg mb-6 font-swiss">Programma completo per giovani atleti che vogliono competere a livello agonistico</p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-4 font-swiss">
                Il programma Agonista Performance è pensato per giovani atleti dai 13 anni in su che sono in fase 
                di sviluppo tecnico e fisico, pronti per affrontare competizioni di livello sempre più elevato. 
                Attraverso un approccio strutturato e personalizzato, aiutiamo i giocatori a sviluppare le proprie capacità 
                tecniche, tattiche, fisiche e mentali, preparandoli per una carriera agonistica di successo.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <p className="font-swiss">
                Grazie alla tecnologia VICKI™, ogni sessione viene analizzata in tempo reale fornendo feedback immediati 
                sui parametri tecnici, tattici, fisici e mentali. Il sistema monitora costantemente i progressi, 
                consentendo di ottimizzare il carico di lavoro e prevenire potenziali infortuni attraverso 
                l'identificazione automatica delle aree critiche.
              </p>
            </RevealAnimation>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <RevealAnimation delay={250} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Caratteristiche del Programma</h3>
              <ul className="list-disc list-inside space-y-2 font-swiss">
                <li>Analisi in tempo reale di tecnica, tattica, parametri mentali e fisici</li>
                <li>Feedback continuo (durante e dopo la sessione)</li>
                <li>Database personale per pianificare il calendario tornei</li>
                <li>Monitoraggio carico di lavoro e progressi</li>
                <li>Prevenzione infortuni grazie all'identificazione automatica delle aree critiche</li>
                <li>Percorsi personalizzati in base allo sviluppo fisico, biotipo e stile di gioco</li>
                <li>Integrazione tra valutazioni tecniche, fisiche, mediche e mentali</li>
                <li>Coordinamento tra coach, preparatore, mental coach, medico</li>
              </ul>
            </RevealAnimation>
            
            <RevealAnimation delay={300} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Benefici</h3>
              <ul className="list-disc list-inside space-y-2 font-swiss">
                <li>Perfezionamento tecnico avanzato con feedback precisi</li>
                <li>Sviluppo di uno stile di gioco personale basato su punti di forza</li>
                <li>Potenziamento della resistenza e della forza con programmi mirati</li>
                <li>Miglioramento del ranking competitivo</li>
                <li>Costruzione della fiducia e resilienza mentale</li>
                <li>Preparazione metodica per competizioni nazionali e internazionali</li>
                <li>Monitoraggio obiettivo dei progressi con dati concreti</li>
                <li>Riduzione del rischio di infortuni attraverso analisi preventiva</li>
              </ul>
            </RevealAnimation>
          </div>
          
          <RevealAnimation delay={350}>
            <div className="bg-ath-clay/5 border border-ath-clay/20 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-display mb-4 text-ath-clay">Investimento</h3>
              <p className="text-3xl font-bold text-ath-clay mb-2">€ 5.500</p>
              <p className="text-gray-600 mb-6">Programma completo (40 settimane)</p>
              <div className="space-y-2 mb-6">
                <p><strong>Cosa include:</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Allenamenti intensivi con coach specializzati</li>
                  <li>Pianificazione personalizzata delle competizioni</li>
                  <li>Analisi tecnica con tecnologia VICKI™</li>
                  <li>Preparazione fisica specifica per il tennis</li>
                  <li>Supporto per la gestione mentale delle competizioni</li>
                  <li>Feedback dettagliati e piani di miglioramento continui</li>
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
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
                <Link to="/programs/elite-performance" className="block p-6 border border-gray-200 rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                  <h4 className="text-lg font-medium mb-2">Elite Performance</h4>
                  <p className="text-gray-600 mb-3">5 giorni a settimana di allenamento intensivo</p>
                  <span className="inline-flex items-center text-ath-clay">Scopri <ArrowRight size={14} className="ml-1" /></span>
                </Link>
                <Link to="/programs/elite-full" className="block p-6 border border-gray-200 rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                  <h4 className="text-lg font-medium mb-2">Elite Performance Full</h4>
                  <p className="text-gray-600 mb-3">Programma completo e immersivo per atleti di alto livello</p>
                  <span className="inline-flex items-center text-ath-clay">Scopri <ArrowRight size={14} className="ml-1" /></span>
                </Link>
              </div>
            </div>
          </RevealAnimation>
        </div>
        
        <ContactSection 
          title="Vuoi saperne di più?" 
          subtitle="Contattaci per una prova gratuita"
          address="Via Carlo D'Adda 6/8, 20143 Milano (MI)"
          email="info@advancedtennishub.com"
          phone="+39 02 123 4567"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default YoungAthletesProgram;
