import { UserGender, UserType } from '@/components/UserTypeSelector';
import { SportType } from '@/contexts/ProfileContext';

export const getVimeoEmbed = (userGender: UserGender | null, userType: UserType | null, useBackground: boolean = true, forTechnologyPage: boolean = false, sport: SportType = 'tennis'): string => {
  // Technology page video override
  if (forTechnologyPage) {
    return `<iframe src="https://player.vimeo.com/video/1069152110?h=95ee4b44fd&autoplay=1&loop=1&background=${useBackground ? '1' : '0'}&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="ATH Technology Video"></iframe><script src="https://player.vimeo.com/api/player.js"></script>`;
  }
  
  // Default video for other pages
  let videoEmbed = `<iframe src="https://player.vimeo.com/video/1071002692?h=a2668fa56d&autoplay=1&loop=1&background=${useBackground ? '1' : '0'}&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="ATH Main Video"></iframe><script src="https://player.vimeo.com/api/player.js"></script>`;
  
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
  
  // Add specific video for female/performance/tennis users
  if (userGender === 'female' && userType === 'performance' && sport === 'tennis') {
    return `<iframe src="https://player.vimeo.com/video/1071020864?h=912ce8d0e8&autoplay=1&loop=1&background=${useBackground ? '1' : '0'}&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Female Performance Tennis"></iframe><script src="https://player.vimeo.com/api/player.js"></script>`;
  }
  
  // Add specific video for female/junior/tennis users - NEW
  if (userGender === 'female' && userType === 'junior' && sport === 'tennis') {
    return `<iframe src="https://player.vimeo.com/video/1071010661?h=c8ac1ad7e3&autoplay=1&loop=1&background=${useBackground ? '1' : '0'}&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Female Junior Tennis"></iframe><script src="https://player.vimeo.com/api/player.js"></script>`;
  }
  
  // Add specific video for male/junior/tennis users
  if (userGender === 'male' && userType === 'junior' && sport === 'tennis') {
    return `<iframe src="https://player.vimeo.com/video/1071007541?h=792880c5c6&autoplay=1&loop=1&background=${useBackground ? '1' : '0'}&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Male Junior Tennis"></iframe><script src="https://player.vimeo.com/api/player.js"></script>`;
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
    
    // Female junior video - moved to specific condition above for tennis
    if (userGender === 'female' && userType === 'junior' && sport !== 'tennis') {
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
      // Note: The female/performance and female/junior cases are now handled by the specific conditions above
    }
    
    // Specific videos for male users and coaches
    if (userGender === 'male' && userType === 'professional') {
      videoEmbed = `<iframe src="https://player.vimeo.com/video/1071006843?h=76f8bd542b&autoplay=1&loop=1&background=${useBackground ? '1' : '0'}&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Male Professional"></iframe><script src="https://player.vimeo.com/api/player.js"></script>`;
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

export const getWelcomeMessage = (userType: UserType | null): string => {
  if (!userType) return "Centro di allenamento ad alta specializzazione con monitoraggio parametrico completo e metodologia integrata";
  
  const messages = {
    junior: "Percorsi specializzati per giovani tennisti con supporto tecnologico completo",
    performance: "Ottimizzazione parametrica completa per agonisti di alto livello",
    professional: "Analisi avanzata e supporto integrato per atleti professionisti",
    coach: "Strumenti di analisi professionali per supportare la tua metodologia",
    parent: "Supporto completo per la crescita tennistica dei giovani atleti",
    adult: "Programmi flessibili e personalizzati per tennisti amatoriali di ogni livello"
  };
  
  return messages[userType];
};

export const getPersonalizedMethodDescription = (userType: UserType | null): string => {
  if (!userType) {
    return "Il Metodo ATH è un sistema integrato che unisce tecnologia avanzata e coaching esperto";
  }

  switch (userType) {
    case 'junior':
      return "Il Metodo ATH per giovani tennisti combina divertimento e apprendimento tecnico con monitoraggio dello sviluppo";
    case 'performance':
      return "Il Metodo ATH per agonisti offre analisi avanzata e ottimizzazione della performance per competizioni di alto livello";
    case 'professional':
      return "Il Metodo ATH per professionisti garantisce un'analisi completa e integrazione di tutti gli aspetti della performance";
    case 'coach':
      return "Il Metodo ATH per coach fornisce strumenti avanzati di analisi e supporto per sviluppare una metodologia efficace";
    case 'parent':
      return "Il Metodo ATH per genitori offre supporto e trasparenza nel percorso di sviluppo del giovane atleta";
    case 'adult':
      return "Il Metodo ATH per amatori offre programmi flessibili ma completi per migliorare il tuo tennis a qualsiasi età";
    default:
      return "Il Metodo ATH è un sistema integrato che unisce tecnologia avanzata e coaching esperto";
  }
};

export const extractVimeoId = (embedCode: string): string | null => {
  const match = embedCode.match(/video\/(\d+)\?/);
  return match ? match[1] : null;
};

export const getAllPossibleVideoIds = (): string[] => {
  const videoIds = new Set<string>();
  
  // Main videos
  const mainVideo = getVimeoEmbed(null, null);
  const mainVideoId = extractVimeoId(mainVideo);
  if (mainVideoId) videoIds.add(mainVideoId);
  
  // Technology page video
  const techVideo = getVimeoEmbed(null, null, true, true);
  const techVideoId = extractVimeoId(techVideo);
  if (techVideoId) videoIds.add(techVideoId);
  
  // Tennis videos for different genders and user types
  const userGenders: UserGender[] = ['male', 'female'];
  const userTypes: UserType[] = ['junior', 'performance', 'professional', 'coach', 'parent', 'adult', 'camps'];
  
  // Tennis videos
  userGenders.forEach(gender => {
    userTypes.forEach(type => {
      const video = getVimeoEmbed(gender, type, true, false, 'tennis');
      const videoId = extractVimeoId(video);
      if (videoId) videoIds.add(videoId);
    });
  });
  
  // Padel videos
  userGenders.forEach(gender => {
    const video = getVimeoEmbed(gender, null, true, false, 'padel');
    const videoId = extractVimeoId(video);
    if (videoId) videoIds.add(videoId);
  });
  
  return Array.from(videoIds);
};

export const preloadVimeoVideos = (): void => {
  console.log('Starting video preloading...');
  const videoIds = getAllPossibleVideoIds();
  
  // Create a container div for preload iframes that's off-screen
  const preloadContainer = document.createElement('div');
  preloadContainer.style.position = 'absolute';
  preloadContainer.style.width = '0px';
  preloadContainer.style.height = '0px';
  preloadContainer.style.overflow = 'hidden';
  preloadContainer.style.opacity = '0';
  preloadContainer.style.pointerEvents = 'none';
  preloadContainer.id = 'vimeo-preload-container';
  document.body.appendChild(preloadContainer);
  
  // Add iframes for each video ID
  videoIds.forEach((id, index) => {
    // Stagger the preloading to avoid overwhelming the browser
    setTimeout(() => {
      const iframe = document.createElement('iframe');
      iframe.src = `https://player.vimeo.com/video/${id}?background=1&autopause=0&player_id=0&app_id=58479&controls=0&preload=true`;
      iframe.style.width = '10px';
      iframe.style.height = '10px';
      iframe.allow = 'autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media';
      iframe.title = `Preload ${id}`;
      preloadContainer.appendChild(iframe);
      console.log(`Preloading video ID: ${id}`);
    }, index * 150); // Stagger each video load by 150ms
  });
  
  console.log(`Started preloading ${videoIds.length} videos`);
};
