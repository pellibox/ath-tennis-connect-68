
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import RevealAnimation from '@/components/RevealAnimation';
import { UserGender, UserType, loadUserPreferences } from '@/components/UserTypeSelector';
import ContactSection from '@/components/ContactSection';
import StandardHeroVideo from '@/components/StandardHeroVideo';
import PrivateProgramDescription from '@/components/programs/PrivateProgramDescription';

const PersonalCoachingProgram = () => {
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
      
      <main className="flex-grow pt-0">
        <StandardHeroVideo 
          vimeoEmbed='<iframe src="https://player.vimeo.com/video/1068788542?h=698f55b033&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Private Lessons"></iframe><script src="https://player.vimeo.com/api/player.js"></script>'
          title={t('programs.personalTraining.banner.title')}
          subtitle={t('programs.personalTraining.banner.subtitle')}
        />
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <PrivateProgramDescription />
          
          <div className="grid md:grid-cols-2 gap-10">
            <RevealAnimation delay={250} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">{t('programs.personalTraining.features.title')}</h3>
              <ul className="list-disc list-inside space-y-2 font-swiss">
                <li>{t('programs.personalTraining.features.feature1')}</li>
                <li>{t('programs.personalTraining.features.feature2')}</li>
                <li>{t('programs.personalTraining.features.feature3')}</li>
                <li>{t('programs.personalTraining.features.feature4')}</li>
                <li>{t('programs.personalTraining.features.feature5')}</li>
                <li>{t('programs.personalTraining.features.feature6')}</li>
                <li>{t('programs.personalTraining.features.feature7')}</li>
                <li>{t('programs.personalTraining.features.feature8')}</li>
              </ul>
              
              <div className="mt-8 p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r">
                <h4 className="text-lg font-semibold mb-2">{t('programs.personalTraining.booking.title')}</h4>
                <p className="text-sm">
                  {t('programs.personalTraining.booking.desc')}
                </p>
              </div>
            </RevealAnimation>
            
            <RevealAnimation delay={300} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">{t('programs.personalTraining.pricing.title')}</h3>
              <div className="mb-4">
                <p className="text-2xl font-bold text-ath-clay">{t('programs.personalTraining.pricing.custom')}</p>
                <p className="text-sm text-gray-600">{t('programs.personalTraining.pricing.customDesc')}</p>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                {t('programs.personalTraining.pricing.desc')}
              </p>
              <h3 className="text-lg font-swiss font-semibold mb-2">{t('programs.personalTraining.benefits.title')}</h3>
              <ul className="list-disc list-inside space-y-2 font-swiss mb-6">
                <li>{t('programs.personalTraining.benefits.benefit1')}</li>
                <li>{t('programs.personalTraining.benefits.benefit2')}</li>
                <li>{t('programs.personalTraining.benefits.benefit3')}</li>
                <li>{t('programs.personalTraining.benefits.benefit4')}</li>
                <li>{t('programs.personalTraining.benefits.benefit5')}</li>
                <li>{t('programs.personalTraining.benefits.benefit6')}</li>
              </ul>
              <a 
                href="/contact" 
                className="inline-block bg-ath-clay text-white py-2 px-4 rounded hover:bg-ath-clay/90 transition-colors"
              >
                {t('programs.personalTraining.pricing.cta')}
              </a>
              
              <div className="mt-6 text-sm text-gray-600">
                <p className="italic">
                  {t('programs.personalTraining.pricing.note')}
                </p>
              </div>
            </RevealAnimation>
          </div>
        </div>
        
        <ContactSection 
          title={t('programs.personalTraining.contact.title')} 
          subtitle={t('programs.personalTraining.contact.subtitle')}
          address="Via Carlo D'Adda 6/8, 20143 Milano (MI)"
          email="info@advancedtennishub.com"
          phone="+39 02 123 4567"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default PersonalCoachingProgram;
