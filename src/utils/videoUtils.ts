
import { UserGender, UserType } from '@/components/UserTypeSelector';
import { SportType } from '@/contexts/ProfileContext';

export const getVimeoEmbed = (userGender: UserGender | null, userType: UserType | null, useBackground: boolean = true, forTechnologyPage: boolean = false, sport: SportType = 'tennis'): string => {
  // Technology page video override
  if (forTechnologyPage) {
    return `<iframe src="https://player.vimeo.com/video/1069152110?h=95ee4b44fd&autoplay=1&loop=1&background=${useBackground ? '1' : '0'}&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="ATH Technology Video"></iframe><script src="https://player.vimeo.com/api/player.js"></script>`;
  }
  
  // Default video for other pages - updated to the specified video
  let videoEmbed = `<iframe src="https://player.vimeo.com/video/1071012876?h=5799f9c5f7&autoplay=1&loop=1&background=${useBackground ? '1' : '0'}&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="ATH Main Video"></iframe><script src="https://player.vimeo.com/api/player.js"></script>`;
  
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
  
  // Add specific video for male/junior/tennis users
  if (userGender === 'male' && userType === 'junior' && sport === 'tennis') {
    return `<iframe src="https://player.vimeo.com/video/1071007541?h=792880c5c6&autoplay=1&loop=1&background=${useBackground ? '1' : '0'}&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Male Junior Tennis"></iframe><script src="https://player.vimeo.com/api/player.js"></script>`;
  }
  
  // Add specific video for female/junior/tennis users
  if (userGender === 'female' && userType === 'junior' && sport === 'tennis') {
    return `<iframe src="https://player.vimeo.com/video/1071012876?h=5799f9c5f7&autoplay=1&loop=1&background=${useBackground ? '1' : '0'}&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Female Junior Tennis"></iframe><script src="https://player.vimeo.com/api/player.js"></script>`;
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
