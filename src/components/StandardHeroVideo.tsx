
import { useLanguage } from '@/contexts/LanguageContext';

interface StandardHeroVideoProps {
  vimeoEmbed: string;
  title: string;
  subtitle: string;
  titleKey?: string;
  subtitleKey?: string;
}

const StandardHeroVideo = ({ 
  vimeoEmbed, 
  title, 
  subtitle,
  titleKey,
  subtitleKey
}: StandardHeroVideoProps) => {
  const { t } = useLanguage();
  
  return (
    <>
      <div className="w-full bg-black min-h-[calc(100vw*9/16)] relative">
        <div dangerouslySetInnerHTML={{ __html: vimeoEmbed }} />
      </div>
      
      <div className="w-full bg-black py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white text-xl md:text-2xl font-swiss uppercase mb-2">
            {titleKey ? t(titleKey) : title}
          </h2>
          <p className="text-white text-xl md:text-2xl opacity-90 font-swiss drop-shadow-md">
            {subtitleKey ? t(subtitleKey) : subtitle}
          </p>
        </div>
      </div>
    </>
  );
};

export default StandardHeroVideo;
