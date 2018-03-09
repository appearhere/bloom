import React from 'react';
import { render } from 'react-dom';

import Buttons from './Buttons';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Buttons />, div);
});
