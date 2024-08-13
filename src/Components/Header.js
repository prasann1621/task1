import React from 'react';
import './Header.css';
import logo from '../Assets/logo.png';



const Header = () => {
    return (
        <header>
           <div className="logo">
    <img src={logo} alt="Memory Power" />
</div>


            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/courses">Courses</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
            </nav>
            <div className="cta-buttons">
                <button className="join-class">Join Class</button>
                <button className="book-trial">Book A Free Trial</button>
            </div>
        </header>
    );
};

export default Header;
