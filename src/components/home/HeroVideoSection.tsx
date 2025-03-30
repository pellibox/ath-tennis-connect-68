
import React from 'react';
import { useProfile } from '@/contexts/ProfileContext';
import { getVimeoEmbed, getWelcomeMessage } from '@/utils/videoUtils';
import StandardHeroVideo from '@/components/StandardHeroVideo';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroVideoSection = () => {
  const { userType, userGender, sport } = useProfile();
  const { t } = useLanguage();
  
  return (
    <StandardHeroVideo 
      vimeoEmbed={getVimeoEmbed(userGender, userType, true, false, sport)}
      titleKey="method.title"
      subtitleKey="method.tagline"
    />
  );
};

export default HeroVideoSection;
