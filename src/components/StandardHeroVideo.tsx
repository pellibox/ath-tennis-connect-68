
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import Logo from '@/components/Logo';

interface StandardHeroVideoProps {
  vimeoEmbed: string;
  subtitle?: string;
  title?: string;
  showLogo?: boolean;
  onLogoOpacityChange?: (opacity: number) => void;
}

const StandardHeroVideo = ({ 
  vimeoEmbed, 
  subtitle, 
  title, 
  showLogo = true,
  onLogoOpacityChange
}: StandardHeroVideoProps) => {
  const isMobile = useIsMobile();
  const [logoOpacity, setLogoOpacity] = useState<number>(1);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      const fadeThreshold = 50;
      const fadeOutBy = 200;
      
      if (scrollY > fadeThreshold) {
        const opacity = Math.max(0, 1 - (scrollY - fadeThreshold) / (fadeOutBy - fadeThreshold));
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
  }, [onLogoOpacityChange]);
  
  return (
    <>
      {showLogo && (
        <div 
          className="absolute pointer-events-none transition-opacity duration-300 left-1/2 transform -translate-x-1/2 z-50"
          style={{
            top: isMobile ? '80px' : '120px',
            opacity: logoOpacity
          }}
        >
          <img 
            src="/lovable-uploads/0a250ed5-11e7-485c-a8f5-d41ebaa7083f.png" 
            alt="ATH - Advanced Tennis Hub" 
            className={`object-contain ${isMobile ? 'w-[160px]' : 'w-[220px]'}`}
          />
        </div>
      )}
      
      <div className="w-full bg-black relative overflow-hidden">
        <div 
          className="w-full h-full overflow-hidden"
          style={{ 
            position: 'relative',
            paddingBottom: '56.25%'
          }}
        >
          <div 
            dangerouslySetInnerHTML={{ __html: vimeoEmbed }} 
            className="absolute top-0 left-0 w-full h-full scale-110" // Scaled up to remove black borders
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
