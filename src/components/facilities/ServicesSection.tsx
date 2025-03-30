
import RevealAnimation from '../RevealAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

interface ServiceItemProps {
  title: string;
  description: string;
}

const ServiceItem = ({ title, description }: ServiceItemProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-3 font-swiss">{title}</h3>
      <p className="text-gray-700 font-swiss text-base">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      title: t("facilities.services.courts.title"),
      description: t("facilities.services.courts.description")
    },
    {
      title: t("facilities.services.premium.title"),
      description: t("facilities.services.premium.description")
    },
    {
      title: t("facilities.services.clinics.title"),
      description: t("facilities.services.clinics.description")
    },
    {
      title: t("facilities.services.evaluation.title"),
      description: t("facilities.services.evaluation.description")
    },
    {
      title: t("facilities.services.events.title"),
      description: t("facilities.services.events.description")
    },
    {
      title: t("facilities.services.courses.title"),
      description: t("facilities.services.courses.description")
    }
  ];

  return (
    <section className="py-12 px-6 lg:px-10 bg-gray-50 relative z-10">
      <div className="max-w-7xl mx-auto">
        <RevealAnimation>
          <h2 className="text-3xl md:text-4xl font-swiss text-center mb-8">{t("facilities.services.title")}</h2>
        </RevealAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <RevealAnimation key={index} delay={index * 100}>
              <ServiceItem 
                title={service.title} 
                description={service.description} 
              />
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
