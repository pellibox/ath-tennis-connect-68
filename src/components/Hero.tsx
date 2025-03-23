
import { useEffect, useRef, useState } from 'react';
import ButtonLink from './ButtonLink';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface HeroProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  videoSrc?: string;
  videoPoster?: string;
  vimeoEmbed?: string;
  buttons?: Array<{
    text: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'outline';
  }>;
  className?: string;
  contentPosition?: 'center' | 'left' | 'right';
  overlayOpacity?: 'light' | 'medium' | 'dark';
  fullHeight?: boolean;
  contentVerticalPosition?: 'top' | 'center' | 'bottom';
  subtitlePosition?: 'withTitle' | 'bottom';
}

const Hero = ({
  title,
  subtitle,
  imageSrc,
  videoSrc,
  videoPoster,
  vimeoEmbed,
  buttons = [],
  className,
  contentPosition = 'center',
  overlayOpacity = 'medium',
  fullHeight = true,
  contentVerticalPosition = 'center',
  subtitlePosition = 'withTitle',
}: HeroProps) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [imageError, setImageError] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [blackOverlay, setBlackOverlay] = useState(false);
  
  // Default fallback image if the main image fails to load
  const fallbackImage = "https://images.unsplash.com/photo-1518005068251-37900150dfca?q=80&w=1920";
  
  // Run title animation effect when title changes
  useEffect(() => {
    if (titleRef.current) {
      const text = title || '';
      const wrappedText = text.split('').map((char, index) => 
        `<span style="--index:${index}" ${char === ' ' ? 'class="inline-block"' : ''}>${char}</span>`
      ).join('');
      
      titleRef.current.innerHTML = wrappedText;
      
      // Reset animation
      titleRef.current.classList.remove('visible');
      
      setTimeout(() => {
        titleRef.current?.classList.add('visible');
      }, 100);
    }
  }, [title]); // Re-run when title changes (language changes)
  
  // Format video URL if it's from Google Drive
  const getVideoUrl = (url: string): string => {
    if (url && url.includes('drive.google.com/file/d/')) {
      // Extract the file ID from the Google Drive URL
      const match = url.match(/\/d\/([^\/]+)/);
      if (match && match[1]) {
        // Use direct download link with file ID
        return `https://drive.google.com/uc?export=download&id=${match[1]}`;
      }
    }
    return url;
  };

  // Handle Vimeo embed autoplay
  useEffect(() => {
    if (vimeoEmbed) {
      // Make sure autoplay=1 is in the Vimeo embed code
      if (!vimeoEmbed.includes('autoplay=1')) {
        console.log('Vimeo embed does not include autoplay=1, videos will not autoplay');
      }
    }
  }, [vimeoEmbed]);

  // Handle video element loading and playing
  useEffect(() => {
    const video = videoRef.current;
    if (video && videoSrc && !vimeoEmbed) {
      try {
        const formattedVideoSrc = getVideoUrl(videoSrc);
        console.log('Attempting to load video from:', formattedVideoSrc);
        
        // Set source directly
        video.src = formattedVideoSrc;
        video.loop = true; // Ensure video loops
        video.load();
        
        const handleError = (e: Event) => {
          console.error('Video failed to load:', formattedVideoSrc, e);
          setVideoError(true);
          toast.error('Video non disponibile, usiamo un\'immagine al posto', {
            duration: 3000,
            position: 'bottom-center'
          });
        };
        
        const handleLoadedData = () => {
          console.log('Video loaded successfully');
          setVideoLoaded(true);
          
          // First show black overlay
          setBlackOverlay(true);
          
          // Then after a delay, start playing and fade in the video
          setTimeout(() => {
            try {
              // Try to play the video
              video.play()
                .then(() => {
                  console.log('Video playback started successfully');
                  // Add a slight delay before showing the video (fading from black)
                  setTimeout(() => {
                    setVideoPlaying(true);
                  }, 300);
                })
                .catch(err => {
                  console.warn('Auto-play failed:', err);
                  setBlackOverlay(false); // Hide black overlay if playback fails
                  // On user interaction attempt to play again
                  document.addEventListener('click', () => {
                    setBlackOverlay(true); // Show black overlay again
                    setTimeout(() => {
                      video.play()
                        .then(() => {
                          setTimeout(() => setVideoPlaying(true), 300);
                        })
                        .catch(e => {
                          console.warn('Play on click failed:', e);
                          setBlackOverlay(false); // Hide black overlay if playback fails
                        });
                    }, 200);
                  }, { once: true });
                });
            } catch (err) {
              console.warn('Failed to start video:', err);
              setBlackOverlay(false); // Hide black overlay if playback fails
            }
          }, 400); // Delay to allow black overlay to be visible
          
          toast.success('Video caricato con successo', {
            duration: 2000,
            position: 'bottom-center'
          });
        };
        
        video.addEventListener('error', handleError);
        video.addEventListener('loadeddata', handleLoadedData);
        
        return () => {
          video.removeEventListener('error', handleError);
          video.removeEventListener('loadeddata', handleLoadedData);
        };
      } catch (error) {
        console.error('Error setting up video:', error);
        setVideoError(true);
      }
    }
  }, [videoSrc, vimeoEmbed]);
  
  const positionClasses = {
    center: 'items-center text-center',
    left: 'items-start text-left',
    right: 'items-end text-right',
  };
  
  const verticalPositionClasses = {
    top: 'justify-start pt-32',
    center: 'justify-center',
    bottom: 'justify-end pb-32',
  };
  
  const overlayClasses = {
    light: 'bg-black/20',
    medium: 'bg-black/50',
    dark: 'bg-black/70',
  };
  
  const handleImageError = () => {
    console.error('Failed to load hero image:', imageSrc);
    setImageError(true);
  };
  
  return (
    <div 
      className={cn(
        'relative w-full flex items-center justify-center overflow-hidden',
        fullHeight ? 'min-h-screen' : 'min-h-[50vh]',
        className
      )}
    >
      <div className="absolute inset-0 w-full h-full">
        {/* Background system - condition rendering based on provided props */}
        {!vimeoEmbed && (
          <>
            {/* Standard image background - remains visible until black overlay shows */}
            <img 
              src={imageError ? fallbackImage : (imageSrc || fallbackImage)} 
              alt="Background" 
              className={cn(
                "object-cover w-full h-full transition-opacity duration-500",
                blackOverlay ? 'opacity-0' : 'opacity-100'
              )}
              onError={handleImageError}
            />
            
            {/* Black transition layer - shows during the transition */}
            <div 
              className="absolute inset-0 bg-black transition-opacity duration-500"
              style={{
                opacity: blackOverlay && !videoPlaying ? 1 : 0
              }}
            />
            
            {/* Video background if provided - fades in from black */}
            {videoSrc && !videoError && (
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                poster={videoPoster || imageSrc}
                className={cn(
                  "absolute inset-0 object-cover w-full h-full transition-opacity duration-800",
                  videoPlaying ? 'opacity-100' : 'opacity-0'
                )}
              />
            )}
            
            {/* Overlay for image or video */}
            <div className={cn('absolute inset-0', overlayClasses[overlayOpacity])}></div>
          </>
        )}
        
        {/* Vimeo embed when provided - fixed autoplay and background parameters */}
        {vimeoEmbed && (
          <div className="absolute inset-0 w-full h-full bg-black">
            {/* Force autoplay, loop, and background mode in the iframe URL if not already present */}
            <div 
              className="w-full h-full" 
              dangerouslySetInnerHTML={{ 
                __html: vimeoEmbed
                  .replace('autoplay=0', 'autoplay=1')
                  .replace('background=0', 'background=1')
                  .replace('loop=0', 'loop=1')
              }} 
            />
            {/* Thinner overlay to ensure text readability without darkening video too much */}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        )}
      </div>
      
      <div className={cn(
        'relative z-10 max-w-3xl px-6 py-24 flex flex-col w-full h-full',
        positionClasses[contentPosition],
        verticalPositionClasses[contentVerticalPosition]
      )}>
        <h1 
          ref={titleRef}
          className="text-animate text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-8 drop-shadow-lg"
        >
          {title}
        </h1>
        
        {subtitle && subtitlePosition === 'withTitle' && (
          <p className="text-white text-xl md:text-2xl opacity-90 mb-10 animate-fade-in drop-shadow-md" style={{ animationDelay: '0.4s' }}>
            {subtitle}
          </p>
        )}
        
        {buttons.length > 0 && (
          <div className={cn(
            'flex flex-wrap gap-5',
            contentPosition === 'center' ? 'justify-center' : contentPosition === 'right' ? 'justify-end' : 'justify-start'
          )}>
            {buttons.map((button, index) => (
              <ButtonLink
                key={`${button.text}-${index}`}
                href={button.href}
                variant={button.variant || (index === 0 ? 'primary' : 'outline')}
                className={cn(
                  'text-lg px-8 py-3', 
                  index === 0 ? 'animate-fade-in' : 'animate-fade-in'
                )}
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                {button.text}
              </ButtonLink>
            ))}
          </div>
        )}
      </div>
      
      {/* Subtitle at bottom if position is 'bottom' */}
      {subtitle && subtitlePosition === 'bottom' && (
        <div className="absolute bottom-0 left-0 right-0 z-10 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <p className="text-white text-base md:text-lg opacity-90 max-w-3xl mx-auto text-center animate-fade-in drop-shadow-md" 
            style={{ animationDelay: '0.4s' }}>
            {subtitle}
          </p>
        </div>
      )}
    </div>
  );
};

export default Hero;
