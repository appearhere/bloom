import React from 'react';
import { render } from 'react-dom';

import InputField from './InputField';

const Input = () => <input />;

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <InputField
      id=""
    >
      <Input />
    </InputField>,
    div
  );
});
