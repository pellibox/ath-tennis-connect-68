
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import RevealAnimation from '@/components/RevealAnimation';
import { UserGender, UserType, loadUserPreferences } from '@/components/UserTypeSelector';
import VickiUnifiedBadge from '@/components/VickiUnifiedBadge';

const CampsProgram = () => {
  const { t } = useLanguage();
  const [userGender, setUserGender] = useState<UserGender | null>(null);
  const [userType, setUserType] = useState<UserType | null>(null);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Load user preferences
    const { gender, type } = loadUserPreferences();
    if (gender) setUserGender(gender);
    if (type) setUserType(type);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-0">
        <div className="w-full bg-black min-h-[calc(100vw*9/16)] relative">
          <div dangerouslySetInnerHTML={{ __html: `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068835737?h=f0a05fef01&autoplay=1&loop=1&title=0&byline=0&portrait=0&background=1&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>` }} />
        </div>
        
        <div className="w-full bg-black py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white text-xl md:text-2xl font-swiss uppercase mb-2">
              {t('camps.title')}:
            </h2>
            <p className="text-white text-xl md:text-2xl opacity-90 font-swiss max-w-3xl drop-shadow-md">
              {t('camps.subtitle')}
            </p>
            <div className="mt-6">
              <VickiUnifiedBadge level="basic" className="bg-opacity-20 border-opacity-30 text-white" />
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-12">
            <RevealAnimation>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h2 className="text-3xl font-display">{t('camps.summer')}</h2>
                <VickiUnifiedBadge level="basic" />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="text-lg mb-6">{t('camps.intro')}</p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-4">
                {t('camps.description1')}
              </p>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <p>
                {t('camps.description2')}
              </p>
            </RevealAnimation>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <RevealAnimation delay={250} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{t('camps.features')}</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>{t('camps.feature1')}</li>
                <li>{t('camps.feature2')}</li>
                <li>{t('camps.feature3')}</li>
                <li>{t('camps.feature4')}</li>
                <li>{t('camps.feature5')}</li>
                <li>{t('camps.feature6')}</li>
                <li>{t('camps.feature7')}</li>
              </ul>
            </RevealAnimation>
            
            <RevealAnimation delay={300} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{t('camps.benefits')}</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>{t('camps.benefit1')}</li>
                <li>{t('camps.benefit2')}</li>
                <li>{t('camps.benefit3')}</li>
                <li>{t('camps.benefit4')}</li>
                <li>{t('camps.benefit5')}</li>
                <li>{t('camps.benefit6')}</li>
              </ul>
            </RevealAnimation>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CampsProgram;
