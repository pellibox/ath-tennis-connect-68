import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ProgramsSection from '@/components/ProgramsSection';
import CoachesSection from '@/components/CoachesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import StatsSection from '@/components/StatsSection';
import FacilitiesSection from '@/components/FacilitiesSection';
import ContactSection from '@/components/ContactSection';
import TechnologySection from '@/components/TechnologySection';

const HomePage = () => {
  // Smooth scroll functionality
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Sample data for programs
  const programs = [
    {
      id: '1',
      title: 'Junior Academy',
      description: 'Comprehensive training program for players aged 8-18 who want to develop their skills and compete at a high level.',
      image: 'https://images.unsplash.com/photo-1551773148-efc73c5fdc70',
      link: '/programs/junior'
    },
    {
      id: '2',
      title: 'Elite Program',
      description: 'Intensive training for advanced players with professional aspirations, focusing on technical, tactical, physical, and mental aspects.',
      image: 'https://images.unsplash.com/photo-1542144582-1ba00456b5e3',
      link: '/programs/elite'
    },
    {
      id: '3',
      title: 'Adult Training',
      description: 'Programs for players of all levels who want to improve their skills, stay fit, and enjoy the game of tennis.',
      image: 'https://images.unsplash.com/photo-1622279888158-c6a5e6c4587c',
      link: '/programs/adult'
    },
  ];

  // Sample data for coaches
  const coaches = [
    {
      id: '1',
      name: 'Marco Rossi',
      title: 'Head Coach',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136',
      bio: '15+ years of professional coaching experience. Former top 100 ATP player.'
    },
    {
      id: '2',
      name: 'Sofia Garcia',
      title: 'Junior Development Coach',
      image: 'https://images.unsplash.com/photo-1615109398623-88346a601842',
      bio: 'Specializes in developing junior players. Former WTA player.'
    },
    {
      id: '3',
      name: 'David Chen',
      title: 'Fitness Coach',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
      bio: 'Expert in sports-specific strength and conditioning for tennis players.'
    },
  ];

  // Sample data for testimonials
  const testimonials = [
    {
      id: '1',
      quote: "ATH has transformed my game. The coaches provide personalized attention, and the facilities are world-class. I've improved more in one year here than in five years elsewhere.",
      author: 'Emma Martins',
      role: 'Junior Player, 16'
    },
    {
      id: '2',
      quote: "The professional approach at ATH is unmatched. They've helped me not just technically, but mentally and physically as well. It's a complete tennis development ecosystem.",
      author: 'Michael Johnson',
      role: 'Professional Player'
    },
    {
      id: '3',
      quote: 'As a recreational player, I never thought I could improve so much at my age. The adult program is fantastic - challenging but also enjoyable and social.',
      author: 'Robert Chen',
      role: 'Adult Program Member'
    },
  ];

  // Sample data for stats
  const stats = [
    {
      id: '1',
      value: 35,
      label: 'Courts'
    },
    {
      id: '2',
      value: 25,
      label: 'Professional Coaches'
    },
    {
      id: '3',
      value: 500,
      suffix: '+',
      label: 'Active Members'
    },
    {
      id: '4',
      value: 15,
      label: 'Champions Produced'
    },
  ];

  // Sample data for facilities
  const facilities = [
    {
      id: '1',
      title: 'State-of-the-Art Courts',
      description: 'Our academy features 35 courts with different surfaces including hard courts, clay courts, and indoor courts. All are maintained to professional tournament standards daily.',
      image: 'https://images.unsplash.com/photo-1572184076489-15d7a6e17c16'
    },
    {
      id: '2',
      title: 'Performance Center',
      description: 'Our high-tech performance center includes a fully equipped gym, recovery areas, video analysis rooms, and sports science facilities for comprehensive athlete development.',
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f'
    },
    {
      id: '3',
      title: 'Player Lounge & Accommodation',
      description: 'Comfortable spaces for players to relax, study, and socialize. For visiting players, we offer on-site accommodation with all the amenities needed for a comfortable stay.',
      image: 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0'
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero 
          title="Excel at Every Level" 
          subtitle="World-class tennis training for players of all ages and abilities"
          imageSrc="https://images.unsplash.com/photo-1622279488666-c3fcf91fd206"
          buttons={[
            { text: 'OUR PROGRAMS', href: '/programs' },
            { text: 'BOOK A TRIAL', href: '/contact', variant: 'outline' }
          ]}
        />
        
        <AboutSection 
          title="About ATH Tennis Hub"
          subtitle="OUR STORY"
          description={
            <div className="space-y-4">
              <p>
                ATH Advanced Tennis Hub was founded with a simple mission: to create the perfect environment for tennis players to reach their full potential, regardless of their starting point or ultimate goals.
              </p>
              <p>
                What sets us apart is our individualized approach. We recognize that every player is unique, with different strengths, weaknesses, and aspirations. Our methodology adapts to each player's profile, ensuring optimal development and progress.
              </p>
              <p>
                With world-class facilities and an elite coaching team, we deliver a comprehensive program that addresses all aspects of the modern game: technical, tactical, physical, and mental.
              </p>
            </div>
          }
          image="https://images.unsplash.com/photo-1617711773026-ea7252c02cd3"
          buttons={[
            { text: 'LEARN MORE', href: '/about' }
          ]}
        />
        
        <ProgramsSection 
          title="Our Programs"
          subtitle="Tailored tennis training for every age and skill level"
          programs={programs}
        />
        
        <StatsSection 
          stats={stats}
          darkBg={true}
        />
        
        <TechnologySection 
          title="The ATH Technology Advantage"
          subtitle="Our innovative technology system integrates advanced analytics and AI to revolutionize tennis training"
        />
        
        <FacilitiesSection 
          title="World-Class Facilities"
          subtitle="Experience the perfect environment for tennis excellence"
          facilities={facilities}
        />
        
        <CoachesSection 
          title="Expert Coaching Team"
          subtitle="Learn from the best minds in tennis"
          coaches={coaches}
        />
        
        <TestimonialsSection 
          title="Success Stories"
          subtitle="Hear from our players and parents"
          testimonials={testimonials}
        />
        
        <AboutSection 
          title="Join Our Elite Tennis Community"
          description="Take the first step towards tennis excellence. Join ATH Advanced Tennis Hub and experience the difference our world-class facilities, expert coaching, and personalized approach can make to your game."
          image="https://images.unsplash.com/photo-1518005068251-37900150dfca"
          buttons={[
            { text: 'START YOUR JOURNEY', href: '/contact' }
          ]}
          reversed={true}
        />
        
        <ContactSection 
          title="Get in Touch"
          subtitle="We'd love to hear from you. Contact us with any questions or to schedule a visit."
          address="123 Tennis Court Avenue, Tennis City, 10001"
          phone="+1 (234) 567-890"
          email="info@ath-tennis.com"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
