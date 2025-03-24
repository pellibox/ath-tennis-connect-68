
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
  const [vimeoKey, setVimeoKey] = useState<number>(0);

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
    if (vimeoEmbed) {
      if (vimeoRef.current) {
        vimeoRef.current.innerHTML = '';
      }
      
      setVimeoKey(prevKey => prevKey + 1);
      
      setVimeoError(false);
    }
  }, [vimeoEmbed]);

  useEffect(() => {
    if (vimeoEmbed && vimeoRef.current) {
      try {
        console.log('Setting up Vimeo embed with key:', vimeoKey);
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
  }, [vimeoEmbed, vimeoKey]);

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
            <div className="w-full h-[calc(100%-100px)]">
              <div 
                ref={vimeoRef}
                className="w-full h-full vimeo-container" 
                key={`vimeo-container-${vimeoKey}`}
              />
            </div>
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
          <p className="text-white text-xl md:text-2xl opacity-90 mb-10 animate-fade-in drop-shadow-md font-swiss" style={{ animationDelay: '0.4s' }}>
            {subtitle}
          </p>
        )}
        
        {buttons.length > 0 && subtitlePosition === 'withTitle' && (
          <div className={cn(
            'flex flex-wrap gap-3 justify-center mt-6 md:mt-8',
            positionClasses[contentPosition].includes('items-start') ? 'justify-start' : (positionClasses[contentPosition].includes('items-end') ? 'justify-end' : 'justify-center')
          )}>
            {buttons.map((button, index) => (
              <ButtonLink
                key={`${button.text}-${index}`}
                href={button.href}
                variant={button.variant || (index === 0 ? 'primary' : 'outline')}
                className={cn(
                  'text-sm px-4 py-2 font-swiss', 
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
      
      {subtitle && subtitlePosition === 'bottom' && (
        <div className="absolute bottom-0 left-0 right-0 z-10 p-4 bg-gradient-to-t from-black/80 to-transparent h-[100px] flex flex-col justify-end">
          <p className="text-white text-base md:text-lg opacity-90 max-w-3xl mx-auto text-center drop-shadow-md font-swiss">
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
                    'text-sm px-4 py-2 font-swiss', 
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
