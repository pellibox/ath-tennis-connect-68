
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
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { programCategories } from '@/data/programs';
import { useIsMobile } from '@/hooks/use-mobile';
import StandardHeroVideo from '@/components/StandardHeroVideo';

const Programs = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [showAllPrograms, setShowAllPrograms] = useState(false);
  const { userGender, userType, sport, updateSport } = useProfile();
  const [activeTab, setActiveTab] = useState<'tennis' | 'padel' | 'pickleball' | 'touchtennis'>('tennis');
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (userType && userGender) { // Only update profile if user already has a profile
      if (sport !== 'tennis') {
        updateSport('tennis');
      }
    }
  }, [sport, userType, userGender, updateSport]);
  
  const vimeoEmbed = getVimeoEmbed(userGender, userType);
  
  const { filteredCategories, title, subtitle } = ProgramFilters({ 
    userType, 
    showAllPrograms, 
    sport: 'tennis' 
  });

  const handleTabChange = (value: string) => {
    setActiveTab(value as 'tennis' | 'padel' | 'pickleball' | 'touchtennis');
    
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
      <Header />
      
      <main className="flex-grow pt-0">
        <StandardHeroVideo 
          vimeoEmbed={vimeoEmbed}
          title="PROGRAMMI:"
          subtitle={getPersonalizedSubtitle()}
        />
        
        <section className="py-8 md:py-16 px-4 md:px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <RevealAnimation>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h2 className={`text-2xl md:text-4xl font-display ${isMobile ? "mb-4" : ""}`}>Programmi basati sul Metodo ATH</h2>
                
                {userType && (
                  <button 
                    onClick={() => setShowAllPrograms(!showAllPrograms)}
                    className="hidden md:block px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    {showAllPrograms ? 'Mostra solo programmi rilevanti' : 'Vedi tutti i programmi'}
                  </button>
                )}
              </div>
            </RevealAnimation>
            
            <RevealAnimation delay={100}>
              <div className="text-base md:text-lg text-gray-600 max-w-3xl mb-6 space-y-4">
                <p>
                  Tutti i nostri programmi si basano sul metodo ATH, un sistema innovativo che integra tecnologia avanzata con coaching esperto. 
                  Il nostro approccio garantisce che ogni atleta, indipendentemente dal livello o dall'età, riceva un allenamento personalizzato 
                  basato su dati oggettivi e supportato da professionisti altamente qualificati.
                </p>
                
                {userType && (
                  <button 
                    onClick={() => setShowAllPrograms(!showAllPrograms)}
                    className="md:hidden w-full mt-4 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    {showAllPrograms ? 'Mostra solo programmi rilevanti' : 'Vedi tutti i programmi'}
                  </button>
                )}
                
                <div className="mt-4 md:mt-6">
                  <a href="/method" className="inline-flex items-center text-ath-clay font-medium hover:underline text-sm md:text-base">
                    Scopri di più sul Metodo ATH e il sistema VICKI™ →
                  </a>
                </div>
              </div>
            </RevealAnimation>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-8 md:mb-12">
              <RevealAnimation delay={150} className="bg-white p-4 md:p-8 shadow-sm">
                <h3 className={`${isMobile ? "text-lg" : "text-xl"} font-medium mb-2 md:mb-4`}>Sviluppo Tecnico</h3>
                <p className={`text-gray-600 ${isMobile ? "text-sm" : ""}`}>I nostri coach utilizzano analisi video avanzate e feedback in tempo reale per perfezionare la tua tecnica su tutti i colpi.</p>
              </RevealAnimation>
              
              <RevealAnimation delay={200} className="bg-white p-4 md:p-8 shadow-sm">
                <h3 className={`${isMobile ? "text-lg" : "text-xl"} font-medium mb-2 md:mb-4`}>Tattica & Strategia</h3>
                <p className={`text-gray-600 ${isMobile ? "text-sm" : ""}`}>Sviluppiamo il tuo pensiero tattico, la capacità di leggere il gioco dell'avversario e di adattare la tua strategia in tempo reale durante la partita.</p>
              </RevealAnimation>
              
              <RevealAnimation delay={250} className="bg-white p-4 md:p-8 shadow-sm">
                <h3 className={`${isMobile ? "text-lg" : "text-xl"} font-medium mb-2 md:mb-4`}>Preparazione Fisica</h3>
                <p className={`text-gray-600 ${isMobile ? "text-sm" : ""}`}>Programmi di fitness personalizzati specifici per il tennis, focalizzati su velocità, agilità, forza e resistenza.</p>
              </RevealAnimation>
              
              <RevealAnimation delay={300} className="bg-white p-4 md:p-8 shadow-sm">
                <h3 className={`${isMobile ? "text-lg" : "text-xl"} font-medium mb-2 md:mb-4`}>Allenamento Mentale</h3>
                <p className={`text-gray-600 ${isMobile ? "text-sm" : ""}`}>Sviluppa resistenza mentale, concentrazione e pensiero strategico con i nostri metodi di allenamento psicologico specializzati.</p>
              </RevealAnimation>
            </div>
          </div>
        </section>
        
        <div id="programs-section" className="bg-ath-gray py-12">
          {isMobile ? (
            <div className="mb-8">
              <h2 className="text-2xl font-display mb-6">Seleziona lo Sport</h2>
              <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
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
          
          <ProgramsSection 
            title={title}
            subtitle={subtitle}
            categories={filteredCategories}
            className=""
          />
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
