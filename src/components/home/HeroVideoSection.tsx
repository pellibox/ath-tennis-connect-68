
import React from 'react';
import { useProfile } from '@/contexts/ProfileContext';
import { getVimeoEmbed, getWelcomeMessage } from '@/utils/videoUtils';
import StandardHeroVideo from '@/components/StandardHeroVideo';

const HeroVideoSection = () => {
  const { userType, userGender, sport } = useProfile();
  
  return (
    <StandardHeroVideo 
      vimeoEmbed={getVimeoEmbed(userGender, userType, true, false, sport)}
      title="ADVANCED TENNIS HUB:"
      subtitle={getWelcomeMessage(userType)}
    />
  );
};

export default HeroVideoSection;
