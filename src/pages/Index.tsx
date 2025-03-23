
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ProgramsSection from '@/components/ProgramsSection';
import CoachesSection from '@/components/CoachesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import StatsSection from '@/components/StatsSection';
import FacilitiesSection from '@/components/FacilitiesSection';
import ContactSection from '@/components/ContactSection';
import TechnologySection from '@/components/TechnologySection';
import { useLanguage } from '@/contexts/LanguageContext';

const HomePage = () => {
  // Get translation function
  const { t } = useLanguage();
  
  // Smooth scroll functionality
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Sample data for programs
  const programs = [
    {
      id: '1',
      title: t('programs.junior'),
      description: t('programs.junior.desc'),
      image: 'https://images.unsplash.com/photo-1551773148-efc73c5fdc70',
      link: '/programs/junior'
    },
    {
      id: '2',
      title: t('programs.elite'),
      description: t('programs.elite.desc'),
      image: 'https://images.unsplash.com/photo-1542144582-1ba00456b5e3',
      link: '/programs/elite'
    },
    {
      id: '3',
      title: t('programs.adult'),
      description: t('programs.adult.desc'),
      image: 'https://images.unsplash.com/photo-1622279888158-c6a5e6c4587c',
      link: '/programs/adult'
    },
  ];

  // Sample data for coaches
  const coaches = [
    {
      id: '1',
      name: 'Marco Rossi',
      title: 'Head Coach',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136',
      bio: '15+ years of professional coaching experience. Former top 100 ATP player.'
    },
    {
      id: '2',
      name: 'Sofia Garcia',
      title: 'Junior Development Coach',
      image: 'https://images.unsplash.com/photo-1615109398623-88346a601842',
      bio: 'Specializes in developing junior players. Former WTA player.'
    },
    {
      id: '3',
      name: 'David Chen',
      title: 'Fitness Coach',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
      bio: 'Expert in sports-specific strength and conditioning for tennis players.'
    },
  ];

  // Sample data for testimonials
  const testimonials = [
    {
      id: '1',
      quote: "ATH ha trasformato il mio gioco. Gli allenatori forniscono un'attenzione personalizzata e le strutture sono di livello mondiale. Sono migliorato più in un anno qui che in cinque anni altrove.",
      author: 'Emma Martins',
      role: 'Giocatore Junior, 16'
    },
    {
      id: '2',
      quote: "L'approccio professionale di ATH è impareggiabile. Mi hanno aiutato non solo tecnicamente, ma anche mentalmente e fisicamente. È un ecosistema completo per lo sviluppo del tennis.",
      author: 'Michael Johnson',
      role: 'Giocatore Professionista'
    },
    {
      id: '3',
      quote: 'Come giocatore amatoriale, non pensavo di poter migliorare così tanto alla mia età. Il programma per adulti è fantastico - stimolante ma anche divertente e sociale.',
      author: 'Robert Chen',
      role: 'Membro del Programma per Adulti'
    },
  ];

  // Updated stats with the correct information
  const stats = [
    {
      id: '1',
      value: 6,
      label: 'Campi'
    },
    {
      id: '2',
      value: 70,
      suffix: '+',
      label: 'Parametri Monitorati'
    },
    {
      id: '3',
      value: 500,
      suffix: '+',
      label: 'Membri Attivi'
    },
    {
      id: '4',
      value: 1,
      label: 'Unico Centro con VICKI'
    },
  ];

  // Aggiornati i percorsi delle immagini per le strutture con immagini disponibili su Unsplash
  const facilities = [
    {
      id: '1',
      title: 'Campo Centrale ATP',
      description: 'Il nostro campo centrale rispetta tutti gli standard ATP, con tribune per gli spettatori e tecnologia all\'avanguardia per ospitare tornei di livello internazionale.',
      image: 'https://images.unsplash.com/photo-1625601429244-5eec3a14b8b2?q=80&w=1200'
    },
    {
      id: '2',
      title: 'Campi in Superficie Veloce',
      description: 'Due campi in superficie veloce di standard internazionale, progettati per un gioco veloce e adatti a sviluppare il gioco aggressivo e i colpi potenti.',
      image: 'https://images.unsplash.com/photo-1544991936-9e0ee081bd27?q=80&w=1200'
    },
    {
      id: '3',
      title: 'Campi in Terra Rossa',
      description: 'Quattro campi in terra rossa di alta qualità, mantenuti quotidianamente per garantire condizioni di gioco ottimali, ideali per il gioco tattico e per ridurre lo stress sulle articolazioni.',
      image: 'https://images.unsplash.com/photo-1622279488220-3c7dd46f7c18?q=80&w=1200'
    },
    {
      id: '4',
      title: 'Centro Performance',
      description: 'Il nostro centro di performance high-tech include una palestra completamente attrezzata, aree di recupero, sale di analisi video e strutture di scienze sportive per uno sviluppo completo dell\'atleta.',
      image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1200'
    },
    {
      id: '5',
      title: 'Strutture per Giocatori',
      description: 'Spazi confortevoli per i giocatori per rilassarsi, studiare e socializzare. Per i giocatori in visita, offriamo alloggi in loco con tutti i comfort necessari per un soggiorno confortevole.',
      image: 'https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=1200'
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero 
          title={t('hero.title')}
          subtitle={t('hero.subtitle')}
          imageSrc="/lovable-uploads/fc6643c2-4357-4c86-9e52-6f33d698668f.png"
          buttons={[
            { text: t('hero.programs'), href: '/programs' },
            { text: t('hero.book'), href: '/contact', variant: 'outline' }
          ]}
        />
        
        <AboutSection 
          title={t('about.title')}
          subtitle={t('about.subtitle')}
          description={
            <div className="space-y-4">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <p>{t('about.p3')}</p>
            </div>
          }
          image="https://images.unsplash.com/photo-1617711773026-ea7252c02cd3"
          buttons={[
            { text: t('about.learn'), href: '/about' }
          ]}
        />
        
        <ProgramsSection 
          title={t('programs.title')}
          subtitle={t('programs.subtitle')}
          programs={programs}
        />
        
        <StatsSection 
          stats={stats}
          darkBg={true}
        />
        
        <TechnologySection 
          title={t('tech.title')}
          subtitle={t('tech.subtitle')}
        />
        
        <FacilitiesSection 
          title={t('facilities.title')}
          subtitle={t('facilities.subtitle')}
          facilities={facilities}
        />
        
        <CoachesSection 
          title={t('coaches.title')}
          subtitle={t('coaches.subtitle')}
          coaches={coaches}
        />
        
        <TestimonialsSection 
          title={t('testimonials.title')}
          subtitle={t('testimonials.subtitle')}
          testimonials={testimonials}
        />
        
        <AboutSection 
          title={t('join.title')}
          description={t('join.desc')}
          image="https://images.unsplash.com/photo-1518005068251-37900150dfca"
          buttons={[
            { text: t('join.cta'), href: '/contact' }
          ]}
          reversed={true}
        />
        
        <ContactSection 
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
          address="123 Tennis Court Avenue, Tennis City, 10001"
          phone="+1 (234) 567-890"
          email="info@ath-tennis.com"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
