
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
  features?: string[]; // Lista opzionale di caratteristiche del programma
}

interface ProgramsSectionProps {
  title: string;
  subtitle?: string;
  programs: Program[];
  className?: string;
  compact?: boolean;
  gridLayout?: 'standard' | 'dense'; // Opzione per layout denso (più elementi per riga)
}

const ProgramsSection = ({ 
  title, 
  subtitle, 
  programs, 
  className, 
  compact = false,
  gridLayout = 'standard'
}: ProgramsSectionProps) => {
  // State to track failed images
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  
  // Generate fallback image URL based on program title
  const getFallbackImage = (program: Program) => {
    return `https://source.unsplash.com/featured/800x600/?tennis,${encodeURIComponent(program.title.toLowerCase())}`;
  };

  const handleImageError = (id: string) => {
    console.log(`Failed to load program image for ID: ${id}`);
    setFailedImages(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="programs" className={cn('py-16 px-6 lg:px-10', className)}>
      <div className="max-w-7xl mx-auto">
        <RevealAnimation>
          <h2 className="text-3xl md:text-4xl font-display mb-4">{title}</h2>
        </RevealAnimation>
        
        {subtitle && (
          <RevealAnimation delay={100}>
            <p className="text-lg text-gray-600 max-w-3xl mb-12">{subtitle}</p>
          </RevealAnimation>
        )}
        
        <div className={cn(
          "grid gap-6",
          gridLayout === 'dense' 
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
            : compact 
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        )}>
          {programs.map((program, index) => (
            <RevealAnimation key={program.id} delay={index * 50} className="h-full">
              <div className="group h-full flex flex-col border border-gray-200 bg-white transition-all hover:shadow-sm">
                <div className="relative overflow-hidden">
                  <img 
                    src={failedImages[program.id] ? getFallbackImage(program) : program.image} 
                    alt={program.title} 
                    className={cn(
                      "w-full object-cover transition-transform duration-700 group-hover:scale-105",
                      compact || gridLayout === 'dense' ? "h-44" : "h-60"
                    )}
                    onError={() => handleImageError(program.id)}
                  />
                </div>
                <div className="flex flex-col flex-grow p-5">
                  <h3 className="text-lg font-medium mb-2 text-ath-clay">{program.title}</h3>
                  <p className={cn(
                    "text-gray-600 mb-4 flex-grow",
                    compact || gridLayout === 'dense' ? "text-sm" : ""
                  )}>{program.description}</p>
                  
                  {program.features && program.features.length > 0 && (
                    <ul className="text-sm text-gray-600 mb-4 space-y-1">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-1">
                          <span className="text-ath-clay text-xs mt-1">●</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  <Link 
                    to={program.link} 
                    className="inline-flex items-center text-sm font-medium animated-line pb-1 w-fit text-ath-clay mt-auto"
                  >
                    Dettagli <ArrowRight size={16} className="ml-2" />
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
