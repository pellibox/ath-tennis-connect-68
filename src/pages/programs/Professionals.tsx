
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from 'react-router-dom';

const ProfessionalsProgram = () => {
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
                <BreadcrumbPage>Professionisti</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="prose max-w-none">
            <h1 className="text-3xl font-bold mb-8">Programma per Professionisti</h1>
            
            <div className="bg-white rounded-xl shadow-md p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">Eccellenza per i Giocatori Professionisti</h2>
              <p className="mb-4">
                Il programma per Professionisti offre un supporto completo per atleti che competono ai massimi livelli, combinando tecnologia all'avanguardia, coaching personalizzato e analisi avanzata delle prestazioni.
              </p>
              <p className="mb-6">
                Ogni aspetto del programma è adattato alle esigenze specifiche del giocatore professionista, con l'obiettivo di ottimizzare le prestazioni e massimizzare il potenziale competitivo.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Caratteristiche del Programma</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Analisi biomeccanica avanzata</li>
                    <li>Coaching di alto livello con feedback continuo</li>
                    <li>Monitoraggio completo con tecnologia VICKI™</li>
                    <li>Preparazione fisica personalizzata</li>
                    <li>Supporto mentale per competizioni ad alta pressione</li>
                    <li>Pianificazione strategica della carriera</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Vantaggi</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Ottimizzazione delle prestazioni basata sui dati</li>
                    <li>Miglioramento dell'efficienza tecnica</li>
                    <li>Prevenzione degli infortuni e recupero ottimale</li>
                    <li>Preparazione tattica specifica per avversari</li>
                    <li>Affinamento del gioco sotto pressione</li>
                    <li>Accesso a strutture e attrezzature all'avanguardia</li>
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

export default ProfessionalsProgram;
