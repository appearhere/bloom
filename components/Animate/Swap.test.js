import React from 'react';
import ReactDOM from 'react-dom';

import Swap from './Swap';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Swap />, div);
});
