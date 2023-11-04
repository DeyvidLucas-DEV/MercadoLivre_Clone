import React, { useState, useEffect } from 'react'; 
import '../css/Banner.style.css'
import Slide1 from '../image/slide1.webp';
import Slide2 from '../image/slide2.webp';
import Slide3 from '../image/slide3.webp';

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide % 3) + 1); 
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  const handleRadioChange = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };

  return (
    <div className="BannerContainer">
      <div className="slides">
        <input type="radio" name="radio-btn" id="radio1" checked={currentSlide === 1} onChange={() => handleRadioChange(1)} />
        <input type="radio" name="radio-btn" id="radio2" checked={currentSlide === 2} onChange={() => handleRadioChange(2)} />
        <input type="radio" name="radio-btn" id="radio3" checked={currentSlide === 3} onChange={() => handleRadioChange(3)} />

        <div className="image" style={{ transform: `translateX(-${(currentSlide - 1) * 100}%)` }}>
          <img src={Slide1} alt="image1" />
        </div>
        <div className="image" style={{ transform: `translateX(-${(currentSlide - 1) * 100}%)` }}>
          <img src={Slide2} alt="image2" />
        </div>
        <div className="image" style={{ transform: `translateX(-${(currentSlide - 1) * 100}%)` }}>
          <img src={Slide3} alt="image3" />
        </div>
      </div>
      <div className="manual-navigation">
        <label htmlFor="radio1" className='manual-btn'></label>
        <label htmlFor="radio2" className='manual-btn'></label>
        <label htmlFor="radio3" className='manual-btn'></label>
      </div>
    </div>
  );
}