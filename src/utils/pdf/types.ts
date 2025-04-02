
import { jsPDF } from 'jspdf';

// Define the interface for autoTable options
export interface AutoTableOptions {
  startY?: number;
  head?: any[][];
  body?: any[][];
  theme?: string;
  headStyles?: any;
  columnStyles?: any;
  margin?: any;
  [key: string]: any;
}

// Extend the jsPDF interface with autoTable method without redefining internal
declare module 'jspdf' {
  interface jsPDF {
    autoTable: (options: AutoTableOptions) => {
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
