import React from 'react';
import { render } from 'react-dom';
import Roll from './Roll';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <Roll><span id="lol" /></Roll>,
    div
  );
});
