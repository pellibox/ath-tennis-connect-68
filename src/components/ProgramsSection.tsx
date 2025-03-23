
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import RevealAnimation from './RevealAnimation';
import { cn } from '@/lib/utils';
import { useState, useEffect, useRef } from 'react';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';

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
  
  // State to track if videos are ready to play
  const [videosReady, setVideosReady] = useState<Record<string, boolean>>({});
  
  // State to track if videos are actually playing
  const [videosPlaying, setVideosPlaying] = useState<Record<string, boolean>>({});
  
  // State to track transition to black
  const [blackTransition, setBlackTransition] = useState<Record<string, boolean>>({});
  
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
    
    // First set black transition
    setBlackTransition(prev => ({ ...prev, [id]: true }));
    
    // Then attempt to play the video after a small delay
    setTimeout(() => {
      if (videoRefs.current[id]) {
        videoRefs.current[id]?.play().then(() => {
          setVideosPlaying(prev => ({ ...prev, [id]: true }));
        }).catch(err => {
          console.log(`Failed to play video for ID: ${id}`, err);
          setVideosPlaying(prev => ({ ...prev, [id]: false }));
        });
      }
    }, 300); // Short delay for black background to appear
  };

  // Handle mouse leave for video cards
  const handleMouseLeave = (id: string) => {
    setHoveredCard(null);
    setVideosPlaying(prev => ({ ...prev, [id]: false }));
    setBlackTransition(prev => ({ ...prev, [id]: false }));
    
    if (videoRefs.current[id]) {
      videoRefs.current[id]?.pause();
      // Reset video to beginning to ensure poster shows on next hover
      videoRefs.current[id]!.currentTime = 0;
    }
  };

  // Handle video loaded metadata
  const handleVideoLoaded = (id: string) => {
    setVideosReady(prev => ({ ...prev, [id]: true }));
  };

  // Handle video playing event
  const handleVideoPlaying = (id: string) => {
    setVideosPlaying(prev => ({ ...prev, [id]: true }));
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
          "grid gap-8",
          gridLayout === 'dense' 
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
            : compact 
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
        )}>
          {programs.map((program, index) => (
            <RevealAnimation key={program.id} delay={index * 50} className="h-full">
              <div 
                className="group h-full flex flex-col border border-gray-200 bg-white transition-all hover:shadow-sm"
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
                      onMouseEnter={() => handleMouseEnter(program.id)}
                      onMouseLeave={() => handleMouseLeave(program.id)}
                    />
                  ) : program.videoSrc ? (
                    <>
                      {/* Initial image when not hovered */}
                      <div 
                        className={cn(
                          "absolute inset-0 z-0 transition-opacity duration-500",
                          (hoveredCard === program.id && blackTransition[program.id]) ? "opacity-0" : "opacity-100"
                        )}
                        style={{
                          backgroundImage: `url(${failedImages[program.id] ? getFallbackImage(program) : program.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      ></div>
                      
                      {/* Black background layer that appears on hover */}
                      <div 
                        className="absolute inset-0 z-10 bg-black transition-opacity duration-300"
                        style={{
                          opacity: hoveredCard === program.id && blackTransition[program.id] && !videosPlaying[program.id] ? 1 : 0
                        }}
                      ></div>
                      
                      <video 
                        ref={el => videoRefs.current[program.id] = el}
                        src={program.videoSrc}
                        poster={failedImages[program.id] ? getFallbackImage(program) : program.image}
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 absolute inset-0 z-20"
                        onError={() => handleImageError(program.id)}
                        onLoadedMetadata={() => handleVideoLoaded(program.id)}
                        onPlaying={() => handleVideoPlaying(program.id)}
                        style={{ 
                          display: 'block', // Always keep the video element visible
                          opacity: videosPlaying[program.id] ? 1 : 0, // Only show video when actually playing
                          transition: 'opacity 0.8s ease-in-out'
                        }}
                      />
                      
                      {/* Overlay with play button that fades on hover */}
                      <div className={cn(
                        "absolute inset-0 z-30 flex items-center justify-center bg-black bg-opacity-30 transition-opacity duration-300",
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
