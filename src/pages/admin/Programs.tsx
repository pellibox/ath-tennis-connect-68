
import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const Programs = () => {
  const { t } = useLanguage();

  return (
    <AdminLayout title={t('admin.programs')}>
      <Card>
        <CardHeader>
          <CardTitle>{t('admin.programs')}</CardTitle>
          <CardDescription>{t('admin.programsDescription')}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This is the program management section. Here you will be able to create, edit and manage tennis programs.
            This feature is currently under development.
          </p>
        </CardContent>
      </Card>
    </AdminLayout>
  );
};

export default Programs;
