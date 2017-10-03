import React from 'react';
import { render } from 'react-dom';

import Panels from './Panels';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Panels />, div);
});
