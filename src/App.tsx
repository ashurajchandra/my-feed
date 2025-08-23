//Import NPM packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Import  components
import GuestRoute from "./components/GuestRoute/GuestRoute";

//Import  pages
import Home from "./pages/home/Home";
import SignInPage from "./pages/signIn/SignIn";
import SignUpPage from "./pages/signUp/SignUp";
import NotFound from "./pages/notFound/NotFound";

function App() {
  return (
    <Router>
      <div className='min-h-screen'>
        <Routes>
          {/* Home page - accessible to both authenticated and guest users */}
          <Route path='/' element={<Home />} />

          {/* SignIn page - accessible to guest users only */}
          <Route
            path='/signin'
            element={
              <GuestRoute>
                <SignInPage />
              </GuestRoute>
            }
          />

          {/* SignUp page - accessible to guest users only */}
          <Route
            path='/signup'
            element={
              <GuestRoute>
                <SignUpPage />
              </GuestRoute>
            }
          />

          {/* 404 page - catch all unmatched routes */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
