import React, { Component } from 'react';
import { array, func } from 'prop-types';
import Card from '../Card';

class People extends Component {
  render() {
    const createCards = this.props.people.map(person => {
      const favIds = this.props.favorites.map(fav => fav.id);
      const favStatus = favIds.includes(person.id);

      return (
        <Card
          toggleFavorites={this.props.toggleFavorites}
          cardData={person}
          isFav={favStatus}
          {...person}
          key={person.id}
        />
      );
    });
    return <section>{createCards}</section>;
  }
}

People.propTypes = {
  people: array,
  favorites: array,
  toggleFavorites: func
};

export default People;
