import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, FileText, File } from 'lucide-react';
import { toast } from 'sonner';
import RevealAnimation from '@/components/RevealAnimation';
import { useLanguage } from '@/contexts/LanguageContext';
import { generateFullSiteContent } from '@/utils/siteContentGenerator';
import { downloadSiteBrochure } from '@/utils/pdf/index';

const DownloadContentSection = () => {
  const { t } = useLanguage();
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  const downloadMarkdown = () => {
    const content = generateFullSiteContent();
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `ATH_Contenuto_${new Date().toISOString().split('T')[0]}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast.success('File Markdown scaricato!');
  };

  const downloadPdf = async () => {
    try {
      setIsGeneratingPdf(true);
      toast.info('Generazione PDF in corso...');
      await downloadSiteBrochure({ language: 'it' });
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast.error('Errore durante la generazione del PDF');
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  return (
    <section className="py-16 px-6 lg:px-10 bg-gradient-to-br from-ath-clay/5 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <RevealAnimation>
          <h2 className="text-3xl md:text-4xl font-swiss mb-6">
            Scarica i Contenuti ATH
          </h2>
        </RevealAnimation>
        
        <RevealAnimation delay={100}>
          <p className="text-lg mb-8 font-swiss text-gray-700">
            Scarica tutte le informazioni su programmi, servizi e prezzi nel formato che preferisci.
          </p>
        </RevealAnimation>
        
        <RevealAnimation delay={200}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={downloadPdf}
              disabled={isGeneratingPdf}
              className="bg-ath-clay hover:bg-ath-clay/90 text-white font-swiss text-lg px-8 py-3 h-auto"
            >
              {isGeneratingPdf ? (
                <span className="animate-pulse">Generazione...</span>
              ) : (
                <>
                  <FileText className="mr-2 h-5 w-5" />
                  Scarica PDF
                </>
              )}
            </Button>
            
            <Button 
              onClick={downloadMarkdown}
              variant="outline"
              className="border-ath-clay text-ath-clay hover:bg-ath-clay hover:text-white font-swiss text-lg px-8 py-3 h-auto"
            >
              <File className="mr-2 h-5 w-5" />
              Scarica Markdown
            </Button>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default DownloadContentSection;
