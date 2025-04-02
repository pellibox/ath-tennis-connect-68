
import { jsPDF } from 'jspdf';
import 'jspdf-autotable'; // Make sure this import comes before using autoTable
import { PriceTableData } from './types';
import { addNewPageIfNeeded, needsNewPage } from './layout';

/**
 * Create a pricing table in the PDF
 */
export const createPricingTable = (
  doc: jsPDF, 
  title: string, 
  tableData: PriceTableData, 
  yPosition: number
): number => {
  // Add table title
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text(title, 20, yPosition);
  yPosition += 10;
  
  // Add table
  const table = doc.autoTable({
    startY: yPosition,
    head: tableData.head,
    body: tableData.body,
    theme: 'grid',
    headStyles: { fillColor: [150, 150, 150], textColor: [255, 255, 255] },
    columnStyles: {
      0: { cellWidth: 70 },
      1: { cellWidth: 50 },
      2: { cellWidth: 50 }
    }
  });
  
  return table.previous.finalY + 15;
};

/**
 * Add pricing notes to the PDF
 */
export const addPricingNotes = (doc: jsPDF, notes: string[], yPosition: number): number => {
  doc.setFontSize(11);
  doc.setFont('helvetica', 'italic');
  
  for (let i = 0; i < notes.length; i++) {
    doc.text(notes[i], 20, yPosition + (i * 7));
  }
  
  return yPosition + (notes.length * 7) + 10;
};

/**
 * Generate all pricing tables
 */
export const generatePricingTables = (doc: jsPDF, yPosition: number): void => {
  try {
    // Tennis Programs Pricing
    yPosition = createPricingTable(doc, 'Prezzi Programmi Tennis', {
      head: [['Programma', 'Durata', 'Prezzo']],
      body: [
        ['Elite Performance Full', '40 settimane', '€ 15.000'],
        ['Elite Performance', '40 settimane', '€ 7.500'],
        ['Performance 4', '40 settimane', '€ 6.500'],
        ['Performance 3', '40 settimane', '€ 5.000'],
        ['Performance 2', '40 settimane', '€ 4.000'],
        ['SIT - Scuola Individuazione Talenti', '30 settimane', '€ 950'],
        ['SAT - Propedeutico', '30 settimane', '€ 500'],
        ['Adult Training', '30 settimane', '€ 700'],
        ['Universitari / Scuole Online', '30 settimane', '€ 1.000'],
        ['Private Personal Coaching', 'Sessione', '€ 120']
      ]
    }, yPosition);
    
    // Check if we need a new page
    if (needsNewPage(doc, yPosition, 60)) {
      doc.addPage();
      yPosition = 20;
    }
    
    // Padel Programs Pricing
    yPosition = createPricingTable(doc, 'Prezzi Programmi Padel', {
      head: [['Programma', 'Durata', 'Prezzo']],
      body: [
        ['Padel Avanzato', '30 settimane', '€ 1.200'],
        ['Padel Intermedio', '30 settimane', '€ 900'],
        ['Padel Principianti', '30 settimane', '€ 700'],
        ['Padel Coaching Privato', 'Sessione', '€ 90']
      ]
    }, yPosition);
    
    // Check if we need a new page
    if (needsNewPage(doc, yPosition, 60)) {
      doc.addPage();
      yPosition = 20;
    }
    
    // Pickleball Programs Pricing
    yPosition = createPricingTable(doc, 'Prezzi Programmi Pickleball', {
      head: [['Programma', 'Durata', 'Prezzo']],
      body: [
        ['Pickleball Avanzato', '30 settimane', '€ 1.000'],
        ['Pickleball Intermedio', '30 settimane', '€ 800'],
        ['Pickleball Principianti', '30 settimane', '€ 600'],
        ['Pickleball Clinics', 'Sessione (2h)', '€ 60']
      ]
    }, yPosition);
    
    // Check if we need a new page
    if (needsNewPage(doc, yPosition, 60)) {
      doc.addPage();
      yPosition = 20;
    }
    
    // TouchTennis Programs Pricing
    yPosition = createPricingTable(doc, 'Prezzi Programmi TouchTennis', {
      head: [['Programma', 'Durata', 'Prezzo']],
      body: [
        ['TouchTennis Avanzato', '30 settimane', '€ 900'],
        ['TouchTennis Base', '30 settimane', '€ 600'],
        ['TouchTennis Junior (8-14 anni)', '30 settimane', '€ 500']
      ]
    }, yPosition);
    
    // Check if we need a new page
    if (needsNewPage(doc, yPosition, 60)) {
      doc.addPage();
      yPosition = 20;
    }
    
    // Multi-sport programs
    yPosition = createPricingTable(doc, 'Programmi Multi-Sport', {
      head: [['Programma', 'Durata', 'Prezzo']],
      body: [
        ['Camp Multi-Sport con Racchetta', '5 giorni', '€ 350'],
        ['Camp Multi-Sport con Racchetta', '3 giorni', '€ 220']
      ]
    }, yPosition);
    
    // Add pricing notes
    if (needsNewPage(doc, yPosition, 40)) {
      doc.addPage();
      yPosition = 20;
    }
    
    const pricingNotes = [
      '* I prezzi possono subire variazioni. Contattare la reception per confermare.',
      '* Sono disponibili sconti per iscrizioni multiple e pacchetti famiglia.',
      '* La tecnologia VICKI™ può comportare costi aggiuntivi quando richiesta separatamente.',
      '* Tutti i programmi includono l\'accesso alle strutture durante le ore di lezione.'
    ];
    
    addPricingNotes(doc, pricingNotes, yPosition);
  } catch (error) {
    console.error("Error generating pricing tables:", error);
  }
};
