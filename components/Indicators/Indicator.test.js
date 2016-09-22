import React from 'react';
import ReactDOM from 'react-dom';

import Indicator from './Indicator';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Indicator />, div);
});