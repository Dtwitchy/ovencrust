// frontend/src/components/Header/Header.js
import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % 13); // Total number of images is 13
    }, 4000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="outerHeader">
      <div className='header' style={{ backgroundImage: `url('/header_img${currentImage}.png')` }}>
        <div className="headerContent">
          <h2>Welcome to OvenCrust</h2>
          <p>
            Explore our eclectic menu featuring 
            a mouthwatering selection of cakes and pastries, 
            each meticulously crafted with premium 
            ingredients. Embark on a culinary adventure 
            and elevate your experience with 
            every delightful bite.
          </p>
          <a href="#exploreMenu"><button className="buttonwl">View Menu</button></a>
        </div>
      </div>
    </div>
  );
}

export default Header;