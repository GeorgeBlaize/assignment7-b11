import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>Bid on Unique Items from Around the World</h1>
        <p>Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions</p>
        <button className="explore-btn">Explore Auctions</button>
      </div>
    </div>
  );
};

export default Banner;