import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { toast } from 'sonner';
import { PdfOptions } from './types';
import { addPageHeader, addPageFooter } from './styles';
import { createStyledCoverPage, createStyledContactPage } from './newCover';
import { 
  generateStyledTennisSection, 
  generateStyledPadelSection, 
  generateStyledPickleballSection, 
  generateStyledTouchTennisSection 
} from './newSportSections';
import { generateStyledPricingTables } from './newTables';

/**
 * Generate the complete site brochure PDF with ATH styling
 */
export const generateSiteBrochure = async (options: PdfOptions = {}): Promise<jsPDF> => {
  try {
    console.log('Starting PDF generation with ATH styling...');
    
    // Create PDF document (A4 portrait)
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });
    
    // Set default language
    const language = options.language || 'it';
    console.log('Language:', language);
    
    // Track page numbers
    let currentPage = 1;
    
    // Create cover page
    await createStyledCoverPage(doc);
    console.log('Cover page created');
    
    // Generate sport sections
    currentPage = await generateStyledTennisSection(doc, currentPage + 1);
    console.log('Tennis section completed, current page:', currentPage);
    
    currentPage = await generateStyledPadelSection(doc, currentPage + 1);
    console.log('Padel section completed, current page:', currentPage);
    
    currentPage = await generateStyledPickleballSection(doc, currentPage + 1);
    console.log('Pickleball section completed, current page:', currentPage);
    
    currentPage = await generateStyledTouchTennisSection(doc, currentPage + 1);
    console.log('TouchTennis section completed, current page:', currentPage);
    
    // Add pricing tables section
    currentPage = await generateStyledPricingTables(doc, currentPage + 1);
    console.log('Pricing tables completed, current page:', currentPage);
    
    // Add contact information page
    doc.addPage();
    currentPage++;
    await addPageHeader(doc, 'Contatti');
    addPageFooter(doc, currentPage);
    createStyledContactPage(doc);
    console.log('Contact page created');
    
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
    const timestamp = new Date().toISOString().split('T')[0];
    
    doc.save(`ATH_Brochure_${timestamp}.pdf`);
    toast.success('Brochure scaricata con successo!');
  } catch (error) {
    console.error('Error downloading brochure:', error);
    toast.error('Errore durante la generazione della brochure.');
    throw error;
  }
};
