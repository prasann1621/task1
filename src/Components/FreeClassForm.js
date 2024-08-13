import React, { useState } from 'react';
import './FreeClassForm.css';
import logo from '../Assets/freeclass.png';

const FreeClassForm = () => {
  const [fullname, setFullname] = useState('');
  const [contactNo, setContactNo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${fullname}\nContact No: ${contactNo}`);
  };

  return (
    <div className="form-container">
      <div className="logo">
        <img src={logo} alt="The Memory Power" />
      </div>
      <h2>Book Your Free Class</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter Your Fullname" 
          value={fullname} 
          onChange={(e) => setFullname(e.target.value)} 
          required 
        />
        <div className="phone-input">
          <span className="country-code">+91</span>
          <input 
            type="tel" 
            placeholder="Contact No." 
            value={contactNo} 
            onChange={(e) => setContactNo(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">REGISTER</button>
      </form>
      <p>By clicking the 'Schedule a FREE Class' button you agree to Whitehat Jr Terms & Conditions.</p>
      <p>Already have account?</p>
    </div>
  );
};

export default FreeClassForm;
