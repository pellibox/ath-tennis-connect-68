import { jsPDF } from 'jspdf';
import { ATH_COLORS, PAGE, FONTS, addPageFooter } from './styles';

/**
 * Create the cover page for the brochure
 */
export const createStyledCoverPage = async (doc: jsPDF): Promise<number> => {
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;
  
  // Add large clay header area
  doc.setFillColor(...ATH_COLORS.clay);
  doc.rect(0, 0, pageWidth, 100, 'F');
  
  // Add logo
  try {
    const logoImg = new Image();
    logoImg.src = '/lovable-uploads/0a250ed5-11e7-485c-a8f5-d41ebaa7083f.png';
    
    await new Promise<void>((resolve) => {
      logoImg.onload = () => {
        try {
          const imgWidth = 60;
          const imgHeight = (logoImg.height * imgWidth) / logoImg.width;
          const xPos = (pageWidth - imgWidth) / 2;
          doc.addImage(logoImg, 'PNG', xPos, 15, imgWidth, imgHeight);
        } catch (e) {
          console.warn('Error adding cover logo:', e);
        }
        resolve();
      };
      logoImg.onerror = () => resolve();
      setTimeout(() => resolve(), 3000);
    });
  } catch (e) {
    console.warn('Error loading cover logo:', e);
  }
  
  // Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(28);
  doc.setTextColor(...ATH_COLORS.white);
  doc.text('ATH - Advanced Tennis Hub', pageWidth / 2, 65, { align: 'center' });
  
  // Subtitle
  doc.setFontSize(16);
  doc.setFont('helvetica', 'normal');
  doc.text('Brochure Informativa', pageWidth / 2, 78, { align: 'center' });
  
  // Tagline
  doc.setFontSize(12);
  doc.setFont('helvetica', 'italic');
  doc.text('Tecnologia e Tradizione per il Tennis del Futuro', pageWidth / 2, 90, { align: 'center' });
  
  // Reset text color
  doc.setTextColor(...ATH_COLORS.black);
  
  // Introduction section
  let yPosition = 120;
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(FONTS.sectionTitle);
  doc.setTextColor(...ATH_COLORS.clay);
  doc.text('Benvenuti in ATH', PAGE.marginLeft, yPosition);
  yPosition += 12;
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(FONTS.body);
  doc.setTextColor(...ATH_COLORS.black);
  const introText = 'ATH è un centro di eccellenza per il tennis che integra tecnologia avanzata e competenza umana. Il nostro metodo combina analisi dei dati con coaching personalizzato per ottimizzare le performance di ogni atleta, dai principianti ai professionisti.';
  const splitIntro = doc.splitTextToSize(introText, PAGE.contentWidth);
  doc.text(splitIntro, PAGE.marginLeft, yPosition);
  yPosition += splitIntro.length * 5 + 15;
  
  // VICKI Technology box
  doc.setFillColor(...ATH_COLORS.lightGray);
  doc.roundedRect(PAGE.marginLeft, yPosition, PAGE.contentWidth, 40, 3, 3, 'F');
  doc.setFillColor(...ATH_COLORS.clay);
  doc.rect(PAGE.marginLeft, yPosition, 4, 40, 'F');
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(...ATH_COLORS.clay);
  doc.text('Tecnologia VICKI™', PAGE.marginLeft + 10, yPosition + 12);
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(FONTS.body);
  doc.setTextColor(...ATH_COLORS.black);
  const vickiText = 'Visual Intelligent Coaching for Knowledge Insights: Un sistema che monitora oltre 70 parametri della performance tennistica, fornendo analisi in tempo reale e feedback personalizzato.';
  const splitVicki = doc.splitTextToSize(vickiText, PAGE.contentWidth - 20);
  doc.text(splitVicki, PAGE.marginLeft + 10, yPosition + 22);
  yPosition += 55;
  
  // Table of contents
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(FONTS.sectionTitle);
  doc.setTextColor(...ATH_COLORS.clay);
  doc.text('Indice dei Contenuti', PAGE.marginLeft, yPosition);
  yPosition += 15;
  
  const tocItems = [
    { num: '1.', title: 'Tennis', desc: 'Programmi junior, adulti, elite e professionisti' },
    { num: '2.', title: 'Padel', desc: 'Corsi per tutti i livelli' },
    { num: '3.', title: 'Pickleball', desc: 'Lo sport in più rapida crescita' },
    { num: '4.', title: 'TouchTennis', desc: 'Tennis compatto e accessibile' },
    { num: '5.', title: 'Tariffe', desc: 'Prezzi e pacchetti' },
    { num: '6.', title: 'Contatti', desc: 'Come raggiungerci' },
  ];
  
  tocItems.forEach((item, index) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(FONTS.body);
    doc.setTextColor(...ATH_COLORS.clay);
    doc.text(item.num, PAGE.marginLeft, yPosition);
    
    doc.setTextColor(...ATH_COLORS.black);
    doc.text(item.title, PAGE.marginLeft + 10, yPosition);
    
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...ATH_COLORS.gray);
    doc.text(`- ${item.desc}`, PAGE.marginLeft + 45, yPosition);
    
    yPosition += 8;
  });
  
  // Footer
  addPageFooter(doc, 1);
  
  return yPosition;
};

/**
 * Create styled contact information page
 */
export const createStyledContactPage = (doc: jsPDF): void => {
  const pageWidth = doc.internal.pageSize.width;
  
  // Header bar
  doc.setFillColor(...ATH_COLORS.clay);
  doc.rect(PAGE.marginLeft, 35, PAGE.contentWidth, 12, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(FONTS.sectionTitle);
  doc.setTextColor(...ATH_COLORS.white);
  doc.text('6. Contatti e Informazioni', PAGE.marginLeft + 5, 43);
  
  doc.setTextColor(...ATH_COLORS.black);
  let yPosition = 60;
  
  // Contact info box
  doc.setFillColor(...ATH_COLORS.lightGray);
  doc.roundedRect(PAGE.marginLeft, yPosition, PAGE.contentWidth, 50, 3, 3, 'F');
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(...ATH_COLORS.clay);
  doc.text('ATH - Advanced Tennis Hub', PAGE.marginLeft + 10, yPosition + 12);
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(FONTS.body);
  doc.setTextColor(...ATH_COLORS.black);
  doc.text('Via F. Turati, 9', PAGE.marginLeft + 10, yPosition + 22);
  doc.text('20121 Milano MI, Italia', PAGE.marginLeft + 10, yPosition + 30);
  doc.text('Email: info@ath.tennis', PAGE.marginLeft + 10, yPosition + 38);
  doc.text('Tel: +39 02 1234567', PAGE.marginLeft + 10, yPosition + 46);
  
  yPosition += 65;
  
  // Orari
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(...ATH_COLORS.clay);
  doc.text('Orari di Apertura', PAGE.marginLeft, yPosition);
  yPosition += 10;
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(FONTS.body);
  doc.setTextColor(...ATH_COLORS.black);
  
  const orari = [
    ['Lunedì - Venerdì', '7:00 - 23:00'],
    ['Sabato', '9:00 - 20:00'],
    ['Domenica', '9:00 - 18:00'],
  ];
  
  orari.forEach(([giorno, orario]) => {
    doc.text(giorno, PAGE.marginLeft, yPosition);
    doc.text(orario, PAGE.marginLeft + 60, yPosition);
    yPosition += 7;
  });
  
  yPosition += 10;
  
  // Strutture
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(...ATH_COLORS.clay);
  doc.text('Le Nostre Strutture', PAGE.marginLeft, yPosition);
  yPosition += 10;
  
  const facilities = [
    '4 Campi da Tennis in terra rossa (1 ATP standard)',
    '2 Campi da Tennis in resina (ITF 2)',
    '2 Campi da Padel indoor',
    '1 Campo da Pickleball',
    '1 Campo da TouchTennis',
    'Palestra attrezzata con macchinari specifici',
    'Area riabilitativa e fisioterapia',
    'Spogliatoi con sauna',
    'Bar e area ristoro',
  ];
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(FONTS.body);
  doc.setTextColor(...ATH_COLORS.black);
  
  facilities.forEach((facility) => {
    doc.setFillColor(...ATH_COLORS.clay);
    doc.circle(PAGE.marginLeft + 3, yPosition - 1.5, 1.5, 'F');
    doc.text(facility, PAGE.marginLeft + 10, yPosition);
    yPosition += 7;
  });
};
