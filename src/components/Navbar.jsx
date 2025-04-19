import React, { useState } from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
  };

  const handleProfileClick = () => {
   
    console.log('Navigate to profile page');
  };

  return (
    <nav className="navbar">
      <div className="logo">
        Auction<span className="highlight">Gallery</span>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/auctions">Auctions</a></li>
        <li><a href="/categories">Categories</a></li>
        <li><a href="/how-it-works">How it works</a></li>
      </ul>
      <div className="user-actions">
        <div className="notification">
          <FaBell className="icon" onClick={handleNotificationClick} />
          <span className="badge">9</span>
          {showNotifications && (
            <div className="notification-dropdown">
              <p>You have 9 new notifications!</p>
            </div>
          )}
        </div>
        <div className="user-profile">
          <FaUserCircle className="icon" onClick={handleProfileClick} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;