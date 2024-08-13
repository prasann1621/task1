import React from 'react';
import Header from './Components/Header';
import BookingSection from './Components/BookingSection';
import FeaturesSection from './Components/FeatureSection';
import Footer from './Components/footer'
import './App.css';
import CardCarousel from './Components/coursel';


const App = () => {
    return (
        <div className="App">
            <Header/>
            <BookingSection/>
            <FeaturesSection/>
            <CardCarousel/>
            <Footer/>
            
           
        </div>
    );
};

export default App;
