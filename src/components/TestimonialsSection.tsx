
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import RevealAnimation from './RevealAnimation';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
  image?: string;
}

interface TestimonialsSectionProps {
  title: string;
  subtitle?: string;
  testimonials: Testimonial[];
  className?: string;
  darkBg?: boolean;
}

const TestimonialsSection = ({ 
  title, 
  subtitle, 
  testimonials,
  className,
  darkBg = false
}: TestimonialsSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  return (
    <section className={cn(
      'py-20 px-6 lg:px-10', 
      darkBg ? 'bg-black text-white' : '',
      className
    )}>
      <div className="max-w-5xl mx-auto">
        <RevealAnimation>
          <h2 className={cn(
            "text-3xl md:text-4xl font-display text-center mb-4",
            darkBg ? 'text-white' : ''
          )}>
            {title}
          </h2>
        </RevealAnimation>
        
        {subtitle && (
          <RevealAnimation delay={100}>
            <p className={cn(
              "text-lg max-w-3xl mx-auto text-center mb-12",
              darkBg ? 'text-gray-300' : 'text-gray-600'
            )}>
              {subtitle}
            </p>
          </RevealAnimation>
        )}
        
        <div className="relative">
          <div className="overflow-hidden py-10">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 flex flex-col items-center px-6"
                >
                  <div className="relative mb-10">
                    <Quote size={48} className={cn(
                      "absolute -top-4 -left-4 opacity-10",
                      darkBg ? 'text-white' : 'text-black'
                    )} />
                    <p className={cn(
                      "text-xl italic text-center relative z-10",
                      darkBg ? 'text-white' : ''
                    )}>
                      "{testimonial.quote}"
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    {testimonial.image && (
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <p className={cn(
                      "text-lg font-medium",
                      darkBg ? 'text-white' : ''
                    )}>
                      {testimonial.author}
                    </p>
                    {testimonial.role && (
                      <p className={darkBg ? 'text-gray-300' : 'text-gray-600'}>
                        {testimonial.role}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  index === activeIndex 
                    ? (darkBg ? 'bg-white' : 'bg-black') 
                    : (darkBg ? 'bg-gray-700' : 'bg-gray-300')
                )}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            className={cn(
              "absolute top-1/2 left-0 -translate-y-1/2 w-10 h-10 flex items-center justify-center",
              darkBg ? 'text-white hover:bg-white/10' : 'text-black hover:bg-black/5'
            )}
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            className={cn(
              "absolute top-1/2 right-0 -translate-y-1/2 w-10 h-10 flex items-center justify-center",
              darkBg ? 'text-white hover:bg-white/10' : 'text-black hover:bg-black/5'
            )}
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
