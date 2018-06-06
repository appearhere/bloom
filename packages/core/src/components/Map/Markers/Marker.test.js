import React from 'react';
import { render } from 'react-dom';
import Marker from './Marker';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Marker>test</Marker>, div);
});
