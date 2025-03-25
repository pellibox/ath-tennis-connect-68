
import React from 'react';
import { Activity, Users, Calendar, Award, FileText, MapPin, School, Target, LayoutGrid, Zap, BookOpen, Server } from 'lucide-react';
import ButtonLink from './ButtonLink';
import RevealAnimation from './RevealAnimation';
import { cn } from '@/lib/utils';

interface Stat {
  id: string;
  value: number;
  suffix?: string;
  label: string;
}

interface StatsAndNavSectionProps {
  stats: Stat[];
  className?: string;
}

const StatsAndNavSection = ({ stats, className }: StatsAndNavSectionProps) => {
  // Navigation sections - Enhanced with more descriptive titles and concise summaries
  const navSections = [
    {
      title: 'Perché ATH',
      originalTitle: 'Chi Siamo',
      icon: <School className="w-10 h-10 text-ath-clay mb-4" />,
      description: 'Scopri la nostra visione e missione',
      keyPoints: [
        'Centro tennis unico al mondo con tecnologia Vicki™',
        'Metodo innovativo per ogni livello di giocatore',
        'Team di esperti con competenze multidisciplinari'
      ],
      href: '/about',
      image: '/lovable-uploads/9e980860-a20e-4ae3-839c-6d91f306bd07.png'
    },
    {
      title: 'Il Metodo ATH',
      originalTitle: 'Il Metodo',
      icon: <BookOpen className="w-10 h-10 text-ath-clay mb-4" />,
      description: 'Comprendi la metodologia ATH',
      keyPoints: [
        'Integrazione di tecnologia e coaching tradizionale',
        'Approccio personalizzato basato su dati',
        'Sviluppo tecnico, fisico e mentale integrato'
      ],
      href: '/method',
      image: '/lovable-uploads/fc6643c2-4357-4c86-9e52-6f33d698668f.png'
    },
    {
      title: 'Percorsi Formativi',
      originalTitle: 'Programmi',
      icon: <Target className="w-10 h-10 text-ath-clay mb-4" />,
      description: 'Scopri i nostri percorsi personalizzati per ogni livello',
      keyPoints: [
        'Programmi per junior, adulti e professionisti',
        'Formazione Elite per atleti agonisti',
        'Corsi di gruppo e lezioni individuali'
      ],
      href: '/programs',
      image: '/lovable-uploads/ef64c04d-055d-4d70-87f4-e67928a3b8e6.png'
    },
    {
      title: 'Sistema Vicki™',
      originalTitle: 'Tecnologia',
      icon: <Zap className="w-10 h-10 text-ath-clay mb-4" />,
      description: 'Esplora il sistema Vicki™ e i suoi benefici',
      keyPoints: [
        'Monitoraggio in tempo reale di oltre 70 parametri',
        'Analisi tecnica dettagliata per ogni colpo',
        'Visualizzazione dati per coach e atleti'
      ],
      href: '/technology',
      image: '/lovable-uploads/8f2b30a1-cb65-453e-ba82-d9721a192426.png'
    },
    {
      title: 'I Nostri Campi',
      originalTitle: 'Strutture',
      icon: <Server className="w-10 h-10 text-ath-clay mb-4" />,
      description: 'Visita i nostri campi e spazi di allenamento',
      keyPoints: [
        '6 campi equipaggiati con tecnologia Vicki™',
        'Strutture indoor e outdoor di alta qualità',
        'Palestra e aree dedicate alla preparazione atletica'
      ],
      href: '/facilities',
      image: '/lovable-uploads/a16b623a-92f5-4f89-9c3d-d01262778f95.png'
    },
    {
      title: 'Team Tecnico',
      originalTitle: 'Coach',
      icon: <Users className="w-10 h-10 text-ath-clay mb-4" />,
      description: 'Conosci il nostro team di esperti',
      keyPoints: [
        'Coach certificati con competenze specialistiche',
        'Preparatori atletici e mental coach',
        'Specialisti in analisi dati e biomeccanica'
      ],
      href: '/coaches',
      image: '/lovable-uploads/67883085-3eed-4f22-8828-cbbde8355e70.png'
    },
    {
      title: 'Trova ATH',
      originalTitle: 'Contatti',
      icon: <MapPin className="w-10 h-10 text-ath-clay mb-4" />,
      description: 'Vieni a trovarci a Rodano',
      keyPoints: [
        'Via F. Turati, 9, 20090 Rodano (MI)',
        'Facilmente raggiungibile da Milano',
        'Prenota una visita o una sessione di prova'
      ],
      href: '/contact',
      image: '/lovable-uploads/38147937-4cd3-4caa-9a19-c801e8255f36.png'
    },
  ];

  return (
    <section className={cn('py-16 px-6 lg:px-10', className)}>
      <div className="max-w-7xl mx-auto">
        <RevealAnimation>
          <h2 className="text-3xl md:text-4xl font-display text-center mb-12">
            Il Centro di Eccellenza per il Tennis
          </h2>
        </RevealAnimation>

        {/* Stats with custom infographic style */}
        <div className="bg-gradient-to-r from-black to-ath-clay rounded-xl p-8 mb-20 text-white shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <RevealAnimation key={stat.id} delay={index * 100}>
                <div className="text-center flex flex-col items-center">
                  {index === 0 && <Activity className="w-12 h-12 mb-3 text-white opacity-80" />}
                  {index === 1 && <FileText className="w-12 h-12 mb-3 text-white opacity-80" />}
                  {index === 2 && <Calendar className="w-12 h-12 mb-3 text-white opacity-80" />}
                  {index === 3 && <Award className="w-12 h-12 mb-3 text-white opacity-80" />}
                  
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {stat.value}{stat.suffix || ''}
                  </div>
                  <p className="text-gray-200 font-medium">
                    {stat.label}
                  </p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>

        {/* Navigation Cards - Updated with more emphasis as main navigation */}
        <RevealAnimation delay={200}>
          <h3 className="text-2xl md:text-3xl font-display text-center mb-12">
            Esplora ATH
          </h3>
        </RevealAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {navSections.map((section, index) => (
            <RevealAnimation key={section.title} delay={index * 100}>
              <div className="group relative overflow-hidden rounded-xl shadow-lg h-auto hover:shadow-xl transition-all">
                <img 
                  src={section.image} 
                  alt={section.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center mb-2">
                    {section.icon}
                  </div>
                  <h4 className="text-2xl font-display mb-3">{section.title}</h4>
                  <p className="mb-4 text-gray-200 text-sm">{section.description}</p>
                  
                  {/* Key points as bullet list */}
                  <ul className="mb-4 text-sm text-gray-300 space-y-1">
                    {section.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <ButtonLink 
                    href={section.href} 
                    variant="primary"
                    size="sm"
                    className="mt-2"
                  >
                    Scopri di più
                  </ButtonLink>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsAndNavSection;
