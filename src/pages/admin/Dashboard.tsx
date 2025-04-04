
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { User, BookOpen, Tag, DollarSign, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Dashboard = () => {
  const { user, userRoles } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const adminMenuItems = [
    { 
      title: t('admin.pages') || 'Pages', 
      icon: <BookOpen className="h-5 w-5" />, 
      description: t('admin.pagesDescription') || 'Manage website pages',
      path: '/admin/pages',
      color: 'bg-blue-100 text-blue-600'
    },
    { 
      title: t('admin.programs') || 'Programs', 
      icon: <Tag className="h-5 w-5" />, 
      description: t('admin.programsDescription') || 'Manage programs',
      path: '/admin/programs',
      color: 'bg-purple-100 text-purple-600'
    },
    { 
      title: t('admin.prices') || 'Prices', 
      icon: <DollarSign className="h-5 w-5" />, 
      description: t('admin.pricesDescription') || 'Manage prices',
      path: '/admin/prices',
      color: 'bg-green-100 text-green-600'
    },
    { 
      title: t('admin.users') || 'Users', 
      icon: <Users className="h-5 w-5" />, 
      description: t('admin.usersDescription') || 'Manage users',
      path: '/admin/users',
      color: 'bg-amber-100 text-amber-600'
    },
  ];

  return (
    <AdminLayout title={t('admin.dashboard') || 'Dashboard'}>
      <div className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>{t('admin.welcome') || 'Welcome'}</CardTitle>
            <CardDescription>
              {user?.email} - {userRoles.join(', ')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              {t('admin.dashboardIntro') || 'This is your admin dashboard. Use the menu to manage site content.'}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {adminMenuItems.map((item, index) => (
          <Card 
            key={index} 
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => navigate(item.path)}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {item.title}
              </CardTitle>
              <div className={`rounded-full p-2 ${item.color}`}>
                {item.icon}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
