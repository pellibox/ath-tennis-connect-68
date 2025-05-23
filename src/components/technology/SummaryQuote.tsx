
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
        <p className="text-ath-clay italic font-swiss mb-4 text-left">
          Vicki™ è un sistema unico, specificamente sviluppato per potenziare le capacità del coach, non per sostituirle.
        </p>
        
        <p className="text-ath-clay font-swiss mb-4 text-left">
          L'expertise umana rimane essenziale nel processo di allenamento. La tecnologia fornisce dati e analisi in tempo 
          reale che amplificano l'intuizione e l'esperienza dell'allenatore. Vicki™ analizza oltre 70 parametri tecnici durante 
          ogni sessione e offre feedback immediato e documentazione dettagliata dei progressi.
        </p>
        
        <p className="text-ath-clay font-bold font-swiss mb-4 text-left">
          ATH è oggi L'unico centro tennis al mondo che utilizza la tecnologia Vicki™
        </p>
        
        <div className="mt-4 pt-4 border-t border-ath-clay/20">
          <p className="text-ath-clay text-sm font-swiss text-left">
            VICKI™ opera come una lente d'ingrandimento nelle mani esperte del coach, trasformando la complessità dei dati in conoscenza pratica immediatamente applicabile.
          </p>
        </div>
      </div>
    </RevealAnimation>
  );
};

export default SummaryQuote;
