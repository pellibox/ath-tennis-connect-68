
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

// Extend the global jsPDF interface with autoTable method
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
      margin?: any;
      [key: string]: any;
    }) => {
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

// Add the Benefit interface to be used by ProgramWhyChoose
export interface Benefit {
  title: string;
  description: string;
}
