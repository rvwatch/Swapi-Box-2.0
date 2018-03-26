import React from 'react';
import { shallow } from 'enzyme';
import Vehicles from './index';
import {
  mockCleanVehicle,
  mockFavorites
} from '../../../../../apiCalls/MockedData';

describe('Vehicles ', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Vehicles favorites={mockFavorites} vehicles={mockCleanVehicle} />
    );
  });
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
