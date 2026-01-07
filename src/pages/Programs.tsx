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
    
    if (sport) {
      setActiveTab(sport as 'tennis' | 'padel' | 'pickleball' | 'touchtennis');
    }
    
    const timer = setTimeout(() => {
      setContentReady(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [sport]);

  const vimeoEmbed = getVimeoEmbed(userGender, userType, true, false, sport);
  
  const { filteredCategories, title, subtitle } = ProgramFilters({ 
    userType, 
    showAllPrograms, 
    sport: activeTab 
  });

  const handleTabChange = (value: string) => {
    setActiveTab(value as 'tennis' | 'padel' | 'pickleball' | 'touchtennis');
    
    if (value === 'tennis' || value === 'padel' || value === 'pickleball' || value === 'touchtennis') {
      updateSport(value as 'tennis' | 'padel' | 'pickleball' | 'touchtennis');
    }
    
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
      return t('programs.subtitle.default');
    }

    switch (userType) {
      case 'junior':
        return t('programs.subtitle.junior');
      case 'performance':
        return t('programs.subtitle.performance');
      case 'professional':
        return t('programs.subtitle.professional');
      case 'coach':
        return t('programs.subtitle.coach');
      case 'parent':
        return t('programs.subtitle.parent');
      default:
        return t('programs.subtitle.default');
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <Header headerLogoOpacity={heroLogoOpacity} />
      
      <main className="flex-grow pt-0">
        <StandardHeroVideo 
          vimeoEmbed={vimeoEmbed}
          title={t('programs.label')}
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
              <h2 className="text-2xl font-display mb-6">{t('programs.selectSport')}</h2>
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
              <p className="text-gray-500">{t('programs.loading')}</p>
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
          title={t('programs.advantage.title')}
          description={
            <div className="space-y-4">
              <p>{t('programs.advantage.intro')}</p>
              <h3 className="text-xl font-semibold mt-6 mb-2">{t('programs.advantage.technical')}</h3>
              <p>{t('programs.advantage.technical.desc')}</p>
              <h3 className="text-xl font-semibold mt-6 mb-2">{t('programs.advantage.tactical')}</h3>
              <p>{t('programs.advantage.tactical.desc')}</p>
              <h3 className="text-xl font-semibold mt-6 mb-2">{t('programs.advantage.physical')}</h3>
              <p>{t('programs.advantage.physical.desc')}</p>
              <h3 className="text-xl font-semibold mt-6 mb-2">{t('programs.advantage.mental')}</h3>
              <p>{t('programs.advantage.mental.desc')}</p>
              <p>{t('programs.advantage.datadriven')}</p>
              <p>{t('programs.advantage.join')}</p>
            </div>
          }
          image="https://images.unsplash.com/photo-1531315396756-905d68d21b56"
          buttons={[
            { text: t('programs.bookTrial'), href: '/contact' }
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