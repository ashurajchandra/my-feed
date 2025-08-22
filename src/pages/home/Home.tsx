//Import NPM packages 
import React, { useState, useEffect } from 'react';

//Import custom hooks
import { useAuthState } from '../../hooks/useAuthState';
import { usePaginated } from '../../cutomHooks/usePaginated';

//Import components
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';
import CreatePost from '../../components/CreatePost/CreatePost';
import Post from '../../components/Post/Post';
import Popup from '../../components/Popup/Popup';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

//Import constants
import { DUMMY_POSTS } from './constants';


const Home: React.FC = () => {
  const { user, isAuthenticated, isLoading } = useAuthState();
  const [posts, setPosts] = useState(DUMMY_POSTS);
  const [showSignInPopup, setShowSignInPopup] = useState(false);
  const [popUpContent, setPopUpContent] = useState<string>('signIn');

  // Use pagination hook for posts with local state
  const {
    displayedData,
    isFetching,
    hasMore,
    lastElementRef,
  } = usePaginated({
    data: posts,
    pageSize: 5 // Show 5 posts per page
  });

  useEffect(() => {
    if (isAuthenticated) {
      setShowSignInPopup(false);
    }
  }, [isAuthenticated]);

  // Show loading spinner while checking auth status
  if (isLoading) {
    return <Loader  />;
  }

  const handlePostSubmit = (postData: any) => {
    // Check if user is authenticated
    if (!isAuthenticated) {
      setShowSignInPopup(true);
      return;
    }

    
    // Create new post object
    const newPost = {
      id: Date.now(), // Generate unique ID
      userName: user?.email?.split('@')[0] || user?.username || 'Anonymous',
      timestamp: 'Just now',
      content: postData.content,
      emoji: '😊' // Default emoji for new posts
    };
    
    // Add new post to the beginning of the posts array
    setPosts(prevPosts => [newPost, ...prevPosts]);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex flex-col items-center min-h-[calc(100vh-146px)] p-4">
        {/* Create Post Section */}
        <div className="mb-8">
          <CreatePost 
            onSubmit={handlePostSubmit}
            placeholder="How are you feeling today?"
            maxLength={500}
          />
        </div>

        {/* Posts Feed Section */}
        <div>
          
          {displayedData.map((post: any, index: number) => (
            <div key={post.id} ref={index === displayedData.length - 1 ? lastElementRef : null}>
              <Post {...post} />
            </div>
          ))}
          
          {/* Loading indicator */}
          {isFetching && (
            <div className="flex justify-center py-4">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
                <p className="text-sm text-gray-500">Loading more posts...</p>
              </div>
            </div>
          )}
          
          {/* End of posts message */}
          {!hasMore && displayedData.length > 0 && (
            <div className="text-center py-4 text-gray-500">
              No more posts to load
            </div>
          )}
          
          {/* Empty state */}
          {displayedData.length === 0 && !isFetching && (
            <div className="text-center py-8 text-gray-500">
              No posts yet. Create your first post above!
            </div>
          )}
        </div>
      </div>

      {/* SignIn Popup for unauthenticated users */}
      <Popup
        isOpen={showSignInPopup}
        onClose={() => setShowSignInPopup(false)}
        closeOnOverlayClick={true}
      >
        {popUpContent === 'signIn' && <SignIn updatePopUpContent={() => setPopUpContent('signUp')} />}
        {popUpContent === 'signUp' && <SignUp updatePopUpContent={() => setPopUpContent('signIn')} />}
      </Popup>
    </div>
  );
};

export default Home;
