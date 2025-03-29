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
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users } from 'lucide-react';
import ProgramsSection from '@/components/ProgramsSection';
import { juniorPrograms } from '@/data/programs';
import { Link } from 'react-router-dom';

const Performance3Program = () => {
  const { t } = useLanguage();
  const [userGender, setUserGender] = useState<UserGender | null>(null);
  const [userType, setUserType] = useState<UserType | null>(null);
  
  // Filter related programs - Programs similar to Performance3
  const relatedPrograms = juniorPrograms.filter(program => 
    program.id !== 'performance-3' && 
    ['performance-2', 'performance-4', 'elite-performance', 'talent-identification'].includes(program.id)
  ).slice(0, 3);
  
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
            title="Performance 3"
            subtitle="3 giorni a settimana (40 settimane)"
            imageSrc="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2070&auto=format&fit=crop"
            vimeoEmbed='<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068788542?h=698f55b033&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Performance 3"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
            buttons={[
              { text: 'PRENOTA UNA PROVA', href: '/contact' },
              { text: 'CONTATTACI', href: '/contact', variant: 'outline' }
            ]}
            contentPosition="left"
            overlayOpacity="medium"
          />
          
          <div className="w-full bg-black py-16 relative" style={{ height: 'auto', minHeight: '400px' }}>
            <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center py-8">
              <h2 className="text-white text-lg font-display mb-4">PROGRAMMA PERFORMANCE 3:</h2>
              <p className="text-white text-lg font-swiss max-w-3xl mb-6">
                Percorso ideale per l'introduzione all'agonismo e lo sviluppo graduale delle capacità competitive, supportato dalla tecnologia VICKI™.
              </p>
              <ul className="text-white space-y-3 font-swiss max-w-3xl">
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span><strong>Sviluppo Tecnico Graduale:</strong> Consolidamento dei fondamentali e introduzione progressiva delle biomeccaniche avanzate, con feedback personalizzato per costruire una solida base tecnica.</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span><strong>Preparazione Atletica Accessibile:</strong> Programmi adattati all'età e al livello di sviluppo, con focus sulla coordinazione, velocità e resistenza per creare una base atletica equilibrata.</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span><strong>Avviamento Mentale:</strong> Prima introduzione alla gestione emotiva, concentrazione e costruzione della fiducia in un ambiente positivo e stimolante.</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span><strong>Introduzione Tattica:</strong> Apprendimento dei principi tattici di base e delle strategie fondamentali per affrontare le prime competizioni con sicurezza.</span>
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
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
                <h2 className="text-3xl font-swiss">Performance 3</h2>
                <Badge variant="ath" className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" />
                  <span>Ideale per Giovani Agonisti</span>
                </Badge>
                <VickiMonitoringBadge level="advanced" />
                <VickiPoweredBadge />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="text-lg mb-6 font-swiss">3 giorni a settimana, 40 settimane all'anno.</p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-4 font-swiss">
                Il programma Performance 3 è pensato per giovani atleti che iniziano il loro percorso agonistico,
                offrendo un approccio graduale e sistematico con 3 giorni settimanali di allenamento,
                combinando sessioni di tennis e preparazione atletica per un totale di 9 ore settimanali.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <p className="font-swiss">
                Questo programma equilibrato consente di sviluppare le fondamenta tecniche e fisiche necessarie
                per il tennis agonistico, mantenendo il giusto spazio per impegni scolastici e crescita personale.
                La tecnologia VICKI™ monitora i progressi in modo preciso, guidando lo sviluppo dell'atleta
                con un ritmo adeguato alla sua crescita.
              </p>
            </RevealAnimation>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <RevealAnimation delay={250} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Caratteristiche del Programma</h3>
              <ul className="list-disc list-inside space-y-2 font-swiss">
                <li>3 sessioni tennis da 1,5 ore (4,5 ore settimanali)</li>
                <li>3 sessioni atletica da 1,5 ore (4,5 ore settimanali)</li>
                <li>Massimo 3 atleti per campo</li>
                <li>40 settimane di allenamento</li>
                <li>Monitoraggio completo con VICKI™</li>
                <li>Piano personalizzato adatto ai giovani agonisti</li>
                <li>Introduzione graduale all'ambiente competitivo</li>
                <li>Supporto completo per le prime competizioni</li>
              </ul>
            </RevealAnimation>
            
            <RevealAnimation delay={300} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Prezzo</h3>
              <div className="mb-4">
                <p className="text-3xl font-bold text-ath-clay">€5.000</p>
                <p className="text-sm text-gray-600">per stagione (40 settimane)</p>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Possibilità di pagamento rateizzato. Contattaci per maggiori informazioni.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-ath-clay text-white py-2 px-4 rounded hover:bg-ath-clay/90 transition-colors"
              >
                Richiedi informazioni
              </a>
            </RevealAnimation>
          </div>
        </div>
        
        <div className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <RevealAnimation>
              <h3 className="text-2xl font-display mb-6">Programmi Correlati</h3>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Link to="/programs/performance-4" className="block p-6 border border-gray-200 bg-white rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                  <h4 className="text-lg font-medium mb-2">Performance 4</h4>
                  <p className="text-gray-600 mb-3">4 giorni a settimana per un'intensità maggiore, ideale per atleti più determinati che cercano un allenamento più strutturato.</p>
                  <span className="inline-flex items-center text-ath-clay">Scopri <ArrowRight size={14} className="ml-1" /></span>
                </Link>
                <Link to="/programs/elite-performance" className="block p-6 border border-gray-200 bg-white rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                  <h4 className="text-lg font-medium mb-2">Elite Performance</h4>
                  <p className="text-gray-600 mb-3">5 giorni a settimana di allenamento intensivo per atleti che puntano all'eccellenza e competizioni di alto livello.</p>
                  <span className="inline-flex items-center text-ath-clay">Scopri <ArrowRight size={14} className="ml-1" /></span>
                </Link>
                <Link to="/programs/elite-full" className="block p-6 border border-gray-200 bg-white rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                  <h4 className="text-lg font-medium mb-2">Elite Performance Full</h4>
                  <p className="text-gray-600 mb-3">Programma completo e immersivo per atleti di alto livello con allenamento giornaliero e supporto totale.</p>
                  <span className="inline-flex items-center text-ath-clay">Scopri <ArrowRight size={14} className="ml-1" /></span>
                </Link>
              </div>
            </RevealAnimation>
            
            <RevealAnimation delay={150}>
              <div className="mt-6">
                <Link to="/programs/parent" className="block p-6 border border-gray-200 bg-white rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                  <h4 className="text-lg font-medium mb-2">Genitore/Tutor</h4>
                  <p className="text-gray-600 mb-3">Programma di supporto per genitori e tutor di atleti tra i 6 e i 18 anni. Disponibile per il programma Performance 3 a €150.</p>
                  <span className="inline-flex items-center text-ath-clay">Scopri <ArrowRight size={14} className="ml-1" /></span>
                </Link>
              </div>
            </RevealAnimation>
            
            <ProgramsSection 
              title=""
              programs={relatedPrograms}
              compact={true}
              gridLayout="dense"
              className="pt-0"
            />
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

export default Performance3Program;
