import React, { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

interface User {
  id: string;
  username: string;
  email: string;
}

interface StoredUser {
  id: string;
  username: string;
  email: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (emailOrUsername: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (email: string, username: string, password: string) => Promise<void>;
  checkAuthStatus: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Start with loading true

  // Mock user database for demo purposes
  const mockUsers: StoredUser[] = [
    {
      id: "1",
      username: "demo-user",
      email: "demo@example.com",
      password: "password123",
    },
    {
      id: "2",
      username: "test-user",
      email: "test@example.com",
      password: "test123",
    },
  ];

  // Check if user is already authenticated on app startup
  const checkAuthStatus = () => {
    const token = localStorage.getItem("authToken");
    const userData = localStorage.getItem("user");

    if (token && userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
      } catch (error) {
        // Clear invalid data
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
      }
    }
    setIsLoading(false);
  };

  // Check auth status on mount
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const login = async (emailOrUsername: string, password: string) => {
    setIsLoading(true);

    try {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Input validation
      if (!emailOrUsername.trim() || !password.trim()) {
        throw new Error("Please provide both email/username and password");
      }

      // Mock authentication logic - check against stored users
      // User can login with either email or username
      const foundUser = mockUsers.find(
        (u) =>
          (u.email.toLowerCase() === emailOrUsername.toLowerCase() ||
            u.username.toLowerCase() === emailOrUsername.toLowerCase()) &&
          u.password === password
      );

      if (foundUser) {
        const userData: User = {
          id: foundUser.id,
          username: foundUser.username,
          email: foundUser.email,
        };
        setUser(userData);

        // Mock localStorage token
        localStorage.setItem("authToken", "mock-jwt-token-" + Date.now());
        localStorage.setItem("user", JSON.stringify(userData));
      } else {
        throw new Error("Invalid email/username or password");
      }
    } catch (error) {
      // Re-throw the error so the component can handle it
      throw error;
    } finally {
      // Always reset loading state, regardless of success or failure
      setIsLoading(false);
    }
  };

  const signup = async (email: string, username: string, password: string) => {
    setIsLoading(true);

    try {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Validate that at least one of email or username is provided
      if (!email && !username) {
        throw new Error("Please provide either an email address or username");
      }

      // Mock validation - check against existing users
      if (email && mockUsers.some((u) => u.email === email)) {
        throw new Error("Email already exists");
      }

      if (username && mockUsers.some((u) => u.username === username)) {
        throw new Error("Username already taken");
      }

      // Create new user with password stored
      const newStoredUser: StoredUser = {
        id: Date.now().toString(),
        username: username || (email ? email.split('@')[0] : 'no-username'), // Generate username if not provided
        email: email || `user-${Date.now()}@example.com`, // Generate email if not provided
        password: password,
      };

      // Add to mock database
      mockUsers.push(newStoredUser);

      // Create user object without password for state
      const newUser: User = {
        id: newStoredUser.id,
        username: newStoredUser.username,
        email: newStoredUser.email,
      };

      setUser(newUser);

      // Mock localStorage token
      localStorage.setItem("authToken", "mock-jwt-token-" + Date.now());
      localStorage.setItem("user", JSON.stringify(newUser));
    } catch (error) {
      // Re-throw the error so the component can handle it
      throw error;
    } finally {
      // Always reset loading state, regardless of success or failure
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    // Clear mock tokens
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
  };

  const value: AuthContextType = {
    user,
    isLoading,
    login,
    logout,
    signup,
    checkAuthStatus,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
