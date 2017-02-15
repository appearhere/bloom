import React from 'react';
import { render } from 'react-dom';

import CalendarItem from './CalendarItem';

it('renders with a date without crashing', () => {
  const div = document.createElement('div');
  render(<CalendarItem />, div);
});

it('renders without a date without crashing', () => {
  const div = document.createElement('div');
  render(<CalendarItem day={ null } />, div);
});
