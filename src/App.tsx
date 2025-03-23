
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { lazy, Suspense, useState, useEffect } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import { UserGender, UserType, loadUserPreferences } from "./components/UserTypeSelector";
import ProfileIndicator from "./components/ProfileIndicator";
import UserTypeSelector from "./components/UserTypeSelector";

// Import pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Programs from "./pages/Programs";
import About from "./pages/About";
import Facilities from "./pages/Facilities";
import Coaches from "./pages/Coaches";
import Contact from "./pages/Contact";
import Method from "./pages/Method";
import Technology from "./pages/Technology";

// Import program pages
const JuniorProgram = lazy(() => import("./pages/programs/Junior"));
const EliteProgram = lazy(() => import("./pages/programs/Elite"));
const AdultProgram = lazy(() => import("./pages/programs/Adult"));
const CampsProgram = lazy(() => import("./pages/programs/Camps"));
const PrivateProgram = lazy(() => import("./pages/programs/Private"));

// Import policy pages
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));

const queryClient = new QueryClient();

// Profile Manager component that will handle the state
const ProfileManager = ({ children }: { children: React.ReactNode }) => {
  const [userGender, setUserGender] = useState<UserGender | null>(null);
  const [userType, setUserType] = useState<UserType | null>(null);
  const [showSelector, setShowSelector] = useState(false);
  const navigate = useNavigate();
  
  // Load user preferences on mount
  useEffect(() => {
    const { gender, type } = loadUserPreferences();
    if (gender) setUserGender(gender);
    if (type) setUserType(type);
  }, []);
  
  // Handle profile selection
  const handleUserSelection = (gender: UserGender, type: UserType) => {
    setUserGender(gender);
    setUserType(type);
    setShowSelector(false);
  };
  
  return (
    <>
      {children}
      
      {userGender && userType && !showSelector && (
        <ProfileIndicator 
          gender={userGender} 
          type={userType} 
          onEditClick={() => setShowSelector(true)} 
        />
      )}
      
      {showSelector && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 p-4">
          <div className="max-w-md w-full">
            <UserTypeSelector onSelectionComplete={handleUserSelection} />
          </div>
        </div>
      )}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <ProfileManager>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/programs/junior" element={<JuniorProgram />} />
                <Route path="/programs/elite" element={<EliteProgram />} />
                <Route path="/programs/adult" element={<AdultProgram />} />
                <Route path="/programs/camps" element={<CampsProgram />} />
                <Route path="/programs/private" element={<PrivateProgram />} />
                <Route path="/facilities" element={<Facilities />} />
                <Route path="/coaches" element={<Coaches />} />
                <Route path="/about" element={<About />} />
                <Route path="/method" element={<Method />} />
                <Route path="/technology" element={<Technology />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </ProfileManager>
          </Suspense>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
