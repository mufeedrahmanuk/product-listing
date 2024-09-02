import React from 'react';
import Logo from '../assets/Logo.png';
import './Header.css';

const Header = () => {
  return (
    <header> 
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <nav>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Blog</a>
        <a href="/">Pricing</a>
      </nav>
      <button className="login-btn">Login</button>
    </header>
  );
};

export default Header;
