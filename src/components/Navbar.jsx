import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  const [darkmode, setDarkmode] = useState(false);
  const [Hamburger, setHamburger] = useState(false);

  document.body.className = darkmode ? "dark" : "";

  Hamburger
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo-group">
            <Leaf className="logo-icon" />
            <span className="logo-text">
              Plant<span className="logo-text-green">Reg</span>
            </span>
          </div>

          <div className="navbar-links">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/disease" className="nav-link">
              Disease Library
            </Link>
            <Link to="/support" className="nav-link">
              Contact/Support
            </Link>
            <button
              onClick={() => setDarkmode(!darkmode)}
              className="Toggle-dark"
            >
              {darkmode ? <MdLightMode /> : <MdDarkMode />}
            </button>
          </div>

          <button
            className="hamburger"
            onClick={() => setHamburger(!Hamburger)}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>
      <div className={`navbar-links-mob ${Hamburger ? "open" : ""}`}>
        <button
          className="close-hamburger"
          onClick={() => setHamburger(!Hamburger)}
        >
          <RxCross2 />
        </button>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/disease" className="nav-link">
          Disease Library
        </Link>
        <Link to="/support" className="nav-link">
          Contact/Support
        </Link>
        <button onClick={() => setDarkmode(!darkmode)} className="Toggle-dark">
          {darkmode ? <MdLightMode /> : <MdDarkMode />}
        </button>
      </div>
    </>
  );
};

export default Navbar;
