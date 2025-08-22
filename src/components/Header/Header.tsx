import React from 'react';
import { Link } from 'react-router-dom';

//Import constants
import { LABEL } from './constants';

interface HeaderProps {
  image: {
    src: string;
    alt: string;
  };
  username: string;
  logout: () => void;
}

const Header: React.FC<HeaderProps> = ({ image, username, logout }) => {
  return (
    <header className="flex w-full flex-row px-6 py-4 h-[80px] items-center justify-between">
      {/* Left Side - Logo and Username */}
      <div className="flex items-center w-[200px] space-x-3">
        <img 
          src={image.src} 
          alt={image.alt} 
          className="w-8 h-8 rounded-full"
        />
        <span className="text-sm font-medium text-gray-800">{username}</span>
      </div>
      
      {/* Right Side - Navigation and Logout */}
      <div className="flex items-center w-[200px] justify-end space-x-4">
        <Link 
          to="/" 
          className="text-blue-600 hover:text-blue-700 font-medium"
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