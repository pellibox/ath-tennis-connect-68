import { UserGender, UserType } from '@/components/UserTypeSelector';
import { SportType } from '@/contexts/ProfileContext';

/**
 * Extract Vimeo ID from embed code or URL
 */
export const extractVimeoId = (embedOrUrl: string): string | null => {
  try {
    // Try to extract from iframe src attribute
    const srcMatch = embedOrUrl.match(/src="(https?:\/\/player\.vimeo\.com\/video\/([^?]+))/i);
    if (srcMatch && srcMatch[2]) {
      const urlParts = srcMatch[2].split('/');
      return urlParts[0];
    }
    
    // Try to extract from direct URL format
    const directMatch = embedOrUrl.match(/vimeo\.com\/([0-9]+)/i);
    if (directMatch && directMatch[1]) {
      return directMatch[1];
    }
    
    // Try to extract just the numeric ID
    const numericMatch = embedOrUrl.match(/([0-9]{8,})/);
    if (numericMatch && numericMatch[1]) {
      return numericMatch[1];
    }
    
    // If we still don't have an ID, check for a digital ID in the string
    const digitMatch = embedOrUrl.match(/\d{7,}/);
    if (digitMatch) {
      return digitMatch[0];
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
  // Safety check: if videoId is invalid, use a known working fallback
  const FALLBACK_VIDEO_ID = '1071002692?h=a2668fa56d';
  
  // Validate videoId - must be numeric and at least 7 digits, or include a valid format with a hash
  const cleanVideoId = videoId && (/^\d{7,}$/.test(videoId.trim()) || videoId.includes('/') || videoId.includes('?h=')) 
    ? videoId.trim() 
    : FALLBACK_VIDEO_ID;
  
  // Use a more optimized embed code with better performance parameters
  return `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/${cleanVideoId}${cleanVideoId.includes('?') ? '&' : '?'}badge=0&autoplay=${autoplay ? '1' : '0'}&loop=${loop ? '1' : '0'}&background=${background ? '1' : '0'}&controls=${controls ? '1' : '0'}&autopause=0&player_id=0&app_id=58479&dnt=1&quality=1080p" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="ATH Video"></iframe></div>`;
};

/**
 * Get thumbnail URL for a Vimeo video
 */
export const getVimeoThumbnailUrl = (videoId: string | null): string => {
  if (!videoId) return '/lovable-uploads/6ea13aa7-2578-488b-8ed4-4b17fc2ddc4e.png';
  
  // If videoId contains a slash or question mark, extract just the numeric part for the thumbnail
  if (videoId.includes('/') || videoId.includes('?h=')) {
    videoId = videoId.split(/[\/\?]/)[0];
  }
  
  return `https://vumbnail.com/${videoId}.jpg`;
};

/**
 * Get the appropriate Vimeo embed based on user profile
 */
export const getVimeoEmbed = (userGender: UserGender | null, userType: UserType | null, useBackground: boolean = true, forTechnologyPage: boolean = false, sport: SportType = 'tennis'): string => {
  // Use the new default video ID as fallback
  const FALLBACK_VIDEO_ID = '1071002692?h=a2668fa56d';
  const MALE_PRO_TENNIS_VIDEO_ID = '1071006843?h=76f8bd542b';
  const MALE_JUNIOR_TENNIS_VIDEO_ID = '1071007541?h=792880c5c6';
  const FEMALE_JUNIOR_TENNIS_VIDEO_ID = '1071010661?h=c8ac1ad7e3';
  const FEMALE_PERFORMANCE_TENNIS_VIDEO_ID = '1071021162?h=eb5fd1c19b';
  const FEMALE_PRO_TENNIS_VIDEO_ID = '1068909035?h=1169847ac0';
  const COACH_TENNIS_VIDEO_ID = '1068788542?h=698f55b033';
  const ADULT_TENNIS_VIDEO_ID = '1068788229?h=5f3c14e5ec';
  
  // Technology page video override
  if (forTechnologyPage) {
    return createStandardVimeoEmbed('1068785493?h=fe90d50dae', true, true, useBackground);
  }
  
  // For coach tennis users, use the specific video regardless of gender
  if (userType === 'coach' && sport === 'tennis') {
    return createStandardVimeoEmbed(COACH_TENNIS_VIDEO_ID, true, true, useBackground);
  }
  
  // For adult tennis users, use the specific video regardless of gender
  if (userType === 'adult' && sport === 'tennis') {
    return createStandardVimeoEmbed(ADULT_TENNIS_VIDEO_ID, true, true, useBackground);
  }
  
  // For male professional tennis players, use the specific video
  if (userGender === 'male' && userType === 'professional' && sport === 'tennis') {
    return createStandardVimeoEmbed(MALE_PRO_TENNIS_VIDEO_ID, true, true, useBackground);
  }
  
  // For male junior tennis players, use the specific video
  if (userGender === 'male' && userType === 'junior' && sport === 'tennis') {
    return createStandardVimeoEmbed(MALE_JUNIOR_TENNIS_VIDEO_ID, true, true, useBackground);
  }
  
  // For female junior tennis players, use the specific video
  if (userGender === 'female' && userType === 'junior' && sport === 'tennis') {
    return createStandardVimeoEmbed(FEMALE_JUNIOR_TENNIS_VIDEO_ID, true, true, useBackground);
  }
  
  // For female performance tennis players, use the specific video
  if (userGender === 'female' && userType === 'performance' && sport === 'tennis') {
    return createStandardVimeoEmbed(FEMALE_PERFORMANCE_TENNIS_VIDEO_ID, true, true, useBackground);
  }
  
  // For female professional tennis players, use the specific video
  if (userGender === 'female' && userType === 'professional' && sport === 'tennis') {
    return createStandardVimeoEmbed(FEMALE_PRO_TENNIS_VIDEO_ID, true, true, useBackground);
  }
  
  // For performance/agonista male users, use the specific video
  if (userGender === 'male' && (userType === 'performance')) {
    return createStandardVimeoEmbed(FALLBACK_VIDEO_ID, true, true, useBackground);
  }
  
  // For all other cases, use the fallback video ID
  let videoId = FALLBACK_VIDEO_ID;
  
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
