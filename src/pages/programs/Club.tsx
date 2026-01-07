
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

const ClubProgram = () => {
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
            title={t('programs.club.title')}
            subtitle={t('programs.club.subtitle')}
            imageSrc="https://images.unsplash.com/photo-1570767603657-2aa87c9749a0?q=80&w=2070&auto=format&fit=crop"
            vimeoEmbed={createStandardVimeoEmbed('867339842')}
            buttons={[
              { text: t('programs.club.hero.cta1'), href: '/contact' },
              { text: t('programs.club.hero.cta2'), href: '/contact', variant: 'outline' }
            ]}
            contentPosition="left"
            overlayOpacity="medium"
          />
          
          <div className="w-full bg-black py-16 relative" style={{ height: '300px' }}>
            <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
              <div className="flex items-center mb-2">
                <h2 className="text-white text-lg font-display mr-3">{t('programs.club.banner.title')}</h2>
                <p className="text-white text-lg font-swiss max-w-3xl">
                  {t('programs.club.banner.subtitle')}
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
                <h2 className="text-3xl font-swiss">{t('programs.club.pageTitle')}</h2>
                <VickiMonitoringBadge level="pro" />
                <VickiPoweredBadge />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="text-lg mb-6 font-swiss">
                {t('programs.club.intro')}
              </p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-4 font-swiss">
                {t('programs.club.desc1')}
              </p>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <p className="font-swiss">
                {t('programs.club.desc2')}
              </p>
            </RevealAnimation>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <RevealAnimation delay={250} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">{t('programs.club.benefits.title')}</h3>
              <ul className="list-disc list-inside space-y-2 font-swiss">
                <li>{t('programs.club.benefits.benefit1')}</li>
                <li>{t('programs.club.benefits.benefit2')}</li>
                <li>{t('programs.club.benefits.benefit3')}</li>
                <li>{t('programs.club.benefits.benefit4')}</li>
                <li>{t('programs.club.benefits.benefit5')}</li>
                <li>{t('programs.club.benefits.benefit6')}</li>
              </ul>
            </RevealAnimation>
            
            <RevealAnimation delay={300} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">{t('programs.club.integration.title')}</h3>
              <ul className="list-disc list-inside space-y-2 font-swiss">
                <li>{t('programs.club.integration.item1')}</li>
                <li>{t('programs.club.integration.item2')}</li>
                <li>{t('programs.club.integration.item3')}</li>
                <li>{t('programs.club.integration.item4')}</li>
                <li>{t('programs.club.integration.item5')}</li>
                <li>{t('programs.club.integration.item6')}</li>
              </ul>
            </RevealAnimation>
          </div>
          
          <div className="mt-16">
            <RevealAnimation>
              <h3 className="text-2xl font-swiss mb-6">{t('programs.club.solutions.title')}</h3>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="mb-6 font-swiss">
                {t('programs.club.solutions.desc')}
              </p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <div className="bg-ath-clay/10 p-8 rounded-lg mb-10">
                <h4 className="text-xl font-swiss font-semibold mb-4">{t('programs.club.pricing.title')}</h4>
                <p className="text-2xl font-bold text-ath-clay mb-2">{t('programs.club.pricing.custom')}</p>
                <p className="font-swiss">
                  {t('programs.club.pricing.desc')}
                </p>
                <div className="mt-4">
                  <a 
                    href="/contact" 
                    className="inline-block bg-ath-clay text-white py-3 px-6 rounded hover:bg-ath-clay/90 transition-colors"
                  >
                    {t('programs.club.pricing.cta')}
                  </a>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
        
        <ContactSection 
          title={t('programs.club.contact.title')} 
          subtitle={t('programs.club.contact.subtitle')}
          address="Via Carlo D'Adda 6/8, Milano MI"
          email="info@advancedtennishub.com"
          phone="+39 02 123 4567"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default ClubProgram;
