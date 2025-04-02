
import { useState } from 'react';
import { Download } from 'lucide-react';
import { downloadSiteBrochure } from '@/utils/pdfGenerator';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface PdfBrochureButtonProps {
  className?: string;
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const PdfBrochureButton = ({
  className = '',
  variant = 'default',
  size = 'default'
}: PdfBrochureButtonProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const { language, t } = useLanguage();
  
  const handleDownload = async () => {
    try {
      setIsGenerating(true);
      toast.info("Generazione brochure in corso...");
      
      console.log("Starting brochure download with language:", language);
      await downloadSiteBrochure({ language });
      
      toast.success("Brochure scaricata con successo!");
    } catch (error) {
      console.error('Error downloading brochure:', error);
      toast.error("Errore durante la generazione della brochure. Riprova più tardi.");
    } finally {
      setIsGenerating(false);
    }
  };
  
  return (
    <Button 
      onClick={handleDownload}
      disabled={isGenerating}
      className={className}
      variant={variant}
      size={size}
    >
      {isGenerating ? (
        <>
          <span className="animate-pulse mr-2">{t('brochure.generating') || 'Generazione...'}</span>
        </>
      ) : (
        <>
          <Download className="w-4 h-4 mr-2" />
          {t('brochure.download') || 'Scarica Brochure Informativa'}
        </>
      )}
    </Button>
  );
};

export default PdfBrochureButton;
