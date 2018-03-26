import React from 'react';
import { array, func, string, object, bool, PropTypes } from 'prop-types';
import './Card.css';
import FavButton from '../Buttons';

const Card = ({
  name,
  homeworld,
  population,
  species,
  climate,
  terrain,
  residents,
  vehicle_class,
  model,
  passengers,
  crew,
  length,
  starship_class,
  id,
  toggleFavorites,
  cardData,
  isFav
}) => {
  const residentNames = residents
    ? residents.map(resident => resident.name)
    : '';

  const favStatus = isFav ? 'favorite' : 'NO!';
  return (
    <article className={`card-wrap ${favStatus}`} id={id}>
      <FavButton cardData={cardData} toggleFavorites={toggleFavorites} />
      <h2>{name}</h2>
      <p>{homeworld}</p>
      <p>{population}</p>
      <p>{species}</p>

      <p>{terrain}</p>
      <p>{climate}</p>
      <p>{residentNames}</p>

      <p>{model}</p>
      <p>{vehicle_class}</p>
      <p>{passengers}</p>

      <p>{starship_class}</p>
      <p>{crew}</p>
      <p>{length}</p>
    </article>
  );
};

Card.propTypes = {
  name: string,
  homeworld: string,
  population: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  species: string,
  climate: string,
  terrain: string,
  residents: array,
  vehicle_class: string,
  model: string,
  passengers: string,
  crew: string,
  length: string,
  starship_class: string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  toggleFavorites: func,
  cardData: object,
  isFav: bool
};

export default Card;
