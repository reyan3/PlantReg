import { BrowserRouter as Router , Routes , Route} from "react-router-dom";
import "./App.css";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "./firebase.js"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import DiseaseLib from "./components/DiseaseLib";
import Auth from "./components/Auth";
import Support from "./components/Support";


// Main App Component
const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div className="loading"><img src="./loader2.gif" alt="loader" /></div>; 
  }

  return (
    <Router>
      <Navbar user={user} />
      <Routes>
        <Route element={<Home user={user} />}  path="/" />
        <Route element={<DiseaseLib />} path="/disease" />
        <Route element={<Support />} path="/support" />
        
        {/* Redirect to Home if user is already logged in */}
        <Route 
          path="/auth" 
          element={user ? <Navigate to="/" /> : <Auth />} 
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;