//Import NPM Packages
import React from 'react';
import { Link } from 'react-router-dom';

//Import Components
import Header from '../../components/Header/Header';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-146px)] px-4">
        <div className="text-center max-w-md mx-auto">
          {/* 404 Icon */}
          <div className="mb-8">
            <div className="mx-auto w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                404
              </span>
            </div>
          </div>

          {/* Main Message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Go Home
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200"
            >
              Go Back
            </button>
          </div>

          {/* Helpful Links */}
          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-500 mb-4">
              You can also try these pages:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/signin"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline transition-colors"
              >
                Sign In
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                to="/signup"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Search Suggestion */}
          <div className="mt-8 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
            <p className="text-sm text-gray-600 mb-2">
              Can't find what you're looking for?
            </p>
            <p className="text-xs text-gray-500">
              Try checking the URL for typos or use the navigation menu above.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
