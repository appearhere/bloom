import React from 'react';
import ReactDOM from 'react-dom';
import EdgeFade from './EdgeFade';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <EdgeFade><span /></EdgeFade>,
    div
  );
});