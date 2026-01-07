import React, { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProgramsSection from '@/components/ProgramsSection';
import { useProfile } from '@/contexts/ProfileContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { programCategories } from '@/data/programs';
import { programCategories as padelCategories } from '@/data/padel';
import { programCategories as pickleballCategories } from '@/data/pickleball';
import { touchTennisCategories } from '@/data/touchtennis';
import { Link } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { SportType } from '@/contexts/ProfileContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { getVimeoEmbed } from '@/utils/videoUtils';
import RevealAnimation from '@/components/RevealAnimation';
import MultisportExplanation from '@/components/programs/MultisportExplanation';
import StandardHeroVideo from '@/components/StandardHeroVideo';

const ProgramsOverview = () => {
  const { t } = useLanguage();
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
  
  const [initialRender, setInitialRender] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);
  
  const location = useRef(window.location.pathname);
  
  useEffect(() => {
    if (sport) {
      setActiveTab(sport as 'tennis' | 'padel' | 'pickleball' | 'touchtennis');
    }
    
    const timer = setTimeout(() => {
      setInitialRender(false);
      setContentLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [sport]);
  
  const isMobile = useIsMobile();
  const vimeoEmbed = getVimeoEmbed(userGender, userType, true, false, sport);
  
  const handleTabChange = (value: string) => {
    setActiveTab(value as 'tennis' | 'padel' | 'pickleball' | 'touchtennis');

    if (value === 'tennis' || value === 'padel' || value === 'pickleball' || value === 'touchtennis') {
      updateSport(value as SportType);
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 pt-4">
        </div>
        
        <StandardHeroVideo vimeoEmbed={vimeoEmbed} />
        
        <div className="container mx-auto px-4 py-12">
          <RevealAnimation>
            <h1 className="text-4xl font-bold mb-6">{t('programs.overview.title')}</h1>
            <div className="max-w-4xl mb-12 space-y-4 text-gray-700">
              <p className="text-lg">{t('programs.overview.intro1')}</p>
              <p>{t('programs.overview.intro2')}</p>
              <p dangerouslySetInnerHTML={{ __html: t('programs.overview.intro3') }} />
            </div>
          </RevealAnimation>
          
          <MultisportExplanation />
          
          <RevealAnimation delay={100}>
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">{t('programs.overview.selectSport')}</h2>
              <p className="text-gray-700 mb-6">{t('programs.overview.selectSportDesc')}</p>
              
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
                      <p className="text-gray-500">{t('programs.loading')}</p>
                    </div>
                  )}
                  
                  <TabsContent value="tennis" className="mt-0" forceMount={true}>
                    <div className={`transition-opacity duration-300 ${activeTab === 'tennis' ? 'opacity-100' : 'opacity-0 absolute top-0 left-0 invisible'}`}>
                      <div className="bg-gray-50 p-6 rounded-lg mb-8">
                        <h3 className="text-xl font-bold mb-3">Tennis</h3>
                        <p className="mb-4">{t('programs.tennis.desc')}</p>
                        <Link to="/programs" className="inline-flex items-center text-ath-clay font-medium hover:underline">
                          {t('programs.tennis.explore')}
                        </Link>
                      </div>
                      
                      <ProgramsSection 
                        title={t('programs.tennis.title')}
                        subtitle={t('programs.tennis.subtitle')}
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
                        <p className="mb-4">{t('programs.padel.desc')}</p>
                        <Link to="/padel" className="inline-flex items-center text-ath-clay font-medium hover:underline">
                          {t('programs.padel.explore')}
                        </Link>
                      </div>
                      
                      <ProgramsSection 
                        title={t('programs.padel.title')}
                        subtitle={t('programs.padel.subtitle')}
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
                        <p className="mb-4">{t('programs.pickleball.desc')}</p>
                        <Link to="/pickleball" className="inline-flex items-center text-ath-clay font-medium hover:underline">
                          {t('programs.pickleball.explore')}
                        </Link>
                      </div>
                      
                      <ProgramsSection 
                        title={t('programs.pickleball.title')}
                        subtitle={t('programs.pickleball.subtitle')}
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
                        <p className="mb-4">{t('programs.touchtennis.desc')}</p>
                        <Link to="/touchtennis" className="inline-flex items-center text-ath-clay font-medium hover:underline">
                          {t('programs.touchtennis.explore')}
                        </Link>
                      </div>
                      
                      <ProgramsSection 
                        title={t('programs.touchtennis.title')}
                        subtitle={t('programs.touchtennis.subtitle')}
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
              <h2 className="text-2xl font-bold mb-4">{t('programs.overview.whyChoose')}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">{t('programs.overview.tech')}</h3>
                  <p className="text-gray-700">{t('programs.overview.tech.desc')}</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">{t('programs.overview.experts')}</h3>
                  <p className="text-gray-700">{t('programs.overview.experts.desc')}</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">{t('programs.overview.integrated')}</h3>
                  <p className="text-gray-700">{t('programs.overview.integrated.desc')}</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">{t('programs.overview.personalized')}</h3>
                  <p className="text-gray-700">{t('programs.overview.personalized.desc')}</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Link to="/contact" className="inline-flex items-center bg-ath-clay text-white px-6 py-3 rounded-full font-medium transition-colors hover:bg-ath-clay/90">
                  {t('programs.requestInfo')}
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

export default ProgramsOverview;