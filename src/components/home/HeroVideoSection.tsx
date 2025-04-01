
import React, { useState } from 'react';
import { useProfile } from '@/contexts/ProfileContext';
import { getVimeoEmbed, getWelcomeMessage, preloadProgramVideos } from '@/utils/videoUtils';
import StandardHeroVideo from '@/components/StandardHeroVideo';

interface HeroVideoSectionProps {
  onLogoOpacityChange?: (opacity: number) => void;
}

const HeroVideoSection = ({ onLogoOpacityChange }: HeroVideoSectionProps) => {
  const { userType, userGender, sport } = useProfile();
  const [videoError, setVideoError] = useState(false);
  
  // Trigger additional program videos preloading
  React.useEffect(() => {
    if (typeof preloadProgramVideos === 'function') {
      setTimeout(() => {
        preloadProgramVideos();
      }, 5000); // Delay program videos preloading until after hero video is loaded
    }
  }, []);
  
  const handleVideoError = () => {
    console.error('Error loading hero video');
    setVideoError(true);
  };
  
  return (
    <>
      {videoError ? (
        <div className="w-full bg-black min-h-[50vh] flex items-center justify-center">
          <div className="text-white text-center p-8">
            <h2 className="text-2xl mb-4">Caricamento video non riuscito</h2>
            <p>Si è verificato un problema durante il caricamento del video</p>
          </div>
        </div>
      ) : (
        <StandardHeroVideo 
          vimeoEmbed={getVimeoEmbed(userGender, userType, true, false, sport)}
          title="ADVANCED TENNIS HUB:"
          subtitle={getWelcomeMessage(userType)}
          onLogoOpacityChange={onLogoOpacityChange}
          usePreloadedVideos={true}
        />
      )}
    </>
  );
};

export default HeroVideoSection;
