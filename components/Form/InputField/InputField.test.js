import React from 'react';
import { render } from 'react-dom';

import InputField from './InputField';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <InputField id="">
      <input />
    </InputField>,
    div,
  );
});
