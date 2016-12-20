import React from 'react';
import { render } from 'react-dom';

import noop from '../../../utils/noop';
import RadioGroup from './RadioGroup';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <RadioGroup name="">
      { noop }
    </RadioGroup>,
    div
  );
});

it('renders with custom radio component', () => {
  const div = document.createElement('div');
  render(
    <RadioGroup name="" InputComponent="span">
      { noop }
    </RadioGroup>,
    div
  );
});