// Home.js
import React from 'react';
import Header from '../Components/Header';
import BookingSection from './BookingSection';
import CardCarousel from '../Components/coursel';
import Footer from '../Components/footer';
const Home = () => {
  return (
    <div>
      <Header/>
      <BookingSection />
      <CardCarousel />
      <Footer/>
    </div>
  );
};

export default Home;
