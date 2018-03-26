import React, { Component } from 'react';
import Main from '../App/Components/Main';
import './App.css';
import Header from '../App/Components/Header';
import {
  getScrollText,
  getPeopleData,
  getPlanetData,
  getVehicleData,
  getStarshipData
} from '../apiCalls/';

class App extends Component {
  constructor() {
    super();
    this.state = {
      scrollText: {},
      people: [],
      planets: [],
      vehicles: [],
      starships: [],
      favorites: []
    };
  }

  async componentDidMount() {
    const scrollText = await getScrollText('https://swapi.co/api/films/');
    this.setState({ scrollText });
    const people = await getPeopleData('https://swapi.co/api/people');
    this.setState({ people });
    const planets = await getPlanetData('https://swapi.co/api/planets/');
    this.setState({ planets });
    const vehicles = await getVehicleData('https://swapi.co/api/vehicles/');
    this.setState({ vehicles });
    const starships = await getStarshipData('https://swapi.co/api/starships/');
    this.setState({ starships });
  }

  toggleFavorites = selectedCard => {
    const duplicateRemoved = this.state.favorites.filter(
      card => card.id !== selectedCard.id
    );

    const favorites =
      duplicateRemoved.length !== this.state.favorites.length
        ? [...duplicateRemoved]
        : [...this.state.favorites, selectedCard];

    this.setState({ favorites });
  };

  render() {
    return (
      <section className="app-wrap">
        <div className="stars" />
        <div className="twinkling" />
        <Header />
        <Main toggleFavorites={this.toggleFavorites} {...this.state} />
      </section>
    );
  }
}

export default App;
