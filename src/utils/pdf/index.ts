
import { jsPDF } from 'jspdf';
// Import the autotable plugin to extend jsPDF
import 'jspdf-autotable';
import { toast } from 'sonner';
import { PdfOptions } from './types';
import { createCoverPage, createContactPage } from './cover';
import { 
  generateTennisSection, 
  generatePadelSection, 
  generatePickleballSection, 
  generateTouchTennisSection 
} from './sportSections';
import { generatePricingTables } from './tables';

/**
 * Generate the complete site brochure PDF
 */
export const generateSiteBrochure = async (options: PdfOptions = {}): Promise<jsPDF> => {
  try {
    console.log('Starting PDF generation...');
    
    // Create PDF document (A4 portrait)
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });
    
    // Set default language
    const language = options.language || 'it';
    console.log('Language:', language);
    
    // Create cover page
    let yPosition = await createCoverPage(doc);
    
    // Generate sport sections
    yPosition = generateTennisSection(doc, yPosition);
    doc.addPage();
    yPosition = 20;
    yPosition = generatePadelSection(doc, yPosition);
    doc.addPage();
    yPosition = 20;
    yPosition = generatePickleballSection(doc, yPosition);
    doc.addPage();
    yPosition = 20;
    yPosition = generateTouchTennisSection(doc, yPosition);
    
    // Add pricing tables section
    doc.addPage();
    yPosition = 20;
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('5. Tariffe e Prezzi', 20, yPosition);
    yPosition += 15;
    
    console.log('Starting pricing tables section at yPosition:', yPosition);
    
    // Generate all pricing tables
    generatePricingTables(doc, yPosition);
    
    // Add contact information page
    doc.addPage();
    createContactPage(doc);
    
    console.log('PDF generation completed successfully');
    return doc;
  } catch (error) {
    console.error('Complete PDF generation error:', error);
    toast.error('Si è verificato un errore durante la generazione della brochure.');
    throw error;
  }
};

/**
 * Download the site brochure PDF
 */
export const downloadSiteBrochure = async (options: PdfOptions = {}): Promise<void> => {
  try {
    const doc = await generateSiteBrochure(options);
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    
    doc.save(`ATH_Tennis_Hub_Brochure_${timestamp}.pdf`);
    toast.success('Brochure scaricata con successo!');
  } catch (error) {
    console.error('Error downloading brochure:', error);
    toast.error('Errore durante la generazione della brochure.');
    throw error;
  }
};
