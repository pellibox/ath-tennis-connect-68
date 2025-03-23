import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import RevealAnimation from './RevealAnimation';
import ButtonLink from './ButtonLink';

interface ButtonConfig {
  text: string;
  href: string;
  variant?: 'default' | 'outline' | 'secondary';
  icon?: React.ReactNode;
  onClick?: () => void;
}

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string | React.ReactNode;
  buttons?: ButtonConfig[];
  vimeoEmbed?: string;
  youtubeId?: string;
  videoSrc?: string;
  imageSrc?: string;
  overlayOpacity?: 'none' | 'light' | 'medium' | 'dark';
  contentPosition?: 'left' | 'center' | 'right';
  contentVerticalPosition?: 'top' | 'center' | 'bottom';
  subtitlePosition?: 'below-title' | 'bottom';
  className?: string;
  height?: 'full' | 'large' | 'medium' | 'small';
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  buttons,
  vimeoEmbed,
  youtubeId,
  videoSrc,
  imageSrc,
  overlayOpacity = 'medium',
  contentPosition = 'left',
  contentVerticalPosition = 'center',
  subtitlePosition = 'below-title',
  className,
  height = 'large',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(true);

  const observer = useRef<IntersectionObserver | null>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        setIsIntersecting(entry.isIntersecting);
      });
    },
    []
  );

  useEffect(() => {
    observer.current = new IntersectionObserver(handleIntersection, {
      rootMargin: '0px',
      threshold: 0.5,
    });

    if (videoRef.current) {
      observer.current.observe(videoRef.current);
    }

    return () => {
      observer.current?.disconnect();
    };
  }, [handleIntersection]);

  useEffect(() => {
    if (videoRef.current) {
      if (isIntersecting) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isIntersecting]);

  const getOverlayClass = () => {
    switch (overlayOpacity) {
      case 'none': return 'bg-opacity-0';
      case 'light': return 'bg-opacity-30';
      case 'medium': return 'bg-opacity-50';
      case 'dark': return 'bg-opacity-70';
      default: return 'bg-opacity-50';
    }
  };

  const getPositionClass = () => {
    let positionClass = '';
    
    // Horizontal positioning
    switch (contentPosition) {
      case 'left': positionClass += ' items-start text-left'; break;
      case 'center': positionClass += ' items-center text-center'; break;
      case 'right': positionClass += ' items-end text-right'; break;
      default: positionClass += ' items-start text-left';
    }
    
    // Vertical positioning
    switch (contentVerticalPosition) {
      case 'top': positionClass += ' justify-start pt-32'; break;
      case 'center': positionClass += ' justify-center'; break;
      case 'bottom': positionClass += ' justify-end pb-24'; break;
      default: positionClass += ' justify-center';
    }
    
    return positionClass;
  };

  const heightClass = {
    'full': 'min-h-screen',
    'large': 'min-h-[800px]',
    'medium': 'min-h-[600px]',
    'small': 'min-h-[400px]'
  }[height];

  return (
    <div className={cn("relative w-full overflow-hidden", heightClass, className)}>
      {/* Background media */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-center">
        {/* Video embed (Vimeo or YouTube) */}
        {vimeoEmbed && (
          <div className="absolute inset-0 overflow-hidden" dangerouslySetInnerHTML={{ __html: vimeoEmbed }} />
        )}
        
        {youtubeId && (
          <div className="absolute inset-0 overflow-hidden">
            <iframe 
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="absolute w-[300%] h-[300%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              title="YouTube video player"
              frameBorder="0"
            />
          </div>
        )}
        
        {/* Self-hosted video */}
        {videoSrc && (
          <video
            ref={videoRef}
            className="absolute inset-0 object-cover w-full h-full"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
        
        {/* Image fallback */}
        {imageSrc && (
          <img
            src={imageSrc}
            alt={title}
            className="absolute inset-0 object-cover w-full h-full"
          />
        )}
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-black ${getOverlayClass()}`}></div>
      </div>
      
      {/* Content */}
      <div className={`relative container mx-auto px-6 h-full flex flex-col ${getPositionClass()}`}>
        <div className="max-w-5xl">
          <RevealAnimation delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-display tracking-tight">
              {title}
            </h1>
          </RevealAnimation>
          
          {subtitle && subtitlePosition === 'below-title' && (
            <RevealAnimation delay={0.2}>
              <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl">
                {subtitle}
              </p>
            </RevealAnimation>
          )}
          
          {description && (
            <RevealAnimation delay={0.3}>
              <div className="mt-6 text-base md:text-lg text-white/80 max-w-2xl">
                {description}
              </div>
            </RevealAnimation>
          )}
          
          {buttons && buttons.length > 0 && (
            <RevealAnimation delay={0.4}>
              <div className="mt-8 flex flex-wrap gap-4">
                {buttons.map((button, index) => 
                  button.onClick ? (
                    <Button 
                      key={index}
                      variant={button.variant || 'default'} 
                      className={button.variant === 'outline' 
                        ? 'bg-transparent text-white border-white hover:bg-white hover:text-black'
                        : 'bg-ath-clay hover:bg-ath-clay/90 text-white'
                      }
                      onClick={button.onClick}
                    >
                      {button.text}
                      {button.icon || (index === 0 && <ArrowRight className="ml-2 h-4 w-4" />)}
                    </Button>
                  ) : (
                    <ButtonLink 
                      key={index}
                      href={button.href} 
                      variant={button.variant || 'default'} 
                      className={button.variant === 'outline' 
                        ? 'bg-transparent text-white border-white hover:bg-white hover:text-black'
                        : 'bg-ath-clay hover:bg-ath-clay/90 text-white'
                      }
                    >
                      {button.text}
                      {button.icon || (index === 0 && <ArrowRight className="ml-2 h-4 w-4" />)}
                    </ButtonLink>
                  )
                )}
              </div>
            </RevealAnimation>
          )}
        </div>
        
        {/* Subtitle at bottom position */}
        {subtitle && subtitlePosition === 'bottom' && (
          <div className="mt-auto">
            <RevealAnimation delay={0.2}>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8">
                {subtitle}
              </p>
            </RevealAnimation>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
