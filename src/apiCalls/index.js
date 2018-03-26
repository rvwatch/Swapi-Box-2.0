export const getData = async url => {
  try {
    const response = await fetch(url);
    const starWarsData = await response.json();
    return starWarsData;
  } catch (errs) {
    throw new Error('getData has thrown an error');
  }
};

export const getScrollText = async url => {
  const filmData = await getData(url);
  const selectFilm = Math.floor(Math.random() * filmData.results.length);
  const { title, opening_crawl } = filmData.results[selectFilm];
  return { title, opening_crawl };
};

export const getPeopleData = async url => {
  const peopleData = await getData(url);

  const peoplePromises = peopleData.results.map(async (person, index) => {
    const homeworld = await getData(person.homeworld);
    const species = await getData(person.species);
    return {
      name: person.name,
      homeworld: homeworld.name,
      population: homeworld.population,
      species: species.name,
      id: person.name + index
    };
  });
  return Promise.all(peoplePromises);
};

export const getPlanetData = async url => {
  const planetData = await getData(url);

  const planetPromises = planetData.results.map(async (planet, index) => {
    const { name, terrain, population, climate, residents } = planet;
    const residentList = await getResidents(residents);
    return {
      name,
      terrain,
      population,
      climate,
      residents: [...residentList],
      id: name + index
    };
  });
  return Promise.all(planetPromises);
};

export const getResidents = async residentUrls => {
  const residentPromises = residentUrls.map(async url => {
    const person = await getData(url);
    return { name: person.name };
  });
  return Promise.all(residentPromises);
};

export const getVehicleData = async url => {
  const vehicleData = await getData(url);

  const vehiclePromises = vehicleData.results.map(async (vehicle, index) => {
    const { name, model, vehicle_class, passengers } = vehicle;
    return {
      name,
      model,
      vehicle_class,
      passengers,
      id: name + index
    };
  });
  return Promise.all(vehiclePromises);
};

export const getStarshipData = async url => {
  const starshipData = await getData(url);

  const starshipPromises = starshipData.results.map(async (ship, index) => {
    const { name, model, starship_class, passengers, crew, length } = ship;
    return {
      name,
      model,
      starship_class,
      passengers,
      crew,
      length,
      id: name + index
    };
  });
  return Promise.all(starshipPromises);
};
