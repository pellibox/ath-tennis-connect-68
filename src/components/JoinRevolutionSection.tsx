
import RevealAnimation from './RevealAnimation';
import ButtonLink from './ButtonLink';
import { cn } from '@/lib/utils';

interface JoinRevolutionSectionProps {
  className?: string;
}

const JoinRevolutionSection = ({ className }: JoinRevolutionSectionProps) => {
  return (
    <section className={cn('py-20 px-6 lg:px-10 bg-black text-white', className)}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <RevealAnimation direction="left">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display leading-tight">
              Unisciti alla Rivoluzione ATH
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Entra a far parte di una comunità esclusiva che ridefinisce gli standard 
              del tennis moderno. Con tecnologia all'avanguardia, metodologie avanzate e 
              un team di professionisti dedicati, ATH rappresenta il futuro dell'allenamento 
              tennistico.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Scopri come la tecnologia Vicki™ e il nostro approccio personalizzato 
              possono sbloccare il tuo potenziale nascosto, indipendentemente dal tuo 
              livello attuale.
            </p>
            <div className="pt-4">
              <ButtonLink href="/contact" variant="primary" className="text-lg px-8 py-3">
                Inizia il tuo percorso
              </ButtonLink>
            </div>
          </div>
        </RevealAnimation>
        
        <RevealAnimation direction="right">
          <div className="relative h-[500px] overflow-hidden rounded-lg">
            <img 
              src="/lovable-uploads/64a7dd92-5d3e-4cd9-b5b6-6f3352657b66.png" 
              alt="Rivoluzione ATH" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default JoinRevolutionSection;
