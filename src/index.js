import React from 'react';
import {render} from 'react-dom';
import App from './components/App/App';

const titles = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`];

render(<App data={titles} />, document.getElementById(`root`));
