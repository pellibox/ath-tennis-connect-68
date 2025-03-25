
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import RevealAnimation from '@/components/RevealAnimation';
import { UserGender, UserType, loadUserPreferences } from '@/components/UserTypeSelector';
import ContactSection from '@/components/ContactSection';
import PrivateProgramHeader from '@/components/programs/PrivateProgramHeader';
import PrivateProgramDescription from '@/components/programs/PrivateProgramDescription';
import PrivateProgramFeatures from '@/components/programs/PrivateProgramFeatures';
import PrivateProgramPricing from '@/components/programs/PrivateProgramPricing';

const PrivateProgram = () => {
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
        <PrivateProgramHeader />
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <PrivateProgramDescription />
          
          <div className="grid md:grid-cols-2 gap-10">
            <RevealAnimation delay={250}>
              <PrivateProgramFeatures />
            </RevealAnimation>
            
            <RevealAnimation delay={300}>
              <PrivateProgramPricing />
            </RevealAnimation>
          </div>
        </div>
        
        <ContactSection 
          title="Vuoi saperne di più?" 
          subtitle="Contattaci per prenotare una sessione di Private Personal Coaching"
          address="Via Carlo D'Adda 6/8, 20143 Milano (MI)"
          email="info@advancedtennishub.com"
          phone="+39 02 123 4567"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivateProgram;
