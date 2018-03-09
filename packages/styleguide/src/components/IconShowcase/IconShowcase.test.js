import React from 'react';
import { render } from 'react-dom';

import IconShowcase from './IconShowcase';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<IconShowcase name="Appear Here" value="appearhere" />, div);
});
