import React from 'react';
import { render } from 'react-dom';

import SiblingTransition from './SiblingTransition';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<SiblingTransition route="" />, div);
});