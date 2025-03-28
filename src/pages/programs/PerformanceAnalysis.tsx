
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from 'react-router-dom';

const PerformanceAnalysisProgram = () => {
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
                <BreadcrumbPage>Performance Analysis</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="prose max-w-none">
            <h1 className="text-3xl font-bold mb-8">Performance Analysis</h1>
            
            <div className="bg-white rounded-xl shadow-md p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">Analisi Avanzata delle Prestazioni</h2>
              <p className="mb-4">
                Il programma di Performance Analysis utilizza tecnologia all'avanguardia e metodologie analitiche avanzate per fornire una valutazione completa e dettagliata delle prestazioni del giocatore.
              </p>
              <p className="mb-6">
                Attraverso la tecnologia VICKI™, siamo in grado di monitorare oltre 70 parametri specifici e trasformarli in insights actionable che guidano il miglioramento tecnico, tattico e atletico.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Caratteristiche dell'Analisi</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Valutazione biomeccanica completa</li>
                    <li>Analisi tattica delle partite</li>
                    <li>Monitoraggio dei pattern di movimento</li>
                    <li>Analisi della velocità e precisione dei colpi</li>
                    <li>Valutazione dell'efficienza energetica</li>
                    <li>Report dettagliati con visualizzazioni interattive</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Benefici</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Identificazione precisa delle aree di miglioramento</li>
                    <li>Ottimizzazione basata su dati oggettivi</li>
                    <li>Prevenzione degli infortuni</li>
                    <li>Personalizzazione dei programmi di allenamento</li>
                    <li>Misurazione accurata dei progressi nel tempo</li>
                    <li>Decisioni più informate su strategie di gioco</li>
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

export default PerformanceAnalysisProgram;
