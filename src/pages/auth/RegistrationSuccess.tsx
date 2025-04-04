
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import EmptyHeader from '@/components/EmptyHeader';
import EmptyFooter from '@/components/EmptyFooter';

const RegistrationSuccess = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <EmptyHeader />

      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg text-center">
          <div className="flex justify-center mb-6">
            <Link to="/">
              <img
                src="/lovable-uploads/ebada5d3-6c5e-43a0-ab7d-a5850900d950.png"
                alt="ATH Logo"
                className="h-14"
              />
            </Link>
          </div>

          <div className="flex justify-center mb-6">
            <CheckCircle2 className="h-16 w-16 text-green-500" />
          </div>

          <h1 className="text-2xl font-bold mb-4">
            {t('auth.registrationSuccess') || 'Registration Successful!'}
          </h1>

          <p className="text-gray-600 mb-8">
            {t('auth.registrationSuccessMessage') || 'Your account has been created successfully. You can now sign in with your credentials.'}
          </p>

          <div className="flex flex-col space-y-3">
            <Button asChild className="bg-ath-clay hover:bg-ath-clay/90">
              <Link to="/auth/login">
                {t('auth.signIn') || 'Sign In'}
              </Link>
            </Button>
            
            <Button asChild variant="outline">
              <Link to="/">
                {t('auth.backToHome') || 'Back to Home'}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <EmptyFooter />
    </div>
  );
};

export default RegistrationSuccess;
