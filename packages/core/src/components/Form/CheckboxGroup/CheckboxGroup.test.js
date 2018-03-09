import React from 'react';
import { render } from 'react-dom';

import CheckboxGroup from './CheckboxGroup';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<CheckboxGroup>{checkbox => checkbox({ value: 0, name: '' })}</CheckboxGroup>, div);
});
