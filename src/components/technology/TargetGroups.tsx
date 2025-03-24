
import { Rocket, LineChart, AreaChart, Share2 } from 'lucide-react';
import RevealAnimation from '../RevealAnimation';

interface TargetGroupsProps {
  className?: string;
}

const TargetGroups = ({ className }: TargetGroupsProps) => {
  // Target groups
  const targetGroups = [
    {
      icon: <Rocket className="w-8 h-8 mb-3 text-ath-clay" />,
      title: "Giovani Agonisti (6-12)",
      description: "Analisi biomeccanica costante con valutazioni tecniche, fisiche e mentali adattate alla crescita."
    },
    {
      icon: <LineChart className="w-8 h-8 mb-3 text-ath-clay" />,
      title: "Junior Agonisti (13-18)",
      description: "Analisi in tempo reale di ogni colpo con feedback continuo e prevenzione infortuni."
    },
    {
      icon: <AreaChart className="w-8 h-8 mb-3 text-ath-clay" />,
      title: "Professionisti",
      description: "Dati integrati con il team tecnico e analisi predittive per ottimizzare ogni dettaglio."
    },
    {
      icon: <Share2 className="w-8 h-8 mb-3 text-ath-clay" />,
      title: "Coach e Club",
      description: "Strumenti di tracking, analisi e possibilità di creare e monetizzare metodi proprietari."
    }
  ];

  return (
    <RevealAnimation delay={400}>
      <div className={`mb-16 ${className}`}>
        <h3 className="text-2xl font-medium mb-8 text-center text-ath-clay font-swiss">Target Groups</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {targetGroups.map((group, index) => (
            <RevealAnimation key={index} delay={index * 50}>
              <div className="bg-white p-5 rounded-lg border border-ath-clay border-opacity-20 shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="flex items-center mb-3">
                  {group.icon}
                  <h5 className="text-lg font-medium ml-2 text-ath-clay font-swiss">{group.title}</h5>
                </div>
                <p className="text-gray-600 text-sm font-swiss">{group.description}</p>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </RevealAnimation>
  );
};

export default TargetGroups;
