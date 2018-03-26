import React, { Component } from 'react';
import { array, func } from 'prop-types';
import Card from '../Card';

class Starships extends Component {
  render() {
    const createCards = this.props.starships.map((ship, index) => {
      const favIds = this.props.favorites.map(fav => fav.id);
      const favStatus = favIds.includes(ship.id);
      return (
        <Card
          toggleFavorites={this.props.toggleFavorites}
          cardData={ship}
          isFav={favStatus}
          {...ship}
          key={ship.name + index}
        />
      );
    });

    return <section>{createCards}</section>;
  }
}

Starships.propTypes = {
  starships: array,
  favorites: array,
  toggleFavorites: func
};

export default Starships;
