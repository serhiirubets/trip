import React from 'react';
import PlaceCard from './PlaceCard';
import renderer from 'react-test-renderer';

const data = Object.freeze([
  `First`,
  `Second`,
]);

it(`PlaceCard renders correctly`, () => {
  const tree = renderer
    .create(<PlaceCard data={data}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
