import React from 'react';
import { func, object } from 'prop-types';

const FavButton = ({ toggleFavorites, cardData }) => {
  return <button onClick={() => toggleFavorites(cardData)}>fav</button>;
};

FavButton.propTypes = {
  cardData: object,
  toggleFavorites: func
};

export default FavButton;
