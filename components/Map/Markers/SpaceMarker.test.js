import React from 'react';
import { render } from 'react-dom';
import SpaceMarker from './SpaceMarker';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<SpaceMarker />, div);
});
