import React from 'react';
import { render } from 'react-dom';
import MarkerContainer from './MarkerContainer';

const MarkerComponent = () => <button />;

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<MarkerContainer MarkerComponent={ MarkerComponent } />, div);
});
