
import { Server, Zap, BarChart3, Activity, Users, LineChart, Rocket, Share2 } from 'lucide-react';
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
      icon: <Server className="w-10 h-10 mb-4 text-purple-600" />,
      title: "Advanced Data Collection",
      description: "Our sophisticated VICKI system monitors and analyzes over 70 specific tennis performance parameters in real-time during every session."
    },
    {
      icon: <Zap className="w-10 h-10 mb-4 text-purple-600" />,
      title: "Real-Time Analysis",
      description: "High-speed cameras and sensors capture every movement, stroke and tactical decision, providing immediate insights for on-the-spot adjustments."
    },
    {
      icon: <BarChart3 className="w-10 h-10 mb-4 text-purple-600" />,
      title: "AI-Powered Insights",
      description: "VICKI's artificial intelligence analyzes every aspect of performance, identifying patterns and improvement opportunities that might escape even expert observation."
    },
    {
      icon: <Activity className="w-10 h-10 mb-4 text-purple-600" />,
      title: "Personalized Development",
      description: "The machine learning system evolves with each session, continually refining analyses and recommendations for your unique playing style and goals."
    }
  ];

  const additionalFeatures = [
    {
      icon: <Rocket className="w-8 h-8 mb-3 text-purple-600" />,
      title: "Democratized Excellence",
      description: "Access to high-level coaching methodologies previously reserved only for the elite."
    },
    {
      icon: <LineChart className="w-8 h-8 mb-3 text-purple-600" />,
      title: "Continuous Development",
      description: "Elimination of discontinuities in technical approach with a codified and consistent method."
    },
    {
      icon: <Users className="w-8 h-8 mb-3 text-purple-600" />,
      title: "Global Excellence Community",
      description: "Access to an international network of expertise and best practices from around the world."
    },
    {
      icon: <Share2 className="w-8 h-8 mb-3 text-purple-600" />,
      title: "Advanced Communication",
      description: "Effective information sharing between all team professionals with precise documentation."
    }
  ];

  return (
    <section className={cn('py-20 px-6 lg:px-10 bg-gray-50', className)}>
      <div className="max-w-7xl mx-auto">
        <RevealAnimation>
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4">EXCLUSIVE TECHNOLOGY</span>
            <h2 className="text-3xl md:text-4xl font-display text-center mb-2">{title}</h2>
            <h3 className="text-2xl md:text-3xl font-display text-center text-purple-600 mb-4">VICKI: The Solution to Modern Tennis Challenges</h3>
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
            <h4 className="text-xl font-medium mb-8 text-purple-600">Unprecedented Personalization & Integration</h4>
            
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
                "VICKI integrates advanced technology and human expertise to unlock the hidden potential in every athlete, redefining the standards of modern tennis development."
              </p>
              <p className="text-purple-600 mt-4 font-bold">
                The only tennis center in the world using VICKI technology
              </p>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default TechnologySection;
