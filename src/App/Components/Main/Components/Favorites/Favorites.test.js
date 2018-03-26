import React from 'react';
import { shallow } from 'enzyme';
import Favorites from './index';
import { mockFavorites } from '../../../../../apiCalls/MockedData';

describe('Favorites ', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Favorites favorites={mockFavorites} />);
  });
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
