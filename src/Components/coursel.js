import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel CSS
// Suggested code may be subject to a license. Learn more: ~LicenseLog:626284272.
import student from '../Assets/student.png';


const CardCarousel = () => {
  return (
    <Carousel 
      showArrows={true} 
      infiniteLoop={true} 
      showThumbs={false} 
      autoPlay={true}
      interval={3000} // Optional: Adjust autoplay interval
    >
      <div>
        <img src="https://via.placeholder.com/600x300" alt="Card 1" />
     <div className="card1"></div>
      </div>
      <div>
        <img src="https://via.placeholder.com/600x300" alt="Card 2" />
        
      </div>
      <div>
        <img src={student} alt="Card 3" />
       
      </div>
    </Carousel>
  );
};

export default CardCarousel;
