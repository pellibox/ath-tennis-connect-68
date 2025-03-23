import { useEffect, useRef, useState } from 'react';
import ButtonLink from './ButtonLink';
import { cn } from '@/lib/utils';

interface HeroProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  videoSrc?: string;
  videoPoster?: string;
  buttons?: Array<{
    text: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'outline';
  }>;
  className?: string;
  contentPosition?: 'center' | 'left' | 'right';
  overlayOpacity?: 'light' | 'medium' | 'dark';
  fullHeight?: boolean;
}

const Hero = ({
  title,
  subtitle,
  imageSrc,
  videoSrc,
  videoPoster,
  buttons = [],
  className,
  contentPosition = 'center',
  overlayOpacity = 'medium',
  fullHeight = true,
}: HeroProps) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [imageError, setImageError] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  
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
        return `https://drive.google.com/uc?export=download&id=${match[1]}`;
      }
    }
    return url;
  };

  // Handle video element loading and playing
  useEffect(() => {
    const video = videoRef.current;
    if (video && videoSrc) {
      const formattedVideoSrc = getVideoUrl(videoSrc);
      console.log('Attempting to load video from:', formattedVideoSrc);
      
      video.src = formattedVideoSrc;
      video.load();
      
      const handleError = (e: Event) => {
        console.error('Video failed to load:', formattedVideoSrc, e);
        setVideoError(true);
      };
      
      const handleLoadedData = () => {
        console.log('Video loaded successfully');
        setVideoLoaded(true);
        
        try {
          video.play()
            .then(() => console.log('Video playback started successfully'))
            .catch(err => {
              console.warn('Auto-play failed:', err);
              // Keep attempting to play on user interaction
              document.addEventListener('click', () => {
                video.play().catch(e => console.warn('Play on click failed:', e));
              }, { once: true });
            });
        } catch (err) {
          console.warn('Failed to start video:', err);
        }
      };
      
      video.addEventListener('error', handleError);
      video.addEventListener('loadeddata', handleLoadedData);
      
      return () => {
        video.removeEventListener('error', handleError);
        video.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, [videoSrc]);
  
  const positionClasses = {
    center: 'items-center text-center',
    left: 'items-start text-left',
    right: 'items-end text-right',
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
        {videoSrc && !videoError && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster={videoPoster || imageSrc}
            className={cn(
              "object-cover w-full h-full",
              videoLoaded ? 'opacity-100' : 'opacity-0',
              'transition-opacity duration-500'
            )}
          />
        )}
        
        {/* Always show image initially and if video fails */}
        <img 
          src={imageError ? fallbackImage : (imageSrc || fallbackImage)} 
          alt="Background" 
          className={cn(
            "object-cover w-full h-full",
            videoSrc && !videoError && videoLoaded ? 'opacity-0' : 'opacity-100',
            'transition-opacity duration-500'
          )}
          onError={handleImageError}
        />
        
        <div className={cn('absolute inset-0', overlayClasses[overlayOpacity])}></div>
      </div>
      
      <div className={cn(
        'relative z-10 max-w-3xl px-6 py-24 flex flex-col',
        positionClasses[contentPosition]
      )}>
        <h1 
          ref={titleRef}
          className="text-animate text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-8 drop-shadow-lg"
        >
          {title}
        </h1>
        
        {subtitle && (
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
    </div>
  );
};

export default Hero;
