
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ShieldAlert, Home } from 'lucide-react';

const Unauthorized = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-md text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-red-100 p-3 rounded-full">
              <ShieldAlert className="h-16 w-16 text-red-600" />
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-4">
            {t('unauthorized.title') || 'Access Denied'}
          </h1>

          <p className="text-gray-600 mb-8">
            {t('unauthorized.message') || "Sorry, you don't have permission to access this page. Please contact an administrator if you believe this is an error."}
          </p>

          <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3 justify-center">
            <Button 
              onClick={() => navigate('/')}
              className="flex items-center justify-center"
            >
              <Home className="mr-2 h-4 w-4" />
              {t('unauthorized.backToHome') || 'Back to Home'}
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => navigate(-1)}
            >
              {t('unauthorized.goBack') || 'Go Back'}
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Unauthorized;
