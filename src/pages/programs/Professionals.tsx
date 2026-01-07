
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import RevealAnimation from '@/components/RevealAnimation';
import VickiUnifiedBadge from '@/components/VickiUnifiedBadge';
import ButtonLink from '@/components/ButtonLink';
import ContactSection from '@/components/ContactSection';
import { createStandardVimeoEmbed } from '@/utils/videoUtils';

const ProfessionalsProgram = () => {
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
            title={t('programs.professionals.title')}
            subtitle={t('programs.professionals.subtitle')}
            imageSrc="/lovable-uploads/53047a4d-087d-4e68-942b-d441b33bf6ab.png"
            vimeoEmbed={createStandardVimeoEmbed('1071006843?h=76f8bd542b')}
            buttons={[
              { text: t('programs.professionals.hero.cta1'), href: '/contact' },
              { text: t('programs.professionals.hero.cta2'), href: '/contact', variant: 'outline' }
            ]}
            contentPosition="left"
            overlayOpacity="medium"
          />
          
          <div className="w-full bg-black py-16 relative" style={{ height: '300px' }}>
            <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
              <div className="flex items-center mb-2">
                <h2 className="text-white text-lg font-display mr-3">{t('programs.professionals.banner.title')}</h2>
                <p className="text-white text-lg font-swiss max-w-3xl">
                  {t('programs.professionals.banner.subtitle')}
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
                <h2 className="text-3xl font-swiss">{t('programs.professionals.pageTitle')}</h2>
                <VickiUnifiedBadge level="pro" />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="text-lg mb-6 font-swiss">
                {t('programs.professionals.intro')}
              </p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-4 font-swiss">
                {t('programs.professionals.desc1')}
              </p>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <p className="mb-4 font-swiss">
                {t('programs.professionals.desc2')}
              </p>
            </RevealAnimation>
            <RevealAnimation delay={250}>
              <p className="mb-4 font-swiss">
                <strong>{t('programs.professionals.collaboration.title')}</strong> {t('programs.professionals.collaboration.desc')}
              </p>
            </RevealAnimation>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <RevealAnimation delay={350} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">{t('programs.professionals.features.title')}</h3>
              <ul className="list-disc list-inside space-y-2 font-swiss">
                <li>{t('programs.professionals.features.feature1')}</li>
                <li>{t('programs.professionals.features.feature2')}</li>
                <li>{t('programs.professionals.features.feature3')}</li>
                <li>{t('programs.professionals.features.feature4')}</li>
                <li>{t('programs.professionals.features.feature5')}</li>
                <li>{t('programs.professionals.features.feature6')}</li>
                <li>{t('programs.professionals.features.feature7')}</li>
              </ul>
            </RevealAnimation>
            
            <RevealAnimation delay={400} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">{t('programs.professionals.advantages.title')}</h3>
              <div className="mb-6">
                <ul className="list-disc list-inside space-y-2 font-swiss">
                  <li>{t('programs.professionals.advantages.advantage1')}</li>
                  <li>{t('programs.professionals.advantages.advantage2')}</li>
                  <li>{t('programs.professionals.advantages.advantage3')}</li>
                  <li>{t('programs.professionals.advantages.advantage4')}</li>
                  <li>{t('programs.professionals.advantages.advantage5')}</li>
                  <li>{t('programs.professionals.advantages.advantage6')}</li>
                </ul>
              </div>
              
              <div className="mt-6">
                <ButtonLink 
                  href="/contact" 
                  variant="athOutline"
                  showArrow={true}
                >
                  {t('programs.professionals.cta')}
                </ButtonLink>
              </div>
            </RevealAnimation>
          </div>
        </div>
        
        <ContactSection 
          title={t('programs.professionals.contact.title')} 
          subtitle={t('programs.professionals.contact.subtitle')}
          address="Via Carlo D'Adda 6/8, 20143 Milano (MI)"
          email="info@advancedtennishub.com"
          phone="+39 02 123 4567"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default ProfessionalsProgram;
