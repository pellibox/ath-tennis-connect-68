import { jsPDF } from 'jspdf';
import { centerX } from './layout';

/**
 * Add logo to the PDF cover page
 */
export const addLogo = async (doc: jsPDF): Promise<void> => {
  console.log('Adding logo to PDF...');
  
  const logoImg = new Image();
  logoImg.src = '/lovable-uploads/0a250ed5-11e7-485c-a8f5-d41ebaa7083f.png';
  
  return new Promise<void>((resolve, reject) => {
    logoImg.onload = () => {
      try {
        // Calculate aspect ratio to fit width
        const imgWidth = 50;
        const imgHeight = (logoImg.height * imgWidth) / logoImg.width;
        
        // Center logo
        const xPosition = centerX(doc, imgWidth);
        doc.addImage(logoImg, 'PNG', xPosition, 10, imgWidth, imgHeight);
        console.log('Logo added successfully');
        resolve();
      } catch (error) {
        console.error('Error adding logo to PDF:', error);
        resolve(); // Continue even if the logo fails
      }
    };
    
    logoImg.onerror = () => {
      console.error('Error loading logo for PDF');
      resolve(); // Continue without the logo
    };
    
    // Set a timeout to prevent hanging
    setTimeout(() => {
      console.warn('Logo loading timed out');
      resolve(); // Continue after timeout
    }, 5000);
  });
};

/**
 * Create the cover page for the brochure
 */
export const createCoverPage = async (doc: jsPDF): Promise<number> => {
  // Add logo
  await addLogo(doc);
  
  // Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.text('ATH Tennis Hub', doc.internal.pageSize.width / 2, 45, { align: 'center' });
  
  // Subtitle
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text('Brochure Informativa Completa', doc.internal.pageSize.width / 2, 53, { align: 'center' });
  
  // Add divider
  doc.setDrawColor(150, 150, 150);
  doc.setLineWidth(0.5);
  doc.line(20, 60, doc.internal.pageSize.width - 20, 60);
  
  // Introduction section
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('ATH: Advanced Tennis Hub', 20, 70);
  
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  const introText = 'ATH è un centro di eccellenza per il tennis che integra tecnologia avanzata e competenza umana. Il metodo ATH combina analisi dei dati con coaching personalizzato per ottimizzare le performance di ogni atleta, dai principianti ai professionisti.';
  const splitIntro = doc.splitTextToSize(introText, doc.internal.pageSize.width - 40);
  doc.text(splitIntro, 20, 78);
  
  // Add Vicki introduction
  doc.setFont('helvetica', 'bold');
  doc.text('Tecnologia VICKI™', 20, 95);
  doc.setFont('helvetica', 'normal');
  const vickiText = 'Visual Intelligent Coaching for Knowledge Insights: Un sistema sofisticato che monitora oltre 70 parametri della performance tennistica, fornendo analisi in tempo reale e feedback personalizzato.';
  const splitVicki = doc.splitTextToSize(vickiText, doc.internal.pageSize.width - 40);
  doc.text(splitVicki, 20, 103);
  
  // Add table of contents
  let yPosition = 120;
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Indice dei Contenuti', doc.internal.pageSize.width / 2, yPosition, { align: 'center' });
  yPosition += 10;
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  const tocItems = [
    '1. Programmi Tennis',
    '2. Programmi Padel',
    '3. Programmi Pickleball',
    '4. Programmi TouchTennis',
    '5. Tariffe e Prezzi',
    '6. Contatti e Orari'
  ];
  
  tocItems.forEach((item, index) => {
    doc.text(item, doc.internal.pageSize.width / 2, yPosition + (index * 7), { align: 'center' });
  });
  
  return yPosition + (tocItems.length * 7) + 10;
};

/**
 * Create contact information page
 */
export const createContactPage = (doc: jsPDF): void => {
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('6. Contatti e Orari', 20, 20);
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text('ATH Tennis Hub', 20, 35);
  doc.text('Via F. Turati, 9', 20, 42);
  doc.text('Milano MI, Italia', 20, 49);
  doc.text('Email: info@ath.tennis', 20, 56);
  doc.text('Tel: +39 02 1234567', 20, 63);
  
  // Orari
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Orari', 20, 75);
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text('Lunedì - Venerdì: 7:00 - 23:00', 20, 85);
  doc.text('Sabato: 9:00 - 20:00', 20, 92);
  doc.text('Domenica: 9:00 - 18:00', 20, 99);
  
  // Strutture disponibili
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Strutture Disponibili', 20, 115);
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  const facilities = [
    '• 4 Campi da Tennis in terra rossa di cui uno ATP standard, 2 campi da Tennis in resina (ITF 2) (4 indoor, 2 outdoor)',
    '• 2 Campi da Padel indoor',
    '• 1 Campo da Pickleball',
    '• 1 Campo da TouchTennis',
    '• Palestra attrezzata',
    '• Area riabilitativa',
    '• Spogliatoi con sauna',
    '• Bar e ristorante',
    '• Area relax'
  ];
  
  for (let i = 0; i < facilities.length; i++) {
    doc.text(facilities[i], 20, 125 + (i * 7));
  }
};
