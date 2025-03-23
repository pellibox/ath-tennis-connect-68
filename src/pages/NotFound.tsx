
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-20 px-6">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-7xl font-display font-bold mb-6">404</h1>
          <p className="text-2xl mb-8">Oops! Page not found</p>
          <p className="text-gray-600 mb-10">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link 
            to="/" 
            className="px-6 py-3 bg-black text-white hover:bg-opacity-90 transition-all"
          >
            RETURN TO HOME
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
