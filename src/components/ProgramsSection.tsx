
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import RevealAnimation from './RevealAnimation';
import { cn } from '@/lib/utils';
import { useState, useEffect, useRef } from 'react';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  videoSrc?: string;
  vimeoEmbed?: string;
  link: string;
  features?: string[];
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
}

const ProgramsSection = ({ 
  title, 
  subtitle, 
  programs, 
  categories,
  className, 
  compact = false,
  gridLayout = 'standard',
  categoryCollapsible = false
}: ProgramsSectionProps) => {
  // State to track failed images
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  
  // State to track hover for video cards
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  // State to track if videos are ready to play
  const [videosReady, setVideosReady] = useState<Record<string, boolean>>({});
  
  // State to track if videos are actually playing
  const [videosPlaying, setVideosPlaying] = useState<Record<string, boolean>>({});
  
  // State to track black overlay visibility
  const [blackOverlay, setBlackOverlay] = useState<Record<string, boolean>>({});
  
  // State to track open categories (for collapsible mode)
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});
  
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
    
    // Show black overlay immediately
    setBlackOverlay(prev => ({ ...prev, [id]: true }));
    
    // Load the video and get it ready to play
    if (videoRefs.current[id]) {
      // Set currentTime to 0 to ensure we start from the beginning
      videoRefs.current[id]!.currentTime = 0;
      
      // Preload the video
      videoRefs.current[id]!.load();
      
      // Wait a moment for the black overlay to be visible, then try to play
      setTimeout(() => {
        try {
          const playPromise = videoRefs.current[id]?.play();
          if (playPromise !== undefined) {
            playPromise.then(() => {
              console.log(`Video playing for ID: ${id}`);
              // Wait a short moment, then show the video (fade from black to video)
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
      }, 200); // Short delay before attempting to play
    }
  };

  // Handle mouse leave for video cards
  const handleMouseLeave = (id: string) => {
    setHoveredCard(null);
    
    // Hide the video first
    setVideosPlaying(prev => ({ ...prev, [id]: false }));
    
    // Wait a bit to hide the black overlay 
    setTimeout(() => {
      setBlackOverlay(prev => ({ ...prev, [id]: false }));
    }, 200);
    
    if (videoRefs.current[id]) {
      try {
        videoRefs.current[id]?.pause();
        // Reset video to beginning for next hover
        videoRefs.current[id]!.currentTime = 0;
      } catch (error) {
        console.error("Error pausing video:", error);
      }
    }
  };

  // Handle video loaded metadata
  const handleVideoLoaded = (id: string) => {
    console.log(`Video loaded for ID: ${id}`);
    setVideosReady(prev => ({ ...prev, [id]: true }));
  };

  // Toggle category open/closed state
  const toggleCategory = (categoryId: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  // Initialize all categories as open
  useEffect(() => {
    if (categories) {
      const initialOpenStates: Record<string, boolean> = {};
      categories.forEach(category => {
        initialOpenStates[category.id] = true; // Start with all categories open
      });
      setOpenCategories(initialOpenStates);
    }
  }, [categories]);

  // Render a single program card
  const renderProgramCard = (program: Program, index: number) => (
    <RevealAnimation key={program.id} delay={index * 50} className="h-full">
      <div 
        className="group h-full flex flex-col border border-gray-200 bg-white transition-all hover:shadow-sm overflow-hidden"
        onMouseEnter={() => program.videoSrc && handleMouseEnter(program.id)}
        onMouseLeave={() => program.videoSrc && handleMouseLeave(program.id)}
      >
        <div className="relative overflow-hidden aspect-video">
          {program.vimeoEmbed ? (
            <div 
              className="w-full h-full vimeo-container" 
              dangerouslySetInnerHTML={{ 
                __html: program.vimeoEmbed.replace('autoplay=1', `autoplay=${hoveredCard === program.id ? '1' : '0'}`) 
              }}
            />
          ) : program.videoSrc ? (
            <>
              {/* Initial background image (always visible when video not playing) */}
              <img 
                src={failedImages[program.id] ? getFallbackImage(program) : program.image} 
                alt={program.title}
                className={cn(
                  "absolute inset-0 w-full h-full object-cover transition-opacity duration-300",
                  blackOverlay[program.id] ? "opacity-0" : "opacity-100"
                )}
                onError={() => handleImageError(program.id)}
              />
              
              {/* Black overlay (visible during transition) */}
              <div 
                className="absolute inset-0 bg-black transition-opacity duration-300"
                style={{
                  opacity: blackOverlay[program.id] && !videosPlaying[program.id] ? 1 : 0,
                  zIndex: 1
                }}
              ></div>
              
              {/* Video element (initially hidden) */}
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
              
              {/* Play button overlay */}
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
  );

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
        
        {/* Render programs by categories if categories are provided */}
        {categories && categories.length > 0 ? (
          <div className="space-y-16">
            {categories.map((category, categoryIndex) => (
              <div key={category.id} className="mb-8">
                {categoryCollapsible ? (
                  <Collapsible 
                    open={openCategories[category.id]}
                    onOpenChange={() => toggleCategory(category.id)}
                    className="w-full"
                  >
                    <div className="mb-6">
                      <CollapsibleTrigger className="w-full">
                        <div className="flex items-center justify-between bg-white p-4 shadow-sm cursor-pointer hover:bg-gray-50">
                          <h3 className="text-2xl font-medium">{category.title}</h3>
                          <div className={`transform transition-transform ${openCategories[category.id] ? 'rotate-180' : ''}`}>
                            ▼
                          </div>
                        </div>
                      </CollapsibleTrigger>
                    </div>
                    
                    <CollapsibleContent>
                      <div className={cn(
                        "grid gap-8",
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
                      <h3 className="text-2xl font-medium mb-6 border-b pb-2">{category.title}</h3>
                    </RevealAnimation>
                    
                    <div className={cn(
                      "grid gap-8",
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
          // Original program grid rendering when no categories are provided
          <div className={cn(
            "grid gap-8",
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
