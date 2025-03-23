
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ProgramsSection from '@/components/ProgramsSection';
import ContactSection from '@/components/ContactSection';
import { useLanguage } from '@/contexts/LanguageContext';

const ProgramsPage = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const programsVimeoEmbed = `<div style="padding:133.33% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068604216?h=db6df002bf&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="ATH Programs"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;

  // Default fallback image for any program where image loading fails
  const defaultFallbackImage = "https://images.unsplash.com/photo-1518005068251-37900150dfca?q=80&w=1920";

  const programs = [
    {
      id: '1',
      title: t('programs.junior'),
      description: t('programs.junior.desc'),
      image: defaultFallbackImage,
      vimeoEmbed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068604216?h=db6df002bf&autoplay=0&loop=1&background=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Junior Program"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
      link: '/programs/junior',
      features: [
        t('programs.junior.feature1'),
        t('programs.junior.feature2'),
        t('programs.junior.feature3')
      ]
    },
    {
      id: '2',
      title: t('programs.young'),
      description: t('programs.young.desc'),
      image: "https://images.unsplash.com/photo-1542144582-1ba00456b5e3?q=80&w=1920",
      vimeoEmbed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068604216?h=db6df002bf&autoplay=0&loop=1&background=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Young Athletes Program"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
      link: '/programs/young',
      features: [
        t('programs.young.feature1'),
        t('programs.young.feature2'),
        t('programs.young.feature3')
      ]
    },
    {
      id: '3',
      title: t('programs.elite'),
      description: t('programs.elite.desc'),
      image: defaultFallbackImage,
      vimeoEmbed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068604216?h=db6df002bf&autoplay=0&loop=1&background=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Elite Program"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
      link: '/programs/elite',
      features: [
        t('programs.elite.feature1'),
        t('programs.elite.feature2'),
        t('programs.elite.feature3')
      ]
    },
    {
      id: '4',
      title: t('programs.adult'),
      description: t('programs.adult.desc'),
      image: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?q=80&w=1920",
      vimeoEmbed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068604216?h=db6df002bf&autoplay=0&loop=1&background=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Adult Program"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
      link: '/programs/adult',
      features: [
        t('programs.adult.feature1'),
        t('programs.adult.feature2'),
        t('programs.adult.feature3')
      ]
    },
    {
      id: '5',
      title: t('programs.coach'),
      description: t('programs.coach.desc'),
      image: "https://images.unsplash.com/photo-1606131731446-5568d87113aa?q=80&w=1920",
      vimeoEmbed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068604216?h=db6df002bf&autoplay=0&loop=1&background=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Coach Program"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
      link: '/programs/coach',
      features: [
        t('programs.coach.feature1'),
        t('programs.coach.feature2'),
        t('programs.coach.feature3')
      ]
    },
    {
      id: '6',
      title: t('programs.parent'),
      description: t('programs.parent.desc'),
      image: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?q=80&w=1920",
      vimeoEmbed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068604216?h=db6df002bf&autoplay=0&loop=1&background=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Parent Program"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
      link: '/programs/parent',
      features: [
        t('programs.parent.feature1'),
        t('programs.parent.feature2'),
        t('programs.parent.feature3')
      ]
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-20">
        <Hero 
          title={t('programs.title')}
          subtitle={t('programs.subtitle')}
          vimeoEmbed={programsVimeoEmbed}
          buttons={[
            { text: t('programs.contact'), href: '/contact' }
          ]}
          overlayOpacity="medium"
        />
        
        <ProgramsSection 
          title={t('programs.all.title')}
          subtitle={t('programs.all.subtitle')}
          programs={programs}
          className="py-20"
        />
        
        <ContactSection 
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
          address={t('contact.ath.address')}
          phone={t('contact.ath.phone')}
          email={t('contact.ath.email')}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default ProgramsPage;
