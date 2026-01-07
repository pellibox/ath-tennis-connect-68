
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  LayoutDashboard, 
  BookOpen, 
  Tag, 
  DollarSign, 
  Users, 
  Settings,
  Database,
  LogOut,
  ChevronRight,
  ExternalLink,
  FileEdit
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const AdminSidebar = () => {
  const { user, isAdmin, signOut } = useAuth();
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const isLinkActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  const menuItems = [
    {
      title: t('admin.dashboard') || 'Dashboard',
      icon: <LayoutDashboard className="h-5 w-5" />,
      path: '/admin',
      exact: true,
    },
    {
      title: 'Gestione Contenuti',
      icon: <FileEdit className="h-5 w-5" />,
      path: '/admin/content',
    },
    {
      title: 'Gestione Prezzi',
      icon: <DollarSign className="h-5 w-5" />,
      path: '/admin/price-manager',
    },
  ];

  // Admin only menu items
  const adminMenuItems = [
    {
      title: t('admin.users') || 'Users',
      icon: <Users className="h-5 w-5" />,
      path: '/admin/users',
    },
    {
      title: t('admin.settings') || 'Settings',
      icon: <Settings className="h-5 w-5" />,
      path: '/admin/settings',
    },
    {
      title: t('admin.knowledgeBase') || 'Knowledge Base',
      icon: <Database className="h-5 w-5" />,
      path: '/admin/knowledge-base',
    },
  ];

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <aside 
      id="admin-sidebar"
      className="w-64 bg-gray-800 text-white flex-shrink-0 overflow-y-auto transition-transform duration-300 ease-in-out md:translate-x-0 -translate-x-full fixed md:relative h-full z-40"
    >
      <div className="p-4 flex items-center justify-center border-b border-gray-700">
        <Link to="/admin" className="flex items-center">
          <img
            src="/lovable-uploads/ebada5d3-6c5e-43a0-ab7d-a5850900d950.png"
            alt="ATH Logo"
            className="h-8"
          />
          <span className="ml-2 text-xl font-semibold">ATH Admin</span>
        </Link>
      </div>

      <nav className="mt-5 px-2">
        <div className="space-y-1">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={cn(
                "flex items-center px-4 py-2 text-sm rounded-md transition-colors",
                isLinkActive(item.path) 
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              )}
            >
              {item.icon}
              <span className="ml-3">{item.title}</span>
              {isLinkActive(item.path) && <ChevronRight className="ml-auto h-4 w-4" />}
            </Link>
          ))}
        </div>

        {isAdmin && (
          <>
            <div className="mt-8 mb-4 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              {t('admin.administration') || 'Administration'}
            </div>
            <div className="space-y-1">
              {adminMenuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={cn(
                    "flex items-center px-4 py-2 text-sm rounded-md transition-colors",
                    isLinkActive(item.path) 
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  )}
                >
                  {item.icon}
                  <span className="ml-3">{item.title}</span>
                  {isLinkActive(item.path) && <ChevronRight className="ml-auto h-4 w-4" />}
                </Link>
              ))}
            </div>
          </>
        )}
        
        <div className="mt-8 mb-4 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
          Agente AI
        </div>
        <div className="space-y-1">
          <a
            href="/site-knowledge"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 text-sm rounded-md transition-colors text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <Database className="h-5 w-5" />
            <span className="ml-3">Knowledge Base Pubblica</span>
            <ExternalLink className="ml-auto h-4 w-4" />
          </a>
        </div>
      </nav>

      <div className="absolute bottom-0 w-full p-4 border-t border-gray-700">
        <div className="flex items-center px-2 py-2 text-sm text-gray-300">
          <div className="flex-1 truncate">
            <div className="font-medium">{user?.email}</div>
          </div>
        </div>
        <Button 
          variant="ghost" 
          className="w-full justify-start text-gray-300 hover:bg-gray-700 hover:text-white mt-2"
          onClick={handleSignOut}
        >
          <LogOut className="h-5 w-5 mr-3" />
          {t('auth.signOut') || 'Sign out'}
        </Button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
