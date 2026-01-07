import { jsPDF } from 'jspdf';

// ATH Brand Colors (RGB values)
export const ATH_COLORS = {
  clay: [153, 51, 34] as [number, number, number],      // #993322 - Terra rossa ATH
  black: [0, 0, 0] as [number, number, number],
  white: [255, 255, 255] as [number, number, number],
  gray: [100, 100, 100] as [number, number, number],
  lightGray: [245, 245, 245] as [number, number, number],
  mediumGray: [200, 200, 200] as [number, number, number],
};

// Page dimensions
export const PAGE = {
  width: 210, // A4 width in mm
  height: 297, // A4 height in mm
  marginLeft: 20,
  marginRight: 20,
  marginTop: 35,
  marginBottom: 25,
  contentWidth: 170, // 210 - 20 - 20
};

// Font sizes
export const FONTS = {
  title: 24,
  sectionTitle: 18,
  subsectionTitle: 14,
  body: 11,
  small: 9,
  caption: 8,
};

/**
 * Add ATH header with logo and line to a page
 */
export const addPageHeader = async (doc: jsPDF, pageTitle?: string): Promise<void> => {
  const pageWidth = doc.internal.pageSize.width;
  
  // Add logo
  try {
    const logoImg = new Image();
    logoImg.src = '/lovable-uploads/0a250ed5-11e7-485c-a8f5-d41ebaa7083f.png';
    
    await new Promise<void>((resolve) => {
      logoImg.onload = () => {
        try {
          const imgWidth = 30;
          const imgHeight = (logoImg.height * imgWidth) / logoImg.width;
          doc.addImage(logoImg, 'PNG', PAGE.marginLeft, 8, imgWidth, imgHeight);
        } catch (e) {
          console.warn('Error adding logo:', e);
        }
        resolve();
      };
      logoImg.onerror = () => resolve();
      setTimeout(() => resolve(), 2000);
    });
  } catch (e) {
    console.warn('Error loading logo:', e);
  }
  
  // Add ATH text next to logo
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(...ATH_COLORS.clay);
  doc.text('ATH - Advanced Tennis Hub', 55, 15);
  
  // Add page title on the right if provided
  if (pageTitle) {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(...ATH_COLORS.gray);
    doc.text(pageTitle, pageWidth - PAGE.marginRight, 15, { align: 'right' });
  }
  
  // Add horizontal line under header
  doc.setDrawColor(...ATH_COLORS.clay);
  doc.setLineWidth(0.8);
  doc.line(PAGE.marginLeft, 22, pageWidth - PAGE.marginRight, 22);
  
  // Reset text color
  doc.setTextColor(...ATH_COLORS.black);
};

/**
 * Add footer with page number
 */
export const addPageFooter = (doc: jsPDF, pageNumber: number): void => {
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;
  
  // Add line above footer
  doc.setDrawColor(...ATH_COLORS.mediumGray);
  doc.setLineWidth(0.3);
  doc.line(PAGE.marginLeft, pageHeight - 15, pageWidth - PAGE.marginRight, pageHeight - 15);
  
  // Add page number
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(FONTS.small);
  doc.setTextColor(...ATH_COLORS.gray);
  doc.text(`Pagina ${pageNumber}`, pageWidth / 2, pageHeight - 10, { align: 'center' });
  
  // Add website
  doc.text('www.ath.tennis', pageWidth - PAGE.marginRight, pageHeight - 10, { align: 'right' });
  
  // Reset text color
  doc.setTextColor(...ATH_COLORS.black);
};

/**
 * Add a section title with ATH styling
 */
export const addStyledSectionTitle = (doc: jsPDF, title: string, yPosition: number): number => {
  // Add clay-colored background bar
  doc.setFillColor(...ATH_COLORS.clay);
  doc.rect(PAGE.marginLeft, yPosition - 6, PAGE.contentWidth, 12, 'F');
  
  // Add title text in white
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(FONTS.sectionTitle);
  doc.setTextColor(...ATH_COLORS.white);
  doc.text(title, PAGE.marginLeft + 5, yPosition + 2);
  
  // Reset text color
  doc.setTextColor(...ATH_COLORS.black);
  
  return yPosition + 18;
};

/**
 * Add a subsection title
 */
export const addStyledSubsectionTitle = (doc: jsPDF, title: string, yPosition: number): number => {
  // Add left border accent
  doc.setFillColor(...ATH_COLORS.clay);
  doc.rect(PAGE.marginLeft, yPosition - 4, 3, 10, 'F');
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(FONTS.subsectionTitle);
  doc.setTextColor(...ATH_COLORS.black);
  doc.text(title, PAGE.marginLeft + 8, yPosition + 2);
  
  return yPosition + 12;
};

/**
 * Add body text with proper wrapping
 */
export const addBodyText = (doc: jsPDF, text: string, yPosition: number, indent: number = 0): number => {
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(FONTS.body);
  doc.setTextColor(...ATH_COLORS.black);
  
  const maxWidth = PAGE.contentWidth - indent;
  const lines = doc.splitTextToSize(text, maxWidth);
  doc.text(lines, PAGE.marginLeft + indent, yPosition);
  
  return yPosition + (lines.length * 5) + 3;
};

/**
 * Add a bullet point
 */
export const addBulletPoint = (doc: jsPDF, text: string, yPosition: number): number => {
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(FONTS.body);
  
  // Add bullet
  doc.setFillColor(...ATH_COLORS.clay);
  doc.circle(PAGE.marginLeft + 5, yPosition - 1.5, 1.5, 'F');
  
  // Add text
  const maxWidth = PAGE.contentWidth - 15;
  const lines = doc.splitTextToSize(text, maxWidth);
  doc.text(lines, PAGE.marginLeft + 12, yPosition);
  
  return yPosition + (lines.length * 5) + 2;
};

/**
 * Add a feature box with VICKI badge styling
 */
export const addFeatureBox = (doc: jsPDF, title: string, description: string, yPosition: number): number => {
  const boxHeight = 25;
  
  // Light gray background
  doc.setFillColor(...ATH_COLORS.lightGray);
  doc.roundedRect(PAGE.marginLeft, yPosition, PAGE.contentWidth, boxHeight, 2, 2, 'F');
  
  // Clay left border
  doc.setFillColor(...ATH_COLORS.clay);
  doc.rect(PAGE.marginLeft, yPosition, 3, boxHeight, 'F');
  
  // Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(FONTS.subsectionTitle);
  doc.setTextColor(...ATH_COLORS.clay);
  doc.text(title, PAGE.marginLeft + 8, yPosition + 8);
  
  // Description
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(FONTS.small);
  doc.setTextColor(...ATH_COLORS.gray);
  const lines = doc.splitTextToSize(description, PAGE.contentWidth - 15);
  doc.text(lines, PAGE.marginLeft + 8, yPosition + 16);
  
  doc.setTextColor(...ATH_COLORS.black);
  
  return yPosition + boxHeight + 8;
};
