
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import RevealAnimation from './RevealAnimation';
import VickiHeader from './technology/VickiHeader';
import CoachCentered from './technology/CoachCentered';
import CoreFeatures from './technology/CoreFeatures';
import TechBenefits from './technology/TechBenefits';
import EvaluationAreas from './technology/EvaluationAreas';
import TargetGroups from './technology/TargetGroups';
import VickiPower from './technology/VickiPower';
import SummaryQuote from './technology/SummaryQuote';
import VickiMonitoringLevels from './technology/VickiMonitoringLevels';
import { useIsMobile } from '@/hooks/use-mobile';

interface TechnologySectionProps {
  title: string;
  subtitle?: string;
  className?: string;
  id?: string;
}

const TechnologySection = ({ 
  title, 
  subtitle,
  className,
  id 
}: TechnologySectionProps) => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  
  return (
    <section id={id} className={cn('py-20 px-6 lg:px-10', className)}>
      <div className="max-w-7xl mx-auto">
        {/* Header with Vicki logo */}
        <VickiHeader title={title} />
        
        {/* Subtitle if provided */}
        {subtitle && (
          <RevealAnimation delay={100}>
            <p className={`text-ath-clay max-w-3xl mx-auto text-center mb-12 font-swiss ${isMobile ? 'text-base' : 'text-lg'}`}>
              {subtitle}
            </p>
          </RevealAnimation>
        )}
        
        {/* Coach-Centered Approach */}
        <CoachCentered />
        
        {/* What is VICKI - core components explained */}
        <CoreFeatures />
        
        {/* VICKI Technology Benefits */}
        <TechBenefits />
        
        {/* VICKI Monitoring Levels */}
        <VickiMonitoringLevels />
        
        {/* VICKI Evaluation Areas */}
        <EvaluationAreas />
        
        {/* Target Groups */}
        <TargetGroups />
        
        {/* Visual representation of data flow */}
        <VickiPower />
        
        {/* Summary quote */}
        <SummaryQuote />
      </div>
    </section>
  );
};

export default TechnologySection;
