import { jsPDF } from 'jspdf';
import { programCategories } from '@/data/programs';
import { programCategories as padelCategories } from '@/data/padel';
import { programCategories as pickleballCategories } from '@/data/pickleball';
import { touchTennisCategories } from '@/data/touchtennis';
import { 
  ATH_COLORS, 
  PAGE, 
  FONTS, 
  addPageHeader, 
  addPageFooter, 
  addStyledSectionTitle, 
  addStyledSubsectionTitle,
  addBodyText,
  addBulletPoint 
} from './styles';
import { ProgramInfo } from './types';

/**
 * Add program details with styled formatting
 */
const addStyledProgramDetails = (doc: jsPDF, program: ProgramInfo, yPosition: number): number => {
  // Check if we need a new page
  if (yPosition > PAGE.height - 60) {
    doc.addPage();
    yPosition = PAGE.marginTop;
  }
  
  // Program title with clay underline
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(...ATH_COLORS.clay);
  doc.text(program.title, PAGE.marginLeft + 5, yPosition);
  
  // Underline
  const titleWidth = doc.getTextWidth(program.title);
  doc.setDrawColor(...ATH_COLORS.clay);
  doc.setLineWidth(0.5);
  doc.line(PAGE.marginLeft + 5, yPosition + 1, PAGE.marginLeft + 5 + titleWidth, yPosition + 1);
  
  yPosition += 8;
  
  // Description
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(FONTS.body);
  doc.setTextColor(...ATH_COLORS.black);
  const descLines = doc.splitTextToSize(program.description, PAGE.contentWidth - 10);
  doc.text(descLines, PAGE.marginLeft + 5, yPosition);
  yPosition += descLines.length * 5 + 3;
  
  // Features
  if (program.features && program.features.length > 0) {
    doc.setFontSize(FONTS.small);
    for (const feature of program.features) {
      if (yPosition > PAGE.height - 40) {
        doc.addPage();
        yPosition = PAGE.marginTop;
      }
      
      doc.setFillColor(...ATH_COLORS.clay);
      doc.circle(PAGE.marginLeft + 10, yPosition - 1, 1, 'F');
      
      const featureLines = doc.splitTextToSize(feature, PAGE.contentWidth - 20);
      doc.text(featureLines, PAGE.marginLeft + 15, yPosition);
      yPosition += featureLines.length * 4 + 2;
    }
  }
  
  // VICKI info
  if (program.vickiMonitoringLevel || program.vickiPowered) {
    if (yPosition > PAGE.height - 30) {
      doc.addPage();
      yPosition = PAGE.marginTop;
    }
    
    doc.setFillColor(...ATH_COLORS.lightGray);
    doc.roundedRect(PAGE.marginLeft + 5, yPosition, PAGE.contentWidth - 10, 12, 2, 2, 'F');
    
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(FONTS.small);
    doc.setTextColor(...ATH_COLORS.clay);
    
    let vickiText = '🎯 VICKI™';
    if (program.vickiMonitoringLevel) {
      const levelMap: Record<string, string> = {
        'essentials': 'ESSENTIALS',
        'basic': 'ESSENTIALS',
        'core': 'CORE',
        'standard': 'CORE',
        'advanced': 'ADVANCED',
        'performance': 'PERFORMANCE',
        'elite': 'PERFORMANCE',
        'pro': 'PRO'
      };
      vickiText += ` - Livello ${levelMap[program.vickiMonitoringLevel] || program.vickiMonitoringLevel.toUpperCase()}`;
    } else if (program.vickiPowered) {
      vickiText += ' Powered';
    }
    
    doc.text(vickiText, PAGE.marginLeft + 10, yPosition + 8);
    yPosition += 18;
  }
  
  doc.setTextColor(...ATH_COLORS.black);
  
  return yPosition + 5;
};

/**
 * Generate styled Tennis section
 */
export const generateStyledTennisSection = async (doc: jsPDF, startPage: number): Promise<number> => {
  doc.addPage();
  let pageNum = startPage;
  await addPageHeader(doc, 'Tennis');
  addPageFooter(doc, pageNum);
  
  let yPosition = PAGE.marginTop;
  yPosition = addStyledSectionTitle(doc, '1. Programmi Tennis', yPosition);
  
  // Intro text
  const introText = 'ATH offre una gamma completa di programmi tennis, dalla formazione base fino all\'alto livello agonistico, tutti supportati dalla tecnologia VICKI™ per un\'analisi precisa e un miglioramento continuo.';
  yPosition = addBodyText(doc, introText, yPosition);
  yPosition += 5;
  
  for (const category of programCategories) {
    if (yPosition > PAGE.height - 60) {
      doc.addPage();
      pageNum++;
      await addPageHeader(doc, 'Tennis');
      addPageFooter(doc, pageNum);
      yPosition = PAGE.marginTop;
    }
    
    yPosition = addStyledSubsectionTitle(doc, category.title, yPosition);
    
    for (const program of category.programs) {
      if (yPosition > PAGE.height - 60) {
        doc.addPage();
        pageNum++;
        await addPageHeader(doc, 'Tennis');
        addPageFooter(doc, pageNum);
        yPosition = PAGE.marginTop;
      }
      yPosition = addStyledProgramDetails(doc, program, yPosition);
    }
    
    yPosition += 5;
  }
  
  return pageNum;
};

/**
 * Generate styled Padel section
 */
export const generateStyledPadelSection = async (doc: jsPDF, startPage: number): Promise<number> => {
  doc.addPage();
  let pageNum = startPage;
  await addPageHeader(doc, 'Padel');
  addPageFooter(doc, pageNum);
  
  let yPosition = PAGE.marginTop;
  yPosition = addStyledSectionTitle(doc, '2. Programmi Padel', yPosition);
  
  const introText = 'Il padel è uno degli sport in più rapida crescita. ATH offre programmi per tutti i livelli, dai principianti agli agonisti.';
  yPosition = addBodyText(doc, introText, yPosition);
  yPosition += 5;
  
  for (const category of padelCategories) {
    if (yPosition > PAGE.height - 60) {
      doc.addPage();
      pageNum++;
      await addPageHeader(doc, 'Padel');
      addPageFooter(doc, pageNum);
      yPosition = PAGE.marginTop;
    }
    
    yPosition = addStyledSubsectionTitle(doc, category.title, yPosition);
    
    for (const program of category.programs) {
      if (yPosition > PAGE.height - 60) {
        doc.addPage();
        pageNum++;
        await addPageHeader(doc, 'Padel');
        addPageFooter(doc, pageNum);
        yPosition = PAGE.marginTop;
      }
      yPosition = addStyledProgramDetails(doc, program, yPosition);
    }
    
    yPosition += 5;
  }
  
  return pageNum;
};

/**
 * Generate styled Pickleball section
 */
export const generateStyledPickleballSection = async (doc: jsPDF, startPage: number): Promise<number> => {
  doc.addPage();
  let pageNum = startPage;
  await addPageHeader(doc, 'Pickleball');
  addPageFooter(doc, pageNum);
  
  let yPosition = PAGE.marginTop;
  yPosition = addStyledSectionTitle(doc, '3. Programmi Pickleball', yPosition);
  
  const introText = 'Il pickleball combina elementi di tennis, badminton e ping pong. È facile da imparare e divertente per tutte le età.';
  yPosition = addBodyText(doc, introText, yPosition);
  yPosition += 5;
  
  for (const category of pickleballCategories) {
    if (yPosition > PAGE.height - 60) {
      doc.addPage();
      pageNum++;
      await addPageHeader(doc, 'Pickleball');
      addPageFooter(doc, pageNum);
      yPosition = PAGE.marginTop;
    }
    
    yPosition = addStyledSubsectionTitle(doc, category.title, yPosition);
    
    for (const program of category.programs) {
      if (yPosition > PAGE.height - 60) {
        doc.addPage();
        pageNum++;
        await addPageHeader(doc, 'Pickleball');
        addPageFooter(doc, pageNum);
        yPosition = PAGE.marginTop;
      }
      yPosition = addStyledProgramDetails(doc, program, yPosition);
    }
    
    yPosition += 5;
  }
  
  return pageNum;
};

/**
 * Generate styled TouchTennis section
 */
export const generateStyledTouchTennisSection = async (doc: jsPDF, startPage: number): Promise<number> => {
  doc.addPage();
  let pageNum = startPage;
  await addPageHeader(doc, 'TouchTennis');
  addPageFooter(doc, pageNum);
  
  let yPosition = PAGE.marginTop;
  yPosition = addStyledSectionTitle(doc, '4. Programmi TouchTennis', yPosition);
  
  const introText = 'TouchTennis è una versione compatta del tennis, giocata su un campo più piccolo con palline in schiuma. Ideale per sviluppare tecnica e tattica.';
  yPosition = addBodyText(doc, introText, yPosition);
  yPosition += 5;
  
  for (const category of touchTennisCategories) {
    if (yPosition > PAGE.height - 60) {
      doc.addPage();
      pageNum++;
      await addPageHeader(doc, 'TouchTennis');
      addPageFooter(doc, pageNum);
      yPosition = PAGE.marginTop;
    }
    
    yPosition = addStyledSubsectionTitle(doc, category.title, yPosition);
    
    for (const program of category.programs) {
      if (yPosition > PAGE.height - 60) {
        doc.addPage();
        pageNum++;
        await addPageHeader(doc, 'TouchTennis');
        addPageFooter(doc, pageNum);
        yPosition = PAGE.marginTop;
      }
      yPosition = addStyledProgramDetails(doc, program, yPosition);
    }
    
    yPosition += 5;
  }
  
  return pageNum;
};
