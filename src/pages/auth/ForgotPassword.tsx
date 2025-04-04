
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import EmptyHeader from '@/components/EmptyHeader';
import EmptyFooter from '@/components/EmptyFooter';

const formSchema = z.object({
  email: z.string().email(),
});

const ForgotPassword = () => {
  const { resetPassword } = useAuth();
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      await resetPassword(values.email);
      setEmailSent(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <EmptyHeader />

      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <div className="flex justify-center mb-6">
            <Link to="/">
              <img
                src="/lovable-uploads/ebada5d3-6c5e-43a0-ab7d-a5850900d950.png"
                alt="ATH Logo"
                className="h-14"
              />
            </Link>
          </div>

          <h1 className="text-2xl font-bold text-center mb-6">
            {t('auth.resetPassword') || 'Reset Password'}
          </h1>

          {emailSent ? (
            <div className="text-center space-y-6">
              <div className="p-4 bg-green-50 text-green-700 rounded-md">
                <p>{t('auth.resetPasswordEmailSent') || 'Password reset link has been sent to your email'}</p>
              </div>
              <div className="text-sm">
                <Link to="/auth/login" className="text-ath-clay hover:underline">
                  {t('auth.backToSignIn') || 'Back to sign in'}
                </Link>
              </div>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <p className="text-sm text-gray-600 mb-4">
                  {t('auth.resetPasswordInstructions') || 'Enter your email address and we will send you a link to reset your password.'}
                </p>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('auth.email') || 'Email'}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="email@example.com"
                          {...field}
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-between items-center text-sm">
                  <Link to="/auth/login" className="text-ath-clay hover:underline">
                    {t('auth.backToSignIn') || 'Back to sign in'}
                  </Link>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-ath-clay hover:bg-ath-clay/90" 
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t('auth.loading') || 'Loading...'}
                    </span>
                  ) : (
                    t('auth.sendResetLink') || 'Send Reset Link'
                  )}
                </Button>
              </form>
            </Form>
          )}
        </div>
      </div>

      <EmptyFooter />
    </div>
  );
};

export default ForgotPassword;
