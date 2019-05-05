import React from 'react';
import {shallow} from 'enzyme';
import PlaceCard from './PlaceCard';

it(`Should create PlaceCard`, () => {
  const fn = jest.fn();
  const wrapper = shallow(<PlaceCard title="Some title" onClick={fn} />);
  expect(wrapper.find(`.place-card`).length).toBe(1);
});

it(`Should call onClick props`, () => {
  const fn = jest.fn();
  const wrapper = shallow(<PlaceCard title="Some title" onClick={fn} />);
  const link = wrapper.find(`.place-card__name a`);
  link.simulate(`click`, {prevendDefault: () => {}});

  expect(fn).toHaveBeenCalledTimes(1);
});


