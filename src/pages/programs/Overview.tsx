
import React, { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProgramsSection from '@/components/ProgramsSection';
import { useProfile } from '@/contexts/ProfileContext';
import { programCategories } from '@/data/programs';
import { programCategories as padelCategories } from '@/data/padel';
import { programCategories as pickleballCategories } from '@/data/pickleball';
import { touchTennisCategories } from '@/data/touchtennis';
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Link } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { SportType } from '@/contexts/ProfileContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { getVimeoEmbed } from '@/utils/videoUtils';
import RevealAnimation from '@/components/RevealAnimation';
import MultisportExplanation from '@/components/programs/MultisportExplanation';
import StandardHeroVideo from '@/components/StandardHeroVideo';

const ProgramsOverview = () => {
  const {
    userType,
    userGender,
    sport,
    updateSport
  } = useProfile();
  
  const [activeTab, setActiveTab] = useState<'tennis' | 'padel' | 'pickleball' | 'touchtennis'>(
    sport === 'padel' ? 'padel' : 
    sport === 'pickleball' ? 'pickleball' : 
    sport === 'touchtennis' ? 'touchtennis' : 
    'tennis'
  );
  
  // Initialize open categories state
  const [initialRender, setInitialRender] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);
  
  const location = useRef(window.location.pathname);
  
  useEffect(() => {
    console.log("ProgramsOverview - Current sport in context:", sport);
    console.log("ProgramsOverview - Current activeTab:", activeTab);
    
    // Force alignment between context sport and active tab on initial load
    if (sport) {
      setActiveTab(sport as 'tennis' | 'padel' | 'pickleball' | 'touchtennis');
    }
    
    // Mark that initial render is complete after a short delay
    const timer = setTimeout(() => {
      setInitialRender(false);
      setContentLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [sport]);

  // Additional debugging to track activeTab and sport changes
  useEffect(() => {
    console.log("Active tab changed to:", activeTab);
  }, [activeTab]);
  
  const isMobile = useIsMobile();
  const vimeoEmbed = getVimeoEmbed(userGender, userType, true, false, sport);
  
  const handleTabChange = (value: string) => {
    console.log('Tab changed to:', value);
    setActiveTab(value as 'tennis' | 'padel' | 'pickleball' | 'touchtennis');

    if (value === 'tennis' || value === 'padel' || value === 'pickleball' || value === 'touchtennis') {
      console.log('Updating sport in context to:', value);
      updateSport(value as SportType);
    }
  };
  
  // Helper function to get the correct program categories based on activeTab
  const getActiveCategoriesForTab = (tab: string) => {
    switch (tab) {
      case 'tennis':
        return programCategories;
      case 'padel':
        return padelCategories;
      case 'pickleball':
        return pickleballCategories;
      case 'touchtennis':
        return touchTennisCategories;
      default:
        return programCategories;
    }
  };
  
  return <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 pt-4">
          <Breadcrumb>
            
          </Breadcrumb>
        </div>
        
        <StandardHeroVideo vimeoEmbed={vimeoEmbed} />
        
        <div className="container mx-auto px-4 py-12">
          <RevealAnimation>
            <h1 className="text-4xl font-bold mb-6">Programmi ATH</h1>
            <div className="max-w-4xl mb-12 space-y-4 text-gray-700">
              <p className="text-lg">
                ATH offre programmi di allenamento avanzati basati su un approccio integrato che combina tecnologia all'avanguardia e competenze professionali di alto livello.
              </p>
              <p>
                Il nostro metodo si concentra sullo sviluppo completo dell'atleta, considerando tutti gli aspetti fondamentali: tecnica, tattica, preparazione fisica e mentale, analisi dettagliata delle performance e supporto personalizzato.
              </p>
              <p>
                Il <strong>Tennis</strong> rappresenta il cuore della nostra attività, con programmi altamente specializzati per tutte le età e livelli. Abbiamo inoltre sviluppato programmi dedicati per altri sport di racchetta come <strong>Padel</strong>, <strong>Pickleball</strong> e <strong>TouchTennis</strong>, applicando la stessa metodologia avanzata.
              </p>
            </div>
          </RevealAnimation>
          
          <MultisportExplanation />
          
          <RevealAnimation delay={100}>
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Seleziona uno sport</h2>
              <p className="text-gray-700 mb-6">
                Esplora i nostri programmi specializzati per ciascuna disciplina
              </p>
              
              <Tabs 
                value={activeTab} 
                onValueChange={handleTabChange} 
                className="w-full"
                defaultValue="tennis"
              >
                {isMobile ? 
                  <div className="mb-8">
                    <TabsList className="w-full mb-2 bg-white border border-gray-200 rounded-full p-1 flex justify-between">
                      <TabsTrigger value="tennis" className="flex-1 rounded-full data-[state=active]:bg-ath-clay data-[state=active]:text-white px-4 py-3">
                        Tennis
                      </TabsTrigger>
                      <TabsTrigger value="padel" className="flex-1 rounded-full data-[state=active]:bg-ath-clay data-[state=active]:text-white px-4 py-3">
                        Padel
                      </TabsTrigger>
                    </TabsList>
                    <TabsList className="w-full bg-white border border-gray-200 rounded-full p-1 flex justify-between">
                      <TabsTrigger value="pickleball" className="flex-1 rounded-full data-[state=active]:bg-ath-clay data-[state=active]:text-white px-4 py-3">
                        Pickleball
                      </TabsTrigger>
                      <TabsTrigger value="touchtennis" className="flex-1 rounded-full data-[state=active]:bg-ath-clay data-[state=active]:text-white px-4 py-3">
                        TouchTennis
                      </TabsTrigger>
                    </TabsList>
                  </div> 
                : 
                  <TabsList className="w-full mb-8 bg-white border border-gray-200 rounded-full p-1 flex justify-between">
                    <TabsTrigger value="tennis" className="flex items-center rounded-full data-[state=active]:bg-ath-clay data-[state=active]:text-white px-8 py-3">
                      Tennis
                    </TabsTrigger>
                    <TabsTrigger value="padel" className="flex items-center rounded-full data-[state=active]:bg-ath-clay data-[state=active]:text-white px-8 py-3">
                      Padel
                    </TabsTrigger>
                    <TabsTrigger value="pickleball" className="flex items-center rounded-full data-[state=active]:bg-ath-clay data-[state=active]:text-white px-8 py-3">
                      Pickleball
                    </TabsTrigger>
                    <TabsTrigger value="touchtennis" className="flex items-center rounded-full data-[state=active]:bg-ath-clay data-[state=active]:text-white px-8 py-3">
                      TouchTennis
                    </TabsTrigger>
                  </TabsList>
                }
                
                <div className="mt-8 relative">
                  {!contentLoaded && (
                    <div className="py-12 text-center">
                      <p className="text-gray-500">Caricamento programmi...</p>
                    </div>
                  )}
                  
                  {/* Force all tabs to render, but only show the active one */}
                  <TabsContent value="tennis" className="mt-0" forceMount={true}>
                    <div className={`transition-opacity duration-300 ${activeTab === 'tennis' ? 'opacity-100' : 'opacity-0 absolute top-0 left-0 invisible'}`}>
                      <div className="bg-gray-50 p-6 rounded-lg mb-8">
                        <h3 className="text-xl font-bold mb-3">Tennis</h3>
                        <p className="mb-4">
                          Il nostro programma di punta, con soluzioni personalizzate per ogni livello: dai principianti ai professionisti. Utilizzando la nostra tecnologia VICKI™, offriamo un'esperienza di allenamento senza precedenti.
                        </p>
                        <Link to="/programs" className="inline-flex items-center text-ath-clay font-medium hover:underline">
                          Esplora tutti i programmi Tennis →
                        </Link>
                      </div>
                      
                      <ProgramsSection 
                        title="Programmi Tennis" 
                        subtitle="I nostri programmi di punta, sviluppati con anni di esperienza" 
                        categories={programCategories} 
                        categoryCollapsible={true} 
                        initiallyOpen={true} 
                      />
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="padel" className="mt-0" forceMount={true}>
                    <div className={`transition-opacity duration-300 ${activeTab === 'padel' ? 'opacity-100' : 'opacity-0 absolute top-0 left-0 invisible'}`}>
                      <div className="bg-gray-50 p-6 rounded-lg mb-8">
                        <h3 className="text-xl font-bold mb-3">Padel</h3>
                        <p className="mb-4">
                          Abbiamo adattato la nostra metodologia avanzata per questo sport in rapida crescita, offrendo programmi specifici che sfruttano la nostra tecnologia VICKI™ per migliorare rapidamente il tuo gioco.
                        </p>
                        <Link to="/padel" className="inline-flex items-center text-ath-clay font-medium hover:underline">
                          Esplora tutti i programmi Padel →
                        </Link>
                      </div>
                      
                      <ProgramsSection 
                        title="Programmi Padel" 
                        subtitle="I nostri programmi specializzati per il Padel" 
                        categories={padelCategories} 
                        categoryCollapsible={true} 
                        initiallyOpen={true}
                      />
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="pickleball" className="mt-0" forceMount={true}>
                    <div className={`transition-opacity duration-300 ${activeTab === 'pickleball' ? 'opacity-100' : 'opacity-0 absolute top-0 left-0 invisible'}`}>
                      <div className="bg-gray-50 p-6 rounded-lg mb-8">
                        <h3 className="text-xl font-bold mb-3">Pickleball</h3>
                        <p className="mb-4">
                          Programmi dedicati per questo sport emergente, con focus su tecnica, strategia e divertimento. Scopri come la nostra metodologia ATH può migliorare il tuo gioco di Pickleball.
                        </p>
                        <Link to="/pickleball" className="inline-flex items-center text-ath-clay font-medium hover:underline">
                          Esplora tutti i programmi Pickleball →
                        </Link>
                      </div>
                      
                      <ProgramsSection 
                        title="Programmi Pickleball" 
                        subtitle="I nostri programmi specializzati per il Pickleball" 
                        categories={pickleballCategories} 
                        categoryCollapsible={true} 
                        initiallyOpen={true}
                      />
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="touchtennis" className="mt-0" forceMount={true}>
                    <div className={`transition-opacity duration-300 ${activeTab === 'touchtennis' ? 'opacity-100' : 'opacity-0 absolute top-0 left-0 invisible'}`}>
                      <div className="bg-gray-50 p-6 rounded-lg mb-8">
                        <h3 className="text-xl font-bold mb-3">TouchTennis</h3>
                        <p className="mb-4">
                          Un formato innovativo che rende il tennis accessibile a tutti. I nostri programmi di TouchTennis sono perfetti per chi vuole divertirsi e migliorare le proprie abilità in uno spazio ridotto.
                        </p>
                        <Link to="/touchtennis" className="inline-flex items-center text-ath-clay font-medium hover:underline">
                          Esplora tutti i programmi TouchTennis →
                        </Link>
                      </div>
                      
                      <ProgramsSection 
                        title="Programmi TouchTennis" 
                        subtitle="Tennis in formato ridotto, divertimento senza limiti" 
                        categories={touchTennisCategories} 
                        categoryCollapsible={true} 
                        initiallyOpen={true}
                      />
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </RevealAnimation>
          
          <RevealAnimation delay={200}>
            <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm mb-12">
              <h2 className="text-2xl font-bold mb-4">Perché scegliere i programmi ATH?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Tecnologia avanzata</h3>
                  <p className="text-gray-700">Il sistema VICKI™ analizza oltre 70 parametri della tua performance in tempo reale</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Esperti qualificati</h3>
                  <p className="text-gray-700">Coach di alto livello con esperienza internazionale</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Approccio integrato</h3>
                  <p className="text-gray-700">Sviluppo tecnico, tattico, fisico e mentale in un unico programma</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Personalizzazione</h3>
                  <p className="text-gray-700">Programmi su misura in base al tuo profilo, obiettivi e necessità</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Link to="/contact" className="inline-flex items-center bg-ath-clay text-white px-6 py-3 rounded-full font-medium transition-colors hover:bg-ath-clay/90">
                  Richiedi informazioni sui programmi
                </Link>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </main>
      <Footer />
    </div>;
};

export default ProgramsOverview;
