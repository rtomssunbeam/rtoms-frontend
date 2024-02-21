// Footer.js

import React from 'react';
import './Footer.css'; // Import the CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/Concern">Contact Us</a>
        <a href="/FAQ">FAQ</a>
        <a href="#">Help</a>
        <a href="/Terms">Terms</a>
        <a href="#">Copyright</a>
      </div>
      <div className="footer-info">
      <p>@copyright RTOMS Team Sunbeam 2023</p>
      </div>
    </footer>
  );
}

export default Footer;
