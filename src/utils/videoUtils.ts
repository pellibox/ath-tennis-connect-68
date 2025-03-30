
import { UserGender, UserType, SportType } from '@/contexts/ProfileContext';

export const defaultEmbed = '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068835737?h=f0a05fef01&autoplay=1&loop=1&title=0&byline=0&portrait=0&background=1&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>';

export const getVimeoEmbed = (
  gender: UserGender, 
  userType: UserType, 
  autoplay = true,
  showControls = false,
  sport: SportType = 'tennis'
) => {
  // Default video ID
  let videoId = '1068835737';
  
  // Video ID selection based on user profile and sport
  if (sport === 'padel') {
    videoId = '1068835738';
  } else if (sport === 'pickleball') {
    videoId = '1068835739';
  } else if (sport === 'touchtennis') {
    videoId = '1068835740';
  } else {
    // Tennis videos based on gender and user type
    if (gender === 'female') {
      if (userType === 'professional') {
        videoId = '1068835741';
      } else if (userType === 'junior') {
        videoId = '1068835742';
      } else if (userType === 'parent') {
        videoId = '1068835743';
      } else if (userType === 'coach') {
        videoId = '1068835744';
      } else if (userType === 'performance') {
        videoId = '1068835745';
      } else if (userType === 'adult') {
        videoId = '1068835746';
      }
    } else {
      // Male or default videos
      if (userType === 'professional') {
        videoId = '1068835747';
      } else if (userType === 'junior') {
        videoId = '1068835748';
      } else if (userType === 'parent') {
        videoId = '1068835749';
      } else if (userType === 'coach') {
        videoId = '1068835750';
      } else if (userType === 'performance') {
        videoId = '1068835751';
      } else if (userType === 'adult') {
        videoId = '1068835752';
      }
    }
  }
  
  // Using default if no specific video is available
  if (videoId === '') {
    videoId = '1068835737';
  }
  
  const autoplayParam = autoplay ? '&autoplay=1&loop=1&background=1' : '';
  const controlsParam = showControls ? '&controls=1' : '&controls=0';
  
  return `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/${videoId}?h=f0a05fef01${autoplayParam}&title=0&byline=0&portrait=0${controlsParam}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
};

export const getWelcomeMessage = (userType: UserType, t: any) => {
  if (!t) return '';
  
  switch (userType) {
    case 'junior':
      return t('home.welcomeJunior');
    case 'professional':
      return t('home.welcomeProfessional');
    case 'performance':
      return t('home.welcomePerformance');
    case 'coach':
      return t('home.welcomeCoach');
    case 'parent':
      return t('home.welcomeParent');
    case 'adult':
      return t('home.welcomeAdult');
    default:
      return t('home.welcomeSubtitle');
  }
};

export const getPersonalizedMethodDescription = (userType: UserType, t: any) => {
  if (!t) return '';

  switch (userType) {
    case 'junior':
      return t('method.description.junior');
    case 'professional':
      return t('method.description.professional');
    case 'performance':
      return t('method.description.performance');
    case 'coach':
      return t('method.description.coach');
    case 'parent':
      return t('method.description.parent');
    case 'adult':
      return t('method.description.adult');
    default:
      return t('method.description.default');
  }
};
