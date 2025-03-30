
import StandardHeroVideo from '@/components/StandardHeroVideo';

const AnimatedLogo = () => {
  // This component is now a proper wrapper that just returns StandardHeroVideo
  // We're not passing a vimeoEmbed because the Facilities page will handle that
  return <StandardHeroVideo vimeoEmbed="" />;
};

export default AnimatedLogo;
