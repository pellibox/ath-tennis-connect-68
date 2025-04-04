
import React, { useEffect, useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Separator } from '@/components/ui/separator';
import { programCategories } from '@/data/programs/categories';
import { Program } from '@/data/programs/types';
import { padelPrograms } from '@/data/padel/padelPrograms';
import { pickleballPrograms } from '@/data/pickleball/pickleballPrograms';
import { touchTennisPrograms } from '@/data/touchtennis/touchTennisPrograms';
import { toast } from 'sonner';

const KnowledgeBase = () => {
  const { t } = useLanguage();
  const [copySuccess, setCopySuccess] = useState(false);
  const [activeTab, setActiveTab] = useState('tennis');

  // Function to extract all program information
  const getAllPrograms = () => {
    // Tennis programs from categories
    const tennisPrograms = programCategories.flatMap(category => 
      category.programs.map(program => ({
        ...program,
        category: category.title,
        sport: 'tennis'
      }))
    );

    // Padel programs
    const padelData = padelPrograms.map(program => ({
      ...program,
      category: 'Padel',
      sport: 'padel'
    }));

    // Pickleball programs
    const pickleballData = pickleballPrograms.map(program => ({
      ...program,
      category: 'Pickleball',
      sport: 'pickleball'
    }));

    // TouchTennis programs
    const touchTennisData = touchTennisPrograms.map(program => ({
      ...program,
      category: 'TouchTennis',
      sport: 'touchtennis'
    }));

    return {
      tennis: tennisPrograms,
      padel: padelData,
      pickleball: pickleballData,
      touchtennis: touchTennisData,
      all: [...tennisPrograms, ...padelData, ...pickleballData, ...touchTennisData]
    };
  };

  // Generate text content about ATH and its method
  const generateATHMethodContent = () => {
    return `
# Le Sfide del Tennis Moderno e la Rivoluzione ATH

## Le Sfide Attuali nel Tennis
Il tennis contemporaneo presenta numerose sfide strutturali che limitano il potenziale sviluppo
degli atleti a tutti i livelli. Queste criticità impattano significativamente sulla qualità della
formazione e sulle prospettive di crescita dei giocatori.

## Barriere nell'Accesso alle Competenze
L'accesso a programmi di coaching di alto livello rimane un privilegio per pochi. I coach di
elevata professionalità possono seguire solo un numero limitato di atleti, creando inevitabili
disparità nell'accesso a una formazione di qualità. Questa limitazione strutturale impedisce a
molti talenti di ricevere la guida necessaria per sviluppare appieno il proprio potenziale.

## Problematiche nella Continuità Formativa
La necessità di utilizzare coach sostitutivi comporta spesso discontinuità nell'approccio
formativo. Anche all'interno dello stesso centro sportivo, si possono riscontrare significative
variazioni nella metodologia e nella qualità dell'insegnamento, compromettendo la coerenza del
percorso di sviluppo dell'atleta.

## Carenze nella Preparazione Integrata
Molti programmi tennistici falliscono nell'integrare efficacemente le diverse componenti
essenziali:
- Sviluppo tecnico
- Preparazione fisica
- Allenamento mentale
- Strategia tattica
Questa frammentazione impedisce un approccio olistico alla formazione del tennista.

## Limitazioni nel Monitoraggio e Analisi
Anche i coach più dedicati incontrano difficoltà oggettive nel:
- Monitorare costantemente le performance degli atleti
- Comunicare efficacemente con gli altri professionisti del team
- Mantenere una documentazione dettagliata dei progressi
- Garantire una valutazione precisa e continua delle prestazioni

## Deficit di Personalizzazione
L'utilizzo diffuso di approcci standardizzati, combinato con la limitata disponibilità di coach
esperti, compromette la possibilità di personalizzare adeguatamente i programmi di
allenamento. Questa standardizzazione forzata ignora le peculiarità individuali degli atleti,
limitando la loro crescita potenziale.

# Advanced Tennis Hub (ATH): Tecnologia e Competenza Umana per l'Eccellenza Tennistica
Questo centro innovativo, situato a Rodano, rappresenta la prima struttura tennistica costruita
appositamente per ottimizzare l'utilizzo del metodo ATH, integrando tecnologia avanzata e
competenza umana. ATH ridefinisce l'eccellenza nel tennis, ottimizzando le performance di tutti,
dai principianti ai professionisti.

## L'anima tecnologica del metodo ATH
ll software e la struttura tecnologica utilizzata dal Metodo ATH è un sistema sofisticato che
monitora e analizza oltre 70 parametri specifici della performance tennistica. Durante ogni
sessione di gioco, sensori avanzati e telecamere ad alta velocità catturano ogni movimento,
colpo e decisione tattica. Questi dati vengono elaborati in tempo reale, fornendo insights
immediati che permettono aggiustamenti istantanei durante l'allenamento. Ma la vera magia
accade dopo la sessione, quando il sistema di intelligenza artificiale analizza approfonditamente
ogni aspetto della performance, identificando pattern, aree di miglioramento e opportunità di
sviluppo che potrebbero sfuggire anche all'occhio più esperto.

## L'Arte della Personalizzazione
Ciò che rende il metodo veramente unico è il modo in cui la tecnologia potenzia, senza mai
sostituire, l'expertise umana. I professionisti del centro utilizzano i dati raccolti come una
bussola per navigare il percorso di sviluppo di ogni atleta. Ogni programma di allenamento
diventa estremamente personalizzato, modellata sulle caratteristiche uniche del giocatore, sui
suoi obiettivi e sul suo stile di gioco. Il sistema di machine learning continua ad apprendere e ad
evolversi con ogni sessione, raffinando costantemente le sue analisi e i suoi suggerimenti.

## Una Rivoluzione Democratica
La vera rivoluzione di ATH sta nella sua capacità di rendere accessibile a tutti ciò che un tempo
era privilegio di pochi. Le metodologie di allenamento utilizzate dai campioni, gli strumenti di
analisi più sofisticati, il supporto di professionisti di alto livello: tutto questo diventa disponibile
per ogni atleta che varca le porte del centro. I progressi non sono più basati su sensazioni o
impressioni, ma su dati concreti e misurabili, permettendo a ogni giocatore di vedere e
comprendere la propria evoluzione in modo tangibile.

## Una Comunità Globale di Eccellenza
ATH non è solo un centro di allenamento, ma un hub globale che connette atleti, coach ed
esperti da tutto il mondo. Attraverso una piattaforma digitale integrata, i professionisti possono
collaborare, condividere esperienze e accedere a una vastissima rete di competenze. Questa
dimensione internazionale crea un ambiente dinamico e stimolante, dove l'innovazione e
l'eccellenza sono alimentate dal continuo scambio di conoscenze e best practice.

# Programmi Elite per Ogni Livello

## Giovani Agonisti (6-12 anni)
- Analisi biomeccanica costante e valutazioni tecniche, tattiche, fisiche e mentali.
- Monitoraggio della crescita fisica per prevenire sovraccarichi, con valutazioni mediche e biochimiche periodiche.
- Programmi personalizzati che crescono insieme all'atleta.
- AI dedicata a tracciare la coordinazione motoria, equilibrando crescita tecnica e divertimento.

## Junior Agonisti (13-18 anni)
- Analisi in tempo reale di ogni colpo e azione riferita a tecnica, tattica e performance mentale, con feedback continuo (diretto e post-sessione), e monitoraggio di parametri fisici, tecnici, mentali e medici.
- Database personale di partite e allenamenti per pianificare il calendario agonistico sulla base di dati statistici.
- Analisi costanti dei progressi per individuare aree di miglioramento e gestire il carico di lavoro in modo adeguato.
- Il sistema AI identifica le aree tecniche da perfezionare e previene gli infortuni.

## Professionisti
- Dati integrati e collaborazione con il tuo team, inclusi aspetti medici e biochimici.
- Analisi predittive per ottimizzare ogni dettaglio.
- Supporto tecnologico sia in sede che fuori sede.
- Allenamento personalizzato al massimo grado, con un team di esperti che coordina interventi mirati in ogni area.
- L'AI adatta le analisi e suggerisce approfondimenti su aree specifiche.

## Allenatori, Coach, Accademie e Club
- Accesso a strumenti di tracking e analisi video.
- Condivisione di best practice tra professionisti.
- Formazione continua per consolidare i metodi e migliorare la qualità dell'insegnamento.
- Piattaforma centralizzata per monitorare atleti di ogni livello, condividendo dati e report con tutto lo staff.
- Possibilità di integrare il sistema ATH nella propria struttura.
    `;
  };

  // Generate program details formatted for the knowledge base
  const generateProgramDetailsContent = (programs: (Program & { category: string, sport: string })[]) => {
    return programs.map(program => `
# ${program.title} (${program.sport})
Category: ${program.category}

${program.description}

${program.features ? `## Features\n${program.features.map(feature => `- ${feature}`).join('\n')}` : ''}

Learn more: ${window.location.origin}${program.link}
    `).join('\n\n');
  };

  // Generate structured content about VICKI technology
  const generateTechnologyContent = () => {
    return `
# VICKI Technology

VICKI (Virtual Intelligent Coach and Knowledge Interface) è un sistema di intelligenza artificiale avanzato sviluppato da ATH per ottimizzare l'allenamento tennistico.

## Core Features
- Analisi biomeccanica in tempo reale
- Monitoraggio di oltre 70 parametri tecnici, fisici e mentali
- Feedback istantaneo durante l'allenamento
- Analisi post-sessione approfondita
- Machine learning che si evolve con ogni sessione

## Livelli di Monitoraggio

### VICKI Essentials
- Monitoraggio base dei movimenti e dei colpi fondamentali
- Ideale per principianti e giovani atleti (4-10 anni)
- Focus su divertimento e apprendimento ludico

### VICKI Core
- Analisi intermedia della tecnica e dei pattern di gioco
- Adatto per giocatori amatoriali e junior in sviluppo
- Equilibrio tra semplicità e dati tecnici

### VICKI Advanced
- Monitoraggio dettagliato della biomeccanica e tattica
- Perfetto per agonisti junior (11+ anni)
- Prevenzione infortuni e ottimizzazione della tecnica

### VICKI Performance
- Analisi avanzata multi-parametrica
- Ideale per atleti di livello nazionale e personal coaching
- Sviluppo personalizzato delle competenze tecniche e tattiche

### VICKI Pro
- Sistema completo di analisi predittiva e adattiva
- Progettato per professionisti e atleti elite
- Integrazione con parametri medici e biochimici
    `;
  };

  // Generate facility information
  const generateFacilityContent = () => {
    return `
# Strutture e Facility ATH

ATH (Advanced Tennis Hub) è situato a Rodano, in provincia di Milano, in una struttura all'avanguardia progettata specificamente per massimizzare l'efficacia dell'allenamento tennistico attraverso la tecnologia.

## Campi da Tennis
- 6 campi da tennis indoor con superficie in resintex
- 3 campi da tennis outdoor in terra rossa
- Tutti i campi sono equipaggiati con il sistema VICKI per l'analisi in tempo reale

## Campi da Padel
- 4 campi da padel panoramici con illuminazione LED
- Tecnologia di analisi movimento adattata per il padel

## Area Pickleball
- 2 campi da pickleball regolamentari
- Zona dedicata per clinics e workshop

## Strutture Complementari
- Palestra di ultima generazione con attrezzature specifiche per tennis
- Area per allenamento mentale e visualizzazione
- Centro medico sportivo integrato
- Sale di analisi video con tecnologia immersiva
- Aula formativa per coach e workshop

## Servizi
- Bar e area ristoro
- Spogliatoi con sauna e area relax
- Negozio specializzato con servizio di incordatura professionale
- Parcheggio gratuito
- Wi-Fi ad alta velocità in tutta la struttura
    `;
  };

  // Combine all content sections
  const generateCompleteContent = () => {
    const programs = getAllPrograms();
    
    let content = '';
    
    if (activeTab === 'method') {
      content = generateATHMethodContent();
    } else if (activeTab === 'technology') {
      content = generateTechnologyContent();
    } else if (activeTab === 'facility') {
      content = generateFacilityContent();
    } else {
      // Program content based on selected tab
      content = generateProgramDetailsContent(
        activeTab === 'all' ? programs.all : 
        activeTab === 'tennis' ? programs.tennis :
        activeTab === 'padel' ? programs.padel :
        activeTab === 'pickleball' ? programs.pickleball :
        programs.touchtennis
      );
    }
    
    return content;
  };

  const handleCopyContent = () => {
    const content = generateCompleteContent();
    navigator.clipboard.writeText(content)
      .then(() => {
        setCopySuccess(true);
        toast.success('Contenuto copiato negli appunti!');
        setTimeout(() => setCopySuccess(false), 2000);
      })
      .catch(err => {
        console.error('Errore durante la copia del contenuto: ', err);
        toast.error('Errore durante la copia del contenuto');
      });
  };

  return (
    <AdminLayout title={t('admin.knowledgeBase') || 'Knowledge Base'}>
      <Card>
        <CardHeader>
          <CardTitle>{t('admin.knowledgeBase') || 'Knowledge Base'}</CardTitle>
          <CardDescription>
            Questa pagina contiene tutte le informazioni del sito che possono essere utilizzate dall'agente ElevenLabs Convai.
            Copia il contenuto e aggiornalo nella configurazione dell'agente su ElevenLabs.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Tabs defaultValue="tennis" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-4">
                <TabsTrigger value="method">Metodo ATH</TabsTrigger>
                <TabsTrigger value="technology">Tecnologia</TabsTrigger>
                <TabsTrigger value="facility">Strutture</TabsTrigger>
                <TabsTrigger value="all">Tutti i Programmi</TabsTrigger>
                <TabsTrigger value="tennis">Tennis</TabsTrigger>
                <TabsTrigger value="padel">Padel</TabsTrigger>
                <TabsTrigger value="pickleball">Pickleball</TabsTrigger>
                <TabsTrigger value="touchtennis">TouchTennis</TabsTrigger>
              </TabsList>
              
              <div className="mb-4 flex justify-between items-center">
                <h3 className="text-lg font-semibold">
                  {activeTab === 'method' ? 'Metodo ATH' : 
                   activeTab === 'technology' ? 'Tecnologia VICKI' :
                   activeTab === 'facility' ? 'Strutture e Facility' :
                   activeTab === 'all' ? 'Tutti i Programmi' :
                   activeTab === 'tennis' ? 'Programmi Tennis' :
                   activeTab === 'padel' ? 'Programmi Padel' :
                   activeTab === 'pickleball' ? 'Programmi Pickleball' :
                   'Programmi TouchTennis'}
                </h3>
                <Button 
                  onClick={handleCopyContent}
                  variant="outline"
                >
                  {copySuccess ? 'Copiato!' : 'Copia contenuto'}
                </Button>
              </div>
              
              <Separator className="my-4" />
              
              <div className="bg-gray-50 p-4 rounded-md max-h-[60vh] overflow-y-auto">
                <pre className="whitespace-pre-wrap text-sm">
                  {generateCompleteContent()}
                </pre>
              </div>
            </Tabs>
          </div>
          
          <div className="mt-6 bg-amber-50 p-4 rounded-md">
            <h3 className="text-lg font-semibold text-amber-800 mb-2">Istruzioni per l'aggiornamento dell'agente</h3>
            <ol className="list-decimal pl-5 text-amber-700 space-y-2">
              <li>Copia il contenuto della sezione desiderata usando il pulsante "Copia contenuto"</li>
              <li>Accedi al tuo account ElevenLabs e vai alla sezione Voice Chat</li>
              <li>Seleziona l'agente che vuoi aggiornare</li>
              <li>Nella sezione Knowledge, incolla il contenuto copiato</li>
              <li>Salva le modifiche all'agente</li>
              <li>Ripeti per ogni sezione che desideri includere nella knowledge base dell'agente</li>
            </ol>
          </div>
        </CardContent>
      </Card>
    </AdminLayout>
  );
};

export default KnowledgeBase;
