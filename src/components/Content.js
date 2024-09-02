import React from 'react';
import './Content.css';

import Plant from '../assets/tree.png';
import Background from '../assets/tree-background.png';

const Content = () => {
  return (
    <section className="content">
      <div className="text">
        <h2>LOREM IPSUM DOLOR SIT AMET.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="read-more1">Read More</button>
      </div>
      <div className="image-wrapper">
        <div className="background">
          <img src={Background} alt="Background" />
        </div>
        <div className="image">
          <img src={Plant} alt="Plant" />
        </div>
      </div>
    </section>
  );
};

export default Content;
