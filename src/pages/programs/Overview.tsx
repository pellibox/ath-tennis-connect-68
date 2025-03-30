
import React, { useState, useEffect } from 'react';
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
import { useLanguage } from '@/contexts/LanguageContext';

const ProgramsOverview = () => {
  const {
    userType,
    userGender,
    sport,
    updateSport
  } = useProfile();
  
  const { t } = useLanguage();
  
  const [activeTab, setActiveTab] = useState<'tennis' | 'padel' | 'pickleball' | 'touchtennis'>(
    sport === 'padel' ? 'padel' : 
    sport === 'pickleball' ? 'pickleball' : 
    sport === 'touchtennis' ? 'touchtennis' : 
    'tennis'
  );
  
  useEffect(() => {
    if (sport) {
      setActiveTab(sport as 'tennis' | 'padel' | 'pickleball' | 'touchtennis');
    }
  }, [sport]);
  
  const isMobile = useIsMobile();
  const vimeoEmbed = getVimeoEmbed(userGender, userType, true, false, sport);
  
  const handleTabChange = (value: string) => {
    setActiveTab(value as 'tennis' | 'padel' | 'pickleball' | 'touchtennis');

    if (value === 'tennis' || value === 'padel' || value === 'pickleball' || value === 'touchtennis') {
      updateSport(value as SportType);
    }
  };
  
  return <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 pt-4">
          <Breadcrumb>
            
          </Breadcrumb>
        </div>
        
        <StandardHeroVideo 
          vimeoEmbed={vimeoEmbed} 
          titleKey="programs.ath.title" 
          subtitleKey="programs.ath.subtitle"
        />
        
        <div className="container mx-auto px-4 py-12">
          <RevealAnimation>
            <h1 className="text-4xl font-bold mb-6">{t("programs.ath.title")}</h1>
            <div className="max-w-4xl mb-12 space-y-4 text-gray-700">
              <p className="text-lg">
                {t("programs.intro")}
              </p>
              <p>
                {t("programs.methodology")}
              </p>
              <p>
                {t("programs.sport.description")}
              </p>
            </div>
          </RevealAnimation>
          
          <MultisportExplanation />
          
          <RevealAnimation delay={100}>
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">{t("programs.select.sport")}</h2>
              <p className="text-gray-700 mb-6">
                {t("programs.explore.programs")}
              </p>
              
              <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
                {isMobile ? <div className="mb-8">
                    <TabsList className="w-full mb-2 bg-white border border-gray-200 rounded-full p-1 flex justify-between">
                      <TabsTrigger value="tennis" className="flex-1 rounded-full data-[state=active]:bg-ath-clay data-[state=active]:text-white px-4 py-3">
                        {t("programs.tennis")}
                      </TabsTrigger>
                      <TabsTrigger value="padel" className="flex-1 rounded-full data-[state=active]:bg-ath-clay data-[state=active]:text-white px-4 py-3">
                        {t("programs.padel")}
                      </TabsTrigger>
                    </TabsList>
                    <TabsList className="w-full bg-white border border-gray-200 rounded-full p-1 flex justify-between">
                      <TabsTrigger value="pickleball" className="flex-1 rounded-full data-[state=active]:bg-ath-clay data-[state=active]:text-white px-4 py-3">
                        {t("programs.pickleball")}
                      </TabsTrigger>
                      <TabsTrigger value="touchtennis" className="flex-1 rounded-full data-[state=active]:bg-ath-clay data-[state=active]:text-white px-4 py-3">
                        {t("programs.touchtennis")}
                      </TabsTrigger>
                    </TabsList>
                  </div> : <TabsList className="w-full mb-8 bg-white border border-gray-200 rounded-full p-1 flex justify-between">
                    <TabsTrigger value="tennis" className="flex items-center rounded-full data-[state=active]:bg-ath-clay data-[state=active]:text-white px-8 py-3">
                      {t("programs.tennis")}
                    </TabsTrigger>
                    <TabsTrigger value="padel" className="flex items-center rounded-full data-[state=active]:bg-ath-clay data-[state=active]:text-white px-8 py-3">
                      {t("programs.padel")}
                    </TabsTrigger>
                    <TabsTrigger value="pickleball" className="flex items-center rounded-full data-[state=active]:bg-ath-clay data-[state=active]:text-white px-8 py-3">
                      {t("programs.pickleball")}
                    </TabsTrigger>
                    <TabsTrigger value="touchtennis" className="flex items-center rounded-full data-[state=active]:bg-ath-clay data-[state=active]:text-white px-8 py-3">
                      {t("programs.touchtennis")}
                    </TabsTrigger>
                  </TabsList>}
                
                <div className="mt-8">
                  <TabsContent value="tennis" className="mt-0">
                    <div className="bg-gray-50 p-6 rounded-lg mb-8">
                      <h3 className="text-xl font-bold mb-3">{t("programs.tennis")}</h3>
                      <p className="mb-4">
                        {t("programs.tennis.description")}
                      </p>
                      <Link to="/programs" className="inline-flex items-center text-ath-clay font-medium hover:underline">
                        {t("programs.explore.tennis")}
                      </Link>
                    </div>
                    
                    <ProgramsSection 
                      title={t("programs.tennis")} 
                      subtitle={t("programs.tennis.description")} 
                      categories={programCategories} 
                      categoryCollapsible={true} 
                    />
                  </TabsContent>
                  
                  <TabsContent value="padel" className="mt-0">
                    <div className="bg-gray-50 p-6 rounded-lg mb-8">
                      <h3 className="text-xl font-bold mb-3">{t("programs.padel")}</h3>
                      <p className="mb-4">
                        {t("programs.padel.description")}
                      </p>
                      <Link to="/padel" className="inline-flex items-center text-ath-clay font-medium hover:underline">
                        {t("programs.explore.padel")}
                      </Link>
                    </div>
                    
                    <ProgramsSection 
                      title={t("programs.padel")} 
                      subtitle={t("programs.padel.description")} 
                      categories={padelCategories} 
                      categoryCollapsible={true} 
                    />
                  </TabsContent>
                  
                  <TabsContent value="pickleball" className="mt-0">
                    <div className="bg-gray-50 p-6 rounded-lg mb-8">
                      <h3 className="text-xl font-bold mb-3">{t("programs.pickleball")}</h3>
                      <p className="mb-4">
                        {t("programs.pickleball.description")}
                      </p>
                      <Link to="/pickleball" className="inline-flex items-center text-ath-clay font-medium hover:underline">
                        {t("programs.explore.pickleball")}
                      </Link>
                    </div>
                    
                    <ProgramsSection 
                      title={t("programs.pickleball")} 
                      subtitle={t("programs.pickleball.description")} 
                      categories={pickleballCategories} 
                      categoryCollapsible={true} 
                    />
                  </TabsContent>
                  
                  <TabsContent value="touchtennis" className="mt-0">
                    <div className="bg-gray-50 p-6 rounded-lg mb-8">
                      <h3 className="text-xl font-bold mb-3">{t("programs.touchtennis")}</h3>
                      <p className="mb-4">
                        {t("programs.touchtennis.description")}
                      </p>
                      <Link to="/touchtennis" className="inline-flex items-center text-ath-clay font-medium hover:underline">
                        {t("programs.explore.touchtennis")}
                      </Link>
                    </div>
                    
                    <ProgramsSection 
                      title={t("programs.touchtennis")} 
                      subtitle={t("programs.touchtennis.description")} 
                      categories={touchTennisCategories} 
                      categoryCollapsible={true} 
                    />
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </RevealAnimation>
          
          <RevealAnimation delay={200}>
            <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm mb-12">
              <h2 className="text-2xl font-bold mb-4">{t("programs.why.ath")}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">{t("programs.feature.tech")}</h3>
                  <p className="text-gray-700">{t("programs.feature.tech.desc")}</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">{t("programs.feature.experts")}</h3>
                  <p className="text-gray-700">{t("programs.feature.experts.desc")}</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">{t("programs.feature.integrated")}</h3>
                  <p className="text-gray-700">{t("programs.feature.integrated.desc")}</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">{t("programs.feature.personalization")}</h3>
                  <p className="text-gray-700">{t("programs.feature.personalization.desc")}</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Link to="/contact" className="inline-flex items-center bg-ath-clay text-white px-6 py-3 rounded-full font-medium transition-colors hover:bg-ath-clay/90">
                  {t("programs.request.info")}
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
