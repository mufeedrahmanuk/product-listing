import React from 'react';
import './Footer.css'; // Import the CSS file

import FooterVector from '../assets/footer.png';
import FooterIcon from '../assets/footericon.png';

import TelegramIcon from '../assets/telegram.png';
import TwitterIcon from '../assets/twitter.png';
import FacebookIcon from '../assets/facebook.png';
import InstagramIcon from '../assets/instagram.png';
import TiktokIcon from '../assets/tiktok.png';
import YoutubeIcon from '../assets/youtube.png';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bg">
        <img src={FooterVector} alt="Footer Background" />
      </div>
      <div className="footer-content">
        <div className="footer-left">
          <img className="footer-icon" src={FooterIcon} alt="Footer Icon" />
          <p className="footer-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="footer-section">
          <div className="footer-middle">
            <h3>Company</h3>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Our Work</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-middle">
            <h3>Products</h3>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Our Work</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-right">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <img src={TelegramIcon} alt="Telegram" className="social-icon" />
              <img src={TwitterIcon} alt="Twitter" className="social-icon" />
              <img src={YoutubeIcon} alt="Youtube" className="social-icon" />
              <img src={FacebookIcon} alt="Facebook" className="social-icon" />
              <img src={InstagramIcon} alt="Instagram" className="social-icon" />
              <img src={TiktokIcon} alt="Tiktok" className="social-icon" />
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

