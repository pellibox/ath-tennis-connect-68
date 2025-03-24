
import { Server, Zap, BarChart3, Activity } from 'lucide-react';
import RevealAnimation from '../RevealAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

interface TechBenefitsProps {
  className?: string;
}

const TechBenefits = ({ className }: TechBenefitsProps) => {
  const { t } = useLanguage();

  // Technical benefits
  const technologies = [
    {
      icon: <Server className="w-10 h-10 mb-4 text-ath-clay" />,
      title: t('tech.data.title'),
      description: t('tech.data.desc')
    },
    {
      icon: <Zap className="w-10 h-10 mb-4 text-ath-clay" />,
      title: t('tech.analysis.title'),
      description: t('tech.analysis.desc')
    },
    {
      icon: <BarChart3 className="w-10 h-10 mb-4 text-ath-clay" />,
      title: t('tech.ai.title'),
      description: t('tech.ai.desc')
    },
    {
      icon: <Activity className="w-10 h-10 mb-4 text-ath-clay" />,
      title: t('tech.personal.title'),
      description: t('tech.personal.desc')
    }
  ];

  return (
    <RevealAnimation delay={200}>
      <div className={`mb-16 ${className}`}>
        <h3 className="text-2xl font-medium mb-8 text-center text-ath-clay font-swiss">La Tecnologia VICKI™</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <RevealAnimation key={index} delay={index * 100}>
              <div className="text-center p-6 bg-white shadow-sm border border-gray-100 rounded-lg h-full flex flex-col items-center hover:shadow-md transition-shadow">
                {tech.icon}
                <h3 className="text-xl font-medium mb-3 text-ath-clay font-swiss">{tech.title}</h3>
                <p className="text-gray-600 font-swiss">{tech.description.replace(/VICKI/g, 'Vicki™')}</p>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </RevealAnimation>
  );
};

export default TechBenefits;
