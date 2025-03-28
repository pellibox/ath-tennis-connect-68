
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProgramsSection from '@/components/ProgramsSection';
import { useProfile } from '@/contexts/ProfileContext';
import { programCategories } from '@/data/programs/categories';

const ProgramsOverview = () => {
  const { userType, sport } = useProfile();

  const filterProgramsBySport = (categories) => {
    return categories.map(category => ({
      ...category,
      programs: category.programs.filter(program => 
        program.sports ? program.sports.includes(sport) : true
      )
    })).filter(category => category.programs.length > 0);
  };

  const filteredCategories = userType 
    ? programCategories.filter(category => 
        category.applicableUserTypes ? 
        category.applicableUserTypes.includes(userType) : 
        true
      )
    : programCategories;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">
            {userType ? `Programmi per ${userType}` : 'Tutti i Programmi'}
          </h1>
          <ProgramsSection 
            categories={filterProgramsBySport(filteredCategories)}
            title="Programmi ATH"
            subtitle="Scopri i nostri programmi personalizzati"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProgramsOverview;
