
import RevealAnimation from '../RevealAnimation';
import VickiMonitoringBadge, { MonitoringLevel } from '../VickiMonitoringBadge';
import { useIsMobile } from '@/hooks/use-mobile';

interface VickiMonitoringLevelsProps {
  className?: string;
}

const VickiMonitoringLevels = ({ className }: VickiMonitoringLevelsProps) => {
  const isMobile = useIsMobile();
  
  // Monitoring levels for display
  const monitoringLevels: { level: MonitoringLevel, label: string }[] = [
    { level: 'basic', label: 'Base' },
    { level: 'standard', label: 'Standard' },
    { level: 'advanced', label: 'Avanzato' },
    { level: 'elite', label: 'Elite' },
    { level: 'pro', label: 'Pro' }
  ];

  return (
    <RevealAnimation delay={250}>
      <div className={`mb-16 ${className}`}>
        <h3 className="text-2xl font-medium mb-8 text-center text-ath-clay font-swiss">Livelli di Monitoraggio Vicki™</h3>
        <p className="text-center max-w-3xl mx-auto mb-8 text-gray-600 font-swiss">
          Il sistema Vicki™ offre diversi livelli di monitoraggio per adattarsi alle esigenze specifiche di ogni atleta,
          dal principiante fino al professionista.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {monitoringLevels.map((item) => (
            <div key={item.level} className="text-center bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <VickiMonitoringBadge level={item.level} showLabel={false} className="mb-3" size="lg" />
              <span className="text-lg font-medium block mb-2">{item.label}</span>
              <p className={`text-gray-500 max-w-[180px] ${isMobile ? 'text-xs' : 'text-sm'}`}>
                {item.level === 'basic' && "Monitoraggio fondamentale per principianti e amatori"}
                {item.level === 'standard' && "Analisi intermedia per giocatori in sviluppo"}
                {item.level === 'advanced' && "Monitoraggio avanzato per agonisti"}
                {item.level === 'elite' && "Sistema completo per professionisti e top players"}
                {item.level === 'pro' && "Monitoraggio d'élite per giocatori di altissimo livello"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </RevealAnimation>
  );
};

export default VickiMonitoringLevels;
