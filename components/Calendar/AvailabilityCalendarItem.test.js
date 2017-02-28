import React from 'react';
import { render } from 'react-dom';

import AvailabilityCalendarItem from './AvailabilityCalendarItem';

describe('AvailabilityCalendarItem', () => {
  it('renders with a date without crashing', () => {
    const div = document.createElement('div');
    render(<AvailabilityCalendarItem />, div);
  });
});