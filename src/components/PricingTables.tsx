import React, { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Page } from '@/integrations/supabase/database.types';

// Other imports and code...

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
          setPricingData(data);
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

  // Rest of the component...
  
  return (
    // Component JSX
  );
};

export default PricingTables;
