import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { toast } from 'sonner';
import RevealAnimation from '@/components/RevealAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

const DownloadContentSection = () => {
  const { t } = useLanguage();

  const downloadContent = () => {
    const content = `# Advanced Tennis Hub (ATH) - Contenuto Completo del Sito

## Le Sfide del Tennis Moderno e la Rivoluzione ATH

### Le Sfide Attuali nel Tennis
Il tennis contemporaneo presenta numerose sfide strutturali che limitano il potenziale sviluppo degli atleti a tutti i livelli. Queste criticità impattano significativamente sulla qualità della formazione e sulle prospettive di crescita dei giocatori.

### Barriere nell'Accesso alle Competenze
L'accesso a programmi di coaching di alto livello rimane un privilegio per pochi. I coach di elevata professionalità possono seguire solo un numero limitato di atleti, creando inevitabili disparità nell'accesso a una formazione di qualità. Questa limitazione strutturale impedisce a molti talenti di ricevere la guida necessaria per sviluppare appieno il proprio potenziale.

### Problematiche nella Continuità Formativa
La necessità di utilizzare coach sostitutivi comporta spesso discontinuità nell'approccio formativo. Anche all'interno dello stesso centro sportivo, si possono riscontrare significative variazioni nella metodologia e nella qualità dell'insegnamento, compromettendo la coerenza del percorso di sviluppo dell'atleta.

### Carenze nella Preparazione Integrata
Molti programmi tennistici falliscono nell'integrare efficacemente le diverse componenti essenziali:
- Sviluppo tecnico
- Preparazione fisica
- Allenamento mentale
- Strategia tattica

Questa frammentazione impedisce un approccio olistico alla formazione del tennista.

### Limitazioni nel Monitoraggio e Analisi
Anche i coach più dedicati incontrano difficoltà oggettive nel:
- Monitorare costantemente le performance degli atleti
- Comunicare efficacemente con gli altri professionisti del team
- Mantenere una documentazione dettagliata dei progressi
- Garantire una valutazione precisa e continua delle prestazioni

### Deficit di Personalizzazione
L'utilizzo diffuso di approcci standardizzati, combinato con la limitata disponibilità di coach esperti, compromette la possibilità di personalizzare adeguatamente i programmi di allenamento. Questa standardizzazione forzata ignora le peculiarità individuali degli atleti, limitando la loro crescita potenziale.

## Advanced Tennis Hub (ATH): Tecnologia e Competenza Umana per l'Eccellenza Tennistica

Questo centro innovativo rappresenta la prima struttura tennistica costruita appositamente per ottimizzare l'utilizzo del metodo ATH, integrando tecnologia avanzata e competenza umana. ATH ridefinisce l'eccellenza nel tennis, ottimizzando le performance di tutti, dai principianti ai professionisti.

---

*Questo documento contiene il contenuto completo del sito ATH (Advanced Tennis Hub).*`;

    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'contenuto_completo_ATH.md';
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
