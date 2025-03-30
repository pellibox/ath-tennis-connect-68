
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useProfile } from '@/contexts/ProfileContext';
import RevealAnimation from '@/components/RevealAnimation';
import { getVimeoEmbed, getPersonalizedMethodDescription } from '@/utils/videoUtils';
import { useIsMobile } from '@/hooks/use-mobile';
import StandardHeroVideo from '@/components/StandardHeroVideo';
import { Settings, Target, Activity, Brain } from 'lucide-react';

const MethodPage = () => {
  const { t } = useLanguage();
  const { userGender, userType } = useProfile();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const vimeoEmbed = getVimeoEmbed(userGender, userType, false);

  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      
      <main className="flex-grow">
        <StandardHeroVideo 
          vimeoEmbed={vimeoEmbed}
          titleKey="method.title"
          subtitleKey="method.tagline"
        />
        
        <section className="py-16 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <RevealAnimation>
              <h2 className="text-3xl md:text-4xl font-display mb-6 text-center md:text-left">
                {getPersonalizedMethodDescription(userType)}
              </h2>
            </RevealAnimation>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
              <RevealAnimation delay={100}>
                <div>
                  <h3 className="text-2xl font-display mb-4 text-center md:text-left">{t("method.dataApproach.title")}</h3>
                  <p className="text-lg text-gray-600 mb-4 text-center md:text-left">
                    {t("method.dataApproach.desc1")}
                  </p>
                  <p className="text-lg text-gray-600 text-center md:text-left">
                    {t("method.dataApproach.desc2")}
                  </p>
                </div>
              </RevealAnimation>
              
              <RevealAnimation delay={200}>
                <div>
                  <h3 className="text-2xl font-display mb-4 text-center md:text-left">{t("method.coaching.title")}</h3>
                  <p className="text-lg text-gray-600 mb-4 text-center md:text-left">
                    {t("method.coaching.desc1")}
                  </p>
                  <p className="text-lg text-gray-600 text-center md:text-left">
                    {t("method.coaching.desc2")}
                  </p>
                </div>
              </RevealAnimation>
            </div>
            
            {userType && (
              <RevealAnimation>
                <div className="bg-ath-gray p-8 rounded-lg mb-16">
                  <h3 className="text-2xl font-display mb-4 text-center md:text-left">
                    {userType === 'coach' ? t("method.forCoaches") : 
                     userType === 'parent' ? t("method.forParents") : 
                     userType === 'professional' ? t("method.forProfessionals") : 
                     userType === 'performance' ? t("method.forPerformance") : 
                     t("method.forJuniors")}
                  </h3>
                  
                  {userType === 'professional' && (
                    <div className="space-y-4">
                      <p className="text-lg text-center md:text-left">
                        {t("method.professional.desc1")}
                      </p>
                      <p className="text-lg text-center md:text-left">
                        {t("method.professional.desc2")}
                      </p>
                      <p className="text-lg text-center md:text-left">
                        {t("method.professional.desc3")}
                      </p>
                    </div>
                  )}
                  
                  {userType === 'performance' && (
                    <div className="space-y-4">
                      <p className="text-lg text-center md:text-left">
                        {t("method.performance.desc1")}
                      </p>
                      <p className="text-lg text-center md:text-left">
                        {t("method.performance.desc2")}
                      </p>
                      <p className="text-lg text-center md:text-left">
                        {t("method.performance.desc3")}
                      </p>
                    </div>
                  )}
                  
                  {userType === 'junior' && (
                    <div className="space-y-4">
                      <p className="text-lg text-center md:text-left">
                        {t("method.junior.desc1")}
                      </p>
                      <p className="text-lg text-center md:text-left">
                        {t("method.junior.desc2")}
                      </p>
                      <p className="text-lg text-center md:text-left">
                        {t("method.junior.desc3")}
                      </p>
                    </div>
                  )}
                  
                  {userType === 'coach' && (
                    <div className="space-y-4">
                      <p className="text-lg text-center md:text-left">
                        {t("method.coach.desc1")}
                      </p>
                      <p className="text-lg text-center md:text-left">
                        {t("method.coach.desc2")}
                      </p>
                      <p className="text-lg text-center md:text-left">
                        {t("method.coach.desc3")}
                      </p>
                    </div>
                  )}
                  
                  {userType === 'parent' && (
                    <div className="space-y-4">
                      <p className="text-lg text-center md:text-left">
                        {t("method.parent.desc1")}
                      </p>
                      <p className="text-lg text-center md:text-left">
                        {t("method.parent.desc2")}
                      </p>
                      <p className="text-lg text-center md:text-left">
                        {t("method.parent.desc3")}
                      </p>
                    </div>
                  )}
                </div>
              </RevealAnimation>
            )}
            
            <RevealAnimation delay={300}>
              <h3 className="text-2xl font-display mb-6 text-center">{t("method.pillars.title")}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <div className="bg-gradient-to-b from-white to-ath-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-ath-clay text-white rounded-full">
                      <Settings className="w-8 h-8" />
                    </div>
                  </div>
                  <h4 className="text-xl font-medium text-center mb-3">{t("method.pillars.technical.title")}</h4>
                  <p className="text-gray-600 text-center">{t("method.pillars.technical.desc")}</p>
                </div>
                
                <div className="bg-gradient-to-b from-white to-ath-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-ath-clay text-white rounded-full">
                      <Activity className="w-8 h-8" />
                    </div>
                  </div>
                  <h4 className="text-xl font-medium text-center mb-3">{t("method.pillars.physical.title")}</h4>
                  <p className="text-gray-600 text-center">{t("method.pillars.physical.desc")}</p>
                </div>
                
                <div className="bg-gradient-to-b from-white to-ath-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-ath-clay text-white rounded-full">
                      <Brain className="w-8 h-8" />
                    </div>
                  </div>
                  <h4 className="text-xl font-medium text-center mb-3">{t("method.pillars.mental.title")}</h4>
                  <p className="text-gray-600 text-center">{t("method.pillars.mental.desc")}</p>
                </div>
                
                <div className="bg-gradient-to-b from-white to-ath-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-ath-clay text-white rounded-full">
                      <Target className="w-8 h-8" />
                    </div>
                  </div>
                  <h4 className="text-xl font-medium text-center mb-3">{t("method.pillars.tactical.title")}</h4>
                  <p className="text-gray-600 text-center">{t("method.pillars.tactical.desc")}</p>
                </div>
              </div>
            </RevealAnimation>
            
            <RevealAnimation delay={400}>
              <div className="bg-black text-white p-8 rounded-lg">
                <h3 className="text-2xl font-display mb-4 text-center md:text-left">{t("method.integration.title")}</h3>
                <p className="text-lg mb-4 text-center md:text-left">
                  {t("method.integration.desc1")}
                </p>
                <p className="text-lg text-center md:text-left">
                  {t("method.integration.desc2")}
                </p>
              </div>
            </RevealAnimation>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MethodPage;
