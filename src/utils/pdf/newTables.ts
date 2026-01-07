import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ATH_COLORS, PAGE, FONTS, addPageHeader, addPageFooter, addStyledSectionTitle } from './styles';

/**
 * Generate styled pricing tables
 */
export const generateStyledPricingTables = async (doc: jsPDF, startPage: number): Promise<number> => {
  doc.addPage();
  let pageNum = startPage;
  await addPageHeader(doc, 'Tariffe');
  addPageFooter(doc, pageNum);
  
  let yPosition = PAGE.marginTop;
  yPosition = addStyledSectionTitle(doc, '5. Tariffe e Prezzi', yPosition);
  yPosition += 5;
  
  // Tennis Programs
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(...ATH_COLORS.clay);
  doc.text('Programmi Tennis', PAGE.marginLeft, yPosition);
  yPosition += 5;
  
  autoTable(doc, {
    startY: yPosition,
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
      ['Private Personal Coaching', 'Sessione', '€ 120'],
    ],
    theme: 'grid',
    headStyles: { 
      fillColor: ATH_COLORS.clay,
      textColor: ATH_COLORS.white,
      fontStyle: 'bold',
      fontSize: 10
    },
    bodyStyles: {
      fontSize: 9,
      textColor: ATH_COLORS.black
    },
    alternateRowStyles: {
      fillColor: ATH_COLORS.lightGray
    },
    columnStyles: {
      0: { cellWidth: 80 },
      1: { cellWidth: 45 },
      2: { cellWidth: 45 }
    },
    margin: { left: PAGE.marginLeft, right: PAGE.marginRight }
  });
  
  yPosition = (doc as any).lastAutoTable.finalY + 15;
  
  // Check for new page
  if (yPosition > PAGE.height - 80) {
    doc.addPage();
    pageNum++;
    await addPageHeader(doc, 'Tariffe');
    addPageFooter(doc, pageNum);
    yPosition = PAGE.marginTop;
  }
  
  // Padel Programs
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(...ATH_COLORS.clay);
  doc.text('Programmi Padel', PAGE.marginLeft, yPosition);
  yPosition += 5;
  
  autoTable(doc, {
    startY: yPosition,
    head: [['Programma', 'Durata', 'Prezzo']],
    body: [
      ['Padel Avanzato', '30 settimane', '€ 1.200'],
      ['Padel Intermedio', '30 settimane', '€ 900'],
      ['Padel Principianti', '30 settimane', '€ 700'],
      ['Padel Coaching Privato', 'Sessione', '€ 90'],
    ],
    theme: 'grid',
    headStyles: { 
      fillColor: ATH_COLORS.clay,
      textColor: ATH_COLORS.white,
      fontStyle: 'bold',
      fontSize: 10
    },
    bodyStyles: {
      fontSize: 9,
      textColor: ATH_COLORS.black
    },
    alternateRowStyles: {
      fillColor: ATH_COLORS.lightGray
    },
    columnStyles: {
      0: { cellWidth: 80 },
      1: { cellWidth: 45 },
      2: { cellWidth: 45 }
    },
    margin: { left: PAGE.marginLeft, right: PAGE.marginRight }
  });
  
  yPosition = (doc as any).lastAutoTable.finalY + 15;
  
  // Check for new page
  if (yPosition > PAGE.height - 80) {
    doc.addPage();
    pageNum++;
    await addPageHeader(doc, 'Tariffe');
    addPageFooter(doc, pageNum);
    yPosition = PAGE.marginTop;
  }
  
  // Pickleball Programs
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(...ATH_COLORS.clay);
  doc.text('Programmi Pickleball', PAGE.marginLeft, yPosition);
  yPosition += 5;
  
  autoTable(doc, {
    startY: yPosition,
    head: [['Programma', 'Durata', 'Prezzo']],
    body: [
      ['Pickleball Avanzato', '30 settimane', '€ 1.000'],
      ['Pickleball Intermedio', '30 settimane', '€ 800'],
      ['Pickleball Principianti', '30 settimane', '€ 600'],
      ['Pickleball Clinics', 'Sessione (2h)', '€ 60'],
    ],
    theme: 'grid',
    headStyles: { 
      fillColor: ATH_COLORS.clay,
      textColor: ATH_COLORS.white,
      fontStyle: 'bold',
      fontSize: 10
    },
    bodyStyles: {
      fontSize: 9,
      textColor: ATH_COLORS.black
    },
    alternateRowStyles: {
      fillColor: ATH_COLORS.lightGray
    },
    columnStyles: {
      0: { cellWidth: 80 },
      1: { cellWidth: 45 },
      2: { cellWidth: 45 }
    },
    margin: { left: PAGE.marginLeft, right: PAGE.marginRight }
  });
  
  yPosition = (doc as any).lastAutoTable.finalY + 15;
  
  // Check for new page
  if (yPosition > PAGE.height - 80) {
    doc.addPage();
    pageNum++;
    await addPageHeader(doc, 'Tariffe');
    addPageFooter(doc, pageNum);
    yPosition = PAGE.marginTop;
  }
  
  // TouchTennis Programs
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(...ATH_COLORS.clay);
  doc.text('Programmi TouchTennis', PAGE.marginLeft, yPosition);
  yPosition += 5;
  
  autoTable(doc, {
    startY: yPosition,
    head: [['Programma', 'Durata', 'Prezzo']],
    body: [
      ['TouchTennis Avanzato', '30 settimane', '€ 900'],
      ['TouchTennis Base', '30 settimane', '€ 600'],
      ['TouchTennis Junior (8-14 anni)', '30 settimane', '€ 500'],
    ],
    theme: 'grid',
    headStyles: { 
      fillColor: ATH_COLORS.clay,
      textColor: ATH_COLORS.white,
      fontStyle: 'bold',
      fontSize: 10
    },
    bodyStyles: {
      fontSize: 9,
      textColor: ATH_COLORS.black
    },
    alternateRowStyles: {
      fillColor: ATH_COLORS.lightGray
    },
    columnStyles: {
      0: { cellWidth: 80 },
      1: { cellWidth: 45 },
      2: { cellWidth: 45 }
    },
    margin: { left: PAGE.marginLeft, right: PAGE.marginRight }
  });
  
  yPosition = (doc as any).lastAutoTable.finalY + 20;
  
  // Notes
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(FONTS.small);
  doc.setTextColor(...ATH_COLORS.gray);
  
  const notes = [
    '* I prezzi possono subire variazioni. Contattare la reception per conferma.',
    '* Disponibili sconti per iscrizioni multiple e pacchetti famiglia.',
    '* La tecnologia VICKI™ può comportare costi aggiuntivi se richiesta separatamente.',
  ];
  
  notes.forEach((note, i) => {
    doc.text(note, PAGE.marginLeft, yPosition + (i * 6));
  });
  
  return pageNum;
};
