
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import RevealAnimation from '@/components/RevealAnimation';
import { UserGender, UserType, loadUserPreferences } from '@/components/UserTypeSelector';

const CampsProgram = () => {
  const { t } = useLanguage();
  const [userGender, setUserGender] = useState<UserGender | null>(null);
  const [userType, setUserType] = useState<UserType | null>(null);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Load user preferences
    const { gender, type } = loadUserPreferences();
    if (gender) setUserGender(gender);
    if (type) setUserType(type);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero 
          title={t('footer.camps')}
          subtitle="Esperienza intensiva di alta qualità per giocatori di tutte le età durante i periodi estivi e vacanze scolastiche"
          imageSrc="https://images.unsplash.com/photo-1544298621-35a989e4e54a?q=80&w=2070&auto=format&fit=crop"
          buttons={[
            { text: 'PRENOTA UNA PROVA', href: '/contact' },
            { text: 'CONTATTACI', href: '/contact', variant: 'outline' }
          ]}
          contentPosition="left"
          overlayOpacity="medium"
        />
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-12">
            <RevealAnimation>
              <h2 className="text-3xl font-display mb-6">Camp Estivi</h2>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="text-lg mb-6">Esperienza intensiva di alta qualità per giocatori di tutte le età durante i periodi estivi e vacanze scolastiche.</p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-4">
                I nostri Camp Estivi offrono un'immersione completa nel tennis di qualità, combinando allenamento intensivo, 
                divertimento e socializzazione in un ambiente stimolante e professionale.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <p>
                Grazie alla tecnologia VICKI™, anche in un formato breve come quello dei camp, 
                siamo in grado di offrire un'esperienza formativa significativa con feedback precisi e misurabili.
              </p>
            </RevealAnimation>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <RevealAnimation delay={250} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Caratteristiche del Programma</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Sessioni tecniche mattutine con analisi video</li>
                <li>Attività tattiche e match practice pomeridiane</li>
                <li>Mini-tornei e competizioni organizzate</li>
                <li>Sessioni di mental training adatte all'età</li>
                <li>Attività fisiche complementari e giochi di gruppo</li>
                <li>Report dettagliato finale con indicazioni per il futuro</li>
              </ul>
            </RevealAnimation>
            
            <RevealAnimation delay={300} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Benefici</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Miglioramento tecnico intensivo in breve tempo</li>
                <li>Esperienza di tennis immersiva e motivante</li>
                <li>Socializzazione con altri giocatori e sviluppo di amicizie</li>
                <li>Scoperta dei propri punti di forza e aree di miglioramento</li>
                <li>Esposizione alla metodologia professionale ATH</li>
                <li>Divertimento e passione per il tennis in un ambiente positivo</li>
              </ul>
            </RevealAnimation>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CampsProgram;
