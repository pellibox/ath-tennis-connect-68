import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProgramsSection from '@/components/ProgramsSection';
import AboutSection from '@/components/AboutSection';
import RevealAnimation from '@/components/RevealAnimation';
import PricingTables from '@/components/PricingTables';
import { useLanguage } from '@/contexts/LanguageContext';
import { useProfile } from '@/contexts/ProfileContext';
import { getVimeoEmbed } from '@/utils/videoUtils';
import ProgramFilters from '@/components/programs/ProgramFilters';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { programCategories } from '@/data/programs';
import { useIsMobile } from '@/hooks/use-mobile';
import StandardHeroVideo from '@/components/StandardHeroVideo';
import ProgramsHeader from '@/components/programs/ProgramsHeader';

const Programs = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [showAllPrograms, setShowAllPrograms] = useState(false);
  const { userGender, userType, sport, updateSport } = useProfile();
  const [activeTab, setActiveTab] = useState<'tennis' | 'padel' | 'pickleball' | 'touchtennis'>(
    sport === 'padel' ? 'padel' : 
    sport === 'pickleball' ? 'pickleball' : 
    sport === 'touchtennis' ? 'touchtennis' : 
    'tennis'
  );
  const [contentReady, setContentReady] = useState(false);
  const [heroLogoOpacity, setHeroLogoOpacity] = useState<number>(1);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Sync activeTab with sport from context
    if (sport) {
      setActiveTab(sport as 'tennis' | 'padel' | 'pickleball' | 'touchtennis');
    }
    
    // Set content as ready after a small delay to ensure rendering
    const timer = setTimeout(() => {
      setContentReady(true);
      console.log("Programs page: Content marked as ready");
    }, 100);
    
    console.log("Programs page initialized with sport:", sport, "activeTab:", activeTab);
    
    return () => clearTimeout(timer);
  }, [sport]);

  const vimeoEmbed = getVimeoEmbed(userGender, userType, true, false, sport);
  
  const { filteredCategories, title, subtitle } = ProgramFilters({ 
    userType, 
    showAllPrograms, 
    sport: activeTab 
  });

  const handleTabChange = (value: string) => {
    console.log('Tab change in Programs.tsx:', value);
    setActiveTab(value as 'tennis' | 'padel' | 'pickleball' | 'touchtennis');
    
    // Update the sport in context
    if (value === 'tennis' || value === 'padel' || value === 'pickleball' || value === 'touchtennis') {
      updateSport(value as 'tennis' | 'padel' | 'pickleball' | 'touchtennis');
    }
    
    // Navigate to the appropriate page
    switch (value) {
      case 'tennis':
        navigate('/programs');
        break;
      case 'padel':
        navigate('/padel');
        break;
      case 'pickleball':
        navigate('/pickleball');
        break;
      case 'touchtennis':
        navigate('/touchtennis');
        break;
    }
  };

  const handleLogoOpacityChange = (opacity: number) => {
    setHeroLogoOpacity(opacity);
  };

  const getPersonalizedSubtitle = () => {
    if (!userType) {
      return "Approccio metodologico unico e personalizzato per ogni profilo di giocatore";
    }

    switch (userType) {
      case 'junior':
        return "Programmi specializzati per giovani tennisti in fase di sviluppo";
      case 'performance':
        return "Programmi avanzati per tennisti agonisti performance";
      case 'professional':
        return "Programmi elite per professionisti che cercano il massimo delle prestazioni";
      case 'coach':
        return "Programmi e strumenti avanzati per allenatori";
      case 'parent':
        return "Supporto e coinvolgimento per genitori di giovani atleti";
      default:
        return "Approccio metodologico unico e personalizzato per ogni profilo di giocatore";
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <Header headerLogoOpacity={heroLogoOpacity} />
      
      <main className="flex-grow pt-0">
        <StandardHeroVideo 
          vimeoEmbed={vimeoEmbed}
          title="PROGRAMMI:"
          subtitle={getPersonalizedSubtitle()}
          onLogoOpacityChange={handleLogoOpacityChange}
        />
        
        <ProgramsHeader 
          userType={userType} 
          showAllPrograms={showAllPrograms} 
          setShowAllPrograms={setShowAllPrograms} 
        />
        
        <div id="programs-section" className="bg-ath-gray py-12">
          {isMobile ? (
            <div className="mb-8 container mx-auto px-4">
              <h2 className="text-2xl font-display mb-6">Seleziona lo Sport</h2>
              <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full" defaultValue={activeTab}>
                <TabsList className="w-full mb-2 bg-white border border-gray-200 rounded-full p-1 flex justify-between">
                  <TabsTrigger 
                    value="tennis" 
                    className="flex-1 rounded-full data-[state=active]:bg-ath-clay data-[state=active]:text-white px-4 py-2"
                  >
                    Tennis
                  </TabsTrigger>
                  <TabsTrigger 
                    value="padel" 
                    className="flex-1 rounded-full data-[state=active]:bg-ath-clay data-[state=active]:text-white px-4 py-2"
                  >
                    Padel
                  </TabsTrigger>
                </TabsList>
                <TabsList className="w-full bg-white border border-gray-200 rounded-full p-1 flex justify-between">
                  <TabsTrigger 
                    value="pickleball" 
                    className="flex-1 rounded-full data-[state=active]:bg-ath-clay data-[state=active]:text-white px-4 py-2"
                  >
                    Pickleball
                  </TabsTrigger>
                  <TabsTrigger 
                    value="touchtennis" 
                    className="flex-1 rounded-full data-[state=active]:bg-ath-clay data-[state=active]:text-white px-4 py-2"
                  >
                    TouchTennis
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          ) : null}
          
          {!contentReady && (
            <div className="container mx-auto px-4 py-8 text-center">
              <p className="text-gray-500">Caricamento programmi...</p>
            </div>
          )}
          
          <RevealAnimation immediate={true}>
            <ProgramsSection 
              title={title}
              subtitle={subtitle}
              categories={filteredCategories}
              initiallyOpen={true}
              className=""
            />
          </RevealAnimation>
        </div>
        
        <AboutSection 
          title="Il Vantaggio ATH"
          description={
            <div className="space-y-4">
              <p>
                Ciò che distingue ATH è la nostra integrazione di tecnologia all'avanguardia con competenze di coaching di livello mondiale. Il nostro sistema VICKI™ cattura e analizza oltre 70 parametri delle tue prestazioni tennistiche, consentendo ai nostri coach di fornire un allenamento altamente personalizzato.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-2">Sviluppo Tecnico</h3>
              <p>
                I nostri coach utilizzano analisi video avanzate e feedback in tempo reale per perfezionare la tua tecnica su tutti i colpi.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-2">Tattica & Strategia</h3>
              <p>
                Sviluppiamo il tuo pensiero tattico e la capacità di leggere il gioco dell'avversario, fornendoti gli strumenti per adattare la tua strategia in tempo reale durante la partita.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-2">Preparazione Fisica</h3>
              <p>
                Programmi di fitness personalizzati specifici per il tennis, focalizzati su velocità, agilità, forza e resistenza.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-2">Allenamento Mentale</h3>
              <p>
                Sviluppa resistenza mentale, concentrazione e pensiero strategico con i nostri metodi di allenamento psicologico specializzati.
              </p>
              <p>
                Questo approccio basato sui dati elimina le congetture e garantisce che ogni minuto del tuo allenamento sia ottimizzato per il massimo miglioramento. Che tu sia un principiante o un giocatore d'élite, la nostra metodologia si adatta alle tue esigenze e obiettivi unici.
              </p>
              <p>
                Unisciti alla rivoluzione nell'allenamento tennistico e sperimenta i risultati che hanno reso ATH la scelta di giocatori ricreativi e campioni.
              </p>
            </div>
          }
          image="https://images.unsplash.com/photo-1531315396756-905d68d21b56"
          buttons={[
            { text: 'PRENOTA UNA PROVA', href: '/contact' }
          ]}
          reversed={true}
        />
        
        <PricingTables />
      </main>
      
      <Footer />
    </div>
  );
};

export default Programs;
