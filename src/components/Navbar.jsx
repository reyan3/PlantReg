import "./Navbar.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Leaf, LogOut, User } from "lucide-react"; // Added icons
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { auth } from "../firebase.js"; // Import auth for logout functionality

const Navbar = ({ user }) => { // 1. Added user prop
  const [darkmode, setDarkmode] = useState(false);
  const [Hamburger, setHamburger] = useState(false);
  const Navigate = useNavigate()

  document.body.className = darkmode ? "dark" : "";

  Hamburger
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  // Logout Handler
  const handleLogout = async () => {
    await auth.signOut();
    setHamburger(false);
    setDarkmode(false)
    Navigate("/auth")
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" style={{textDecoration:"none"}}><div className="navbar-logo-group">
            <Leaf className="logo-icon" />
            <span className="logo-text">
              Plant<span className="logo-text-green">Reg</span>
            </span>
          </div></Link>
          

          <div className="navbar-links">
            {user && <><Link to="/" className="nav-link">Home</Link>
            <Link to="/disease" className="nav-link">Disease Library</Link>
            <Link to="/support" className="nav-link">Contact/Support</Link> 
            <button onClick={() => setDarkmode(!darkmode)} className="Toggle-dark">
              {darkmode ? <MdLightMode /> : <MdDarkMode />}
            </button>
            </>}
            
            
            {/* 2. New Auth Section Desktop */}
            {user ? (
              <div className="nav-user-profile">
                <img src={user.photoURL} alt="User" className="user-avatar" />
                <button onClick={handleLogout} className="logout-btn">
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <Link to="/auth" className="nav-link">Login</Link>
            )}
          </div>

          <button className="hamburger" onClick={() => setHamburger(!Hamburger)}>
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`navbar-links-mob ${Hamburger ? "open" : ""}`}>
 <button className="close-hamburger" onClick={() => setHamburger(!Hamburger)}>
          <RxCross2 />
        </button>
        {user && <>
        <Link to="/" className="nav-link" onClick={() => setHamburger(false)}>Home</Link>
        <Link to="/disease" className="nav-link" onClick={() => setHamburger(false)}>Disease Library</Link>
        <Link to="/support" className="nav-link" onClick={() => setHamburger(false)}>Contact/Support</Link>
          <button onClick={() => setDarkmode(!darkmode)} className="Toggle-dark">
             {darkmode ? <MdLightMode /> : <MdDarkMode />}
          </button>
        </>}
       

        {/* 3. New Auth Section Mobile */}
        {user && (
          <div className="mob-user-info">
            <img src={user.photoURL} alt="User" className="user-avatar-lg" />
            <span className="mob-username">{user.displayName}</span>
          </div>
        )}

        
        
        {!user && (
          <Link to="/auth" className="nav-link" onClick={() => setHamburger(false)}>Login</Link>
        )}

        <div className="mob-nav-footer">
          {user && (
            <button onClick={handleLogout} className="mob-logout-btn">
              Logout <LogOut size={18} />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;