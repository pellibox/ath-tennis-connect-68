
import { jsPDF } from 'jspdf';

/**
 * Calculate a center position for an element on the page
 */
export const centerX = (doc: jsPDF, width: number): number => {
  return (doc.internal.pageSize.width - width) / 2;
};

/**
 * Check if a new page is needed based on remaining space
 */
export const needsNewPage = (doc: jsPDF, yPosition: number, requiredSpace: number): boolean => {
  return yPosition > doc.internal.pageSize.height - requiredSpace;
};

/**
 * Add a new page and return the starting Y position
 */
export const addNewPageIfNeeded = (doc: jsPDF, yPosition: number, requiredSpace: number, startY: number = 20): number => {
  if (needsNewPage(doc, yPosition, requiredSpace)) {
    doc.addPage();
    return startY;
  }
  return yPosition;
};
