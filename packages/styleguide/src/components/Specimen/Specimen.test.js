import React from 'react';
import { render } from 'react-dom';

import Specimen from './Specimen';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Specimen />, div);
});
