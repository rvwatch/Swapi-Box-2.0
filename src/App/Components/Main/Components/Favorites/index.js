import React, { Component } from 'react';
import { array, func } from 'prop-types';
import './Favorites.css';
import Card from '../Card';

class Favorites extends Component {
  render() {
    const createCards = !this.props.favorites.length ? (
      <h1 className="no-favs-message">No Favorites Selected!</h1>
    ) : (
      this.props.favorites.map((favorite, index) => (
        <Card
          toggleFavorites={this.props.toggleFavorites}
          cardData={favorite}
          isFav={true}
          {...favorite}
          key={favorite.name + index}
        />
      ))
    );

    return <section>{createCards}</section>;
  }
}

Favorites.propTypes = {
  favorites: array,
  toggleFavorites: func
};

export default Favorites;
