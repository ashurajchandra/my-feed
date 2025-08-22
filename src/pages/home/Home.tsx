import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Home Page</h1>
      <div className="space-x-4">
        <Link to="/signin" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Sign In
        </Link>
        <Link to="/signup" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Home;
