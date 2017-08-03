import React from 'react';
import ReactDOM from 'react-dom';
import Typewriter from './Typewriter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Typewriter>foo</Typewriter>,
    div
  );
});
