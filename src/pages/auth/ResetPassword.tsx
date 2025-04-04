
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useLanguage } from '@/contexts/LanguageContext';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from 'sonner';
import EmptyHeader from '@/components/EmptyHeader';
import EmptyFooter from '@/components/EmptyFooter';

const formSchema = z.object({
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

const ResetPassword = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({
        password: values.password,
      });

      if (error) {
        throw error;
      }

      toast.success(t('auth.passwordResetSuccess') || 'Password updated successfully');
      navigate('/auth/login');
    } catch (error: any) {
      console.error('Error resetting password:', error.message);
      toast.error(error.message || t('auth.passwordResetError') || 'Error resetting password');
    } finally {
      setIsLoading(false);
    }
  };

  // Check if user has a valid recovery token
  useEffect(() => {
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      
      // If no session or error, redirect to login
      if (error || !data.session) {
        toast.error(t('auth.invalidResetLink') || 'Invalid or expired reset link');
        navigate('/auth/login');
      }
    };

    checkSession();
  }, [navigate, t]);

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
            {t('auth.setNewPassword') || 'Set New Password'}
          </h1>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('auth.newPassword') || 'New Password'}</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('auth.confirmPassword') || 'Confirm Password'}</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
                  t('auth.resetPassword') || 'Reset Password'
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>

      <EmptyFooter />
    </div>
  );
};

export default ResetPassword;
