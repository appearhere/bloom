import React from 'react';
import ReactDOM from 'react-dom';

import Sunrise from './Sunrise';

jest.mock('react-on-visible');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Sunrise />, div);
});
