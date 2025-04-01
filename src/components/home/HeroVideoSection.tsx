
import React, { useState } from 'react';
import { useProfile } from '@/contexts/ProfileContext';
import { getVimeoEmbed, getWelcomeMessage } from '@/utils/videoUtils';
import StandardHeroVideo from '@/components/StandardHeroVideo';

interface HeroVideoSectionProps {
  onLogoOpacityChange?: (opacity: number) => void;
}

const HeroVideoSection = ({ onLogoOpacityChange }: HeroVideoSectionProps) => {
  const { userType, userGender, sport } = useProfile();
  
  return (
    <StandardHeroVideo 
      vimeoEmbed={getVimeoEmbed(userGender, userType, true, false, sport)}
      title="ADVANCED TENNIS HUB:"
      subtitle={getWelcomeMessage(userType)}
      onLogoOpacityChange={onLogoOpacityChange}
    />
  );
};

export default HeroVideoSection;
