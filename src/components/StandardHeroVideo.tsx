
import React, { useState, useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import Logo from '@/components/Logo';
import { Skeleton } from '@/components/ui/skeleton';
import ResponsiveImage from '@/components/ResponsiveImage';
import { extractVimeoId } from '@/utils/videoUtils';

interface StandardHeroVideoProps {
  vimeoEmbed: string;
  subtitle?: string;
  title?: string;
  showLogo?: boolean;
  onLogoOpacityChange?: (opacity: number) => void;
  logoTopPositionMobile?: string;
  logoTopPositionDesktop?: string;
  logoImagePath?: string;
  logoSize?: {
    mobile?: string;
    desktop?: string;
  };
  posterImage?: string;
}

const StandardHeroVideo = ({ 
  vimeoEmbed, 
  subtitle, 
  title, 
  showLogo = true,
  onLogoOpacityChange,
  logoTopPositionMobile = '140px',
  logoTopPositionDesktop = '100px',
  logoImagePath = "/lovable-uploads/a00875f9-6335-4f8b-81c4-029183b59eec.png",
  logoSize = {
    mobile: 'w-[120px]',
    desktop: 'w-[200px]'
  },
  posterImage
}: StandardHeroVideoProps) => {
  const isMobile = useIsMobile();
  const [logoOpacity, setLogoOpacity] = useState<number>(1);
  const logoRef = useRef<HTMLDivElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const vimeoContainerRef = useRef<HTMLDivElement>(null);
  
  // Extract Vimeo ID for thumbnail fallback
  const vimeoId = extractVimeoId(vimeoEmbed);
  const fallbackImageUrl = posterImage || (vimeoId ? `https://vumbnail.com/${vimeoId}.jpg` : null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!logoRef.current) return;
      
      const scrollY = window.scrollY;
      const logoRect = logoRef.current.getBoundingClientRect();
      
      // Start fade as soon as scrolling begins
      const fadeStartThreshold = 0;
      
      // Calculate when logo should be fully invisible
      // This is when the bottom of the logo reaches the top of the viewport
      const logoHeight = logoRect.height;
      const logoTopPosition = isMobile ? 
        parseInt(logoTopPositionMobile, 10) : 
        parseInt(logoTopPositionDesktop, 10);
      
      // Logo will be completely invisible when it's scrolled out of view
      const fadeEndThreshold = logoTopPosition + logoHeight;
      
      if (scrollY > fadeStartThreshold) {
        // Calculate opacity based on how much of the logo is still visible
        const opacity = Math.max(0, 1 - (scrollY / fadeEndThreshold));
        setLogoOpacity(opacity);
        
        if (onLogoOpacityChange) {
          onLogoOpacityChange(opacity);
        }
      } else {
        setLogoOpacity(1);
        if (onLogoOpacityChange) {
          onLogoOpacityChange(1);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [onLogoOpacityChange, logoTopPositionMobile, logoTopPositionDesktop, isMobile]);
  
  useEffect(() => {
    if (vimeoContainerRef.current) {
      // Reset state when embed changes
      setVideoLoaded(false);
      setVideoError(false);
      
      // Inject the Vimeo embed code
      vimeoContainerRef.current.innerHTML = vimeoEmbed;
      
      // Handle video loading
      const iframe = vimeoContainerRef.current.querySelector('iframe');
      if (iframe) {
        // Set a timeout to check if video loaded properly
        const timeoutId = setTimeout(() => {
          if (!videoLoaded) {
            console.warn('Vimeo video load timeout');
            setVideoError(true);
          }
        }, 5000);
        
        // Listen for iframe load event
        iframe.onload = () => {
          console.log('Vimeo iframe loaded');
          setVideoLoaded(true);
          clearTimeout(timeoutId);
        };
        
        // Listen for iframe error event
        iframe.onerror = () => {
          console.error('Vimeo iframe failed to load');
          setVideoError(true);
          clearTimeout(timeoutId);
        };
      }
      
      // Add Vimeo API script if not already present
      if (!document.querySelector('script[src="https://player.vimeo.com/api/player.js"]')) {
        const script = document.createElement('script');
        script.src = 'https://player.vimeo.com/api/player.js';
        script.async = true;
        document.body.appendChild(script);
      }
    }
    
    return () => {
      if (vimeoContainerRef.current) {
        vimeoContainerRef.current.innerHTML = '';
      }
    };
  }, [vimeoEmbed]);
  
  return (
    <>
      {showLogo && (
        <div 
          ref={logoRef}
          className="absolute pointer-events-none transition-opacity duration-300 left-1/2 transform -translate-x-1/2 z-50"
          style={{
            top: isMobile ? logoTopPositionMobile : logoTopPositionDesktop,
            opacity: logoOpacity
          }}
        >
          <img 
            src={logoImagePath}
            alt="ATH - Advanced Tennis Hub" 
            className={`object-contain ${isMobile ? logoSize.mobile : logoSize.desktop}`}
          />
        </div>
      )}
      
      <div className="w-full bg-black min-h-[calc(100vw*9/16)] relative overflow-hidden">
        <div 
          className="w-full h-full" 
          style={{ 
            position: 'relative', 
            paddingBottom: '56.25%',
            overflow: 'hidden'
          }}
        >
          {/* Fallback image shown until video loads or if there's an error */}
          {fallbackImageUrl && (!videoLoaded || videoError) && (
            <div className="absolute inset-0 z-10 bg-black">
              <ResponsiveImage
                src={fallbackImageUrl}
                alt="Video thumbnail"
                className="w-full h-full object-cover"
                onLoad={() => console.log('Fallback image loaded')}
              />
              
              {!videoError && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center">
                    <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                  </div>
                </div>
              )}
            </div>
          )}
          
          {/* Vimeo container */}
          <div 
            ref={vimeoContainerRef}
            className="absolute top-0 left-0 w-full h-full"
            style={{
              width: '100%', 
              height: '100%', 
              transform: 'scale(1.3)', 
              transformOrigin: 'center center',
              opacity: videoLoaded && !videoError ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
              zIndex: videoLoaded && !videoError ? 20 : 5
            }}
          />
        </div>
      </div>
      
      {(title || subtitle) && (
        <div className="w-full bg-black py-10 md:py-16">
          <div className="max-w-3xl mx-auto text-center px-4">
            {title && (
              <h2 className="text-white text-lg md:text-2xl font-swiss uppercase mb-2">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-white text-base md:text-2xl opacity-90 font-swiss drop-shadow-md px-2">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default StandardHeroVideo;
