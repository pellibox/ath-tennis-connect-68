
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FacilitiesSection from '@/components/FacilitiesSection';
import AboutSection from '@/components/AboutSection';
import JoinRevolutionSection from '@/components/JoinRevolutionSection';
import FacilitiesIntro from '@/components/facilities/FacilitiesIntro';
import ServicesSection from '@/components/facilities/ServicesSection';
import StandardHeroVideo from '@/components/StandardHeroVideo';
import { useLanguage } from '@/contexts/LanguageContext';

const FacilitiesPage = () => {
  const location = useLocation();
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const facilitiesVimeoEmbed = `<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;width:100%;"><iframe src="https://player.vimeo.com/video/1068878064?h=2b90638be1&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479&controls=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="ATH Facilities Video"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;

  const facilities = [
    {
      id: "facility-1",
      title: t("facilities.courts.atp.title"),
      description: t("facilities.courts.atp.description"),
      image: "/lovable-uploads/d4ba3935-f901-4a99-972b-6a86e47787db.png",
      features: [
        t("facilities.courts.atp.feature1"),
        t("facilities.courts.atp.feature2")
      ],
      vimeoEmbed: `<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;width:100%;"><iframe src="https://player.vimeo.com/video/1068880352?h=4d6b04576c&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479&controls=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="ATH Campo Centrale Video"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`
    },
    {
      id: "facility-2",
      title: t("facilities.courts.synthetic.title"),
      description: t("facilities.courts.synthetic.description"),
      image: "/lovable-uploads/f9c89e9c-6847-411b-b1f9-e208caf726b4.png",
      features: [
        t("facilities.courts.synthetic.feature1"),
        t("facilities.courts.synthetic.feature2"),
        t("facilities.courts.synthetic.feature3"),
        t("facilities.courts.synthetic.feature4")
      ]
    },
    {
      id: "facility-3",
      title: t("facilities.courts.clay.title"),
      description: t("facilities.courts.clay.description"),
      image: "/lovable-uploads/a16b623a-92f5-4f89-9c3d-d01262778f95.png",
      features: [
        t("facilities.courts.clay.feature1"),
        t("facilities.courts.clay.feature2"),
        t("facilities.courts.clay.feature3")
      ]
    },
    {
      id: "facility-padel",
      title: t("facilities.courts.padel.title"),
      description: t("facilities.courts.padel.description"),
      image: "/lovable-uploads/padel-courts.png",
      features: [
        t("facilities.courts.padel.feature1"),
        t("facilities.courts.padel.feature2"),
        t("facilities.courts.padel.feature3"),
        t("facilities.courts.padel.feature4"),
        t("facilities.courts.padel.feature5"),
        t("facilities.courts.padel.feature6")
      ],
      vimeoEmbed: `<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;width:100%;"><iframe src="https://player.vimeo.com/video/1068880352?h=4d6b04576c&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479&controls=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="ATH Padel Courts Video"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`
    },
    {
      id: "facility-pickleball",
      title: t("facilities.courts.pickleball.title"),
      description: t("facilities.courts.pickleball.description"),
      image: "/lovable-uploads/c4c120e8-c90d-48a3-933c-d4cce08b5129.png",
      features: [
        t("facilities.courts.pickleball.feature1"),
        t("facilities.courts.pickleball.feature2"),
        t("facilities.courts.pickleball.feature3"),
        t("facilities.courts.pickleball.feature4")
      ]
    },
    {
      id: "facility-touch",
      title: t("facilities.courts.touch.title"),
      description: t("facilities.courts.touch.description"),
      image: "/lovable-uploads/f55d3f98-ba82-4220-81ac-86540f2b2862.png",
      features: [
        t("facilities.courts.touch.feature1"),
        t("facilities.courts.touch.feature2"),
        t("facilities.courts.touch.feature3"),
        t("facilities.courts.touch.feature4")
      ]
    },
    {
      id: "facility-4",
      title: t("facilities.center.performance.title"),
      description: t("facilities.center.performance.description"),
      image: "/lovable-uploads/b0cf5344-de4c-404e-9c7b-916d765a8df0.png",
      features: [
        t("facilities.center.performance.feature1"),
        t("facilities.center.performance.feature2"),
        t("facilities.center.performance.feature3"),
        t("facilities.center.performance.feature4"),
        t("facilities.center.performance.feature5")
      ]
    },
    {
      id: "facility-5",
      title: t("facilities.center.lounge.title"),
      description: t("facilities.center.lounge.description"),
      image: "/lovable-uploads/a39367a8-2cd2-4dca-88ac-68898efc50da.png",
      features: [
        t("facilities.center.lounge.feature1"),
        t("facilities.center.lounge.feature2"),
        t("facilities.center.lounge.feature3"),
        t("facilities.center.lounge.feature4")
      ]
    },
    {
      id: "facility-6",
      title: t("facilities.center.headquarters.title"),
      description: t("facilities.center.headquarters.description"),
      image: "/lovable-uploads/38147937-4cd3-4caa-9a19-c801e8255f36.png",
      features: [
        t("facilities.center.headquarters.feature1"),
        t("facilities.center.headquarters.feature2"),
        t("facilities.center.headquarters.feature3"),
        t("facilities.center.headquarters.feature4"),
        t("facilities.center.headquarters.feature5"),
        t("facilities.center.headquarters.feature6")
      ],
      vimeoEmbed: `<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;width:100%;"><iframe src="https://player.vimeo.com/video/1068882045?h=ec85ec8e85&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479&controls=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="ATH Headquarters Video"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`
    }
  ];

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <Header />
      
      <main className="flex-grow font-swiss relative">
        <StandardHeroVideo 
          vimeoEmbed={facilitiesVimeoEmbed}
          title={t("facilities.hero.title")}
          subtitle={t("facilities.hero.subtitle")}
        />
        
        <FacilitiesIntro />
        
        <FacilitiesSection 
          title={t("facilities.section.title")}
          subtitle={t("facilities.section.subtitle")}
          facilities={facilities}
          className="relative z-10 pt-0 mt-0"
        />
        
        <ServicesSection />
        
        <JoinRevolutionSection className="relative z-10" />
        
        <AboutSection 
          title={t("facilities.about.title")}
          description={t("facilities.about.description")}
          image="/lovable-uploads/dffc3218-3307-465f-b953-635b8789ae9e.png"
          buttons={[
            { text: t("facilities.about.cta"), href: '/contact' }
          ]}
          accent="clay"
          elegant={true}
          className="relative z-10"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default FacilitiesPage;
