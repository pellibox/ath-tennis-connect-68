
import React from 'react';
import { Trophy, LineChart, Users, LayoutGrid, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import ButtonLink from '@/components/ButtonLink';
import { useLanguage } from '@/contexts/LanguageContext';

const KeyFeaturesSection = () => {
  const { t } = useLanguage();

  const keyFeatures = [
    {
      icon: <Trophy className="w-10 h-10 text-ath-clay" />,
      title: t('home.keyFeatures.excellence'),
      description: t('home.keyFeatures.excellenceDesc'),
      link: "/method"
    },
    {
      icon: <LineChart className="w-10 h-10 text-ath-clay" />,
      title: t('home.keyFeatures.analysis'),
      description: t('home.keyFeatures.analysisDesc'),
      link: "/technology"
    },
    {
      icon: <Users className="w-10 h-10 text-ath-clay" />,
      title: t('home.keyFeatures.team'),
      description: t('home.keyFeatures.teamDesc'),
      link: "/coaches"
    },
    {
      icon: <LayoutGrid className="w-10 h-10 text-ath-clay" />,
      title: t('home.keyFeatures.facilities'),
      description: t('home.keyFeatures.facilitiesDesc'),
      link: "/facilities"
    }
  ];

  return (
    <div className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display text-center mb-12">
          {t('home.keyFeatures.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyFeatures.map((feature, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow border-ath-clay/20 hover:border-ath-clay">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 bg-ath-clay/5 p-4 rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-ath-clay font-swiss">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4 font-swiss">
                    {feature.description}
                  </p>
                  <ButtonLink 
                    href={feature.link} 
                    variant="outline" 
                    size="sm"
                    className="mt-2"
                  >
                    {t('home.keyFeatures.learnMore')} <ArrowRight className="ml-1 w-4 h-4 inline" />
                  </ButtonLink>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyFeaturesSection;
