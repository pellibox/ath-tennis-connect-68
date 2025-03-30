
import React from 'react';
import { useProfile } from '@/contexts/ProfileContext';
import { getWelcomeMessage } from '@/utils/videoUtils';
import StandardHeroVideo from '@/components/StandardHeroVideo';

const HeroVideoSection = () => {
  const { userType, sport } = useProfile();
  
  return (
    <StandardHeroVideo 
      vimeoEmbed={`<iframe src="https://player.vimeo.com/video/1069152110?h=95ee4b44fd&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="ATH Main Video"></iframe><script src="https://player.vimeo.com/api/player.js"></script>`}
      title="ADVANCED TENNIS HUB:"
      subtitle={getWelcomeMessage(userType)}
    />
  );
};

export default HeroVideoSection;
