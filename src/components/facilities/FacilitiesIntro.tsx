
import { useLanguage } from '@/contexts/LanguageContext';

const FacilitiesIntro = () => {
  const { t } = useLanguage();
  
  return (
    <section className="pt-4 pb-8 px-6 lg:px-10 bg-white relative z-10" style={{ marginTop: '-1px' }}>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-swiss text-center mb-6">{t("facilities.main.title")}</h1>
        
        <div className="prose prose-lg max-w-4xl mx-auto mb-6">
          <p className="lead text-lg md:text-xl mb-4 font-swiss">
            {t("facilities.main.lead")}
          </p>
          
          <p className="font-swiss text-base md:text-lg">
            {t("facilities.main.description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesIntro;
