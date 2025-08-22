import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

//Import custom hooks
import { useAuthState } from "../../hooks/useAuthState";

//Import constants
import { LABEL } from "./constants";

//Import images
import IMAGES from "../../assets/images";

const Header: React.FC = () => {
  const { user, logout } = useAuthState();
  const location = useLocation();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // Determine if we're on the home page
  const isOnHomePage = location.pathname === "/";

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await logout();
      // Logout is synchronous in our mock implementation, but this handles async cases
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <header className='flex w-full flex-row px-6 py-4 h-[80px] items-center justify-between'>
      {/* Left Side - Logo and Username */}
      <div className='flex items-center w-[200px] space-x-3'>
        <img {...IMAGES.DEFAULT_AVATAR} className='w-8 h-8 rounded-full' />
        <span className='text-sm font-medium text-gray-800'>
          {user?.username || LABEL.DUMMY_USERNAME}
        </span>
      </div>

      {/* Right Side - Navigation and Logout */}
      <div className='flex items-center w-[200px] justify-end space-x-4'>
        {isOnHomePage ? (
          // On home page - show login button if not authenticated
          !user ? (
            <Link
              to='/signin'
              className='text-[#000] font-semibold text-[14px] font-inter flex items-center space-x-2'>
              <span>Login</span>
              <img
                src={IMAGES.LOGOUT_ICON.src}
                alt={IMAGES.LOGOUT_ICON.alt}
                className='w-[20px] h-[20px]'
              />
            </Link>
          ) : (
            // User is authenticated, show logout button
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className='text-[#000] font-semibold text-[14px] font-inter flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed'>
              {isLoggingOut ? (
                <>
                  <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500'></div>
                  <span>Logging out...</span>
                </>
              ) : (
                <>
                  <span>{LABEL.LOGOUT}</span>
                </>
              )}
            </button>
          )
        ) : (
          // On other pages (signin/signup) - show back to home
          <Link
            to='/'
            className='text-[#000] font-semibold text-[14px] font-inter'>
            {LABEL.BACK_TO_HOME}
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
