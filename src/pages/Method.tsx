import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useProfile } from '@/contexts/ProfileContext';
import RevealAnimation from '@/components/RevealAnimation';
import { getVimeoEmbed } from '@/utils/videoUtils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Activity, Target, Brain, Settings } from 'lucide-react';
import StandardHeroVideo from '@/components/StandardHeroVideo';

const MethodPage = () => {
  const { t } = useLanguage();
  const { userGender, userType } = useProfile();
  const isMobile = useIsMobile();
  const [heroLogoOpacity, setHeroLogoOpacity] = useState<number>(1);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const vimeoEmbed = getVimeoEmbed(userGender, userType, false);
  
  const handleLogoOpacityChange = (opacity: number) => {
    setHeroLogoOpacity(opacity);
  };

  const getUserTypeTitle = () => {
    switch(userType) {
      case 'coach': return t('method.forCoaches');
      case 'parent': return t('method.forParents');
      case 'professional': return t('method.forProfessionals');
      case 'performance': return t('method.forPerformance');
      default: return t('method.forJuniors');
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <Header headerLogoOpacity={heroLogoOpacity} />
      
      <main className="flex-grow">
        <StandardHeroVideo 
          vimeoEmbed={vimeoEmbed}
          title={t('method.label')}
          subtitle={t('method.heroSubtitle')}
          onLogoOpacityChange={handleLogoOpacityChange}
        />
        
        <section className="py-16 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
              <RevealAnimation delay={100}>
                <div>
                  <h3 className="text-2xl font-display mb-4 text-center md:text-left">{t('method.dataApproach')}</h3>
                  <p className="text-lg text-gray-600 mb-4 text-center md:text-left">
                    {t('method.dataApproachDesc1')}
                  </p>
                  <p className="text-lg text-gray-600 text-center md:text-left">
                    {t('method.dataApproachDesc2')}
                  </p>
                </div>
              </RevealAnimation>
              
              <RevealAnimation delay={200}>
                <div>
                  <h3 className="text-2xl font-display mb-4 text-center md:text-left">{t('method.personalizedCoaching')}</h3>
                  <p className="text-lg text-gray-600 mb-4 text-center md:text-left">
                    {t('method.personalizedCoachingDesc1')}
                  </p>
                  <p className="text-lg text-gray-600 text-center md:text-left">
                    {t('method.personalizedCoachingDesc2')}
                  </p>
                </div>
              </RevealAnimation>
            </div>
            
            {userType && (
              <RevealAnimation>
                <div className="bg-ath-gray p-8 rounded-lg mb-16">
                  <h3 className="text-2xl font-display mb-4 text-center md:text-left">
                    {getUserTypeTitle()}
                  </h3>
                  
                  {userType === 'professional' && (
                    <div className="space-y-4">
                      <p className="text-lg text-center md:text-left">{t('method.professional.p1')}</p>
                      <p className="text-lg text-center md:text-left">{t('method.professional.p2')}</p>
                      <p className="text-lg text-center md:text-left">{t('method.professional.p3')}</p>
                    </div>
                  )}
                  
                  {userType === 'performance' && (
                    <div className="space-y-4">
                      <p className="text-lg text-center md:text-left">{t('method.performance.p1')}</p>
                      <p className="text-lg text-center md:text-left">{t('method.performance.p2')}</p>
                      <p className="text-lg text-center md:text-left">{t('method.performance.p3')}</p>
                    </div>
                  )}
                  
                  {userType === 'junior' && (
                    <div className="space-y-4">
                      <p className="text-lg text-center md:text-left">{t('method.junior.p1')}</p>
                      <p className="text-lg text-center md:text-left">{t('method.junior.p2')}</p>
                      <p className="text-lg text-center md:text-left">{t('method.junior.p3')}</p>
                    </div>
                  )}
                  
                  {userType === 'coach' && (
                    <div className="space-y-4">
                      <p className="text-lg text-center md:text-left">{t('method.coach.p1')}</p>
                      <p className="text-lg text-center md:text-left">{t('method.coach.p2')}</p>
                      <p className="text-lg text-center md:text-left">{t('method.coach.p3')}</p>
                    </div>
                  )}
                  
                  {userType === 'parent' && (
                    <div className="space-y-4">
                      <p className="text-lg text-center md:text-left">{t('method.parent.p1')}</p>
                      <p className="text-lg text-center md:text-left">{t('method.parent.p2')}</p>
                      <p className="text-lg text-center md:text-left">{t('method.parent.p3')}</p>
                    </div>
                  )}
                </div>
              </RevealAnimation>
            )}
            
            <RevealAnimation delay={300}>
              <h3 className="text-2xl font-display mb-6 text-center">{t('method.pillars')}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <div className="bg-gradient-to-b from-white to-ath-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-ath-clay text-white rounded-full">
                      <Settings className="w-8 h-8" />
                    </div>
                  </div>
                  <h4 className="text-xl font-medium text-center mb-3">{t('method.pillar.technique')}</h4>
                  <p className="text-gray-600 text-center">{t('method.pillar.technique.desc')}</p>
                </div>
                
                <div className="bg-gradient-to-b from-white to-ath-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-ath-clay text-white rounded-full">
                      <Activity className="w-8 h-8" />
                    </div>
                  </div>
                  <h4 className="text-xl font-medium text-center mb-3">{t('method.pillar.athletic')}</h4>
                  <p className="text-gray-600 text-center">{t('method.pillar.athletic.desc')}</p>
                </div>
                
                <div className="bg-gradient-to-b from-white to-ath-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-ath-clay text-white rounded-full">
                      <Brain className="w-8 h-8" />
                    </div>
                  </div>
                  <h4 className="text-xl font-medium text-center mb-3">{t('method.pillar.mental')}</h4>
                  <p className="text-gray-600 text-center">{t('method.pillar.mental.desc')}</p>
                </div>
                
                <div className="bg-gradient-to-b from-white to-ath-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-ath-clay text-white rounded-full">
                      <Target className="w-8 h-8" />
                    </div>
                  </div>
                  <h4 className="text-xl font-medium text-center mb-3">{t('method.pillar.tactical')}</h4>
                  <p className="text-gray-600 text-center">{t('method.pillar.tactical.desc')}</p>
                </div>
              </div>
            </RevealAnimation>
            
            <RevealAnimation delay={400}>
              <div className="bg-black text-white p-8 rounded-lg">
                <h3 className="text-2xl font-display mb-4 text-center md:text-left">{t('method.integration')}</h3>
                <p className="text-lg mb-4 text-center md:text-left">
                  {t('method.integration.p1')}
                </p>
                <p className="text-lg text-center md:text-left">
                  {t('method.integration.p2')}
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