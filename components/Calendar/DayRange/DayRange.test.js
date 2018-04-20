import React from 'react';
import { render } from 'react-dom';

import DayRange from './DayRange';

describe('DayRange', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<DayRange />, div);
  });
});
