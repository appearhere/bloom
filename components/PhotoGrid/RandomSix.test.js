import React from 'react';
import { render } from 'react-dom';

import RandomSix from './RandomSix';

it('renders without crashing', () => {
  const children = [{
    src: '',
    alt: '',
  }, {
    src: '',
    alt: '',
  }, {
    src: '',
    alt: '',
  }, {
    src: '',
    alt: '',
  }, {
    src: '',
    alt: '',
  }, {
    src: '',
    alt: '',
  }];

  const div = document.createElement('div');
  render(
    <RandomSix children={children} />,
    div
  );
});