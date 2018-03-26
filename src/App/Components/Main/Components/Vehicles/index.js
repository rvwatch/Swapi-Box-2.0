import React, { Component } from 'react';
import { array, func } from 'prop-types';
import Card from '../Card';

class Vehicles extends Component {
  render() {
    const createCards = this.props.vehicles.map((vehicle, index) => {
      const favIds = this.props.favorites.map(fav => fav.id);
      const favStatus = favIds.includes(vehicle.id);
      return (
        <Card
          toggleFavorites={this.props.toggleFavorites}
          cardData={vehicle}
          isFav={favStatus}
          {...vehicle}
          key={vehicle.name + index}
        />
      );
    });

    return <section>{createCards}</section>;
  }
}

Vehicles.propTypes = {
  vehicles: array,
  planets: array,
  starships: array,
  favorites: array,
  toggleFavorites: func
};

export default Vehicles;
