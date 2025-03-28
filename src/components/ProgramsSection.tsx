
import { Link } from 'react-router-dom';
import RevealAnimation from './RevealAnimation';
import VickiMonitoringBadge from './VickiMonitoringBadge';
import VickiPoweredBadge from './VickiPoweredBadge';
import { Program, ProgramCategory } from '@/data/programs/types';
import { cn } from '@/lib/utils';
import PopularChoiceBadge from './programs/PopularChoiceBadge';

interface ProgramsSectionProps {
  title: string;
  subtitle?: string;
  categories?: ProgramCategory[];
  programs?: Program[];
  className?: string;
  showPopularBadge?: boolean;
  gridLayout?: string;
  categoryCollapsible?: boolean;
}

const ProgramsSection = ({ 
  title, 
  subtitle, 
  categories,
  programs,
  className,
  showPopularBadge = false,
  gridLayout = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  categoryCollapsible = false
}: ProgramsSectionProps) => {
  // Function to determine if a program should be marked as popular
  const isPopularChoice = (program: Program): boolean => {
    // Logic to determine popular choice - defaulting to the first program of elite category
    // This would ideally come from the staff setup page in the future
    return program.id === "elite-performance";
  };

  return (
    <section className={cn("py-16 px-6 lg:px-10", className)}>
      <div className="max-w-7xl mx-auto">
        <RevealAnimation>
          <h2 className="text-3xl md:text-4xl font-display mb-4">{title}</h2>
        </RevealAnimation>
        
        {subtitle && (
          <RevealAnimation delay={100}>
            <p className="text-lg text-gray-600 max-w-3xl mb-12">{subtitle}</p>
          </RevealAnimation>
        )}
        
        {categories && categories.map((category, catIndex) => (
          <div key={category.id} className="mb-20 last:mb-0">
            <RevealAnimation delay={catIndex * 100}>
              <h3 className="text-2xl font-display mb-8">
                {categoryCollapsible ? (
                  <button className="flex items-center w-full text-left">
                    <span>{category.title}</span>
                  </button>
                ) : (
                  category.title
                )}
              </h3>
            </RevealAnimation>
            
            <div className={`grid ${gridLayout || "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"} gap-8`}>
              {category.programs.map((program, progIndex) => (
                <RevealAnimation key={program.id} delay={(catIndex + progIndex) * 50 + 150}>
                  <Link to={program.link} className="block group">
                    <div className="relative rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                      {showPopularBadge && isPopularChoice(program) && (
                        <PopularChoiceBadge />
                      )}
                      
                      <div className="h-48 bg-gray-200 relative overflow-hidden">
                        <img 
                          src={program.image} 
                          alt={program.title} 
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      
                      <div className="p-6">
                        <h4 className="text-xl font-swiss font-medium mb-2">{program.title}</h4>
                        <p className="text-gray-600 mb-4 line-clamp-3">{program.description}</p>
                        
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                          {program.vickiMonitoringLevel && (
                            <VickiMonitoringBadge level={program.vickiMonitoringLevel} />
                          )}
                          
                          {program.vickiPowered && (
                            <VickiPoweredBadge />
                          )}
                          
                          {program.vickiCustomBadge && (
                            <span className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-md">
                              {program.vickiCustomBadge}
                            </span>
                          )}
                        </div>
                        
                        <div className="inline-flex items-center text-ath-clay font-medium">
                          Scopri di più <span className="ml-1">→</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </RevealAnimation>
              ))}
            </div>
          </div>
        ))}
        
        {programs && (
          <div className={`grid ${gridLayout || "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"} gap-8`}>
            {programs.map((program, index) => (
              <RevealAnimation key={program.id} delay={index * 50 + 150}>
                <Link to={program.link} className="block group">
                  <div className="relative rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                    {showPopularBadge && isPopularChoice(program) && (
                      <PopularChoiceBadge />
                    )}
                    
                    <div className="h-48 bg-gray-200 relative overflow-hidden">
                      <img 
                        src={program.image} 
                        alt={program.title} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    
                    <div className="p-6">
                      <h4 className="text-xl font-swiss font-medium mb-2">{program.title}</h4>
                      <p className="text-gray-600 mb-4 line-clamp-3">{program.description}</p>
                      
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        {program.vickiMonitoringLevel && (
                          <VickiMonitoringBadge level={program.vickiMonitoringLevel} />
                        )}
                        
                        {program.vickiPowered && (
                          <VickiPoweredBadge />
                        )}
                        
                        {program.vickiCustomBadge && (
                          <span className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-md">
                            {program.vickiCustomBadge}
                          </span>
                        )}
                      </div>
                      
                      <div className="inline-flex items-center text-ath-clay font-medium">
                        Scopri di più <span className="ml-1">→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </RevealAnimation>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProgramsSection;
