import React from 'react';
import './Main.css';
import { array, func, object } from 'prop-types';
import { Route } from 'react-router-dom';
import People from './Components/People';
import Planets from './Components/Planets';
import Vehicles from './Components/Vehicles';
import Scroller from './Components/Scroller';
import Favorites from './Components/Favorites';
import Starships from './Components/Starships';

const Main = ({
  scrollText,
  people,
  planets,
  vehicles,
  starships,
  favorites,
  toggleFavorites
}) => (
  <section className="main-wrap">
    <Route exact path="/" render={() => <Scroller {...scrollText} />} />
    <Route
      exact
      path="/people"
      render={() => (
        <People
          toggleFavorites={toggleFavorites}
          people={people}
          favorites={favorites}
        />
      )}
    />
    <Route
      exact
      path="/planets"
      render={() => (
        <Planets
          toggleFavorites={toggleFavorites}
          planets={planets}
          favorites={favorites}
        />
      )}
    />
    <Route
      exact
      path="/vehicles"
      render={() => (
        <Vehicles
          toggleFavorites={toggleFavorites}
          vehicles={vehicles}
          favorites={favorites}
        />
      )}
    />
    <Route
      exact
      path="/starships"
      render={() => (
        <Starships
          toggleFavorites={toggleFavorites}
          starships={starships}
          favorites={favorites}
        />
      )}
    />
    <Route
      exact
      path="/favorites"
      render={() => (
        <Favorites toggleFavorites={toggleFavorites} favorites={favorites} />
      )}
    />
  </section>
);

Main.propTypes = {
  scrollText: object,
  people: array,
  planets: array,
  vehicles: array,
  starships: array,
  favorites: array,
  toggleFavorites: func
};

export default Main;
