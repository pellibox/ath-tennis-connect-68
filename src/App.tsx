
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";

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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
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
          </Suspense>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
