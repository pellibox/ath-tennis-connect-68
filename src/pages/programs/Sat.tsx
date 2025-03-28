
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
import ButtonLink from '@/components/ButtonLink';

const SatProgram = () => {
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
            title="SAT - Agonista Junior"
            subtitle="Per giovani atleti 6-12 anni"
            imageSrc="https://images.unsplash.com/photo-1612458225454-41c3991c0c49?q=80&w=1973&auto=format&fit=crop"
            vimeoEmbed='<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068596987?h=c9dad61d03&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="SAT Program"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
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
              <h2 className="text-white text-lg font-display mb-4">PROGRAMMA SAT:</h2>
              <p className="text-white text-lg font-swiss max-w-3xl">
                Programma formativo per giovani atleti in fase di sviluppo tecnico e fisico. Un percorso strutturato che comprende valutazioni costanti, analisi biomeccanica e monitoraggio della crescita per supportare il talento in modo equilibrato.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <VickiMonitoringBadge level="standard" className="bg-opacity-20 border-opacity-30 text-white" />
                <VickiPoweredBadge className="bg-opacity-20 border-opacity-30 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-12">
            <RevealAnimation>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h2 className="text-3xl font-swiss">SAT - Agonista Junior (6-12 anni)</h2>
                <VickiMonitoringBadge level="standard" />
                <VickiPoweredBadge />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="text-lg mb-6 font-swiss">Programma formativo per giovani atleti in fase di sviluppo tecnico e fisico.</p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-4 font-swiss">
                Il programma SAT (Scuola Agonistica Tennis) è pensato specificamente per giovani atleti tra i 6 e i 12 anni che
                mostrano potenziale e interesse per un percorso tennistico strutturato. Durante questa fase cruciale di sviluppo,
                il nostro approccio mette al centro una formazione tecnica approfondita, bilanciata con attività ludiche per mantenere
                alta la motivazione.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <p className="mb-4 font-swiss">
                Grazie alla tecnologia VICKI™, monitoriamo costantemente i progressi tecnici, fisici e coordinativi,
                adattando il programma alle specifiche necessità di ogni giovane atleta. Le valutazioni regolari ci permettono
                di creare piani personalizzati che assecondano lo sviluppo naturale del bambino, prevenendo sovraccarichi e
                ottimizzando l'apprendimento.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={250}>
              <p className="font-swiss mb-4">
                L'equilibrio tra miglioramento tecnico e componente ludica è fondamentale in questa fase: i nostri coach
                sono specializzati nel mantenere alta la motivazione attraverso attività stimolanti che consolidano
                le abilità apprese. Ogni sessione è strutturata per garantire progressi concreti in un ambiente positivo e divertente.
              </p>
            </RevealAnimation>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <RevealAnimation delay={300} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Caratteristiche del Programma</h3>
              <ul className="list-disc list-inside space-y-2 font-swiss">
                <li>Valutazioni tecniche, fisiche, mentali e tattiche costanti</li>
                <li>Analisi biomeccanica in campo</li>
                <li>Monitoraggio crescita per evitare sovraccarichi (medico e biochimico)</li>
                <li>Programmi adattati all'età e all'evoluzione motoria</li>
                <li>AI dedicata per tracciare la coordinazione</li>
                <li>Equilibrio tra miglioramento tecnico e componente ludica</li>
                <li>Coinvolgimento attivo dei genitori attraverso report visivi e aggiornamenti chiari</li>
                <li>Gruppi ridotti per massima attenzione individualizzata</li>
                <li>Preparazione progressiva all'attività agonistica</li>
              </ul>
            </RevealAnimation>
            
            <RevealAnimation delay={350} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Prezzo</h3>
              <div className="mb-4">
                <p className="text-3xl font-bold text-ath-clay">€2.800</p>
                <p className="text-sm text-gray-600">per stagione (40 settimane)</p>
              </div>
              <div className="mb-4 p-4 bg-ath-clay/10 rounded-lg">
                <h4 className="text-sm font-semibold mb-2">Il programma include:</h4>
                <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                  <li>3 sessioni settimanali di tennis (1,5 ore ciascuna)</li>
                  <li>2 sessioni settimanali di preparazione atletica</li>
                  <li>Valutazione tecnica trimestrale con sistema VICKI™</li>
                  <li>Report mensili sull'andamento e sui progressi</li>
                </ul>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Possibilità di pagamento rateizzato. Contattaci per maggiori informazioni.
              </p>
              <ButtonLink 
                href="/contact" 
                showArrow={true}
              >
                Richiedi informazioni
              </ButtonLink>
            </RevealAnimation>
          </div>
          
          <RevealAnimation delay={400}>
            <div className="bg-ath-clay/5 border border-ath-clay/20 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-display mb-4 text-ath-clay">Perché scegliere il programma SAT?</h3>
              <p className="mb-4">Il programma SAT è stato sviluppato da esperti nel tennis giovanile e nella formazione sportiva per offrire:</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Un percorso formativo completo che considera lo sviluppo fisico e cognitivo del bambino</li>
                <li>Tecnologia VICKI™ che permette un monitoraggio preciso e personalizzato</li>
                <li>Un ambiente stimolante che mantiene alta la motivazione e il divertimento</li>
                <li>Preparazione graduale all'attività agonistica con approccio sostenibile</li>
              </ul>
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-ath-clay text-white py-2 px-6 rounded hover:bg-ath-clay/90 transition-colors"
              >
                Prenota una prova gratuita <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </RevealAnimation>
          
          <RevealAnimation delay={450}>
            <div className="text-center">
              <h3 className="text-2xl font-display mb-6">Programmi Correlati</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link to="/programs/talent-identification" className="block p-6 border border-gray-200 rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                  <h4 className="text-lg font-medium mb-2">SIT - Scuola Individuazione Talenti</h4>
                  <p className="text-gray-600 mb-3">Programma specializzato per l'identificazione precoce dei talenti tennistici (4-10 anni).</p>
                  <span className="inline-flex items-center text-ath-clay">Scopri <ArrowRight size={14} className="ml-1" /></span>
                </Link>
                <Link to="/programs/young-athletes" className="block p-6 border border-gray-200 rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                  <h4 className="text-lg font-medium mb-2">Performance 4</h4>
                  <p className="text-gray-600 mb-3">Programma intensivo con 4 giorni di allenamento settimanale per giovani atleti agonisti.</p>
                  <span className="inline-flex items-center text-ath-clay">Scopri <ArrowRight size={14} className="ml-1" /></span>
                </Link>
                <Link to="/programs/parent-tutor" className="block p-6 border border-gray-200 rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                  <h4 className="text-lg font-medium mb-2">Genitore/Tutor</h4>
                  <p className="text-gray-600 mb-3">Programma per supportare correttamente l'atleta nel suo percorso formativo.</p>
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

export default SatProgram;
