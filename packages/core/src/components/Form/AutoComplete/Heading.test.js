import React from 'react';
import { render } from 'react-dom';

import Heading from './Heading';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Heading />, div);
});
