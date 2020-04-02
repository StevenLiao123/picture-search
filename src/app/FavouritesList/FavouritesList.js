import React from "react";
import { Link } from 'react-router-dom';
import './FavouritesList.css';

export default () => {
  return (
    <div className="favourites-list">
      FavouritesList
      <Link to="/gallery">Gallery</Link>
    </div>
  );
};
