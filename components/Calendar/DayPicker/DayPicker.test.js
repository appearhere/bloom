import React from 'react';
import { render } from 'react-dom';

import DayPicker from './DayPicker';

describe('DayPicker', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<DayPicker />, div);
  });
});