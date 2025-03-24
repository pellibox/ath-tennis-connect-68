
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
            
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Toaster position="bottom-right" />
        </Router>
      </ProfileProvider>
    </LanguageProvider>
  );
}

export default App;
