
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import RevealAnimation from './RevealAnimation';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface ProgramsSectionProps {
  title: string;
  subtitle?: string;
  programs: Program[];
  className?: string;
}

const ProgramsSection = ({ title, subtitle, programs, className }: ProgramsSectionProps) => {
  // State to track failed images
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  // State to store fallback images for each program
  const [fallbackImages, setFallbackImages] = useState<Record<string, string>>({});

  // Generate random fallback images when component mounts
  useEffect(() => {
    const fallbacks: Record<string, string> = {};
    programs.forEach((program, index) => {
      // Generate a unique random image for each program
      fallbacks[program.id] = `https://source.unsplash.com/random/800x600/?tennis,training,${index}`;
    });
    setFallbackImages(fallbacks);
  }, [programs]);

  const handleImageError = (id: string) => {
    console.log(`Failed to load program image for ID: ${id}`);
    setFailedImages(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="programs" className={cn('py-20 px-6 lg:px-10', className)}>
      <div className="max-w-7xl mx-auto">
        <RevealAnimation>
          <h2 className="text-3xl md:text-4xl font-display mb-4">{title}</h2>
        </RevealAnimation>
        
        {subtitle && (
          <RevealAnimation delay={100}>
            <p className="text-lg text-gray-600 max-w-3xl mb-12">{subtitle}</p>
          </RevealAnimation>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <RevealAnimation key={program.id} delay={index * 100} className="h-full">
              <div className="group h-full flex flex-col border border-gray-200 transition-all hover:shadow-md">
                <div className="relative overflow-hidden">
                  {!failedImages[program.id] ? (
                    <img 
                      src={program.image} 
                      alt={program.title} 
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={() => handleImageError(program.id)}
                    />
                  ) : (
                    <img 
                      src={fallbackImages[program.id]} 
                      alt={program.title} 
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="flex flex-col flex-grow p-6">
                  <h3 className="text-xl font-medium mb-3 text-ath-clay">{program.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{program.description}</p>
                  <Link 
                    to={program.link} 
                    className="inline-flex items-center text-sm font-medium animated-line pb-1 w-fit text-ath-clay"
                  >
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
