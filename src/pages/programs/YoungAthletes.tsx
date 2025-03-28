
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from 'react-router-dom';

const YoungAthletesProgram = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link to="/" className="text-gray-600 hover:text-ath-clay">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <Link to="/programs" className="text-gray-600 hover:text-ath-clay">Programmi</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Agonisti Performance (13+ anni)</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="prose max-w-none">
            <h1 className="text-3xl font-bold mb-8">Agonisti Performance (13+ anni)</h1>
            
            <div className="bg-white rounded-xl shadow-md p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">Programma Formativo per Giovani Atleti</h2>
              <p className="mb-4">
                Il programma Agonisti Performance è pensato per giovani atleti dai 13 anni in su che sono in fase di sviluppo tecnico e fisico, pronti per affrontare competizioni di livello sempre più elevato.
              </p>
              <p className="mb-6">
                Attraverso un approccio strutturato e personalizzato, aiutiamo i giocatori a sviluppare le proprie capacità tecniche, tattiche, fisiche e mentali, preparandoli per una carriera agonistica di successo.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Caratteristiche del Programma</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Allenamenti intensivi con coach specializzati</li>
                    <li>Pianificazione personalizzata delle competizioni</li>
                    <li>Analisi tecnica con tecnologia VICKI™</li>
                    <li>Preparazione fisica specifica per il tennis</li>
                    <li>Supporto per la gestione mentale delle competizioni</li>
                    <li>Feedback dettagliati e piani di miglioramento continui</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Obiettivi</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Perfezionamento tecnico avanzato</li>
                    <li>Sviluppo di uno stile di gioco personale</li>
                    <li>Potenziamento della resistenza e della forza</li>
                    <li>Miglioramento del ranking competitivo</li>
                    <li>Costruzione della fiducia e resilienza mentale</li>
                    <li>Preparazione per competizioni nazionali e internazionali</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default YoungAthletesProgram;
