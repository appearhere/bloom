import React from 'react';
import { render } from 'react-dom';

import Control from './Control';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Control>button</Control>, div);
});
