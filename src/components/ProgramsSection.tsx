
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import RevealAnimation from './RevealAnimation';
import { cn } from '@/lib/utils';
import { useState, useEffect, useRef } from 'react';

interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  videoSrc?: string;
  vimeoEmbed?: string; // Added vimeoEmbed property
  link: string;
  features?: string[];
}

interface ProgramsSectionProps {
  title: string;
  subtitle?: string;
  programs: Program[];
  className?: string;
  compact?: boolean;
  gridLayout?: 'standard' | 'dense';
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
  
  // State to track hover for video cards
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  // Refs for video elements
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  
  // Generate fallback image URL based on program title
  const getFallbackImage = (program: Program) => {
    return `https://source.unsplash.com/featured/800x600/?tennis,${encodeURIComponent(program.title.toLowerCase())}`;
  };

  const handleImageError = (id: string) => {
    console.log(`Failed to load program image for ID: ${id}`);
    setFailedImages(prev => ({ ...prev, [id]: true }));
  };

  // Handle mouse enter for video cards
  const handleMouseEnter = (id: string) => {
    setHoveredCard(id);
    if (videoRefs.current[id]) {
      videoRefs.current[id]?.play().catch(err => {
        console.log(`Failed to play video for ID: ${id}`, err);
      });
    }
  };

  // Handle mouse leave for video cards
  const handleMouseLeave = (id: string) => {
    setHoveredCard(null);
    if (videoRefs.current[id]) {
      videoRefs.current[id]?.pause();
    }
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
          "grid gap-8", // Increased gap for better spacing
          gridLayout === 'dense' 
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
            : compact 
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-2" // Changed to 2 columns for better 16:9 display
        )}>
          {programs.map((program, index) => (
            <RevealAnimation key={program.id} delay={index * 50} className="h-full">
              <div 
                className="group h-full flex flex-col border border-gray-200 bg-white transition-all hover:shadow-sm"
                onMouseEnter={() => program.videoSrc && handleMouseEnter(program.id)}
                onMouseLeave={() => program.videoSrc && handleMouseLeave(program.id)}
              >
                <div className="relative overflow-hidden aspect-video"> {/* aspect-video ensures 16:9 ratio */}
                  {program.vimeoEmbed ? (
                    <div className="w-full h-full" dangerouslySetInnerHTML={{ __html: program.vimeoEmbed }} />
                  ) : program.videoSrc ? (
                    <>
                      <video 
                        ref={el => videoRefs.current[program.id] = el}
                        src={program.videoSrc}
                        poster={failedImages[program.id] ? getFallbackImage(program) : program.image}
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={() => handleImageError(program.id)}
                      />
                      <div className={cn(
                        "absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity",
                        hoveredCard === program.id ? "opacity-0" : "opacity-100"
                      )}>
                        <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">
                          <Play className="w-6 h-6 text-ath-clay ml-1" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <img 
                      src={failedImages[program.id] ? getFallbackImage(program) : program.image} 
                      alt={program.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={() => handleImageError(program.id)}
                    />
                  )}
                </div>
                <div className="flex flex-col flex-grow p-6">
                  <h3 className="text-xl font-medium mb-3 text-ath-clay">{program.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{program.description}</p>
                  
                  {program.features && program.features.length > 0 && (
                    <ul className="text-sm text-gray-600 mb-5 space-y-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
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
