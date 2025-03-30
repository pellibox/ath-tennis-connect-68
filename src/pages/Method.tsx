
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useProfile } from '@/contexts/ProfileContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RevealAnimation from '@/components/RevealAnimation';
import { useIsMobile } from '@/hooks/use-mobile';
import { getVimeoEmbed, getPersonalizedMethodDescription } from '@/utils/videoUtils';
import VickiMonitoringBadge from '@/components/VickiMonitoringBadge';

const Method = () => {
  const { t } = useLanguage();
  const { userType, userGender } = useProfile();
  const isMobile = useIsMobile();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  const vimeoEmbed = getVimeoEmbed(userGender, userType, true);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-0">
        {/* Hero Video */}
        <div className="w-full bg-black min-h-[calc(100vw*9/16)] relative">
          <div dangerouslySetInnerHTML={{ __html: vimeoEmbed }} />
        </div>
        
        <div className="w-full bg-black py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white text-xl md:text-2xl font-swiss uppercase mb-2">
              {t('method.title')}
            </h2>
            <p className="text-white text-xl md:text-2xl opacity-90 font-swiss max-w-3xl drop-shadow-md">
              {t('method.tagline')}
            </p>
            <div className="mt-6">
              <VickiMonitoringBadge level="elite" className="bg-opacity-20 border-opacity-30 text-white" />
            </div>
          </div>
        </div>
        
        {/* Method Intro */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <RevealAnimation>
              <div>
                <h2 className="text-2xl md:text-3xl font-display mb-6">{t('method.dataApproach.title')}</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">{t('method.dataApproach.desc1')}</p>
                  <p className="text-gray-700">{t('method.dataApproach.desc2')}</p>
                </div>
              </div>
            </RevealAnimation>
            
            <RevealAnimation delay={150}>
              <div>
                <h2 className="text-2xl md:text-3xl font-display mb-6">{t('method.coaching.title')}</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">{t('method.coaching.desc1')}</p>
                  <p className="text-gray-700">{t('method.coaching.desc2')}</p>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </section>
        
        {/* The Four Pillars */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <RevealAnimation>
              <h2 className="text-2xl md:text-3xl font-display mb-10 text-center">{t('method.pillars.title')}</h2>
            </RevealAnimation>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <RevealAnimation delay={100} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">{t('method.pillars.technical.title')}</h3>
                <p className="text-gray-700">{t('method.pillars.technical.desc')}</p>
              </RevealAnimation>
              
              <RevealAnimation delay={200} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">{t('method.pillars.physical.title')}</h3>
                <p className="text-gray-700">{t('method.pillars.physical.desc')}</p>
              </RevealAnimation>
              
              <RevealAnimation delay={300} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">{t('method.pillars.mental.title')}</h3>
                <p className="text-gray-700">{t('method.pillars.mental.desc')}</p>
              </RevealAnimation>
              
              <RevealAnimation delay={400} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">{t('method.pillars.tactical.title')}</h3>
                <p className="text-gray-700">{t('method.pillars.tactical.desc')}</p>
              </RevealAnimation>
            </div>
            
            <RevealAnimation delay={500}>
              <div className="mt-12 text-center max-w-4xl mx-auto">
                <h2 className="text-2xl font-display mb-6">{t('method.integration.title')}</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">{t('method.integration.desc1')}</p>
                  <p className="text-gray-700">{t('method.integration.desc2')}</p>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </section>
        
        {/* Method Applications */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <RevealAnimation>
              <h2 className="text-2xl md:text-3xl font-display mb-10 text-center">
                {getPersonalizedMethodDescription(userType, t)}
              </h2>
            </RevealAnimation>
            
            <Tabs defaultValue={userType || "professional"} className="w-full">
              <TabsList className={`mb-8 mx-auto flex justify-center flex-wrap ${isMobile ? 'gap-2' : ''}`}>
                <TabsTrigger 
                  value="professional" 
                  className={`rounded-full px-5 py-2.5 data-[state=active]:bg-ath-clay data-[state=active]:text-white ${isMobile ? 'text-sm' : ''}`}
                >
                  {t('method.forProfessionals')}
                </TabsTrigger>
                <TabsTrigger 
                  value="performance" 
                  className={`rounded-full px-5 py-2.5 data-[state=active]:bg-ath-clay data-[state=active]:text-white ${isMobile ? 'text-sm' : ''}`}
                >
                  {t('method.forPerformance')}
                </TabsTrigger>
                <TabsTrigger 
                  value="junior" 
                  className={`rounded-full px-5 py-2.5 data-[state=active]:bg-ath-clay data-[state=active]:text-white ${isMobile ? 'text-sm' : ''}`}
                >
                  {t('method.forJuniors')}
                </TabsTrigger>
                <TabsTrigger 
                  value="coach" 
                  className={`rounded-full px-5 py-2.5 data-[state=active]:bg-ath-clay data-[state=active]:text-white ${isMobile ? 'text-sm' : ''}`}
                >
                  {t('method.forCoaches')}
                </TabsTrigger>
                <TabsTrigger 
                  value="parent" 
                  className={`rounded-full px-5 py-2.5 data-[state=active]:bg-ath-clay data-[state=active]:text-white ${isMobile ? 'text-sm' : ''}`}
                >
                  {t('method.forParents')}
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="professional" className="mt-4 p-6 bg-gray-50 rounded-lg">
                <div className="space-y-4">
                  <p className="text-gray-700">{t('method.professional.desc1')}</p>
                  <p className="text-gray-700">{t('method.professional.desc2')}</p>
                  <p className="text-gray-700">{t('method.professional.desc3')}</p>
                </div>
              </TabsContent>
              
              <TabsContent value="performance" className="mt-4 p-6 bg-gray-50 rounded-lg">
                <div className="space-y-4">
                  <p className="text-gray-700">{t('method.performance.desc1')}</p>
                  <p className="text-gray-700">{t('method.performance.desc2')}</p>
                  <p className="text-gray-700">{t('method.performance.desc3')}</p>
                </div>
              </TabsContent>
              
              <TabsContent value="junior" className="mt-4 p-6 bg-gray-50 rounded-lg">
                <div className="space-y-4">
                  <p className="text-gray-700">{t('method.junior.desc1')}</p>
                  <p className="text-gray-700">{t('method.junior.desc2')}</p>
                  <p className="text-gray-700">{t('method.junior.desc3')}</p>
                </div>
              </TabsContent>
              
              <TabsContent value="coach" className="mt-4 p-6 bg-gray-50 rounded-lg">
                <div className="space-y-4">
                  <p className="text-gray-700">{t('method.coach.desc1')}</p>
                  <p className="text-gray-700">{t('method.coach.desc2')}</p>
                  <p className="text-gray-700">{t('method.coach.desc3')}</p>
                </div>
              </TabsContent>
              
              <TabsContent value="parent" className="mt-4 p-6 bg-gray-50 rounded-lg">
                <div className="space-y-4">
                  <p className="text-gray-700">{t('method.parent.desc1')}</p>
                  <p className="text-gray-700">{t('method.parent.desc2')}</p>
                  <p className="text-gray-700">{t('method.parent.desc3')}</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Method;
