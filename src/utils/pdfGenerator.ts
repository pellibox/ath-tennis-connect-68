import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { programCategories } from '@/data/programs';
import { programCategories as padelCategories } from '@/data/padel';
import { programCategories as pickleballCategories } from '@/data/pickleball';
import { touchTennisCategories } from '@/data/touchtennis';
import { formatCurrency } from '@/utils/formatUtils';
import { toast } from 'sonner';

// Extended interface for jsPDF with autotable
// Use proper TypeScript interface merging
declare module 'jspdf' {
  interface jsPDF {
    autoTable: (options: any) => jsPDF & { 
      previous: {
        finalY: number;
      }
    };
  }
}

// Add the internal interface with getNumberOfPages
interface JsPDFInternal {
  events: any;
  scaleFactor: number;
  pageSize: {
    width: number;
    getWidth: () => number;
    height: number;
    getHeight: () => number;
  };
  pages: number[];
  getNumberOfPages: () => number;
  getEncryptor(objectId: number): (data: string) => string;
}

// Extend the jsPDF typings
declare global {
  interface jsPDF {
    internal: JsPDFInternal;
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
    
    // Add ATH logo - Use correct path from lovable-uploads
    const logoImg = new Image();
    // Use a logo from lovable-uploads directory
    logoImg.src = '/lovable-uploads/0a250ed5-11e7-485c-a8f5-d41ebaa7083f.png';
    
    await new Promise<void>((resolve) => {
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
    
    let yPosition = 120;
    
    // Table of Contents
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
    
    yPosition += (tocItems.length * 7) + 10;
    
    // Add page break
    doc.addPage();
    yPosition = 20;
    
    // SECTION 1: Tennis Programs
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('1. Programmi Tennis', 20, yPosition);
    yPosition += 15;
    
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
        
        // Add VICKI info if applicable
        if (program.vickiMonitoringLevel || program.vickiPowered || program.vickiOnRequest || program.vickiCustomBadge) {
          if (yPosition > doc.internal.pageSize.height - 20) {
            doc.addPage();
            yPosition = 20;
          }
          
          doc.setFontSize(9);
          doc.setFont('helvetica', 'italic');
          
          if (program.vickiPowered) {
            doc.text('Questo programma utilizza la tecnologia VICKI™ per l\'analisi avanzata.', 30, yPosition);
            yPosition += 5;
          }
          
          if (program.vickiMonitoringLevel) {
            doc.text(`Livello di monitoraggio VICKI™: ${program.vickiMonitoringLevel.toUpperCase()}`, 30, yPosition);
            yPosition += 5;
          }
          
          if (program.vickiOnRequest) {
            doc.text('Tecnologia VICKI™ disponibile su richiesta.', 30, yPosition);
            yPosition += 5;
          }
          
          if (program.vickiCustomBadge) {
            doc.text(`Badge VICKI™: ${program.vickiCustomBadge}`, 30, yPosition);
            yPosition += 5;
          }
        }
        
        yPosition += 8;
      }
      
      yPosition += 10;
    }
    
    // SECTION 2: Padel Programs
    doc.addPage();
    yPosition = 20;
    
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('2. Programmi Padel', 20, yPosition);
    yPosition += 15;
    
    // Padel Programs
    for (const category of padelCategories) {
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
        
        // Add VICKI info if applicable
        if (program.vickiMonitoringLevel || program.vickiPowered || program.vickiOnRequest || program.vickiCustomBadge) {
          if (yPosition > doc.internal.pageSize.height - 20) {
            doc.addPage();
            yPosition = 20;
          }
          
          doc.setFontSize(9);
          doc.setFont('helvetica', 'italic');
          
          if (program.vickiPowered) {
            doc.text('Questo programma utilizza la tecnologia VICKI™ per l\'analisi avanzata.', 30, yPosition);
            yPosition += 5;
          }
          
          if (program.vickiMonitoringLevel) {
            doc.text(`Livello di monitoraggio VICKI™: ${program.vickiMonitoringLevel.toUpperCase()}`, 30, yPosition);
            yPosition += 5;
          }
          
          if (program.vickiOnRequest) {
            doc.text('Tecnologia VICKI™ disponibile su richiesta.', 30, yPosition);
            yPosition += 5;
          }
          
          if (program.vickiCustomBadge) {
            doc.text(`Badge VICKI™: ${program.vickiCustomBadge}`, 30, yPosition);
            yPosition += 5;
          }
        }
        
        yPosition += 8;
      }
      
      yPosition += 10;
    }
    
    // SECTION 3: Pickleball Programs
    doc.addPage();
    yPosition = 20;
    
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('3. Programmi Pickleball', 20, yPosition);
    yPosition += 15;
    
    // Pickleball Programs
    for (const category of pickleballCategories) {
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
        
        // Add VICKI info if applicable
        if (program.vickiMonitoringLevel || program.vickiPowered || program.vickiOnRequest || program.vickiCustomBadge) {
          if (yPosition > doc.internal.pageSize.height - 20) {
            doc.addPage();
            yPosition = 20;
          }
          
          doc.setFontSize(9);
          doc.setFont('helvetica', 'italic');
          
          if (program.vickiPowered) {
            doc.text('Questo programma utilizza la tecnologia VICKI™ per l\'analisi avanzata.', 30, yPosition);
            yPosition += 5;
          }
          
          if (program.vickiMonitoringLevel) {
            doc.text(`Livello di monitoraggio VICKI™: ${program.vickiMonitoringLevel.toUpperCase()}`, 30, yPosition);
            yPosition += 5;
          }
          
          if (program.vickiOnRequest) {
            doc.text('Tecnologia VICKI™ disponibile su richiesta.', 30, yPosition);
            yPosition += 5;
          }
          
          if (program.vickiCustomBadge) {
            doc.text(`Badge VICKI™: ${program.vickiCustomBadge}`, 30, yPosition);
            yPosition += 5;
          }
        }
        
        yPosition += 8;
      }
      
      yPosition += 10;
    }
    
    // SECTION 4: TouchTennis programs
    doc.addPage();
    yPosition = 20;
    
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('4. Programmi TouchTennis', 20, yPosition);
    yPosition += 15;
    
    // TouchTennis Programs
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
        
        // Add VICKI info if applicable
        if (program.vickiMonitoringLevel || program.vickiPowered || program.vickiOnRequest || program.vickiCustomBadge) {
          if (yPosition > doc.internal.pageSize.height - 20) {
            doc.addPage();
            yPosition = 20;
          }
          
          doc.setFontSize(9);
          doc.setFont('helvetica', 'italic');
          
          if (program.vickiPowered) {
            doc.text('Questo programma utilizza la tecnologia VICKI™ per l\'analisi avanzata.', 30, yPosition);
            yPosition += 5;
          }
          
          if (program.vickiMonitoringLevel) {
            doc.text(`Livello di monitoraggio VICKI™: ${program.vickiMonitoringLevel.toUpperCase()}`, 30, yPosition);
            yPosition += 5;
          }
          
          if (program.vickiOnRequest) {
            doc.text('Tecnologia VICKI™ disponibile su richiesta.', 30, yPosition);
            yPosition += 5;
          }
          
          if (program.vickiCustomBadge) {
            doc.text(`Badge VICKI™: ${program.vickiCustomBadge}`, 30, yPosition);
            yPosition += 5;
          }
        }
        
        yPosition += 8;
      }
      
      yPosition += 10;
    }
    
    // SECTION 5: Pricing Tables
    doc.addPage();
    yPosition = 20;
    
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('5. Tariffe e Prezzi', 20, yPosition);
    yPosition += 15;
    
    // Tennis Programs Pricing
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Prezzi Programmi Tennis', 20, yPosition);
    yPosition += 10;
    
    try {
      // Add pricing tables with proper error handling
      const tennisTable = doc.autoTable({
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
      
      yPosition = tennisTable.previous.finalY + 15;
    } catch (error) {
      console.error('Error creating pricing table:', error);
      // Add fallback text if table fails
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.text('Per informazioni sui prezzi, contattare direttamente il nostro staff.', 20, yPosition + 10);
      yPosition += 20;
    }
    
    if (yPosition > doc.internal.pageSize.height - 60) {
      doc.addPage();
      yPosition = 20;
    }
    
    // Padel Programs Pricing
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Prezzi Programmi Padel', 20, yPosition);
    yPosition += 10;
    
    try {
      const padelTable = doc.autoTable({
        startY: yPosition,
        head: [['Programma', 'Durata', 'Prezzo']],
        body: [
          ['Padel Avanzato', '30 settimane', '€ 1.200'],
          ['Padel Intermedio', '30 settimane', '€ 900'],
          ['Padel Principianti', '30 settimane', '€ 700'],
          ['Padel Coaching Privato', 'Sessione', '€ 90']
        ],
        theme: 'grid',
        headStyles: { fillColor: [150, 150, 150], textColor: [255, 255, 255] },
        columnStyles: {
          0: { cellWidth: 70 },
          1: { cellWidth: 50 },
          2: { cellWidth: 50 }
        }
      });
      
      yPosition = padelTable.previous.finalY + 15;
    } catch (error) {
      console.error('Error creating padel pricing table:', error);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.text('Per informazioni sui prezzi dei programmi Padel, contattare direttamente il nostro staff.', 20, yPosition + 10);
      yPosition += 20;
    }
    
    if (yPosition > doc.internal.pageSize.height - 60) {
      doc.addPage();
      yPosition = 20;
    }
    
    // Pickleball Programs Pricing
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Prezzi Programmi Pickleball', 20, yPosition);
    yPosition += 10;
    
    try {
      const pickleballTable = doc.autoTable({
        startY: yPosition,
        head: [['Programma', 'Durata', 'Prezzo']],
        body: [
          ['Pickleball Avanzato', '30 settimane', '€ 1.000'],
          ['Pickleball Intermedio', '30 settimane', '€ 800'],
          ['Pickleball Principianti', '30 settimane', '€ 600'],
          ['Pickleball Clinics', 'Sessione (2h)', '€ 60']
        ],
        theme: 'grid',
        headStyles: { fillColor: [150, 150, 150], textColor: [255, 255, 255] },
        columnStyles: {
          0: { cellWidth: 70 },
          1: { cellWidth: 50 },
          2: { cellWidth: 50 }
        }
      });
      
      yPosition = pickleballTable.previous.finalY + 15;
    } catch (error) {
      console.error('Error creating pickleball pricing table:', error);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.text('Per informazioni sui prezzi dei programmi Pickleball, contattare direttamente il nostro staff.', 20, yPosition + 10);
      yPosition += 20;
    }
    
    if (yPosition > doc.internal.pageSize.height - 60) {
      doc.addPage();
      yPosition = 20;
    }
    
    // TouchTennis Programs Pricing
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Prezzi Programmi TouchTennis', 20, yPosition);
    yPosition += 10;
    
    try {
      const touchTennisTable = doc.autoTable({
        startY: yPosition,
        head: [['Programma', 'Durata', 'Prezzo']],
        body: [
          ['TouchTennis Avanzato', '30 settimane', '€ 900'],
          ['TouchTennis Base', '30 settimane', '€ 600'],
          ['TouchTennis Junior (8-14 anni)', '30 settimane', '€ 500']
        ],
        theme: 'grid',
        headStyles: { fillColor: [150, 150, 150], textColor: [255, 255, 255] },
        columnStyles: {
          0: { cellWidth: 70 },
          1: { cellWidth: 50 },
          2: { cellWidth: 50 }
        }
      });
      
      yPosition = touchTennisTable.previous.finalY + 15;
    } catch (error) {
      console.error('Error creating touchtennis pricing table:', error);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.text('Per informazioni sui prezzi dei programmi TouchTennis, contattare direttamente il nostro staff.', 20, yPosition + 10);
      yPosition += 20;
    }
    
    if (yPosition > doc.internal.pageSize.height - 60) {
      doc.addPage();
      yPosition = 20;
    }
    
    // Multi-sport programs
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Programmi Multi-Sport', 20, yPosition);
    yPosition += 10;
    
    try {
      const multiSportTable = doc.autoTable({
        startY: yPosition,
        head: [['Programma', 'Durata', 'Prezzo']],
        body: [
          ['Camp Multi-Sport con Racchetta', '5 giorni', '€ 350'],
          ['Camp Multi-Sport con Racchetta', '3 giorni', '€ 220']
        ],
        theme: 'grid',
        headStyles: { fillColor: [150, 150, 150], textColor: [255, 255, 255] },
        columnStyles: {
          0: { cellWidth: 70 },
          1: { cellWidth: 50 },
          2: { cellWidth: 50 }
        }
      });
      
      // Additional notes on pricing
      yPosition = multiSportTable.previous.finalY + 15;
    } catch (error) {
      console.error('Error creating multi-sport pricing table:', error);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.text('Per informazioni sui prezzi dei programmi Multi-Sport, contattare direttamente il nostro staff.', 20, yPosition + 10);
      yPosition += 20;
    }
    
    if (yPosition > doc.internal.pageSize.height - 40) {
      doc.addPage();
      yPosition = 20;
    }
    
    // Additional notes on pricing
    doc.setFontSize(11);
    doc.setFont('helvetica', 'italic');
    const pricingNotes = [
      '* I prezzi possono subire variazioni. Contattare la reception per confermare.',
      '* Sono disponibili sconti per iscrizioni multiple e pacchetti famiglia.',
      '* La tecnologia VICKI™ può comportare costi aggiuntivi quando richiesta separatamente.',
      '* Tutti i programmi includono l\'accesso alle strutture durante le ore di lezione.'
    ];
    
    for (let i = 0; i < pricingNotes.length; i++) {
      doc.text(pricingNotes[i], 20, yPosition + (i * 7));
    }
    
    // SECTION 6: Contact information
    doc.addPage();
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('6. Contatti e Orari', 20, 20);
    
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
    
    // Strutture disponibili
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Strutture Disponibili', 20, 115);
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    const facilities = [
      '• 4 Campi da Tennis in terra rossa di cui uno atp standard, 2 campi da Tennis in resina (ITF 2) (4 indoor, 2 outdoor)',
      '• 2 Campi da Padel indoor',
      '• 1 Campi da Pickleball',
      '• 1 Campi da TouchTennis',
      '• Palestra attrezzata',
      '• Area riabilitativa',
      '• Spogliatoi con sauna',
      '• Bar e ristorante',
      '• Area relax'
    ];
    
    for (let i = 0; i < facilities.length; i++) {
      doc.text(facilities[i], 20, 125 + (i * 7));
    }
    
    try {
      // Fix for getNumberOfPages - Use the properly typed function
      const pageCount = doc.internal.getNumberOfPages();
      
      // Add page numbers to each page
      for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.text(`Pagina ${i} di ${pageCount}`, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - 10, { align: 'center' });
      }
      
      // Save the PDF
      doc.save('ATH_Tennis_Hub_Brochure.pdf');
      return true;
    } catch (error) {
      console.error('Error adding page numbers to PDF:', error);
      // Save anyway
      doc.save('ATH_Tennis_Hub_Brochure.pdf');
      return true;
    }
    
  } catch (error) {
    console.error('Error generating PDF brochure:', error);
    toast.error('Si è verificato un errore nella generazione della brochure.');
    return false;
  }
};

// Public function for downloading the brochure
export const downloadSiteBrochure = async (options: PdfOptions = {}) => {
  return await generateSiteBrochure(options);
};
