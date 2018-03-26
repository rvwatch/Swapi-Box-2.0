import React from 'react';
import { shallow } from 'enzyme';
import Starships from './index';
import {
  mockCleanStarship,
  mockFavorites
} from '../../../../../apiCalls/MockedData';

describe('Starships ', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Starships favorites={mockFavorites} starships={mockCleanStarship} />
    );
  });
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
