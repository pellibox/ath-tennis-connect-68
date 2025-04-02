
import { jsPDF } from 'jspdf';
import { programCategories } from '@/data/programs';
import { programCategories as padelCategories } from '@/data/padel';
import { programCategories as pickleballCategories } from '@/data/pickleball';
import { touchTennisCategories } from '@/data/touchtennis';
import { addSectionTitle, addCategoryTitle, addProgramDetails } from './content';
import { addNewPageIfNeeded } from './layout';

/**
 * Generate the tennis programs section
 */
export const generateTennisSection = (doc: jsPDF, yPosition: number): number => {
  // Add page break
  doc.addPage();
  yPosition = 20;
  
  // SECTION 1: Tennis Programs
  yPosition = addSectionTitle(doc, '1. Programmi Tennis', yPosition);
  
  // Tennis Programs
  for (const category of programCategories) {
    yPosition = addNewPageIfNeeded(doc, yPosition, 30);
    yPosition = addCategoryTitle(doc, category.title, yPosition);
    
    for (const program of category.programs) {
      yPosition = addProgramDetails(doc, program, yPosition);
    }
    
    yPosition += 10;
  }
  
  return yPosition;
};

/**
 * Generate the padel programs section
 */
export const generatePadelSection = (doc: jsPDF, yPosition: number): number => {
  // Add page break
  doc.addPage();
  yPosition = 20;
  
  // SECTION 2: Padel Programs
  yPosition = addSectionTitle(doc, '2. Programmi Padel', yPosition);
  
  // Padel Programs
  for (const category of padelCategories) {
    yPosition = addNewPageIfNeeded(doc, yPosition, 30);
    yPosition = addCategoryTitle(doc, category.title, yPosition);
    
    for (const program of category.programs) {
      yPosition = addProgramDetails(doc, program, yPosition);
    }
    
    yPosition += 10;
  }
  
  return yPosition;
};

/**
 * Generate the pickleball programs section
 */
export const generatePickleballSection = (doc: jsPDF, yPosition: number): number => {
  // Add page break
  doc.addPage();
  yPosition = 20;
  
  // SECTION 3: Pickleball Programs
  yPosition = addSectionTitle(doc, '3. Programmi Pickleball', yPosition);
  
  // Pickleball Programs
  for (const category of pickleballCategories) {
    yPosition = addNewPageIfNeeded(doc, yPosition, 30);
    yPosition = addCategoryTitle(doc, category.title, yPosition);
    
    for (const program of category.programs) {
      yPosition = addProgramDetails(doc, program, yPosition);
    }
    
    yPosition += 10;
  }
  
  return yPosition;
};

/**
 * Generate the TouchTennis programs section
 */
export const generateTouchTennisSection = (doc: jsPDF, yPosition: number): number => {
  // Add page break
  doc.addPage();
  yPosition = 20;
  
  // SECTION 4: TouchTennis programs
  yPosition = addSectionTitle(doc, '4. Programmi TouchTennis', yPosition);
  
  // TouchTennis Programs
  for (const category of touchTennisCategories) {
    yPosition = addNewPageIfNeeded(doc, yPosition, 30);
    yPosition = addCategoryTitle(doc, category.title, yPosition);
    
    for (const program of category.programs) {
      yPosition = addProgramDetails(doc, program, yPosition);
    }
    
    yPosition += 10;
  }
  
  return yPosition;
};
