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

  // Programmi aggiornati in base alle specifiche
  const programs = [
    {
      id: '1',
      title: 'Agonisti 6-12 anni',
      description: 'Programma di allenamento specializzato per giovani agonisti, con focus su sviluppo tecnico fondamentale, coordinazione e approccio mentale adeguato all\'età.',
      image: 'https://images.unsplash.com/photo-1551773148-efc73c5fdc70',
      link: '/programs/agonisti'
    },
    {
      id: '2',
      title: 'Junior 13-18 anni',
      description: 'Percorso di perfezionamento tecnico-tattico per adolescenti, con integrazione di preparazione fisica specifica e sviluppo di autonomia decisionale in campo.',
      image: 'https://images.unsplash.com/photo-1542144582-1ba00456b5e3',
      link: '/programs/junior'
    },
    {
      id: '3',
      title: 'Professionisti',
      description: 'Programma elite per atleti professionisti con analisi completa, ottimizzazione della performance e pianificazione dettagliata della stagione agonistica.',
      image: 'https://images.unsplash.com/photo-1622279888158-c6a5e6c4587c',
      link: '/programs/pro'
    },
    {
      id: '4',
      title: 'Adulti',
      description: 'Lezioni individuali, corsi di gruppo, affitto campi e clinics tematiche per giocatori amatoriali di ogni livello, con supporto tecnologico personalizzato.',
      image: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff',
      link: '/programs/adult'
    },
    {
      id: '5',
      title: 'Coaching a Distanza',
      description: 'Supporto remoto continuo con analisi video, feedback tecnici e programmi di allenamento personalizzati per atleti non residenti.',
      image: 'https://images.unsplash.com/photo-1606131731446-5568d87113aa',
      link: '/programs/remote'
    },
    {
      id: '6',
      title: 'Percorsi Specifici',
      description: 'Preparazione intensiva per tornei, recupero tecnico/fisico dopo infortuni e valutazioni approfondite con protocolli personalizzati.',
      image: 'https://images.unsplash.com/photo-1599586120429-48281b6f0ece',
      link: '/programs/specific'
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

  // Facilities data
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
          title="Advanced Tennis Hub"
          subtitle="Centro di allenamento ad alta specializzazione con integrazione tra tecnologia avanzata e competenze professionali"
          imageSrc="/lovable-uploads/fc6643c2-4357-4c86-9e52-6f33d698668f.png"
          buttons={[
            { text: "Programmi", href: '/programs' },
            { text: "Contattaci", href: '/contact', variant: 'outline' }
          ]}
        />
        
        <AboutSection 
          title="Chi Siamo"
          subtitle="ATH - Advanced Tennis Hub"
          description={
            <div className="space-y-4">
              <p>ATH è un centro di allenamento ad alta specializzazione che offre a ogni atleta un percorso evolutivo personalizzato, basato su dati oggettivi e supportato da tecnologia avanzata.</p>
              <p>Il nostro approccio integra competenze professionali con sistemi di analisi all'avanguardia, garantendo continuità metodologica e supporto tecnico costante.</p>
              <p>ATH costituisce una rete aperta a coach, atleti e specialisti, uniti dall'obiettivo di ottimizzare il processo di sviluppo tennistico attraverso un metodo oggettivo e misurabile.</p>
            </div>
          }
          image="https://images.unsplash.com/photo-1617711773026-ea7252c02cd3"
          buttons={[
            { text: "Scopri di più", href: '/about' }
          ]}
        />
        
        <ProgramsSection 
          title="Programmi"
          subtitle="Offriamo percorsi personalizzati per ogni fase di sviluppo del giocatore"
          programs={programs}
          className="bg-ath-gray"
        />
        
        <StatsSection 
          stats={stats}
          darkBg={true}
        />
        
        <TechnologySection 
          title={t('tech.title')}
          subtitle="Sistema di analisi con visione artificiale, AI e tracciamento 3D che analizza oltre 70 parametri in tempo reale"
        />
        
        <FacilitiesSection 
          title="Strutture"
          subtitle="I nostri campi e spazi sono progettati per offrire un'esperienza di allenamento ottimale"
          facilities={facilities}
        />
        
        <CoachesSection 
          title="Coach e Staff"
          subtitle="Il nostro team tecnico utilizza VICKI come supporto all'approccio individuale"
          coaches={coaches}
        />
        
        <TestimonialsSection 
          title={t('testimonials.title')}
          subtitle={t('testimonials.subtitle')}
          testimonials={testimonials}
        />
        
        <AboutSection 
          title="Il Metodo ATH"
          description={
            <div className="space-y-4">
              <p>Il nostro metodo si basa su un allenamento personalizzato costruito su base oggettiva, utilizzando dati e intelligenza artificiale per guidare il percorso evolutivo di ogni atleta.</p>
              <p>Adottiamo un approccio integrato che combina tecnica, fisico, tattica, mentale e salute, garantendo continuità metodologica indipendentemente dal coach presente in campo.</p>
              <p>Ogni atleta riceve un supporto evolutivo costante, con analisi dettagliate, feedback immediati e programmi personalizzati per massimizzare il potenziale individuale.</p>
            </div>
          }
          image="https://images.unsplash.com/photo-1518005068251-37900150dfca"
          buttons={[
            { text: "Contattaci", href: '/contact' }
          ]}
          reversed={true}
        />
        
        <ContactSection 
          title="Contatti"
          subtitle="Richiedi informazioni o prenota una sessione"
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
