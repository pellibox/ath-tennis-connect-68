
import { jsPDF } from 'jspdf';
// Import the autotable plugin to extend jsPDF
import 'jspdf-autotable';
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
  
  console.log(`Creating table "${title}" at position ${yPosition}`);
  console.log(`Table data:`, JSON.stringify(tableData));
  
  try {
    // Add table with proper configuration
    const result = doc.autoTable({
      startY: yPosition,
      head: tableData.head,
      body: tableData.body,
      theme: 'grid',
      headStyles: { fillColor: [150, 150, 150], textColor: [255, 255, 255] },
      columnStyles: {
        0: { cellWidth: 70 },
        1: { cellWidth: 50 },
        2: { cellWidth: 50 }
      },
      margin: { left: 20, right: 20 }
    });
    
    const finalY = result.previous?.finalY || yPosition;
    console.log(`Table "${title}" created, final Y position: ${finalY}`);
    return finalY + 15;
  } catch (error) {
    console.error(`Error creating table "${title}":`, error);
    // Return yPosition + some space to prevent overlap in case of error
    return yPosition + 50;
  }
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
    console.log("Starting to generate pricing tables at position:", yPosition);
    
    // Tennis Programs Pricing
    doc.setFontSize(12); // Ensure text size is readable
    doc.setTextColor(0, 0, 0); // Ensure text color is black
    
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
    
    console.log("After Tennis Programs table, yPosition:", yPosition);
    
    // Add new page for the padel programs
    doc.addPage();
    yPosition = 20;
    console.log("Added new page for Padel Programs, yPosition reset to:", yPosition);
    
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
    
    console.log("After Padel Programs table, yPosition:", yPosition);
    
    // Add new page for the pickleball programs
    doc.addPage();
    yPosition = 20;
    console.log("Added new page for Pickleball Programs, yPosition reset to:", yPosition);
    
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
    
    console.log("After Pickleball Programs table, yPosition:", yPosition);
    
    // Add new page for the TouchTennis programs
    doc.addPage();
    yPosition = 20;
    console.log("Added new page for TouchTennis Programs, yPosition reset to:", yPosition);
    
    // TouchTennis Programs Pricing
    yPosition = createPricingTable(doc, 'Prezzi Programmi TouchTennis', {
      head: [['Programma', 'Durata', 'Prezzo']],
      body: [
        ['TouchTennis Avanzato', '30 settimane', '€ 900'],
        ['TouchTennis Base', '30 settimane', '€ 600'],
        ['TouchTennis Junior (8-14 anni)', '30 settimane', '€ 500']
      ]
    }, yPosition);
    
    console.log("After TouchTennis Programs table, yPosition:", yPosition);
    
    // Add new page for Multi-sport programs
    doc.addPage();
    yPosition = 20;
    console.log("Added new page for Multi-sport programs, yPosition reset to:", yPosition);
    
    // Multi-sport programs
    yPosition = createPricingTable(doc, 'Programmi Multi-Sport', {
      head: [['Programma', 'Durata', 'Prezzo']],
      body: [
        ['Camp Multi-Sport con Racchetta', '5 giorni', '€ 350'],
        ['Camp Multi-Sport con Racchetta', '3 giorni', '€ 220']
      ]
    }, yPosition);
    
    console.log("After Multi-sport programs table, yPosition:", yPosition);
    
    // Add new page for pricing notes
    doc.addPage();
    yPosition = 20;
    console.log("Added new page for pricing notes, yPosition reset to:", yPosition);
    
    const pricingNotes = [
      '* I prezzi possono subire variazioni. Contattare la reception per confermare.',
      '* Sono disponibili sconti per iscrizioni multiple e pacchetti famiglia.',
      '* La tecnologia VICKI™ può comportare costi aggiuntivi quando richiesta separatamente.',
      '* Tutti i programmi includono l\'accesso alle strutture durante le ore di lezione.'
    ];
    
    yPosition = addPricingNotes(doc, pricingNotes, yPosition);
    console.log("After adding pricing notes, final yPosition:", yPosition);
  } catch (error) {
    console.error("Error generating pricing tables:", error);
  }
};
