
import React, { useState, useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
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
  usePreloadedVideos?: boolean;
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
  usePreloadedVideos = false
}: StandardHeroVideoProps) => {
  const isMobile = useIsMobile();
  const [logoOpacity, setLogoOpacity] = useState<number>(1);
  const logoRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  
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
    if (!usePreloadedVideos || !videoContainerRef.current) return;
    
    const videoId = extractVimeoId(vimeoEmbed);
    if (!videoId) {
      console.error(`Could not extract video ID from embed code: ${vimeoEmbed.substring(0, 50)}...`);
      setVideoError(true);
      return;
    }
    
    console.log(`Looking for preloaded video with ID: ${videoId}`);
    
    // Check if there's a preloaded iframe for this video
    const preloadContainer = document.getElementById('vimeo-preload-container');
    if (!preloadContainer) {
      console.warn('Preload container not found, falling back to regular embed');
      videoContainerRef.current.innerHTML = vimeoEmbed;
      return;
    }
    
    const preloadedIframe = Array.from(preloadContainer.querySelectorAll('iframe'))
      .find(iframe => iframe.src.includes(`/video/${videoId}`));
      
    if (preloadedIframe) {
      console.log(`Found preloaded video for ID: ${videoId}`);
      
      try {
        // Create a clone of the preloaded iframe for our actual display
        const clonedIframe = preloadedIframe.cloneNode(true) as HTMLIFrameElement;
        clonedIframe.style.width = '100%';
        clonedIframe.style.height = '100%';
        clonedIframe.style.position = 'absolute';
        clonedIframe.style.top = '0';
        clonedIframe.style.left = '0';
        clonedIframe.style.transform = 'scale(1.3)';
        clonedIframe.style.transformOrigin = 'center center';
        
        // Add the cloned iframe to our video container
        videoContainerRef.current.innerHTML = '';
        videoContainerRef.current.appendChild(clonedIframe);
        setVideoLoaded(true);
      } catch (error) {
        console.error('Error using preloaded video:', error);
        setVideoError(true);
        // Fallback to regular embed
        videoContainerRef.current.innerHTML = vimeoEmbed;
      }
      
      return;
    }
    
    console.log(`No preloaded video found for ID: ${videoId}, using regular embed`);
    // Fallback to regular embed if no preloaded video is available
    videoContainerRef.current.innerHTML = vimeoEmbed;
    
  }, [vimeoEmbed, usePreloadedVideos]);
  
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
          {videoError ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-white">
              <p>Si è verificato un problema nel caricamento del video</p>
            </div>
          ) : (
            <div 
              ref={videoContainerRef}
              className="absolute top-0 left-0 w-full h-full"
              style={{
                width: '100%', 
                height: '100%', 
                transform: 'scale(1.3)', 
                transformOrigin: 'center center'
              }}
              dangerouslySetInnerHTML={usePreloadedVideos ? undefined : { __html: vimeoEmbed }}
            />
          )}
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
