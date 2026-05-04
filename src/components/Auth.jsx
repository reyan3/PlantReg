import "./Auth.css";
import { signInWithPopup } from "firebase/auth";
import {auth , googleProvider} from "../firebase.js"
import { Info } from "lucide-react";
const Auth = () => {
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      // Firebase onAuthStateChanged will handle the redirect
    } catch (error) {
      console.error("Auth Error:", error.message);
    }
  };

  return (
    <div className="app-container pt-28 pb-16 px-4">
      <div className="auth-card-wrapper max-w-5xl rounded-2xl shadow-2xl transition-all">
        {/* Left Side: Brand Visual */}
        <div className="auth-visual-side">
          <div className="visual-content">
            <span className="main-subtitle" >Secure Access</span>
            <h1 className="main-title" style={{color: 'white'}}>
              plant<span className="main-title-green">Reg</span>
            </h1>
            <p className="visual-description">
              AI-powered plant health monitoring and registration.
            </p>
          </div>
        </div>

        {/* Right Side: Action Section */}
        <div className="auth-form-side">
          <div className="form-header">
            <h2 className="card-section-header">Sign In</h2>
            <p className="main-description">Connect your account to start tracking your garden's health.</p>
          </div>

          <button className="google-auth-btn transition-all" onClick={handleGoogleLogin}>
            <img 
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
              alt="Google" 
            />
            <span>Continue with Google</span>
          </button>

          <div className="auth-info-box info-box mt-10">
            <p className="info-text">
              <Info height={14} />
              Encryption active. Your plant data is private.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;