import React from 'react';
import {mount} from 'enzyme';
import Places from './Places';

const offers = Object.freeze([
  {
    price: 120,
    title: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
  },
  {
    price: 110,
    title: `Wood and stone place`,
    type: `Apartment`,
  },
  {
    price: 190,
    title: `Canal View Prinsengracht`,
    type: `Apartment`,
  },
  {
    price: 100,
    title: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
  },
]);

it(`Should create Places`, () => {
  const fn = jest.fn();
  const wrapper = mount(<Places places={offers} onClick={fn} />);
  expect(wrapper.find(`.place-card`).length).toBe(offers.length);
});



