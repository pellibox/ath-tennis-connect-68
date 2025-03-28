
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from 'react-router-dom';

const ParentTutorProgram = () => {
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
                <BreadcrumbPage>Genitore/Tutor</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="prose max-w-none">
            <h1 className="text-3xl font-bold mb-8">Genitore/Tutor (Giovani e Junior Agonisti 6-18 anni)</h1>
            
            <div className="bg-white rounded-xl shadow-md p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">Supporto Genitori nel Percorso Sportivo</h2>
              <p className="mb-4">
                Il programma Genitore/Tutor è creato da mental coach specializzati e comprende momenti di formazione durante l'anno per supportare correttamente l'atleta nel suo percorso formativo.
              </p>
              <p className="mb-6">
                Questo programma è incluso in tutti i programmi Elite e Junior, riconoscendo l'importanza fondamentale del ruolo dei genitori nello sviluppo sportivo e personale dei giovani atleti.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Elementi del Programma</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Workshop periodici con specialisti del settore</li>
                    <li>Incontri individuali con il team tecnico</li>
                    <li>Materiale educativo e risorse dedicate</li>
                    <li>Comunità di supporto tra genitori</li>
                    <li>Linee guida per sostenere la motivazione dell'atleta</li>
                    <li>Consigli su nutrizione e recupero per giovani atleti</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Benefici</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Miglioramento della comunicazione genitore-atleta</li>
                    <li>Comprensione approfondita del percorso tennistico</li>
                    <li>Gestione efficace dello stress competitivo</li>
                    <li>Creazione di un ambiente di supporto ottimale</li>
                    <li>Equilibrio tra ambizioni sportive e benessere generale</li>
                    <li>Costruzione di una collaborazione positiva con i coach</li>
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

export default ParentTutorProgram;
