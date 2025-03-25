
import { useRef, useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import Logo from '../Logo';

const AnimatedLogo = () => {
  const isMobile = useIsMobile();
  const [logoYOffset, setLogoYOffset] = useState<number>(0);
  const [logoOpacity, setLogoOpacity] = useState<number>(1);
  const logoRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      setLogoYOffset(scrollY * 0.2);
      
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
    
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div 
      ref={logoRef}
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
          onDarkBackground={false} 
          className="w-full h-auto"
          isCentered={true}
        />
      </div>
    </div>
  );
};

export default AnimatedLogo;
