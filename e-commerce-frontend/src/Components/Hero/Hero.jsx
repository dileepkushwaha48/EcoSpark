import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
// import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>TRASH TO TREASURE</h2>
        <div>
          <div className="hero-hand-icon">
            <p>EcoSpark:</p>
            <img src={hand_icon} alt="hand icon" />
          </div>
          <p></p>
          <p>From Your Kitchen to Clean Energy.</p>
        </div>
        <div className="hero-latest-btn">
         <p>A Small step towards  Sustainability</p>
          
        </div>
      </div>
     
    </div>
  );
};

export default Hero;
