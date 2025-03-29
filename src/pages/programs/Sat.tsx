
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
import RelatedPrograms from '@/components/programs/RelatedPrograms';

const SatProgram = () => {
  const { t } = useLanguage();
  const [userGender, setUserGender] = useState<UserGender | null>(null);
  const [userType, setUserType] = useState<UserType | null>(null);
  
  const relatedPrograms = [
    {
      title: "SIT - Scuola Individuazione Talenti",
      description: "Programma specializzato per l'identificazione precoce dei talenti tennistici tramite il sistema Vicki™ per bambini dai 6 ai 10+ anni.",
      link: "/programs/talent-identification"
    },
    {
      title: "Performance 4",
      description: "Programma intensivo per giovani atleti agonisti con monitoraggio avanzato e pianificazione personalizzata.",
      link: "/programs/performance-4"
    },
    {
      title: "Genitore/Tutor",
      description: "Supporto specifico per i genitori di giovani atleti con report dettagliati e consigli su come accompagnare il percorso del bambino.",
      link: "/programs/parent"
    }
  ];
  
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
            title="SAT - Scuola Avviamento al Tennis"
            subtitle="Per bambini dai 4 ai 10+ anni"
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
                Un viaggio entusiasmante alla scoperta del tennis, dove ogni bambino può esprimersi attraverso il gioco e il movimento. Creiamo un ambiente gioioso dove le prime esperienze con racchetta e pallina diventano momenti di divertimento e crescita.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <VickiMonitoringBadge level="basic" className="bg-opacity-20 border-opacity-30 text-white" />
                <VickiPoweredBadge className="bg-opacity-20 border-opacity-30 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-12">
            <RevealAnimation>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h2 className="text-3xl font-swiss">SAT - Scuola Avviamento al Tennis (4-10+ anni)</h2>
                <VickiMonitoringBadge level="basic" />
                <VickiPoweredBadge />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="text-lg mb-6 font-swiss">Under 8–10 + over 10, 30 settimane all'anno.</p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-4 font-swiss">
                Il nostro programma SAT è un viaggio entusiasmante alla scoperta del tennis, dove ogni bambino può esprimersi attraverso il gioco e il movimento. 
                Creiamo un ambiente gioioso dove le prime esperienze con racchetta e pallina diventano momenti di divertimento e crescita, 
                costruendo abilità che saranno preziose dentro e fuori dal campo.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <p className="mb-4 font-swiss">
                Il programma SAT è progettato per introdurre i bambini al meraviglioso mondo del tennis attraverso un approccio ludico e inclusivo. 
                Con una sessione settimanale di tennis da 1 ora e una sessione di preparazione atletica di 1 ora, 
                creiamo un ambiente stimolante dove ogni bambino può innamorarsi di questo sport.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={250}>
              <p className="mb-4 font-swiss">
                La tecnologia VICKI™ ci permette di osservare i progressi di ciascun bambino, offrendo un'esperienza di apprendimento personalizzata 
                che rispetta i ritmi individuali di sviluppo e rende ogni lezione un'esperienza unica e coinvolgente.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={300}>
              <p className="font-swiss">
                Il SAT è il posto dove nascono le prime amicizie tennistiche, si sviluppa l'amore per il movimento e si costruiscono le basi 
                per un futuro sano e attivo, sia che il bambino continui con il tennis o scopra altre passioni sportive.
              </p>
            </RevealAnimation>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <RevealAnimation delay={350}>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-swiss font-semibold mb-6 text-ath-clay">Eccellenza Tecnica</h3>
                <ul className="space-y-4 font-swiss">
                  <li className="flex">
                    <span className="text-ath-clay mr-2">•</span>
                    <p>Giochi colorati e dinamici che introducono i movimenti fondamentali del tennis in modo naturale e divertente.</p>
                  </li>
                  <li className="flex">
                    <span className="text-ath-clay mr-2">•</span>
                    <p>Attività a stazioni che permettono ai bambini di sperimentare diverse sensazioni con la racchetta, sviluppando gradualmente precisione e controllo.</p>
                  </li>
                </ul>
              </div>
            </RevealAnimation>
            
            <RevealAnimation delay={400}>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-swiss font-semibold mb-6 text-ath-clay">Preparazione Atletica</h3>
                <ul className="space-y-4 font-swiss">
                  <li className="flex">
                    <span className="text-ath-clay mr-2">•</span>
                    <p>Circuiti avventurosi che stimolano la coordinazione generale e specifica attraverso sfide adatte all'età.</p>
                  </li>
                  <li className="flex">
                    <span className="text-ath-clay mr-2">•</span>
                    <p>Staffette e giochi di gruppo che combinano divertimento e sviluppo delle capacità motorie di base.</p>
                  </li>
                </ul>
              </div>
            </RevealAnimation>
            
            <RevealAnimation delay={450}>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-swiss font-semibold mb-6 text-ath-clay">Forza Mentale</h3>
                <ul className="space-y-4 font-swiss">
                  <li className="flex">
                    <span className="text-ath-clay mr-2">•</span>
                    <p>Giochi che incentivano la collaborazione e il rispetto, costruendo una mentalità positiva verso lo sport.</p>
                  </li>
                  <li className="flex">
                    <span className="text-ath-clay mr-2">•</span>
                    <p>Piccole sfide che insegnano a festeggiare i successi e ad accettare gli errori come parte del processo di apprendimento.</p>
                  </li>
                </ul>
              </div>
            </RevealAnimation>
            
            <RevealAnimation delay={500}>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-swiss font-semibold mb-6 text-ath-clay">Tattica & Strategia</h3>
                <ul className="space-y-4 font-swiss">
                  <li className="flex">
                    <span className="text-ath-clay mr-2">•</span>
                    <p>Semplici scenari di gioco presentati come "missioni speciali" che sviluppano la comprensione base del tennis.</p>
                  </li>
                  <li className="flex">
                    <span className="text-ath-clay mr-2">•</span>
                    <p>Giochi di osservazione che stimolano l'intelligenza tennistica in modo adatto ai più piccoli.</p>
                  </li>
                </ul>
              </div>
            </RevealAnimation>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <RevealAnimation delay={550} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Caratteristiche del Programma</h3>
              <ul className="list-disc list-inside space-y-2 font-swiss">
                <li>1 sessione tennis da 1 ora a settimana</li>
                <li>1 sessione atletica da 1 ora a settimana</li>
                <li>30 settimane di allenamento</li>
                <li>Monitoraggio di base con VICKI™</li>
                <li>Focus sullo sviluppo delle capacità motorie di base</li>
                <li>Approccio ludico e inclusivo</li>
                <li>Introduzione divertente ai fondamentali del tennis</li>
                <li>Giochi-test per personalizzare l'esperienza</li>
                <li>Ambiente positivo e stimolante</li>
                <li>Test di valutazione per l'eventuale passaggio al programma SIT</li>
              </ul>
            </RevealAnimation>
            
            <RevealAnimation delay={600} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Prezzo</h3>
              <div className="mb-4">
                <p className="text-3xl font-bold text-ath-clay">€750</p>
                <p className="text-sm text-gray-600">per stagione (30 settimane)</p>
              </div>
              <div className="mb-4 p-4 bg-ath-clay/10 rounded-lg">
                <h4 className="text-sm font-semibold mb-2">{t('sat.test.title')}</h4>
                <p className="text-sm text-gray-600">
                  {t('sat.test.desc')}
                </p>
              </div>
              <div className="mb-4 p-4 bg-ath-clay/10 rounded-lg">
                <h4 className="text-sm font-semibold mb-2">{t('sat.upgrade.title')}</h4>
                <p className="text-sm text-gray-600">
                  {t('sat.upgrade.desc')}
                </p>
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
          
          <RevealAnimation delay={650}>
            <div className="bg-ath-clay/5 border border-ath-clay/20 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-display mb-4 text-ath-clay">Perché scegliere il programma SAT?</h3>
              <p className="mb-4">Il programma SAT è stato sviluppato da esperti nel tennis giovanile e nella formazione sportiva per offrire:</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Un approccio inclusivo che rispetta i tempi di sviluppo di ogni bambino</li>
                <li>Tecnologia VICKI™ che permette un monitoraggio personalizzato dei progressi</li>
                <li>Un ambiente stimolante che promuove divertimento e socializzazione</li>
                <li>La possibilità di scoprire e coltivare il talento tennistico in modo naturale</li>
              </ul>
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-ath-clay text-white py-2 px-6 rounded hover:bg-ath-clay/90 transition-colors"
              >
                Prenota una prova gratuita <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </RevealAnimation>
        </div>
        
        <div className="bg-gray-50 py-16 mt-8">
          <div className="max-w-6xl mx-auto px-6">
            <RevealAnimation delay={700}>
              <RelatedPrograms 
                title="Programmi Correlati" 
                programs={relatedPrograms}
              />
            </RevealAnimation>
          </div>
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
