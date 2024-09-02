import React from 'react';
import './Hero.css';

// Import images
import Vector1 from '../assets/Vector1.png';
import Vector2 from '../assets/Vector2.png';
import Vector3 from '../assets/Vector3.png';
import Vector4 from '../assets/Vector4.png';
import Vector5 from '../assets/Vector5.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="vector1">
        <img src={Vector1} alt="Vector1"/>
      </div>
      <div className="vector2">
        <img src={Vector2} alt="Vector2"/>
      </div>
      <div className="vector4">
        <img src={Vector4} alt="Vector4"/>
      </div>
      <div className="vector3">
        <img src={Vector3} alt="Vector3"/>
      </div>
      <div className="vector5">
        <img src={Vector5} alt="Vector5"/>
      </div>
      <h1>LOREM IPSUM DOLOR SIT AMET.</h1>
      <button className="read-more">Read More</button>
    </section>
  );
};

export default Hero;
