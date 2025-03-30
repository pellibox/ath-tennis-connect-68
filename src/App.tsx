
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/sonner";
import { LanguageProvider } from './contexts/LanguageContext';
import { ProfileProvider } from './contexts/ProfileContext';
import { useIsMobile } from './hooks/use-mobile';
import HomePage from '@/pages/Index';
import ProgramsOverview from '@/pages/programs/Overview';
import AboutPage from '@/pages/About';
import MethodPage from '@/pages/Method';
import TechnologyPage from '@/pages/Technology';
import FacilitiesPage from '@/pages/Facilities';
import CoachesPage from '@/pages/Coaches';
import ProgramsPage from '@/pages/Programs';
import PadelPage from '@/pages/Padel';
import PickleballPage from '@/pages/Pickleball';
import TouchTennisPage from '@/pages/TouchTennis';
import ContactPage from '@/pages/Contact';
import NotFoundPage from '@/pages/NotFound';
import PrivacyPage from '@/pages/Privacy';
import TermsPage from '@/pages/Terms';

// Programs pages
import EliteProgram from '@/pages/programs/Elite';
import JuniorProgram from '@/pages/programs/Junior';
import AdultProgram from '@/pages/programs/Adult';
import PrivateProgram from '@/pages/programs/Private';
import CampsProgram from '@/pages/programs/Camps';

// New program detail pages
import Performance2Program from '@/pages/programs/Performance2';
import Performance3Program from '@/pages/programs/Performance3';
import Performance4Program from '@/pages/programs/Performance4';
import ElitePerformanceProgram from '@/pages/programs/ElitePerformance';
import ElitePerformanceFullProgram from '@/pages/programs/ElitePerformanceFull';
import SitProgram from '@/pages/programs/Sit';
import SatProgram from '@/pages/programs/Sat';
import PersonalCoachingProgram from '@/pages/programs/PersonalTraining';
import AdultTrainingProgram from '@/pages/programs/AdultTraining';
import UniversityProgram from '@/pages/programs/University';
import CoachProgram from '@/pages/programs/Coach';
import ClubProgram from '@/pages/programs/Club';
import YoungAthletesProgram from '@/pages/programs/YoungAthletes';
import ParentTutorProgram from '@/pages/programs/ParentTutor';
import ProfessionalsProgram from '@/pages/programs/Professionals';
import PerformanceAnalysisProgram from '@/pages/programs/PerformanceAnalysis';

// Padel dedicated program pages
import PadelKidsProgram from '@/pages/programs/PadelKids';
import PadelAdultProgram from '@/pages/programs/PadelAdult';
import PadelAdvancedProgram from '@/pages/programs/PadelAdvanced';
import PadelPrivateProgram from '@/pages/programs/PadelPrivate';

function App() {
  return (
    <LanguageProvider>
      <ProfileProvider>
        <Router>
          <AppContent />
        </Router>
      </ProfileProvider>
    </LanguageProvider>
  );
}

function AppContent() {
  const isMobile = useIsMobile();
  
  return (
    <div className={isMobile ? "pb-14" : ""}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/method" element={<MethodPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/facilities" element={<FacilitiesPage />} />
        <Route path="/coaches" element={<CoachesPage />} />
        
        {/* Programs routes */}
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/padel" element={<PadelPage />} />
        <Route path="/pickleball" element={<PickleballPage />} />
        <Route path="/touchtennis" element={<TouchTennisPage />} />
        
        <Route path="/programs/elite" element={<EliteProgram />} />
        <Route path="/programs/junior" element={<JuniorProgram />} />
        <Route path="/programs/adult" element={<AdultProgram />} />
        <Route path="/programs/private" element={<PrivateProgram />} />
        <Route path="/programs/camps" element={<CampsProgram />} />
        
        {/* New program detail routes */}
        <Route path="/programs/performance-2" element={<Performance2Program />} />
        <Route path="/programs/performance-3" element={<Performance3Program />} />
        <Route path="/programs/performance-4" element={<Performance4Program />} />
        <Route path="/programs/elite-performance" element={<ElitePerformanceProgram />} />
        <Route path="/programs/elite-full" element={<ElitePerformanceFullProgram />} />
        <Route path="/programs/talent-identification" element={<SitProgram />} />
        <Route path="/programs/sat" element={<SatProgram />} />
        <Route path="/programs/personal" element={<PersonalCoachingProgram />} />
        <Route path="/programs/adult-training" element={<AdultTrainingProgram />} />
        <Route path="/programs/university" element={<UniversityProgram />} />
        <Route path="/programs/coach" element={<CoachProgram />} />
        <Route path="/programs/club" element={<ClubProgram />} />
        <Route path="/programs/young-athletes" element={<YoungAthletesProgram />} />
        <Route path="/programs/parent" element={<ParentTutorProgram />} />
        <Route path="/programs/parent-tutor" element={<ParentTutorProgram />} />
        <Route path="/programs/professionals" element={<ProfessionalsProgram />} />
        <Route path="/programs/performance-analysis" element={<PerformanceAnalysisProgram />} />
        
        {/* Padel dedicated program routes */}
        <Route path="/programs/padel-kids" element={<PadelKidsProgram />} />
        <Route path="/programs/padel-adult" element={<PadelAdultProgram />} />
        <Route path="/programs/padel-advanced" element={<PadelAdvancedProgram />} />
        <Route path="/programs/padel-private" element={<PadelPrivateProgram />} />
        
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        
        <Route path="/programs/overview" element={<ProgramsOverview />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;
