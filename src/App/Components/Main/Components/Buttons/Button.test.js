import React from 'react';
import { shallow } from 'enzyme';
import FavButton from './index';

describe('Button ', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<FavButton />);
  });
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
