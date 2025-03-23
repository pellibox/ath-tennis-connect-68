
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ProgramsSection from '@/components/ProgramsSection';
import AboutSection from '@/components/AboutSection';
import RevealAnimation from '@/components/RevealAnimation';
import ContactSection from '@/components/ContactSection';
import { Link } from 'react-router-dom';

const Programs = () => {
  // Smooth scroll functionality
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Programs data
  const featuredPrograms = [
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

  // Additional programs data
  const additionalPrograms = [
    {
      id: '4',
      title: 'Summer Camps',
      description: 'Intensive 1-4 week programs for players of all ages and levels, combining tennis training with fun activities.',
      image: 'https://images.unsplash.com/photo-1606131731446-5568d87113aa',
      link: '/programs/camps'
    },
    {
      id: '5',
      title: 'Private Coaching',
      description: 'One-on-one sessions with our expert coaches, tailored to your specific needs and goals.',
      image: 'https://images.unsplash.com/photo-1599586120429-48281b6f0ece',
      link: '/programs/private'
    },
    {
      id: '6',
      title: 'Performance Analysis',
      description: 'Using our advanced technology, we provide comprehensive analysis of your game to identify strengths and areas for improvement.',
      image: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29',
      link: '/programs/analysis'
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero 
          title="Our Tennis Programs" 
          subtitle="Comprehensive training solutions tailored to your goals"
          imageSrc="https://images.unsplash.com/photo-1464278533981-50e57c2b7d1b"
          buttons={[
            { text: 'BOOK A TRIAL', href: '/contact' },
            { text: 'CONTACT US', href: '/contact', variant: 'outline' }
          ]}
          contentPosition="left"
          overlayOpacity="medium"
        />
        
        <section className="py-20 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <RevealAnimation>
              <h2 className="text-3xl md:text-4xl font-display mb-4">ATH Methodology</h2>
            </RevealAnimation>
            
            <RevealAnimation delay={100}>
              <p className="text-lg text-gray-600 max-w-3xl mb-12">
                At ATH, we integrate advanced technology with expert human coaching. Our proprietary system monitors over 70 parameters of tennis performance to provide detailed analysis and customized training programs.
              </p>
            </RevealAnimation>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <RevealAnimation delay={150} className="bg-white p-8 shadow-sm">
                <h3 className="text-xl font-medium mb-4">Technical Development</h3>
                <p className="text-gray-600">Our coaches use advanced video analysis and real-time feedback to refine your technique across all strokes.</p>
              </RevealAnimation>
              
              <RevealAnimation delay={200} className="bg-white p-8 shadow-sm">
                <h3 className="text-xl font-medium mb-4">Physical Conditioning</h3>
                <p className="text-gray-600">Customized fitness programs designed specifically for tennis, focusing on speed, agility, strength, and endurance.</p>
              </RevealAnimation>
              
              <RevealAnimation delay={250} className="bg-white p-8 shadow-sm">
                <h3 className="text-xl font-medium mb-4">Mental Training</h3>
                <p className="text-gray-600">Develop mental toughness, focus, and strategic thinking with our specialized psychological training methods.</p>
              </RevealAnimation>
            </div>
          </div>
        </section>
        
        <ProgramsSection 
          title="Featured Programs"
          subtitle="Discover our core training offerings"
          programs={featuredPrograms}
          className="bg-ath-gray"
        />
        
        <ProgramsSection 
          title="Specialized Programs"
          subtitle="Additional training options to complement your development"
          programs={additionalPrograms}
        />
        
        <AboutSection 
          title="The ATH Difference"
          description={
            <div className="space-y-4">
              <p>
                What sets ATH apart is our integration of cutting-edge technology with world-class coaching expertise. Our sophisticated system captures and analyzes over 70 parameters of your tennis performance, allowing our coaches to provide highly personalized training.
              </p>
              <p>
                This data-driven approach eliminates guesswork and ensures that every minute of your training is optimized for maximum improvement. Whether you're a beginner or an elite player, our methodology adapts to your unique needs and goals.
              </p>
              <p>
                Join the revolution in tennis training and experience the results that have made ATH the choice of recreational players and champions alike.
              </p>
            </div>
          }
          image="https://images.unsplash.com/photo-1531315396756-905d68d21b56"
          buttons={[
            { text: 'BOOK A TRIAL', href: '/contact' }
          ]}
          reversed={true}
        />
        
        <section className="py-20 px-6 lg:px-10 bg-ath-gray">
          <div className="max-w-7xl mx-auto">
            <RevealAnimation>
              <h2 className="text-3xl md:text-4xl font-display text-center mb-4">Program Pricing</h2>
            </RevealAnimation>
            
            <RevealAnimation delay={100}>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
                We offer flexible pricing options to suit different needs and commitments.
              </p>
            </RevealAnimation>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <RevealAnimation delay={150} className="bg-white p-8 flex flex-col shadow-sm">
                <h3 className="text-xl font-medium mb-4">Monthly Membership</h3>
                <div className="text-3xl font-bold mb-2">€250<span className="text-sm font-normal">/month</span></div>
                <p className="text-gray-600 mb-6">Access to group training sessions and facilities.</p>
                <ul className="space-y-2 mb-8 flex-grow">
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>3 group sessions per week</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>Basic performance analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>Access to fitness center</span>
                  </li>
                </ul>
                <Link to="/contact" className="mt-auto px-6 py-3 bg-black text-white text-center hover:bg-opacity-90 transition-all">
                  JOIN NOW
                </Link>
              </RevealAnimation>
              
              <RevealAnimation delay={200} className="bg-white p-8 flex flex-col shadow-md relative">
                <div className="absolute top-0 right-0 bg-black text-white px-4 py-1 text-sm">
                  POPULAR
                </div>
                <h3 className="text-xl font-medium mb-4">Premium Membership</h3>
                <div className="text-3xl font-bold mb-2">€450<span className="text-sm font-normal">/month</span></div>
                <p className="text-gray-600 mb-6">Enhanced training with personalized attention.</p>
                <ul className="space-y-2 mb-8 flex-grow">
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>5 group sessions per week</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>2 private coaching sessions monthly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>Advanced performance analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>Full access to all facilities</span>
                  </li>
                </ul>
                <Link to="/contact" className="mt-auto px-6 py-3 bg-black text-white text-center hover:bg-opacity-90 transition-all">
                  JOIN NOW
                </Link>
              </RevealAnimation>
              
              <RevealAnimation delay={250} className="bg-white p-8 flex flex-col shadow-sm">
                <h3 className="text-xl font-medium mb-4">Elite Membership</h3>
                <div className="text-3xl font-bold mb-2">€950<span className="text-sm font-normal">/month</span></div>
                <p className="text-gray-600 mb-6">Comprehensive program for serious players.</p>
                <ul className="space-y-2 mb-8 flex-grow">
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>Unlimited group sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>Weekly private coaching</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>Personalized development plan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>Mental coaching sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>Tournament support</span>
                  </li>
                </ul>
                <Link to="/contact" className="mt-auto px-6 py-3 bg-black text-white text-center hover:bg-opacity-90 transition-all">
                  JOIN NOW
                </Link>
              </RevealAnimation>
            </div>
          </div>
        </section>
        
        <ContactSection 
          title="Ready to Start?"
          subtitle="Contact us to learn more about our programs or to schedule an assessment."
          address="123 Tennis Court Avenue, Tennis City, 10001"
          phone="+1 (234) 567-890"
          email="info@ath-tennis.com"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Programs;
