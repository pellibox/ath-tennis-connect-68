import { UserGender, UserType } from '@/components/UserTypeSelector';
import { SportType } from '@/contexts/ProfileContext';

/**
 * Extract Vimeo ID from embed code or URL
 */
export const extractVimeoId = (embedOrUrl: string): string | null => {
  try {
    // Extract from src attribute in iframe
    const srcMatch = embedOrUrl.match(/src="(https?:\/\/player\.vimeo\.com\/video\/([^?]+))/i);
    if (srcMatch && srcMatch[2]) {
      const urlParts = srcMatch[2].split('/');
      return urlParts[0];
    }
    
    // Direct URL format
    const directMatch = embedOrUrl.match(/vimeo\.com\/([0-9]+)/i);
    if (directMatch && directMatch[1]) {
      return directMatch[1];
    }
    
    // Numerical ID format (just digits)
    const numericMatch = embedOrUrl.match(/([0-9]{8,})/);
    if (numericMatch && numericMatch[1]) {
      return numericMatch[1];
    }
    
    console.warn('Could not extract Vimeo ID from:', embedOrUrl.substring(0, 100));
    return null;
  } catch (error) {
    console.error('Error extracting Vimeo ID:', error);
    return null;
  }
};

/**
 * Creates a standardized Vimeo embed code
 */
export const createStandardVimeoEmbed = (
  videoId: string, 
  autoplay: boolean = true, 
  loop: boolean = true, 
  background: boolean = true,
  controls: boolean = false
): string => {
  return `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/${videoId}?autoplay=${autoplay ? '1' : '0'}&loop=${loop ? '1' : '0'}&background=${background ? '1' : '0'}&controls=${controls ? '1' : '0'}&autopause=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="ATH Video"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
};

/**
 * Get the appropriate Vimeo embed based on user profile
 */
export const getVimeoEmbed = (userGender: UserGender | null, userType: UserType | null, useBackground: boolean = true, forTechnologyPage: boolean = false, sport: SportType = 'tennis'): string => {
  // Technology page video override
  if (forTechnologyPage) {
    return createStandardVimeoEmbed('1069152110', true, true, useBackground);
  }
  
  // Default video for other pages
  let videoId = '1071002692';
  
  // Check if sport is padel and apply the appropriate video based on gender
  if (sport === 'padel') {
    videoId = userGender === 'female' ? '1070771184' : '1070763412';
    return createStandardVimeoEmbed(videoId, true, true, useBackground);
  }
  
  // Add specific video for female/performance/tennis users
  if (userGender === 'female' && userType === 'performance' && sport === 'tennis') {
    return createStandardVimeoEmbed('1071020864', true, true, useBackground);
  }
  
  // Add specific video for female/junior/tennis users
  if (userGender === 'female' && userType === 'junior' && sport === 'tennis') {
    return createStandardVimeoEmbed('1071010661', true, true, useBackground);
  }
  
  // Add specific video for male/junior/tennis users
  if (userGender === 'male' && userType === 'junior' && sport === 'tennis') {
    return createStandardVimeoEmbed('1071007541', true, true, useBackground);
  }
  
  // Only change video if user has explicitly selected a profile
  if (userGender && userType) {
    console.log(`Selecting video for gender: ${userGender}, type: ${userType}`);
    
    // Male performance video
    if (userGender === 'male' && userType === 'performance') {
      videoId = '1069152110';
    }
    
    // Female professional - NEW VIDEO
    if (userGender === 'female' && userType === 'professional') {
      videoId = '1068909035';
      return createStandardVimeoEmbed(videoId, true, true, useBackground);
    }
    
    // Female junior video - moved to specific condition above for tennis
    if (userGender === 'female' && userType === 'junior' && sport !== 'tennis') {
      videoId = '1068596969';
      return createStandardVimeoEmbed(videoId, true, true, useBackground);
    }
    
    // Female user videos based on type
    if (userGender === 'female') {
      // Default female video (for parent, coach)
      videoId = '867339842';
      
      // Female professional 
      if (userType === 'professional') {
        videoId = '1068596920';
      }
    }
    
    // Specific videos for male users and coaches
    if (userGender === 'male' && userType === 'professional') {
      videoId = '1071006843';
    }
    
    // Coach video (regardless of gender)
    if (userType === 'coach') {
      videoId = '1068604198';
    }
    
    // Parent video (regardless of gender)
    if (userType === 'parent') {
      videoId = '1068629360';
    }
    
    // Adult training video
    if (userType === 'adult') {
      videoId = '1068788229';
    }
    
    // Summer camps video
    if (userType === 'camps') {
      videoId = '1068835737';
    }
  }

  return createStandardVimeoEmbed(videoId, true, true, useBackground);
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
