//Import NPM packages
import React from "react";
import { Navigate } from "react-router-dom";

//Import custom hooks
import { useAuthState } from "../../cutomHooks/useAuthState";

//Import components
import Loader from "../Loader/Loader";

interface GuestRouteProps {
  children: React.ReactNode;
}

/**
 * GuestRoute - Restricts access to unauthenticated users only
 * Authenticated users will be redirected to the home page
 */
const GuestRoute: React.FC<GuestRouteProps> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuthState();

  // Show loading spinner while checking auth status
  if (isLoading) {
    return <Loader text='Checking authentication...' />;
  }

  // If user is authenticated, redirect to home page
  if (isAuthenticated) {
    return <Navigate to='/' replace />;
  }

  // User is a guest, render the component
  return <>{children}</>;
};

export default GuestRoute;
