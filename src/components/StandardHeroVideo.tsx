
import React, { useState, useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import Logo from '@/components/Logo';
import { Skeleton } from '@/components/ui/skeleton';
import ResponsiveImage from '@/components/ResponsiveImage';
import { extractVimeoId, getVimeoThumbnailUrl } from '@/utils/videoUtils';

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
  const [retryCount, setRetryCount] = useState(0);
  const [placeholderOpacity, setPlaceholderOpacity] = useState(1);
  
  // Extract Vimeo ID for thumbnail fallback
  const vimeoId = extractVimeoId(vimeoEmbed);
  // Set default fallback image with a known working image
  const defaultFallbackImage = "/lovable-uploads/6ea13aa7-2578-488b-8ed4-4b17fc2ddc4e.png";
  const fallbackImageUrl = posterImage || (vimeoId ? getVimeoThumbnailUrl(vimeoId) : defaultFallbackImage);
  
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
  
  const loadVimeoEmbed = () => {
    if (!vimeoContainerRef.current) return;
    
    try {
      // Reset states
      setVideoLoaded(false);
      setVideoError(false);
      
      // Clear previous content
      vimeoContainerRef.current.innerHTML = '';
      
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
          
          // Fade out the placeholder with a smooth transition
          setTimeout(() => {
            setPlaceholderOpacity(0);
          }, 300);
          
          clearTimeout(timeoutId);
        };
        
        // Listen for iframe error event
        iframe.onerror = () => {
          console.error('Vimeo iframe failed to load');
          setVideoError(true);
          clearTimeout(timeoutId);
        };
      } else {
        console.error('No iframe found in Vimeo embed code');
        setVideoError(true);
      }
    } catch (error) {
      console.error('Error loading Vimeo embed:', error);
      setVideoError(true);
    }
  };
  
  useEffect(() => {
    loadVimeoEmbed();
    
    return () => {
      if (vimeoContainerRef.current) {
        vimeoContainerRef.current.innerHTML = '';
      }
    };
  }, [vimeoEmbed]);
  
  // Retry logic for video loading
  useEffect(() => {
    if (videoError && retryCount < 2) {
      const retryTimeout = setTimeout(() => {
        console.log(`Retrying video load, attempt ${retryCount + 1}`);
        setRetryCount(prevCount => prevCount + 1);
        loadVimeoEmbed();
      }, 2000);
      
      return () => clearTimeout(retryTimeout);
    }
  }, [videoError, retryCount]);
  
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
      
      {/* Video container with fixed height */}
      <div className="w-full bg-black relative" style={{ height: "70vh", minHeight: "500px" }}>
        {/* Placeholder/fallback image */}
        <div 
          className="absolute inset-0 z-10 bg-black transition-opacity duration-500"
          style={{ opacity: placeholderOpacity }}
        >
          <ResponsiveImage
            src={fallbackImageUrl}
            alt="Video thumbnail"
            className="w-full h-full object-cover"
            onLoad={() => console.log('Fallback image loaded')}
            onError={() => {
              console.error('Fallback image failed to load, using default');
              if (fallbackImageUrl !== defaultFallbackImage) {
                const imgElement = document.querySelector('.bg-black img') as HTMLImageElement;
                if (imgElement) {
                  imgElement.src = defaultFallbackImage;
                }
              }
            }}
          />
          
          {!videoError && !videoLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            </div>
          )}
        </div>
        
        {/* Vimeo container with absolute positioning */}
        <div 
          ref={vimeoContainerRef}
          className="absolute inset-0 z-20 w-full h-full"
          style={{ 
            transform: 'scale(1.3)',
            transformOrigin: 'center center'
          }}
        />
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
