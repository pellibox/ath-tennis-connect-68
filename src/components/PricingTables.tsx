import React, { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Page, Section } from '@/integrations/supabase/database.types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const PricingTables = () => {
  const [pricingData, setPricingData] = useState<Page | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPricingData = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('pages')
          .select('*')
          .eq('slug', 'pricing')
          .single();

        if (error) {
          setError(error.message);
          return;
        }

        if (data) {
          const sections = Array.isArray(data.sections) 
            ? data.sections 
            : [];
          
          const typedPage: Page = {
            ...data,
            sections: sections as Section[]
          };
          
          setPricingData(typedPage);
        }
      } catch (err) {
        setError('Failed to fetch pricing data');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPricingData();
  }, []);

  if (isLoading) {
    return (
      <div className="container mx-auto py-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="flex flex-col">
              <CardHeader>
                <Skeleton className="h-8 w-1/2 mb-2" />
                <Skeleton className="h-4 w-3/4" />
              </CardHeader>
              <CardContent className="flex-grow">
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-5/6 mb-2" />
                <Skeleton className="h-4 w-4/6" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-10">
        <Card className="border-red-200">
          <CardHeader>
            <CardTitle className="text-red-500">Error Loading Pricing</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{error}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        {pricingData?.title || 'Our Pricing Plans'}
      </h2>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pricingData?.sections?.map((section) => (
          <Card key={section.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{section.name}</CardTitle>
              <CardDescription>
                {section.type === 'text' && section.content}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div dangerouslySetInnerHTML={{ __html: section.content || '' }} />
            </CardContent>
          </Card>
        )) || (
          <Card>
            <CardHeader>
              <CardTitle>No pricing information available</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Please check back later for our updated pricing plans.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default PricingTables;
