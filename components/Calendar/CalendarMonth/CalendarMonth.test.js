import React from 'react';
import { render } from 'react-dom';

import CalendarMonth from './CalendarMonth';

it('renders with a date without crashing', () => {
  const div = document.createElement('div');
  render(<CalendarMonth />, div);
});