export const mockUrl = 'starwars.com';

export const mockUrlArray = ['starwars.com', 'starwars.com', 'starwars.com'];

export const mockSingleFilm = {
  title: 'Movie!',
  opening_crawl: 'Movie text!'
};

export const mockApiFilm = {
  results: [
    { title: 'Movie!', opening_crawl: 'Movie text!' },
    { title: 'Movie!', opening_crawl: 'Movie text!' },
    { title: 'Movie!', opening_crawl: 'Movie text!' }
  ]
};

export const mockPerson = {
  name: 'Luke Skywalker',
  homeworld: 'Tatooine',
  population: 200000,
  species: 'Human'
};

export const mockApiPeople = {
  results: [
    {
      name: 'Luke Skywalker',
      homeworld: 'Tatooine',
      population: 200000,
      species: 'Human'
    },
    {
      name: 'C-3PO',
      homeworld: 'Tatooine',
      population: 200000,
      species: 'Droid'
    },
    {
      name: 'Obi-Wan Kenobi',
      homeworld: 'Stewjon',
      population: 'unknown',
      species: 'Human'
    }
  ]
};

export const mockCleanPeople = [
  {
    homeworld: undefined,
    id: 'Luke Skywalker0',
    name: 'Luke Skywalker',
    population: undefined,
    species: undefined
  },
  {
    homeworld: undefined,
    id: 'C-3PO1',
    name: 'C-3PO',
    population: undefined,
    species: undefined
  },
  {
    homeworld: undefined,
    id: 'Obi-Wan Kenobi2',
    name: 'Obi-Wan Kenobi',
    population: undefined,
    species: undefined
  }
];

export const mockPlanetData = {
  results: [
    {
      name: 'Tatooine',
      rotation_period: '23',
      orbital_period: '304',
      diameter: '10465',
      climate: 'arid',
      gravity: '1 standard',
      terrain: 'desert',
      surface_water: '1',
      population: '200000',
      residents: ['']
    },
    {
      name: 'Tatooine',
      rotation_period: '23',
      orbital_period: '304',
      diameter: '10465',
      climate: 'arid',
      gravity: '1 standard',
      terrain: 'desert',
      surface_water: '1',
      population: '200000',
      residents: ['']
    },
    {
      name: 'Tatooine',
      rotation_period: '23',
      orbital_period: '304',
      diameter: '10465',
      climate: 'arid',
      gravity: '1 standard',
      terrain: 'desert',
      surface_water: '1',
      population: '200000',
      residents: ['']
    }
  ]
};

export const mockCleanPlanets = [
  {
    climate: 'arid',
    id: 'Tatooine0',
    name: 'Tatooine',
    population: '200000',
    residents: [{ name: undefined }],
    terrain: 'desert'
  },
  {
    climate: 'arid',
    id: 'Tatooine1',
    name: 'Tatooine',
    population: '200000',
    residents: [{ name: undefined }],
    terrain: 'desert'
  },
  {
    climate: 'arid',
    id: 'Tatooine2',
    name: 'Tatooine',
    population: '200000',
    residents: [{ name: undefined }],
    terrain: 'desert'
  }
];

export const mockResidents = [
  { name: 'Luke Skywalker' },
  { name: 'Luke Skywalker' },
  { name: 'Luke Skywalker' }
];

export const mockVehicleData = {
  results: [
    {
      name: 'Sand Crawler',
      model: 'Digger Crawler',
      manufacturer: 'Corellia Mining Corporation',
      cost_in_credits: '150000',
      length: '36.8',
      max_atmosphering_speed: '30',
      crew: '46',
      passengers: '30',
      cargo_capacity: '50000',
      consumables: '2 months',
      vehicle_class: 'wheeled',
      pilots: [],
      films: ['https://swapi.co/api/films/5/', 'https://swapi.co/api/films/1/'],
      created: '2014-12-10T15:36:25.724000Z',
      edited: '2014-12-22T18:21:15.523587Z',
      url: 'https://swapi.co/api/vehicles/4/'
    }
  ]
};

export const mockCleanVehicle = [
  {
    id: 'Sand Crawler0',
    model: 'Digger Crawler',
    name: 'Sand Crawler',
    passengers: '30',
    vehicle_class: 'wheeled'
  }
];

export const mockSelectedCard1 = {
  name: 'Luke Skywalker',
  homeworld: 'Tatooine',
  population: 200000,
  species: 'Human',
  id: 1
};

export const mockSelectedCard2 = {
  name: 'Luke Skywalker',
  homeworld: 'Tatooine',
  population: 200000,
  species: 'Human',
  id: 2
};

export const mockSelectedCard3 = {
  name: 'Luke Skywalker',
  homeworld: 'Tatooine',
  population: 200000,
  species: 'Human',
  id: 3
};

export const mockFavorites = [
  {
    name: 'Luke Skywalker',
    homeworld: 'Tatooine',
    population: 200000,
    species: 'Human',
    id: 1
  },
  {
    name: 'Luke Skywalker',
    homeworld: 'Tatooine',
    population: 200000,
    species: 'Human',
    id: 2
  },
  {
    name: 'Luke Skywalker',
    homeworld: 'Tatooine',
    population: 200000,
    species: 'Human',
    id: 3
  }
];

export const mockStarshipData = {
  results: [
    {
      MGLT: '40',
      cargo_capacity: '250000000',
      consumables: '6 years',
      cost_in_credits: '1143350000',
      created: '2014-12-15T12:31:42.547000Z',
      crew: '279144',
      edited: '2017-04-19T10:56:06.685592Z',
      films: (2)[
        ('https://swapi.co/api/films/2/', 'https://swapi.co/api/films/3/')
      ],
      hyperdrive_rating: '2.0',
      length: '19000',
      manufacturer: 'Kuat Drive Yards, Fondor Shipyards',
      max_atmosphering_speed: 'n/a',
      model: 'Executor-class star dreadnought',
      name: 'Executor',
      passengers: '38000',
      pilots: [],
      starship_class: 'Star dreadnought',
      url: 'https://swapi.co/api/starships/15/'
    }
  ]
};

export const mockCleanStarship = [
  {
    crew: '279144',
    id: 'Executor0',
    length: '19000',
    model: 'Executor-class star dreadnought',
    name: 'Executor',
    passengers: '38000',
    starship_class: 'Star dreadnought'
  }
];
