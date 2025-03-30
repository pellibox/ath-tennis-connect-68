import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useProfile } from '@/contexts/ProfileContext';
import { getVimeoEmbed, getWelcomeMessage } from '@/utils/videoUtils';
import { useLanguage } from '@/contexts/LanguageContext';
import RevealAnimation from '@/components/RevealAnimation';
import ProgramsSection from '@/components/ProgramsSection';
import AboutSection from '@/components/AboutSection';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import { programCategories } from '@/data/programs';
import { useIsMobile } from '@/hooks/use-mobile';

const Home = () => {
  const { userGender, userType, loadingPreferences } = useProfile();
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  const vimeoEmbed = getVimeoEmbed(userGender, userType, true);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-0">
        {/* Hero Section */}
        <section id="hero" className="relative">
          <div className="w-full bg-black min-h-[calc(100vw*9/16)] relative">
            <div dangerouslySetInnerHTML={{ __html: vimeoEmbed }} />
          </div>
          
          <div className="w-full bg-black py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-white text-xl md:text-2xl font-swiss uppercase mb-4">
                {t('home.welcome')}
              </h1>
              <p className="text-white text-xl md:text-2xl opacity-90 font-swiss max-w-3xl drop-shadow-md">
                {getWelcomeMessage(userType, t)}
              </p>
              
              <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Link 
                  to="/method" 
                  className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
                >
                  {t('home.button')}
                </Link>
                <Link 
                  to="/programs" 
                  className="bg-ath-clay text-white px-8 py-3 rounded-full font-medium hover:bg-ath-clay/90 transition-colors"
                >
                  {t('home.programs')}
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Programs Section */}
        <section id="programs" className="py-16 bg-ath-gray">
          <div className="container mx-auto px-4">
            <RevealAnimation>
              <h2 className="text-3xl font-display text-center mb-8">{t('home.programs')}</h2>
            </RevealAnimation>
            <ProgramsSection categories={programCategories} categoryCollapsible={true} />
            <div className="text-center mt-8">
              <Link to="/programs" className="text-ath-clay font-medium hover:underline">
                {t('home.allPrograms')} →
              </Link>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <AboutSection 
          title="Il Vantaggio ATH"
          description="Ciò che distingue ATH è la nostra integrazione di tecnologia all'avanguardia con competenze di coaching di livello mondiale. Il nostro sistema VICKI™ cattura e analizza oltre 70 parametri delle tue prestazioni tennistiche, consentendo ai nostri coach di fornire un allenamento altamente personalizzato."
          image="https://images.unsplash.com/photo-1531315396756-905d68d21b56"
          buttons={[
            { text: 'Scopri di più', href: '/about' }
          ]}
        />
        
        {/* Testimonials Section */}
        <section id="testimonials" className="py-16">
          <div className="container mx-auto px-4">
            <RevealAnimation>
              <h2 className="text-3xl font-display text-center mb-8">{t('home.testimonials')}</h2>
            </RevealAnimation>
            <Testimonials />
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-16 bg-ath-clay">
          <div className="container mx-auto px-4">
            <RevealAnimation>
              <h2 className="text-3xl font-display text-center text-white mb-8">{t('home.contactUs')}</h2>
            </RevealAnimation>
            <ContactForm />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
