import React, { useState } from 'react';
import ToggleSwitch from '../Components/ToggleSwitch';
import './BookingSection.css';
import student from '../Assets/student.png';

const BookingSection = () => {
    const [forKids, setForKids] = useState(true);

    return (
        <section className="booking-section">
            <h2>Online Education Courses</h2>
            <p>"For Everyone"</p>
            <div className="booking-container">
                <div className="booking-box">
                    <h3>Book your free class now</h3>
                    <ToggleSwitch isOn={forKids} onToggle={() => setForKids(!forKids)} />
                    <div className="grade-selector">
                        {Array.from({ length: 12 }).map((_, index) => (
                            <button key={index}>Class {index + 1}</button>
                        ))}
                    </div>
                    <button className="schedule-btn">Schedule a FREE Class</button>
                </div>
                <img src={student} alt="Student" className="student-image" />
            </div>
        </section>
    );
};

export default BookingSection;
