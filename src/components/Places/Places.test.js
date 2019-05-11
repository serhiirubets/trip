import React from 'react';
import Places from './Places';
import renderer from 'react-test-renderer';

const offers = [
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
];

it(`PlaceCard renders correctly`, () => {
  const tree = renderer
    .create(<Places places={offers} onClick={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
