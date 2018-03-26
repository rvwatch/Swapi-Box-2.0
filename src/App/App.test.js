import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './index';
import {
  mockSelectedCard1,
  mockSelectedCard2,
  mockSelectedCard3,
  mockFavorites
} from '../apiCalls/MockedData';

describe('App ', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('toggleFavorites ', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should have a default favorites state of an empty array', () => {
    expect(wrapper.state().favorites).toEqual([]);
  });

  it('should add selected cards to favorites', () => {
    wrapper.instance().toggleFavorites(mockSelectedCard1);
    expect(wrapper.state().favorites).toEqual([mockSelectedCard1]);

    wrapper.instance().toggleFavorites(mockSelectedCard2);
    wrapper.instance().toggleFavorites(mockSelectedCard3);
    expect(wrapper.state().favorites).toEqual(mockFavorites);
  });

  it('should remove the card if it is already favorited', () => {
    expect(wrapper.state().favorites).toEqual([]);
    wrapper.instance().toggleFavorites(mockSelectedCard1);
    expect(wrapper.state().favorites).toEqual([mockSelectedCard1]);
    wrapper.instance().toggleFavorites(mockSelectedCard1);
    expect(wrapper.state().favorites).toEqual([]);
  });
});
