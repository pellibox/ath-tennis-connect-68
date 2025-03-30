
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import RevealAnimation from './RevealAnimation';

// Sample testimonial data - in a real app this would come from an API or props
const testimonialData = [
  {
    id: '1',
    text: "ATH ha trasformato completamente il mio approccio al tennis. La tecnologia VICKI™ ha identificato pattern nel mio gioco che non avrei mai notato. In soli tre mesi, ho migliorato significativamente il mio rovescio e la mia strategia in campo.",
    author: "Marco Bianchi",
    role: "Tennista Competitivo"
  },
  {
    id: '2',
    text: "Come genitore, apprezzo enormemente la trasparenza e i feedback dettagliati che ATH fornisce sul progresso di mia figlia. Il suo coach può mostrarmi esattamente su cosa stanno lavorando e perché, rendendo tutto il processo molto più chiaro.",
    author: "Laura Romano",
    role: "Genitore di Junior"
  },
  {
    id: '3',
    text: "La differenza con l'allenamento tradizionale è impressionante. Ogni sessione è precisamente calibrata per le mie esigenze, e posso vedere miglioramenti misurabili settimana dopo settimana. Questo approccio basato sui dati è rivoluzionario.",
    author: "Giovanni Rossi",
    role: "Tennista Amatoriale"
  }
];

const Testimonials = () => {
  const { t } = useLanguage();
  
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {testimonialData.map((testimonial, index) => (
        <RevealAnimation key={testimonial.id} delay={index * 100}>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="italic mb-4">&ldquo;{testimonial.text}&rdquo;</p>
            <div>
              <p className="font-medium">{testimonial.author}</p>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
            </div>
          </div>
        </RevealAnimation>
      ))}
    </div>
  );
};

export default Testimonials;
