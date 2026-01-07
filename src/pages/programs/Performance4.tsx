
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import RevealAnimation from '@/components/RevealAnimation';
import { UserGender, UserType, loadUserPreferences } from '@/components/UserTypeSelector';
import VickiUnifiedBadge from '@/components/VickiUnifiedBadge';
import ContactSection from '@/components/ContactSection';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProgramDetails from '@/components/programs/ProgramDetails';
import ProgramWhyChoose from '@/components/programs/ProgramWhyChoose';

const Performance4Program = () => {
  const { t } = useLanguage();
  const [userGender, setUserGender] = useState<UserGender | null>(null);
  const [userType, setUserType] = useState<UserType | null>(null);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const { gender, type } = loadUserPreferences();
    if (gender) setUserGender(gender);
    if (type) setUserType(type);
  }, []);

  const isEnglish = t('perf4_hero_subtitle').includes('days');

  const relatedPrograms = [
    {
      title: "Performance 2",
      description: isEnglish 
        ? "2 days per week for a path towards tennis excellence, ideal for those with many other commitments." 
        : "2 giorni a settimana per un percorso verso l'eccellenza tennistica, ideale per chi ha molti altri impegni.",
      link: "/programs/performance-2"
    },
    {
      title: "Performance 3",
      description: isEnglish 
        ? "3 days per week for balanced training, ideal for athletes who want to balance sport and study." 
        : "3 giorni a settimana per un allenamento bilanciato, ideale per atleti che desiderano equilibrare sport e studio.",
      link: "/programs/performance-3"
    },
    {
      title: "Elite Performance",
      description: isEnglish 
        ? "5 days per week of intensive training for athletes aiming for excellence and high-level competitions." 
        : "5 giorni a settimana di allenamento intensivo per atleti che puntano all'eccellenza e competizioni di alto livello.",
      link: "/programs/elite-performance"
    },
    {
      title: isEnglish ? "Elite Performance Full" : "Elite Performance Full",
      description: isEnglish 
        ? "Complete and immersive program for high-level athletes with daily training and total support." 
        : "Programma completo e immersivo per atleti di alto livello con allenamento giornaliero e supporto totale.",
      link: "/programs/elite-full"
    },
    {
      title: isEnglish ? "Parent/Tutor" : "Genitore/Tutor",
      description: isEnglish 
        ? "Support program for parents and tutors of athletes aged 6-18. Included in Performance 4 program." 
        : "Programma di supporto per genitori e tutor di atleti tra i 6 e i 18 anni. Incluso nel programma Performance 4.",
      link: "/programs/parent"
    }
  ];

  const whyChooseBenefits = [
    {
      title: isEnglish ? "Optimal balance" : "Equilibrio ottimale",
      description: isEnglish ? "Between training intensity and study time" : "Tra intensità di allenamento e tempo per lo studio"
    },
    {
      title: isEnglish ? "Personalized attention" : "Attenzione personalizzata",
      description: isEnglish ? "With maximum 2 athletes per court" : "Con massimo 2 atleti per campo"
    },
    {
      title: isEnglish ? "Detailed analysis" : "Analisi dettagliata",
      description: isEnglish ? "Of every aspect of the game with VICKI™ technology" : "Di ogni aspetto del gioco con tecnologia VICKI™"
    },
    {
      title: isEnglish ? "Complete development" : "Sviluppo completo",
      description: isEnglish ? "Technical, athletic, mental and tactical" : "Tecnico, atletico, mentale e tattico"
    },
    {
      title: isEnglish ? "Targeted preparation" : "Preparazione mirata",
      description: isEnglish ? "For competitive tournaments" : "Per competizioni agonistiche"
    },
    {
      title: isEnglish ? "Constant support" : "Supporto costante",
      description: isEnglish ? "From a team of professionals" : "Da un team di professionisti"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="relative">
          <Hero 
            title="Performance 4"
            subtitle={t('perf4_hero_subtitle')}
            imageSrc="https://images.unsplash.com/photo-1595435934349-5c8a53b567d0?q=80&w=2070&auto=format&fit=crop"
            vimeoEmbed='<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068788542?h=698f55b033&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Performance 4"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
            buttons={[
              { text: t('btn_book_trial'), href: '/contact' },
              { text: t('btn_contact'), href: '/contact', variant: 'outline' }
            ]}
            contentPosition="left"
            overlayOpacity="medium"
          />
          
          <div className="w-full bg-black py-16 relative" style={{ height: 'auto', minHeight: '400px' }}>
            <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center py-8">
              <h2 className="text-white text-lg font-bold mb-4">{t('perf4_banner_title')}</h2>
              <p className="text-white text-lg max-w-3xl mb-6">
                {t('perf4_banner_desc')}
              </p>
              <ul className="text-white space-y-3 max-w-3xl">
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span><strong>{isEnglish ? 'Technical Excellence:' : 'Eccellenza Tecnica:'}</strong> {isEnglish ? 'Detailed biomechanical analysis of every shot and movement, with immediate feedback.' : 'Analisi biomeccanica dettagliata di ogni colpo e movimento, con feedback immediato.'}</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span><strong>{isEnglish ? 'Athletic Preparation:' : 'Preparazione Atletica:'}</strong> {isEnglish ? 'Personalized programs with constant monitoring, movement optimization.' : 'Programmi personalizzati con monitoraggio costante, ottimizzazione degli spostamenti.'}</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span><strong>{isEnglish ? 'Mental Strength:' : 'Forza Mentale:'}</strong> {isEnglish ? 'Development of cognitive abilities, competitive stress management.' : 'Sviluppo delle abilità cognitive, gestione dello stress agonistico.'}</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span><strong>{isEnglish ? 'Tactics & Strategy:' : 'Tattica & Strategia:'}</strong> {isEnglish ? 'Opponent game analysis, development of personalized match plans.' : 'Analisi del gioco avversario, sviluppo di piani di partita personalizzati.'}</span>
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <VickiUnifiedBadge level="advanced" className="bg-opacity-20 border-opacity-30 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <ProgramDetails
            title="Performance 4"
            subtitle={isEnglish ? "4 days per week, 40 weeks per year." : "4 giorni a settimana, 40 settimane all'anno."}
            description={[
              isEnglish 
                ? "The Performance 4 program is dedicated to athletes seeking consistent and structured commitment, with 4 weekly days of intensive training, combining tennis sessions and athletic preparation for a total of 12 hours of weekly professional training."
                : "Il programma Performance 4 è dedicato agli atleti che cercano un impegno consistente e strutturato, con 4 giorni settimanali di allenamento intensivo, combinando sessioni di tennis e preparazione atletica per un totale di 12 ore settimanali di allenamento professionale.",
              isEnglish 
                ? "With a maximum of 2 athletes per court, this program guarantees highly personalized attention, allowing accelerated development of tennis and athletic skills. The VICKI™ system monitors every detail to optimize athlete growth."
                : "Con massimo 2 atleti per campo, questo programma garantisce un'attenzione altamente personalizzata, permettendo uno sviluppo accelerato delle competenze tennistiche e atletiche. Il sistema VICKI™ monitora ogni dettaglio per ottimizzare la crescita dell'atleta.",
              isEnglish 
                ? "This program offers an ideal balance between the intensity needed to progress competitively and free time to dedicate to studies or other activities, allowing athletes to build a complete educational path."
                : "Questo programma offre un equilibrio ideale tra l'intensità necessaria per progredire a livello agonistico e il tempo libero per dedicarsi agli studi o ad altre attività, consentendo agli atleti di costruire un percorso formativo completo."
            ]}
            userGender={userGender}
            userType={userType}
            vickiLevel="advanced"
          />
          
          <div className="grid md:grid-cols-2 gap-10">
            <RevealAnimation delay={250} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{t('perf4_features_title')}</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>{isEnglish ? '4 tennis sessions of 1.5 hours (6 hours weekly)' : '4 sessioni tennis da 1,5 ore (6 ore settimanali)'}</li>
                <li>{isEnglish ? '4 athletic sessions of 1.5 hours (6 hours weekly)' : '4 sessioni atletica da 1,5 ore (6 ore settimanali)'}</li>
                <li>{isEnglish ? 'Maximum 2 athletes per court' : 'Massimo 2 atleti per campo'}</li>
                <li>{isEnglish ? '40 weeks of training' : '40 settimane di allenamento'}</li>
                <li>{isEnglish ? 'Advanced monitoring with VICKI™' : 'Monitoraggio avanzato con VICKI™'}</li>
                <li>{isEnglish ? 'Video analysis and detailed feedback' : 'Analisi video e feedback dettagliati'}</li>
                <li>{isEnglish ? 'Tournament-specific preparation' : 'Preparazione specifica per tornei'}</li>
                <li>{isEnglish ? 'Balanced plan that leaves time for study and personal life' : 'Piano bilanciato che lascia tempo per studio e vita personale'}</li>
              </ul>
            </RevealAnimation>
            
            <RevealAnimation delay={300} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{t('perf4_price_title')}</h3>
              <div className="mb-4">
                <p className="text-3xl font-bold text-ath-clay">€6.500</p>
                <p className="text-sm text-gray-600">{isEnglish ? 'per season (40 weeks)' : 'per stagione (40 settimane)'}</p>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                {t('perf4_payment_info')}
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-ath-clay text-white py-2 px-4 rounded hover:bg-ath-clay/90 transition-colors"
              >
                {t('perf4_request_info')}
              </a>
            </RevealAnimation>
          </div>
          
          <ProgramWhyChoose
            title={t('perf4_why_title')}
            benefits={whyChooseBenefits}
          />
        </div>
        
        <div className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <RevealAnimation delay={100}>
              <h3 className="text-2xl font-bold mb-6">{t('perf4_related_title')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {relatedPrograms.slice(0, 3).map((program, index) => (
                  <Link key={index} to={program.link} className="block p-6 border border-gray-200 bg-white rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                    <h4 className="text-lg font-medium mb-2">{program.title}</h4>
                    <p className="text-gray-600 mb-3">{program.description}</p>
                    <span className="inline-flex items-center text-ath-clay">{t('perf_discover')} <ArrowRight size={14} className="ml-1" /></span>
                  </Link>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPrograms.slice(3).map((program, index) => (
                  <Link key={index} to={program.link} className="block p-6 border border-gray-200 bg-white rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                    <h4 className="text-lg font-medium mb-2">{program.title}</h4>
                    <p className="text-gray-600 mb-3">{program.description}</p>
                    <span className="inline-flex items-center text-ath-clay">{t('perf_discover')} <ArrowRight size={14} className="ml-1" /></span>
                  </Link>
                ))}
              </div>
            </RevealAnimation>
          </div>
        </div>
        
        <ContactSection 
          title={t('perf4_contact_title')} 
          subtitle={t('perf4_contact_subtitle')}
          address="Via Carlo D'Adda 6/8, 20143 Milano (MI)"
          email="info@advancedtennishub.com"
          phone="+39 02 123 4567"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Performance4Program;
