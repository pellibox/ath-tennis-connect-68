
import { useEffect, useRef } from 'react';
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
  
  // Handle video element errors
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleError = () => {
        console.error('Video failed to load:', videoSrc);
      };
      
      video.addEventListener('error', handleError);
      return () => {
        video.removeEventListener('error', handleError);
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
  
  return (
    <div 
      className={cn(
        'relative w-full flex items-center justify-center overflow-hidden',
        fullHeight ? 'min-h-screen' : 'min-h-[50vh]',
        className
      )}
    >
      <div className="absolute inset-0 w-full h-full">
        {videoSrc ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster={videoPoster || imageSrc}
            className="object-cover w-full h-full"
          >
            <source src={videoSrc} type="video/mp4" />
            {/* Fallback to image if video can't play */}
            {imageSrc && <img src={imageSrc} alt="Background" className="object-cover w-full h-full" />}
          </video>
        ) : imageSrc ? (
          <img 
            src={imageSrc} 
            alt="Background" 
            className="object-cover w-full h-full"
          />
        ) : null}
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
                key={`${button.text}-${index}`} // Use text as part of key to force re-render on text change
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
