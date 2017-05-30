import React from 'react';
import ReactDOM from 'react-dom';

import generateData from './libs/generateData';
import App from './components/app';

import './styles/main.scss';

console.log(generateData({
  count: 400,
  end: new Date(2017, 0, 26),
  start: new Date(2017, 0, 15),
}));

ReactDOM.render(
  <App />,
  document.getElementById('app-container'),
);
