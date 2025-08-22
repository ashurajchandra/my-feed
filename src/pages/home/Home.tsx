//Import NPM packages 
import React,{useState} from 'react';
import { Link } from 'react-router-dom';

//Import custom hooks
import { useAuthState } from '../../hooks/useAuthState';

//Import components
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';
import CreatePost from '../../components/CreatePost/CreatePost';
import Post from '../../components/Post/Post';

//Import constants
import { DUMMY_POSTS } from './constants';

const Home: React.FC = () => {
  const { user, isAuthenticated, logout, isLoading } = useAuthState();
  const [posts, setPosts] = useState(DUMMY_POSTS);

  // Show loading spinner while checking auth status
  if (isLoading) {
    return <Loader text="Checking authentication..." />;
  }

  const handlePostSubmit = (postData: any) => {
    console.log('New post created:', postData);
    
    // Create new post object
    const newPost = {
      id: Date.now(), // Generate unique ID
      userName: user?.email?.split('@')[0] || 'Anonymous',
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
          
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
