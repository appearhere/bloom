import React from 'react';
import { render } from 'react-dom';

import IconInput from './IconInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<IconInput iconName="bogroll" />, div);
});