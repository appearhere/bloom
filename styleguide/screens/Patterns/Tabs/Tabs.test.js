import React from 'react';
import { render } from 'react-dom';

import Tabs from './Tabs';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Tabs />, div);
});
