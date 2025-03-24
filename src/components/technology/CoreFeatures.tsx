
import { Eye, Cpu, Users, Brain, Target } from 'lucide-react';
import RevealAnimation from '../RevealAnimation';

interface CoreFeaturesProps {
  className?: string;
}

const CoreFeatures = ({ className }: CoreFeaturesProps) => {
  // Core Vicki features - Visual, Intelligent, Coaching, Knowledge, Insights
  const coreFeatures = [
    {
      icon: <Eye className="w-12 h-12 mb-4 text-ath-clay" />,
      title: "Visual",
      description: "Tecnologia di tracking ad alta frequenza per registrare ogni dettaglio del gioco con oltre 70 parametri monitorati."
    },
    {
      icon: <Cpu className="w-12 h-12 mb-4 text-ath-clay" />,
      title: "Intelligent",
      description: "Algoritmi predittivi di machine learning per analizzare i dati raccolti e prevedere tendenze di miglioramento."
    },
    {
      icon: <Users className="w-12 h-12 mb-4 text-ath-clay" />,
      title: "Coaching",
      description: "Expertise dei coach integrata in una libreria digitale, posizionando l'allenatore al centro del processo decisionale."
    },
    {
      icon: <Brain className="w-12 h-12 mb-4 text-ath-clay" />,
      title: "Knowledge",
      description: "Conoscenze tecniche trasformate in metodologie digitali per supportare le decisioni del coach e del team multidisciplinare."
    },
    {
      icon: <Target className="w-12 h-12 mb-4 text-ath-clay" />,
      title: "Insights",
      description: "Conversione dei dati in strategie di allenamento su misura, valorizzando l'esperienza e l'intuizione del coach."
    }
  ];

  return (
    <RevealAnimation delay={150}>
      <div className={`mb-16 ${className}`}>
        <h3 className="text-2xl font-medium mb-8 text-center text-ath-clay font-swiss">Il Significato di VICKI™</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {coreFeatures.map((feature, index) => (
            <RevealAnimation key={index} delay={index * 50}>
              <div className="bg-white p-6 shadow-sm rounded-md border border-gray-100 text-center h-full flex flex-col items-center hover:shadow-md transition-shadow">
                {feature.icon}
                <h4 className="text-xl font-medium mb-3 text-ath-clay font-swiss">{feature.title}</h4>
                <p className="text-gray-600 text-sm font-swiss">{feature.description}</p>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </RevealAnimation>
  );
};

export default CoreFeatures;
