import React from 'react';
import {render} from 'react-dom';
import App from './components/App/App';
import offers from './mocks/offers';

render(<App data={offers} />, document.getElementById(`root`));
