import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AuctionItem = ({ item, addToFavorites }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavorite = () => {
    if (!isFavorited) {
      addToFavorites(item);
      setIsFavorited(true);
      toast.success(`${item.title} added to favorites!`);
    }
  };

  return (
    <tr>
      <td>
        <img src={item.image} alt={item.title} style={{ width: '50px', height: '50px' }} />
        {item.title}
      </td>
      <td>${item.currentBidPrice}</td>
      <td>{item.timeLeft}</td>
      <td>
        
        <button
          className={`favorite-btn ${isFavorited ? 'favorited' : ''}`}
          onClick={handleFavorite}
          disabled={isFavorited}
        >
          ❤️
        </button>
      </td>
    </tr>
  );
};

export default AuctionItem;