import React from 'react';
import { render } from 'react-dom';

import Introduction from './Introduction';

it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Introduction />, div);
});
