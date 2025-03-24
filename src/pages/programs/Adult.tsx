
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import RevealAnimation from '@/components/RevealAnimation';
import { UserGender, UserType, loadUserPreferences } from '@/components/UserTypeSelector';

const AdultProgram = () => {
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
          title={t('footer.adult')}
          subtitle={t('programs.adult.desc')}
          imageSrc="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070&auto=format&fit=crop"
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
              <h2 className="text-3xl font-swiss mb-6">{t('programs.adult')}</h2>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="text-lg mb-6 font-swiss">{t('programs.adult.desc')}</p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-4 font-swiss">
                Il nostro programma per Amatori è stato progettato per offrire a giocatori adulti di tutti i livelli 
                un'esperienza tennistica di alta qualità che combina miglioramento tecnico, divertimento e benessere fisico.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <p className="font-swiss">
                Utilizzando la tecnologia VICKI™ in modo accessibile e intuitivo, aiutiamo ogni giocatore a comprendere 
                e migliorare il proprio tennis, rendendo il processo di apprendimento più efficace e gratificante.
              </p>
            </RevealAnimation>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <RevealAnimation delay={250} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Caratteristiche del Programma</h3>
              <ul className="list-disc list-inside space-y-2 font-swiss">
                <li>Lezioni flessibili adattate agli impegni lavorativi</li>
                <li>Analisi tecnica semplificata ma efficace</li>
                <li>Approccio personalizzato per ogni livello di gioco</li>
                <li>Focus sulla prevenzione di infortuni e tennis sostenibile</li>
                <li>Componente sociale e di gruppo per rendere l'esperienza più piacevole</li>
                <li>Possibilità di monitorare i propri progressi nel tempo</li>
              </ul>
            </RevealAnimation>
            
            <RevealAnimation delay={300} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Benefici</h3>
              <ul className="list-disc list-inside space-y-2 font-swiss">
                <li>Miglioramento tecnico visibile e misurabile</li>
                <li>Maggiore soddisfazione nel gioco attraverso colpi più efficaci</li>
                <li>Riduzione del rischio di infortuni comuni negli adulti</li>
                <li>Benessere fisico generale attraverso un'attività completa</li>
                <li>Ambiente sociale positivo e motivante</li>
                <li>Accesso a metodologie di allenamento professionali in formato accessibile</li>
              </ul>
            </RevealAnimation>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdultProgram;
