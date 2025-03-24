
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import RevealAnimation from '@/components/RevealAnimation';
import { UserGender, UserType, loadUserPreferences } from '@/components/UserTypeSelector';
import VickiMonitoringBadge from '@/components/VickiMonitoringBadge';

const CampsProgram = () => {
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
          <div className="w-full bg-black min-h-[calc(100vw*9/16)] relative">
            <div dangerouslySetInnerHTML={{ __html: `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068835737?h=f0a05fef01&autoplay=1&loop=1&title=0&byline=0&portrait=0&background=1&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>` }} />
          </div>
          
          {/* Black banner with claim text - matching Method page style */}
          <div className="w-full bg-black py-16 relative" style={{ height: '300px' }}>
            <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
              <div className="flex items-center mb-2">
                <h2 className="text-white text-lg font-display mr-3">CAMPS:</h2>
                <p className="text-white text-lg font-swiss max-w-3xl">
                  Esperienza intensiva di alta qualità per giocatori di tutte le età durante i periodi estivi e vacanze scolastiche
                </p>
              </div>
              <div className="mt-4">
                <VickiMonitoringBadge level="basic" className="bg-opacity-20 border-opacity-30 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-12">
            <RevealAnimation>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h2 className="text-3xl font-display">Camp Estivi</h2>
                <VickiMonitoringBadge level="basic" />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="text-lg mb-6">Esperienza intensiva di alta qualità per giocatori di tutte le età durante i periodi estivi e vacanze scolastiche.</p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-4">
                I nostri Camp Estivi offrono un'immersione completa nel tennis di qualità, combinando allenamento intensivo, 
                divertimento e socializzazione in un ambiente stimolante e professionale.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <p>
                Grazie alla tecnologia VICKI™, anche in un formato breve come quello dei camp, 
                siamo in grado di offrire un'esperienza formativa significativa con feedback precisi e misurabili.
              </p>
            </RevealAnimation>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <RevealAnimation delay={250} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Caratteristiche del Programma</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Sessioni tecniche mattutine con analisi video</li>
                <li>Attività tattiche e match practice pomeridiane</li>
                <li>Mini-tornei e competizioni organizzate</li>
                <li>Sessioni di mental training adatte all'età</li>
                <li>Attività fisiche complementari e giochi di gruppo</li>
                <li>Report dettagliato finale con indicazioni per il futuro</li>
              </ul>
            </RevealAnimation>
            
            <RevealAnimation delay={300} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Benefici</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Miglioramento tecnico intensivo in breve tempo</li>
                <li>Esperienza di tennis immersiva e motivante</li>
                <li>Socializzazione con altri giocatori e sviluppo di amicizie</li>
                <li>Scoperta dei propri punti di forza e aree di miglioramento</li>
                <li>Esposizione alla metodologia professionale ATH</li>
                <li>Divertimento e passione per il tennis in un ambiente positivo</li>
              </ul>
            </RevealAnimation>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CampsProgram;
