
import RevealAnimation from '../RevealAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

interface SummaryQuoteProps {
  className?: string;
}

const SummaryQuote = ({ className }: SummaryQuoteProps) => {
  const { t } = useLanguage();
  
  return (
    <RevealAnimation delay={600}>
      <div className={`mt-12 bg-ath-clay bg-opacity-5 p-6 rounded-lg border border-ath-clay border-opacity-20 max-w-4xl mx-auto ${className}`}>
        <p className="text-ath-clay italic font-swiss">
          {t('tech.quote').replace(/VICKI/g, 'Vicki™')}
        </p>
        <p className="text-ath-clay mt-4 font-bold font-swiss">
          {t('tech.only').replace(/VICKI/g, 'Vicki™')}
        </p>
        
        <div className="mt-6 text-center">
          <p className="text-ath-clay text-sm font-swiss">
            VICKI™ opera come una lente d'ingrandimento nelle mani esperte del coach, trasformando la complessità dei dati in conoscenza pratica immediatamente applicabile.
          </p>
        </div>
      </div>
    </RevealAnimation>
  );
};

export default SummaryQuote;
