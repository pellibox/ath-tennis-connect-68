
import React from 'react';
import RevealAnimation from '@/components/RevealAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

const MultisportExplanation = () => {
  const { t } = useLanguage();
  
  return (
    <RevealAnimation>
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-12">
        <h2 className="text-2xl font-bold mb-4 font-swiss">{t('multisport.title')}</h2>
        
        <h3 className="text-xl font-semibold mt-6 mb-3 font-swiss">{t('multisport.why')}</h3>
        <p className="text-gray-700 mb-4 font-swiss">
          {t('multisport.whyDesc')}
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3 font-swiss">{t('multisport.advantages')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2 font-swiss">{t('multisport.forTennis')}</h4>
            <p className="text-gray-700 font-swiss">
              {t('multisport.forTennisDesc')}
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2 font-swiss">{t('multisport.forOthers')}</h4>
            <p className="text-gray-700 font-swiss">
              {t('multisport.forOthersDesc')}
            </p>
            <ul className="list-disc ml-5 mt-2 text-gray-700 font-swiss">
              <li>{t('multisport.padelBenefit')}</li>
              <li>{t('multisport.pickleballBenefit')}</li>
              <li>{t('multisport.touchtennisBenefit')}</li>
            </ul>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mt-6 mb-3 font-swiss">{t('multisport.howExcellence')}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2 font-swiss">{t('multisport.specializedTeam')}</h4>
            <p className="text-sm text-gray-700 font-swiss">{t('multisport.specializedTeamDesc')}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2 font-swiss">{t('multisport.scientificMethod')}</h4>
            <p className="text-sm text-gray-700 font-swiss">{t('multisport.scientificMethodDesc')}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2 font-swiss">{t('multisport.advancedAnalysis')}</h4>
            <p className="text-sm text-gray-700 font-swiss">{t('multisport.advancedAnalysisDesc')}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2 font-swiss">{t('multisport.personalizedPaths')}</h4>
            <p className="text-sm text-gray-700 font-swiss">{t('multisport.personalizedPathsDesc')}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2 font-swiss">{t('multisport.continuousInnovation')}</h4>
            <p className="text-sm text-gray-700 font-swiss">{t('multisport.continuousInnovationDesc')}</p>
          </div>
        </div>
        
        <div className="mt-6 text-center text-gray-700 italic font-swiss">
          {t('multisport.conclusion')}
        </div>
      </div>
    </RevealAnimation>
  );
};

export default MultisportExplanation;
