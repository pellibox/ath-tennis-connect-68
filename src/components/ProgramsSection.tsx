
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RevealAnimation from './RevealAnimation';
import VickiPoweredBadge from './VickiPoweredBadge';
import { ArrowRight } from 'lucide-react';
import ButtonLink from './ButtonLink';

export interface Program {
  id: string;
  title: string;
  description?: string;
  image?: string;
  vimeoEmbed?: string;
  features?: string[];
  link?: string;
  vickiPowered?: boolean;
  vickiOnRequest?: boolean;
  vickiCustomBadge?: string;
  monitoringLevel?: 'basic' | 'standard' | 'advanced' | 'elite';
}

interface ProgramsSectionProps {
  title?: string;
  subtitle?: string;
  categories?: {
    id: string;
    title: string;
    programs: Program[];
  }[];
  programs?: Program[];
  className?: string;
  gridLayout?: 'standard' | 'dense';
}

const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  title,
  subtitle,
  categories,
  programs,
  className = '',
  gridLayout = 'standard'
}) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const renderProgram = (program: Program, index: number) => {
    const delay = index * 100;
    const hasVideo = !!program.vimeoEmbed;
    const isVideoActive = activeVideo === program.id;
    
    return (
      <RevealAnimation key={program.id} delay={delay}>
        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
          {/* Program Image or Video */}
          <div 
            className="relative h-60 bg-gray-200 overflow-hidden"
            onMouseEnter={() => hasVideo && setActiveVideo(program.id)}
            onMouseLeave={() => hasVideo && setActiveVideo(null)}
          >
            {isVideoActive && program.vimeoEmbed ? (
              <div 
                className="absolute inset-0 w-full h-full z-10" 
                dangerouslySetInnerHTML={{ __html: program.vimeoEmbed }}
              />
            ) : (
              <img 
                src={program.image || 'https://via.placeholder.com/640x360'} 
                alt={program.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            )}
            
            {hasVideo && (
              <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <div className={`w-16 h-16 rounded-full bg-white bg-opacity-70 flex items-center justify-center transition-opacity duration-300 ${isVideoActive ? 'opacity-0' : 'opacity-100'}`}>
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-ath-clay border-b-[8px] border-b-transparent ml-1"></div>
                </div>
              </div>
            )}
          </div>
          
          {/* Program Content */}
          <div className="p-6">
            <div className="flex flex-wrap items-start justify-between mb-3">
              <h3 className="text-xl font-medium text-gray-900">{program.title}</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {program.vickiPowered && <VickiPoweredBadge small />}
                {program.vickiOnRequest && <VickiPoweredBadge small onRequest />}
                {program.vickiCustomBadge && (
                  <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-ath-clay/10 text-ath-clay border border-ath-clay/30 rounded-md">
                    {program.vickiCustomBadge}
                  </span>
                )}
              </div>
            </div>
            
            <p className="text-gray-600 mb-4">{program.description}</p>
            
            {program.features && program.features.length > 0 && (
              <div className="mb-4">
                <ul className="space-y-1">
                  {program.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="text-sm flex items-start">
                      <span className="mr-2 text-ath-clay">•</span>
                      {feature}
                    </li>
                  ))}
                  {program.features.length > 3 && (
                    <li className="text-sm text-gray-500">+ {program.features.length - 3} more features</li>
                  )}
                </ul>
              </div>
            )}
            
            <div className="flex justify-between items-center mt-6">
              {program.link && (
                <ButtonLink
                  href={program.link}
                  variant="outline"
                  className="hover:bg-ath-clay/5 hover:text-ath-clay transition-colors w-full text-center justify-center"
                >
                  Dettagli <ArrowRight className="ml-2" size={16} />
                </ButtonLink>
              )}
            </div>
          </div>
        </div>
      </RevealAnimation>
    );
  };

  const renderCategoryPrograms = (categoryPrograms: Program[]) => {
    const gridClass = gridLayout === 'dense' 
      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8";
      
    return (
      <div className={gridClass}>
        {categoryPrograms.map((program, index) => renderProgram(program, index))}
      </div>
    );
  };

  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        {title && (
          <RevealAnimation>
            <h2 className="text-3xl md:text-4xl font-display mb-3">{title}</h2>
            {subtitle && <p className="text-xl text-gray-600 mb-12 max-w-3xl">{subtitle}</p>}
          </RevealAnimation>
        )}
        
        {categories ? (
          <div className="space-y-16">
            {categories.map((category, idx) => (
              <div key={category.id}>
                <RevealAnimation delay={idx * 50}>
                  <h3 className="text-2xl font-display mb-6 border-l-4 border-ath-clay pl-3">{category.title}</h3>
                </RevealAnimation>
                {renderCategoryPrograms(category.programs)}
              </div>
            ))}
          </div>
        ) : programs ? (
          renderCategoryPrograms(programs)
        ) : null}
      </div>
    </section>
  );
};

export default ProgramsSection;
