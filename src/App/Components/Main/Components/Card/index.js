import React from 'react';
import { array, func, string, number, object, bool } from 'prop-types';
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
      <h2>{`Name: ${name}`}</h2>
      <p>{homeworld}</p>
      <p>{population}</p>
      <p>{species}</p>

      <p>{terrain}</p>
      <p>{climate}</p>
      <p>{residentNames}</p>

      <p>{model}</p>
      <p>{vehicle_class}</p>
      <p>{passengers}</p>
    </article>
  );
};

Card.propTypes = {
  name: string,
  homeworld: string,
  population: number,
  species: string,
  climate: string,
  terrain: string,
  residents: array,
  vehicle_class: string,
  model: string,
  passengers: number,
  id: string,
  toggleFavorites: func,
  cardData: object,
  isFav: bool
};

export default Card;
