import React from 'react';
import AuctionItem from './AuctionItem';
import bidItems from '../data/bidItems.json';
import './ActiveAuctions.css';

const ActiveAuctions = ({ addToFavorites }) => {
  return (
    <div className="active-auctions">
      <h2>Active Auctions</h2>
      <p>Discover and bid on extraordinary items</p>
      <table>
        <thead>
          <tr>
            <th>Items</th>
            <th>Current Bid</th>
            <th>Time Left</th>
            <th>Bid Now</th>
          </tr>
        </thead>
        <tbody>
          {bidItems.slice(0, 6).map((item) => (
            <AuctionItem key={item.id} item={item} addToFavorites={addToFavorites} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActiveAuctions;