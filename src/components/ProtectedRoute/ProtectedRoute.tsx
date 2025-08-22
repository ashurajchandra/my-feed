//Import NPM packages
import React from 'react';
import { Navigate } from 'react-router-dom';

//Import custom hooks
import { useAuthState } from '../../hooks/useAuthState';

//Import components
import Loader from '../Loader/Loader';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireGuest?: boolean; // true = requires guest status (no auth), false = allows both
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requireGuest = false 
}) => {
  const { isAuthenticated, isLoading } = useAuthState();

  // Show loading spinner while checking auth status
  if (isLoading) {
    return <Loader text="Checking authentication..." />;
  }

  // For pages that require guest status (like signin/signup) - redirect authenticated users
  if (requireGuest && isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // User meets the requirements, render the component
  return <>{children}</>;
};

export default ProtectedRoute;
