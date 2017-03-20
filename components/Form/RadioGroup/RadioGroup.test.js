import React from 'react';
import { render } from 'react-dom';

import RadioGroup from './RadioGroup';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <RadioGroup>{ radio => radio({ value: 0, name: '' }) }</RadioGroup>,
    div
  );
});