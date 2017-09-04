import React from 'react';
import { render } from 'react-dom';

import HeartBtn from './HeartBtn';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<HeartBtn />, div);
});
