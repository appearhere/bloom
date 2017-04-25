import React from 'react';
import { render } from 'react-dom';
import SpaceGroupMarker from './SpaceGroupMarker';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<SpaceGroupMarker group={ [] } />, div);
});
