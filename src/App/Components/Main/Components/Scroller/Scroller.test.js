import React from 'react';
import { shallow } from 'enzyme';
import Scroller from './index';
import { mockSingleFilm } from '../../../../../apiCalls/MockedData';

describe('Scroller ', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Scroller scrollText={mockSingleFilm} />);
  });
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
