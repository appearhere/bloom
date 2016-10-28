import React from 'react';
import ReactDOM from 'react-dom';

import ImageOverlayCard from './ImageOverlayCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ImageOverlayCard image="">
      <span />
    </ImageOverlayCard>,
    div
  );
});