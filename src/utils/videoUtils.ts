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
  const FALLBACK_VIDEO_ID = '867339842';
  
  // Validate videoId - must be numeric and at least 7 digits
  const cleanVideoId = videoId && /^\d{7,}$/.test(videoId.trim()) 
    ? videoId.trim() 
    : FALLBACK_VIDEO_ID;
  
  // Use a standardized, consistent embed format that works reliably
  return `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/${cleanVideoId}?autoplay=${autoplay ? '1' : '0'}&loop=${loop ? '1' : '0'}&background=${background ? '1' : '0'}&controls=${controls ? '1' : '0'}&autopause=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="ATH Video"></iframe></div>`;
};

/**
 * Get thumbnail URL for a Vimeo video
 */
export const getVimeoThumbnailUrl = (videoId: string | null): string => {
  if (!videoId) return '/lovable-uploads/6ea13aa7-2578-488b-8ed4-4b17fc2ddc4e.png';
  return `https://vumbnail.com/${videoId}.jpg`;
};

/**
 * Get the appropriate Vimeo embed based on user profile
 */
export const getVimeoEmbed = (userGender: UserGender | null, userType: UserType | null, useBackground: boolean = true, forTechnologyPage: boolean = false, sport: SportType = 'tennis'): string => {
  // Safety - always use a known working video ID as fallback
  const FALLBACK_VIDEO_ID = '867339842';
  
  // Technology page video override
  if (forTechnologyPage) {
    return createStandardVimeoEmbed(FALLBACK_VIDEO_ID, true, true, useBackground);
  }
  
  // Use a known working video ID for all cases
  let videoId = FALLBACK_VIDEO_ID;
  
  // In the future we can add specific videos for different user types when we have them
  // For now, use the fallback for everything to ensure videos work
  
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
