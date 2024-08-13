// src/AboutUs.js
import React from 'react';
import Header from '../Components/Header';
import './Aboutus.css'; // Import the CSS file for styling
import anu from '../Assets/anu.png';
import scott from '../Assets/scott.png';
import studying from '../Assets/studying.png'; // Update path if necessary
import Footer from '../Components/footer';
const AboutUs = () => {
  return (
    <div className="about-us-container">
      <Header/>
      <div className="founders-section">
        <h2>Meet our Founders</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae congue quam. Nullam in aliquam urna. Cras scelerisque ultrices laoreet.</p>
        <div className="founder-container">
          <div className="founder">
            <img src={anu} alt="Sophia Patel" />
            <h3>Sophia Patel</h3>
            <p>CO-FOUNDER & CO-CEO</p>
          </div>
          <div className="founder">
            <img src={scott} alt="Benjamin Harrison" />
            <h3>Benjamin Harrison</h3>
            <p>Chairman</p>
          </div>
        </div>
      </div>

      <div className="learning-section">
        <img src={studying} alt="Student" className="student-img" />
        <h2>We Provide You a Comfortable Learning Experience</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed iaculis elit. Ut eu purus vitae turpis commodo dictum at.</p>
        <ul>
          <li>You work in a comfortable seat</li>
          <li>In-Depth Explanation</li>
          <li>Motivation and Accountability</li>
        </ul>
      </div>

      <div className="benefits-section">
        <h2>Voluptatem dignissimos provident quasi</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae congue quam. Nullam in aliquam urna. Cras scelerisque ultrices laoreet.</p>
        <ul>
          <li>Corporis voluptates sit</li>
          <li>Ullamco laboris nisi</li>
          <li>Labore consequatur</li>
          <li>Beatae veritatis</li>
        </ul>
      </div>

      <div className="faq-section">
        <h2>Still have questions?</h2>
        <p>Cannot find the answer you are looking for? Please chat with our friendly team.</p>
      </div>

      <div className="team-section">
        <h3>From our team</h3>
        <blockquote>
          "Success is the sum of small efforts, repeated day in and day out."
          <cite>— Tim Cook, Web Developer, Untitled</cite>
        </blockquote>
      </div>

      <div className="newsletter-section">
        <h2>Join 10,000+ Students</h2>
        <p>Stay in the loop with everything you need to know.</p>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
        <p>We care about your data in our privacy policy</p>
      </div>

      <div className="footer-section">
        <p>Memory Power is the top coding learning platform for young minds.</p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
