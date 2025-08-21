import React from 'react';
import { Link } from 'react-router-dom';

const SignIn: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Sign In</h1>
      <Link to="/" className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
        Back to Home
      </Link>
    </div>
  );
};

export default SignIn;
