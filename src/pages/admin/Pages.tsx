
import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const Pages = () => {
  const { t } = useLanguage();

  return (
    <AdminLayout title={t('admin.pages')}>
      <Card>
        <CardHeader>
          <CardTitle>{t('admin.pages')}</CardTitle>
          <CardDescription>{t('admin.pagesDescription')}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This is the page management section. Here you will be able to edit website content and pages.
            This feature is currently under development.
          </p>
        </CardContent>
      </Card>
    </AdminLayout>
  );
};

export default Pages;
