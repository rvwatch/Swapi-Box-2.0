import React from 'react';
import { shallow } from 'enzyme';
import Card from './index';

describe('Card ', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Card />);
  });
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
