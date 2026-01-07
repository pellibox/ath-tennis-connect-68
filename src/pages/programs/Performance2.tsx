
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import RevealAnimation from '@/components/RevealAnimation';
import VickiUnifiedBadge from '@/components/VickiUnifiedBadge';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createStandardVimeoEmbed } from '@/utils/videoUtils';
import CmsPriceDisplay from '@/components/cms/CmsPriceDisplay';

const Performance2Program = () => {
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
            title={t('programs.performance2.title')}
            subtitle={t('programs.performance2.subtitle')}
            imageSrc="/lovable-uploads/ef64c04d-055d-4d70-87f4-e67928a3b8e6.png"
            vimeoEmbed={createStandardVimeoEmbed('867339842')}
            buttons={[
              { text: t('programs.performance2.hero.cta1'), href: '/contact' },
              { text: t('programs.performance2.hero.cta2'), href: '/contact', variant: 'outline' }
            ]}
            contentPosition="left"
            overlayOpacity="medium"
          />
          
          <div className="w-full bg-black py-16 relative" style={{ height: '300px' }}>
            <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
              <div className="flex items-center mb-2">
                <h2 className="text-white text-lg font-bold mr-3">{t('programs.performance2.banner.title')}</h2>
                <p className="text-white text-lg max-w-3xl">
                  {t('programs.performance2.banner.subtitle')}
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <VickiUnifiedBadge level="advanced" className="bg-opacity-20 border-opacity-30 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-12">
            <RevealAnimation>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h2 className="text-3xl font-bold">{t('programs.performance2.pageTitle')}</h2>
                <VickiUnifiedBadge level="advanced" />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="text-lg mb-6">{t('programs.performance2.intro')}</p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-4">{t('programs.performance2.desc1')}</p>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <p>{t('programs.performance2.desc2')}</p>
            </RevealAnimation>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <RevealAnimation delay={250} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{t('programs.performance2.features.title')}</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>{t('programs.performance2.features.feature1')}</li>
                <li>{t('programs.performance2.features.feature2')}</li>
                <li>{t('programs.performance2.features.feature3')}</li>
                <li>{t('programs.performance2.features.feature4')}</li>
                <li>{t('programs.performance2.features.feature5')}</li>
                <li>{t('programs.performance2.features.feature6')}</li>
                <li>{t('programs.performance2.features.feature7')}</li>
              </ul>
            </RevealAnimation>
            
            <RevealAnimation delay={300} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{t('programs.performance2.benefits.title')}</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>{t('programs.performance2.benefits.benefit1')}</li>
                <li>{t('programs.performance2.benefits.benefit2')}</li>
                <li>{t('programs.performance2.benefits.benefit3')}</li>
                <li>{t('programs.performance2.benefits.benefit4')}</li>
                <li>{t('programs.performance2.benefits.benefit5')}</li>
                <li>{t('programs.performance2.benefits.benefit6')}</li>
              </ul>
            </RevealAnimation>
          </div>
          
          <RevealAnimation delay={350}>
            <div className="bg-ath-clay/5 border border-ath-clay/20 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-bold mb-4 text-ath-clay">{t('programs.performance2.investment.title')}</h3>
              <CmsPriceDisplay 
                blockKey="price_perf2"
                fallbackPrice={4000}
                fallbackPeriod={t('programs.performance2.investment.period')}
                priceClassName="text-xl mb-2"
                periodClassName="text-gray-600 mb-6"
                className="mb-6"
              />
              <div className="space-y-2 mb-6">
                <p><strong>{t('programs.performance2.investment.includes')}</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>{t('programs.performance2.investment.item1')}</li>
                  <li>{t('programs.performance2.investment.item2')}</li>
                  <li>{t('programs.performance2.investment.item3')}</li>
                  <li>{t('programs.performance2.investment.item4')}</li>
                </ul>
              </div>
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-ath-clay text-white py-2 px-6 rounded hover:bg-ath-clay/90 transition-colors"
              >
                {t('programs.performance2.investment.cta')} <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </RevealAnimation>
          
          <RevealAnimation delay={400}>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">{t('programs.performance2.related.title')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link to="/programs/performance-3" className="block p-6 border border-gray-200 rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                  <h4 className="text-lg font-medium mb-2">{t('programs.performance2.related.program1.title')}</h4>
                  <p className="text-gray-600 mb-3">{t('programs.performance2.related.program1.desc')}</p>
                  <span className="inline-flex items-center text-ath-clay">{t('programs.performance2.related.discover')} <ArrowRight size={14} className="ml-1" /></span>
                </Link>
                <Link to="/programs/performance-4" className="block p-6 border border-gray-200 rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                  <h4 className="text-lg font-medium mb-2">{t('programs.performance2.related.program2.title')}</h4>
                  <p className="text-gray-600 mb-3">{t('programs.performance2.related.program2.desc')}</p>
                  <span className="inline-flex items-center text-ath-clay">{t('programs.performance2.related.discover')} <ArrowRight size={14} className="ml-1" /></span>
                </Link>
                <Link to="/programs/elite" className="block p-6 border border-gray-200 rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                  <h4 className="text-lg font-medium mb-2">{t('programs.performance2.related.program3.title')}</h4>
                  <p className="text-gray-600 mb-3">{t('programs.performance2.related.program3.desc')}</p>
                  <span className="inline-flex items-center text-ath-clay">{t('programs.performance2.related.discover')} <ArrowRight size={14} className="ml-1" /></span>
                </Link>
              </div>
              <div className="mt-6">
                <Link to="/programs/parent" className="block p-6 border border-gray-200 rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                  <h4 className="text-lg font-medium mb-2">{t('programs.performance2.related.program4.title')}</h4>
                  <p className="text-gray-600 mb-3">{t('programs.performance2.related.program4.desc')}</p>
                  <span className="inline-flex items-center text-ath-clay">{t('programs.performance2.related.discover')} <ArrowRight size={14} className="ml-1" /></span>
                </Link>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Performance2Program;
