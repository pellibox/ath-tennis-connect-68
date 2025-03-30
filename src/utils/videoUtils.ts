import { UserGender, UserType } from '@/components/UserTypeSelector';
import { SportType } from '@/contexts/ProfileContext';

export const getVimeoEmbed = (userGender: UserGender | null, userType: UserType | null, useBackground: boolean = true, forTechnologyPage: boolean = false, sport: SportType = 'tennis'): string => {
  // Technology page video override
  if (forTechnologyPage) {
    return `<iframe src="https://player.vimeo.com/video/1069152110?h=95ee4b44fd&autoplay=1&loop=1&background=${useBackground ? '1' : '0'}&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="ATH Technology Video"></iframe><script src="https://player.vimeo.com/api/player.js"></script>`;
  }
  
  // Default video for other pages
  let videoEmbed = `<iframe src="https://player.vimeo.com/video/1069152110?h=95ee4b44fd&autoplay=1&loop=1&background=${useBackground ? '1' : '0'}&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="ATH Main Video"></iframe><script src="https://player.vimeo.com/api/player.js"></script>`;
  
  // Check if sport is padel and apply the appropriate video based on gender
  if (sport === 'padel') {
    if (userGender === 'female') {
      // Female padel video
      return `<iframe src="https://player.vimeo.com/video/1070771184?h=c8eea81db1&autoplay=1&loop=1&background=${useBackground ? '1' : '0'}&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Female Padel"></iframe><script src="https://player.vimeo.com/api/player.js"></script>`;
    } else {
      // Default padel video (male or unspecified gender)
      return `<iframe src="https://player.vimeo.com/video/1070763412?h=0e8d74bff5&autoplay=1&loop=1&background=${useBackground ? '1' : '0'}&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Padel"></iframe><script src="https://player.vimeo.com/api/player.js"></script>`;
    }
  }
  
  // Only change video if user has explicitly selected a profile
  if (userGender && userType) {
    console.log(`Selecting video for gender: ${userGender}, type: ${userType}`);
    
    // Male performance video
    if (userGender === 'male' && userType === 'performance') {
      videoEmbed = `<iframe src="https://player.vimeo.com/video/1069152110?h=95ee4b44fd&autoplay=1&loop=1&background=${useBackground ? '1' : '0'}&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Male Performance"></iframe><script src="https://player.vimeo.com/api/player.js"></script>`;
    }
    
    // Female professional - NEW VIDEO
    if (userGender === 'female' && userType === 'professional') {
      videoEmbed = `<iframe src="https://player.vimeo.com/video/1068909035?h=1169847ac0&autoplay=1&loop=1&background=${useBackground ? '1' : '0'}&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Female Professional"></iframe><script src="https://player.vimeo.com/api/player.js"></script>`;
      return videoEmbed;
    }
    
    // Female junior video - Use the specified video for all sections
    if (userGender === 'female' && userType === 'junior') {
      videoEmbed = `<iframe src="https://player.vimeo.com/video/1068596969?h=9bbee986ef&autoplay=1&loop=1&background=${useBackground ? '1' : '0'}&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Female Junior"></iframe><script src="https://player.vimeo.com/api/player.js"></script>`;
      return videoEmbed;
    }
    
    // Female user videos based on type
    if (userGender === 'female') {
      // Default female video (for parent, coach)
      videoEmbed = `<iframe src="https://player.vimeo.com/video/867339842?h=5ecc384219&autoplay=1&loop=1&background=${useBackground ? '1' : '0'}&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Female"></iframe><script src="https://player.vimeo.com/api/player.js"></script>`;
      
      // Female professional 
      if (userType === 'professional') {
        videoEmbed = `<iframe src="https://player.vimeo.com/video/1068596920?h=7f23339d4b&autoplay=1&loop=1&background=${useBackground ? '1' : '0'}&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Female Professional"></iframe><script src="https://player.vimeo.com/api/player.js"></script>`;
      } 
      // Female performance - removed this specific case since it's now covered by the female junior check above
      else if (userType === 'performance') {
        videoEmbed = `<iframe src="https://player.vimeo.com/video/1068596969?h=9bbee986ef&autoplay=1&loop=1&background=${useBackground ? '1' : '0'}&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Female Performance"></iframe><script src="https://player.vimeo.com/api/player.js"></script>`;
      }
    }
    
    // Specific videos for male users and coaches
    if (userGender === 'male' && userType === 'professional') {
      videoEmbed = `<iframe src="https://player.vimeo.com/video/1068596901?h=2ac5605207&autoplay=1&loop=1&background=${useBackground ? '1' : '0'}&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Male Professional"></iframe><script src="https://player.vimeo.com/api/player.js"></script>`;
    }
    
    // Coach video (regardless of gender)
    if (userType === 'coach') {
      videoEmbed = `<iframe src="https://player.vimeo.com/video/1068604198?h=07d9021fd2&autoplay=1&loop=1&background=${useBackground ? '1' : '0'}&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Coach"></iframe><script src="https://player.vimeo.com/api/player.js"></script>`;
    }
    
    // Parent video (regardless of gender)
    if (userType === 'parent') {
      videoEmbed = `<iframe src="https://player.vimeo.com/video/1068629360?h=46b5c52b31&autoplay=1&loop=1&background=${useBackground ? '1' : '0'}&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Parent"></iframe><script src="https://player.vimeo.com/api/player.js"></script>`;
    }
    
    // Adult training video
    if (userType === 'adult') {
      videoEmbed = `<iframe src="https://player.vimeo.com/video/1068788229?h=5f3c14e5ec&autoplay=1&loop=1&background=${useBackground ? '1' : '0'}&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Adult"></iframe><script src="https://player.vimeo.com/api/player.js"></script>`;
    }
    
    // Summer camps video
    if (userType === 'camps') {
      videoEmbed = `<iframe src="https://player.vimeo.com/video/1068835737?h=f0a05fef01&autoplay=1&loop=1&background=${useBackground ? '1' : '0'}&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Summer Camps"></iframe><script src="https://player.vimeo.com/api/player.js"></script>`;
    }
  }

  return videoEmbed;
};

export const getWelcomeMessage = (userType: UserType | null, t: (key: string) => string): string => {
  if (!userType) return t('home.welcomeSubtitle');
  
  const messageKeys: Record<UserType, string> = {
    junior: 'home.welcomeJunior',
    performance: 'home.welcomePerformance',
    professional: 'home.welcomeProfessional',
    coach: 'home.welcomeCoach',
    parent: 'home.welcomeParent',
    adult: 'home.welcomeAdult',
    camps: 'camps.subtitle'
  };
  
  return t(messageKeys[userType]);
};

export const getPersonalizedMethodDescription = (userType: UserType | null, t: (key: string) => string): string => {
  if (!userType) {
    return t('method.description.default');
  }

  const descriptionKeys: Record<UserType, string> = {
    junior: 'method.description.junior',
    performance: 'method.description.performance',
    professional: 'method.description.professional',
    coach: 'method.description.coach',
    parent: 'method.description.parent',
    adult: 'method.description.adult',
    camps: 'method.description.camps'
  };

  return t(descriptionKeys[userType]);
};
