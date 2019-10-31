import React from 'react';
import { render } from 'react-dom';

import CollapsibleRow from './CollapsibleRow';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <CollapsibleRow />,
    div,
  );
});
