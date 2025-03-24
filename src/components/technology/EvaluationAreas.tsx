
import { Settings, Target, Activity, Brain, Shield, Sparkles } from 'lucide-react';
import RevealAnimation from '../RevealAnimation';

interface EvaluationAreasProps {
  className?: string;
}

const EvaluationAreas = ({ className }: EvaluationAreasProps) => {
  // Evaluation areas
  const evaluationAreas = [
    {
      icon: <Settings className="w-8 h-8 mb-3 text-ath-clay" />,
      title: "Tecnica",
      description: "Analisi biomeccanica completa di tutti i colpi, tracking 3D della racchetta e valutazione del movimento."
    },
    {
      icon: <Target className="w-8 h-8 mb-3 text-ath-clay" />,
      title: "Tattica",
      description: "Mappatura degli schemi di gioco, gestione dello scambio e analisi delle situazioni chiave."
    },
    {
      icon: <Activity className="w-8 h-8 mb-3 text-ath-clay" />,
      title: "Atletica",
      description: "Monitoraggio del movimento, parametri fisici e valutazione delle capacità fisiche con prevenzione infortuni."
    },
    {
      icon: <Brain className="w-8 h-8 mb-3 text-ath-clay" />,
      title: "Mentale",
      description: "Analisi comportamentale, gestione della pressione e valutazione della resilienza durante il gioco."
    },
    {
      icon: <Shield className="w-8 h-8 mb-3 text-ath-clay" />,
      title: "Medica",
      description: "Analisi posturale, gestione della salute e monitoraggio per la prevenzione di infortuni."
    },
    {
      icon: <Sparkles className="w-8 h-8 mb-3 text-ath-clay" />,
      title: "Biochimica",
      description: "Monitoraggio metabolico, stato nutrizionale e analisi del recupero dopo allenamenti intensivi."
    }
  ];

  return (
    <RevealAnimation delay={300}>
      <div className={`mb-16 ${className}`}>
        <h3 className="text-2xl font-medium mb-8 text-center text-ath-clay font-swiss">Sistema di Valutazione Integrato</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {evaluationAreas.map((area, index) => (
            <RevealAnimation key={index} delay={index * 50}>
              <div className="bg-white p-5 rounded-lg border border-ath-clay border-opacity-20 shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="flex items-center mb-3">
                  {area.icon}
                  <h5 className="text-lg font-medium ml-2 text-ath-clay font-swiss">{area.title}</h5>
                </div>
                <p className="text-gray-600 text-sm font-swiss">{area.description}</p>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </RevealAnimation>
  );
};

export default EvaluationAreas;
