//Import NPM packages 
import React from 'react';
import { Link } from 'react-router-dom';

//Import custom hooks
import { useAuthState } from '../../hooks/useAuthState';

//Import components
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';
import CreatePost from '../../components/CreatePost/CreatePost';

const Home: React.FC = () => {
  const { user, isAuthenticated, logout, isLoading } = useAuthState();

  // Show loading spinner while checking auth status
  if (isLoading) {
    return <Loader text="Checking authentication..." />;
  }

  const handlePostSubmit = (postData: any) => {
    console.log('New post created:', postData);
    // Here you would typically send the post to your backend
    // For now, we'll just log it to the console
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh- 146px)] p-4">
      <CreatePost 
                onSubmit={handlePostSubmit}
                placeholder="How are you feeling today?"
                maxLength={500}
              />
        
  
      </div>
    </div>
  );
};

export default Home;
