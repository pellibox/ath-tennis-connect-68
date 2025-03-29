
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProgramsSection from '@/components/ProgramsSection';
import AboutSection from '@/components/AboutSection';
import RevealAnimation from '@/components/RevealAnimation';
import PricingTables from '@/components/PricingTables';
import { useLanguage } from '@/contexts/LanguageContext';
import { useProfile } from '@/contexts/ProfileContext';
import { getVimeoEmbed } from '@/utils/videoUtils';
import ProgramsHeader from '@/components/programs/ProgramsHeader';
import ProgramFilters from '@/components/programs/ProgramFilters';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { programCategories } from '@/data/programs';
import { programCategories as padelPickleballCategories } from '@/data/padelPickleball';

const Programs = () => {
  const { t } = useLanguage();
  const [showAllPrograms, setShowAllPrograms] = useState(false);
  const [logoYOffset, setLogoYOffset] = useState<number>(0);
  const [logoOpacity, setLogoOpacity] = useState<number>(1);
  const { userGender, userType, sport, updateProfile } = useProfile();
  const [activeTab, setActiveTab] = useState<'tennis' | 'padel-pickleball'>(sport === 'padel' || sport === 'pickleball' ? 'padel-pickleball' : 'tennis');
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      setLogoYOffset(scrollY * 0.2);
      
      const fadeThreshold = 100;
      const fadeOutBy = 300;
      
      if (scrollY > fadeThreshold) {
        const opacity = Math.max(0, 1 - (scrollY - fadeThreshold) / (fadeOutBy - fadeThreshold));
        setLogoOpacity(opacity);
      } else {
        setLogoOpacity(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // When tab changes, update sport in profile if needed
  useEffect(() => {
    if (activeTab === 'tennis' && sport !== 'tennis') {
      // Fix: Need to pass all required parameters to updateProfile
      // The function expects (gender, type, sport) based on the ProfileContext definition
      updateProfile(userGender || 'male', userType || 'adult', 'tennis');
    } else if (activeTab === 'padel-pickleball' && sport !== 'padel' && sport !== 'pickleball') {
      // Fix: Need to pass all required parameters to updateProfile
      updateProfile(userGender || 'male', userType || 'adult', 'padel');
    }
  }, [activeTab, sport, updateProfile, userGender, userType]);
  
  const vimeoEmbed = getVimeoEmbed(userGender, userType);
  const { filteredCategories, title, subtitle } = ProgramFilters({ 
    userType, 
    showAllPrograms,
    sport: activeTab === 'tennis' ? 'tennis' : (sport === 'pickleball' ? 'pickleball' : 'padel')
  });

  const handleTabChange = (value: string) => {
    setActiveTab(value as 'tennis' | 'padel-pickleball');
    // When switching tabs, reset scroll position to show the programs
    const programsElement = document.getElementById('programs-section');
    if (programsElement) {
      programsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      
      <main className="flex-grow pt-0"> {/* Removed pt-20 to eliminate white space */}
        <div className="w-full bg-black min-h-[calc(100vw*9/16)] relative">
          <div dangerouslySetInnerHTML={{ __html: vimeoEmbed }} />
        </div>
        
        <ProgramsHeader 
          userType={userType}
          showAllPrograms={showAllPrograms}
          setShowAllPrograms={setShowAllPrograms}
          logoYOffset={logoYOffset}
          logoOpacity={logoOpacity}
        />
        
        <div id="programs-section" className="bg-ath-gray py-12">
          <div className="container mx-auto px-4">
            <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
              <TabsList className="w-full mb-8 bg-white border border-gray-200 rounded-full p-1 flex justify-center">
                <TabsTrigger 
                  value="tennis" 
                  className="flex-1 rounded-full data-[state=active]:bg-ath-clay data-[state=active]:text-white px-8 py-2"
                >
                  Tennis
                </TabsTrigger>
                <TabsTrigger 
                  value="padel-pickleball" 
                  className="flex-1 rounded-full data-[state=active]:bg-ath-clay data-[state=active]:text-white px-8 py-2"
                >
                  Padel & Pickleball
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="tennis" className="mt-0">
                <ProgramsSection 
                  title={title}
                  subtitle={subtitle}
                  categories={filteredCategories}
                  className=""
                />
              </TabsContent>
              
              <TabsContent value="padel-pickleball" className="mt-0">
                <ProgramsSection 
                  title="Programmi Padel & Pickleball"
                  subtitle="Esplora i nostri programmi dedicati al Padel e al Pickleball per giocatori di tutti i livelli"
                  categories={padelPickleballCategories}
                  className=""
                />
              </TabsContent>
            </Tabs>
          </div>
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
