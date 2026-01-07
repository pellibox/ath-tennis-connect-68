
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import RevealAnimation from '@/components/RevealAnimation';
import { UserGender, UserType, loadUserPreferences } from '@/components/UserTypeSelector';
import VickiMonitoringBadge from '@/components/VickiMonitoringBadge';
import VickiPoweredBadge from '@/components/VickiPoweredBadge';
import ContactSection from '@/components/ContactSection';
import { createStandardVimeoEmbed } from '@/utils/videoUtils';

const CoachProgram = () => {
  const { t } = useLanguage();
  const [userGender, setUserGender] = useState<UserGender | null>(null);
  const [userType, setUserType] = useState<UserType | null>(null);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const { gender, type } = loadUserPreferences();
    if (gender) setUserGender(gender);
    if (type) setUserType(type);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="relative">
          <Hero 
            title={t('programs.coach.title')}
            subtitle={t('programs.coach.subtitle')}
            imageSrc="https://images.unsplash.com/photo-1620588280212-9c4784d5d99d?q=80&w=2067&auto=format&fit=crop"
            vimeoEmbed={createStandardVimeoEmbed('1068788542?h=698f55b033')}
            buttons={[
              { text: t('programs.coach.hero.cta1'), href: '/contact' },
              { text: t('programs.coach.hero.cta2'), href: '/contact', variant: 'outline' }
            ]}
            contentPosition="left"
            overlayOpacity="medium"
          />
          
          <div className="w-full bg-black py-16 relative" style={{ height: '300px' }}>
            <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
              <div className="flex items-center mb-2">
                <h2 className="text-white text-lg font-display mr-3">{t('programs.coach.banner.title')}</h2>
                <p className="text-white text-lg font-swiss max-w-3xl">
                  {t('programs.coach.banner.subtitle')}
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <VickiMonitoringBadge level="pro" className="bg-opacity-20 border-opacity-30 text-white" />
                <VickiPoweredBadge className="bg-opacity-20 border-opacity-30 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-12">
            <RevealAnimation>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h2 className="text-3xl font-swiss">{t('programs.coach.pageTitle')}</h2>
                <VickiMonitoringBadge level="pro" />
                <VickiPoweredBadge />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="text-lg mb-6 font-swiss">{t('programs.coach.intro')}</p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-4 font-swiss">
                {t('programs.coach.desc1')}
              </p>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <p className="font-swiss">
                {t('programs.coach.desc2')}
              </p>
            </RevealAnimation>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <RevealAnimation delay={250} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">{t('programs.coach.features.title')}</h3>
              <ul className="list-disc list-inside space-y-2 font-swiss">
                <li>{t('programs.coach.features.feature1')}</li>
                <li>{t('programs.coach.features.feature2')}</li>
                <li>{t('programs.coach.features.feature3')}</li>
                <li>{t('programs.coach.features.feature4')}</li>
                <li>{t('programs.coach.features.feature5')}</li>
                <li>{t('programs.coach.features.feature6')}</li>
                <li>{t('programs.coach.features.feature7')}</li>
                <li>{t('programs.coach.features.feature8')}</li>
              </ul>
            </RevealAnimation>
            
            <RevealAnimation delay={300} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">{t('programs.coach.pricing.title')}</h3>
              <div className="mb-4">
                <p className="text-2xl font-bold text-ath-clay">{t('programs.coach.pricing.custom')}</p>
                <p className="text-sm text-gray-600">{t('programs.coach.pricing.customDesc')}</p>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                {t('programs.coach.pricing.desc')}
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-ath-clay text-white py-2 px-4 rounded hover:bg-ath-clay/90 transition-colors"
              >
                {t('programs.coach.pricing.cta')}
              </a>
            </RevealAnimation>
          </div>
        </div>
        
        <ContactSection 
          title={t('programs.coach.contact.title')} 
          subtitle={t('programs.coach.contact.subtitle')}
          address="Via Carlo D'Adda 6/8, 20143 Milano (MI)"
          email="info@advancedtennishub.com"
          phone="+39 02 123 4567"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default CoachProgram;
