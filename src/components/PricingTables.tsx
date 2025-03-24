
import React from 'react';
import { Card } from '@/components/ui/card';
import VickiPoweredBadge from './VickiPoweredBadge';
import RevealAnimation from './RevealAnimation';

const PricingTables = () => {
  const performancePrograms = [
    {
      title: 'Performance 2',
      subtitle: '2 giorni a settimana',
      features: [
        '2 sessioni tennis da 1,5 ore (3 ore settimanali)',
        '2 sessioni atletica da 1,5 ore (3 ore settimanali)',
        'Massimo 3 atleti per campo',
      ],
      price: '4.000',
      vickiPowered: true
    },
    {
      title: 'Performance 3',
      subtitle: '3 giorni a settimana',
      features: [
        '3 sessioni tennis da 1,5 ore (4,5 ore settimanali)',
        '3 sessioni atletica da 1,5 ore (4,5 ore settimanali)',
        'Massimo 3 atleti per campo',
      ],
      price: '5.000',
      vickiPowered: true
    },
    {
      title: 'Performance 4',
      subtitle: '4 giorni a settimana',
      features: [
        '4 sessioni tennis da 1,5 ore (6 ore settimanali)',
        '4 sessioni atletica da 1,5 ore (6 ore settimanali)',
        'Massimo 2 atleti per campo',
      ],
      price: '6.500',
      vickiPowered: true
    },
    {
      title: 'Elite Performance',
      subtitle: '5 giorni a settimana (ridotto)',
      features: [
        '5 sessioni tennis da 1,5 ore (7,5 ore settimanali)',
        'Massimo 2 atleti per campo',
      ],
      price: '7.500',
      vickiPowered: true
    },
    {
      title: 'Elite Performance Full',
      subtitle: 'Programma completo',
      features: [
        '5 sessioni tennis mattina + 5 pomeriggio (totale 20 ore settimanali)',
        '7 sessioni atletica da 1,5 ore (10,5 ore settimanali)',
        'Massimo 2 atleti per campo',
      ],
      price: '15.000',
      vickiPowered: true,
      highlight: true
    }
  ];

  const juniorPrograms = [
    {
      title: 'SIT – Selezione e Individuazione Talenti',
      subtitle: 'under 8–10 + over 10',
      features: [
        '1 sessione tennis da 1 ora a settimana',
        '2 sessioni atletica da 1 ora a settimana',
      ],
      price: '950',
      vickiPowered: true
    },
    {
      title: 'SAT – Propedeutico',
      subtitle: 'under 4–6, sede di Rodano',
      features: [
        '1 sessione tennis da 1 ora a settimana',
        '1 sessione atletica da 30 minuti',
      ],
      price: '500',
      vickiOnRequest: true
    }
  ];

  const personalTrainingPrograms = [
    {
      title: 'Personal Training',
      subtitle: 'under 13–18',
      features: [
        '1 sessione tennis da 1 ora a settimana',
      ],
      price: '2.000',
      vickiPowered: true
    },
    {
      title: 'Private Personal Training',
      subtitle: 'Frequenza su richiesta',
      features: [],
      price: 'da definire',
      vickiPowered: true
    }
  ];

  const adultPrograms = [
    {
      title: 'Adult Training',
      subtitle: 'Per adulti',
      features: [
        '1 sessione tennis da 1 ora a settimana',
        'Attività in gruppo (4 persone per campo)',
      ],
      price: '700',
      vickiPowered: true
    },
    {
      title: 'Universitari / Scuole Online',
      subtitle: 'Programma flessibile',
      features: [
        '1 sessione a settimana da 1,5 ore (tennis opzionale)',
      ],
      price: '1.000',
      vickiOnRequest: true
    }
  ];

  const PricingCard = ({ program }: { program: any }) => (
    <Card className={`p-6 ${program.highlight ? 'border-purple-500 border-2' : ''}`}>
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-1">{program.title}</h3>
          <p className="text-gray-600 text-sm">{program.subtitle}</p>
        </div>
        <div className="mb-4 flex-grow">
          <ul className="space-y-2">
            {program.features.map((feature: string, index: number) => (
              <li key={index} className="text-sm flex items-start">
                <span className="mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-3">
            <span className="text-2xl font-bold">€{program.price}</span>
            {program.vickiPowered && <VickiPoweredBadge small />}
            {program.vickiOnRequest && <VickiPoweredBadge small onRequest />}
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <RevealAnimation>
          <h2 className="text-3xl font-display mb-2">Agonisti Performance ed Elite</h2>
          <p className="text-gray-600 mb-8">
            Percorsi ad alto contenuto tecnico e fisico, pensati per chi compete a livello FITP, Tennis Europe o ITF.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {performancePrograms.map((program, index) => (
              <RevealAnimation key={index} delay={index * 100}>
                <PricingCard program={program} />
              </RevealAnimation>
            ))}
          </div>
        </RevealAnimation>

        <RevealAnimation>
          <h2 className="text-3xl font-display mb-2">Junior Program</h2>
          <p className="text-gray-600 mb-8">
            Percorsi dedicati allo sviluppo motorio e tecnico dai 4 ai 12 anni.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {juniorPrograms.map((program, index) => (
              <RevealAnimation key={index} delay={index * 100}>
                <PricingCard program={program} />
              </RevealAnimation>
            ))}
          </div>
        </RevealAnimation>

        <RevealAnimation>
          <h2 className="text-3xl font-display mb-2">Personal Training</h2>
          <p className="text-gray-600 mb-8">
            Allenamenti individuali o su richiesta, per lavorare in modo specifico su aspetti tecnici e tattici.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {personalTrainingPrograms.map((program, index) => (
              <RevealAnimation key={index} delay={index * 100}>
                <PricingCard program={program} />
              </RevealAnimation>
            ))}
          </div>
        </RevealAnimation>

        <RevealAnimation>
          <h2 className="text-3xl font-display mb-2">Adulti e Universitari</h2>
          <p className="text-gray-600 mb-8">
            Programmi per adulti e studenti con esigenze di flessibilità.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adultPrograms.map((program, index) => (
              <RevealAnimation key={index} delay={index * 100}>
                <PricingCard program={program} />
              </RevealAnimation>
            ))}
          </div>
        </RevealAnimation>
      </div>
    </div>
  );
};

export default PricingTables;
