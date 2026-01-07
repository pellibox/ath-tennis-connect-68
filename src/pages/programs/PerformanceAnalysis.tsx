
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import RevealAnimation from '@/components/RevealAnimation';
import VickiUnifiedBadge from '@/components/VickiUnifiedBadge';
import ButtonLink from '@/components/ButtonLink';
import ContactSection from '@/components/ContactSection';

const PerformanceAnalysisProgram = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="relative">
          <Hero 
            title={t('programs.performanceAnalysis.title')}
            subtitle={t('programs.performanceAnalysis.subtitle')}
            imageSrc="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=2070&auto=format&fit=crop"
            vimeoEmbed='<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068785493?h=fe90d50dae&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Performance Analysis"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
            buttons={[
              { text: t('programs.performanceAnalysis.hero.cta1'), href: '/contact' },
              { text: t('programs.performanceAnalysis.hero.cta2'), href: '/contact', variant: 'outline' }
            ]}
            contentPosition="left"
            overlayOpacity="medium"
          />
          
          <div className="w-full bg-black py-16 relative" style={{ height: '300px' }}>
            <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
              <div className="flex items-center mb-2">
                <h2 className="text-white text-lg font-display mr-3">{t('programs.performanceAnalysis.banner.title')}</h2>
                <p className="text-white text-lg font-swiss max-w-3xl">
                  {t('programs.performanceAnalysis.banner.subtitle')}
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <VickiUnifiedBadge level="pro" className="bg-opacity-20 border-opacity-30 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-12">
            <RevealAnimation>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h2 className="text-3xl font-swiss">{t('programs.performanceAnalysis.pageTitle')}</h2>
                <VickiUnifiedBadge level="pro" />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="text-lg mb-6 font-swiss">
                {t('programs.performanceAnalysis.intro')}
              </p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-4 font-swiss">
                {t('programs.performanceAnalysis.desc1')}
              </p>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <p className="mb-4 font-swiss">
                {t('programs.performanceAnalysis.desc2')}
              </p>
            </RevealAnimation>
            <RevealAnimation delay={250}>
              <p className="mb-4 font-swiss">
                <strong>{t('programs.performanceAnalysis.complete.title')}</strong> {t('programs.performanceAnalysis.complete.desc')}
              </p>
            </RevealAnimation>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <RevealAnimation delay={350} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">{t('programs.performanceAnalysis.features.title')}</h3>
              <ul className="list-disc list-inside space-y-2 font-swiss">
                <li>{t('programs.performanceAnalysis.features.feature1')}</li>
                <li>{t('programs.performanceAnalysis.features.feature2')}</li>
                <li>{t('programs.performanceAnalysis.features.feature3')}</li>
                <li>{t('programs.performanceAnalysis.features.feature4')}</li>
                <li>{t('programs.performanceAnalysis.features.feature5')}</li>
                <li>{t('programs.performanceAnalysis.features.feature6')}</li>
                <li>{t('programs.performanceAnalysis.features.feature7')}</li>
                <li>{t('programs.performanceAnalysis.features.feature8')}</li>
              </ul>
            </RevealAnimation>
            
            <RevealAnimation delay={400} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">{t('programs.performanceAnalysis.benefits.title')}</h3>
              <div className="mb-6">
                <ul className="list-disc list-inside space-y-2 font-swiss">
                  <li>{t('programs.performanceAnalysis.benefits.benefit1')}</li>
                  <li>{t('programs.performanceAnalysis.benefits.benefit2')}</li>
                  <li>{t('programs.performanceAnalysis.benefits.benefit3')}</li>
                  <li>{t('programs.performanceAnalysis.benefits.benefit4')}</li>
                  <li>{t('programs.performanceAnalysis.benefits.benefit5')}</li>
                  <li>{t('programs.performanceAnalysis.benefits.benefit6')}</li>
                </ul>
              </div>
              
              <div className="mt-6">
                <ButtonLink 
                  href="/contact" 
                  variant="athOutline"
                  showArrow={true}
                >
                  {t('programs.performanceAnalysis.cta')}
                </ButtonLink>
              </div>
            </RevealAnimation>
          </div>
        </div>
        
        <ContactSection 
          title={t('programs.performanceAnalysis.contact.title')} 
          subtitle={t('programs.performanceAnalysis.contact.subtitle')}
          address="Via Carlo D'Adda 6/8, 20143 Milano (MI)"
          email="info@advancedtennishub.com"
          phone="+39 02 123 4567"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default PerformanceAnalysisProgram;
