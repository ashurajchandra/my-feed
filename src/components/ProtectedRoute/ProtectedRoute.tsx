import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from '../../hooks/useAuthState';

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
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    );
  }

  // For pages that require guest status (like signin/signup) - redirect authenticated users
  if (requireGuest && isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // User meets the requirements, render the component
  return <>{children}</>;
};

export default ProtectedRoute;
