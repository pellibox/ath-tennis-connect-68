
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import RevealAnimation from '@/components/RevealAnimation';
import { UserGender, UserType, loadUserPreferences } from '@/components/UserTypeSelector';
import VickiMonitoringBadge from '@/components/VickiMonitoringBadge';
import VickiPoweredBadge from '@/components/VickiPoweredBadge';
import ContactSection from '@/components/ContactSection';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ButtonLink from '@/components/ButtonLink';
import VickiHeader from '@/components/technology/VickiHeader';

const ParentTutorProgram = () => {
  const { t } = useLanguage();
  const [userGender, setUserGender] = useState<UserGender | null>(null);
  const [userType, setUserType] = useState<UserType | null>(null);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Load user preferences
    const { gender, type } = loadUserPreferences();
    if (gender) setUserGender(gender);
    if (type) setUserType(type);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="relative">
          <Hero 
            title="Genitore/Tutor"
            subtitle="Programma di supporto per genitori e tutor di atleti tra i 6 e i 18 anni"
            imageSrc="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop"
            vimeoEmbed='<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068629360?h=46b5c52b31&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Parent Tutor Program"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
            buttons={[
              { text: 'RICHIEDI INFORMAZIONI', href: '/contact' },
              { text: 'CONTATTACI', href: '/contact', variant: 'outline' }
            ]}
            contentPosition="left"
            overlayOpacity="medium"
          />
          
          {/* Black banner with claim text */}
          <div className="w-full bg-black py-16 relative" style={{ height: '300px' }}>
            <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
              <h2 className="text-white text-lg font-display mb-4">PROGRAMMA GENITORE/TUTOR:</h2>
              <p className="text-white text-lg font-swiss max-w-3xl">
                Un percorso formativo specifico per supportare i genitori e i tutor nel delicato compito di accompagnare il giovane atleta nel suo sviluppo sportivo e personale, con strumenti e strategie basate sulla psicologia dello sport.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Badge variant="ath" className="text-white">Vicki™ report and stream</Badge>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-12">
            <RevealAnimation>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h2 className="text-3xl font-swiss">Genitore/Tutor (Giovani e Junior Agonisti 6-18 anni)</h2>
                <Badge variant="ath" className="text-white">Vicki™ report and stream</Badge>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="text-lg mb-6 font-swiss">Programma creato da mental coach specializzati per supportare correttamente l'atleta nel suo percorso formativo.</p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-4 font-swiss">
                Il ruolo dei genitori e dei tutor nello sviluppo sportivo dei giovani atleti è fondamentale. Questo programma
                è stato progettato per fornire agli adulti di riferimento tutti gli strumenti necessari per supportare i ragazzi
                nel loro percorso tennistico, creando un ambiente positivo e stimolante che bilanci ambizioni sportive e benessere psicofisico.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <p className="mb-4 font-swiss">
                Attraverso workshop periodici, incontri individuali e materiali formativi, i genitori e i tutor imparano 
                a gestire efficacemente le emozioni legate alle competizioni, a comunicare in modo costruttivo con i coach e,
                soprattutto, a mantenere un dialogo sano ed equilibrato con i giovani atleti. Il programma è incluso in tutti i
                percorsi Elite e Junior, riconoscendo l'importanza della sinergia tra famiglia e staff tecnico.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={250}>
              <p className="font-swiss mb-4">
                Grazie alla tecnologia VICKI™, i genitori hanno accesso a report semplificati e comprensibili che illustrano
                i progressi tecnici, fisici e mentali dei ragazzi. Questo approccio trasparente facilita la comunicazione e
                la collaborazione tra tutte le figure coinvolte nel percorso di crescita dell'atleta.
              </p>
            </RevealAnimation>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <RevealAnimation delay={300} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Caratteristiche del Programma</h3>
              <ul className="list-disc list-inside space-y-2 font-swiss">
                <li>Accesso a report semplici e leggibili con dati tecnici, fisici e mentali</li>
                <li>Possibilità di seguire in streaming allenamenti e partite</li>
                <li>Aggiornamenti regolari sull'evoluzione tecnica e psico-fisica dell'atleta</li>
                <li>Canali diretti con il coach per ricevere feedback e condividere obiettivi</li>
                <li>Analisi statistiche semplificate con visione d'insieme dell'andamento</li>
                <li>Supporto pratico per accompagnare il percorso sportivo senza pressioni</li>
                <li>Filtraggio automatico dei dati per evitare interpretazioni errate</li>
                <li>Workshop periodici con specialisti del settore</li>
                <li>Comunità di supporto tra genitori con esperienze simili</li>
              </ul>
            </RevealAnimation>
            
            <RevealAnimation delay={350} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Prezzo</h3>
              <div className="mb-4">
                <p className="text-3xl font-bold text-ath-clay">Incluso</p>
                <p className="text-sm text-gray-600">nei programmi Elite e Junior</p>
              </div>
              <div className="mb-4 p-4 bg-ath-clay/10 rounded-lg">
                <h4 className="text-sm font-semibold mb-2">Il programma include:</h4>
                <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                  <li>4 workshop formativi durante l'anno</li>
                  <li>2 incontri individuali con il mental coach</li>
                  <li>Accesso alla piattaforma Vicki™ per genitori</li>
                  <li>Materiali educativi e risorse dedicate</li>
                </ul>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Per i non iscritti ai programmi Elite e Junior, è disponibile un pacchetto separato. Contattaci per maggiori informazioni.
              </p>
              <ButtonLink 
                href="/contact" 
                showArrow={true}
              >
                Richiedi informazioni
              </ButtonLink>
            </RevealAnimation>
          </div>
          
          <RevealAnimation delay={400}>
            <div className="bg-ath-clay/5 border border-ath-clay/20 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-display mb-4 text-ath-clay">I Benefici del Programma Genitore/Tutor</h3>
              <p className="mb-4">Il nostro programma offre numerosi vantaggi sia per i genitori che per i giovani atleti:</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Miglioramento della comunicazione genitore-atleta</li>
                <li>Comprensione approfondita del percorso tennistico</li>
                <li>Gestione efficace dello stress competitivo</li>
                <li>Creazione di un ambiente di supporto ottimale</li>
                <li>Equilibrio tra ambizioni sportive e benessere generale</li>
                <li>Costruzione di una collaborazione positiva con i coach</li>
              </ul>
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-ath-clay text-white py-2 px-6 rounded hover:bg-ath-clay/90 transition-colors"
              >
                Contattaci per maggiori informazioni <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </RevealAnimation>
          
          <RevealAnimation delay={450}>
            <div className="text-center">
              <h3 className="text-2xl font-display mb-6">Programmi Correlati</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link to="/programs/sat" className="block p-6 border border-gray-200 rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                  <h4 className="text-lg font-medium mb-2">SAT - Agonista Junior</h4>
                  <p className="text-gray-600 mb-3">Programma formativo per giovani atleti in fase di sviluppo tecnico e fisico (6-12 anni).</p>
                  <span className="inline-flex items-center text-ath-clay">Scopri <ArrowRight size={14} className="ml-1" /></span>
                </Link>
                <Link to="/programs/young-athletes" className="block p-6 border border-gray-200 rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                  <h4 className="text-lg font-medium mb-2">Performance 4</h4>
                  <p className="text-gray-600 mb-3">Programma intensivo con 4 giorni di allenamento settimanale per giovani atleti agonisti.</p>
                  <span className="inline-flex items-center text-ath-clay">Scopri <ArrowRight size={14} className="ml-1" /></span>
                </Link>
                <Link to="/programs/talent-identification" className="block p-6 border border-gray-200 rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                  <h4 className="text-lg font-medium mb-2">SIT - Scuola Individuazione Talenti</h4>
                  <p className="text-gray-600 mb-3">Programma specializzato per l'identificazione precoce dei talenti tennistici (4-10 anni).</p>
                  <span className="inline-flex items-center text-ath-clay">Scopri <ArrowRight size={14} className="ml-1" /></span>
                </Link>
              </div>
            </div>
          </RevealAnimation>
        </div>
        
        <RevealAnimation>
          <div className="bg-gray-50 py-16 px-6">
            <div className="max-w-6xl mx-auto">
              <VickiHeader 
                title="Il supporto tecnologico per i genitori" 
                subtitle="Monitoraggio e comunicazione avanzati"
              />
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Report semplificati</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Visualizzazione chiara e comprensibile dei dati tecnici, fisici e mentali dell'atleta, con focus sui progressi e sulle aree di miglioramento.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Streaming delle sessioni</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Possibilità di seguire in diretta o in differita gli allenamenti e le partite, con accesso a statistiche e analisi in tempo reale.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Comunicazione diretta</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Canale privilegiato di comunicazione con il team tecnico, per aggiornamenti costanti e allineamento sugli obiettivi dell'atleta.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </RevealAnimation>
        
        <ContactSection 
          title="Vuoi saperne di più?" 
          subtitle="Contattaci per informazioni sul programma Genitore/Tutor"
          address="Via F. Turati, 9, 20090 Rodano MI, Italia"
          email="info@ath.tennis"
          phone="+39 02 1234567"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default ParentTutorProgram;
