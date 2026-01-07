
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import RevealAnimation from '@/components/RevealAnimation';
import { UserGender, UserType, loadUserPreferences } from '@/components/UserTypeSelector';
import VickiUnifiedBadge from '@/components/VickiUnifiedBadge';
import ContactSection from '@/components/ContactSection';
import RelatedPrograms from '@/components/programs/RelatedPrograms';

const SitProgram = () => {
  const { t } = useLanguage();
  const [userGender, setUserGender] = useState<UserGender | null>(null);
  const [userType, setUserType] = useState<UserType | null>(null);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const { gender, type } = loadUserPreferences();
    if (gender) setUserGender(gender);
    if (type) setUserType(type);
  }, []);
  
  const relatedPrograms = [
    {
      title: t('programs.sit.related.program1.title'),
      description: t('programs.sit.related.program1.desc'),
      link: "/programs/sat"
    },
    {
      title: t('programs.sit.related.program2.title'),
      description: t('programs.sit.related.program2.desc'),
      link: "/programs/junior-competitive"
    },
    {
      title: t('programs.sit.related.program3.title'),
      description: t('programs.sit.related.program3.desc'),
      link: "/programs/parent"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="relative">
          <Hero 
            title={t('programs.sit.title')}
            subtitle={t('programs.sit.subtitle')}
            imageSrc="https://images.unsplash.com/photo-1607278967103-bc928c5b10f4?q=80&w=2070&auto=format&fit=crop"
            vimeoEmbed='<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068788542?h=698f55b033&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Talent Identification"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
            buttons={[
              { text: t('programs.sit.hero.cta1'), href: '/contact' },
              { text: t('programs.sit.hero.cta2'), href: '/contact', variant: 'outline' }
            ]}
            contentPosition="left"
            overlayOpacity="medium"
          />
          
          <div className="w-full bg-black py-16 relative" style={{ height: '300px' }}>
            <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
              <div className="flex items-center mb-2">
                <h2 className="text-white text-lg font-display mr-3">{t('programs.sit.banner.title')}</h2>
                <p className="text-white text-lg font-swiss max-w-3xl">
                  {t('programs.sit.banner.subtitle')}
                </p>
              </div>
              <p className="text-white text-sm font-swiss max-w-3xl mt-2">
                {t('programs.sit.banner.desc')}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <VickiUnifiedBadge level="essentials" className="bg-opacity-20 border-opacity-30 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-12">
            <RevealAnimation>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h2 className="text-3xl font-swiss">{t('programs.sit.pageTitle')}</h2>
                <VickiUnifiedBadge level="essentials" />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="text-lg mb-6 font-swiss">{t('programs.sit.intro')}</p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-4 font-swiss">
                {t('programs.sit.desc1')}
              </p>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <p className="mb-4 font-swiss">
                {t('programs.sit.desc2')}
              </p>
            </RevealAnimation>
            <RevealAnimation delay={250}>
              <p className="mb-4 font-swiss">
                {t('programs.sit.desc3')}
              </p>
            </RevealAnimation>
            <RevealAnimation delay={300}>
              <p className="mb-4 font-swiss">
                <strong>{t('programs.sit.analysis.title')}</strong> {t('programs.sit.analysis.desc')}
              </p>
            </RevealAnimation>
            <RevealAnimation delay={350}>
              <p className="font-swiss">
                {t('programs.sit.upgrade')}
              </p>
            </RevealAnimation>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <RevealAnimation delay={400}>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-swiss font-semibold mb-6 text-ath-clay">{t('programs.sit.pillars.technique.title')}</h3>
                <ul className="space-y-4 font-swiss">
                  <li className="flex">
                    <span className="text-ath-clay mr-2">•</span>
                    <p>{t('programs.sit.pillars.technique.item1')}</p>
                  </li>
                  <li className="flex">
                    <span className="text-ath-clay mr-2">•</span>
                    <p>{t('programs.sit.pillars.technique.item2')}</p>
                  </li>
                </ul>
              </div>
            </RevealAnimation>
            
            <RevealAnimation delay={450}>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-swiss font-semibold mb-6 text-ath-clay">{t('programs.sit.pillars.athletic.title')}</h3>
                <ul className="space-y-4 font-swiss">
                  <li className="flex">
                    <span className="text-ath-clay mr-2">•</span>
                    <p>{t('programs.sit.pillars.athletic.item1')}</p>
                  </li>
                  <li className="flex">
                    <span className="text-ath-clay mr-2">•</span>
                    <p>{t('programs.sit.pillars.athletic.item2')}</p>
                  </li>
                </ul>
              </div>
            </RevealAnimation>
            
            <RevealAnimation delay={500}>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-swiss font-semibold mb-6 text-ath-clay">{t('programs.sit.pillars.mental.title')}</h3>
                <ul className="space-y-4 font-swiss">
                  <li className="flex">
                    <span className="text-ath-clay mr-2">•</span>
                    <p>{t('programs.sit.pillars.mental.item1')}</p>
                  </li>
                  <li className="flex">
                    <span className="text-ath-clay mr-2">•</span>
                    <p>{t('programs.sit.pillars.mental.item2')}</p>
                  </li>
                </ul>
              </div>
            </RevealAnimation>
            
            <RevealAnimation delay={550}>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-swiss font-semibold mb-6 text-ath-clay">{t('programs.sit.pillars.tactics.title')}</h3>
                <ul className="space-y-4 font-swiss">
                  <li className="flex">
                    <span className="text-ath-clay mr-2">•</span>
                    <p>{t('programs.sit.pillars.tactics.item1')}</p>
                  </li>
                  <li className="flex">
                    <span className="text-ath-clay mr-2">•</span>
                    <p>{t('programs.sit.pillars.tactics.item2')}</p>
                  </li>
                </ul>
              </div>
            </RevealAnimation>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <RevealAnimation delay={600} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">{t('programs.sit.features.title')}</h3>
              <ul className="list-disc list-inside space-y-2 font-swiss">
                <li>{t('programs.sit.features.feature1')}</li>
                <li>{t('programs.sit.features.feature2')}</li>
                <li>{t('programs.sit.features.feature3')}</li>
                <li>{t('programs.sit.features.feature4')}</li>
                <li>{t('programs.sit.features.feature5')}</li>
                <li>{t('programs.sit.features.feature6')}</li>
                <li>{t('programs.sit.features.feature7')}</li>
                <li>{t('programs.sit.features.feature8')}</li>
                <li>{t('programs.sit.features.feature9')}</li>
                <li>{t('programs.sit.features.feature10')}</li>
              </ul>
            </RevealAnimation>
            
            <RevealAnimation delay={650} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">{t('programs.sit.pricing.title')}</h3>
              <div className="mb-4">
                <p className="text-3xl font-bold text-ath-clay">€950</p>
                <p className="text-sm text-gray-600">{t('programs.sit.pricing.period')}</p>
              </div>
              <div className="mb-4 p-4 bg-ath-clay/10 rounded-lg">
                <h4 className="text-sm font-semibold mb-2">{t('programs.sit.pricing.analysis.title')}</h4>
                <p className="text-sm text-gray-600">
                  {t('programs.sit.pricing.analysis.desc')}
                </p>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                {t('programs.sit.pricing.note')}
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-ath-clay text-white py-2 px-4 rounded hover:bg-ath-clay/90 transition-colors"
              >
                {t('programs.sit.pricing.cta')}
              </a>
            </RevealAnimation>
          </div>
        </div>
        
        <div className="bg-gray-50 py-16 mt-16">
          <div className="max-w-6xl mx-auto px-6">
            <RevealAnimation delay={100}>
              <RelatedPrograms 
                title={t('programs.sit.related.title')} 
                programs={relatedPrograms}
              />
            </RevealAnimation>
          </div>
        </div>
        
        <ContactSection 
          title={t('programs.sit.contact.title')} 
          subtitle={t('programs.sit.contact.subtitle')}
          address="Via Carlo D'Adda 6/8, 20143 Milano (MI)"
          email="info@advancedtennishub.com"
          phone="+39 02 123 4567"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default SitProgram;
