
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/sonner";
import { LanguageProvider } from './contexts/LanguageContext';
import { ProfileProvider } from './contexts/ProfileContext';
import { AuthProvider } from './contexts/AuthContext';
import { useIsMobile } from './hooks/use-mobile';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import LandingPage from '@/pages/Landing';
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
import Brochure from '@/pages/Brochure';
import ElevenLabsConvaiWidget from '@/components/chatbot/ElevenLabsConvaiWidget';
import BottomNavigation from '@/components/navigation/BottomNavigation';

// Auth pages
import Login from '@/pages/auth/Login';
import Register from '@/pages/auth/Register';
import ForgotPassword from '@/pages/auth/ForgotPassword';
import ResetPassword from '@/pages/auth/ResetPassword';
import RegistrationSuccess from '@/pages/auth/RegistrationSuccess';
import Unauthorized from '@/pages/Unauthorized';

// Admin pages
import Dashboard from '@/pages/admin/Dashboard';

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

// TouchTennis dedicated program pages
import TouchTennisBaseProgram from '@/pages/programs/TouchTennisBase';
import TouchTennisAdvancedProgram from '@/pages/programs/TouchTennisAdvanced';
import TouchTennisJuniorProgram from '@/pages/programs/TouchTennisJunior';

function App() {
  return (
    <LanguageProvider>
      <ProfileProvider>
        <AuthProvider>
          <Router>
            <AppContent />
          </Router>
        </AuthProvider>
      </ProfileProvider>
    </LanguageProvider>
  );
}

function AppContent() {
  const isMobile = useIsMobile();
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
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
        
        {/* TouchTennis dedicated program routes */}
        <Route path="/programs/touchtennis-base" element={<TouchTennisBaseProgram />} />
        <Route path="/programs/touchtennis-avanzato" element={<TouchTennisAdvancedProgram />} />
        <Route path="/programs/touchtennis-junior" element={<TouchTennisJuniorProgram />} />
        
        {/* Authentication routes */}
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/auth/reset-password" element={<ResetPassword />} />
        <Route path="/auth/success" element={<RegistrationSuccess />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        
        {/* Admin routes - protected */}
        <Route path="/admin" element={
          <ProtectedRoute requireEditor>
            <Dashboard />
          </ProtectedRoute>
        } />
        
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/brochure" element={<Brochure />} />
        
        <Route path="/programs/overview" element={<ProgramsOverview />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* ElevenLabs Convai widget - always present regardless of route */}
      <ElevenLabsConvaiWidget />
      
      {/* Add BottomNavigation for mobile view */}
      {isMobile && <BottomNavigation />}
      
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;
