import React from 'react';
import ReactDOM, { render } from 'react-dom';

import IconLink from './IconLink';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<IconLink
    iconName="arrow-right"
    inverted
    href="http://www.google.com"
    target="_parent"
    text="Read More"
  />, div);
});
