
import RevealAnimation from '../RevealAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

interface SummaryQuoteProps {
  className?: string;
}

const SummaryQuote = ({ className }: SummaryQuoteProps) => {
  const { t } = useLanguage();
  
  return (
    <RevealAnimation delay={600}>
      <div className={`mt-12 bg-white p-6 rounded-lg border border-ath-clay max-w-4xl mx-auto ${className}`}>
        <h4 className="text-xl font-bold text-ath-clay mb-4 text-left">
          Cos'è Vicki™ in breve:
        </h4>
        
        <ul className="space-y-3 mb-4">
          <li className="flex items-start">
            <span className="text-ath-clay font-bold mr-2 text-lg">•</span>
            <span className="text-ath-clay">
              Un sistema unico, sviluppato per potenziare le capacità del coach, non per sostituirle
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-ath-clay font-bold mr-2 text-lg">•</span>
            <span className="text-ath-clay">
              Tecnologia che fornisce dati e analisi che amplificano l'intuizione e l'esperienza dell'allenatore
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-ath-clay font-bold mr-2 text-lg">•</span>
            <span className="text-ath-clay">
              Monitora oltre 70 parametri in tempo reale per ogni colpo
            </span>
          </li>
        </ul>
        
        <p className="text-ath-clay font-bold font-swiss mb-4 text-left">
          ATH è oggi L'unico centro tennis al mondo che utilizza la tecnologia Vicki™
        </p>
        
        <div className="mt-4">
          <p className="text-ath-clay text-sm font-swiss text-left">
            VICKI™ opera come una lente d'ingrandimento nelle mani esperte del coach, trasformando la complessità dei dati in conoscenza pratica immediatamente applicabile.
          </p>
        </div>
      </div>
    </RevealAnimation>
  );
};

export default SummaryQuote;
