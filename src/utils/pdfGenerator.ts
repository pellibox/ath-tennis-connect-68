
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { programCategories } from '@/data/programs';
import { touchTennisCategories } from '@/data/touchtennis';
import { formatCurrency } from '@/utils/formatUtils';

// Extended interface for jsPDF with autotable
// The correct way is to augment the module without redefining properties
declare module 'jspdf' {
  interface jsPDF {
    autoTable: (options: any) => jsPDF;
    internal: {
      events: any;
      scaleFactor: number;
      pageSize: {
        width: number;
        getWidth: () => number;
        height: number;
        getHeight: () => number;
      };
      pages: number[];
      getNumberOfPages(): number;
      getEncryptor(objectId: number): (data: string) => string;
    };
  }
}

interface PdfOptions {
  language?: string;
}

export const generateSiteBrochure = async (options: PdfOptions = {}) => {
  try {
    // Create PDF document (A4 portrait)
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });
    
    // Set default language
    const language = options.language || 'it';
    
    // Add ATH logo
    const logoImg = new Image();
    logoImg.src = '/img/ath-logo-black.png';
    
    await new Promise<void>((resolve, reject) => {
      logoImg.onload = () => {
        try {
          // Calculate aspect ratio to fit width
          const imgWidth = 50;
          const imgHeight = (logoImg.height * imgWidth) / logoImg.width;
          
          // Center logo
          const pageWidth = doc.internal.pageSize.width;
          doc.addImage(logoImg, 'PNG', (pageWidth - imgWidth) / 2, 10, imgWidth, imgHeight);
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
        resolve(); // Continue after timeout
      }, 3000);
    });
    
    // Title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.text('ATH Tennis Hub', doc.internal.pageSize.width / 2, 45, { align: 'center' });
    
    // Subtitle
    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    doc.text('Brochure Informativa', doc.internal.pageSize.width / 2, 53, { align: 'center' });
    
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
    
    let yPosition = 120;
    
    // Programs overview
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('I Nostri Programmi', 20, yPosition);
    yPosition += 10;
    
    // Tennis Programs
    for (const category of programCategories) {
      if (yPosition > doc.internal.pageSize.height - 30) {
        doc.addPage();
        yPosition = 20;
      }
      
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text(category.title, 20, yPosition);
      yPosition += 8;
      
      for (const program of category.programs) {
        if (yPosition > doc.internal.pageSize.height - 40) {
          doc.addPage();
          yPosition = 20;
        }
        
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text(program.title, 25, yPosition);
        yPosition += 6;
        
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        const programDesc = doc.splitTextToSize(program.description, doc.internal.pageSize.width - 50);
        doc.text(programDesc, 25, yPosition);
        yPosition += (programDesc.length * 5) + 2;
        
        if (program.features && program.features.length > 0) {
          for (const feature of program.features) {
            if (yPosition > doc.internal.pageSize.height - 20) {
              doc.addPage();
              yPosition = 20;
            }
            const featureText = doc.splitTextToSize(`• ${feature}`, doc.internal.pageSize.width - 55);
            doc.text(featureText, 30, yPosition);
            yPosition += (featureText.length * 5);
          }
          yPosition += 5;
        }
      }
      
      yPosition += 10;
    }
    
    // Add TouchTennis programs
    if (touchTennisCategories && touchTennisCategories.length > 0) {
      doc.addPage();
      yPosition = 20;
      
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('Programmi TouchTennis', 20, yPosition);
      yPosition += 10;
      
      for (const category of touchTennisCategories) {
        if (yPosition > doc.internal.pageSize.height - 30) {
          doc.addPage();
          yPosition = 20;
        }
        
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text(category.title, 20, yPosition);
        yPosition += 8;
        
        for (const program of category.programs) {
          if (yPosition > doc.internal.pageSize.height - 40) {
            doc.addPage();
            yPosition = 20;
          }
          
          doc.setFontSize(12);
          doc.setFont('helvetica', 'bold');
          doc.text(program.title, 25, yPosition);
          yPosition += 6;
          
          doc.setFontSize(10);
          doc.setFont('helvetica', 'normal');
          const programDesc = doc.splitTextToSize(program.description, doc.internal.pageSize.width - 50);
          doc.text(programDesc, 25, yPosition);
          yPosition += (programDesc.length * 5) + 2;
          
          if (program.features && program.features.length > 0) {
            for (const feature of program.features) {
              if (yPosition > doc.internal.pageSize.height - 20) {
                doc.addPage();
                yPosition = 20;
              }
              const featureText = doc.splitTextToSize(`• ${feature}`, doc.internal.pageSize.width - 55);
              doc.text(featureText, 30, yPosition);
              yPosition += (featureText.length * 5);
            }
            yPosition += 5;
          }
        }
        
        yPosition += 10;
      }
    }
    
    // Add pricing page
    doc.addPage();
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Tariffe e Prezzi', 20, 20);
    
    // Add pricing tables as needed
    // Example pricing table
    doc.autoTable({
      startY: 30,
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
      ],
      theme: 'grid',
      headStyles: { fillColor: [150, 150, 150], textColor: [255, 255, 255] },
      columnStyles: {
        0: { cellWidth: 70 },
        1: { cellWidth: 50 },
        2: { cellWidth: 50 }
      }
    });
    
    // Contact information
    doc.addPage();
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Contatti', 20, 20);
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text('ATH Tennis Hub', 20, 35);
    doc.text('Via F. Turati, 9', 20, 42);
    doc.text('20090 Rodano MI, Italia', 20, 49);
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
    
    // Add page number to each page
    const totalPages = doc.internal.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.text(`Pagina ${i} di ${totalPages}`, doc.internal.pageSize.width - 30, doc.internal.pageSize.height - 10);
    }
    
    // Add generation date
    const today = new Date();
    const dateString = today.toLocaleDateString(language === 'en' ? 'en-US' : 'it-IT');
    doc.setPage(1);
    doc.setFontSize(10);
    doc.text(`Generato il: ${dateString}`, 20, doc.internal.pageSize.height - 10);
    
    // Return the generated PDF as a blob
    return doc.output('blob');
    
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw new Error('Failed to generate PDF brochure');
  }
};

// Function to trigger PDF download
export const downloadSiteBrochure = async (options: PdfOptions = {}) => {
  try {
    const pdfBlob = await generateSiteBrochure(options);
    const pdfUrl = URL.createObjectURL(pdfBlob);
    
    // Create temporary link to trigger download
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'ATH_Tennis_Hub_Brochure.pdf';
    link.click();
    
    // Clean up
    URL.revokeObjectURL(pdfUrl);
  } catch (error) {
    console.error('Error downloading PDF:', error);
    throw error;
  }
};
