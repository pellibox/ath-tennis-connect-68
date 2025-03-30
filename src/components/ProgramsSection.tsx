
import { ArrowRight, Play, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import RevealAnimation from './RevealAnimation';
import { cn } from '@/lib/utils';
import { useState, useEffect, useRef } from 'react';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import VickiMonitoringBadge, { MonitoringLevel } from './VickiMonitoringBadge';
import VickiPoweredBadge from './VickiPoweredBadge';
import { useIsMobile } from '@/hooks/use-mobile';

interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  videoSrc?: string;
  vimeoEmbed?: string;
  link: string;
  features?: string[];
  pricing?: string[];
  monitoringLevel?: MonitoringLevel;
  vickiPowered?: boolean;
  vickiOnRequest?: boolean;
  vickiCustomBadge?: string;
}

interface ProgramCategory {
  id: string;
  title: string;
  programs: Program[];
}

interface ProgramsSectionProps {
  title: string;
  subtitle?: string;
  programs?: Program[];
  categories?: ProgramCategory[];
  className?: string;
  compact?: boolean;
  gridLayout?: 'standard' | 'dense';
  categoryCollapsible?: boolean;
  initiallyOpen?: boolean;
}

const ProgramsSection = ({ 
  title, 
  subtitle, 
  programs, 
  categories,
  className, 
  compact = false,
  gridLayout = 'standard',
  categoryCollapsible = false,
  initiallyOpen = false
}: ProgramsSectionProps) => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [videosReady, setVideosReady] = useState<Record<string, boolean>>({});
  const [videosPlaying, setVideosPlaying] = useState<Record<string, boolean>>({});
  const [blackOverlay, setBlackOverlay] = useState<Record<string, boolean>>({});
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLElement>(null);

  const getFallbackImage = (program: Program) => {
    return `https://source.unsplash.com/featured/800x600/?tennis,${encodeURIComponent(program.title.toLowerCase())}`;
  };

  const handleImageError = (id: string) => {
    console.log(`Failed to load program image for ID: ${id}`);
    setFailedImages(prev => ({ ...prev, [id]: true }));
  };

  useEffect(() => {
    if (categories) {
      console.log('Initializing category open states, initiallyOpen:', initiallyOpen);
      const initialOpenStates: Record<string, boolean> = {};
      categories.forEach(category => {
        initialOpenStates[category.id] = initiallyOpen;
      });
      setOpenCategories(initialOpenStates);
    }
  }, [categories, initiallyOpen]);

  useEffect(() => {
    console.log('ProgramsSection rendered:', {
      title,
      categoriesCount: categories?.length,
      programsCount: programs?.length,
      openCategoriesState: openCategories
    });
    
    if (categories) {
      categories.forEach(category => {
        category.programs.forEach(program => {
          if (program.vimeoEmbed) {
            console.log(`Program ${program.id} in category ${category.id} has Vimeo embed: ${program.vimeoEmbed.substring(0, 100)}...`);
          }
        });
      });
    }
  }, [title, categories, programs, openCategories]);

  const handleMouseEnter = (id: string) => {
    console.log(`Mouse enter for program ID: ${id}`);
    setHoveredCard(id);
    setBlackOverlay(prev => ({ ...prev, [id]: true }));
    if (videoRefs.current[id]) {
      videoRefs.current[id]!.currentTime = 0;
      videoRefs.current[id]!.load();
      setTimeout(() => {
        try {
          const playPromise = videoRefs.current[id]?.play();
          if (playPromise !== undefined) {
            playPromise.then(() => {
              console.log(`Video playing for ID: ${id}`);
              setTimeout(() => {
                setVideosPlaying(prev => ({ ...prev, [id]: true }));
              }, 300);
            }).catch(err => {
              console.log(`Failed to play video for ID: ${id}`, err);
            });
          }
        } catch (error) {
          console.error("Error playing video:", error);
        }
      }, 200);
    }
  };

  const handleMouseLeave = (id: string) => {
    console.log(`Mouse leave for program ID: ${id}`);
    setHoveredCard(null);
    setVideosPlaying(prev => ({ ...prev, [id]: false }));
    setTimeout(() => {
      setBlackOverlay(prev => ({ ...prev, [id]: false }));
    }, 200);
    if (videoRefs.current[id]) {
      try {
        videoRefs.current[id]?.pause();
        videoRefs.current[id]!.currentTime = 0;
      } catch (error) {
        console.error("Error pausing video:", error);
      }
    }
  };

  const handleVideoLoaded = (id: string) => {
    console.log(`Video loaded for ID: ${id}`);
    setVideosReady(prev => ({ ...prev, [id]: true }));
  };

  const toggleCategory = (categoryId: string) => {
    console.log(`Toggling category: ${categoryId}`, { 
      before: openCategories[categoryId],
      after: !openCategories[categoryId]
    });
    
    setOpenCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const getProcessedVimeoEmbed = (embed: string, isHovered: boolean) => {
    let processedEmbed = embed.replace(/'/g, '"');
    const srcMatch = processedEmbed.match(/src="([^"]+)"/);
    if (srcMatch && srcMatch[1]) {
      const originalSrc = srcMatch[1];
      let newSrc = originalSrc;
      if (isHovered) {
        if (newSrc.includes('autoplay=0')) {
          newSrc = newSrc.replace('autoplay=0', 'autoplay=1');
        } else if (!newSrc.includes('autoplay=')) {
          newSrc += (newSrc.includes('?') ? '&' : '?') + 'autoplay=1';
        }
      } else {
        if (newSrc.includes('autoplay=1')) {
          newSrc = newSrc.replace('autoplay=1', 'autoplay=0');
        }
      }
      if (!newSrc.includes('loop=')) {
        newSrc += (newSrc.includes('?') ? '&' : '?') + 'loop=1';
      }
      if (!newSrc.includes('background=')) {
        newSrc += (newSrc.includes('?') ? '&' : '?') + 'background=1';
      }
      if (!newSrc.includes('controls=')) {
        newSrc += (newSrc.includes('?') ? '&' : '?') + 'controls=0';
      }
      processedEmbed = processedEmbed.replace(originalSrc, newSrc);
      console.log(`Processed Vimeo embed for hover=${isHovered}: ${newSrc.substring(0, 100)}...`);
    }
    return processedEmbed;
  };

  const renderProgramCard = (program: Program, index: number) => (
    <RevealAnimation key={program.id} delay={index * 50} className="h-full">
      <div 
        className="group h-full flex flex-col border border-gray-200 bg-white transition-all hover:shadow-sm overflow-hidden"
        onMouseEnter={() => {
          if (!isMobile) {
            console.log(`Hovering on program: ${program.id} - ${program.title}`);
            if (program.videoSrc) {
              handleMouseEnter(program.id);
            } else if (program.vimeoEmbed) {
              setHoveredCard(program.id);
            }
          }
        }}
        onMouseLeave={() => {
          if (!isMobile) {
            if (program.videoSrc) {
              handleMouseLeave(program.id);
            } else if (program.vimeoEmbed) {
              setHoveredCard(null);
            }
          }
        }}
      >
        <div className="relative overflow-hidden aspect-video">
          {program.vimeoEmbed ? (
            <div 
              className="w-full h-full vimeo-container" 
              dangerouslySetInnerHTML={{ 
                __html: getProcessedVimeoEmbed(program.vimeoEmbed, hoveredCard === program.id)
              }}
            />
          ) : program.videoSrc ? (
            <>
              <img 
                src={failedImages[program.id] ? getFallbackImage(program) : program.image} 
                alt={program.title}
                className={cn(
                  "absolute inset-0 w-full h-full object-cover transition-opacity duration-300",
                  blackOverlay[program.id] ? "opacity-0" : "opacity-100"
                )}
                onError={() => handleImageError(program.id)}
              />
              <div 
                className="absolute inset-0 bg-black transition-opacity duration-300"
                style={{
                  opacity: blackOverlay[program.id] && !videosPlaying[program.id] ? 1 : 0,
                  zIndex: 1
                }}
              ></div>
              <video 
                ref={el => videoRefs.current[program.id] = el}
                src={program.videoSrc}
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                onLoadedMetadata={() => handleVideoLoaded(program.id)}
                style={{ 
                  opacity: videosPlaying[program.id] ? 1 : 0,
                  zIndex: 2
                }}
              />
              <div className={cn(
                "absolute inset-0 z-10 flex items-center justify-center bg-black/30 transition-opacity duration-300",
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
        <div className="flex flex-col flex-grow p-4 md:p-6">
          <div className="flex flex-wrap items-start justify-between mb-3 gap-2">
            <h3 className={cn("font-medium text-ath-clay", isMobile ? "text-lg" : "text-xl")}>{program.title}</h3>
            <div className="flex flex-wrap gap-2">
              {program.monitoringLevel && (
                <VickiMonitoringBadge level={program.monitoringLevel} showLabel={false} className="mt-1" />
              )}
              {program.vickiPowered && (
                <VickiPoweredBadge className="mt-1" />
              )}
              {program.vickiOnRequest && (
                <VickiPoweredBadge onRequest className="mt-1" />
              )}
              {program.vickiCustomBadge && (
                <VickiPoweredBadge customText={program.vickiCustomBadge} className="mt-1" />
              )}
            </div>
          </div>
          <p className={cn("text-gray-600 mb-4 flex-grow", isMobile && "text-sm")}>{program.description}</p>
          
          {program.pricing && program.pricing.length > 0 && (
            <div className="mb-4 bg-ath-clay/5 p-3 rounded-md">
              <h4 className="text-sm font-semibold mb-1">Prezzi:</h4>
              <ul className="space-y-1">
                {program.pricing.map((price, idx) => (
                  <li key={idx} className="text-sm flex justify-between">
                    <span>{price}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {program.features && program.features.length > 0 && (
            <ul className={cn("text-gray-600 mb-5 space-y-2", isMobile ? "text-xs" : "text-sm")}>
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
            className={cn(
              "inline-flex items-center font-medium animated-line pb-1 w-fit text-ath-clay mt-auto",
              isMobile ? "text-xs" : "text-sm"
            )}
          >
            Dettagli <ArrowRight size={isMobile ? 14 : 16} className="ml-2" />
          </Link>
        </div>
      </div>
    </RevealAnimation>
  );

  return (
    <section id="programs" ref={sectionRef} className={cn('py-8 md:py-16 px-4 md:px-6 lg:px-10', className)}>
      <div className="max-w-7xl mx-auto">
        <RevealAnimation>
          <h2 className={cn("font-display mb-4", isMobile ? "text-2xl" : "text-3xl md:text-4xl")}>{title}</h2>
        </RevealAnimation>
        
        {subtitle && (
          <RevealAnimation delay={100}>
            <p className={cn("text-gray-600 max-w-3xl mb-6 md:mb-12", isMobile ? "text-base" : "text-lg")}>{subtitle}</p>
          </RevealAnimation>
        )}
        
        {categories && categories.length > 0 ? (
          <div className="space-y-8 md:space-y-16">
            {categories.map((category, categoryIndex) => (
              <div key={category.id} className="mb-4 md:mb-8">
                {categoryCollapsible ? (
                  <Collapsible 
                    open={openCategories[category.id]}
                    onOpenChange={() => toggleCategory(category.id)}
                    className="w-full"
                  >
                    <div className="mb-4 md:mb-6">
                      <CollapsibleTrigger className="w-full">
                        <div className="flex items-center justify-between bg-white p-3 md:p-4 shadow-sm cursor-pointer hover:bg-gray-50">
                          <h3 className={cn("font-medium", isMobile ? "text-lg" : "text-2xl")}>{category.title}</h3>
                          <div className={`transform transition-transform ${openCategories[category.id] ? 'rotate-180' : ''}`}>
                            ▼
                          </div>
                        </div>
                      </CollapsibleTrigger>
                    </div>
                    
                    <CollapsibleContent forceMount={initiallyOpen ? true : undefined}>
                      <div className={cn(
                        "grid gap-4 md:gap-8",
                        gridLayout === 'dense' 
                          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
                          : compact 
                            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
                            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
                      )}>
                        {category.programs.map((program, programIndex) => 
                          renderProgramCard(program, programIndex)
                        )}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <>
                    <RevealAnimation delay={categoryIndex * 100}>
                      <h3 className={cn("font-medium mb-4 md:mb-6 border-b pb-2", isMobile ? "text-lg" : "text-2xl")}>{category.title}</h3>
                    </RevealAnimation>
                    
                    <div className={cn(
                      "grid gap-4 md:gap-8",
                      gridLayout === 'dense' 
                        ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
                        : compact 
                          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
                          : "grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
                    )}>
                      {category.programs.map((program, programIndex) => 
                        renderProgramCard(program, programIndex)
                      )}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className={cn(
            "grid gap-4 md:gap-8",
            gridLayout === 'dense' 
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
              : compact 
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
          )}>
            {programs && programs.map((program, index) => renderProgramCard(program, index))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProgramsSection;
