import React, { Component } from 'react';
import { array, func } from 'prop-types';
import Card from '../Card';

class Planets extends Component {
  render() {
    const createCards = this.props.planets.map((planet, index) => {
      const favIds = this.props.favorites.map(fav => fav.id);
      const favStatus = favIds.includes(planet.id);
      return (
        <Card
          toggleFavorites={this.props.toggleFavorites}
          cardData={planet}
          isFav={favStatus}
          {...planet}
          key={planet.name + index}
        />
      );
    });

    return <section>{createCards}</section>;
  }
}

Planets.propTypes = {
  planets: array,
  favorites: array,
  toggleFavorites: func
};

export default Planets;
