import React from 'react';
import { render } from 'react-dom';

import IconLabel from './IconLabel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <IconLabel iconName="bogroll">
      Label
    </IconLabel>,
    div
  );
});