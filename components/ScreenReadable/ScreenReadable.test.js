import React from 'react';
import ReactDOM from 'react-dom';

import ScreenReadable from './ScreenReadable';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ScreenReadable>hide me</ScreenReadable>, div);
});