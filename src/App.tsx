import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Method from './pages/Method';
import Programs from './pages/Programs';
import Technology from './pages/Technology';
import Facilities from './pages/Facilities';
import Coaches from './pages/Coaches';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import JuniorProgram from './pages/programs/Junior';
import AdultTrainingProgram from './pages/programs/AdultTraining';
import SummerCampsProgram from './pages/programs/SummerCamps';
import PersonalTrainingProgram from './pages/programs/Personal';
import Performance3Program from './pages/programs/Performance3';
import Performance4Program from './pages/programs/Performance4';
import ElitePerformanceProgram from './pages/programs/ElitePerformance';
import YoungAthletesProgram from './pages/programs/YoungAthletes';
import Performance2Program from './pages/programs/Performance2';
import StaffSetup from './pages/StaffSetup';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/method" element={<Method />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/coaches" element={<Coaches />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        
        <Route path="/programs/junior" element={<JuniorProgram />} />
        <Route path="/programs/adult-training" element={<AdultTrainingProgram />} />
        <Route path="/programs/camps" element={<SummerCampsProgram />} />
        <Route path="/programs/personal" element={<PersonalTrainingProgram />} />
        <Route path="/programs/performance-3" element={<Performance3Program />} />
        <Route path="/programs/performance-4" element={<Performance4Program />} />
        <Route path="/programs/elite-performance" element={<ElitePerformanceProgram />} />
        <Route path="/programs/young-athletes" element={<YoungAthletesProgram />} />
        <Route path="/programs/performance-2" element={<Performance2Program />} />
        
        <Route path="/staff-setup" element={<StaffSetup />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
