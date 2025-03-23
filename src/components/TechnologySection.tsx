
import { Server, Zap, BarChart3, Activity } from 'lucide-react';
import RevealAnimation from './RevealAnimation';
import { cn } from '@/lib/utils';

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
  const technologies = [
    {
      icon: <Server className="w-10 h-10 mb-4" />,
      title: "Advanced Data Collection",
      description: "Our sophisticated system monitors and analyzes over 70 specific tennis performance parameters in real-time during every session."
    },
    {
      icon: <Zap className="w-10 h-10 mb-4" />,
      title: "Real-Time Analysis",
      description: "High-speed cameras and sensors capture every movement, stroke and tactical decision, providing immediate insights for on-the-spot adjustments."
    },
    {
      icon: <BarChart3 className="w-10 h-10 mb-4" />,
      title: "AI-Powered Insights",
      description: "Our artificial intelligence system analyzes every aspect of performance, identifying patterns and improvement opportunities that might escape even expert observation."
    },
    {
      icon: <Activity className="w-10 h-10 mb-4" />,
      title: "Personalized Development",
      description: "The machine learning system evolves with each session, continually refining analyses and recommendations for your unique playing style and goals."
    }
  ];

  return (
    <section className={cn('py-20 px-6 lg:px-10 bg-gray-50', className)}>
      <div className="max-w-7xl mx-auto">
        <RevealAnimation>
          <h2 className="text-3xl md:text-4xl font-display text-center mb-4">{title}</h2>
        </RevealAnimation>
        
        {subtitle && (
          <RevealAnimation delay={100}>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">{subtitle}</p>
          </RevealAnimation>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {technologies.map((tech, index) => (
            <RevealAnimation key={index} delay={index * 100}>
              <div className="text-center p-6 bg-white shadow-sm border border-gray-100 h-full flex flex-col items-center">
                {tech.icon}
                <h3 className="text-xl font-medium mb-3">{tech.title}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            </RevealAnimation>
          ))}
        </div>
        
        <RevealAnimation delay={400}>
          <div className="mt-16 text-center">
            <p className="text-gray-600 max-w-3xl mx-auto">
              The true revolution of ATH is making professional-level training technology accessible to all players. 
              What was once available only to elite athletes is now at your fingertips, democratizing access to excellence.
            </p>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default TechnologySection;
