
import React, { useState } from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { GraduationCap, Target, Briefcase, UserCog, Users } from "lucide-react";
import { toast } from "sonner";
import ButtonLink from './ButtonLink';
import RevealAnimation from './RevealAnimation';

export type UserGender = 'male' | 'female';
export type UserType = 'junior' | 'performance' | 'professional' | 'coach' | 'parent';

interface UserTypeForm {
  gender: UserGender;
  type: UserType;
}

interface UserTypeSelectorProps {
  onSelectionComplete: (gender: UserGender, type: UserType) => void;
}

const UserTypeSelector: React.FC<UserTypeSelectorProps> = ({ onSelectionComplete }) => {
  const [step, setStep] = useState<1 | 2>(1);
  
  const form = useForm<UserTypeForm>({
    defaultValues: {
      gender: 'male',
      type: 'junior'
    }
  });
  
  const handleGenderSubmit = (data: { gender: UserGender }) => {
    setStep(2);
  };
  
  const handleTypeSubmit = (data: UserTypeForm) => {
    onSelectionComplete(data.gender, data.type);
    toast.success(`Benvenuto! Contenuto personalizzato per ${data.type}`, {
      position: "bottom-center",
      duration: 3000
    });
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg max-w-md w-full mx-auto">
      <RevealAnimation>
        <h3 className="text-2xl font-display text-center mb-6">
          Raccontaci chi sei
        </h3>
        
        {/* Step 1: Gender Selection */}
        {step === 1 && (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleGenderSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-center block">Seleziona</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col sm:flex-row justify-center gap-6"
                      >
                        <div className="flex items-center justify-center flex-col space-y-2">
                          <div className={`p-6 rounded-full ${field.value === 'male' ? 'bg-ath-clay/20' : 'bg-gray-100'} transition-colors duration-200`}>
                            <Users className="h-12 w-12 text-ath-clay" />
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="male" id="male" />
                            <Label htmlFor="male" className="font-medium">Uomo</Label>
                          </div>
                        </div>
                      
                        <div className="flex items-center justify-center flex-col space-y-2">
                          <div className={`p-6 rounded-full ${field.value === 'female' ? 'bg-ath-clay/20' : 'bg-gray-100'} transition-colors duration-200`}>
                            <Users className="h-12 w-12 text-ath-clay" />
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="female" id="female" />
                            <Label htmlFor="female" className="font-medium">Donna</Label>
                          </div>
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <div className="flex justify-center pt-3">
                <button
                  type="submit"
                  className="bg-ath-clay hover:bg-ath-clay/90 text-white px-6 py-2 rounded-lg transition-colors duration-200"
                >
                  Continua
                </button>
              </div>
            </form>
          </Form>
        )}
        
        {/* Step 2: User Type Selection */}
        {step === 2 && (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleTypeSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Seleziona la categoria</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Seleziona categoria" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="junior" className="flex items-center">
                          <div className="flex items-center">
                            <GraduationCap className="mr-2 h-4 w-4" />
                            <span>Junior</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="performance">
                          <div className="flex items-center">
                            <Target className="mr-2 h-4 w-4" />
                            <span>Agonista performance</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="professional">
                          <div className="flex items-center">
                            <Briefcase className="mr-2 h-4 w-4" />
                            <span>Professionista</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="coach">
                          <div className="flex items-center">
                            <UserCog className="mr-2 h-4 w-4" />
                            <span>Coach</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="parent">
                          <div className="flex items-center">
                            <Users className="mr-2 h-4 w-4" />
                            <span>Genitore/Tutor</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              
              <div className="flex justify-between pt-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  Indietro
                </button>
                <button
                  type="submit"
                  className="bg-ath-clay hover:bg-ath-clay/90 text-white px-6 py-2 rounded-lg transition-colors duration-200"
                >
                  Conferma
                </button>
              </div>
            </form>
          </Form>
        )}
      </RevealAnimation>
    </div>
  );
};

export default UserTypeSelector;
