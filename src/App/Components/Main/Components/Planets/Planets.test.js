import React from 'react';
import { shallow } from 'enzyme';
import Planets from './index';
import {
  mockCleanPlanets,
  mockFavorites
} from '../../../../../apiCalls/MockedData';

describe('Planets ', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Planets favorites={mockFavorites} planets={mockCleanPlanets} />
    );
  });
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
