
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
import { getVimeoEmbed, getPersonalizedMethodDescription } from '@/utils/videoUtils';
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
  const [activeTab, setActiveTab] = useState<'tennis' | 'padel' | 'pickleball' | 'touchtennis'>(
    sport === 'padel' ? 'padel' : 
    sport === 'pickleball' ? 'pickleball' : 
    sport === 'touchtennis' ? 'touchtennis' : 
    'tennis'
  );
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const vimeoEmbed = getVimeoEmbed(userGender, userType, true, false, sport);
  
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
      return t('programs.defaultSubtitle');
    }

    const subtitleKeys: Record<string, string> = {
      junior: 'programs.juniorSubtitle',
      performance: 'programs.performanceSubtitle',
      professional: 'programs.professionalSubtitle',
      coach: 'programs.coachSubtitle',
      parent: 'programs.parentSubtitle',
      adult: 'programs.adultSubtitle'
    };

    return t(subtitleKeys[userType] || 'programs.defaultSubtitle');
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      
      <main className="flex-grow pt-0">
        <StandardHeroVideo 
          vimeoEmbed={vimeoEmbed}
          title={t('programs.title')}
          subtitle={getPersonalizedSubtitle()}
        />
        
        <section className="py-8 md:py-16 px-4 md:px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <RevealAnimation>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h2 className={`text-2xl md:text-4xl font-display ${isMobile ? "mb-4" : ""}`}>{t('programs.methodBased')}</h2>
                
                {userType && (
                  <button 
                    onClick={() => setShowAllPrograms(!showAllPrograms)}
                    className="hidden md:block px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    {showAllPrograms ? t('programs.showRelevant') : t('programs.showAll')}
                  </button>
                )}
              </div>
            </RevealAnimation>
            
            <RevealAnimation delay={100}>
              <div className="text-base md:text-lg text-gray-600 max-w-3xl mb-6 space-y-4">
                <p>
                  {t('programs.methodDescription')}
                </p>
                
                {userType && (
                  <button 
                    onClick={() => setShowAllPrograms(!showAllPrograms)}
                    className="md:hidden w-full mt-4 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    {showAllPrograms ? t('programs.showRelevant') : t('programs.showAll')}
                  </button>
                )}
                
                <div className="mt-4 md:mt-6">
                  <a href="/method" className="inline-flex items-center text-ath-clay font-medium hover:underline text-sm md:text-base">
                    {t('programs.learnMoreMethod')}
                  </a>
                </div>
              </div>
            </RevealAnimation>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-8 md:mb-12">
              <RevealAnimation delay={150} className="bg-white p-4 md:p-8 shadow-sm">
                <h3 className={`${isMobile ? "text-lg" : "text-xl"} font-medium mb-2 md:mb-4`}>{t('programs.technicalDevelopment')}</h3>
                <p className={`text-gray-600 ${isMobile ? "text-sm" : ""}`}>{t('programs.technicalDescription')}</p>
              </RevealAnimation>
              
              <RevealAnimation delay={200} className="bg-white p-4 md:p-8 shadow-sm">
                <h3 className={`${isMobile ? "text-lg" : "text-xl"} font-medium mb-2 md:mb-4`}>{t('programs.tacticalStrategy')}</h3>
                <p className={`text-gray-600 ${isMobile ? "text-sm" : ""}`}>{t('programs.tacticalDescription')}</p>
              </RevealAnimation>
              
              <RevealAnimation delay={250} className="bg-white p-4 md:p-8 shadow-sm">
                <h3 className={`${isMobile ? "text-lg" : "text-xl"} font-medium mb-2 md:mb-4`}>{t('programs.physicalPreparation')}</h3>
                <p className={`text-gray-600 ${isMobile ? "text-sm" : ""}`}>{t('programs.physicalDescription')}</p>
              </RevealAnimation>
              
              <RevealAnimation delay={300} className="bg-white p-4 md:p-8 shadow-sm">
                <h3 className={`${isMobile ? "text-lg" : "text-xl"} font-medium mb-2 md:mb-4`}>{t('programs.mentalTraining')}</h3>
                <p className={`text-gray-600 ${isMobile ? "text-sm" : ""}`}>{t('programs.mentalDescription')}</p>
              </RevealAnimation>
            </div>
          </div>
        </section>
        
        <div id="programs-section" className="bg-ath-gray py-12">
          {isMobile ? (
            <div className="mb-8">
              <h2 className="text-2xl font-display mb-6">{t('programs.select.sport')}</h2>
              <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
                <TabsList className="w-full mb-2 bg-white border border-gray-200 rounded-full p-1 flex justify-between">
                  <TabsTrigger 
                    value="tennis" 
                    className="flex-1 rounded-full data-[state=active]:bg-ath-clay data-[state=active]:text-white px-4 py-2"
                  >
                    {t('nav.tennis')}
                  </TabsTrigger>
                  <TabsTrigger 
                    value="padel" 
                    className="flex-1 rounded-full data-[state=active]:bg-ath-clay data-[state=active]:text-white px-4 py-2"
                  >
                    {t('nav.padel')}
                  </TabsTrigger>
                </TabsList>
                <TabsList className="w-full bg-white border border-gray-200 rounded-full p-1 flex justify-between">
                  <TabsTrigger 
                    value="pickleball" 
                    className="flex-1 rounded-full data-[state=active]:bg-ath-clay data-[state=active]:text-white px-4 py-2"
                  >
                    {t('nav.pickleball')}
                  </TabsTrigger>
                  <TabsTrigger 
                    value="touchtennis" 
                    className="flex-1 rounded-full data-[state=active]:bg-ath-clay data-[state=active]:text-white px-4 py-2"
                  >
                    {t('nav.touchtennis')}
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
          title={t('programs.athAdvantage')}
          description={
            <div className="space-y-4">
              <p>
                {t('programs.advantageDescription')}
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-2">{t('programs.technicalDevelopment')}</h3>
              <p>
                {t('programs.technicalDescription')}
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-2">{t('programs.tacticalStrategy')}</h3>
              <p>
                {t('programs.tacticalDescription')}
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-2">{t('programs.physicalPreparation')}</h3>
              <p>
                {t('programs.physicalDescription')}
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-2">{t('programs.mentalTraining')}</h3>
              <p>
                {t('programs.mentalDescription')}
              </p>
              <p>
                {t('programs.dataApproachDescription')}
              </p>
              <p>
                {t('programs.joinRevolutionDescription')}
              </p>
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
