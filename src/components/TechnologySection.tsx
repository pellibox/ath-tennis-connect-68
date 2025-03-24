import { Server, Zap, BarChart3, Activity, Users, LineChart, Rocket, Share2, Brain, Shield, Target, Sparkles, AreaChart, Eye, Cpu, Settings } from 'lucide-react';
import RevealAnimation from './RevealAnimation';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

interface TechnologySectionProps {
  title: string;
  subtitle?: string;
  className?: string;
  id?: string;
}

const TechnologySection = ({ 
  title, 
  subtitle,
  className,
  id 
}: TechnologySectionProps) => {
  const { t } = useLanguage();
  
  // Core Vicki features - Visual, Intelligent, Coaching, Knowledge, Insights
  const coreFeatures = [
    {
      icon: <Eye className="w-12 h-12 mb-4 text-ath-clay" />,
      title: "Visual",
      description: "Tecnologia di tracking ad alta frequenza per registrare ogni dettaglio del gioco con oltre 70 parametri monitorati."
    },
    {
      icon: <Cpu className="w-12 h-12 mb-4 text-ath-clay" />,
      title: "Intelligent",
      description: "Algoritmi predittivi di machine learning per analizzare i dati raccolti e prevedere tendenze di miglioramento."
    },
    {
      icon: <Users className="w-12 h-12 mb-4 text-ath-clay" />,
      title: "Coaching",
      description: "Expertise dei coach integrata in una libreria digitale, posizionando l'allenatore al centro del processo decisionale."
    },
    {
      icon: <Brain className="w-12 h-12 mb-4 text-ath-clay" />,
      title: "Knowledge",
      description: "Conoscenze tecniche trasformate in metodologie digitali per supportare le decisioni del coach e del team multidisciplinare."
    },
    {
      icon: <Target className="w-12 h-12 mb-4 text-ath-clay" />,
      title: "Insights",
      description: "Conversione dei dati in strategie di allenamento su misura, valorizzando l'esperienza e l'intuizione del coach."
    }
  ];

  // Technical benefits
  const technologies = [
    {
      icon: <Server className="w-10 h-10 mb-4 text-ath-clay" />,
      title: t('tech.data.title'),
      description: t('tech.data.desc')
    },
    {
      icon: <Zap className="w-10 h-10 mb-4 text-ath-clay" />,
      title: t('tech.analysis.title'),
      description: t('tech.analysis.desc')
    },
    {
      icon: <BarChart3 className="w-10 h-10 mb-4 text-ath-clay" />,
      title: t('tech.ai.title'),
      description: t('tech.ai.desc')
    },
    {
      icon: <Activity className="w-10 h-10 mb-4 text-ath-clay" />,
      title: t('tech.personal.title'),
      description: t('tech.personal.desc')
    }
  ];

  // Evaluation areas
  const evaluationAreas = [
    {
      icon: <Settings className="w-8 h-8 mb-3 text-ath-clay" />,
      title: "Tecnica",
      description: "Analisi biomeccanica completa di tutti i colpi, tracking 3D della racchetta e valutazione del movimento."
    },
    {
      icon: <Target className="w-8 h-8 mb-3 text-ath-clay" />,
      title: "Tattica",
      description: "Mappatura degli schemi di gioco, gestione dello scambio e analisi delle situazioni chiave."
    },
    {
      icon: <Activity className="w-8 h-8 mb-3 text-ath-clay" />,
      title: "Atletica",
      description: "Monitoraggio del movimento, parametri fisici e valutazione delle capacità fisiche con prevenzione infortuni."
    },
    {
      icon: <Brain className="w-8 h-8 mb-3 text-ath-clay" />,
      title: "Mentale",
      description: "Analisi comportamentale, gestione della pressione e valutazione della resilienza durante il gioco."
    },
    {
      icon: <Shield className="w-8 h-8 mb-3 text-ath-clay" />,
      title: "Medica",
      description: "Analisi posturale, gestione della salute e monitoraggio per la prevenzione di infortuni."
    },
    {
      icon: <Sparkles className="w-8 h-8 mb-3 text-ath-clay" />,
      title: "Biochimica",
      description: "Monitoraggio metabolico, stato nutrizionale e analisi del recupero dopo allenamenti intensivi."
    }
  ];

  // Target groups
  const targetGroups = [
    {
      icon: <Rocket className="w-8 h-8 mb-3 text-ath-clay" />,
      title: "Giovani Agonisti (6-12)",
      description: "Analisi biomeccanica costante con valutazioni tecniche, fisiche e mentali adattate alla crescita."
    },
    {
      icon: <LineChart className="w-8 h-8 mb-3 text-ath-clay" />,
      title: "Junior Agonisti (13-18)",
      description: "Analisi in tempo reale di ogni colpo con feedback continuo e prevenzione infortuni."
    },
    {
      icon: <AreaChart className="w-8 h-8 mb-3 text-ath-clay" />,
      title: "Professionisti",
      description: "Dati integrati con il team tecnico e analisi predittive per ottimizzare ogni dettaglio."
    },
    {
      icon: <Share2 className="w-8 h-8 mb-3 text-ath-clay" />,
      title: "Coach e Club",
      description: "Strumenti di tracking, analisi e possibilità di creare e monetizzare metodi proprietari."
    }
  ];

  return (
    <section id={id} className={cn('py-20 px-6 lg:px-10', className)}>
      <div className="max-w-7xl mx-auto">
        <RevealAnimation>
          <div className="text-center mb-16 relative">
            {/* Vicki logo centered at the top */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                {/* Black Vicki logo */}
                <img 
                  src="/lovable-uploads/8f2b30a1-cb65-453e-ba82-d9721a192426.png" 
                  alt="Vicki™ Logo" 
                  className="h-28 w-auto" 
                />
                {/* Grey Vicki logo overlay */}
                <img 
                  src="/lovable-uploads/dc679c8d-60cd-4841-a42c-0907926b7ef5.png" 
                  alt="" 
                  className="h-28 w-auto absolute top-0 left-0 opacity-30" 
                />
              </div>
            </div>
            
            {/* Vicki subtitle */}
            <h3 className="text-2xl md:text-3xl font-swiss text-ath-clay mb-4">
              Vicki™: Visual Intelligent Coaching for Knowledge Insights
            </h3>
            
            {/* ATH Technological Advantage */}
            <h2 className="text-3xl md:text-4xl font-swiss text-center text-ath-clay">
              {title}
            </h2>
          </div>
        </RevealAnimation>
        
        {subtitle && (
          <RevealAnimation delay={100}>
            <p className="text-lg text-ath-clay max-w-3xl mx-auto text-center mb-12 font-swiss">{subtitle}</p>
          </RevealAnimation>
        )}
        
        {/* New section: Coach-Centered Approach */}
        <RevealAnimation delay={120}>
          <div className="mb-16 bg-ath-clay bg-opacity-5 p-8 rounded-lg">
            <h3 className="text-2xl font-medium mb-6 text-center text-ath-clay font-swiss">Il Coach al Centro del Sistema</h3>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-1/3 text-center">
                <Users className="w-20 h-20 mx-auto text-ath-clay mb-4" />
              </div>
              <div className="md:w-2/3">
                <p className="mb-4 font-swiss text-ath-clay">
                  Vicki™ è concepito come uno strumento di potenziamento per il coach, non come sostituto. 
                  Il sistema posiziona l'allenatore al centro del processo decisionale, fornendogli dati completi e analisi 
                  avanzate che amplificano la sua esperienza e intuizione.
                </p>
                <p className="mb-4 font-swiss text-ath-clay">
                  I coach utilizzano i dati forniti dal sistema per implementare le proprie metodologie 
                  e coordinare le decisioni di tutti i professionisti coinvolti nella crescita dell'atleta - 
                  preparatori atletici, fisioterapisti, nutrizionisti e mental coach - creando un approccio veramente integrato.
                </p>
                <p className="font-swiss text-ath-clay">
                  Questa collaborazione coordinata, basata su dati oggettivi ma guidata dall'expertise umana, 
                  rappresenta una rivoluzione nel tennis moderno, dove la tecnologia amplifica - ma mai sostituisce - 
                  l'insostituibile competenza degli allenatori.
                </p>
              </div>
            </div>
          </div>
        </RevealAnimation>
        
        {/* What is VICKI - core components explained */}
        <RevealAnimation delay={150}>
          <div className="mb-16">
            <h3 className="text-2xl font-medium mb-8 text-center text-ath-clay font-swiss">Il Significato di VICKI™</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {coreFeatures.map((feature, index) => (
                <RevealAnimation key={index} delay={index * 50}>
                  <div className="bg-white p-6 shadow-sm rounded-md border border-gray-100 text-center h-full flex flex-col items-center hover:shadow-md transition-shadow">
                    {feature.icon}
                    <h4 className="text-xl font-medium mb-3 text-ath-clay font-swiss">{feature.title}</h4>
                    <p className="text-gray-600 text-sm font-swiss">{feature.description}</p>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </RevealAnimation>
        
        {/* VICKI Technology Benefits */}
        <RevealAnimation delay={200}>
          <div className="mb-16">
            <h3 className="text-2xl font-medium mb-8 text-center text-ath-clay font-swiss">La Tecnologia VICKI™</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <RevealAnimation key={index} delay={index * 100}>
                  <div className="text-center p-6 bg-white shadow-sm border border-gray-100 rounded-lg h-full flex flex-col items-center hover:shadow-md transition-shadow">
                    {tech.icon}
                    <h3 className="text-xl font-medium mb-3 text-ath-clay font-swiss">{tech.title}</h3>
                    <p className="text-gray-600 font-swiss">{tech.description.replace(/VICKI/g, 'Vicki™')}</p>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </RevealAnimation>
        
        {/* VICKI Evaluation Areas */}
        <RevealAnimation delay={300}>
          <div className="mb-16">
            <h3 className="text-2xl font-medium mb-8 text-center text-ath-clay font-swiss">Sistema di Valutazione Integrato</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {evaluationAreas.map((area, index) => (
                <RevealAnimation key={index} delay={index * 50}>
                  <div className="bg-white p-5 rounded-lg border border-ath-clay border-opacity-20 shadow-sm hover:shadow-md transition-shadow h-full">
                    <div className="flex items-center mb-3">
                      {area.icon}
                      <h5 className="text-lg font-medium ml-2 text-ath-clay font-swiss">{area.title}</h5>
                    </div>
                    <p className="text-gray-600 text-sm font-swiss">{area.description}</p>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </RevealAnimation>
        
        {/* Target Groups */}
        <RevealAnimation delay={400}>
          <div className="mb-16">
            <h3 className="text-2xl font-medium mb-8 text-center text-ath-clay font-swiss">Target Groups</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {targetGroups.map((group, index) => (
                <RevealAnimation key={index} delay={index * 50}>
                  <div className="bg-white p-5 rounded-lg border border-ath-clay border-opacity-20 shadow-sm hover:shadow-md transition-shadow h-full">
                    <div className="flex items-center mb-3">
                      {group.icon}
                      <h5 className="text-lg font-medium ml-2 text-ath-clay font-swiss">{group.title}</h5>
                    </div>
                    <p className="text-gray-600 text-sm font-swiss">{group.description}</p>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </RevealAnimation>
        
        {/* Visual representation of data flow */}
        <RevealAnimation delay={500}>
          <div className="relative py-12 px-8 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-100 shadow-sm mb-16">
            <h3 className="text-2xl font-medium mb-6 text-center text-ath-clay font-swiss">Il Potere di VICKI™</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-md shadow-sm border border-ath-clay border-opacity-10 text-center">
                <Zap className="w-12 h-12 mx-auto mb-4 text-ath-clay" />
                <h4 className="text-lg font-medium mb-2 text-ath-clay font-swiss">Potenza Analitica</h4>
                <p className="text-gray-600 text-sm font-swiss">Integrazione di visione artificiale e machine learning per analizzare decine di parametri in tempo reale.</p>
              </div>
              
              <div className="bg-white p-6 rounded-md shadow-sm border border-ath-clay border-opacity-10 text-center">
                <Brain className="w-12 h-12 mx-auto mb-4 text-ath-clay" />
                <h4 className="text-lg font-medium mb-2 text-ath-clay font-swiss">Potenza Cognitiva</h4>
                <p className="text-gray-600 text-sm font-swiss">Trasformazione di informazioni complesse in conoscenza pratica, apprendendo dall'esperienza dei professionisti.</p>
              </div>
              
              <div className="bg-white p-6 rounded-md shadow-sm border border-ath-clay border-opacity-10 text-center">
                <Rocket className="w-12 h-12 mx-auto mb-4 text-ath-clay" />
                <h4 className="text-lg font-medium mb-2 text-ath-clay font-swiss">Potenza Trasformativa</h4>
                <p className="text-gray-600 text-sm font-swiss">Amplificazione dell'expertise umana, personalizzazione degli interventi e accelerazione dello sviluppo in ogni dimensione.</p>
              </div>
            </div>
          </div>
        </RevealAnimation>
        
        {/* Summary quote */}
        <RevealAnimation delay={600}>
          <div className="mt-12 bg-ath-clay bg-opacity-5 p-6 rounded-lg border border-ath-clay border-opacity-20 max-w-4xl mx-auto">
            <p className="text-ath-clay italic font-swiss">
              {t('tech.quote').replace(/VICKI/g, 'Vicki™')}
            </p>
            <p className="text-ath-clay mt-4 font-bold font-swiss">
              {t('tech.only').replace(/VICKI/g, 'Vicki™')}
            </p>
            
            <div className="mt-6 text-center">
              <p className="text-ath-clay text-sm font-swiss">
                VICKI™ opera come una lente d'ingrandimento nelle mani esperte del coach, trasformando la complessità dei dati in conoscenza pratica immediatamente applicabile.
              </p>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default TechnologySection;
