// src/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <a href="#top" className="back-to-top">Back to top</a>
      </div>
      <div className="footer-main">
        <div className="footer-column">
          <h3>Get to Know Us</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press Releases</a></li>
            <li><a href="#">Amazon Cares</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Make Money with Us</h3>
          <ul>
            <li><a href="#">Sell on Amazon</a></li>
            <li><a href="#">Affiliate Program</a></li>
            <li><a href="#">Advertise Your Products</a></li>
            <li><a href="#">Amazon Pay</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Amazon Payment Products</h3>
          <ul>
            <li><a href="#">Amazon Business Card</a></li>
            <li><a href="#">Shop with Points</a></li>
            <li><a href="#">Reload Your Balance</a></li>
            <li><a href="#">Amazon Currency Converter</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Let Us Help You</h3>
          <ul>
            <li><a href="#">Your Account</a></li>
            <li><a href="#">Returns Centre</a></li>
            <li><a href="#">100% Purchase Protection</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-countries">
          <a href="#">Australia</a>
          <a href="#">Brazil</a>
          <a href="#">Canada</a>
          <a href="#">China</a>
          <a href="#">France</a>
          <a href="#">Germany</a>
          <a href="#">Italy</a>
          <a href="#">Japan</a>
          <a href="#">Mexico</a>
          <a href="#">Netherlands</a>
          <a href="#">Spain</a>
          <a href="#">United Kingdom</a>
          <a href="#">United States</a>
        </div>
        <div className="footer-disclaimer">
          <span>© 1996-2024, Amazon.com, made by Vikash</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
