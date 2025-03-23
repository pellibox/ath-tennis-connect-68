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
  const vimeoRef = useRef<HTMLDivElement>(null);
  const [imageError, setImageError] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [vimeoError, setVimeoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [blackOverlay, setBlackOverlay] = useState(false);
  
  const fallbackImage = "/lovable-uploads/6ea13aa7-2578-488b-8ed4-4b17fc2ddc4e.png";
  
  useEffect(() => {
    if (titleRef.current) {
      const text = title || '';
      const wrappedText = text.split('').map((char, index) => 
        `<span style="--index:${index}" ${char === ' ' ? 'class="inline-block"' : ''}>${char}</span>`
      ).join('');
      
      titleRef.current.innerHTML = wrappedText;
      
      titleRef.current.classList.remove('visible');
      
      setTimeout(() => {
        titleRef.current?.classList.add('visible');
      }, 100);
    }
  }, [title]);
  
  const getVideoUrl = (url: string): string => {
    if (url && url.includes('drive.google.com/file/d/')) {
      const match = url.match(/\/d\/([^\/]+)/);
      if (match && match[1]) {
        return `https://drive.google.com/uc?export=download&id=${match[1]}`;
      }
    }
    return url;
  };

  useEffect(() => {
    if (vimeoEmbed && vimeoRef.current) {
      try {
        vimeoRef.current.innerHTML = vimeoEmbed;
        
        const vimeoLoadTimeout = setTimeout(() => {
          if (vimeoRef.current) {
            const iframe = vimeoRef.current.querySelector('iframe');
            if (!iframe || iframe.clientWidth === 0) {
              console.error('Vimeo iframe failed to load properly');
              setVimeoError(true);
            }
          }
        }, 3000);
        
        return () => {
          clearTimeout(vimeoLoadTimeout);
        };
      } catch (err) {
        console.error('Error setting up Vimeo embed:', err);
        setVimeoError(true);
      }
    }
  }, [vimeoEmbed]);

  useEffect(() => {
    const video = videoRef.current;
    if (video && videoSrc && !vimeoEmbed) {
      try {
        const formattedVideoSrc = getVideoUrl(videoSrc);
        console.log('Attempting to load video from:', formattedVideoSrc);
        
        video.src = formattedVideoSrc;
        video.loop = true;
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
          
          setBlackOverlay(true);
          
          setTimeout(() => {
            try {
              video.play()
                .then(() => {
                  console.log('Video playback started successfully');
                  setTimeout(() => {
                    setVideoPlaying(true);
                  }, 300);
                })
                .catch(err => {
                  console.warn('Auto-play failed:', err);
                  setBlackOverlay(false);
                  document.addEventListener('click', () => {
                    setBlackOverlay(true);
                    setTimeout(() => {
                      video.play()
                        .then(() => {
                          setTimeout(() => setVideoPlaying(true), 300);
                        })
                        .catch(e => {
                          console.warn('Play on click failed:', e);
                          setBlackOverlay(false);
                        });
                    }, 200);
                  }, { once: true });
                });
            } catch (err) {
              console.warn('Failed to start video:', err);
              setBlackOverlay(false);
            }
          }, 400);
          
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
        {(!vimeoEmbed || vimeoError) && (
          <>
            <img 
              src={imageError ? fallbackImage : (imageSrc || fallbackImage)} 
              alt="Background" 
              className={cn(
                "object-cover w-full h-full transition-opacity duration-500",
                blackOverlay ? 'opacity-0' : 'opacity-100'
              )}
              onError={handleImageError}
            />
            
            <div 
              className="absolute inset-0 bg-black transition-opacity duration-500"
              style={{
                opacity: blackOverlay && !videoPlaying ? 1 : 0
              }}
            />
            
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
            
            <div className={cn('absolute inset-0', overlayClasses[overlayOpacity])}></div>
          </>
        )}
        
        {vimeoEmbed && !vimeoError && (
          <div className="absolute inset-0 w-full h-full bg-black">
            <div 
              ref={vimeoRef}
              className="w-full h-full vimeo-container" 
            />
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
      </div>
      
      {subtitle && subtitlePosition === 'bottom' && (
        <div className="absolute bottom-0 left-0 right-0 z-10 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <p className="text-white text-base md:text-lg opacity-90 max-w-3xl mx-auto text-center animate-fade-in drop-shadow-md whitespace-nowrap overflow-hidden text-ellipsis" 
            style={{ animationDelay: '0.4s' }}>
            {subtitle}
          </p>
          
          {buttons.length > 0 && (
            <div className={cn(
              'flex flex-wrap gap-3 justify-center mt-3',
            )}>
              {buttons.map((button, index) => (
                <ButtonLink
                  key={`${button.text}-${index}`}
                  href={button.href}
                  variant={button.variant || (index === 0 ? 'primary' : 'outline')}
                  className={cn(
                    'text-sm px-4 py-2', 
                    index === 0 ? 'animate-fade-in' : 'animate-fade-in'
                  )}
                  size="sm"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  {button.text}
                </ButtonLink>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Hero;
