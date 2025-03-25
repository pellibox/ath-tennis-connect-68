
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/sonner";
import { LanguageProvider } from './contexts/LanguageContext';
import { ProfileProvider } from './contexts/ProfileContext';
import HomePage from '@/pages/Index';
import AboutPage from '@/pages/About';
import MethodPage from '@/pages/Method';
import TechnologyPage from '@/pages/Technology';
import FacilitiesPage from '@/pages/Facilities';
import CoachesPage from '@/pages/Coaches';
import ProgramsPage from '@/pages/Programs';
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

function App() {
  return (
    <LanguageProvider>
      <ProfileProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/method" element={<MethodPage />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/facilities" element={<FacilitiesPage />} />
            <Route path="/coaches" element={<CoachesPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            
            {/* Program routes */}
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
            
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Toaster position="bottom-right" />
        </Router>
      </ProfileProvider>
    </LanguageProvider>
  );
}

export default App;
