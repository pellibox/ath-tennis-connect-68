
import { jsPDF } from 'jspdf';
import { ProgramInfo } from './types';
import { addNewPageIfNeeded } from './layout';

/**
 * Add a section title to the PDF
 */
export const addSectionTitle = (doc: jsPDF, title: string, yPosition: number, fontSize: number = 18): number => {
  doc.setFontSize(fontSize);
  doc.setFont('helvetica', 'bold');
  doc.text(title, 20, yPosition);
  return yPosition + 15;
};

/**
 * Add category title to the PDF
 */
export const addCategoryTitle = (doc: jsPDF, title: string, yPosition: number): number => {
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text(title, 20, yPosition);
  return yPosition + 8;
};

/**
 * Add program details to the PDF
 */
export const addProgramDetails = (doc: jsPDF, program: ProgramInfo, yPosition: number): number => {
  // Check if we need a new page for this program
  yPosition = addNewPageIfNeeded(doc, yPosition, 40);
  
  // Add program title
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text(program.title, 25, yPosition);
  yPosition += 6;
  
  // Add program description
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  const programDesc = doc.splitTextToSize(program.description, doc.internal.pageSize.width - 50);
  doc.text(programDesc, 25, yPosition);
  yPosition += (programDesc.length * 5) + 2;
  
  // Add features if present
  if (program.features && program.features.length > 0) {
    for (const feature of program.features) {
      yPosition = addNewPageIfNeeded(doc, yPosition, 20);
      const featureText = doc.splitTextToSize(`• ${feature}`, doc.internal.pageSize.width - 55);
      doc.text(featureText, 30, yPosition);
      yPosition += (featureText.length * 5);
    }
    yPosition += 5;
  }
  
  // Add VICKI info if applicable
  yPosition = addVickiInfo(doc, program, yPosition);
  
  return yPosition + 8;
};

/**
 * Add VICKI technology information if present
 */
export const addVickiInfo = (doc: jsPDF, program: ProgramInfo, yPosition: number): number => {
  if (program.vickiMonitoringLevel || program.vickiPowered || program.vickiOnRequest || program.vickiCustomBadge) {
    yPosition = addNewPageIfNeeded(doc, yPosition, 20);
    
    doc.setFontSize(9);
    doc.setFont('helvetica', 'italic');
    
    if (program.vickiPowered) {
      doc.text('Questo programma utilizza la tecnologia VICKI™ per l\'analisi avanzata.', 30, yPosition);
      yPosition += 5;
    }
    
    if (program.vickiMonitoringLevel) {
      doc.text(`Livello di monitoraggio VICKI™: ${program.vickiMonitoringLevel.toUpperCase()}`, 30, yPosition);
      yPosition += 5;
    }
    
    if (program.vickiOnRequest) {
      doc.text('Tecnologia VICKI™ disponibile su richiesta.', 30, yPosition);
      yPosition += 5;
    }
    
    if (program.vickiCustomBadge) {
      doc.text(`Badge VICKI™: ${program.vickiCustomBadge}`, 30, yPosition);
      yPosition += 5;
    }
  }
  
  return yPosition;
};
