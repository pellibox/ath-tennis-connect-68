import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import JoinRevolutionSection from '@/components/JoinRevolutionSection';
import { useLanguage } from '@/contexts/LanguageContext';
import ButtonLink from '@/components/ButtonLink';
import { Award, Users, BarChart, Target, Layers, Headphones } from 'lucide-react';
import RevealAnimation from '@/components/RevealAnimation';
import Logo from '@/components/Logo';
import { useIsMobile } from '@/hooks/use-mobile';
import { useProfile } from '@/contexts/ProfileContext';
import { getVimeoEmbed } from '@/utils/videoUtils';
import StandardHeroVideo from '@/components/StandardHeroVideo';

const AboutPage = () => {
  const { t, language } = useLanguage();
  const { userGender, userType } = useProfile();
  const isMobile = useIsMobile();
  const [heroLogoOpacity, setHeroLogoOpacity] = useState<number>(1);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  const iconSize = isMobile ? 40 : 64;
  const iconContainerSize = isMobile ? "w-20 h-20" : "w-36 h-36";
  
  const vimeoEmbed = getVimeoEmbed(userGender, userType);
  
  const handleLogoOpacityChange = (opacity: number) => {
    setHeroLogoOpacity(opacity);
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <Header headerLogoOpacity={heroLogoOpacity} />
      
      <main className="flex-grow">
        <StandardHeroVideo 
          vimeoEmbed={vimeoEmbed}
          title={t('about.label')}
          subtitle={t('about.heroSubtitle')}
          onLogoOpacityChange={handleLogoOpacityChange}
        />
        
        <div className="bg-gradient-to-r from-ath-clay/5 to-white py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <RevealAnimation>
                <h2 className="text-3xl md:text-4xl font-display mb-6 text-ath-clay">{t('about.challenges.title')}</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {t('about.challenges.intro')}
                </p>
              </RevealAnimation>
            </div>
          </div>
        </div>
        
        <AboutSection 
          title={t('about.challenge1.title')}
          subtitle={t('about.challenge1.subtitle')}
          description={
            <div className="space-y-4">
              <p className="font-medium text-ath-clay">{t('about.challenge')}</p>
              <p>{t('about.challenge1.problem')}</p>
              <p className="font-medium text-ath-clay">{t('about.solution')}</p>
              <p>{t('about.challenge1.solution')}</p>
            </div>
          }
          icon={
            <div className={`${iconContainerSize} bg-white rounded-full flex items-center justify-center shadow-inner`}>
              <Headphones size={iconSize} className="text-ath-clay" />
            </div>
          }
          accent="clay"
          elegant={true}
        />
        
        <AboutSection 
          title={t('about.challenge2.title')}
          subtitle={t('about.challenge2.subtitle')}
          description={
            <div className="space-y-4">
              <p className="font-medium text-ath-clay">{t('about.challenge')}</p>
              <p>{t('about.challenge2.problem')}</p>
              <p className="font-medium text-ath-clay">{t('about.solution')}</p>
              <p>{t('about.challenge2.solution')}</p>
            </div>
          }
          icon={
            <div className={`${iconContainerSize} bg-white rounded-full flex items-center justify-center shadow-inner`}>
              <Users size={iconSize} className="text-ath-clay" />
            </div>
          }
          reversed={true}
          accent="clay"
          elegant={true}
          className="bg-white"
        />
        
        <AboutSection 
          title={t('about.challenge3.title')}
          subtitle={t('about.challenge3.subtitle')}
          description={
            <div className="space-y-4">
              <p className="font-medium text-ath-clay">{t('about.challenge')}</p>
              <p>{t('about.challenge3.problem')}</p>
              <p className="font-medium text-ath-clay">{t('about.solution')}</p>
              <p>{t('about.challenge3.solution')}</p>
            </div>
          }
          icon={
            <div className={`${iconContainerSize} bg-white rounded-full flex items-center justify-center shadow-inner`}>
              <BarChart size={iconSize} className="text-ath-clay" />
            </div>
          }
          accent="clay"
          elegant={true}
        />
        
        <AboutSection 
          title={t('about.challenge4.title')}
          subtitle={t('about.challenge4.subtitle')}
          description={
            <div className="space-y-4">
              <p className="font-medium text-ath-clay">{t('about.challenge')}</p>
              <p>{t('about.challenge4.problem')}</p>
              <p className="font-medium text-ath-clay">{t('about.solution')}</p>
              <p>{t('about.challenge4.solution')}</p>
            </div>
          }
          icon={
            <div className={`${iconContainerSize} bg-white rounded-full flex items-center justify-center shadow-inner`}>
              <Target size={iconSize} className="text-ath-clay" />
            </div>
          }
          reversed={true}
          accent="clay"
          elegant={true}
          className="bg-white"
        />
        
        <AboutSection 
          title={t('about.challenge5.title')}
          subtitle={t('about.challenge5.subtitle')}
          description={
            <div className="space-y-4">
              <p className="font-medium text-ath-clay">{t('about.challenge')}</p>
              <p>{t('about.challenge5.problem')}</p>
              <p className="font-medium text-ath-clay">{t('about.solution')}</p>
              <p>{t('about.challenge5.solution')}</p>
            </div>
          }
          icon={
            <div className={`${iconContainerSize} bg-white rounded-full flex items-center justify-center shadow-inner`}>
              <Layers size={iconSize} className="text-ath-clay" />
            </div>
          }
          accent="clay"
          elegant={true}
        />
        
        <div className="bg-ath-clay text-white py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <RevealAnimation>
                <h2 className="text-3xl md:text-4xl font-display mb-8">{t('about.approach.title')}</h2>
                <p className="text-white/90 leading-relaxed text-lg mb-10">
                  {t('about.approach.desc')}
                </p>
                <div className="flex justify-center">
                  <ButtonLink href="/method" variant="secondary">
                    {t('about.approach.cta')}
                  </ButtonLink>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
        
        <JoinRevolutionSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;