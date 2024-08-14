import React from 'react';
import './Footer.css'; // Import your custom CSS
import logo from '../Assets/logo.png';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; // Import the Font Awesome icons

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <img src={logo} alt="Memory Power" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
            <button className="read-more-btn">Read More..</button>
          </div>
          <div className="footer-links">
            <div className="important-links">
              <h3>Important Links</h3>
              <ul>
                <li><a href="/Home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#founder">Meet Founder</a></li>
                <li><a href="#certificates">Our Certificates</a></li>
                <li><a href="#courses">Courses</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>
            <div className="more-links">
              <h3>More Links</h3>
              <ul>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#teacher-login">Teacher Login</a></li>
                <li><a href="#student-login">Student Login</a></li>
                <li><a href="#register">Register Now</a></li>
                <li><a href="#terms">Terms & Conditions</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#help">Help Desk</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="social-media">
            <a href="#facebook"><FaFacebook /></a>
            <a href="#instagram"><FaInstagram /></a>
            <a href="#twitter"><FaTwitter /></a>
          </div>
          <p>Copyright © Memorypower 2024.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;