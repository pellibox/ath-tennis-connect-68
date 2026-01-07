
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import { UserGender, UserType, loadUserPreferences } from '@/components/UserTypeSelector';
import VickiUnifiedBadge from '@/components/VickiUnifiedBadge';
import ContactSection from '@/components/ContactSection';
import ProgramDetails from '@/components/programs/ProgramDetails';
import ProgramFeaturesAndPricing from '@/components/programs/ProgramFeaturesAndPricing';
import ProgramWhyChoose from '@/components/programs/ProgramWhyChoose';
import RelatedPrograms from '@/components/programs/RelatedPrograms';
import { createStandardVimeoEmbed } from '@/utils/videoUtils';

const ElitePerformanceFullProgram = () => {
  const { t } = useLanguage();
  const [userGender, setUserGender] = useState<UserGender | null>(null);
  const [userType, setUserType] = useState<UserType | null>(null);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const { gender, type } = loadUserPreferences();
    if (gender) setUserGender(gender);
    if (type) setUserType(type);
  }, []);

  const programDescription = [
    t('programs.elitePerformanceFull.desc1'),
    t('programs.elitePerformanceFull.desc2'),
    t('programs.elitePerformanceFull.desc3')
  ];

  const programFeatures = {
    title: t('programs.elitePerformanceFull.features.title'),
    features: [
      t('programs.elitePerformanceFull.features.feature1'),
      t('programs.elitePerformanceFull.features.feature2'),
      t('programs.elitePerformanceFull.features.feature3'),
      t('programs.elitePerformanceFull.features.feature4'),
      t('programs.elitePerformanceFull.features.feature5'),
      t('programs.elitePerformanceFull.features.feature6'),
      t('programs.elitePerformanceFull.features.feature7'),
      t('programs.elitePerformanceFull.features.feature8'),
      t('programs.elitePerformanceFull.features.feature9'),
      t('programs.elitePerformanceFull.features.feature10'),
      t('programs.elitePerformanceFull.features.feature11')
    ]
  };

  const programPricing = {
    price: "€15.000",
    period: t('programs.elitePerformanceFull.pricing.period'),
    notes: [
      t('programs.elitePerformanceFull.pricing.notes')
    ],
    ctaText: t('programs.elitePerformanceFull.pricing.cta'),
    ctaLink: "/contact"
  };

  const whyChoose = {
    title: t('programs.elitePerformanceFull.whyChoose.title'),
    description: t('programs.elitePerformanceFull.whyChoose.description'),
    benefits: [
      {
        title: t('programs.elitePerformanceFull.whyChoose.benefit1.title'),
        description: t('programs.elitePerformanceFull.whyChoose.benefit1.desc')
      },
      {
        title: t('programs.elitePerformanceFull.whyChoose.benefit2.title'),
        description: t('programs.elitePerformanceFull.whyChoose.benefit2.desc')
      },
      {
        title: t('programs.elitePerformanceFull.whyChoose.benefit3.title'),
        description: t('programs.elitePerformanceFull.whyChoose.benefit3.desc')
      },
      {
        title: t('programs.elitePerformanceFull.whyChoose.benefit4.title'),
        description: t('programs.elitePerformanceFull.whyChoose.benefit4.desc')
      },
      {
        title: t('programs.elitePerformanceFull.whyChoose.benefit5.title'),
        description: t('programs.elitePerformanceFull.whyChoose.benefit5.desc')
      }
    ],
    ctaText: t('programs.elitePerformanceFull.whyChoose.cta'),
    ctaLink: "/contact"
  };

  const relatedPrograms = {
    title: t('programs.elitePerformanceFull.related.title'),
    programs: [
      {
        title: t('programs.elitePerformanceFull.related.program1.title'),
        description: t('programs.elitePerformanceFull.related.program1.desc'),
        link: "/programs/elite-performance"
      },
      {
        title: t('programs.elitePerformanceFull.related.program2.title'),
        description: t('programs.elitePerformanceFull.related.program2.desc'),
        link: "/programs/performance-4"
      },
      {
        title: t('programs.elitePerformanceFull.related.program3.title'),
        description: t('programs.elitePerformanceFull.related.program3.desc'),
        link: "/programs/performance-3"
      },
      {
        title: t('programs.elitePerformanceFull.related.program4.title'),
        description: t('programs.elitePerformanceFull.related.program4.desc'),
        link: "/programs/parent"
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="relative">
          <Hero 
            title={t('programs.elitePerformanceFull.title')}
            subtitle={t('programs.elitePerformanceFull.subtitle')}
            imageSrc="https://images.unsplash.com/photo-1533561052604-c3beb6d55b8d?q=80&w=2071&auto=format&fit=crop"
            vimeoEmbed={createStandardVimeoEmbed('1071002692?h=a2668fa56d')}
            buttons={[
              { text: t('programs.elitePerformanceFull.hero.cta1'), href: '/contact' },
              { text: t('programs.elitePerformanceFull.hero.cta2'), href: '/contact', variant: 'outline' }
            ]}
            contentPosition="left"
            overlayOpacity="medium"
          />
          
          <div className="w-full bg-black py-16 relative" style={{ height: 'auto', minHeight: '400px' }}>
            <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center py-8">
              <h2 className="text-white text-lg font-display mb-4">{t('programs.elitePerformanceFull.banner.title')}</h2>
              <p className="text-white text-lg font-swiss max-w-3xl mb-6">
                {t('programs.elitePerformanceFull.banner.subtitle')}
              </p>
              <ul className="text-white space-y-3 font-swiss max-w-3xl">
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span><strong>{t('programs.elitePerformanceFull.banner.pillar1.title')}</strong> {t('programs.elitePerformanceFull.banner.pillar1.desc')}</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span><strong>{t('programs.elitePerformanceFull.banner.pillar2.title')}</strong> {t('programs.elitePerformanceFull.banner.pillar2.desc')}</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span><strong>{t('programs.elitePerformanceFull.banner.pillar3.title')}</strong> {t('programs.elitePerformanceFull.banner.pillar3.desc')}</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span><strong>{t('programs.elitePerformanceFull.banner.pillar4.title')}</strong> {t('programs.elitePerformanceFull.banner.pillar4.desc')}</span>
                </li>
              </ul>
              <p className="text-white mt-6 font-swiss max-w-3xl">
                {t('programs.elitePerformanceFull.banner.vicki')}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <VickiUnifiedBadge level="pro" className="bg-opacity-20 border-opacity-30 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <ProgramDetails 
            title={t('programs.elitePerformanceFull.title')}
            subtitle={t('programs.elitePerformanceFull.details.subtitle')}
            description={programDescription}
            userGender={userGender}
            userType={userType}
          />
          
          <ProgramFeaturesAndPricing 
            features={programFeatures}
            pricing={programPricing}
          />
          
          <ProgramWhyChoose 
            title={whyChoose.title}
            benefits={whyChoose.benefits}
          />
          
          <RelatedPrograms 
            title={relatedPrograms.title}
            programs={relatedPrograms.programs}
          />
        </div>
        
        <ContactSection 
          title={t('programs.elitePerformanceFull.contact.title')} 
          subtitle={t('programs.elitePerformanceFull.contact.subtitle')}
          address="Via Carlo D'Adda 6/8, 20143 Milano (MI)"
          email="info@advancedtennishub.com"
          phone="+39 02 123 4567"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default ElitePerformanceFullProgram;
