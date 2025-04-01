
import React from 'react';
import Hero from '@/components/Hero';
import VickiUnifiedBadge from '@/components/VickiUnifiedBadge';
import { createStandardVimeoEmbed } from '@/utils/videoUtils';

const PrivateProgramHeader = () => {
  return (
    <div className="relative">
      <Hero 
        title="Private Personal Coaching (13+ anni)"
        subtitle="Lezioni private con maestro e sparring per un'attenzione dedicata e un progresso accelerato"
        imageSrc="https://images.unsplash.com/photo-1588453251771-cd919ff14bee?q=80&w=2070&auto=format&fit=crop"
        vimeoEmbed={createStandardVimeoEmbed('1071002692?h=a2668fa56d')}
        buttons={[
          { text: 'PRENOTA UNA PROVA', href: '/contact' },
          { text: 'CONTATTACI', href: '/contact', variant: 'outline' }
        ]}
        contentPosition="left"
        overlayOpacity="medium"
      />
      
      {/* Black banner with claim text - matching Method page style */}
      <div className="w-full bg-black py-16 relative" style={{ height: '300px' }}>
        <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
          <div className="flex items-center mb-2">
            <h2 className="text-white text-lg font-display mr-3">PRIVATE PERSONAL COACHING (13+ ANNI):</h2>
            <p className="text-white text-lg font-swiss max-w-3xl">
              Lezioni private con maestro e sparring per atleti dai 13 anni in su, potenziate da VICKI™
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <VickiUnifiedBadge level="elite" className="bg-opacity-20 border-opacity-30 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateProgramHeader;
