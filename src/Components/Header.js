import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../Assets/logo.png';

const Header = () => {
    const navigate = useNavigate();

    const handleJoinClassClick = () => {
        navigate('FreeClassForm');
    };

    const handleBookTrialClick = () => {
        navigate('./FreeClassForm');
    };

    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Memory Power" />
            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/aboutus">About Us</a></li>
                    <li><a href="/courses">Courses</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
            </nav>
            <div className="cta-buttons">
                <button className="join-class" onClick={handleJoinClassClick}>Join Class</button>
                <button className="book-trial" onClick={handleBookTrialClick}>Book A Free Trial</button>
            </div>
        </header>
    );
};

export default Header;