import { useAuth } from "../contexts/AuthContext";

export const useAuthState = () => {
  const { user, isLoading, login, logout, signup } = useAuth();

  const isAuthenticated = !!user;
  const isGuest = !user;

  return {
    user,
    isLoading,
    isAuthenticated,
    isGuest,
    login,
    logout,
    signup,
  };
};
