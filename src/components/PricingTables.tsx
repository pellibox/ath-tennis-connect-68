
import React from 'react';
import { Card } from '@/components/ui/card';
import VickiPoweredBadge from './VickiPoweredBadge';
import RevealAnimation from './RevealAnimation';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const PricingTables = () => {
  const performancePrograms = [
    {
      title: 'Performance 2',
      subtitle: '2 giorni a settimana (48 settimane)',
      features: [
        '2 sessioni tennis da 1,5 ore (3 ore settimanali)',
        '2 sessioni atletica da 1,5 ore (3 ore settimanali)',
        'Massimo 3 atleti per campo',
      ],
      price: '4.000',
      vickiPowered: true,
      link: '/programs/performance-2'
    },
    {
      title: 'Performance 3',
      subtitle: '3 giorni a settimana (48 settimane)',
      features: [
        '3 sessioni tennis da 1,5 ore (4,5 ore settimanali)',
        '3 sessioni atletica da 1,5 ore (4,5 ore settimanali)',
        'Massimo 3 atleti per campo',
      ],
      price: '5.000',
      vickiPowered: true,
      link: '/programs/performance-3'
    },
    {
      title: 'Performance 4',
      subtitle: '4 giorni a settimana (48 settimane)',
      features: [
        '4 sessioni tennis da 1,5 ore (6 ore settimanali)',
        '4 sessioni atletica da 1,5 ore (6 ore settimanali)',
        'Massimo 2 atleti per campo',
      ],
      price: '6.500',
      vickiPowered: true,
      link: '/programs/performance-4'
    },
    {
      title: 'Elite Performance',
      subtitle: '5 giorni a settimana (48 settimane)',
      features: [
        '5 sessioni tennis da 1,5 ore (7,5 ore settimanali)',
        'Massimo 2 atleti per campo',
      ],
      price: '7.500',
      vickiPowered: true,
      link: '/programs/elite-performance'
    },
    {
      title: 'Elite Performance Full',
      subtitle: 'Programma completo (48 settimane)',
      features: [
        '5 sessioni tennis mattina + 5 pomeriggio (totale 20 ore settimanali)',
        '7 sessioni atletica da 1,5 ore (10,5 ore settimanali)',
        'Massimo 2 atleti per campo',
      ],
      price: '15.000',
      vickiPowered: true,
      highlight: true,
      link: '/programs/elite-full'
    }
  ];

  const juniorPrograms = [
    {
      title: 'SIT – Selezione e Individuazione Talenti',
      subtitle: 'under 8–10 + over 10 (40 settimane)',
      features: [
        '1 sessione tennis da 1 ora a settimana',
        '2 sessioni atletica da 1 ora a settimana',
      ],
      price: '950',
      vickiPowered: true,
      link: '/programs/talent-identification'
    },
    {
      title: 'SAT – Propedeutico',
      subtitle: 'under 4–6, sede di Rodano (40 settimane)',
      features: [
        '1 sessione tennis da 1 ora a settimana',
        '1 sessione atletica da 30 minuti',
      ],
      price: '500',
      vickiOnRequest: true,
      link: '/programs/sat'
    }
  ];

  const personalTrainingPrograms = [
    {
      title: 'Personal Training',
      subtitle: 'under 13–18 (tutto l\'anno)',
      features: [
        '1 sessione tennis da 1 ora a settimana',
      ],
      price: '2.000',
      vickiPowered: true,
      link: '/programs/personal'
    },
    {
      title: 'Private Personal Training',
      subtitle: 'Frequenza su richiesta (tutto l\'anno)',
      features: [],
      price: 'Prezzo personalizzato',
      vickiPowered: true,
      link: '/programs/private'
    }
  ];

  const adultPrograms = [
    {
      title: 'Adult Training',
      subtitle: 'Per adulti (40 settimane)',
      features: [
        '1 sessione tennis da 1 ora a settimana',
        'Attività in gruppo (4 persone per campo)',
      ],
      price: '700',
      vickiPowered: true,
      link: '/programs/adult-training'
    },
    {
      title: 'Universitari / Scuole Online',
      subtitle: 'Programma flessibile (40 settimane)',
      features: [
        '1 sessione a settimana da 1,5 ore (tennis opzionale)',
      ],
      price: '1.000',
      vickiOnRequest: true,
      link: '/programs/university'
    }
  ];

  const coachPrograms = [
    {
      title: 'Coach / Allenatori',
      subtitle: 'Formazione avanzata (tutto l\'anno)',
      features: [
        'Accesso alla piattaforma di tracking e analisi video',
        'Integrazione con il sistema VICKI per analisi avanzata',
        'Creazione di un metodo personalizzato (codificabile nel sistema)',
        'Formazione continua e aggiornamento metodologico',
      ],
      price: 'Prezzo personalizzato',
      vickiPowered: true,
      link: '/programs/coach'
    }
  ];

  const clubPrograms = [
    {
      title: 'Club / Accademie',
      subtitle: 'Integrazione e supporto (tutto l\'anno)',
      features: [
        'Monitoraggio degli atleti su base oggettiva e condivisa',
        'Condivisione dati e report con staff multidisciplinare',
        'Possibilità di integrare ATH nel proprio centro/accademia',
        'Uso di AI e dashboard per ottimizzare sessioni e calendari',
      ],
      price: 'Prezzo personalizzato',
      vickiPowered: true,
      link: '/programs/club'
    }
  ];

  const PricingCard = ({ program }: { program: any }) => (
    <Card className={`p-6 ${program.highlight ? 'border-ath-clay border-2 shadow-lg' : 'hover:border-ath-clay/50'} transition-all duration-300`}>
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <h3 className={`text-xl font-semibold mb-1 ${program.highlight ? 'text-ath-clay' : ''}`}>{program.title}</h3>
          <p className="text-gray-600 text-sm">{program.subtitle}</p>
        </div>
        <div className="mb-4 flex-grow">
          <ul className="space-y-2">
            {program.features.map((feature: string, index: number) => (
              <li key={index} className="text-sm flex items-start">
                <span className="mr-2 text-ath-clay">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-3">
            <span className={`text-2xl font-bold ${program.highlight ? 'text-ath-clay' : ''}`}>€{program.price}</span>
            {program.vickiPowered && <VickiPoweredBadge small />}
            {program.vickiOnRequest && <VickiPoweredBadge small onRequest />}
          </div>
          <Link 
            to={program.link}
            className="w-full inline-flex items-center justify-center bg-ath-clay text-white py-2 px-4 rounded hover:bg-ath-clay/90 transition-colors mt-2"
          >
            Dettagli <ArrowRight size={16} className="ml-2" />
          </Link>
          {program.highlight && (
            <div className="h-1 w-full bg-ath-clay rounded-full mt-2"></div>
          )}
        </div>
      </div>
    </Card>
  );

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <RevealAnimation>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display mb-3 text-ath-clay">Il Valore della Tua Scelta</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              I nostri Percorsi verso l'Eccellenza Tennistica
            </p>
          </div>
        </RevealAnimation>

        <RevealAnimation>
          <h2 className="text-3xl font-display mb-2 border-l-4 border-ath-clay pl-3">Agonisti Performance ed Elite</h2>
          <p className="text-gray-600 mb-8">
            Percorsi ad alto contenuto tecnico e fisico, pensati per chi compete a livello FITP, Tennis Europe o ITF. Programmi di 48 settimane per un percorso verso il proprio massimo potenziale.
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
          <h2 className="text-3xl font-display mb-2 border-l-4 border-ath-clay pl-3">Junior Program</h2>
          <p className="text-gray-600 mb-8">
            Percorsi dedicati allo sviluppo motorio e tecnico dai 4 ai 12 anni. Programmi di 40 settimane.
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
          <h2 className="text-3xl font-display mb-2 border-l-4 border-ath-clay pl-3">Personal Training</h2>
          <p className="text-gray-600 mb-8">
            Allenamenti individuali o su richiesta, per lavorare in modo specifico su aspetti tecnici e tattici. Disponibili tutto l'anno.
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
          <h2 className="text-3xl font-display mb-2 border-l-4 border-ath-clay pl-3">Adulti e Universitari</h2>
          <p className="text-gray-600 mb-8">
            Programmi per adulti e studenti con esigenze di flessibilità. Programmi di 40 settimane.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {adultPrograms.map((program, index) => (
              <RevealAnimation key={index} delay={index * 100}>
                <PricingCard program={program} />
              </RevealAnimation>
            ))}
          </div>
        </RevealAnimation>
        
        <RevealAnimation>
          <h2 className="text-3xl font-display mb-2 border-l-4 border-ath-clay pl-3">Programmi per Coach</h2>
          <p className="text-gray-600 mb-8">
            Formazione e strumenti avanzati per allenatori di tennis. Disponibili tutto l'anno con prezzi personalizzati.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {coachPrograms.map((program, index) => (
              <RevealAnimation key={index} delay={index * 100}>
                <PricingCard program={program} />
              </RevealAnimation>
            ))}
          </div>
        </RevealAnimation>

        <RevealAnimation>
          <h2 className="text-3xl font-display mb-2 border-l-4 border-ath-clay pl-3">Programmi per Club</h2>
          <p className="text-gray-600 mb-8">
            Soluzioni per integrare il metodo ATH e la tecnologia VICKI™ nei centri tennistici e accademie. Prezzi personalizzati in base alle esigenze.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubPrograms.map((program, index) => (
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
