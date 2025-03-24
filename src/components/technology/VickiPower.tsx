
import { Zap, Brain, Rocket } from 'lucide-react';
import RevealAnimation from '../RevealAnimation';

interface VickiPowerProps {
  className?: string;
}

const VickiPower = ({ className }: VickiPowerProps) => {
  return (
    <RevealAnimation delay={500}>
      <div className={`relative py-12 px-8 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-100 shadow-sm mb-16 ${className}`}>
        <h3 className="text-2xl font-medium mb-6 text-center text-ath-clay font-swiss">Il Potere di VICKI™</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-md shadow-sm border border-ath-clay border-opacity-10 text-center">
            <Zap className="w-12 h-12 mx-auto mb-4 text-ath-clay" />
            <h4 className="text-lg font-medium mb-2 text-ath-clay font-swiss">Potenza Analitica</h4>
            <p className="text-gray-600 text-sm font-swiss">Integrazione di visione artificiale e machine learning per analizzare decine di parametri in tempo reale.</p>
          </div>
          
          <div className="bg-white p-6 rounded-md shadow-sm border border-ath-clay border-opacity-10 text-center">
            <Brain className="w-12 h-12 mx-auto mb-4 text-ath-clay" />
            <h4 className="text-lg font-medium mb-2 text-ath-clay font-swiss">Potenza Cognitiva</h4>
            <p className="text-gray-600 text-sm font-swiss">Trasformazione di informazioni complesse in conoscenza pratica, apprendendo dall'esperienza dei professionisti.</p>
          </div>
          
          <div className="bg-white p-6 rounded-md shadow-sm border border-ath-clay border-opacity-10 text-center">
            <Rocket className="w-12 h-12 mx-auto mb-4 text-ath-clay" />
            <h4 className="text-lg font-medium mb-2 text-ath-clay font-swiss">Potenza Trasformativa</h4>
            <p className="text-gray-600 text-sm font-swiss">Amplificazione dell'expertise umana, personalizzazione degli interventi e accelerazione dello sviluppo in ogni dimensione.</p>
          </div>
        </div>
      </div>
    </RevealAnimation>
  );
};

export default VickiPower;
