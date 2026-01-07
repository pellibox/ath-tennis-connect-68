
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import RevealAnimation from '@/components/RevealAnimation';
import { UserGender, UserType, loadUserPreferences } from '@/components/UserTypeSelector';
import ContactSection from '@/components/ContactSection';
import { Badge } from "@/components/ui/badge";
import RelatedPrograms from '@/components/programs/RelatedPrograms';
import ProgramOffers from '@/components/programs/parent-tutor/ProgramOffers';
import ProgramPricing from '@/components/programs/parent-tutor/ProgramPricing';
import ProgramBenefits from '@/components/programs/parent-tutor/ProgramBenefits';
import TechnologySupport from '@/components/programs/parent-tutor/TechnologySupport';
import { useIsMobile } from '@/hooks/use-mobile';

const ParentTutorProgram = () => {
  const { t } = useLanguage();
  const [userGender, setUserGender] = useState<UserGender | null>(null);
  const [userType, setUserType] = useState<UserType | null>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const { gender, type } = loadUserPreferences();
    if (gender) setUserGender(gender);
    if (type) setUserType(type);
  }, []);

  const programOffers = [
    {
      title: t('programs.parentTutor.offers.offer1.title'),
      description: t('programs.parentTutor.offers.offer1.desc')
    },
    {
      title: t('programs.parentTutor.offers.offer2.title'),
      description: t('programs.parentTutor.offers.offer2.desc')
    },
    {
      title: t('programs.parentTutor.offers.offer3.title'),
      description: t('programs.parentTutor.offers.offer3.desc')
    },
    {
      title: t('programs.parentTutor.offers.offer4.title'),
      description: t('programs.parentTutor.offers.offer4.desc')
    },
    {
      title: t('programs.parentTutor.offers.offer5.title'),
      description: t('programs.parentTutor.offers.offer5.desc')
    }
  ];

  const programInclusions = [
    { text: t('programs.parentTutor.inclusions.item1') },
    { text: t('programs.parentTutor.inclusions.item2') },
    { text: t('programs.parentTutor.inclusions.item3') },
    { text: t('programs.parentTutor.inclusions.item4') }
  ];

  const techSupportFeatures = [
    {
      title: t('programs.parentTutor.techSupport.feature1.title'),
      description: t('programs.parentTutor.techSupport.feature1.desc')
    },
    {
      title: t('programs.parentTutor.techSupport.feature2.title'),
      description: t('programs.parentTutor.techSupport.feature2.desc')
    },
    {
      title: t('programs.parentTutor.techSupport.feature3.title'),
      description: t('programs.parentTutor.techSupport.feature3.desc')
    }
  ];

  const programBenefits = [
    t('programs.parentTutor.benefits.benefit1'),
    t('programs.parentTutor.benefits.benefit2'),
    t('programs.parentTutor.benefits.benefit3'),
    t('programs.parentTutor.benefits.benefit4'),
    t('programs.parentTutor.benefits.benefit5'),
    t('programs.parentTutor.benefits.benefit6')
  ];

  const relatedPrograms = [
    {
      title: t('programs.parentTutor.related.program1.title'),
      description: t('programs.parentTutor.related.program1.desc'),
      link: "/programs/sat"
    },
    {
      title: t('programs.parentTutor.related.program2.title'),
      description: t('programs.parentTutor.related.program2.desc'),
      link: "/programs/talent-identification"
    },
    {
      title: t('programs.parentTutor.related.program3.title'),
      description: t('programs.parentTutor.related.program3.desc'),
      link: "/programs/performance-4"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="relative">
          <Hero 
            title={t('programs.parentTutor.title')}
            subtitle={t('programs.parentTutor.subtitle')}
            imageSrc="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop"
            vimeoEmbed='<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068629360?h=46b5c52b31&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Parent Tutor Program"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
            buttons={[
              { text: t('programs.parentTutor.hero.cta1'), href: '/contact' },
              { text: t('programs.parentTutor.hero.cta2'), href: '/contact', variant: 'outline' }
            ]}
            contentPosition="left"
            overlayOpacity="medium"
          />
          
          <div className="w-full bg-black py-10 md:py-16 px-4">
            <div className="max-w-6xl mx-auto h-full flex flex-col justify-center">
              <h2 className="text-white text-lg font-display mb-2 md:mb-4">{t('programs.parentTutor.banner.title')}</h2>
              <p className="text-white text-base md:text-lg font-swiss max-w-3xl">
                {t('programs.parentTutor.banner.subtitle')}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Badge variant="ath" className="text-white">Vicki™ report and stream</Badge>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-16">
          <div className="mb-8 md:mb-12">
            <RevealAnimation>
              <div className="flex flex-wrap items-center gap-3 mb-4 md:mb-6">
                <h2 className={`${isMobile ? "text-xl" : "text-3xl"} font-swiss`}>{t('programs.parentTutor.pageTitle')}</h2>
                <Badge variant="ath" className="text-white">Vicki™ report and stream</Badge>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className={`${isMobile ? "text-base" : "text-lg"} mb-4 md:mb-6 font-swiss`}>{t('programs.parentTutor.intro')}</p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-3 md:mb-4 font-swiss text-sm md:text-base">
                {t('programs.parentTutor.desc1')}
              </p>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <p className="mb-3 md:mb-4 font-swiss text-sm md:text-base">
                {t('programs.parentTutor.desc2')}
              </p>
            </RevealAnimation>
            <RevealAnimation delay={250}>
              <p className="font-swiss mb-3 md:mb-4 text-sm md:text-base">
                {t('programs.parentTutor.desc3')}
              </p>
            </RevealAnimation>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 mb-8 md:mb-12">
            <ProgramOffers offers={programOffers} />
            
            <ProgramPricing 
              includedPrograms={t('programs.parentTutor.pricing.included')}
              regularPrice={t('programs.parentTutor.pricing.regular')}
              regularPriceDescription={t('programs.parentTutor.pricing.regularDesc')}
              inclusions={programInclusions}
              documentUrl="/documents/programma-genitore-tutor.pdf"
            />
          </div>
          
          <ProgramBenefits 
            title={t('programs.parentTutor.benefitsSection.title')}
            description={t('programs.parentTutor.benefitsSection.description')}
            benefits={programBenefits}
            ctaText={t('programs.parentTutor.benefitsSection.cta')}
            ctaLink="/contact"
          />
          
          <RevealAnimation delay={450}>
            <RelatedPrograms 
              title={t('programs.parentTutor.related.title')}
              programs={relatedPrograms}
            />
          </RevealAnimation>
        </div>
        
        <TechnologySupport 
          title={t('programs.parentTutor.techSection.title')}
          subtitle={t('programs.parentTutor.techSection.subtitle')}
          features={techSupportFeatures}
        />
        
        <ContactSection 
          title={t('programs.parentTutor.contact.title')} 
          subtitle={t('programs.parentTutor.contact.subtitle')}
          address="Via F. Turati, 9, Milano MI, Italia"
          email="info@ath.tennis"
          phone="+39 02 1234567"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default ParentTutorProgram;
