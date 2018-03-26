import React from 'react';
import { shallow } from 'enzyme';
import People from './index';
import {
  mockCleanPeople,
  mockFavorites
} from '../../../../../apiCalls/MockedData';

describe('People ', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <People favorites={mockFavorites} people={mockCleanPeople} />
    );
  });
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
