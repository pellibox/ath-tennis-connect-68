
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import ProgramsSection from '@/components/ProgramsSection';
import RevealAnimation from '@/components/RevealAnimation';
import { UserGender, UserType, loadUserPreferences } from '@/components/UserTypeSelector';
import Hero from '@/components/Hero';
import VickiMonitoringBadge, { MonitoringLevel } from '@/components/VickiMonitoringBadge';
import VickiPoweredBadge from '@/components/VickiPoweredBadge';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const JuniorProgram = () => {
  const { t } = useLanguage();
  const [userProfile, setUserProfile] = useState<{ gender: UserGender | null, type: UserType | null }>({ gender: null, type: null });
  const [vimeoEmbed, setVimeoEmbed] = useState<string>('');
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const preferences = loadUserPreferences();
    setUserProfile(preferences);
    
    if (preferences.type === 'junior') {
      setVimeoEmbed('<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068596987?h=c9dad61d03&autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Junior Video"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>');
    }
  }, []);

  const getJuniorPrograms = () => {
    const basePrograms = [
      {
        id: 'talent-id',
        title: t('programs.junior.programs.talentId.title'),
        description: t('programs.junior.programs.talentId.desc'),
        image: 'https://images.unsplash.com/photo-1596463059283-da257325bab8?q=80&w=2070&auto=format&fit=crop',
        vimeoEmbed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068618561?h=f1a4f80a91&autoplay=0&loop=1&title=0&byline=0&portrait=0&controls=0&background=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>',
        link: '#',
        features: [
          t('programs.junior.programs.talentId.feature1'),
          t('programs.junior.programs.talentId.feature2'),
          t('programs.junior.programs.talentId.feature3')
        ],
        monitoringLevel: 'basic' as MonitoringLevel,
        vickiPowered: true
      },
      {
        id: 'junior-competitive',
        title: t('programs.junior.programs.competitive.title'),
        description: t('programs.junior.programs.competitive.desc'),
        image: 'https://images.unsplash.com/photo-1612458225454-41c3991c0c49?q=80&w=1973&auto=format&fit=crop',
        vimeoEmbed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068596987?h=c9dad61d03&autoplay=0&loop=1&title=0&byline=0&portrait=0&controls=0&background=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>',
        link: '#',
        features: [
          t('programs.junior.programs.competitive.feature1'),
          t('programs.junior.programs.competitive.feature2'),
          t('programs.junior.programs.competitive.feature3'),
          t('programs.junior.programs.competitive.feature4')
        ],
        monitoringLevel: 'advanced' as MonitoringLevel,
        vickiPowered: true
      },
      {
        id: 'parent-support',
        title: t('programs.junior.programs.parent.title'),
        description: t('programs.junior.programs.parent.desc'),
        image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop',
        vimeoEmbed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068621034?h=7b8c99f420&ts=0&autoplay=0&loop=1&title=0&byline=0&portrait=0&controls=0&background=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>',
        link: '#',
        features: [
          t('programs.junior.programs.parent.feature1'),
          t('programs.junior.programs.parent.feature2'),
          t('programs.junior.programs.parent.feature3'),
          t('programs.junior.programs.parent.feature4'),
          t('programs.junior.programs.parent.feature5'),
          t('programs.junior.programs.parent.feature6'),
          t('programs.junior.programs.parent.feature7'),
          t('programs.junior.programs.parent.feature8'),
          t('programs.junior.programs.parent.feature9')
        ],
        monitoringLevel: 'basic' as MonitoringLevel,
        vickiCustomBadge: 'Vicki™ report and stream'
      }
    ];
    
    if (userProfile.type === 'parent') {
      return basePrograms.map(program => 
        program.id === 'parent-support' 
          ? {...program, image: 'https://images.unsplash.com/photo-1534367990512-edbdca781b00?q=80&w=2070&auto=format&fit=crop'} 
          : program
      );
    } else if ((userProfile.type === 'junior' || userProfile.type === 'performance') && userProfile.gender === 'female') {
      return basePrograms.map(program => 
        program.id === 'junior-competitive'
          ? {...program, image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop'}
          : program
      );
    }
    
    return basePrograms;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="relative">
          <Hero 
            title={t('programs.junior.title')}
            subtitle={t('programs.junior.subtitle')}
            vimeoEmbed={vimeoEmbed}
            imageSrc={vimeoEmbed ? undefined : "https://images.unsplash.com/photo-1612458225454-41c3991c0c49?q=80&w=1973&auto=format&fit=crop"}
            buttons={[
              { text: t('programs.junior.hero.cta1'), href: '/contact' },
              { text: t('programs.junior.hero.cta2'), href: '/contact', variant: 'outline' }
            ]}
            contentPosition="left"
            overlayOpacity="medium"
          />
          
          <div className="w-full bg-black py-16 relative" style={{ height: '300px' }}>
            <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
              <div className="flex items-center mb-2">
                <h2 className="text-white text-lg font-display mr-3">{t('programs.junior.banner.title')}</h2>
                <p className="text-white text-lg font-swiss max-w-3xl">
                  {t('programs.junior.banner.subtitle')}
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <VickiMonitoringBadge level="advanced" className="bg-opacity-20 border-opacity-30 text-white" />
                <VickiPoweredBadge className="bg-opacity-20 border-opacity-30 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-12">
            <RevealAnimation>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h2 className="text-3xl font-display">{t('programs.junior.pageTitle')}</h2>
                <VickiMonitoringBadge level="advanced" />
                <VickiPoweredBadge />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="text-lg mb-6">{t('programs.junior.intro')}</p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-4">
                {t('programs.junior.desc1')}
              </p>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <p>
                {t('programs.junior.desc2')}
              </p>
            </RevealAnimation>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <RevealAnimation delay={250} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{t('programs.junior.features.title')}</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>{t('programs.junior.features.feature1')}</li>
                <li>{t('programs.junior.features.feature2')}</li>
                <li>{t('programs.junior.features.feature3')}</li>
                <li>{t('programs.junior.features.feature4')}</li>
                <li>{t('programs.junior.features.feature5')}</li>
                <li>{t('programs.junior.features.feature6')}</li>
              </ul>
            </RevealAnimation>
            
            <RevealAnimation delay={300} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{t('programs.junior.benefits.title')}</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>{t('programs.junior.benefits.benefit1')}</li>
                <li>{t('programs.junior.benefits.benefit2')}</li>
                <li>{t('programs.junior.benefits.benefit3')}</li>
                <li>{t('programs.junior.benefits.benefit4')}</li>
                <li>{t('programs.junior.benefits.benefit5')}</li>
                <li>{t('programs.junior.benefits.benefit6')}</li>
              </ul>
            </RevealAnimation>
          </div>
          
          <RevealAnimation delay={100}>
            <div className="mt-16">
              <h3 className="text-2xl font-display mb-8">{t('programs.junior.ourPrograms')}</h3>
              <ProgramsSection 
                title={t('programs.junior.programsTitle')}
                programs={getJuniorPrograms()}
                gridLayout="dense"
              />
            </div>
          </RevealAnimation>
          
          <RevealAnimation delay={150}>
            <div className="mt-16">
              <h3 className="text-2xl font-display mb-6">{t('programs.junior.related.title')}</h3>
              <Link to="/programs/parent" className="block p-6 border border-gray-200 bg-white rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                <h4 className="text-lg font-medium mb-2">{t('programs.junior.related.program1.title')}</h4>
                <p className="text-gray-600 mb-3">{t('programs.junior.related.program1.desc')}</p>
                <span className="inline-flex items-center text-ath-clay">{t('programs.junior.related.discover')} <ArrowRight size={14} className="ml-1" /></span>
              </Link>
            </div>
          </RevealAnimation>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default JuniorProgram;
