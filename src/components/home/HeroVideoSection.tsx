
import React from 'react';
import { useProfile } from '@/contexts/ProfileContext';
import { getWelcomeMessage } from '@/utils/videoUtils';
import Logo from '@/components/Logo';
import { useIsMobile } from '@/hooks/use-mobile';

interface HeroVideoSectionProps {
  logoYOffset: number;
  logoOpacity: number;
  logoRef: React.RefObject<HTMLDivElement>;
}

const HeroVideoSection = ({ logoYOffset, logoOpacity, logoRef }: HeroVideoSectionProps) => {
  const isMobile = useIsMobile();
  const { userType } = useProfile();
  
  return (
    <>
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
            width: isMobile ? '140px' : '300px', // Increased from 250px to 300px
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
      
      <div className="w-full bg-black min-h-[calc(100vw*9/16)] relative">
        <div dangerouslySetInnerHTML={{ __html: `<iframe src="https://player.vimeo.com/video/1069152110?h=95ee4b44fd&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="ATH Main Video"></iframe><script src="https://player.vimeo.com/api/player.js"></script>` }} />
      </div>
      
      <div className="w-full bg-black py-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white text-xl md:text-2xl font-swiss uppercase mb-2">
            ADVANCED TENNIS HUB:
          </h2>
          <p className="text-white text-xl md:text-2xl opacity-90 font-swiss max-w-3xl drop-shadow-md">
            {getWelcomeMessage(userType)}
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroVideoSection;
