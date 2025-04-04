
import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const Settings = () => {
  const { t } = useLanguage();

  return (
    <AdminLayout title={t('admin.settings')}>
      <Card>
        <CardHeader>
          <CardTitle>{t('admin.settings')}</CardTitle>
          <CardDescription>Manage system settings and configurations</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This is the settings management section. Here you will be able to configure system settings.
            This feature is currently under development.
          </p>
        </CardContent>
      </Card>
    </AdminLayout>
  );
};

export default Settings;
