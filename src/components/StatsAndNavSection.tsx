
import React from 'react';
import { Activity, Users, Calendar, Award, FileText, MapPin, School, Target, LayoutGrid } from 'lucide-react';
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
  // Navigation sections
  const navSections = [
    {
      title: 'Programmi',
      icon: <Target className="w-10 h-10 text-ath-clay mb-4" />,
      description: 'Scopri i nostri percorsi personalizzati per ogni livello',
      href: '/programs',
      image: '/lovable-uploads/ef64c04d-055d-4d70-87f4-e67928a3b8e6.png'
    },
    {
      title: 'Tecnologia',
      icon: <FileText className="w-10 h-10 text-ath-clay mb-4" />,
      description: 'Esplora il sistema Vicki™ e i suoi benefici',
      href: '/technology',
      image: '/lovable-uploads/cabb225e-0db8-4830-8967-24942c8f7d52.png'
    },
    {
      title: 'Strutture',
      icon: <LayoutGrid className="w-10 h-10 text-ath-clay mb-4" />,
      description: 'Visita i nostri campi e spazi di allenamento',
      href: '/facilities',
      image: '/lovable-uploads/a16b623a-92f5-4f89-9c3d-d01262778f95.png'
    },
    {
      title: 'Il Metodo',
      icon: <School className="w-10 h-10 text-ath-clay mb-4" />,
      description: 'Comprendi la metodologia ATH',
      href: '/method',
      image: '/lovable-uploads/b0cf5344-de4c-404e-9c7b-916d765a8df0.png'
    },
    {
      title: 'Coach',
      icon: <Users className="w-10 h-10 text-ath-clay mb-4" />,
      description: 'Conosci il nostro team tecnico',
      href: '/coaches',
      image: '/lovable-uploads/67883085-3eed-4f22-8828-cbbde8355e70.png'
    },
    {
      title: 'Contatti',
      icon: <MapPin className="w-10 h-10 text-ath-clay mb-4" />,
      description: 'Vieni a trovarci a Rodano',
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

        {/* Navigation Cards */}
        <RevealAnimation delay={200}>
          <h3 className="text-2xl md:text-3xl font-display text-center mb-12">
            Esplora ATH
          </h3>
        </RevealAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {navSections.map((section, index) => (
            <RevealAnimation key={section.title} delay={index * 100}>
              <div className="group relative overflow-hidden rounded-xl shadow-lg h-80">
                <img 
                  src={section.image} 
                  alt={section.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center mb-2">
                    {section.icon}
                  </div>
                  <h4 className="text-2xl font-display mb-2">{section.title}</h4>
                  <p className="mb-4 text-gray-200">{section.description}</p>
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
