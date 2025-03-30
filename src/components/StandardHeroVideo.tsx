
import { useLanguage } from '@/contexts/LanguageContext';

interface StandardHeroVideoProps {
  vimeoEmbed: string;
  title?: string;
  subtitle?: string;
  titleKey?: string;
  subtitleKey?: string;
  showLogo?: boolean;
}

const StandardHeroVideo = ({ 
  vimeoEmbed, 
  title = "", 
  subtitle = "",
  titleKey,
  subtitleKey,
  showLogo
}: StandardHeroVideoProps) => {
  const { t } = useLanguage();
  
  return (
    <>
      <div className="w-full bg-black min-h-[calc(100vw*9/16)] relative">
        <div dangerouslySetInnerHTML={{ __html: vimeoEmbed }} />
      </div>
      
      {(title || subtitle || titleKey || subtitleKey) && (
        <div className="w-full bg-black py-16">
          <div className="max-w-3xl mx-auto text-center">
            {(title || titleKey) && (
              <h2 className="text-white text-xl md:text-2xl font-swiss uppercase mb-2">
                {titleKey ? t(titleKey) : title}
              </h2>
            )}
            {(subtitle || subtitleKey) && (
              <p className="text-white text-xl md:text-2xl opacity-90 font-swiss drop-shadow-md">
                {subtitleKey ? t(subtitleKey) : subtitle}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default StandardHeroVideo;
