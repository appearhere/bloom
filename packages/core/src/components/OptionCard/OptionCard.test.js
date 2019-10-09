import React from 'react';
import { render } from 'react-dom';

import OptionCard from './OptionCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<OptionCard />, div);
});
