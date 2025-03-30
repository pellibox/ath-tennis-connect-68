
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import RevealAnimation from './RevealAnimation';

const Testimonials = () => {
  const { t } = useLanguage();
  
  // Use translation keys for testimonials
  const testimonialData = [
    {
      id: '1',
      textKey: "testimonials.quote1",
      authorKey: "testimonials.author1",
      roleKey: "testimonials.role1"
    },
    {
      id: '2',
      textKey: "testimonials.quote2",
      authorKey: "testimonials.author2",
      roleKey: "testimonials.role2"
    },
    {
      id: '3',
      textKey: "testimonials.quote3",
      authorKey: "testimonials.author3",
      roleKey: "testimonials.role3"
    }
  ];
  
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {testimonialData.map((testimonial, index) => (
        <RevealAnimation key={testimonial.id} delay={index * 100}>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="italic mb-4">&ldquo;{t(testimonial.textKey)}&rdquo;</p>
            <div>
              <p className="font-medium">{t(testimonial.authorKey)}</p>
              <p className="text-sm text-gray-600">{t(testimonial.roleKey)}</p>
            </div>
          </div>
        </RevealAnimation>
      ))}
    </div>
  );
};

export default Testimonials;
