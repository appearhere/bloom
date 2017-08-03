import React from 'react';
import ReactDOM from 'react-dom';

import PictureCard from './PictureCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <PictureCard
      src="#"
    />,
    div
  );
});
