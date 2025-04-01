
import React from 'react';
import { useProfile } from '@/contexts/ProfileContext';
import { getVimeoEmbed, getWelcomeMessage } from '@/utils/videoUtils';
import StandardHeroVideo from '@/components/StandardHeroVideo';

interface HeroVideoSectionProps {
  onLogoOpacityChange?: (opacity: number) => void;
}

const HeroVideoSection = ({ onLogoOpacityChange }: HeroVideoSectionProps) => {
  const { userType, userGender, sport } = useProfile();
  
  // Get poster image based on user profile
  const getPosterImage = () => {
    // Default poster image
    let posterUrl = "/lovable-uploads/6ea13aa7-2578-488b-8ed4-4b17fc2ddc4e.png";
    
    // Customize based on user profile if needed
    if (userGender === 'female') {
      posterUrl = "/lovable-uploads/67883085-3eed-4f22-8828-cbbde8355e70.png";
    }
    
    return posterUrl;
  };
  
  return (
    <StandardHeroVideo 
      vimeoEmbed={getVimeoEmbed(userGender, userType, true, false, sport)}
      title="ADVANCED TENNIS HUB:"
      subtitle={getWelcomeMessage(userType)}
      onLogoOpacityChange={onLogoOpacityChange}
      posterImage={getPosterImage()}
    />
  );
};

export default HeroVideoSection;
