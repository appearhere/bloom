import React from 'react';
import { render } from 'react-dom';

import EditorialCard from './EditorialCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<EditorialCard title="" src="" />, div);
});