import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} PlantReg. All rights reserved.
        </p>
        <p className="footer-subtext">
          Precision Diagnostics for Sustainable Agriculture.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
