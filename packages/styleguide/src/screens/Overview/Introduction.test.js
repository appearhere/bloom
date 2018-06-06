import React from 'react';
import { render } from 'react-dom';

import Introduction from './Introduction';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Introduction />, div);
});
