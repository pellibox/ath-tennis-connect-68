
import React from 'react';
import { useProfile } from '@/contexts/ProfileContext';
import { getVimeoEmbed, getWelcomeMessage } from '@/utils/videoUtils';
import StandardHeroVideo from '@/components/StandardHeroVideo';

const HeroVideoSection = ({ onLogoOpacityChange }: { onLogoOpacityChange?: (opacity: number) => void }) => {
  const { userType, userGender, sport } = useProfile();
  
  // Get poster image based on user profile
  const getPosterImage = () => {
    // Default poster for the new video
    let posterUrl = "/lovable-uploads/fa0d6412-fbae-4d76-98c8-1d7a6cb96b19.png";
    
    // Customize based on user profile if needed
    if (userGender === 'female') {
      posterUrl = "/lovable-uploads/67883085-3eed-4f22-8828-cbbde8355e70.png";
    }
    
    return posterUrl;
  };
  
  // Use our improved video embed getter with fallback
  const getVideoEmbed = () => {
    return getVimeoEmbed(userGender, userType, true, false, sport);
  };
  
  return (
    <StandardHeroVideo 
      vimeoEmbed={getVideoEmbed()}
      title="ADVANCED TENNIS HUB:"
      subtitle={getWelcomeMessage(userType)}
      onLogoOpacityChange={onLogoOpacityChange}
      posterImage={getPosterImage()}
    />
  );
};

export default HeroVideoSection;
