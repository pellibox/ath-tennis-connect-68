
import { Program } from './types';
import { 
  PROGRAM_IDS, 
  PROGRAM_TITLES, 
  PROGRAM_DESCRIPTIONS, 
  PROGRAM_IMAGES, 
  PROGRAM_FEATURES 
} from '../shared/clinicsConstants';

export const clinicsPrograms: Program[] = [
  {
    id: PROGRAM_IDS.PADEL_CLINICS,
    title: PROGRAM_TITLES.PADEL_CLINICS,
    description: PROGRAM_DESCRIPTIONS.PADEL_CLINICS,
    image: PROGRAM_IMAGES.PADEL_CLINICS,
    link: "/padel#padel-clinics",
    features: PROGRAM_FEATURES.PADEL_CLINICS,
    vickiPowered: true
  },
  {
    id: PROGRAM_IDS.RACQUET_SPORTS_CAMP,
    title: PROGRAM_TITLES.RACQUET_SPORTS_CAMP,
    description: PROGRAM_DESCRIPTIONS.RACQUET_SPORTS_CAMP,
    image: PROGRAM_IMAGES.RACQUET_SPORTS_CAMP,
    link: "/padel#racquet-sports-camp",
    features: PROGRAM_FEATURES.RACQUET_SPORTS_CAMP,
    vickiCustomBadge: "Multi-Sport Vicki™"
  }
];
