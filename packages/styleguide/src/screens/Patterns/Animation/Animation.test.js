import React from 'react';
import { render } from 'react-dom';

import Animation from './Animation';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Animation />, div);
});
