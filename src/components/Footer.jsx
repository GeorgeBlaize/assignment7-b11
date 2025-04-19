import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo">Auction<span className="highlight">Gallery</span></div>
        <p>Bid. Win. Own.</p>
        <ul className="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/auctions">Auctions</a></li>
          <li><a href="/categories">Categories</a></li>
          <li><a href="/how-it-works">How it works</a></li>
        </ul>
        <p>© 2025 AuctionHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;