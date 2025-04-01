
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
  
  // Get customized video embed based on user profile with proper backup and defaults
  const getVideoEmbed = () => {
    try {
      return getVimeoEmbed(userGender, userType, true, false, sport);
    } catch (error) {
      console.error('Error getting video embed:', error);
      // Return a simple known-working embed code as fallback
      return '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/867339842?autoplay=1&loop=1&background=1&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>';
    }
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
