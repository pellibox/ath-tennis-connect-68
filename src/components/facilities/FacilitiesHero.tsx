
import { useIsMobile } from '@/hooks/use-mobile';

interface FacilitiesHeroProps {
  vimeoEmbed: string;
}

const FacilitiesHero = ({ vimeoEmbed }: FacilitiesHeroProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="relative w-full overflow-hidden" style={{ 
      height: isMobile ? '40vh' : '100vh', 
      marginBottom: '-4px',
      marginLeft: '0',
      marginRight: '0',
      width: '100vw',
      maxWidth: '100vw',
      left: '0',
      right: '0',
      position: 'relative'
    }}>
      <div className="absolute inset-0 w-full h-full"
           dangerouslySetInnerHTML={{ __html: vimeoEmbed }} 
      />
    </div>
  );
};

export default FacilitiesHero;
