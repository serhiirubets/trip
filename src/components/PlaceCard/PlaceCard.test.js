import React from 'react';
import PlaceCard from './PlaceCard';
import renderer from 'react-test-renderer';

it(`PlaceCard renders correctly`, () => {
  const tree = renderer
    .create(<PlaceCard title="Some title" price={40} type="Apartment" onClick={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
