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

  // Programmi aggiornati con descrizioni tecniche più concise
  const programs = [
    {
      id: '1',
      title: 'Agonisti 6-12 anni',
      description: 'Programma specializzato per giovani agonisti con monitoraggio completo dello sviluppo tecnico.',
      image: 'https://images.unsplash.com/photo-1551773148-efc73c5fdc70',
      link: '/programs/agonisti',
      features: [
        'Sviluppo tecnico fondamentale',
        'Coordinazione specifica per età',
        'Approccio mentale adeguato'
      ]
    },
    {
      id: '2',
      title: 'Junior 13-18 anni',
      description: 'Percorso tecnico-tattico per adolescenti con analisi dati per ottimizzare la progressione.',
      image: 'https://images.unsplash.com/photo-1542144582-1ba00456b5e3',
      link: '/programs/junior',
      features: [
        'Perfezionamento tecnico avanzato',
        'Preparazione fisica specifica',
        'Sviluppo autonomia decisionale'
      ]
    },
    {
      id: '3',
      title: 'Professionisti',
      description: 'Programma per atleti professionisti con analisi completa e ottimizzazione della performance.',
      image: 'https://images.unsplash.com/photo-1622279888158-c6a5e6c4587c',
      link: '/programs/pro',
      features: [
        'Analisi multidimensionale',
        'Ottimizzazione performance',
        'Pianificazione stagione agonistica'
      ]
    },
    {
      id: '4',
      title: 'Adulti',
      description: 'Programmi per giocatori amatoriali con supporto tecnologico personalizzato.',
      image: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff',
      link: '/programs/adult',
      features: [
        'Lezioni individuali e gruppi',
        'Affitto campi con analisi',
        'Clinics tematiche'
      ]
    },
    {
      id: '5',
      title: 'Coaching a Distanza',
      description: 'Supporto remoto continuo con analisi video, feedback tecnici e programmi personalizzati.',
      image: 'https://images.unsplash.com/photo-1606131731446-5568d87113aa',
      link: '/programs/remote',
      features: [
        'Analisi video dettagliata',
        'Feedback tecnici periodici',
        'Programmi personalizzati'
      ]
    },
    {
      id: '6',
      title: 'Percorsi Specifici',
      description: 'Preparazione intensiva per obiettivi mirati con protocolli personalizzati e monitoraggio.',
      image: 'https://images.unsplash.com/photo-1599586120429-48281b6f0ece',
      link: '/programs/specific',
      features: [
        'Preparazione tornei',
        'Recupero tecnico/fisico post-infortunio',
        'Valutazioni approfondite'
      ]
    },
  ];

  // Dati aggiornati degli allenatori con focus sulle competenze tecniche
  const coaches = [
    {
      id: '1',
      name: 'Marco Rossi',
      title: 'Head Coach',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136',
      bio: 'Certificazione ITF Livello 3. Specializzato in analisi biomeccanica e integrazione dati VICKI.'
    },
    {
      id: '2',
      name: 'Sofia Garcia',
      title: 'Junior Development Coach',
      image: 'https://images.unsplash.com/photo-1615109398623-88346a601842',
      bio: 'Esperta nello sviluppo atletico giovanile. Integra metodologie tecniche con crescita psicofisica.'
    },
    {
      id: '3',
      name: 'David Chen',
      title: 'Performance Specialist',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
      bio: 'Specialista in preparazione atletica tennistica con focus su prevenzione infortuni e ottimizzazione.'
    },
  ];

  // Testimonianze più dirette e tecniche
  const testimonials = [
    {
      id: '1',
      quote: "L'analisi oggettiva di ATH ha migliorato significativamente i miei parametri tecnici. I dati raccolti hanno permesso un'ottimizzazione precisa del mio gioco.",
      author: 'Emma Martins',
      role: 'Giocatore Junior, 16'
    },
    {
      id: '2',
      quote: "L'integrazione tra coaching tradizionale e sistema VICKI ha migliorato la mia consistenza del 23% in tre mesi, con rilevamenti oggettivi delle performance.",
      author: 'Michael Johnson',
      role: 'Giocatore Professionista'
    },
    {
      id: '3',
      quote: 'Il monitoraggio parametrico ha evidenziato inefficienze tecniche nel mio servizio che nessun coach aveva identificato prima, permettendomi correzioni mirate.',
      author: 'Robert Chen',
      role: 'Membro del Programma per Adulti'
    },
  ];

  // Statistiche aggiornate
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

  // Strutture con descrizioni più tecniche
  const facilities = [
    {
      id: '1',
      title: 'Campo Centrale ATP',
      description: 'Campo principale con sistema VICKI integrato, tribuna spettatori e standard ATP per tornei internazionali.',
      image: 'https://images.unsplash.com/photo-1625601429244-5eec3a14b8b2?q=80&w=1200'
    },
    {
      id: '2',
      title: 'Campi in Superficie Veloce',
      description: 'Due campi in superficie sintetica con coefficiente di attrito standardizzato e sistema di tracciamento integrato.',
      image: 'https://images.unsplash.com/photo-1544991936-9e0ee081bd27?q=80&w=1200'
    },
    {
      id: '3',
      title: 'Campi in Terra Rossa',
      description: 'Quattro campi in terra rossa calibrata, con manutenzione quotidiana e rilevamento parametrico completo.',
      image: 'https://images.unsplash.com/photo-1622279488220-3c7dd46f7c18?q=80&w=1200'
    },
    {
      id: '4',
      title: 'Centro Performance',
      description: 'Area dedicata all\'analisi dati e preparazione fisica, con strumentazione per valutazioni biomeccaniche e recupero.',
      image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1200'
    },
    {
      id: '5',
      title: 'Strutture per Giocatori',
      description: 'Spazi dedicati con connessione diretta al sistema VICKI per revisione dati, analisi video e pianificazione sessioni.',
      image: 'https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=1200'
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero 
          title="Advanced Tennis Hub"
          subtitle="Centro di allenamento ad alta specializzazione con monitoraggio parametrico completo e metodologia integrata"
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
              <p>ATH è un centro di allenamento specializzato che integra tecnologia avanzata e metodologia strutturata per offrire percorsi evolutivi personalizzati basati su dati oggettivi.</p>
              <p>Il sistema di monitoraggio parametrico garantisce continuità metodologica e supporto tecnico costante, indipendentemente dal coach presente in campo.</p>
              <p>La struttura costituisce una rete professionale aperta a coach, atleti e specialisti per ottimizzare il processo evolutivo tennistico attraverso un metodo oggettivo e misurabile.</p>
            </div>
          }
          image="https://images.unsplash.com/photo-1617711773026-ea7252c02cd3"
          buttons={[
            { text: "Scopri di più", href: '/about' }
          ]}
        />
        
        <ProgramsSection 
          title="Programmi"
          subtitle="Percorsi personalizzati con monitoraggio parametrico completo"
          programs={programs}
          className="bg-ath-gray"
          gridLayout="dense"
        />
        
        <StatsSection 
          stats={stats}
          darkBg={true}
        />
        
        <TechnologySection 
          title="Tecnologia VICKI"
          subtitle="Sistema di analisi con visione artificiale, AI e tracciamento 3D che analizza oltre 70 parametri in tempo reale"
        />
        
        <FacilitiesSection 
          title="Strutture"
          subtitle="Campi e spazi dotati di tecnologia VICKI per allenamento, analisi e ottimizzazione"
          facilities={facilities}
        />
        
        <CoachesSection 
          title="Coach e Staff"
          subtitle="Team tecnico specializzato nell'integrazione tra metodologia tradizionale e sistema VICKI"
          coaches={coaches}
        />
        
        <TestimonialsSection 
          title="Riscontri Oggettivi"
          subtitle="Risultati misurabili ottenuti attraverso il sistema di monitoraggio parametrico"
          testimonials={testimonials}
        />
        
        <AboutSection 
          title="Il Metodo ATH"
          description={
            <div className="space-y-4">
              <p>Il metodo ATH si basa su parametri oggettivi ottenuti attraverso tecnologia avanzata per guidare scientificamente il percorso evolutivo di ogni atleta.</p>
              <p>L'approccio integra tecnica, fisico, tattica, mentale e salute, garantendo continuità metodologica indipendentemente dal coach in campo.</p>
              <p>Ogni atleta riceve un supporto evolutivo costante con analisi dettagliate, feedback immediati e programmi personalizzati basati su dati misurabili.</p>
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
          subtitle="Richiedi informazioni tecniche o prenota una sessione di valutazione"
          address="Via del Tennis 123, 20873 Rodano (MI)"
          phone="+39 02 1234567"
          email="info@ath-tennis.it"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
