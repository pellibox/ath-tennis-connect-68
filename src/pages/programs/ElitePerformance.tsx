
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import RevealAnimation from '@/components/RevealAnimation';
import { UserGender, UserType, loadUserPreferences } from '@/components/UserTypeSelector';
import VickiUnifiedBadge from '@/components/VickiUnifiedBadge';
import ContactSection from '@/components/ContactSection';
import { ArrowRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

const ElitePerformanceProgram = () => {
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
            title={t('programs.elitePerformance.title')}
            subtitle={t('programs.elitePerformance.subtitle')}
            imageSrc="https://images.unsplash.com/photo-1614743758466-e569f4791116?q=80&w=2070&auto=format&fit=crop"
            vimeoEmbed='<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068788542?h=698f55b033&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Elite Performance"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
            buttons={[
              { text: t('programs.elitePerformance.hero.cta1'), href: '/contact' },
              { text: t('programs.elitePerformance.hero.cta2'), href: '/contact', variant: 'outline' }
            ]}
            contentPosition="left"
            overlayOpacity="medium"
          />
          
          <div className="w-full bg-black py-16 relative" style={{ height: 'auto', minHeight: '400px' }}>
            <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center py-8">
              <h2 className="text-white text-lg font-display mb-4">{t('programs.elitePerformance.banner.title')}</h2>
              <p className="text-white text-lg font-swiss max-w-3xl mb-6">
                {t('programs.elitePerformance.banner.subtitle')}
              </p>
              <ul className="text-white space-y-3 font-swiss max-w-3xl">
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span><strong>{t('programs.elitePerformance.banner.pillar1.title')}</strong> {t('programs.elitePerformance.banner.pillar1.desc')}</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span><strong>{t('programs.elitePerformance.banner.pillar2.title')}</strong> {t('programs.elitePerformance.banner.pillar2.desc')}</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span><strong>{t('programs.elitePerformance.banner.pillar3.title')}</strong> {t('programs.elitePerformance.banner.pillar3.desc')}</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span><strong>{t('programs.elitePerformance.banner.pillar4.title')}</strong> {t('programs.elitePerformance.banner.pillar4.desc')}</span>
                </li>
              </ul>
              <p className="text-white mt-6 font-swiss max-w-3xl">
                {t('programs.elitePerformance.banner.vicki')}
              </p>
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
                <h2 className="text-3xl font-swiss">{t('programs.elitePerformance.pageTitle')}</h2>
                <Badge variant="ath" className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" />
                  <span>{t('programs.elitePerformance.badge')}</span>
                </Badge>
                <VickiUnifiedBadge level="pro" />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="text-lg mb-6 font-swiss">{t('programs.elitePerformance.intro')}</p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-4 font-swiss">
                {t('programs.elitePerformance.desc1')}
              </p>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <p className="font-swiss">
                {t('programs.elitePerformance.desc2')}
              </p>
            </RevealAnimation>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <RevealAnimation delay={250} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">{t('programs.elitePerformance.features.title')}</h3>
              <ul className="list-disc list-inside space-y-2 font-swiss">
                <li>{t('programs.elitePerformance.features.feature1')}</li>
                <li>{t('programs.elitePerformance.features.feature2')}</li>
                <li>{t('programs.elitePerformance.features.feature3')}</li>
                <li>{t('programs.elitePerformance.features.feature4')}</li>
                <li>{t('programs.elitePerformance.features.feature5')}</li>
                <li>{t('programs.elitePerformance.features.feature6')}</li>
                <li>{t('programs.elitePerformance.features.feature7')}</li>
                <li>{t('programs.elitePerformance.features.feature8')}</li>
                <li>{t('programs.elitePerformance.features.feature9')}</li>
              </ul>
            </RevealAnimation>
            
            <RevealAnimation delay={300} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">{t('programs.elitePerformance.pricing.title')}</h3>
              <div className="mb-4">
                <p className="text-3xl font-bold text-ath-clay">€7.500</p>
                <p className="text-sm text-gray-600">{t('programs.elitePerformance.pricing.period')}</p>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                {t('programs.elitePerformance.pricing.note')}
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-ath-clay text-white py-2 px-4 rounded hover:bg-ath-clay/90 transition-colors"
              >
                {t('programs.elitePerformance.pricing.cta')}
              </a>
            </RevealAnimation>
          </div>
          
          <RevealAnimation delay={350}>
            <div className="bg-ath-clay/5 border border-ath-clay/20 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-display mb-4 text-ath-clay">{t('programs.elitePerformance.whyChoose.title')}</h3>
              <p className="mb-4">{t('programs.elitePerformance.whyChoose.desc')}</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>{t('programs.elitePerformance.whyChoose.benefit1')}</li>
                <li>{t('programs.elitePerformance.whyChoose.benefit2')}</li>
                <li>{t('programs.elitePerformance.whyChoose.benefit3')}</li>
                <li>{t('programs.elitePerformance.whyChoose.benefit4')}</li>
              </ul>
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-ath-clay text-white py-2 px-6 rounded hover:bg-ath-clay/90 transition-colors"
              >
                {t('programs.elitePerformance.whyChoose.cta')} <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </RevealAnimation>
          
          <div className="text-center">
            <h3 className="text-2xl font-display mb-6">{t('programs.elitePerformance.related.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/programs/performance-4" className="block p-6 border border-gray-200 rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                <h4 className="text-lg font-medium mb-2">{t('programs.elitePerformance.related.program1.title')}</h4>
                <p className="text-gray-600 mb-3">{t('programs.elitePerformance.related.program1.desc')}</p>
                <span className="inline-flex items-center text-ath-clay">{t('programs.elitePerformance.related.discover')} <ArrowRight size={14} className="ml-1" /></span>
              </Link>
              <Link to="/programs/performance-3" className="block p-6 border border-gray-200 rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                <h4 className="text-lg font-medium mb-2">{t('programs.elitePerformance.related.program2.title')}</h4>
                <p className="text-gray-600 mb-3">{t('programs.elitePerformance.related.program2.desc')}</p>
                <span className="inline-flex items-center text-ath-clay">{t('programs.elitePerformance.related.discover')} <ArrowRight size={14} className="ml-1" /></span>
              </Link>
              <Link to="/programs/elite-full" className="block p-6 border border-gray-200 rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                <h4 className="text-lg font-medium mb-2">{t('programs.elitePerformance.related.program3.title')}</h4>
                <p className="text-gray-600 mb-3">{t('programs.elitePerformance.related.program3.desc')}</p>
                <span className="inline-flex items-center text-ath-clay">{t('programs.elitePerformance.related.discover')} <ArrowRight size={14} className="ml-1" /></span>
              </Link>
            </div>
            <div className="mt-6">
              <Link to="/programs/parent" className="block p-6 border border-gray-200 rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                <h4 className="text-lg font-medium mb-2">{t('programs.elitePerformance.related.program4.title')}</h4>
                <p className="text-gray-600 mb-3">{t('programs.elitePerformance.related.program4.desc')}</p>
                <span className="inline-flex items-center text-ath-clay">{t('programs.elitePerformance.related.discover')} <ArrowRight size={14} className="ml-1" /></span>
              </Link>
            </div>
          </div>
        </div>
        
        <ContactSection 
          title={t('programs.elitePerformance.contact.title')} 
          subtitle={t('programs.elitePerformance.contact.subtitle')}
          address="Via Carlo D'Adda 6/8, 20143 Milano (MI)"
          email="info@advancedtennishub.com"
          phone="+39 02 123 4567"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default ElitePerformanceProgram;
