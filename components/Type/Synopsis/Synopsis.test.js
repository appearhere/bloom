import React from 'react';
import { render } from 'react-dom';
import Synopsis from './Synopsis';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Synopsis title="">hello, world</Synopsis>, div);
});
