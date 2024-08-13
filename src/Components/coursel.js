import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel CSS
import './CardCarousel.css'; // Import the custom CSS file

import carousel1 from '../Assets/carousel1.png';
import carousel2 from '../Assets/carousel2.png';
import carousel3 from '../Assets/carousel3.png';

const CardCarousel = () => {
  return (
    <div className="card-carousel-container">
     
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={true}  // Thumbnails added
        autoPlay={true}
        interval={3000}
      >
        <div className="carousel-card">
          <img src={carousel1} alt="Card 1" />
        </div>
        <div className="carousel-card">
          <img src={carousel2} alt="Card 2" />
        </div>
        <div className="carousel-card">
          <img src={carousel3} alt="Card 3" />
        </div>
      </Carousel>
      <h2 className="card-carousel-header">Overview</h2>
      <p className="card-carousel-paragraph">
        "THE MEMORY POWER” is an EdTech startup company that equips students with the skillset and mindset required to be the future of the companies worldwide. We connect a deep understanding of education with the power of the “21st CENTURY LIFE SKILLS” to make your child ready to face this competitive and challenging world. The universe is a subject created in the minds of humans addressed by the facts and theories since centuries. To think about it in detail requires the strength of knowledge and experience which are used to lead an intellectual life.
      </p>
    </div>
  );
};

export default CardCarousel;
