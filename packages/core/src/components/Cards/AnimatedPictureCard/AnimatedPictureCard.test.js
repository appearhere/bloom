import React from 'react';
import ReactDOM from 'react-dom';

import AnimatedPictureCard from './AnimatedPictureCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AnimatedPictureCard src="#" href="#" title="" />, div);
});
