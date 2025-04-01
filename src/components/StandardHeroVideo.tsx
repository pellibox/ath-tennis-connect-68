
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
  const [logoOpacity, setLogoOpacity] = useState<number>(1);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Fade out logo as user scrolls down, with faster fade effect
      const fadeThreshold = 50; // Reduced from 100 for faster fade
      const fadeOutBy = 200;    // Reduced from 300 for faster fade
      
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
          className={`z-50 pointer-events-none transition-opacity duration-300 flex justify-center ${isMobile ? 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' : 'fixed left-0 right-0'}`}
          style={{
            top: isMobile ? 'auto' : '100px', // 80px for container (mx-auto px-4 pt-4) + 20px offset
            opacity: logoOpacity
          }}
        >
          <img 
            src="/lovable-uploads/a00875f9-6335-4f8b-81c4-029183b59eec.png" 
            alt="ATH - Advanced Tennis Hub" 
            className={`object-contain ${isMobile ? 'w-[120px]' : 'w-[200px]'}`}
          />
        </div>
      )}
      
      <div className="w-full bg-black min-h-[calc(100vw*9/16)] relative overflow-hidden">
        <div 
          className="w-full h-full" 
          style={{ 
            position: 'relative', 
            paddingBottom: '56.25%', /* 16:9 Aspect Ratio */
            overflow: 'hidden'
          }}
        >
          <div 
            dangerouslySetInnerHTML={{ __html: vimeoEmbed }} 
            className="absolute top-0 left-0 w-full h-full"
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
