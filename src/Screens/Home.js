// Home.js
import React from 'react';
import Header from '../Components/Header';
import BookingSection from './BookingSection';
import SubscriptionCards from '../Components/Subscriptioncards';
import CardCarousel from '../Components/coursel';
import Footer from '../Components/footer';
import FeaturesSection from '../Components/FeatureSection';
const Home = () => {
  return (
    <div>
      <Header/>
      <BookingSection />
      <CardCarousel />
      <FeaturesSection />
      <SubscriptionCards/>
      <Footer/>
    </div>
  );
};

export default Home;
