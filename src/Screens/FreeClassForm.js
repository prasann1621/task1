import React, { useRef } from 'react';
import './FreeClassForm.css';
import logo from '../Assets/freeclass.png';
import backgroundImage from '../Assets/background.png'; // Import the background image

const FreeClassForm = () => {
  const fullnameRef = useRef(null);
  const contactNoRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullname = fullnameRef.current.value;
    const contactNo = contactNoRef.current.value;
    alert(`Name: ${fullname}\nContact No: ${contactNo}`);
  };

  return (
    <div className="screen-container">
      {/* Background Image */}
      <img src={backgroundImage} alt="Background" className="background-image" />

      {/* Form Container */}
      <div className="form-container">
        <div className="logo">
          <img src={logo} alt="The Memory Power" />
        </div>
        <h2>Book Your Free Class</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Enter Your Fullname" 
            ref={fullnameRef}
            required 
          />
          <div className="phone-input">
            <span className="country-code">+91</span>
            <input 
              type="tel" 
              placeholder="Contact No." 
              ref={contactNoRef}
              required 
            />
          </div>
          <button type="submit">REGISTER</button>
        </form>
        <p>By clicking the 'Schedule a FREE Class' button you agree to Whitehat Jr Terms & Conditions.</p>
        <p>Already have account?</p>
      </div>
    </div>
  );
};

export default FreeClassForm;