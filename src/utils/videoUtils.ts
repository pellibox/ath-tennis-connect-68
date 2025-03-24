
import { UserGender, UserType } from '@/components/UserTypeSelector';

// Get Vimeo embed code based on user profile
export const getVimeoEmbed = (userGender: UserGender | null, userType: UserType | null, useBackground: boolean = true): string => {
  // Default video - using the corrected Vimeo ID
  let videoEmbed = `<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068596952?h=b7fa539b1c&autoplay=1&loop=1&background=${useBackground ? '1' : '0'}&autopause=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="ATH Main Video"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
  
  // Only change video if user has explicitly selected a profile
  if (userGender && userType) {
    console.log(`Selecting video for gender: ${userGender}, type: ${userType}`);
    
    // Female user videos based on type
    if (userGender === 'female') {
      // Default female video (for junior, parent, coach)
      videoEmbed = `<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/867339842?h=5ecc384219&autoplay=1&loop=1&background=${useBackground ? '1' : '0'}&autopause=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Female"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
      
      // Female professional 
      if (userType === 'professional') {
        videoEmbed = `<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068596920?h=7f23339d4b&autoplay=1&loop=1&background=${useBackground ? '1' : '0'}&autopause=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Female Professional"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
      } 
      // Female performance
      else if (userType === 'performance') {
        videoEmbed = `<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068596969?h=9bbee986ef&autoplay=1&loop=1&background=${useBackground ? '1' : '0'}&autopause=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Female Performance"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
      }
    }
    
    // Specific videos for male users and coaches
    if (userGender === 'male' && userType === 'professional') {
      videoEmbed = `<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068596901?h=2ac5605207&autoplay=1&loop=1&background=${useBackground ? '1' : '0'}&autopause=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Male Professional"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
    }
    
    // Coach video (regardless of gender)
    if (userType === 'coach') {
      videoEmbed = `<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068604198?h=07d9021fd2&autoplay=1&loop=1&background=${useBackground ? '1' : '0'}&autopause=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Coach"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
    }
    
    // Parent video (regardless of gender)
    if (userType === 'parent') {
      videoEmbed = `<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068629360?h=46b5c52b31&autoplay=1&loop=1&background=${useBackground ? '1' : '0'}&autopause=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Parent"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
    }
  }
  
  return videoEmbed;
};

// Helper function for personalized welcome message
export const getWelcomeMessage = (userType: UserType | null): string => {
  if (!userType) return "Centro di allenamento ad alta specializzazione con monitoraggio parametrico completo e metodologia integrata";
  
  const messages = {
    junior: "Percorsi specializzati per giovani tennisti con supporto tecnologico completo",
    performance: "Ottimizzazione parametrica completa per agonisti di alto livello",
    professional: "Analisi avanzata e supporto integrato per atleti professionisti",
    coach: "Strumenti di analisi professionali per supportare la tua metodologia",
    parent: "Supporto completo per la crescita tennistica dei giovani atleti"
  };
  
  return messages[userType];
};

// Helper function for personalized method description
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
    default:
      return "Il Metodo ATH è un sistema integrato che unisce tecnologia avanzata e coaching esperto";
  }
};
