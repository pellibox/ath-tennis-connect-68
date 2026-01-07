
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
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ButtonLink from '@/components/ButtonLink';
import RelatedPrograms from '@/components/programs/RelatedPrograms';

const SatProgram = () => {
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
      title: t('programs.sat.related.program1.title'),
      description: t('programs.sat.related.program1.desc'),
      link: "/programs/talent-identification"
    },
    {
      title: t('programs.sat.related.program2.title'),
      description: t('programs.sat.related.program2.desc'),
      link: "/programs/parent"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="relative">
          <Hero 
            title={t('programs.sat.title')}
            subtitle={t('programs.sat.subtitle')}
            imageSrc="https://images.unsplash.com/photo-1612458225454-41c3991c0c49?q=80&w=1973&auto=format&fit=crop"
            vimeoEmbed='<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068596987?h=c9dad61d03&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="SAT Program"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
            buttons={[
              { text: t('programs.sat.hero.cta1'), href: '/contact' },
              { text: t('programs.sat.hero.cta2'), href: '/contact', variant: 'outline' }
            ]}
            contentPosition="left"
            overlayOpacity="medium"
          />
          
          <div className="w-full bg-black py-16 relative" style={{ height: '300px' }}>
            <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
              <h2 className="text-white text-lg font-display mb-4">{t('programs.sat.banner.title')}</h2>
              <p className="text-white text-lg font-swiss max-w-3xl">
                {t('programs.sat.banner.subtitle')}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <VickiMonitoringBadge level="essentials" className="bg-opacity-20 border-opacity-30 text-white" />
                <VickiPoweredBadge className="bg-opacity-20 border-opacity-30 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-12">
            <RevealAnimation>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h2 className="text-3xl font-swiss">{t('programs.sat.pageTitle')}</h2>
                <VickiMonitoringBadge level="essentials" />
                <VickiPoweredBadge />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="text-lg mb-6 font-swiss">{t('programs.sat.intro')}</p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-4 font-swiss">
                {t('programs.sat.desc1')}
              </p>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <p className="mb-4 font-swiss">
                {t('programs.sat.desc2')}
              </p>
            </RevealAnimation>
            <RevealAnimation delay={250}>
              <p className="mb-4 font-swiss">
                {t('programs.sat.desc3')}
              </p>
            </RevealAnimation>
            <RevealAnimation delay={300}>
              <p className="font-swiss">
                {t('programs.sat.desc4')}
              </p>
            </RevealAnimation>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <RevealAnimation delay={350}>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-swiss font-semibold mb-6 text-ath-clay">{t('programs.sat.pillars.technique.title')}</h3>
                <ul className="space-y-4 font-swiss">
                  <li className="flex">
                    <span className="text-ath-clay mr-2">•</span>
                    <p>{t('programs.sat.pillars.technique.item1')}</p>
                  </li>
                  <li className="flex">
                    <span className="text-ath-clay mr-2">•</span>
                    <p>{t('programs.sat.pillars.technique.item2')}</p>
                  </li>
                </ul>
              </div>
            </RevealAnimation>
            
            <RevealAnimation delay={400}>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-swiss font-semibold mb-6 text-ath-clay">{t('programs.sat.pillars.athletic.title')}</h3>
                <ul className="space-y-4 font-swiss">
                  <li className="flex">
                    <span className="text-ath-clay mr-2">•</span>
                    <p>{t('programs.sat.pillars.athletic.item1')}</p>
                  </li>
                  <li className="flex">
                    <span className="text-ath-clay mr-2">•</span>
                    <p>{t('programs.sat.pillars.athletic.item2')}</p>
                  </li>
                </ul>
              </div>
            </RevealAnimation>
            
            <RevealAnimation delay={450}>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-swiss font-semibold mb-6 text-ath-clay">{t('programs.sat.pillars.mental.title')}</h3>
                <ul className="space-y-4 font-swiss">
                  <li className="flex">
                    <span className="text-ath-clay mr-2">•</span>
                    <p>{t('programs.sat.pillars.mental.item1')}</p>
                  </li>
                  <li className="flex">
                    <span className="text-ath-clay mr-2">•</span>
                    <p>{t('programs.sat.pillars.mental.item2')}</p>
                  </li>
                </ul>
              </div>
            </RevealAnimation>
            
            <RevealAnimation delay={500}>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-swiss font-semibold mb-6 text-ath-clay">{t('programs.sat.pillars.tactics.title')}</h3>
                <ul className="space-y-4 font-swiss">
                  <li className="flex">
                    <span className="text-ath-clay mr-2">•</span>
                    <p>{t('programs.sat.pillars.tactics.item1')}</p>
                  </li>
                  <li className="flex">
                    <span className="text-ath-clay mr-2">•</span>
                    <p>{t('programs.sat.pillars.tactics.item2')}</p>
                  </li>
                </ul>
              </div>
            </RevealAnimation>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <RevealAnimation delay={550} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">{t('programs.sat.features.title')}</h3>
              <ul className="list-disc list-inside space-y-2 font-swiss">
                <li>{t('programs.sat.features.feature1')}</li>
                <li>{t('programs.sat.features.feature2')}</li>
                <li>{t('programs.sat.features.feature3')}</li>
                <li>{t('programs.sat.features.feature4')}</li>
                <li>{t('programs.sat.features.feature5')}</li>
                <li>{t('programs.sat.features.feature6')}</li>
                <li>{t('programs.sat.features.feature7')}</li>
                <li>{t('programs.sat.features.feature8')}</li>
                <li>{t('programs.sat.features.feature9')}</li>
                <li>{t('programs.sat.features.feature10')}</li>
              </ul>
            </RevealAnimation>
            
            <RevealAnimation delay={600} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">{t('programs.sat.pricing.title')}</h3>
              <div className="mb-4">
                <p className="text-3xl font-bold text-ath-clay">€750</p>
                <p className="text-sm text-gray-600">{t('programs.sat.pricing.period')}</p>
              </div>
              <div className="mb-4 p-4 bg-ath-clay/10 rounded-lg">
                <h4 className="text-sm font-semibold mb-2">{t('programs.sat.test.title')}</h4>
                <p className="text-sm text-gray-600">
                  {t('programs.sat.test.desc')}
                </p>
              </div>
              <div className="mb-4 p-4 bg-ath-clay/10 rounded-lg">
                <h4 className="text-sm font-semibold mb-2">{t('programs.sat.upgrade.title')}</h4>
                <p className="text-sm text-gray-600">
                  {t('programs.sat.upgrade.desc')}
                </p>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                {t('programs.sat.pricing.note')}
              </p>
              <ButtonLink 
                href="/contact" 
                showArrow={true}
              >
                {t('programs.sat.pricing.cta')}
              </ButtonLink>
            </RevealAnimation>
          </div>
          
          <RevealAnimation delay={650}>
            <div className="bg-ath-clay/5 border border-ath-clay/20 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-display mb-4 text-ath-clay">{t('programs.sat.whyChoose.title')}</h3>
              <p className="mb-4">{t('programs.sat.whyChoose.desc')}</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>{t('programs.sat.whyChoose.benefit1')}</li>
                <li>{t('programs.sat.whyChoose.benefit2')}</li>
                <li>{t('programs.sat.whyChoose.benefit3')}</li>
                <li>{t('programs.sat.whyChoose.benefit4')}</li>
              </ul>
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-ath-clay text-white py-2 px-6 rounded hover:bg-ath-clay/90 transition-colors"
              >
                {t('programs.sat.whyChoose.cta')} <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </RevealAnimation>
        </div>
        
        <div className="bg-gray-50 py-16 mt-8">
          <div className="max-w-6xl mx-auto px-6">
            <RevealAnimation delay={700}>
              <RelatedPrograms 
                title={t('programs.sat.related.title')} 
                programs={relatedPrograms}
              />
            </RevealAnimation>
          </div>
        </div>
        
        <ContactSection 
          title={t('programs.sat.contact.title')} 
          subtitle={t('programs.sat.contact.subtitle')}
          address="Via Carlo D'Adda 6/8, 20143 Milano (MI)"
          email="info@advancedtennishub.com"
          phone="+39 02 123 4567"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default SatProgram;
