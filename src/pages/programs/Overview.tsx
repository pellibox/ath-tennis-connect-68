
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProgramsSection from '@/components/ProgramsSection';
import { useProfile } from '@/contexts/ProfileContext';
import { programCategories } from '@/data/programs/categories';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { SportType } from '@/contexts/ProfileContext';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const ProgramsOverview = () => {
  const { userType, sport, updateSport } = useProfile();
  const [showAllUserTypes, setShowAllUserTypes] = useState(false);

  const handleSportChange = (value: string) => {
    if (value) {
      updateSport(value as SportType);
    }
  };

  const filterProgramsBySport = (categories) => {
    return categories.map(category => ({
      ...category,
      programs: category.programs.filter(program => 
        program.sports ? program.sports.includes(sport) : true
      )
    })).filter(category => category.programs.length > 0);
  };

  const filteredCategories = showAllUserTypes || !userType
    ? programCategories
    : programCategories.filter(category => 
        category.applicableUserTypes ? 
        category.applicableUserTypes.includes(userType) : 
        true
      );

  const sportFiltered = filterProgramsBySport(filteredCategories);

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
                <BreadcrumbPage>Panoramica</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                {userType ? `Programmi per ${userType}` : 'Tutti i Programmi'}
              </h1>
              <p className="text-gray-600">Esplora i programmi ATH filtrati per le tue preferenze</p>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Sport:</span>
                <ToggleGroup 
                  type="single" 
                  value={sport || 'tennis'} 
                  onValueChange={handleSportChange} 
                  className="border rounded-md"
                >
                  <ToggleGroupItem value="tennis" aria-label="Tennis">
                    Tennis
                  </ToggleGroupItem>
                  <ToggleGroupItem value="padel" aria-label="Padel">
                    Padel
                  </ToggleGroupItem>
                  <ToggleGroupItem value="pickleball" aria-label="Pickleball">
                    Pickleball
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
              
              {userType && (
                <button 
                  onClick={() => setShowAllUserTypes(!showAllUserTypes)}
                  className="text-sm text-ath-clay hover:underline"
                >
                  {showAllUserTypes ? 'Mostra solo programmi rilevanti' : 'Mostra tutti i programmi'}
                </button>
              )}
            </div>
          </div>
          
          {userType && (
            <div className="mb-6 flex items-center gap-2">
              <span className="text-sm text-gray-600">Filtra per profilo:</span>
              <Badge variant="outline" className="capitalize">
                {userType}
              </Badge>
              {showAllUserTypes && (
                <span className="text-xs text-gray-500">(filtro disabilitato)</span>
              )}
            </div>
          )}

          <ProgramsSection 
            categories={sportFiltered}
            title="Programmi ATH"
            subtitle="Scopri i nostri programmi personalizzati"
            categoryCollapsible={true}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProgramsOverview;
