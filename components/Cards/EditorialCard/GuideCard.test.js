import React from 'react';
import { render } from 'react-dom';

import GuideCard from './GuideCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<GuideCard title="" src="" />, div);
});