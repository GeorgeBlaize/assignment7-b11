import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import ActiveAuctions from './components/ActiveAuctions';
import Favorites from './components/Favorites';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (item) => {
    setFavorites([...favorites, item]);
  };

  const removeFromFavorites = (item) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== item.id);
    setFavorites(updatedFavorites);
  };

  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Banner />
      <div className="main-content">
        <ActiveAuctions addToFavorites={addToFavorites} />
        <Favorites favorites={favorites} removeFromFavorites={removeFromFavorites} />
      </div>
      <Footer />
    </div>
  );
};

export default App;