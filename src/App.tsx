//Import NPM packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Import custom components
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

//Import  pages
import Home from "./pages/home/Home";
import SignInPage from "./pages/signIn/SignIn";
import SignUpPage from "./pages/signUp/SignUp";

function App() {
  return (
    <Router>
      <div className='min-h-screen'>
        <Routes>
          {/* Home page - accessible to both authenticated and guest users */}
          <Route path='/' element={<Home />} />

          {/* SignIn page - requires guest status (not authenticated) */}
          <Route
            path='/signin'
            element={
              <ProtectedRoute requireGuest={true}>
                <SignInPage />
              </ProtectedRoute>
            }
          />

          {/* SignUp page - requires guest status (not authenticated) */}
          <Route
            path='/signup'
            element={
              <ProtectedRoute requireGuest={true}>
                <SignUpPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
