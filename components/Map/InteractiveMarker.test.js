import React from 'react';
import { render } from 'react-dom';
import InteractiveMarker from './InteractiveMarker';

const MarkerComponent = () => <button />;

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<InteractiveMarker id={ 1 } MarkerComponent={ MarkerComponent } />, div);
});
