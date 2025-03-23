
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsSection';
import TechnologySection from '@/components/TechnologySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import JoinRevolutionSection from '@/components/JoinRevolutionSection';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutPage = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const stats = [
    {
      id: '1',
      value: 6,
      label: t('about.stats.courts')
    },
    {
      id: '2',
      value: 70,
      suffix: '+',
      label: t('about.stats.parameters')
    },
    {
      id: '3',
      value: 500,
      suffix: '+',
      label: t('about.stats.members')
    },
    {
      id: '4',
      value: 1,
      label: t('about.stats.center')
    },
  ];

  const testimonials = [
    {
      id: '1',
      quote: t('about.testimonial1'),
      author: 'Emma Martins',
      role: t('about.testimonial1.role')
    },
    {
      id: '2',
      quote: t('about.testimonial2'),
      author: 'Michael Johnson',
      role: t('about.testimonial2.role')
    },
    {
      id: '3',
      quote: t('about.testimonial3'),
      author: 'Robert Chen',
      role: t('about.testimonial3.role')
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-20">
        <Hero 
          title={t('about.title')}
          subtitle={t('about.subtitle')}
          imageSrc="/lovable-uploads/da809888-483b-4b2c-8e57-6d1ec6aaa51c.png"
          buttons={[
            { text: t('about.contact'), href: '/contact' }
          ]}
          overlayOpacity="medium"
        />
        
        <AboutSection 
          title={t('about.center.title')}
          description={
            <div className="space-y-4">
              <p>{t('about.center.p1')}</p>
              <p>{t('about.center.p2')}</p>
              <p>{t('about.center.p3')}</p>
            </div>
          }
          image="https://images.unsplash.com/photo-1594381898411-846e7d193883"
          className="bg-white"
        />
        
        <StatsSection 
          stats={stats}
          darkBg={true}
        />
        
        <AboutSection 
          title={t('about.mission.title')}
          description={
            <div className="space-y-4">
              <p>{t('about.mission.p1')}</p>
              <p>{t('about.mission.p2')}</p>
              <p>{t('about.mission.p3')}</p>
            </div>
          }
          image="https://images.unsplash.com/photo-1596731498067-75a7107cac89"
          reversed={true}
        />
        
        <TechnologySection 
          title={t('tech.title')}
          subtitle={t('tech.subtitle')}
        />
        
        <JoinRevolutionSection />
        
        <TestimonialsSection 
          title={t('testimonials.title')}
          subtitle={t('testimonials.subtitle')}
          testimonials={testimonials}
        />
        
        <ContactSection 
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
          address={t('contact.ath.address')}
          phone={t('contact.ath.phone')}
          email={t('contact.ath.email')}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
