import React from 'react';
import './Favorites.css';

const Favorites = ({ favorites, removeFromFavorites }) => {
  const totalBidAmount = favorites.reduce((total, item) => total + item.currentBidPrice, 0);

  return (
    <div className="favorites">
      <h3>❤️ Favorite Items</h3>
      {favorites.length === 0 ? (
        <div>
          <p>No favorites yet</p>
          <p>Click the heart icon on any item to add it to your favorites</p>
        </div>
      ) : (
        <ul>
          {favorites.map((item) => (
            <li key={item.id}>
              <span>{item.title}</span>
              <span>${item.currentBidPrice}</span>
              <span>Bids: {item.bidsCount}</span>
              <button onClick={() => removeFromFavorites(item)}>❌</button>
            </li>
          ))}
        </ul>
      )}
      <p>Total bid amount: ${totalBidAmount}</p>
    </div>
  );
};

export default Favorites;