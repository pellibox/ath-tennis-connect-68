
import { jsPDF } from 'jspdf';

// Define the internal interface for jsPDF
export interface JsPDFInternal {
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

// Properly extend the global jsPDF interface with more specific typing
declare global {
  interface jsPDF {
    internal: JsPDFInternal;
    autoTable: (options: {
      startY?: number;
      head?: any[][];
      body?: any[][];
      theme?: string;
      headStyles?: any;
      columnStyles?: any;
      [key: string]: any;
    }) => jsPDF & { 
      previous: {
        finalY: number;
      }
    };
  }
}

export interface PdfOptions {
  language?: string;
}

export interface ProgramInfo {
  id: string;
  title: string;
  description: string;
  features?: string[];
  vickiMonitoringLevel?: string;
  vickiPowered?: boolean;
  vickiOnRequest?: boolean;
  vickiCustomBadge?: string;
}

export interface PriceTableData {
  head: string[][];
  body: string[][];
}
