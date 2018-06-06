import React from 'react';
import { render } from 'react-dom';

import DismissablePanel from './DismissablePanel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<DismissablePanel />, div);
});
