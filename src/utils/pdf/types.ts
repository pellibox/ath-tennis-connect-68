
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

// Properly extend the global jsPDF interface
declare global {
  interface jsPDF {
    internal: JsPDFInternal;
  }
}

// Extend jsPDF with autoTable - properly define the return type
declare module 'jspdf' {
  interface jsPDF {
    autoTable: (options: any) => jsPDF & { 
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
