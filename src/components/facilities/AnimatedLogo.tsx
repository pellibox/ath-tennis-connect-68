import StandardHeroVideo from '@/components/StandardHeroVideo';

const AnimatedLogo = () => {
  // This component is now obsolete since we're using StandardHeroVideo
  // We'll keep it as a wrapper around StandardHeroVideo for backward compatibility
  return <StandardHeroVideo vimeoEmbed="" />;
};

export default AnimatedLogo;
