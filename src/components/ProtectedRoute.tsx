
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const ProtectedRoute = () => {
  const { user, isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    // Show loading state
    return <div className="flex h-screen items-center justify-center">Caricamento...</div>;
  }

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Render the outlet (child routes)
  return <Outlet />;
};

export default ProtectedRoute;
