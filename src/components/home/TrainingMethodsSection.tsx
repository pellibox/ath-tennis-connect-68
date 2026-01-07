
import React from 'react';
import ButtonLink from '@/components/ButtonLink';
import { useLanguage } from '@/contexts/LanguageContext';

const TrainingMethodsSection = () => {
  const { t } = useLanguage();

  const trainingMethods = [
    {
      title: t('home.training.method'),
      description: t('home.training.methodDesc'),
      image: "/lovable-uploads/fc6643c2-4357-4c86-9e52-6f33d698668f.png",
      link: "/method"
    },
    {
      title: t('home.training.technology'),
      description: t('home.training.technologyDesc'),
      image: "/lovable-uploads/8f2b30a1-cb65-453e-ba82-d9721a192426.png",
      link: "/technology"
    },
    {
      title: t('home.training.programs'),
      description: t('home.training.programsDesc'),
      image: "/lovable-uploads/ef64c04d-055d-4d70-87f4-e67928a3b8e6.png",
      link: "/programs"
    },
    {
      title: t('home.training.structure'),
      description: t('home.training.structureDesc'),
      image: "/lovable-uploads/c4c120e8-c90d-48a3-933c-d4cce08b5129.png",
      link: "/facilities"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display text-center mb-12">
          {t('home.training.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainingMethods.map((method, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg h-[360px] hover:shadow-xl transition-all">
              <img 
                src={method.image} 
                alt={method.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/20" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h4 className="text-2xl font-display mb-3">{method.title}</h4>
                <p className="mb-4 text-gray-200 text-sm">{method.description}</p>
                <ButtonLink 
                  href={method.link} 
                  variant="primary"
                  size="sm"
                  className="mt-2"
                >
                  {t('home.training.learnMore')}
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingMethodsSection;
