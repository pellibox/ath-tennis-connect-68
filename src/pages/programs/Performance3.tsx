import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import RevealAnimation from '@/components/RevealAnimation';
import { UserGender, UserType, loadUserPreferences } from '@/components/UserTypeSelector';
import VickiMonitoringBadge from '@/components/VickiMonitoringBadge';
import VickiPoweredBadge from '@/components/VickiPoweredBadge';
import ContactSection from '@/components/ContactSection';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Performance3Program = () => {
  const { t } = useLanguage();
  const [userGender, setUserGender] = useState<UserGender | null>(null);
  const [userType, setUserType] = useState<UserType | null>(null);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const { gender, type } = loadUserPreferences();
    if (gender) setUserGender(gender);
    if (type) setUserType(type);
  }, []);

  const isEnglish = t('perf3_hero_subtitle').includes('days');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="relative">
          <Hero 
            title="Performance 3"
            subtitle={t('perf3_hero_subtitle')}
            imageSrc="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2070&auto=format&fit=crop"
            vimeoEmbed='<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068788542?h=698f55b033&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Performance 3"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
            buttons={[
              { text: t('btn_book_trial'), href: '/contact' },
              { text: t('btn_contact'), href: '/contact', variant: 'outline' }
            ]}
            contentPosition="left"
            overlayOpacity="medium"
          />
          
          <div className="w-full bg-black py-16 relative" style={{ height: 'auto', minHeight: '400px' }}>
            <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center py-8">
              <h2 className="text-white text-lg font-bold mb-4">{t('perf3_banner_title')}</h2>
              <p className="text-white text-lg max-w-3xl mb-6">
                {t('perf3_banner_desc')}
              </p>
              <ul className="text-white space-y-3 max-w-3xl">
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span><strong>{isEnglish ? 'Advanced Technique:' : 'Tecnica Avanzata:'}</strong> {isEnglish ? 'Refinement of fundamentals and introduction to intermediate biomechanics with periodic video analysis.' : 'Perfezionamento dei fondamentali e introduzione alle biomeccaniche intermedie con analisi video periodica.'}</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span><strong>{isEnglish ? 'Structured Physical Preparation:' : 'Preparazione Fisica Strutturata:'}</strong> {isEnglish ? 'Weekly programs focused on increasing specific endurance, controlled power and agility.' : 'Programmi settimanali focalizzati sull\'incremento della resistenza specifica, potenza controllata e agilità.'}</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span><strong>{isEnglish ? 'Progressive Mental Development:' : 'Sviluppo Mentale Progressivo:'}</strong> {isEnglish ? 'Concentration techniques, pre-match routines and emotion management.' : 'Tecniche di concentrazione, routine pre-partita e gestione delle emozioni.'}</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span><strong>{isEnglish ? 'Tactical Deepening:' : 'Approfondimento Tattico:'}</strong> {isEnglish ? 'Building personalized game patterns, match analysis and decision-making development.' : 'Costruzione di schemi di gioco personalizzati, analisi delle partite e sviluppo della capacità decisionale.'}</span>
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <VickiMonitoringBadge level="advanced" className="bg-opacity-20 border-opacity-30 text-white" />
                <VickiPoweredBadge className="bg-opacity-20 border-opacity-30 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-12">
            <RevealAnimation>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h2 className="text-3xl font-bold">Performance 3</h2>
                <Badge variant="ath" className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" />
                  <span>{t('perf3_badge')}</span>
                </Badge>
                <VickiMonitoringBadge level="advanced" />
                <VickiPoweredBadge />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="text-lg mb-6">{isEnglish ? '3 days per week, 40 weeks per year.' : '3 giorni a settimana, 40 settimane all\'anno.'}</p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-4">
                {t('perf3_desc1')}
              </p>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <p>
                {t('perf3_desc2')}
              </p>
            </RevealAnimation>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <RevealAnimation delay={250} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{t('perf3_features_title')}</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>{isEnglish ? '3 tennis sessions of 1.5 hours (4.5 hours weekly)' : '3 sessioni tennis da 1,5 ore (4,5 ore settimanali)'}</li>
                <li>{isEnglish ? '3 athletic sessions of 1.5 hours (4.5 hours weekly)' : '3 sessioni atletica da 1,5 ore (4,5 ore settimanali)'}</li>
                <li>{isEnglish ? 'Maximum 3 athletes per court' : 'Massimo 3 atleti per campo'}</li>
                <li>{isEnglish ? '40 weeks of training' : '40 settimane di allenamento'}</li>
                <li>{isEnglish ? 'Complete monitoring with VICKI™' : 'Monitoraggio completo con VICKI™'}</li>
                <li>{isEnglish ? 'Personalized plan suitable for young competitors' : 'Piano personalizzato adatto ai giovani agonisti'}</li>
                <li>{isEnglish ? 'Gradual introduction to competitive environment' : 'Introduzione graduale all\'ambiente competitivo'}</li>
                <li>{isEnglish ? 'Complete support for first competitions' : 'Supporto completo per le prime competizioni'}</li>
              </ul>
            </RevealAnimation>
            
            <RevealAnimation delay={300} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{t('perf3_price_title')}</h3>
              <div className="mb-4">
                <p className="text-3xl font-bold text-ath-clay">€5.000</p>
                <p className="text-sm text-gray-600">{isEnglish ? 'per season (40 weeks)' : 'per stagione (40 settimane)'}</p>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                {t('perf3_payment_info')}
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-ath-clay text-white py-2 px-4 rounded hover:bg-ath-clay/90 transition-colors"
              >
                {t('perf3_request_info')}
              </a>
            </RevealAnimation>
          </div>
        </div>
        
        <div className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <RevealAnimation>
              <h3 className="text-2xl font-bold mb-6">{t('perf3_related_title')}</h3>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Link to="/programs/performance-2" className="block p-6 border border-gray-200 bg-white rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                  <h4 className="text-lg font-medium mb-2">Performance 2</h4>
                  <p className="text-gray-600 mb-3">{isEnglish ? '2 days per week for a path towards tennis excellence, ideal for those with many other commitments.' : '2 giorni a settimana per un percorso verso l\'eccellenza tennistica, ideale per chi ha molti altri impegni.'}</p>
                  <span className="inline-flex items-center text-ath-clay">{t('perf_discover')} <ArrowRight size={14} className="ml-1" /></span>
                </Link>
                <Link to="/programs/performance-4" className="block p-6 border border-gray-200 bg-white rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                  <h4 className="text-lg font-medium mb-2">Performance 4</h4>
                  <p className="text-gray-600 mb-3">{isEnglish ? '4 days per week for greater intensity, ideal for more determined athletes.' : '4 giorni a settimana per un\'intensità maggiore, ideale per atleti più determinati.'}</p>
                  <span className="inline-flex items-center text-ath-clay">{t('perf_discover')} <ArrowRight size={14} className="ml-1" /></span>
                </Link>
                <Link to="/programs/elite-performance" className="block p-6 border border-gray-200 bg-white rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                  <h4 className="text-lg font-medium mb-2">Elite Performance</h4>
                  <p className="text-gray-600 mb-3">{isEnglish ? '5 days per week of intensive training for athletes aiming for excellence.' : '5 giorni a settimana di allenamento intensivo per atleti che puntano all\'eccellenza.'}</p>
                  <span className="inline-flex items-center text-ath-clay">{t('perf_discover')} <ArrowRight size={14} className="ml-1" /></span>
                </Link>
              </div>
            </RevealAnimation>
            
            <RevealAnimation delay={150}>
              <div className="mt-6">
                <Link to="/programs/parent" className="block p-6 border border-gray-200 bg-white rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                  <h4 className="text-lg font-medium mb-2">{isEnglish ? 'Parent/Tutor' : 'Genitore/Tutor'}</h4>
                  <p className="text-gray-600 mb-3">{isEnglish ? 'Support program for parents and tutors of athletes aged 6-18. Available for Performance 3 at €150.' : 'Programma di supporto per genitori e tutor di atleti tra i 6 e i 18 anni. Disponibile per il programma Performance 3 a €150.'}</p>
                  <span className="inline-flex items-center text-ath-clay">{t('perf_discover')} <ArrowRight size={14} className="ml-1" /></span>
                </Link>
              </div>
            </RevealAnimation>
          </div>
        </div>
        
        <ContactSection 
          title={t('perf3_contact_title')} 
          subtitle={t('perf3_contact_subtitle')}
          address="Via Carlo D'Adda 6/8, 20143 Milano (MI)"
          email="info@advancedtennishub.com"
          phone="+39 02 123 4567"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Performance3Program;
