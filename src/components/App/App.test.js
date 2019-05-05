import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

const data = Object.freeze([
  `First`,
  `Second`,
]);

it(`App renders correctly`, () => {
  const tree = renderer
    .create(<App data={data} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
