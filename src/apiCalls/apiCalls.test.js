import {
  getData,
  getScrollText,
  getPeopleData,
  getPlanetData,
  getVehicleData,
  getStarshipData
} from './index';
import {
  mockUrl,
  mockSingleFilm,
  mockApiFilm,
  mockApiPeople,
  mockCleanPeople,
  mockCleanPlanets,
  mockPlanetData,
  mockVehicleData,
  mockCleanVehicle,
  mockStarshipData,
  mockCleanStarship
} from './MockedData';

describe('getData - The Fetch Call', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([mockApiFilm])
      })
    );
  });

  it('calls a fetch with the correct URL', () => {
    getData(mockUrl);
    expect(window.fetch).toHaveBeenCalledWith(mockUrl);
  });

  it('should get data from the api if the status is ok', () => {
    expect(getData()).resolves.toEqual([mockApiFilm]);
  });

  it('throws an error if the status is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false
      })
    );
    expect(getData()).rejects.toEqual(Error('getData has thrown an error'));
  });
});

describe('getScrollText', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockApiFilm)
      })
    );
  });

  it('should return a single object with a title and scroll text', () => {
    const scrollText = getScrollText();

    expect(scrollText).resolves.toEqual(mockSingleFilm);
  });
});

describe('getPeopleData', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockApiPeople)
      })
    );
  });

  it('should return people data', async () => {
    const people = await getPeopleData();
    await expect(people).toEqual(mockCleanPeople);
  });
});

describe('getPlanetData', async () => {
  let getResidents;
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(mockPlanetData)
      })
    );

    getResidents = jest.fn();
  });

  it('should return planet data', async () => {
    const returnedPlanet = await getPlanetData(mockUrl);
    expect(getResidents).toHaveBeenCalled;
    expect(window.fetch).toHaveBeenCalledWith(mockUrl);

    expect(returnedPlanet).toEqual(mockCleanPlanets);
  });
});

describe('getVehicleData', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockVehicleData)
      })
    );
  });

  it('should return vehicle data', async () => {
    const vehicles = await getVehicleData();
    expect(vehicles).toEqual(mockCleanVehicle);
  });
});

describe('getStarshipData', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockStarshipData)
      })
    );
  });

  it('should return starship data', async () => {
    const starship = await getStarshipData();
    expect(starship).toEqual(mockCleanStarship);
  });
});
