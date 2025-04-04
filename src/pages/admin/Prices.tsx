
import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const Prices = () => {
  const { t } = useLanguage();

  return (
    <AdminLayout title={t('admin.prices')}>
      <Card>
        <CardHeader>
          <CardTitle>{t('admin.prices')}</CardTitle>
          <CardDescription>{t('admin.pricesDescription')}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This is the pricing management section. Here you will be able to manage program prices and pricing plans.
            This feature is currently under development.
          </p>
        </CardContent>
      </Card>
    </AdminLayout>
  );
};

export default Prices;
