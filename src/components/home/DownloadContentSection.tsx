import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { toast } from 'sonner';
import RevealAnimation from '@/components/RevealAnimation';
import { useLanguage } from '@/contexts/LanguageContext';
import { generateFullSiteContent } from '@/utils/siteContentGenerator';

const DownloadContentSection = () => {
  const { t } = useLanguage();

  const downloadContent = () => {
    const content = generateFullSiteContent();

    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `contenuto_completo_ATH_${new Date().toISOString().split('T')[0]}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    toast.success(t('home.download.success'));
  };

  return (
    <section className="py-16 px-6 lg:px-10 bg-gradient-to-br from-ath-clay/5 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <RevealAnimation>
          <h2 className="text-3xl md:text-4xl font-swiss mb-6">
            {t('home.download.title')}
          </h2>
        </RevealAnimation>
        
        <RevealAnimation delay={100}>
          <p className="text-lg mb-8 font-swiss text-gray-700">
            {t('home.download.description')}
          </p>
        </RevealAnimation>
        
        <RevealAnimation delay={200}>
          <Button 
            onClick={downloadContent}
            className="bg-ath-clay hover:bg-ath-clay/90 text-white font-swiss text-lg px-8 py-3 h-auto"
          >
            <Download className="mr-2 h-5 w-5" />
            {t('home.download.button')}
          </Button>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default DownloadContentSection;
