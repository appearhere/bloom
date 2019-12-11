import React from 'react';
import ReactDOM, { render } from 'react-dom';

import SuccessStoryCardDesktop from './SuccessStoryCardDesktop';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<SuccessStoryCardDesktop />, div);
});
