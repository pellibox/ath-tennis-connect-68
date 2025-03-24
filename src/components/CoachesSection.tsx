
import RevealAnimation from './RevealAnimation';
import { cn } from '@/lib/utils';
import { useState, useRef } from 'react';
import { Play } from 'lucide-react';

interface Coach {
  id: string;
  name: string;
  title: string;
  image: string;
  bio?: string;
  vimeoEmbed?: string;
  videoSrc?: string;
}

interface CoachesSectionProps {
  title: string;
  subtitle?: string;
  coaches: Coach[];
  className?: string;
}

const CoachesSection = ({ 
  title, 
  subtitle, 
  coaches,
  className 
}: CoachesSectionProps) => {
  // State to track hover for video cards
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  // State to track if videos are ready to play
  const [videosReady, setVideosReady] = useState<Record<string, boolean>>({});
  
  // Refs for video elements
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  
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
      // Reset video to beginning to ensure poster shows on next hover
      videoRefs.current[id]!.currentTime = 0;
    }
  };

  // Handle video loaded metadata
  const handleVideoLoaded = (id: string) => {
    setVideosReady(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section className={cn('py-20 px-6 lg:px-10 bg-ath-gray', className)}>
      <div className="max-w-7xl mx-auto">
        <RevealAnimation>
          <h2 className="text-3xl md:text-4xl font-display text-center mb-4">{title}</h2>
        </RevealAnimation>
        
        {subtitle && (
          <RevealAnimation delay={100}>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">{subtitle}</p>
          </RevealAnimation>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coaches.map((coach, index) => (
            <RevealAnimation key={coach.id} delay={index * 100}>
              <div 
                className="group bg-white"
                onMouseEnter={() => coach.videoSrc && handleMouseEnter(coach.id)}
                onMouseLeave={() => coach.videoSrc && handleMouseLeave(coach.id)}
              >
                <div className="relative overflow-hidden">
                  {coach.vimeoEmbed ? (
                    <div 
                      className="w-full vimeo-container aspect-[3/4]" 
                      dangerouslySetInnerHTML={{ 
                        __html: coach.vimeoEmbed.replace('autoplay=1', `autoplay=${hoveredCard === coach.id ? '1' : '0'}`).replace(/controls=\d/g, 'controls=0')
                      }} 
                      onMouseEnter={() => handleMouseEnter(coach.id)}
                      onMouseLeave={() => handleMouseLeave(coach.id)}
                    />
                  ) : coach.videoSrc ? (
                    <>
                      {/* Display poster image as background to prevent white flash */}
                      <div 
                        className="absolute inset-0 z-0"
                        style={{
                          backgroundImage: `url(${coach.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      ></div>
                      
                      <video 
                        ref={el => videoRefs.current[coach.id] = el}
                        src={coach.videoSrc}
                        poster={coach.image}
                        muted
                        loop
                        playsInline
                        className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105 relative z-10"
                        onLoadedMetadata={() => handleVideoLoaded(coach.id)}
                        style={{ 
                          display: 'block', // Always keep the video element visible
                          opacity: hoveredCard === coach.id ? 1 : 0, // Only show video when hovered
                          transition: 'opacity 0.3s ease-in-out'
                        }}
                        controls={false}
                      />
                      
                      {/* Overlay with play button that fades on hover */}
                      <div className={cn(
                        "absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-30 transition-opacity duration-300",
                        hoveredCard === coach.id ? "opacity-0" : "opacity-100"
                      )}>
                        <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">
                          <Play className="w-6 h-6 text-ath-clay ml-1" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <img 
                      src={coach.image} 
                      alt={coach.name} 
                      className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium">{coach.name}</h3>
                  <p className="text-gray-600 mb-4">{coach.title}</p>
                  {coach.bio && <p className="text-gray-500 text-sm">{coach.bio}</p>}
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachesSection;
