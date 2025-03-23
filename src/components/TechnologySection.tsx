
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

  const additionalFeatures = [
    {
      icon: <Rocket className="w-8 h-8 mb-3 text-ath-clay" />,
      title: t('tech.excellence.title'),
      description: t('tech.excellence.desc')
    },
    {
      icon: <LineChart className="w-8 h-8 mb-3 text-ath-clay" />,
      title: t('tech.continuous.title'),
      description: t('tech.continuous.desc')
    },
    {
      icon: <Users className="w-8 h-8 mb-3 text-ath-clay" />,
      title: t('tech.global.title'),
      description: t('tech.global.desc')
    },
    {
      icon: <Share2 className="w-8 h-8 mb-3 text-ath-clay" />,
      title: t('tech.comm.title'),
      description: t('tech.comm.desc')
    }
  ];

  return (
    <section id="technology" className={cn('py-20 px-6 lg:px-10', className)}>
      <div className="max-w-7xl mx-auto">
        <RevealAnimation>
          <div className="text-center mb-16 relative">
            {/* Vicki logo centered at the top */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                {/* Black Vicki logo */}
                <img 
                  src="/lovable-uploads/8f2b30a1-cb65-453e-ba82-d9721a192426.png" 
                  alt="Vicki™ Logo" 
                  className="h-28 w-auto" 
                />
                {/* Grey Vicki logo overlay */}
                <img 
                  src="/lovable-uploads/dc679c8d-60cd-4841-a42c-0907926b7ef5.png" 
                  alt="" 
                  className="h-28 w-auto absolute top-0 left-0 opacity-30" 
                />
              </div>
            </div>
            
            {/* Vicki subtitle */}
            <h3 className="text-2xl md:text-3xl font-display text-ath-clay mb-4">
              Vicki™: Visual Intelligent Coaching for Knowledge Insights
            </h3>
            
            {/* ATH Technological Advantage */}
            <h2 className="text-3xl md:text-4xl font-display text-center text-ath-clay">
              {title}
            </h2>
          </div>
        </RevealAnimation>
        
        {subtitle && (
          <RevealAnimation delay={100}>
            <p className="text-lg text-ath-clay max-w-3xl mx-auto text-center mb-8">{subtitle}</p>
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-sm shadow-sm mb-12">
              <p className="text-gray-700 mb-4">
                VICKI™ è un sistema avanzato di analisi per il tennis che combina visione artificiale, intelligenza artificiale e conoscenze tecniche. Monitora oltre 70 parametri in tempo reale e li trasforma in analisi utili per allenatori e atleti.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium mb-2">1. Visual – Visione Artificiale</h4>
                  <p className="text-gray-600 mb-1">Tracking ad alta frequenza di ogni dettaglio del gioco</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">2. Intelligent – Algoritmi Predittivi</h4>
                  <p className="text-gray-600 mb-1">Machine learning per prevedere e migliorare le prestazioni</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">3. Coaching Knowledge</h4>
                  <p className="text-gray-600 mb-1">Expertise digitale per suggerimenti personalizzati</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">4. Insight – Personalizzazione</h4>
                  <p className="text-gray-600 mb-1">Dati convertiti in strategie di allenamento su misura</p>
                </div>
              </div>
            </div>
          </RevealAnimation>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {technologies.map((tech, index) => (
            <RevealAnimation key={index} delay={index * 100}>
              <div className="text-center p-6 bg-white shadow-sm border border-gray-100 rounded-lg h-full flex flex-col items-center hover:shadow-md transition-shadow">
                {tech.icon}
                <h3 className="text-xl font-medium mb-3 text-ath-clay">{tech.title}</h3>
                <p className="text-gray-600">{tech.description.replace(/VICKI/g, 'Vicki™')}</p>
              </div>
            </RevealAnimation>
          ))}
        </div>
        
        <RevealAnimation delay={400}>
          <div className="mt-16 text-center">
            <h4 className="text-xl font-medium mb-8 text-ath-clay">{t('tech.title')}</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {additionalFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-5 rounded-lg border border-ath-clay border-opacity-20 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-3">
                    {feature.icon}
                    <h5 className="text-lg font-medium ml-2 text-ath-clay">{feature.title}</h5>
                  </div>
                  <p className="text-gray-600 text-sm">{feature.description.replace(/VICKI/g, 'Vicki™')}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 bg-ath-clay bg-opacity-5 p-6 rounded-lg border border-ath-clay border-opacity-20 max-w-4xl mx-auto">
              <p className="text-ath-clay italic font-medium">
                {t('tech.quote').replace(/VICKI/g, 'Vicki™')}
              </p>
              <p className="text-ath-clay mt-4 font-bold">
                {t('tech.only').replace(/VICKI/g, 'Vicki™')}
              </p>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default TechnologySection;
