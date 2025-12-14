import { Link } from 'react-router-dom';
import './Support.css';

import { FiMail, FiPhone, FiFileText, FiMapPin, FiClock } from 'react-icons/fi';

const Support = () => {
  return (
    <div className="support-container">
      <h1>Need Help with PlantReg?</h1>
      <p className="support-tagline">We're here to assist you with plant identification, disease diagnosis, and app support.</p>

      <div className="support-grid">
        
        <div className="contact-info-card">
          <h2>Get in Touch Directly</h2>
          <p>For urgent issues or immediate feedback, please use the following contact methods.</p>

          <div className="contact-detail">
            <FiMail className="contact-icon email-icon" />
            <div className="contact-text">
              <h4>Email Support</h4>
              <a href="mailto:clan6229@gmail.com">support@plantreg.com</a>
              <p>Response within 24 hours.</p>
            </div>
          </div>

          <div className="contact-detail">
            <FiPhone className="contact-icon phone-icon" />
            <div className="contact-text">
              <h4>Phone Line</h4>
              <p>+1 (555) PLANT-RG</p>
              <p>Mon - Fri, 9:00 AM - 5:00 PM (EST)</p>
            </div>
          </div>

          <div className="contact-detail">
            <FiMapPin className="contact-icon address-icon" />
            <div className="contact-text">
              <h4>Headquarters</h4>
              <p>123 Greenhouse Lane, Botanica City, 10001</p>
            </div>
          </div>

          <div className="hours-of-operation">
            <FiClock className="hours-icon" />
            <p><strong>Service Hours:</strong> 24/7 Digital Support</p>
          </div>
        </div>

        <div className="resource-card">
          <h2>Resources & FAQs</h2>
          <p>Find instant answers and detailed documentation here.</p>
          
          <div className="resource-list">

            <div className="resource-item">
              <FiFileText className="resource-icon guide-icon" />
              <div className="resource-text">
                <h3>Diagnosis Guide</h3>
                <p>Detailed instructions on how to use PlantReg's camera feature for accurate disease detection.</p>
                <Link to="/">Read Diagnosis Guide &rarr;</Link>
              </div>
            </div>

            <div className="resource-item">
              <FiMail className="resource-icon feedback-icon" />
              <div className="resource-text">
                <h3>Submit Feedback</h3>
                <p>Got a suggestion or found a bug? Let us know!</p>
                {<a href="https://docs.google.com/forms/d/1e_a6KZ38AffVxsMC0Tu5xD7qZD5UwF6xgXd72IilyoE/edit" target='_main'>Submit Form &rarr;</a>}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;