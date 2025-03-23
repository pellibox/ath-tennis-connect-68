
import { Server, Zap, BarChart3, Activity, Users, LineChart, Rocket, Share2 } from 'lucide-react';
import RevealAnimation from './RevealAnimation';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

interface TechnologySectionProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const TechnologySection = ({ 
  title, 
  subtitle,
  className 
}: TechnologySectionProps) => {
  const { t } = useLanguage();
  
  const technologies = [
    {
      icon: <Server className="w-10 h-10 mb-4 text-purple-600" />,
      title: t('tech.data.title'),
      description: t('tech.data.desc')
    },
    {
      icon: <Zap className="w-10 h-10 mb-4 text-purple-600" />,
      title: t('tech.analysis.title'),
      description: t('tech.analysis.desc')
    },
    {
      icon: <BarChart3 className="w-10 h-10 mb-4 text-purple-600" />,
      title: t('tech.ai.title'),
      description: t('tech.ai.desc')
    },
    {
      icon: <Activity className="w-10 h-10 mb-4 text-purple-600" />,
      title: t('tech.personal.title'),
      description: t('tech.personal.desc')
    }
  ];

  const additionalFeatures = [
    {
      icon: <Rocket className="w-8 h-8 mb-3 text-purple-600" />,
      title: t('tech.excellence.title'),
      description: t('tech.excellence.desc')
    },
    {
      icon: <LineChart className="w-8 h-8 mb-3 text-purple-600" />,
      title: t('tech.continuous.title'),
      description: t('tech.continuous.desc')
    },
    {
      icon: <Users className="w-8 h-8 mb-3 text-purple-600" />,
      title: t('tech.global.title'),
      description: t('tech.global.desc')
    },
    {
      icon: <Share2 className="w-8 h-8 mb-3 text-purple-600" />,
      title: t('tech.comm.title'),
      description: t('tech.comm.desc')
    }
  ];

  return (
    <section className={cn('py-20 px-6 lg:px-10 bg-gray-50', className)}>
      <div className="max-w-7xl mx-auto">
        <RevealAnimation>
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4">{t('tech.exclusive')}</span>
            <h2 className="text-3xl md:text-4xl font-display text-center mb-2">{title}</h2>
            <h3 className="text-2xl md:text-3xl font-display text-center text-purple-600 mb-4">{t('tech.vicki')}</h3>
          </div>
        </RevealAnimation>
        
        {subtitle && (
          <RevealAnimation delay={100}>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">{subtitle}</p>
          </RevealAnimation>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {technologies.map((tech, index) => (
            <RevealAnimation key={index} delay={index * 100}>
              <div className="text-center p-6 bg-white shadow-sm border border-gray-100 rounded-lg h-full flex flex-col items-center hover:shadow-md transition-shadow">
                {tech.icon}
                <h3 className="text-xl font-medium mb-3">{tech.title}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            </RevealAnimation>
          ))}
        </div>
        
        <RevealAnimation delay={400}>
          <div className="mt-16 text-center">
            <h4 className="text-xl font-medium mb-8 text-purple-600">{t('tech.title')}</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {additionalFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-5 rounded-lg border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-3">
                    {feature.icon}
                    <h5 className="text-lg font-medium ml-2">{feature.title}</h5>
                  </div>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 bg-purple-50 p-6 rounded-lg border border-purple-100 max-w-4xl mx-auto">
              <p className="text-gray-700 italic font-medium">
                {t('tech.quote')}
              </p>
              <p className="text-purple-600 mt-4 font-bold">
                {t('tech.only')}
              </p>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default TechnologySection;
