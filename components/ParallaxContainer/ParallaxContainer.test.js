import React from 'react';
import ReactDOM from 'react-dom';
import ParallaxContainer from './ParallaxContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ParallaxContainer><span /></ParallaxContainer>,
    div
  );
});
