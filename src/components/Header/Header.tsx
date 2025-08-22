import React from 'react';
import { Link } from 'react-router-dom';

//Import custom hooks
import { useAuthState } from '../../hooks/useAuthState';

//Import constants
import { LABEL } from './constants';

//Import images
import IMAGES from '../../assets/images';

const Header: React.FC = () => {
  const { user, logout } = useAuthState();


  return (
    <header className="flex w-full flex-row px-6 py-4 h-[80px] items-center justify-between">
      {/* Left Side - Logo and Username */}
      <div className="flex items-center w-[200px] space-x-3">
        <img 
          {...IMAGES.DEFAULT_AVATAR}
          className="w-8 h-8 rounded-full"
        />
        <span className="text-sm font-medium text-gray-800">{user?.username || LABEL.DUMMY_USERNAME}</span>
      </div>
      
      {/* Right Side - Navigation and Logout */}
      <div className="flex items-center w-[200px] justify-end space-x-4">
        <Link 
          to="/" 
          className="text-[#000] font-semibold text-[14px] font-inter"
        >
          {LABEL.BACK_TO_HOME}
        </Link>
        <button
          onClick={logout}
          className="text-gray-600 hover:text-gray-800 font-medium"
        >
          {LABEL.LOGOUT}
        </button>
      </div>
    </header>
  );
};

export default Header;