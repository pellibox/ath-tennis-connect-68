
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import Logo from '@/components/Logo';

interface StandardHeroVideoProps {
  vimeoEmbed: string;
  subtitle?: string;
  title?: string;
  showLogo?: boolean;
}

const StandardHeroVideo = ({ 
  vimeoEmbed, 
  subtitle, 
  title, 
  showLogo = true 
}: StandardHeroVideoProps) => {
  const isMobile = useIsMobile();
  const [logoYOffset, setLogoYOffset] = useState<number>(0);
  const [logoOpacity, setLogoOpacity] = useState<number>(1);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Apply parallax effect to logo
      setLogoYOffset(scrollY * 0.2);
      
      // Fade out logo as user scrolls down
      const fadeThreshold = 100;
      const fadeOutBy = 300;
      
      if (scrollY > fadeThreshold) {
        const opacity = Math.max(0, 1 - (scrollY - fadeThreshold) / (fadeOutBy - fadeThreshold));
        setLogoOpacity(opacity);
      } else {
        setLogoOpacity(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize values
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <>
      {showLogo && (
        <div 
          className="fixed z-50 pointer-events-none transition-opacity duration-300 left-0 right-0 flex justify-center"
          style={{
            top: isMobile ? '140px' : '180px',
            opacity: logoOpacity
          }}
        >
          <div 
            style={{
              width: isMobile ? '120px' : '160px',
              transform: `translateY(-${logoYOffset}px)`
            }}
            className="flex justify-center"
          >
            <Logo 
              onDarkBackground={true} 
              className="w-full h-auto"
              isCentered={true}
            />
          </div>
        </div>
      )}
      
      <div className="w-full bg-black min-h-[calc(100vw*9/16)] relative">
        <div dangerouslySetInnerHTML={{ __html: vimeoEmbed }} />
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
